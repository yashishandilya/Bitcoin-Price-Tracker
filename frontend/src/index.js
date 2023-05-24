// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import markerSDK from '@marker.io/browser';
// import ChatBox from './ChatBox/src/ChatBox'
// import './ChatBox/src/ChatBoxIndex.css'


// const root = ReactDOM.createRoot(document.getElementById('root'));

// async function main() {
//   const widget = await markerSDK.loadWidget({ project: '646645b18e0917e2d5f47501' });
//   // Rest of your code here

//   root.render(
//     <React.StrictMode>
//       <App />
//       <ChatBox/>
//     </React.StrictMode>
//   );
//   // ReactDOM.createRoot(document.getElementById('root')).render(
//   //   <React.StrictMode>
//   //     <App />
//   //   </React.StrictMode>,
//   // )

//   // If you want to start measuring performance in your app, pass a function
//   // to log results (for example: reportWebVitals(console.log))
//   // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//   reportWebVitals();
// }

// main();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import markerSDK from '@marker.io/browser';

const root = document.getElementById('root');

async function main() {
  // const widget = await markerSDK.loadWidget({ project: '646645b18e0917e2d5f47501' });
  // Rest of your code here

  const rootChatBox = document.createElement('div');
  rootChatBox.id = 'rootChatBox';
  root.appendChild(rootChatBox);

  ReactDOM.render(
    <React.StrictMode>
      <div>
        <App>
        {/* <ChatBox /> */}
        </App>
        {/*  */}
      </div>
    </React.StrictMode>,
    root
  );

  reportWebVitals();
}

main();


