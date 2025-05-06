import { Feed } from './feed'
import { Story } from './story'

export function Home() {
  return (
    <div className="flex-1">
      <Story />
      <Feed />
    </div>
  )
}
