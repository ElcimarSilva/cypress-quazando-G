/// <refence="cypress" />
it('Test click', () => {
    cy.visit('/?id_category=5&controller=category')
        .get('.product_img_link > .replace-2x')
            .click()
});

it('Click com cordenada', () => {
    cy.visit('/?id_category=5&controller=category')
        .get('.product_img_link > .replace-2x')
                .click(15,30)
});

it('Click com cordenada a direita', () => {
    cy.visit('/?id_category=5&controller=category')
        .get('.product_img_link > .replace-2x')
                .click('right')
});

it.only('Click com nova aba', () => {
    cy.visit('/?id_category=5&controller=category')
        .get('.product_img_link > .replace-2x')
                .click({ctrlKey:true})
});

//Outras opções
// .dbclick()
// .rightclick()