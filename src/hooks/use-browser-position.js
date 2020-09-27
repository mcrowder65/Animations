import React from "react"

const useBrowserPosition = (callback) => {
  const func = React.useCallback(() => {
    callback()
  }, [callback])
  React.useEffect(() => {
    document.addEventListener("scroll", func)
    return () => {
      document.removeEventListener("scroll", func)
    }
  }, [callback])
}

export default useBrowserPosition
