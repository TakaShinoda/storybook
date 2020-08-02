/** @jsx jsx */
import React from 'react' // eslint-disable-line no-unused-vars
import { jsx, css } from '@emotion/core'
import { BaseStyle } from './BaseButton'


const style = css`
${BaseStyle}
background-color: #8ac6d1;
`


export const PrimaryButton = ({ onClick }) => (
    <button onClick={onClick} css={style}>Button</button>
)