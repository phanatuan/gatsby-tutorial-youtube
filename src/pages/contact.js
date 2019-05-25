import React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Head from "../components/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title='Contact' />
      <h1>Contact</h1>
      <p>Please reach me via Facebook Messenger</p>
      <p>
        This is my{" "}
        <a target="_blank" href="https://github.com/phanatuan/">
          Github Account
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
