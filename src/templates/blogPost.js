import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

const Template = ({data}) => {
    const post = data.markdownRemark

    return (
        <div>
            <Link to="/blog">Go Back</Link>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted By: {post.frontmatter.author}</h4>
            <div dangerouslySetInnerHTML={{__html: post.html}} ></div>
        </div>
    )
}

export const postQyery = graphql`
  query BlogPostByPath($path: String!) {
      markdownRemark(frontmatter: {path: {eq: $path}}) {
          html,
          frontmatter {
              path
              title
              author
          }
      }
  }
`
 
export default Template;