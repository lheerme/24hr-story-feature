export function pausableTimeout(callback: () => void, delay: number) {
  let timerId: number | null = null
  let start = 0
  let remaining = delay

  function pause() {
    if (timerId !== null) {
      clearTimeout(timerId)
      timerId = null
      remaining -= Date.now() - start
    }
  }

  function resume() {
    start = Date.now()
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    clearTimeout(timerId!)
    timerId = window.setTimeout(callback, remaining)
  }

  resume()

  return { pause, resume }
}
