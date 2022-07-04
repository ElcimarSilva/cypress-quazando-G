/// <refence="cypress" />
it('Test then', () => {
    cy.visit('/?id_category=5&controller=category')
     .get('.right-block > .content_price > .price')
        .then((preco) => {
            // let precoFormatado = preco.text().replace('/t', '').replace('/n', '').trim()
                // .expect(precoFormatado).to.equal('$16.51')
                cy.log(preco.text())
     });
});