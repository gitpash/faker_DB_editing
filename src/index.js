import React from 'react'
import ReactDOM from 'react-dom'

const title = 'Minimal-Techno-Setup React__Webpack__Babel'

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app'),
)

module.hot.accept()
