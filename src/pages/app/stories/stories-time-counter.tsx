import { useParams } from 'react-router'
import { getStoriesFromLocalStorage } from '../../../utils/get-stories-from-local-storage'
import { StoryCounter } from './story-counter'

export function StoriesTimeCounter() {
  const { storyId } = useParams() as { storyId: string }
  const storyList = getStoriesFromLocalStorage()

  return (
    <div className="w-full h-3 px-1 py-0.5 bg-zinc-50 top-0 absolute flex gap-1">
      {storyList.map(story => {
        const isCurrentStory = storyId === story.id
        const currentStoryIndex = storyList.findIndex(
          story => story.id === storyId
        )
        const storyIndex = storyList.findIndex(
          storyToFind => storyToFind.id === story.id
        )

        return isCurrentStory ? (
          <StoryCounter key={story.id} />
        ) : (
          <div
            key={story.id}
            className={`w-full h-full rounded-full transition-colors ${currentStoryIndex > storyIndex ? 'bg-zinc-950' : 'bg-zinc-400'}`}
          />
        )
      })}
    </div>
  )
}
