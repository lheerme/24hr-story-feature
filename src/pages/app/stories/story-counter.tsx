import { Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getStoriesFromLocalStorage } from '../../../utils/get-stories-from-local-storage'
import { pausableTimeout } from '../../../utils/pausable-timeout'

export function StoryCounter() {
  const { storyId } = useParams() as { storyId: string }
  const storyList = getStoriesFromLocalStorage()
  const currentStoryIndex = storyList.findIndex(story => story.id === storyId)
  const nextStoryId =
    currentStoryIndex === storyList.length - 1
      ? null
      : storyList[currentStoryIndex + 1].id
  const timeoutRef = useRef<ReturnType<typeof pausableTimeout> | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const newStoryList = storyList.map(story => {
      if (story.id === storyId) {
        return { ...story, viewed: true }
      }

      return story
    })

    localStorage.setItem('storyList', JSON.stringify(newStoryList))

    timeoutRef.current = pausableTimeout(() => {
      navigate(nextStoryId ? `/stories/${nextStoryId}` : '/')
    }, 3000)

    return () => {
      if (timeoutRef.current) timeoutRef.current.pause()
    }
  }, [navigate, nextStoryId, storyId, storyList])

  useEffect(() => {
    if (isPaused) {
      if (timeoutRef.current) timeoutRef.current.pause()
    } else {
      if (timeoutRef.current) timeoutRef.current.resume()
    }
  }, [isPaused])

  function handlePauseButtonClick() {
    setIsPaused(current => !current)
  }

  return (
    <div className="w-full h-full rounded-full transition-colors bg-zinc-400 overflow-hidden z-[1]">
      <div
        style={{ animationPlayState: `${isPaused ? 'paused' : 'running'}` }}
        className={'h-full w-full bg-zinc-950 rounded-full animate-story'}
      />
      <button
        type="button"
        onClick={handlePauseButtonClick}
        className="cursor-pointer absolute right-10 sm:right-0 top-3.5 p-1"
      >
        {isPaused ? <Play className="size-6" /> : <Pause className="size-6" />}
      </button>
    </div>
  )
}
