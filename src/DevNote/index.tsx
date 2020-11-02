import React from 'react'
import { DevNotesContext } from '../DevNotesProvider'

interface DevNoteProps {
  notes: string[]
}
const DevNote: React.FC<DevNoteProps> = (props) => {
  const devNotesContext = React.useContext(DevNotesContext)

  React.useEffect(() => {
    devNotesContext!.addDevNotes(props.notes)
  }, [])

  React.useEffect(() => {
    return () => {
      devNotesContext!.removeDevNotes(props.notes)
    }
  }, [])

  return null
}

export default DevNote
