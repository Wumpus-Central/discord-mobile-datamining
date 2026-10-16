// === Module 5058: ? ===

// Module 5058
import _mod5054 from "module_5054" /* 5054 */;
import ACTIONS from "ACTIONS" /* 5055 */;
import PortalHost from "PortalHost" /* 5056 */;
import registerHost from "registerHost" /* 5059 */;
import _slicedToArray from "module_32" /* 32 */;
import noop_mod from "module_19" /* 19 */;

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
  const items = [rootHostName.children, ];
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