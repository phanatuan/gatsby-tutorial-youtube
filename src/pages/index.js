import React from "react"
import { Link } from 'gatsby';
import Header from "../components/header";
import Layout from '../components/layout'
import Head from "../components/head";

const IndexPage = () => {
    return (

        <Layout >    
            <Head title="Home"/>
            <h1>Hello Tuannnn</h1>
            <h2>I am Tuan, a full stack developer, from Ho Chi Minh City.</h2>
            <p>Are you sure? Contact me <Link to='/contact'>here</Link></p>
        </Layout>
    )
}

export default IndexPage
