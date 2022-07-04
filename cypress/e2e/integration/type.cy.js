/// <refence="cypress" />

let item = "Dress"
let description = "Summer"
it('Test type ', () => {
    cy.visit('/?id_category=5&controller=category')
        .get('#search_query_top')
        .type('Dress')
        .type('{selectAll}Red{enter}')
});

it.only('Another test type ', () => {
    cy.visit('/?id_category=5&controller=category')
        .get('#search_query_top')
        .type(`${item} ${description} {enter}`)
});
// backspace
// movestart