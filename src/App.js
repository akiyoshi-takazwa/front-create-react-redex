import logo from './logo.svg';

const App = () =>{
  const profiles = [
    { name: "taro", age: 10},
    { name: "akiyoshi", age: 999999},
    { name: "NoName"}
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>Hi, I am {props.name}!!, and {props.age} years old.</div>
}

User.defaultProps = {
  age: "('ω')"
}

export default App;
