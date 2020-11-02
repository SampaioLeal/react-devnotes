import styled from 'styled-components'

interface Props {
  notes?: string[]
  state: boolean
}

const NotesContainer = styled.div<Props>`
  transition: 0.5s;
  border-radius: 15px;
  box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.3);

  position: fixed;
  z-index: 9999999999999999999;
  top: 25px;
  right: 100px;

  width: 300px;
  height: 400px;

  background-color: white;

  padding: 10px;

  opacity: ${(props) => (props.state ? 1 : 0)};
  pointer-events: ${(props) => (props.state ? 'all' : 'none')};
`

export const Note = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  font-family: 'Roboto', sans-serif;
`

export default NotesContainer
