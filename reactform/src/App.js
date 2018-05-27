import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import MyForm0 from './components/form0'
import MyForm1 from './components/form1'
import Home from './components/home'
import Test from './components/test'



const Appli = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/MyForm" component={MyForm0} />
      <Route path="/MyForm1" component={MyForm1} />
      <Route path="/Test" component={Test} />
      
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Appli />
      </div>
    )
  }
}

// class App extends Component {
//   render = () => {
//     return (
//       <div>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/airports">Airports</Link></li>
//           <li><Link to="/cities">Cities</Link></li>
//         </ul>


//         <Route exact path="/" component={Home} />
//         <Route path="/airports" render={() => (<div>This is the airport route</div>)} />
//         <Route path="/cities" component={City} />

//       </div>
//     )
//   }
// }





// const Home = () => (
//   <div>
//     <h2> Home </h2>
//   </div>
// );

// const Airport = () => (
//   <div>
//     <ul>
//       <li>Jomo Kenyatta</li>
//       <li>Tambo</li>
//       <li>Murtala Mohammed</li>
//     </ul>
//   </div>
// );

// const City = () => (
//   <div>
//     <ul>
//       <li>San Francisco</li>
//       <li>Istanbul</li>
//       <li>Tokyo</li>
//     </ul>
//   </div>
// )

// const Courses = ({ match }) => (
//   <div>
//     <ul>
//       <li><Link to={`${match.url}/technology`}>Technology</Link></li>
//       <li><Link to={`${match.url}/business`}>Business</Link></li>
//       <li><Link to={`${match.url}/economics`}>Economics</Link></li>
//     </ul>

//     <Route exact path={`${match.path}/:course`} render={({match}) => (<div> This is {match.params.course} </div>)} />
//   </div>
// );

/* Home component*/ //code hidden

/* City component*/ //code hidden



// class App extends Component {
//   render = () => {
//     return (
//       <div>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/courses">Courses</Link></li>
//           <li><Link to="/cities">Cities</Link></li>
//         </ul>


//         <Route exact path="/" component={Home} />
//         <Route path="/courses" component={Courses} />
//         <Route path="/cities" component={City} />

//       </div>
//     )
//   }
// }

export default App;
