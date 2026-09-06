// === Module 5675: Lazy ===

// Module 5675 (Lazy)
import closure_0 from "_slicedToArray" /* 32 */;
import closure_1 from "noop" /* 19 */;


export const Lazy = function Lazy(arg0) {
  ({ enabled, visible, children } = arg0);
  let callback;
  let React;
  let tmp = enabled;
  if (tmp) {
    tmp = visible;
  }
  [tmp3, tmp4] = callback(React.useState(tmp), 2);
  callback = tmp4;
  if (!enabled) {
    enabled = visible;
  }
  if (!enabled) {
    enabled = tmp3;
  }
  React = tmp5;
  const items = [!enabled];
  const effect = React.useEffect(() => {
    if (false !== closure_1) {
      closure_0 = requestIdleCallback(() => {
        callback(true);
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
};