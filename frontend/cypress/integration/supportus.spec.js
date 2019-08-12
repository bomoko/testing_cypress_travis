/// <reference types="Cypress" />

context('Support Us Page - BlockTeasers', () => {
  beforeEach(() => {
    cy.viewport(1366, 768)    // Set viewport to 1366px wide x 768px high
  })

  it('cy.location() - get window.location', () => {
    // https://www.paraplegie.ch/de/uns-unterstuetzen
    cy.visit('/de/uns-unterstuetzen')
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/de/uns-unterstuetzen')
    })
  })

  //Block teaser
  // Check that there are 3 BlockTeaser--cta
  it('cy.get() - see if elements are on the screen by finding them with a class', () => {
    cy.get('.BlockTeaserList--list')
      .children()
      .should('have.length', 3)

    cy.get('.BlockTeaserList--list')
      .find('li')
      .find('span')
      .should('have.class', 'BlockTeaser--cta')
    })

  it('cy.get() - On click, the 1st links to /node/460', () => {
  // On click, the 1st links to /node/460 = https://www.paraplegie.ch/de/mitglied-werden
    cy.get('.BlockTeaserList--list')
      .find('li').first()
      .find('a')
      .should('have.attr', 'href', '/de/mitglied-werden')
      .click()
  })

  it('cy.location() - get window.location', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/de/mitglied-werden')
    })

    cy.get('link[rel=shortlink]')
    .should('have.attr', 'href', Cypress.config().baseUrl + '/de/node/460')
  })


  it('cy.get() - On click, the 2nd links to /node/717', () => {
    cy.visit('/de/uns-unterstuetzen')
    cy.location().should((location) => {
      expect(location.href).to.eq(Cypress.config().baseUrl + '/de/uns-unterstuetzen')
    })
    //On click, the 2nd links to /node/717 = https://www.paraplegie.ch/de/uns-unterstuetzen/spenden
    cy.get('.BlockTeaserList--list')
      .find('li').first().next()
      .find('a')
      .should('have.attr', 'href', '/de/uns-unterstuetzen/spenden')
      .click()
  })

  it('cy.location() - get window.location', () => {
    cy.location().should((location) => {
      expect(location.href).to.eq(Cypress.config().baseUrl + '/de/uns-unterstuetzen/spenden')
      expect(location.pathname).to.eq('/de/uns-unterstuetzen/spenden')
    })

    cy.get('link[rel=shortlink]')
      .should('have.attr', 'href', Cypress.config().baseUrl + '/de/node/717')
    })

  it('cy.get() - On click, the 3rd links to /node/722', () => {
    cy.visit('/de/uns-unterstuetzen')
    cy.location().should((location) => {
      expect(location.href).to.eq(Cypress.config().baseUrl + '/de/uns-unterstuetzen')
    })
    // On click, the 3rd links to /node/722 = https://www.paraplegie.ch/de/uns-unterstuetzen/nachlaesse
    cy.get('.BlockTeaserList--list')
      .find('li').last()
      .find('a')
      .should('have.attr', 'href', '/de/uns-unterstuetzen/nachlaesse')
      .click()
  })

  it('cy.location() - get window.location', () => {
    cy.location().should((location) => {
      expect(location.href).to.eq(Cypress.config().baseUrl + '/de/uns-unterstuetzen/nachlaesse')
      expect(location.pathname).to.eq('/de/uns-unterstuetzen/nachlaesse')
    })

    cy.get('link[rel=shortlink]')
      .should('have.attr', 'href', Cypress.config().baseUrl + '/de/node/722')

  })
})


// CTA buttons "Become a member" and "Donate" are present
// CTA button "Become a member" is linked to /node/460
// CTA button "Donate" is linked to /node/717
context('Support Us Page - CTAS', () => {
  beforeEach(() => {
    cy.viewport(1366, 768)    // Set viewport to 1366px wide x 768px high
  })

  it('cy.location() - get window.location', () => {
    // https://www.paraplegie.ch/de/uns-unterstuetzen
    cy.visit('/de/uns-unterstuetzen')
    cy.location().should((location) => {
      expect(location.href).to.eq(Cypress.config().baseUrl  + '/de/uns-unterstuetzen')
      expect(location.pathname).to.eq('/de/uns-unterstuetzen')
    })
  })

  //Block teaser
  // Check that there are 3 BlockTeaser--cta
  it('cy.get() - see if CTA elements are on the screen in main header', () => {
    cy.get('.SiteHeader--mainNavWrapper .MainNav--right')
      .children()
      .should('have.length', 2)

    cy.get('.SiteHeader--mainNavWrapper .MainNav--right')
      .find('a')
      .should('have.class', 'Button')
  })

  // it('cy.get() - Mitglied werden CTA with link to /node/460', () => {
  //   cy.get('.MainNav--right')
  //     .find('a.Button').last()
  //     .should('have.attr', 'href', '/de/node/460')
  // })

  // it('cy.get() - SPENDEN CTA with link to /node/717', () => {
  //   cy.get('.MainNav--right')
  //     .find('a.Button').first()
  //     .should('have.attr', 'href', '/de/node/717')
  // })

  it('cy.get() - Scrolls Sticky header into view and finds CTS buttons', () => {
    cy.get('.HeaderSticky--right').scrollIntoView() // Scrolls 'footer' into view
      cy.get('.HeaderSticky--right')
      .children()
      .should('have.length', 2)

    cy.get('.HeaderSticky--right')
      .find('a')
      .should('have.class', 'Button')
  })

  // it('cy.get() - Mitglied werden CTA with link to /node/460', () => {
  //   cy.get('.HeaderSticky--right')
  //     .find('a.Button').last()
  //     .should('have.attr', 'href', '/de/node/460')
  // })

  // it('cy.get() - SPENDEN CTA with link to /node/717', () => {
  //   cy.get('.HeaderSticky--right')
  //     .find('a.Button').first()
  //     .should('have.attr', 'href', '/de/node/717')
  // })

})
