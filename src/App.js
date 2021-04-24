import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "月田", age: 1},
    { name: "泰明", age: 99},
    { name: "高澤"}
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old!!!!</div>
}

User.defaultProps = {
  age: 1000000
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
