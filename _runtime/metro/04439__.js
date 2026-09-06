// === Module 4439: ? ===

// Module 4439
import _mod4435 from "module_4435" /* 4435 */;
import ACTIONS from "ACTIONS" /* 4436 */;
import PortalHost from "PortalHost" /* 4437 */;
import registerHost from "registerHost" /* 4440 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
  const items = [rootHostName.children, ];
  if (flag) {
    obj = { name: str };
    flag = tmp6(PortalHost.PortalHost, obj);
  }
  items[1] = flag;
  obj.children = items;
  obj.children = hasOwnProperty(_mod4435.PortalStateContext.Provider, obj);
  return React4(_mod4435.PortalDispatchContext.Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;