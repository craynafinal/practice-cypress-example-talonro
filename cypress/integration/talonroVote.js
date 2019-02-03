/*describe('TalonRO Vote', function() {
  it('Votes for captcha free ranking sites', function() {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://panel.talonro.com')
    cy.get('#auth').type('')
    cy.get('#password').type('')
    cy.get('#remember_me_checkbox').click()
    cy.get('#elSignIn_submit').click()
    cy.visit('https://panel.talonro.com/voting/')
    cy.get(':nth-child(4) > :nth-child(1) > form > .button').click({force:true})
    cy.visit('http://www.xtremetop100.com/in.php?site=1132205111')
    cy.get('[type="submit"]').click()
  })
})*/

describe('Test', function() {
  it('Test', function() {
    cy.visit('https://google.com')
  })
})

