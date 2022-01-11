export const calcDay = () => {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const ko = 0 // 1000 * 60 * 60 * 9
  const diff =
    now -
    start +
    ko +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000
  const oneDay = 1000 * 60 * 60 * 24
  const day = Math.floor(diff / oneDay)

  return day
}
