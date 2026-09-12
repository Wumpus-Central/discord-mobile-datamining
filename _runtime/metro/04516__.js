// _runtime/metro/04516__.js
import _mod4512 from "04512__.js";
import ACTIONS from "../04513_ACTIONS.js";
import PortalHost from "../04514_PortalHost.js";
import registerHost from "../04517_registerHost.js";
import _slicedToArray from "00032__.js";
import noop from "00019__.js";

require = fn;
let noop = fn(19);
({ useReducer: c3, memo } = noop);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const memoResult = memo((rootHostName) => {
  let str = rootHostName.rootHostName;
  if (str === undefined) {
    str = "root";
  }
  let flag = rootHostName.shouldAddRootHost;
  if (flag === undefined) {
    flag = true;
  }
  [tmp4, tmp5] = _slicedToArray(React3(registerHost.reducer, ACTIONS.INITIAL_STATE), 2);
  let obj = { value: tmp5, children: null };
  obj = { value: tmp4, children: null };
  const items = [rootHostName.children];
  if (flag) {
    obj = { name: str };
    flag = React4(PortalHost.PortalHost, obj);
  }
  items[1] = flag;
  obj.children = items;
  obj.children = hasOwnProperty(_mod4512.PortalStateContext.Provider, obj);
  return React4(_mod4512.PortalDispatchContext.Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;
