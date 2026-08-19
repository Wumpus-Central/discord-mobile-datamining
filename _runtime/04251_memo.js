// === Module 4251: memo ===

// Module 4251 (memo)
import noopDefault from "noop" /* 19 */;
import createContext from "createContext" /* 4247 */;
import _mod4248 from "module_4248" /* 4248 */;
import PortalHost from "PortalHost" /* 4249 */;
import registerHost from "registerHost" /* 4252 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

require = fn;
({ useReducer: c3, memo } = noop);
noopDefault;
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = memo((rootHostName) => {
  let str = rootHostName.rootHostName;
  if (str === undefined) {
    str = "root";
  }
  let flag = rootHostName.shouldAddRootHost;
  if (flag === undefined) {
    flag = true;
  }
  [tmp4, tmp5] = callback(callback2(registerHost.reducer, _mod4248.INITIAL_STATE), 2);
  let obj = { value: tmp4, children: null };
  const items = [rootHostName.children, ];
  if (flag) {
    obj = { name: null };
    obj[0] = str;
    flag = callback(PortalHost.PortalHost, obj);
  }
  items[1] = flag;
  obj[1] = items;
  obj[1] = callback2(createContext.PortalStateContext.Provider, obj);
  return callback(createContext.PortalDispatchContext.Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;