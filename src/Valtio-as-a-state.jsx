import React from 'react'
import { proxy, useSnapshot } from 'valtio'

// const store = proxy({
//   name: 'Niraj',
//   age: 26,
//   changeAge() {
//     store.age += 1;
//   },
// });

function Home() {
  const store = React.useRef(
    proxy({
      name: 'Niraj',
      age: 26,
      changeAge() {
        store.age += 1
      },
    })
  ).current

  return (
    <div>
      <Name store={store} />
      <Age store={store} />
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

function Age({ store }) {
  const { age, name } = useSnapshot(store)

  const handle = () => {
    console.log(name)
  }

  return <p onClick={handle}>{age}</p>
}

function Name({ store }) {
  const snap = useSnapshot(store)

  return <p>{snap.name}</p>
}

export default Home
