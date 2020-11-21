import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

export default function SlicemasterPage({ data: { slicemaster } }) {
  return (
    <>
      <SEO title={slicemaster.name} image={slicemaster.image.asset.src} />
      <div className="center">
        <Img fluid={slicemaster.image.asset.fluid} />
        <h2>
          <span className="mark">{slicemaster.name}</span>
        </h2>
        <p>{slicemaster.description}</p>
      </div>
    </>
  );
}

export const query = graphql`
  query SlicemasterQuery($id: String!) {
    slicemaster: sanityPerson(id: { eq: $id }) {
      name
      id
      description
      slug {
        current
      }
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
