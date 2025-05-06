import { Plus } from 'lucide-react'
import { type ChangeEvent, useRef, useState } from 'react'
import { Link } from 'react-router'
import type { Story as StoryInterface } from '../../../interfaces/story'
import { getStoriesFromLocalStorage } from '../../../utils/get-stories-from-local-storage'

export function Story() {
  const [storyList, setStoryList] = useState<StoryInterface[] | []>(
    getStoriesFromLocalStorage()
  )
  const inputRef = useRef<HTMLInputElement>(null)

  function addNewStory(base64: string) {
    const newStory = {
      base64img: base64,
      timestamp: Date.now(),
      id: crypto.randomUUID(),
      viewed: false,
    }

    setStoryList(prev => [...prev, newStory])
    localStorage.setItem('storyList', JSON.stringify([...storyList, newStory]))
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        addNewStory(reader.result as string)
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex gap-2 p-2 overflow-x-auto overflow-y-hidden">
      <button
        type="button"
        className="flex items-center justify-center size-14 flex-shrink-0 rounded-full border-2 border-zinc-500 cursor-pointer text-zinc-500 hover:text-zinc-950 hover:border-zinc-950 hover:transition-colors"
        onClick={() => inputRef.current?.click()}
      >
        <Plus className="size-6" />
      </button>
      <input
        onChange={handleInputChange}
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
      />
      {storyList.map(story => (
        <Link
          to={`/stories/${story.id}`}
          key={story.id}
          type="button"
          className={`flex size-14 flex-shrink-0 rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border-3 ${story.viewed ? 'border-zinc-500' : 'border-zinc-950'}`}
        >
          <img
            src={story.base64img}
            alt="Story"
            className="object-cover w-full h-full"
          />
        </Link>
      ))}
    </div>
  )
}
