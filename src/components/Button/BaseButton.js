import React from 'react'

export const BaseButton = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
)