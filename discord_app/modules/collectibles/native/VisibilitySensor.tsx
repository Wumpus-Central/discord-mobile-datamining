// discord_app/modules/collectibles/native/VisibilitySensor.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import noop from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

({ useEffect: obj1, useRef: c3 } = noop);
const View = get_ActivityIndicator.View;
({ jsx: closure_6, jsxs: error } = jsxProd);
const result = set.fileFinishedImporting("modules/collectibles/native/VisibilitySensor.tsx");

export default function _default(onChange) {
  onChange = onChange.onChange;
  dependencyMap = undefined;
  let callback;
  let width;
  let height;
  closure_5 = undefined;
  callback = undefined;
  function stopWatching(closure_5, arg1) {
    if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(tmp.current);
      tmp.current = null;
    }
  }
  ({ children, resetKey } = onChange);
  let tmp = width(null);
  dependencyMap = tmp;
  callback = width(false);
  const size = onChange(1492)();
  width = size.width;
  height = size.height;
  closure_5 = width(null);
  const items = [resetKey];
  callback(() => {
    closure_2.current = false;
  }, items);
  const items1 = [onChange];
  callback = height.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    if (null === ref.current) {
      const _setInterval = setInterval;
      tmp.current = setInterval(() => {
        if (null !== ref.current) {
          const current = ref.current;
          current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
            let tmp = arg5 + arg3 > 0;
            if (tmp) {
              tmp = arg5 < closure_1;
            }
            if (tmp) {
              tmp = arg4 < closure_0;
            }
            if (tmp) {
              tmp = arg4 + arg2 > 0;
            }
            if (tmp !== closure_1_2.current) {
              closure_1_2.current = tmp;
              closure_1_0(tmp);
            }
          });
        }
      }, 1000);
    }
  }, items1);
  const items2 = [callback, height, width];
  callback(() => {
    callback(width, height);
    return stopWatching;
  }, items2);
  const obj = { collapsable: false, ref: tmp, children: null };
  const items3 = [children, callback(closure_5, {})];
  obj[2] = items3;
  return stopWatching(closure_5, obj);
}
