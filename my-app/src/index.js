import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){  
  return <h4>dak mim</h4>
}

/*const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'hello world')
  )
};*/
ReactDom.render(<Greeting/>, document.getElementById('root'));