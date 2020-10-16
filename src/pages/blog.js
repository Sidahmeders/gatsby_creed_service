import { graphql } from "gatsby"
import React from "react"
import Link from 'gatsby-link'
import Layout from '../layout/layout'

const BlogPage = ({data}) => (
    <Layout>
    <h1>Bolgs</h1>
    {
        data.allMarkdownRemark.edges.map(post => {
          let item = post.node.frontmatter;
          return (
            <div key={post.node.id}>
                <br />
                <h3>{item.title}</h3>
                <small>posted by: {item.author}</small>
                <br />
                <Link to={item.path}>Read more.</Link>
                <br />
                <hr />
            </div>
          );
        })
    }
    </Layout>
)

export const PageQuery = graphql`
  query BlogInedxQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              author
            }
          }
        }
      }
  }
`

export default BlogPage