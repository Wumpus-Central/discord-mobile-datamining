// === Module 4680: DelayedFreeze ===

// Module 4680 (DelayedFreeze)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

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