// _runtime/01605_ServerContainer.js
import Fragment from "react/00021_Fragment.js";
import react2 from "01606_react.js";
import react from "00019_react.js";

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
      },
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
