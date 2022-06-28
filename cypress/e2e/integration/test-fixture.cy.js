it('test fixture', () => {
    cy.fixture('example').then(examples => {
        this.examples = examples;
    })
    cy.log(this.examples.name)
    cy.visit('https://example.cypress.io/todo')

});