/// <reference types="cypress" />

it('Cy Visit test', () => {
    cy.visit('/?id_category=5&controller=category')
        cy.get('#left_column')
            .as('filtros')
        .get('@filtros')
            .contains('Orange')
        .get('@filtros')
            .contains('Cotton') 
});