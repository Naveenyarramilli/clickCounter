// Write your code here
import {useState} from 'react'
import './index.css'

const Counter = () => {
  const [data, setData] = useState({
    name: '',
    password: '',
  })
  const [error, setError] = useState(false)

  const {name, password} = data

  const changeHandler = e => {
    setData({...data, [e.target.name]: [e.target.value]})
    if (name !== 'naveen') {
      setError(true)
    } else {
      setError(false)
    }
  }

  const onSubmitHandler = e => {
    e.preventDefault()
  }

  return (
    <center>
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
          />
          <br />

          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <br />
          {error === true ? <p>wrong</p> : null}
          <input type="submit" name="submit" />
        </form>
      </div>
    </center>
  )
}
export default Counter
