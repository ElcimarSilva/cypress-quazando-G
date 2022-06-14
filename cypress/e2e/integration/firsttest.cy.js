/// <reference types="cypress" />

it('Cy Visit test', () => {
    cy.visit('/') //Precisa aprender definir uma base URL com cypress atualizado
    cy.visit('google.com.br')
});