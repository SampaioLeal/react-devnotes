import React from 'react'
import DevNotesProvider_, { DevNotesContext } from './DevNotesProvider'

interface DevNoteProps {
  notes: string[]
}
const DevNote = (props: DevNoteProps) => {
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
export const DevNotesProvider = DevNotesProvider_
