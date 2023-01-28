import React from 'react'
import { proxy, useSnapshot } from 'valtio'

const store = proxy({
  name: 'Niraj',
  age: 26,
  changeAge() {
    store.age += 1
  },
})

function Home() {
  return (
    <div>
      <Name />
      <Age />
      <button
        onClick={() => {
          store.name = store.name.slice(1) + store.name.slice(0, 1)
        }}
      >
        Change Name
      </button>
      <button onClick={store.changeAge}>Change Age</button>
    </div>
  )
}

function Age() {
  const snap = useSnapshot(store, { sync: true }) // Magic is here. Need to do this for controlled components

  const handle = (evt) => {
    store.age = evt?.target?.value
  }

  return (
    <div>
      <p>{snap.age}</p>
      <input onChange={handle}></input>
    </div>
  )
}

function Name() {
  const snap = useSnapshot(store)

  return <p>{snap.name}</p>
}

export default Home
