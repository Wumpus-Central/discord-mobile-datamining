// _runtime/metro/05058__.js
import _mod5054 from "05054__.js";
import ACTIONS from "../05055_ACTIONS.js";
import PortalHost from "../05056_PortalHost.js";
import registerHost from "../05059_registerHost.js";
import _slicedToArray from "00032__.js";
import noop_mod from "00019__.js";

require = fn;
let noop = fn(19);
({ useReducer: c3, memo } = noop);
let noop = noop_mod;
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
  [tmp4, tmp5] = React3(registerHost.reducer, ACTIONS.INITIAL_STATE);
  const obj = { value: tmp5, children: null };
  const obj2 = { value: tmp4, children: null };
  const items = [rootHostName.children];
  if (flag) {
    const obj3 = { name: str };
    flag = React4(PortalHost.PortalHost, obj3);
  }
  items[1] = flag;
  obj2.children = items;
  obj.children = hasOwnProperty(_mod5054.PortalStateContext.Provider, obj2);
  return React4(_mod5054.PortalDispatchContext.Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;
