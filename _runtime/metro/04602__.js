// === Module 4602: ? ===

// Module 4602
import _mod4598 from "module_4598" /* 4598 */;
import ACTIONS from "ACTIONS" /* 4599 */;
import PortalHost from "PortalHost" /* 4600 */;
import registerHost from "registerHost" /* 4603 */;
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
  obj.children = hasOwnProperty(_mod4598.PortalStateContext.Provider, obj2);
  return React4(_mod4598.PortalDispatchContext.Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;