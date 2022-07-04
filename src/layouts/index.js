import React from 'react'
import PropTypes from 'prop-types'

import { PrimaryLayouts } from '../../packages/shared-ui'

const Layout = ({ children, data }) => (
  <PrimaryLayouts children={children} data={data}></PrimaryLayouts>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
