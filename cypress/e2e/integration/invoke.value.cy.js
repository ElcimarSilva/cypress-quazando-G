/// <refence="cypress" />
it('Test invoke value', () => {
    cy.visit('/?id_category=5&controller=category')
        .get('#newsletter-input')
            .invoke('val')
            .should('equal', 'Enter your e-mail')
});

it.only('Test manupulando value', () => {
    cy.visit('/?id_category=5&controller=category')
        .get('#newsletter-input')
            .then((inputEmail) => {
                let textMastaraEmail = inputEmail.val()
                textMastaraEmail = textMastaraEmail.toLocaleLowerCase()
                expect(textMastaraEmail).equal('enter your e-mail')
                cy.log(inputEmail.val())
                cy.log(textMastaraEmail)
            });
});