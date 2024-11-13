"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //async up whenever we have to create data use

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  //async down is generally for removing data
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cities");
  },
};
