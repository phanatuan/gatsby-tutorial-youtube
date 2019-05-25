import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head";

const BlogPage = () => {
 

  const dataContentful = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        nodes {
          title
          slug
          publishedDate(formatString: "MMMM Do YYYY")
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blogg</h1>
      <p>Posts will show up here!</p>
      
      <ol className={blogStyles.posts}>
        {dataContentful.allContentfulBlogPost.nodes.map(node => (
          <li className={blogStyles.post}>
            <Link to={`blog/${node.slug}`}>
              <h2>{node.title}</h2>
              <p>{node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage


 // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  {/* <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge =>
         
          <li className={blogStyles.post}>
            <Link to={`blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </Link>
          </li>
          )}
      </ol> */}