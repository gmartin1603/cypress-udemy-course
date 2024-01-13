class SettingsPage {
  getLogoutButton() {
    return 'logout'
  }

  clickLogoutButton() {
    cy.contains(this.getLogoutButton()).click()
  }
}

export default SettingsPage