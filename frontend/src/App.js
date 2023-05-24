// import './App.css';
// import React, { Component } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Home from "./Pages/Home";
// import ChatBox from './ChatBox/src/ChatBox';

// class App extends Component {
//   render () {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<Home/>}/>
//         </Routes>
//         {/* <ChatBox/> */}
//       </BrowserRouter>
//     )
  
//   }
// }

// export default App;
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import markerSDK from '@marker.io/browser';
import FloatingButton from './Components/FloatingButton';

const root = document.getElementById('root');
var widgetShown = false;

async function main() {
  const widget = await markerSDK.loadWidget({
    project: '646b86d58e0917e2d500f50e',
  });

  widget.hide();

  const showMarkerForm = () => {
    if (widgetShown === true) {
      console.log("hiding marker tool");
      widgetShown = false;
      widget.hide();
    } else {
      console.log("showing marker tool");
      widgetShown = true;
      widget.show();
    }
    console.log("show marker form is called");

  };



  ReactDOM.render(
    <React.StrictMode>
      <App showMarkerForm={showMarkerForm} />
    </React.StrictMode>,
    root
  );

  reportWebVitals();
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <FloatingButton showMarkerButton={this.props.showMarkerForm} />
      </BrowserRouter>
    );
  }
}

main();

export default App;