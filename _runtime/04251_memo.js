// _runtime/04251_memo.js
import noopDefault from "00019_noop.js";
import createContext from "04247_createContext.js";
import _mod4248 from "metro/04248__.js";
import PortalHost from "04249_PortalHost.js";
import registerHost from "04252_registerHost.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";

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