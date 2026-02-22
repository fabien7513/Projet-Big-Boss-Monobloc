import { PrismaClient } from "../../generated/prisma/client.js";
import { adapter } from "../../prisma/adapter.js";
const prisma = new PrismaClient({ adapter }).$extends(hashPasswordExtension);
import bcrypt from "bcrypt"
import { hashPasswordExtension } from "../../prisma/extensions/hastPasswordExtension.js";

/*---------------Ajouter un employé---------------------*/

export async function addEmploye(req, res) {
    try {
        const { lastName, firstName, mail, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.employe.create({
            data: {
                lastName,
                firstName,
                mail,
                password: hashedPassword,
                user: {
                    connect: {
                        id: req.user.id
                    }
                }
            }
        })
        res.redirect("/")

    } catch (error) {
        console.log(error);
        res.render("pages/home.twig", {
            error: "Erreur lors la creation de l'ordinateur"
        })
    }
}

/*---------------Supprimer un employé---------------------*/

export async function deleteEmploye(req, res) {
    try {
        await prisma.employe.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.redirect("/")
    } catch (error) {
        console.log(error);
        res.render("pages/home.twig", {
            error: "Erreur lors de la suppression d'un employé"
        })


    }
}

/*---------------Modifier un employé---------------------*/

export async function getUpdateEmploye(req, res) {
  try {
    const id = parseInt(req.params.id);

    // sécurité (recommandé) : vérifier que l'employé appartient à l'entreprise
    const employe = await prisma.employe.findFirst({
      where: { id, companyId: req.user.id },
    });

    if (!employe) return res.redirect("/");

    // Recharger les listes pour afficher home normalement
    const employes = await prisma.employe.findMany({
      where: { companyId: req.user.id },
      orderBy: { lastName: "asc" },
    });

    const computers = await prisma.computer.findMany({
      where: { companyId: req.user.id },
      orderBy: { id: "desc" },
    });

    res.render("pages/home.twig", {
      directorName: req.user.directorName,
      employes,
      computers,
      editEmploye: employe, // 👈 plus simple que edit.employe
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
}

export async function postUpdateEmploye(req, res) {
  try {
    const id = Number(req.params.id);

    // sécurité
    const employe = await prisma.employe.findFirst({
      where: { id, companyId: req.user.id },
    });
    if (!employe) return res.redirect("/");

    await prisma.employe.update({
      where: { id },
      data: {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        mail: req.body.mail,
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
