// === Module 1605: ServerContainer ===

// Module 1605 (ServerContainer)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 1606 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;

export const ServerContainer = react.forwardRef(function ServerContainer(arg0, fn) {
  let _location;
  let children;
  ({ children, location: _location } = arg0);
  const effect = react.useEffect(() => {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  const obj = {};
  if (fn) {
    const obj2 = {
      getCurrentOptions() {
          return obj.options;
        }
    };
    if (typeof fn === "function") {
      fn(obj2);
    } else {
      fn.current = obj2;
    }
  }
  const Provider = react2.ServerContext.Provider;
  return <Provider value={{ location: _location }}>{null}</Provider>;
});