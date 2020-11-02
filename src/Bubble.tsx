import styled from 'styled-components'

interface Props {
  state: boolean
}
export const Bubble = styled.div<Props>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  box-shadow: 4px 4px 15px 2px rgba(0, 0, 0, 0.3);

  position: fixed;
  z-index: 9999999999999999999;
  top: 25px;
  right: 25px;

  pointer-events: ${(props) => (props.state ? 'none' : 'all')};

  cursor: pointer;
`
