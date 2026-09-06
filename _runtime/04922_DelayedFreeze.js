// _runtime/04922_DelayedFreeze.js
import Suspender from "04923_Suspender.js";
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default function DelayedFreeze(children) {
  let freeze = children.freeze;
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
  if (freeze) {
    freeze = tmp[0];
  }
  return jsx(Suspender.Freeze, { freeze, children: children.children });
}
