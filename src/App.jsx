import { useState, useEffect } from 'react'
import "./App.css";
import CircularProgress from '@mui/material/CircularProgress';
import { Snackbar } from '@mui/material';
import Dashboard from './Dashboard';

const App = () => {
  const [loading, setloading] = useState(true);
  const [isloggedin, setLoggedin] = useState(false);
  const [userName, setUserName] = useState('');
  const [showToast, setToastData] = useState({
    show: false,
    message: '',
  });


  const resetToast = () => {
    setTimeout(() => {
      setToastData({
        show: false,
        message: null,
      });
    }, 2000);
  }
  const waitForSDKAndRenderForm = () => {
    const maxWaitTime = 10000; // 10 seconds
    const pollInterval = 100; // Check every 100ms
    let elapsedTime = 0;
    const authContainer = document.getElementById('auth-container');
    if (!authContainer) {
      return;
    }
    const pollTimer = setInterval(async () => {
      elapsedTime += pollInterval;
      if (window.IIRISPassport && typeof window.IIRISPassport.getRegistrationForm === 'function') {
        clearInterval(pollTimer);
        try {
          await window.IIRISPassport.getRegistrationForm({
            containerId: "auth-container",
            responseType: "code"
          });
          setloading(false);
        } catch (error) {
          console.error("❌ Error rendering unified auth form:", error);
          authContainer.innerHTML = '<div style="color: red; padding: 20px;">Error loading authentication form. Please refresh.</div>';
          setloading(false);
        }
        return;
      }
      if (elapsedTime >= maxWaitTime) {
        clearInterval(pollTimer);
        authContainer.innerHTML = '<div style="color: red; padding: 20px;">Authentication form failed to load. Please refresh the page.</div>';
        setloading(false);
      }
    }, pollInterval);
  }

  useEffect(() => {
    // waitForSDKAndRenderForm();
    setloading(false);
  }, []);

  useEffect(() => {
    const handleIrisEvent = (event) => {
      if (event.detail.type === "login") {
        const { success, ...logindata } = event.detail.payload;
        console.log("success--",  event.detail, success, logindata);
        if (success){
        setToastData({
          show: true,
          message: logindata.data?.message || "User logged in Successfully",
        });
        resetToast();
        console.log("Detected login response", logindata);
        setLoggedin(true);
        setUserName(logindata.data?.user || '')
        } 
        else{
          setToastData({
          show: true,
          message: logindata.error?.message ,
        });
        resetToast();
        } 
      }
      else if (event.detail.type === "signup") {
        const { success, ...signupdata } = event.detail.payload;
        console.log("success--",  event.detail, success, signupdata);
        if (success){
        setToastData({
          show: true,
          message: signupdata.data?.message || "User signed in Successfully",
        });
        resetToast();
        console.log("Detected signin response", signupdata);
        setLoggedin(true);
        setUserName(signupdata.data?.user || '')
        } 
        else{
          setToastData({
          show: true,
          message: signupdata.error?.message ,
        });
        resetToast();
        } 
      }
    };
 
    window.addEventListener("irisAuthEvent", handleIrisEvent);
    return () => window.removeEventListener("irisAuthEvent", handleIrisEvent);
  }, []);
 

  const handleBack = () => {
    // setLoggedin(false);
    window.location.reload();
  }
  // useEffect(() => {
  //   if (isloggedin == false && userName != '') {
  //     waitForSDKAndRenderForm();
  //     setUserName('');
  //   }
  // }, [isloggedin]);


  return (
    <div className="container">
      {isloggedin == true ? <>
        <Dashboard user={userName} onBack={handleBack} />
      </> :
        <>
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
              {loading == true &&
                <div className='rightLoader'>
                  <CircularProgress />
                </div>
              }
              <div id="auth-container">
              </div>
            </div>

          </div>
        </>
      }
      {showToast.show ? <Snackbar
        open={showToast.show}
        autoHideDuration={2000}
        message={showToast.message}
      /> : null}
    </div>
  );
}

export default App;