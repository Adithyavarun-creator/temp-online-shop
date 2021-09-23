import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
  <main>
    <PageHero title="about"/>
    <Wrapper className="page section section-center">
    <img src={aboutImg} alt="nice desk"/>
    <article>
      <div className="title">
      <h2>Our story</h2>
      <div className="underline"></div>
      </div>
      <p>Lorem ipsum dolor sit amet. Ut maiores inventore ut molestias officia ut quaerat asperiores qui velit dolorem. Et fugiat inventore id odit quisquam rem excepturi sapiente non quisquam voluptatem harum fugiat et facere rerum non cumque dolor.

Aut placeat perferendis aut velit porro ut sint quod. Ad harum dolor in corrupti debitis qui minus tempora id dolor distinctio At sunt labore et repellendus praesentium et iusto consequatur. Et officia consequatur qui voluptatem laudantium aut vitae deserunt! In iure pariatur est repellendus repellendus a Quis voluptatibus.

Qui quas accusamus hic pariatur internos qui dignissimos explicabo nam autem amet ab voluptatem Quis ea fugit debitis quo quaerat rerum. Qui quidem magnam rem natus sunt sit explicabo labore non porro dolore.</p>
    </article>
    </Wrapper>
  </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
