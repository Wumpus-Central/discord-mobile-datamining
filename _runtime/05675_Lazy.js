// _runtime/05675_Lazy.js
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

export const Lazy = function Lazy(arg0) {
  ({ enabled, visible, children } = arg0);
  c0 = undefined;
  closure_1 = undefined;
  let tmp = enabled;
  if (tmp) {
    tmp = visible;
  }
  [tmp3, tmp4] = _slicedToArray(noop.useState(tmp), 2);
  c0 = tmp4;
  if (!enabled) {
    enabled = visible;
  }
  if (!enabled) {
    enabled = tmp3;
  }
  closure_1 = tmp5;
  const items = [!enabled];
  const effect = noop.useEffect(() => {
    if (false !== closure_1) {
      closure_0 = requestIdleCallback(() => {
        closure_0(true);
      });
      return () => cancelIdleCallback(closure_0);
    }
  }, items);
  if (visible) {
    if (false === tmp3) {
      tmp4(true);
      let tmp7 = children;
    }
    return tmp7;
  }
  tmp7 = null;
  if (tmp3) {
    tmp7 = children;
  }
  const tmp2 = _slicedToArray(noop.useState(tmp), 2);
};
