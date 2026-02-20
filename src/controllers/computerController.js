import { PrismaClient } from "../../generated/prisma/client.js";
import { adapter } from "../../prisma/adapter.js";
const prisma = new PrismaClient({ adapter });



/*--------------- AJOUTER UN ORDINATEUR-------------------- */
export async function addComputer(req, res) {
    try {
        const { adresseMac } = req.body
        await prisma.computer.create({
            data:{
                adresseMac,
                user:{
                    connect:{
                        id: req.user.id,
                    }
                }
            }
        })
        res.redirect("/")
    } catch (error) {
        console.log(error);
        res.render("pages/home.twig",{
            error:"Erreur lors la creation de l'ordinateur"
        })
        
        
    }
}

/*---------------Supprimer un ordinateur---------------------*/

export async function deleteComputer(req, res) {
    try {
        await prisma.computer.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.redirect("/")
    } catch (error) {
        console.log(error);
        res.render("pages/home.twig", {
            error: "Erreur lors de la suppression d'un ordinateur"
        })


    }
}

/*---------------Modifier un ordinateur---------------------*/

export async function getUpdateComputer(req, res) {
  try {
    const id = parseInt(req.params.id);

    // sécurité (recommandé) : vérifier que l'employé appartient à l'entreprise
    const computer = await prisma.computer.findFirst({
      where: { id, companyId: req.user.id },
    });

    if (!computer) return res.redirect("/");

    // Recharger les listes pour afficher home normalement
    const employes = await prisma.computer.findMany({
      where: { companyId: req.user.id },
    });

    const computers = await prisma.computer.findMany({
      where: { companyId: req.user.id },
    });

    res.render("pages/home.twig", {
      directorName: req.user.directorName,
      computers,
      editComputer: computer,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
}




export async function postUpdateComputer(req, res) {
  try {
    const id = Number(req.params.id);

    // sécurité
    const computer = await prisma.computer.findFirst({
      where: { id, companyId: req.user.id },
    });
    if (!computer) return res.redirect("/");

    await prisma.computer.update({
      where: { id },
      data: {
        adresseMac: req.body.adresseMac,
      },
    });

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.render("pages/home.twig", {
      directorName: req.user?.directorName,
      error: "Une erreur est survenue lors de la modification de l'employé",
    });
  }
}

/*---------------Assigner un ordinateur---------------------*/

export async function assignComputer(req, res) {
  try {

    const computerId = Number(req.body.computerId);
    const employeId = Number(req.body.employeId);

    const computer = await prisma.computer.findFirst({
      where: { id: computerId, companyId: req.user.id },
    });

    const employe = await prisma.employe.findFirst({
      where: { id: employeId, companyId: req.user.id },
      include: { computer: true },
    });

    if (!computer || !employe) return res.redirect("/");

    if (employe.computer) {
      return res.redirect("/");
    }

    const updated = await prisma.computer.update({
      where: { id: computerId },
      data: { 
        employe: {
          connect: {
            id: employeId
          }
        }
      },
    });

    return res.redirect("/");
  } catch (error) {
    console.log("ASSIGN ERROR =", error);
    return res.redirect("/");
  }
}



export async function unassignComputer(req, res) {
  try {
    const id = Number(req.params.id);

    await prisma.computer.update({
      where: { id },
      data: {
        employeId: null  // 👈 on casse la relation
      }
    });

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
}