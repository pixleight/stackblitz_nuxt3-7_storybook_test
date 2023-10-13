import type { Meta, StoryObj } from '@storybook/vue3'

import MyAutoImportTest from '@/components/MyAutoImportTest.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/AutoImportTest',
  component: MyAutoImportTest,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof MyAutoImportTest>

export default meta
type Story = StoryObj<typeof meta>

export const AutoImportTestStory: Story = {
  args: {},
}
