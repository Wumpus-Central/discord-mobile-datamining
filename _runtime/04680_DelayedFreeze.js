// _runtime/04680_DelayedFreeze.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

const require = fn;

export default function DelayedFreeze(children) {
  let freeze = children.freeze;
  const tmp = callback(React.useState(false), 2);
  dependencyMap = tmp[1];
  const items = [freeze];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(closure_0);
    }, 0);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  if (freeze) {
    freeze = tmp[0];
  }
  return jsx(freeze(4681).Freeze, { freeze, children: children.children });
};