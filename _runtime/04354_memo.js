// _runtime/04354_memo.js
import noopDefault from "00019_noop.js";
import createContext from "04350_createContext.js";
import _mod4351 from "metro/04351__.js";
import PortalHost from "04352_PortalHost.js";
import registerHost from "04355_registerHost.js";
import closure_2 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";

require = arg1;
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
  [tmp4, tmp5] = callback(callback2(registerHost.reducer, _mod4351.INITIAL_STATE), 2);
  let obj = { value: tmp5, children: null };
  obj = { value: tmp4, children: null };
  const items = [rootHostName.children, ];
  if (flag) {
    obj = { name: null };
    obj[0] = str;
    flag = tmp6(PortalHost.PortalHost, obj);
  }
  items[1] = flag;
  obj[1] = items;
  obj[1] = closure_5(createContext.PortalStateContext.Provider, obj);
  return closure_4(createContext.PortalDispatchContext.Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;