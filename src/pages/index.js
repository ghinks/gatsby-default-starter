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
    <p> I graduated in 1991, no google, no iPhones, no www. Things have gotten much better, I started off writing software for fly by wire aircraft, moved into satellite & communications, worked in investments, tried my very best at startups and am still having a wonderful time. For the last few positions I have had great team building experiences. There are certainly a great number of great people to hire but you have to work to find them, woe them and mentor them. When I look back every graduate I have hired has ended up at a great gig at a great company even if they started off small.

      I love to give talks at Meetup's (when I think I have something to offer, which comes and goes). I admire the NPM eco system and am constantly thankful for all the amazing work done by others for the community. I try to give back as much as I can, after all its the contributors that are providing a way for me to put my children through school.
      Currently I am really interested in the evolution of JavaScript and how all the new features are coming into the language. With Node on the backend and Webpack on the front you can do more with less code.
      I am somewhat obsessed with Linting and unit testing and I think Eslint has taught me as much about JavaScript as I have taught myself. Thank you contributors.

      In the day I wrote in our parent languages of C & C++, these are great for some things (if you need a C++ NPM module written come find me!). I have gone from functional to class based back to functional and its been a great experience. I really have enjoyed the adoption of JavaScript as a fully fledged language. It is not just Brendon Eich's 5 day meander. It is now fully accepted in the enterprise. Javascript of all the languages has adopted all the best practices that are only really given a nod and a wink in others. </p>
  </Layout>
)

export default IndexPage
