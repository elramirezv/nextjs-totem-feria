import Layout from '../components/Layout.js'
import { withRouter } from 'next/router'
import CompaniesContainer from '../components/companies.js'
import data from "../static/data.json";

const companies = data.companies

const Page = withRouter(props => (
  <Layout>
    <CompaniesContainer data={companies}/>
  </Layout>
))

export default Page
