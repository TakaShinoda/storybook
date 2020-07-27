/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'

const style = css`
  background-color: #444;
  &:hover {
    color: #000;
  }
`

// export const BaseButton = ({ onClick, text }) => (
//   <button onClick={onClick}>{text}</button>
// )

export const BaseButton = ({ onClick }) => (
  <button onClick={onClick} css={style}>Button</button>
)
