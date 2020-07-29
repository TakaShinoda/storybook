/** @jsx jsx */
import React from 'react' // eslint-disable-line no-unused-vars
import { jsx, css } from '@emotion/core'
import { BaseStyle } from './BaseButton'


const style = css`
${BaseStyle}
`


export const PrimaryButton = ({ onClick }) => (
    <button onClick={onClick} css={style}>Button</button>
)