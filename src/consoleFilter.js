// consoleFilter.js

const ignoredWarnings = [
  "useLayoutEffect does nothing on the server",
  "Warning: Expected server HTML to contain a matching",
  "Warning: Text content did not match",
  "Warning: An update to %s inside a test was not wrapped in act",
  "ReactDOM.render is no longer supported in React 18"
];

function shouldIgnore(message) {
  if (!message) return false;
  return ignoredWarnings.some((warning) =>
    message.toString().includes(warning)
  );
}

const originalError = console.error;
const originalWarn = console.warn;

console.error = (...args) => {
  if (shouldIgnore(args[0])) return;
  originalError(...args);
};

console.warn = (...args) => {
  if (shouldIgnore(args[0])) return;
  originalWarn(...args);
};