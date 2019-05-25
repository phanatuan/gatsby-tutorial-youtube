import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from "../components/head";

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>I am learning about Gatsby, very sleepy now you know!</h1>
            <p>You can contact me <Link to='/contact'>here</Link>: </p>
        </Layout>
    )
}

export default AboutPage
