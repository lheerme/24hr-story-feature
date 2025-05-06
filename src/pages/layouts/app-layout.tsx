import { Outlet } from 'react-router'

export function AppLayout() {
  return (
    <main className="w-full max-w-[540px] min-h-dvh bg-zinc-50 mx-auto flex flex-col">
      <Outlet />
    </main>
  )
}
