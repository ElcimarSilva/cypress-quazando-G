/// <refence="cypress" />

it('Test select name ', () => {
    cy.visit('/?id_category=5&controller=category')
        .get('#selectProductSort')
        .select('name:asc') // selecionando pelo value
       //selecionando pelo nome Price: Lowest first
});


it.only('Escolhendo multiplos selects ', () => {
    cy.visit('http://slimselectjs.com/?p=%2methods%2')
        .get('#slim-multi-select')
        .select(['best', 'ever'], {force: true})
});