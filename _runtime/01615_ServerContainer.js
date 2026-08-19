// === Module 1615: ServerContainer ===

// Module 1615 (ServerContainer)
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;

export const ServerContainer = importAllResult.forwardRef(function ServerContainer(arg0, fn) {
  ({ children, location: _location } = arg0);
  const effect = importAllResult.useEffect(() => {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  let obj = {};
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