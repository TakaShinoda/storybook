/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'

const style = css`
display: inline-flex;
justify-content: center;
align-items: center;
width:90px;
height: 40px;
min-width: 2rem;
vertical-align: middle;
border-radius: 1em;
font-family: inherit;
font-weight: bold;
text-align: center;
text-decoration: none;
box-sizing: border-box;
cursor: pointer;
transition: none;
white-space: nowrap;
`

// export const BaseButton = ({ onClick, text }) => (
//   <button onClick={onClick}>{text}</button>
// )

export const BaseButton = ({ onClick }) => (
  <button onClick={onClick} css={style}>Button</button>
)
