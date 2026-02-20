/*
  Warnings:

  - You are about to drop the `CompanyUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Computer` DROP FOREIGN KEY `Computer_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `Employe` DROP FOREIGN KEY `Employe_companyId_fkey`;

-- DropIndex
DROP INDEX `Computer_companyId_fkey` ON `Computer`;

-- DropIndex
DROP INDEX `Employe_companyId_fkey` ON `Employe`;

-- DropTable
DROP TABLE `CompanyUser`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `companyName` VARCHAR(191) NOT NULL,
    `siretNumber` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `directorName` VARCHAR(191) NULL,

    UNIQUE INDEX `User_siretNumber_key`(`siretNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Computer` ADD CONSTRAINT `Computer_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employe` ADD CONSTRAINT `Employe_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
