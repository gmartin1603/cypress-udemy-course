/// <reference types="Cypress" />

import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SettingsPage from "../pages/SettingsPage";

describe("Page Object Model Implementation", function () {
  const landingPage = new LandingPage();
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const settingsPage = new SettingsPage();

	beforeEach(function () {
		cy.fixture("conduit_login").as("data");
    cy.visit("/");
	});

	it("Conduit - Valid Credentials", function () {

		// landingPage.visit();
		landingPage.clickSigninButton();
		loginPage.enterEmail(this.data.email);
		loginPage.enterPassword(this.data.password);
		loginPage.clickSubmitButton();
		homePage.clickSettingsButton();
		settingsPage.clickLogoutButton();
	});

	it("Conduit - Invalid Credentials", function () {
		// const landingPage = new LandingPage();
		// const loginPage = new LoginPage();

		// landingPage.visit();
		landingPage.clickSigninButton();
		loginPage.enterEmail(this.data.email);
		loginPage.enterPassword(this.data.passwordWrong);
		loginPage.clickSubmitButton();
		loginPage.checkErrorMessage();
	});
});
