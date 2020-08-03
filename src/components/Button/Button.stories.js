import React from 'react'
import { BaseButton } from './BaseButton'
import { PrimaryButton } from './PrimaryButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
}

export const primary = () => (
  <PrimaryButton onClick={action('clicked')} text="Button" />
)

export const secondary = () => (
  <BaseButton onClick={action('clicked')} text="Button" />
)
