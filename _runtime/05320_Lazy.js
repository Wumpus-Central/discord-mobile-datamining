// _runtime/05320_Lazy.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";


export const Lazy = function Lazy(arg0) {
  let children;
  let enabled;
  let tmp3;
  let tmp4;
  let visible;
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
    if (false !== c1) {
      let _slicedToArray = requestIdleCallback(() => {
        callback(true);
      });
      return () => cancelIdleCallback(_slicedToArray);
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