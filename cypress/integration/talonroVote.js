describe('TalonRO Vote', function() {
	it('Votes for captcha free ranking sites', function() {
		cy.clearCookies()
		cy.clearLocalStorage()
		cy.visit('https://panel.talonro.com')
		cy.get('#auth').type('')
		cy.get('#password').type('')
		cy.get('#remember_me_checkbox').click()
		cy.get('#elSignIn_submit').click()
		cy.visit('https://panel.talonro.com/voting/')
		cy.get(':nth-child(4) > :nth-child(1) > form > .button').click()
	})
})
