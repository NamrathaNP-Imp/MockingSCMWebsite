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
  // const waitForSDKAndRenderForm = () => {
  //   const maxWaitTime = 10000; // 10 seconds
  //   const pollInterval = 100; // Check every 100ms
  //   let elapsedTime = 0;
  //   const authContainer = document.getElementById('auth-container');
  //   if (!authContainer) {
  //     return;
  //   }
  //   const pollTimer = setInterval(async () => {
  //     elapsedTime += pollInterval;
  //     if (window.IIRISPassport && typeof window.IIRISPassport.getRegistrationForm === 'function') {
  //       clearInterval(pollTimer);
  //       let result = null;
  //       try {
  //         await window.IIRISPassport.getRegistrationForm({
  //           containerId: "auth-container",
  //           responseType: "code",
  //           iirisRegisterCallback: (data) => {
  //             console.log("host iirisRegisterCallback!", data);
  //             result = data;
  //             handleIrisEvent(data);
  //             // host handles success here
  //           },
  //           iirisLoginCallback: (data) => {
  //             console.log("host iirisLoginCallback!", data);
  //             result = data;
  //             handleIrisEvent(data);
  //           },
  //           iirisError: (error) => {
  //             console.error("host iirisErrorCallback!", error);
  //             window.IIRISPassport.iirisErrorCallback(error)
  //           }
  //         });
  //         setTimeout(async () => {
  //           if (result && result.data && result.data.token && result.data.token.refresh_token) {
  //             console.log("Access Token:", result.data.token.refresh_token);
  //             const tokenData = await window.IIRISPassport.getRefreshToken().then(token => {
  //               console.log("Refresh Token received in host callback after 20s");
  //             }).catch(error => {
  //               console.error("Error getting refresh token:", error);
  //             });
  //           } else {
  //             console.warn("Result or access token not available yet:", result);
  //           }
  //         }, 20000);
  //         setloading(false);
  //       } catch (error) {
  //         console.error("❌ Error rendering unified auth form:", error);
  //         authContainer.innerHTML = '<div style="color: red; padding: 20px;">Error loading authentication form. Please refresh.</div>';
  //         setloading(false);
  //       }
  //       return;
  //     }
  //     if (elapsedTime >= maxWaitTime) {
  //       clearInterval(pollTimer);
  //       authContainer.innerHTML = '<div style="color: red; padding: 20px;">Authentication form failed to load. Please refresh the page.</div>';
  //       setloading(false);
  //     }
  //   }, pollInterval);
  // }

  // useEffect(() => {
  //   waitForSDKAndRenderForm();
  // }, []);

  const handleIrisEvent = (data) => {
    const { success, ...logindata } = data;
    if (success) {
      setToastData({
        show: true,
        message: logindata.message || "User logged in Successfully",
      });
      resetToast();
      setLoggedin(true);
      setUserName(logindata.user || '')
    }
    else {
      setToastData({
        show: true,
        message: logindata.error?.message,
      });
      resetToast();
    }
  };
  
  useEffect(() => {
    setTimeout(async () => {
      const authContainer = document.getElementById('auth-container');
      if (!authContainer) {
        console.error("Auth container not found");
        return;
      }
      if (window.IIRISPassport && typeof window.IIRISPassport.iirisReadyCallback === 'function') {
        window.IIRISPassport.iirisReadyCallback().then((data) => {
          console.log("IIRIS Passport SDK is ready!,Host iirisReadyCallback" );
        }).catch((error) => {
          console.error("Error waiting for IIRIS Passport SDK to be ready:", error);
        });
      }

      if (window.IIRISPassport && typeof window.IIRISPassport.getRegistrationForm === 'function') {
        let result = null;
        try {
          await window.IIRISPassport.getRegistrationForm({
            containerId: "auth-container",
            responseType: "code",
            iirisRegisterCallback: (data) => {
              console.log("host iirisRegisterCallback!");
              result = data;
              handleIrisEvent(data);
            },
            iirisLoginCallback: (data) => {
              console.log("host iirisLoginCallback!");
              result = data;
              handleIrisEvent(data);
            },
            iirisError: (error) => {
              console.error("host iirisErrorCallback!", error);
              window.IIRISPassport.iirisErrorCallback(error)
            }
          });
          setTimeout(async () => {
            if (result && result.data && result.data.token && result.data.token.refresh_token) {
              const tokenData = await window.IIRISPassport.getRefreshToken().then(token => {
                console.log("Refresh Token received in host callback after 20s");
              }).catch(error => {
                console.error("Error getting refresh token:", error);
              });
            } else {
              console.warn("Result or access token not available yet:", result);
            }
          }, 20000);
          setloading(false);
        } catch (error) {
          console.error("❌ Error rendering unified auth form:", error);
          authContainer.innerHTML = '<div style="color: red; padding: 20px;">Error loading authentication form. Please refresh.</div>';
          setloading(false);
        }
      }
    }, 2000);
  }, []);


  const handleBack = () => {
    window.location.reload();
  }

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