// === Module 4759: PortalProvider ===

// Module 4759 (PortalProvider)
import react2 from "react" /* 4755 */;
import ACTIONS from "ACTIONS" /* 4756 */;
import PortalHost from "PortalHost" /* 4757 */;
import reducer from "reducer" /* 4760 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

let c3;
let closure_4;
let hasOwnProperty;
let memo;
let react = react_mod;
({ useReducer: c3, memo } = react);
react = react_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const memoResult = memo((rootHostName) => {
  let Provider2;
  let items;
  let obj2;
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
  const children = rootHostName.children;
  [tmp4, tmp5] = _false(reducer.reducer, ACTIONS.INITIAL_STATE);
  const obj = { value: tmp5, children: hasOwnProperty(Provider2, obj2) };
  _slicedToArray(_false(reducer.reducer, ACTIONS.INITIAL_STATE), 2);
  const Provider = react2.PortalDispatchContext.Provider;
  obj2 = { value: tmp4, children: items };
  items = [children, ];
  Provider2 = react2.PortalStateContext.Provider;
  if (flag) {
    const obj3 = { name: str };
    flag = React3(PortalHost.PortalHost, obj3);
  }
  items[1] = flag;
  return React3(Provider, obj);
});
memoResult.displayName = "PortalProvider";

export const PortalProvider = memoResult;