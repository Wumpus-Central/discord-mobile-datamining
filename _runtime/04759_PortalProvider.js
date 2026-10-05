// _runtime/04759_PortalProvider.js
import react2 from "04755_react.js";
import ACTIONS from "04756_ACTIONS.js";
import PortalHost from "04757_PortalHost.js";
import reducer from "04760_reducer.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import react_mod from "00019_react.js";
import Fragment from "react/00021_Fragment.js";

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
  items = [children];
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
