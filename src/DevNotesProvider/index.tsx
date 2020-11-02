import React from 'react'
import { Bubble } from '../Bubble'
import DevNotesState from '../DevNotes'
import NotesContainer, { Note } from '../Notes'
interface ContextValue {
  addDevNotes(notes: string[]): void
  removeDevNotes: (notes: string[]) => void
}
export interface DevNotesProviderProps {
  children: React.ReactNode
}

const devNotes = new DevNotesState()
export const DevNotesContext = React.createContext<ContextValue | null>(null)
// const DevNotesConsumer = DevNotesContext.Consumer
const DevNotesProvider: React.FC<DevNotesProviderProps> = ({ children }) => {
  const [notesPanel, setNotesPanel] = React.useState(false)

  function toggleNotesPanel(): void {
    setNotesPanel(!notesPanel)
  }

  const notesPanelRef = React.useRef<any>(null)
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notesPanelRef.current &&
        !notesPanelRef.current.contains(event.target)
      ) {
        setNotesPanel(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [notesPanelRef])

  return (
    <DevNotesContext.Provider
      value={{
        removeDevNotes: devNotes.removeDevNotes,
        addDevNotes: devNotes.addDevNotes
      }}
    >
      <Bubble onClick={toggleNotesPanel} state={notesPanel} />
      <NotesContainer ref={notesPanelRef} state={notesPanel}>
        {devNotes.notes.map((note) => {
          return <Note key={note}>{note}</Note>
        })}
      </NotesContainer>
      {children}
    </DevNotesContext.Provider>
  )
}

export default DevNotesProvider
