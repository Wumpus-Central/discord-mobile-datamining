// === Module 6070: _slicedToArray ===

// Module 6070 (_slicedToArray)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;


export const Lazy = function Lazy(arg0) {
  let children;
  let enabled;
  let tmp3;
  let tmp4;
  let tmp7;
  let visible;
  ({ enabled, visible, children } = arg0);
  let c0;
  let closure_1;
  let tmp = enabled;
  const useState = react.useState;
  if (tmp) {
    tmp = visible;
  }
  [tmp3, tmp4] = useState(tmp);
  c0 = tmp4;
  _slicedToArray(useState(tmp), 2);
  if (!enabled) {
    enabled = visible;
  }
  if (!enabled) {
    enabled = tmp3;
  }
  closure_1 = tmp5;
  const items = [!enabled];
  const effect = react.useEffect(() => {
    if (false !== closure_1) {
      let closure_0 = requestIdleCallback(() => {
        closure_0(true);
      });
      return () => cancelIdleCallback(closure_0);
    }
  }, items);
  if (visible) {
    if (false === tmp3) {
      tmp4(true);
      tmp7 = children;
    }
    return tmp7;
  }
  tmp7 = null;
  if (tmp3) {
    tmp7 = children;
  }
};