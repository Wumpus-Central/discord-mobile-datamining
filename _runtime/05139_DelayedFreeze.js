// === Module 5139: DelayedFreeze ===

// Module 5139 (DelayedFreeze)
import Suspender from "Suspender" /* 5140 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default function DelayedFreeze(children) {
  const freeze = children.freeze;
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp[1];
  const items = [freeze];
  const effect = noop.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_1_1(closure_0);
    }, 0);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let freeze1 = freeze;
  if (freeze1) {
    freeze1 = tmp[0];
  }
  return jsx(Suspender.Freeze, { freeze: freeze1, children: children.children });
};