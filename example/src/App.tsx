import React, { useState } from 'react'

import { DevNotesProvider } from 'react-devnotes'

import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

const App = () => {
  const [page, setPage] = useState(1)
  return (
    <DevNotesProvider>
      {page === 1 ? (
        <PageOne changePage={setPage} />
      ) : (
        <PageTwo changePage={setPage} />
      )}
    </DevNotesProvider>
  )
}

export default App
