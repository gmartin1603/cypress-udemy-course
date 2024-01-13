/// <reference types="cypress" />

describe("Dropdown Functionality", function () {
  it("Handling different dropdown", function () {
    //Basic Dropdown
    cy.visit("https://www.orangehrm.com/orangehrm-30-day-trial/");
    cy.get("#Form_submitForm_Country")
      .select("India")
      .should("have.value", "India");

    //Modern Dropdown
    cy.get("#Form_submitForm_Industry")
      .select("Education")
      .should("have.value", "Education");
  });
});
