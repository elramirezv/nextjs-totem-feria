import Layout from '../components/Layout.js'
import CategoriesContainer from '../components/categories.js'
import data from "../static/data.json";

const categories = data.categories

export default function Index() {
  return (
    <Layout>
      <CategoriesContainer data={categories}/>
    </Layout>
  )
}
