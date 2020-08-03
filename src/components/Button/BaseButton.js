/** @jsx jsx */
import React from 'react' // eslint-disable-line no-unused-vars
import { jsx, css } from '@emotion/core'

export const BaseStyle = css`
display: inline-flex;
justify-content: center;
align-items: center;
width:90px;
height: 40px;
min-width: 2rem;
vertical-align: middle;
border-radius: 10px;
border-style: none;
font-family: inherit;
font-weight: bold;
text-align: center;
text-decoration: none;
box-sizing: border-box;
cursor: pointer;
transition: none;
white-space: nowrap;
`

export const BaseButton = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)
