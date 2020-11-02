# react-devnotes

> Interface dev notes for testers and other devs

[![NPM](https://img.shields.io/npm/v/react-devnotes.svg)](https://www.npmjs.com/package/react-devnotes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-devnotes
```

```bash
yarn add react-devnotes
```

## Notes

- Keep in mind that the code of the messages will be available in build files. Always remember to clean dev notes before build and publish a new version if they contain confidential informations.
- By now we recommend to use just one `DevNote` element per page. It can contains an array of strings that will represent your notes.

## Usage

First you need to init the `DevNotesProvider` at the top of your elements tree.
Here we have an app with two pages that each one will have their own dev notes.

```tsx
// App.tsx

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
```

Next you have to create a `DevNote` element passing an array of string that represents your notes.
They will be displayed in a very useful display controled by a floating bubble.

```tsx
// PageOne.tsx

import React, { Dispatch, SetStateAction } from 'react'
import DevNote from 'react-devnotes'

interface Props {
  changePage: Dispatch<SetStateAction<number>>
}

const PageOne: React.FC<Props> = ({ changePage }) => {
  return (
    <>
      <DevNote notes={['This is an important note!', 'oioioioio']} />
      <button disabled>Page One</button>
      <button onClick={() => changePage(2)}>Page Two</button>
    </>
  )
}

export default PageOne
```

```tsx
// PageTwo.tsx

import React, { Dispatch, SetStateAction } from 'react'
import DevNote from 'react-devnotes'

interface Props {
  changePage: Dispatch<SetStateAction<number>>
}

const PageTwo: React.FC<Props> = ({ changePage }) => {
  return (
    <>
      <DevNote notes={['This is a super important note UvU', 'olaaaa']} />
      <button onClick={() => changePage(1)}>Page One</button>
      <button disabled>Page Two</button>
    </>
  )
}

export default PageTwo
```

## License

MIT © [SampaioLeal](https://github.com/SampaioLeal)
