class LoginPage {
  getEmail() {
    return 'input[type="email"]'
  }

  getPassword() {
    return 'input[type="password"]'
  }

  getSubmitButton() {
    return 'button[type="submit"]'
  }

  enterEmail(value) {
    cy.get(this.getEmail()).type(value)
  }

  enterPassword(value) {
    cy.get(this.getPassword()).type(value)
  }

  clickSubmitButton() {
    cy.get(this.getSubmitButton()).click()
  }
}

export default LoginPage