import { PrismaClient } from "../../generated/prisma/client.js";
import { adapter } from "../../prisma/adapter.js";
const prisma = new PrismaClient({ adapter });


export async function homeComputerEmploye(req, res) {
  try {
    const computers = await prisma.computer.findMany({
      where: { companyId: req.user.id },
      include: { employe: true }
    })

    const employes = await prisma.employe.findMany({
      where: { companyId: req.user.id },
      include: { computer: true }
    });
    // affiche la page d'accueil en lui envoyant la liste des ordinateurs et des employés

    res.render("pages/home.twig", {
      directorName: req.user.directorName,
      computers,
      employes,
      user: req.user
    })

  } catch (error) {
    console.log(error);
    res.render("pages/home.twig", {
      error: "Erreur lors de la récupérations des ordinateurs et/ou des employés"
    })

  }
}


