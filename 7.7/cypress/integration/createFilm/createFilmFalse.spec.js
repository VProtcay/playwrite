const selector = require("../../fixtures/selectors.json");
const seats = require("../../fixtures/seats.json");
const prices = require("../../fixtures/prices.json");
const testData = require("../../fixtures/testData.json");

it("Create film fals", () => {
  cy.visit(testData.adminUrl);
  cy.login();

  cy.get(selector.addFilm).click();
  cy.get(selector.filmName).type("newFilm");
  cy.get(selector.filmTime).type(190);
  cy.get(selector.filmType).type("trash");
  cy.get(selector.filmCountry).type("Poland");

  const filepath = "../../cypress/fixtures/85.png";
  cy.get(selector.poster).click().attachFile(filepath);
  cy.contains("85").should("be.visible");
});
