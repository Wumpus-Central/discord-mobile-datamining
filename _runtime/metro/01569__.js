// === Module 1569: ? ===

// Module 1569
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;

export default importAllResult.forwardRef(function ServerContainer(arg0, arg1) {
  let _location;
  let children;
  let obj;
  ({ children, location: _location } = arg0);
  const effect = importAllResult.useEffect(() => {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  obj = {};
  if (arg1) {
    obj = { getCurrentOptions: null };
    obj[0] = function getCurrentOptions() {
      return obj.options;
    };
    if (typeof arg1 === "fileFinishedImporting") {
      arg1(obj);
    } else {
      arg1.current = obj;
    }
  }
  obj = { value: { location: _location }, children: null };
  obj[1] = jsx(obj(1483).CurrentRenderContext.Provider, { value: obj, children });
  return jsx(importDefault(1570).Provider, { value: { location: _location }, children: null });
});