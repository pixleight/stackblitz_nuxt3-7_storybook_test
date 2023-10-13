import type { Meta, StoryObj } from '@storybook/vue3'

import MyNuxtLink from '@/components/MyNuxtLink.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/NuxtLink',
  component: MyNuxtLink,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof MyNuxtLink>

export default meta
type Story = StoryObj<typeof meta>

export const NuxtLinkStory: Story = {
  args: {},
}
