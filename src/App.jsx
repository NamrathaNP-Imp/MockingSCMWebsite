// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="banner">
            <h2>Nation's Restaurant News</h2>
            <p>Webinar</p>
          </div>
      <div className="layout">

        {/* LEFT COLUMN */}
        <div className="left">

          <h1 className="title">
            Seasonal Success with Jamie Starner: Hiring Summer Staff While Staying Compliant
          </h1>

          <div className="meta">
            <span>📅 Oct 28, 2025</span>
            <span>⏰ 3:00 PM EDT</span>
            <span>⏱ Duration: 2 Hr</span>
          </div>

          <p className="desc">
            Hiring for the summer rush? Whether you're bringing on your first
            batch of hourly workers or scaling up for your busiest season,
            it's critical to stay compliant from day one.
          </p>

          <h3>Learning Objectives:</h3>
          <ul>
            <li>Understand key employment forms for new hires</li>
            <li>Track employee hours and ACA compliance</li>
            <li>Build a compliance-friendly onboarding process</li>
          </ul>

          <h3>Speakers</h3>

          <div className="speakers">
            <div className="speaker">
              <img src="https://i.pravatar.cc/100?img=1" />
              <p>Jamie Starner</p>
            </div>

            <div className="speaker">
              <img src="https://i.pravatar.cc/100?img=2" />
              <p>Emily Hancock</p>
            </div>

            <div className="speaker">
              <img src="https://i.pravatar.cc/100?img=3" />
              <p>Leigh Anne</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right">
          <div id="auth-container"></div>
        </div>

      </div>
    </div>
  );
}

export default App;