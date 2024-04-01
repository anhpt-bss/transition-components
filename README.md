# transition-components

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

Transition components allow you to create smooth transition effects for your components.

[**Live Demo**](https://anhpt-bss.github.io/transition-components/)

## Installation:

```bash
npm install transition-components --save-dev
```

or

```bash
yarn add -D transition-components
```

## Usage :

Add `Transitions` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Transitions } from 'transition-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Transitions mode='scale-up-center'>
            <div className='page-container'>Title</div>
        </Transitions>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/transition-components
[npm-image]: https://img.shields.io/npm/v/transition-components
[github-license]: https://img.shields.io/github/license/anhpt-bss/transition-components
[github-license-url]: https://github.com/anhpt-bss/transition-components/blob/master/LICENSE
[github-build]: https://github.com/anhpt-bss/transition-components/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/anhpt-bss/transition-components/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/transition-components