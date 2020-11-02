import React, { Dispatch, SetStateAction } from 'react'
import DevNote from 'react-devnotes'

interface Props {
  changePage: Dispatch<SetStateAction<number>>
}

const PageOne: React.FC<Props> = ({ changePage }) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 10%',
        boxSizing: 'border-box',
        flexDirection: 'column'
      }}
    >
      <DevNote notes={['This is an important note!', 'oioioioio']} />
      <div>
        <button disabled>Page One</button>
        <button onClick={() => changePage(2)}>Page Two</button>
      </div>
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta, dui a
      tincidunt lobortis, nibh dolor aliquam nunc, in maximus magna tortor
      lacinia massa. Mauris semper ultricies ex sit amet mattis. Quisque nec
      hendrerit urna. Nunc quis volutpat purus. Fusce porta massa nisi, vel
      lobortis odio dignissim porta. Duis ac ex aliquet, tincidunt tortor in,
      mollis mauris. Phasellus ullamcorper augue ac diam dignissim ultricies.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Nam aliquam urna non magna eleifend maximus. Vivamus
      mollis risus eget neque convallis, sed suscipit neque suscipit.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Mauris id convallis turpis. Sed consequat risus id orci
      ornare, ut facilisis tellus semper.
      <br />
      <br />
      Donec facilisis tellus vel ex porta gravida. Aenean at diam sed leo luctus
      mollis. Ut tempor justo a ante efficitur, sed semper felis eleifend. In
      imperdiet commodo velit in consectetur. Sed gravida rutrum lacus bibendum
      malesuada. Morbi ultrices sodales magna in interdum. Nulla id hendrerit
      justo. Nam facilisis nisi ac vulputate tincidunt. Pellentesque scelerisque
      mauris aliquet, molestie nisi id, efficitur sapien. Mauris venenatis
      rutrum nisl, sit amet maximus purus porta ac. Nam ultrices leo mi, id
      lacinia elit mollis tincidunt. Sed eleifend luctus faucibus. Nullam
      rhoncus nisl molestie neque eleifend, sed posuere mauris auctor.
      Suspendisse in enim ullamcorper, eleifend mauris nec, condimentum tellus.
      Aenean quis malesuada neque.
      <br />
      <br />
      Pellentesque sagittis, dui ac aliquet interdum, urna est rhoncus ipsum, in
      semper elit tellus at libero. Donec at nunc lectus. Donec eu risus et
      sapien semper laoreet et vel tortor. Quisque iaculis tortor ex, ac
      faucibus metus iaculis sit amet. Aenean sed facilisis nulla, eu dignissim
      neque. Maecenas tortor metus, vulputate aliquet mauris vel, dictum
      ultrices augue. Duis lobortis placerat augue, at congue lacus consequat
      vel. Sed non nisi condimentum, consequat massa vel, eleifend massa.
      Phasellus id blandit enim. Aliquam pulvinar maximus posuere. Aliquam
      dignissim massa dui, eu sagittis ex vehicula quis. Curabitur gravida risus
      vel imperdiet luctus. Etiam vitae congue nunc. Pellentesque ipsum urna,
      pulvinar at est vitae, convallis tincidunt ipsum.
      <br />
      <br />
      Pellentesque sem mi, pharetra at sem sed, lacinia accumsan dolor. Integer
      ultrices magna sed arcu varius dignissim. Aliquam placerat faucibus
      elementum. Etiam pharetra ultricies hendrerit. Suspendisse maximus
      elementum ante vel dictum. Nam dolor tortor, egestas at metus nec, maximus
      mattis nibh. Nulla facilisi. Sed cursus elementum mauris eu laoreet.
      Vivamus consectetur interdum sollicitudin. Quisque vestibulum lobortis ex,
      et mattis dolor fermentum hendrerit. Nam mi felis, aliquam ut convallis
      ut, tempus id diam. Vivamus fringilla vulputate sem ut gravida.
      <br />
      <br />
      Duis ipsum turpis, laoreet eget augue vitae, luctus pharetra lectus. Sed a
      fringilla massa. In maximus nisi vitae velit vehicula, vel convallis magna
      faucibus. Nam pulvinar eget ligula ac tincidunt. In a pretium lectus. In
      hac habitasse platea dictumst. Aenean condimentum libero non mauris
      tristique, id pellentesque tortor aliquam. Vivamus vel viverra nisl. Etiam
      pellentesque, turpis ac vulputate luctus, magna odio lobortis ex, sit amet
      suscipit dui dui sed elit. Donec aliquet quam sagittis erat aliquet, vitae
      commodo purus commodo. Donec sodales tellus ac purus rutrum dapibus ac
      lacinia metus. Donec interdum tortor sed mauris blandit, et rhoncus nibh
      scelerisque. Pellentesque leo mi, ultrices at ligula non, rhoncus euismod
      quam.
    </div>
  )
}

export default PageOne
