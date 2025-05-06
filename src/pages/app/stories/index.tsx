import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Link, Navigate, useNavigate, useParams } from 'react-router'
import { getStoriesFromLocalStorage } from '../../../utils/get-stories-from-local-storage'
import { StoriesTimeCounter } from './stories-time-counter'

export function Stories() {
  const { storyId } = useParams() as { storyId: string }
  const storyList = getStoriesFromLocalStorage()
  const navigate = useNavigate()
  const storyListSize = storyList.length
  const currentStoryListIndex = storyList.findIndex(
    story => story.id === storyId
  )

  const story = storyList.find(story => story.id === storyId)

  if (!story) {
    return <Navigate to={'/'} />
  }

  function handleBackwardStory() {
    if (currentStoryListIndex > 0) {
      navigate(`/stories/${storyList[currentStoryListIndex - 1].id}`)
    } else {
      navigate('/')
    }
  }

  function handleForwardStory() {
    if (!(currentStoryListIndex >= storyListSize - 1)) {
      navigate(`/stories/${storyList[currentStoryListIndex + 1].id}`)
    } else {
      navigate('/')
    }
  }

  return (
    <div className="flex-1">
      <div className="flex items-center max-w-[1080px] w-full max-h-[1920px] h-dvh min-h-dvh bg-zinc-300 relative">
        <StoriesTimeCounter />
        <img
          src={story?.base64img}
          alt=""
          className="w-full max-h-dvh object-cover pointer-events-none"
        />
      </div>
      <Link
        to={'/'}
        className="absolute right-1 sm:right-0 top-3.5 sm:top-0 p-1 sm:p-2 sm:pt-2 hover:opacity-75 hover:transition-opacity z-[1]"
      >
        <X className="size-6 sm:size-10" />
      </Link>
      <button
        type="button"
        className="absolute w-1/2 sm:w-auto left-0 top-0 bottom-0 bg-zinc-400/0 sm:hover:bg-zinc-400/15 px-2 cursor-pointer transition-colors"
        onClick={handleBackwardStory}
      >
        <ChevronLeft className="size-10 hidden sm:block" />
      </button>
      <button
        type="button"
        className="absolute w-1/2 sm:w-auto right-0 top-0 bottom-0 bg-zinc-400/0 sm:hover:bg-zinc-400/15 px-2 cursor-pointer transition-colors"
        onClick={handleForwardStory}
      >
        <ChevronRight className="size-10 hidden sm:block" />
      </button>
    </div>
  )
}
