class DevNotesState {
  notes: string[] = []

  addDevNotes = (notes: string[]) => {
    const newDevNotes: string[] = this.notes

    notes.map((note) => {
      if (newDevNotes.every((devNote) => devNote !== note)) {
        newDevNotes.push(note)
      }
    })

    this.notes = newDevNotes
  }

  removeDevNotes = (notes: string[]) => {
    let newDevNotes: string[] = [...this.notes]

    notes.map((note) => {
      newDevNotes = newDevNotes.filter((devNote) => devNote !== note)
    })

    this.notes = newDevNotes
  }
}

export default DevNotesState
