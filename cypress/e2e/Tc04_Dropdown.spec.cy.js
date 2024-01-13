/// <reference types="cypress" />

describe("Dropdown Functionality", function () {
  it("Handling static dropdown", function () {
    //Static Dropdown
    cy.visit("https://seleniumbase.io/demo_page");
    cy.get("#mySelect")
      .select("Set to 100%")
      .should("have.value", "100%");
  });

  it("Handling dynamic dropdown", function () {
    //Dynamic Dropdown
    cy.visit("https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx");
    cy.get(".rddlFakeInput").click();
    cy.get('.rddlList > :nth-child(3)').click();
  });

  it("Handling multiple dropdown", function () {
    //Multiple Dropdown
    cy.visit("https://admirhodzic.github.io/multiselect-dropdown/demo.html");
    cy.get('.col > :nth-child(7)').click();
    cy.get(':nth-child(7) > .multiselect-dropdown-list-wrapper > .multiselect-dropdown-list > :nth-child(2) > input').click();
    cy.get(':nth-child(7) > .multiselect-dropdown-list-wrapper > .multiselect-dropdown-list > :nth-child(3) > input').click();
    cy.get(':nth-child(7) > .multiselect-dropdown-list-wrapper > .multiselect-dropdown-list > :nth-child(5) > input').click();
  });
});
