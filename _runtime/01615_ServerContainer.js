// _runtime/01615_ServerContainer.js
import importAllResult from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;

export const ServerContainer = importAllResult.forwardRef(function ServerContainer(arg0, fn) {
  let obj;
  ({ children, location: _location } = arg0);
  const effect = importAllResult.useEffect(() => {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  obj = {};
  if (fn) {
    obj = { getCurrentOptions: null };
    obj[0] = function getCurrentOptions() {
      return obj.options;
    };
    if (typeof fn === "function") {
      fn(obj);
    } else {
      fn.current = obj;
    }
  }
  obj = { value: { location: _location }, children: jsx(obj(1503).CurrentRenderContext.Provider, { value: obj, children }) };
  return jsx(obj(1616).ServerContext.Provider, { value: { location: _location }, children: jsx(obj(1503).CurrentRenderContext.Provider, { value: obj, children }) });
});