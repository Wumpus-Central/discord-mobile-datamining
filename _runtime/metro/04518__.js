// _runtime/metro/04518__.js
import _mod4514 from "04514__.js";
import ACTIONS from "../04515_ACTIONS.js";
import PortalHost from "../04516_PortalHost.js";
import registerHost from "../04519_registerHost.js";
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
  obj.children = hasOwnProperty(_mod4514.PortalStateContext.Provider, obj2);
  return React4(_mod4514.PortalDispatchContext.Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;
