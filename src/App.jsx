import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Card from './components/Card'
import Header from './components/Header'
import Button from './components/Button/Button.jsx'
import Student from './components/Student.jsx'
import UserGreeting from './components/UserGreeting.jsx'
import List from './components/List.jsx'
import ProfilePicture from './components/ProfilePicture.jsx'
import MyComponent from './components/MyComponent.jsx'
import Counter from './components/Counter.jsx'
import ColorPicker from './components/ColorPicker.jsx'
import Component from './components/Component.jsx'
import ArrayComponent from './components/ArrayComponent.jsx'

function App() {

  const fruits = [{id: 1, name: "Apple", calories: 95},
                      {id: 2, name: "Banana", calories: 56},
                      {id: 3, name: "Chounsa", calories: 75},
                      {id: 4, name: "Sindhri", calories: 185}, 
                      {id: 5, name: "Orange", calories: 87}];

  const vegetables = [{id: 6, name: "Potato", calories: 95},
                          {id: 7, name: "Carrot", calories: 56},
                          {id: 8, name: "Tomato", calories: 75},
                          {id: 9, name: "Bhindi", calories: 185}, 
                          {id: 10, name: "Salad", calories: 87}];

  return(
  <>
  <Header />
  <Card />
  <Student name="Ali" age={19} isStudent={false} />
  <Student name="Umar" age={25} isStudent={false} />
  <Student name="Abu Bakr" age={20} isStudent={true} />
  <Student name="Usman" age={30} isStudent={false} />
  <Student />
  <UserGreeting isLoggedIn={true} username="Mudassar" />
  <UserGreeting isLoggedIn={true} />
  <>
  {fruits.length > 0 ? <List items={fruits} catagory="Fruits" /> : null} 
  {vegetables.length > 0 ? <List items={vegetables} catagory="Vegetables" /> : null}
  </>
  <Button />
  <ProfilePicture />
  <MyComponent />
  <Counter />
  <ColorPicker />
  <Component />
  <ArrayComponent />
  <Footer />
  </>
  )
}

export default App
