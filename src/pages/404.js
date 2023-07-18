import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFound = () => (
  <Layout>
    <Seo title="404: No se ha encontrado" />
    <h1>NOT FOUND</h1>
    <p>Acabas de dar con una ruta que no existe... la tristeza.</p>
  </Layout>
)

export default NotFound
