// _runtime/04163_memo.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import "noop";
import jsxProd from "jsxProd";
import { createContext } from "04159_createContext.js";
import { PortalHost } from "04161_PortalHost.js";
import { registerHost } from "04164_registerHost.js";
import { 04160__ } from "metro/04160__.js";

let c3;
let c4;
let c5;
let memo;
const require = arg1;
({ useReducer: c3, memo } = noop);
({ jsx: c4, jsxs: c5 } = jsxProd);
const memoResult = memo((rootHostName) => {
  let tmp4;
  let tmp5;
  let str = rootHostName.rootHostName;
  if (str === undefined) {
    str = "root";
  }
  let flag = rootHostName.shouldAddRootHost;
  if (flag === undefined) {
    flag = true;
  }
  [tmp4, tmp5] = callback(callback2(registerHost.reducer, 04160__.INITIAL_STATE), 2);
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