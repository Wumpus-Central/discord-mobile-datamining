// === Module 1614: ServerContainer ===

// Module 1614 (ServerContainer)
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

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
  obj = { value: { location: _location }, children: jsx(obj(1502).CurrentRenderContext.Provider, { value: obj, children }) };
  return jsx(obj(1615).ServerContext.Provider, { value: { location: _location }, children: jsx(obj(1502).CurrentRenderContext.Provider, { value: obj, children }) });
});