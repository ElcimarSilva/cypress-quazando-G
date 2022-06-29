it('test fixture', function() {
    cy.fixture('dev/example').then(examples => {
        examples = examples;
        cy.log(examples.name)
        cy.log(examples.email)
        cy.log(examples.body)
    })

});