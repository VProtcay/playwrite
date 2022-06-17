const selector = require("../fixtures/selectors.json");
const seats = require("../fixtures/seats.json");
const prices = require("../fixtures/prices.json");
const testData = require("../fixtures/testData.json");

Cypress.Commands.add("login", () => {
  cy.get('[for="email"] > .login__input').type("qamid@qamid.ru");
  cy.get('[for="pwd"] > .login__input').type("qamid");
  cy.get(".login__button").click();
});

Cypress.Commands.add("createHall", () => {
  cy.contains("Создать зал").click();
  cy.get(selector.hallNameField).type(testData.newHallallName);
  cy.get(selector.confHallButton).click();
});

Cypress.Commands.add("deleteHall", () => {
  cy.get('[data-hall-name="top2Hall"]').click({
    force: true,
  });
  cy.get("form > .conf-step__buttons > .conf-step__button-accent").click({
    force: true,
  });
});

require("@4tw/cypress-drag-drop");

import "cypress-file-upload";
import "@4tw/cypress-drag-drop";
