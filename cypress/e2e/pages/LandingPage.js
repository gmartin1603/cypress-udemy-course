class LandingPage {
  getSignIn() {
    return "Sign in"
  }

  clickSigninButton() {
    cy.contains(this.getSignIn()).click()
  }
}

export default LandingPage