// === Module 1598: ServerContainer ===

// Module 1598 (ServerContainer)
import BaseNavigationContainer from "BaseNavigationContainer" /* 1486 */;
import ServerContext from "ServerContext" /* 1599 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const ServerContainer = noop.forwardRef(function ServerContainer(arg0, fn) {
  ({ children, location: _location } = arg0);
  const effect = noop.useEffect(() => {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  value = {};
  if (fn) {
    value = {
      getCurrentOptions() {
          return obj.options;
        }
    };
    if (typeof fn === "function") {
      fn(value);
    } else {
      fn.current = value;
    }
  }
  value = { value: { location: _location }, children: jsx(BaseNavigationContainer.CurrentRenderContext.Provider, { value, children }) };
  return jsx(ServerContext.ServerContext.Provider, { value: { location: _location }, children: jsx(BaseNavigationContainer.CurrentRenderContext.Provider, { value, children }) });
});