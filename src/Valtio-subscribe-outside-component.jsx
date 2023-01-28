import React from 'react'
import { proxy, useSnapshot, subscribe } from 'valtio'

const store = proxy({
  name: 'Niraj',
  age: 26,
  changeAge() {
    store.age += 1
  },
})

const unsubscribe = subscribe(store.age, () => {
  console.log(store)
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
  const snap = useSnapshot(store, { sync: true })

  const handle = () => {
    console.log(snap.age)
  }

  return <p>{snap.age}</p>
}

function Name() {
  const snap = useSnapshot(store)

  return <p>{snap.name}</p>
}

export default Home
