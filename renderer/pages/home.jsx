import Layout from '../components/Layout.js'
import CategoriesContainer from '../components/categories.js'
import data from "../static/data.json";

const categories = data.categories

export default function Index() {
  return (
    <Layout>
      <CategoriesContainer data={categories}/>
      <style jsx global>{`
        html {
            overflow: scroll;
            overflow-x: hidden;

        }
        ::-webkit-scrollbar {
            width: 0px;  /* remove scrollbar space */
            background: transparent;  /* optional: just make scrollbar invisible */
        }
        /* optional: show position indicator in red */
        ::-webkit-scrollbar-thumb {
            background: #FF0000;
        }

        body {
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .col {
            padding: 0px;
          }
    `}</style>
    </Layout>
  )
}
