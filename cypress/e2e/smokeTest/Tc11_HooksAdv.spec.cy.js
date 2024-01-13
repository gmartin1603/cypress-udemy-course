/// <reference types="Cypress" />
 
describe('Hooks Conduit', function () {
 
  beforeEach(function () {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
  })

  it('Search in Admin Tab with Username',function(){
      cy.contains('Admin').click()
      cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type('Admin')
      cy.get('button[type="submit"]').click()
  })

  it('Search in Admin Tab with Employee Name',function(){
      cy.contains('Admin').click()
      cy.get('input[placeholder="Type for hints..."]').type('Chenzira Chuki')
      cy.get('button[type="submit"]').click()
  })

  afterEach(function () {
      cy.get('.oxd-userdropdown-tab').click()
      cy.contains('Logout').click()
  })
})