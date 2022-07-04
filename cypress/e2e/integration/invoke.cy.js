/// <refence="cypress" />
it('Test invoke', () => {
    cy.visit('/?id_category=5&controller=category')
     .get('#layered_block_left > .title_block')
        .invoke('text')
        .should('equal', 'Catalog')
});