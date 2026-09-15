// _runtime/01599_ServerContainer.js
import BaseNavigationContainer from "01487_BaseNavigationContainer.js";
import ServerContext from "01600_ServerContext.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export const ServerContainer = noop.forwardRef(function ServerContainer(arg0, fn) {
  ({ children, location: _location } = arg0);
  const effect = noop.useEffect(() => {
    console.error("'ServerContainer' should only be used on the server with 'react-dom/server' for SSR.");
  }, []);
  value = {};
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
  return jsx(ServerContext.ServerContext.Provider, {
    value: { location: _location },
    children: jsx(BaseNavigationContainer.CurrentRenderContext.Provider, { value, children }),
  });
});
