import type { Story } from '../interfaces/story'

export function getStoriesFromLocalStorage() {
  const storyList: Story[] = localStorage.getItem('storyList')
    ? JSON.parse(localStorage.getItem('storyList') as string)
    : []

  const now = Date.now()
  const oneDay = 1000 * 60 * 60 * 24

  const storyListWithoutExpiredStories = storyList.filter(
    story => now - story.timestamp < oneDay
  )

  localStorage.setItem(
    'storyList',
    JSON.stringify(storyListWithoutExpiredStories)
  )

  return storyListWithoutExpiredStories
}
