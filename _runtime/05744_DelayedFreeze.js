// _runtime/05744_DelayedFreeze.js
import Fragment from "react/00021_Fragment.js";
import react2 from "05745_react.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import react from "00019_react.js";

const jsx = Fragment.jsx;

export default function DelayedFreeze(freeze) {
  let closure_1;
  let first;
  freeze = freeze.freeze;
  closure_1 = undefined;
  const children = freeze.children;
  [first, closure_1] = react.useState(false);
  const items = [freeze];
  const effect = react.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      closure_1_1(closure_0);
    }, 0);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let freeze2 = freeze;
  const Freeze = react2.Freeze;
  if (freeze2) {
    freeze2 = first;
  }
  return <Freeze freeze={freeze2}>{children}</Freeze>;
}
