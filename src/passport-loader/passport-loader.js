// const identityWidget = document.getElementById('iiris-identity');
// if (identityWidget) {
//     const newrelic = document.createElement('script');
//     const passportLoader = document.getElementById('passport-loader');
//     const basepath = getBaseUrl(passportLoader.src);
//     // newrelic.src = `${basepath}/iiris-passport/v4.0/iiris-newrelic.js`
//     newrelic.src = `${window.location.origin}/dist/iiris-newrelic.js`;
//     newrelic.id = 'newrelic-script';
//     newrelic.onload = () => {
//     try {
//       if (typeof window.initNewRelic === 'function') {
//         window.initNewRelic();
//         console.log('New Relic Browser Agent Injected Successfully');
//       } else {
//         console.warn('window.initNewRelic is not a function');
//       }
//     } catch (err) {
//       console.error('Error initializing New Relic:', err);
//     }

//     const identity = document.createElement('script');
//     // identity.src = `${basepath}/iiris-passport/v4.0/iiris-identity.js`;
//     identity.src = `${window.location.origin}/dist/iiris-identity.js`;
//     identity.id = 'identity-script';
    
//     const profilemanager = document.createElement('script');
//     // profilemanager.src = `${basepath}/iiris-passport/v4.0/iiris-profilemgr.js`;
//     profilemanager.src = `${window.location.origin}/dist/iiris-profilemgr.js`;
//     profilemanager.id = 'profilemanager-script';
 
//     const passportLoader = document.getElementById('passport-loader');
//     const fragment = document.createDocumentFragment();
//     fragment.appendChild(identity);
//     fragment.appendChild(profilemanager);
//     passportLoader.parentElement.appendChild(fragment);
//   };
 
//   document.head.appendChild(newrelic);
// }
 
// function getBaseUrl(url){
//     const urlPath = url.split('//')[1];
//     const protocol = url.split('//')[0];
//     if (urlPath) {
//         return `${protocol}//${urlPath.split('/')[0]}`;
//     }
//     return 'https://widgets-dev.iiris.com';
// }