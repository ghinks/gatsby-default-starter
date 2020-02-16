import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Glenn Hinks" />
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      {" "}
      I graduated in 1991, no google, no iPhones, no www. Things have gotten
      much better, I started off writing software for fly by wire aircraft,
      moved into satellite & communications, worked in investments, tried my
      very best at startups and am still having a wonderful time.
    </p>
  </Layout>
)

export default IndexPage
