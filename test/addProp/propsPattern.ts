export const input = `
import * as React from 'react'

const Foo = ({foo}) => {
  return <div>{te/* selectionStart *//* selectionEnd */xt}</div>
}
`

export const file = 'test.js'
export const parser = 'babylon'

export const expected = `
import * as React from 'react'

const Foo = ({foo, text}) => {
  return <div>{text}</div>
}
`
