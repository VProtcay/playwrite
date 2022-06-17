const selector = require("../../fixtures/selectors.json");
const seats = require("../../fixtures/seats.json");
const prices = require("../../fixtures/prices.json");
const testData = require("../../fixtures/testData.json");

it("Should be added to the schedule", () => {
  cy.visit(testData.adminUrl);
  cy.login();

  cy.get(
    '[draggable="true"][data-film-id="80"] > .conf-step__movie-title'
  ).drag('[data-hall-id="71"] > .conf-step__seances-timeline');
  Cypress.on("uncaught:exception", () => {
    return false;
  });
});
