// discord_app/modules/collectibles/native/VisibilitySensor.tsx
import noop from "noop";
import closure_4 from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let c3;
let closure_6;
let error;
let obj1;
({ useEffect: obj1, useRef: c3 } = noop);
({ jsx: closure_6, jsxs: error } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/VisibilitySensor.tsx");

export default function _default(onChange) {
  let children;
  let resetKey;
  onChange = onChange.onChange;
  let dependencyMap;
  let callback;
  let width;
  let height;
  let closure_5;
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
  const size = onChange(1474)();
  width = size.width;
  height = size.height;
  closure_5 = width(null);
  const items = [resetKey];
  callback(() => {
    closure_2.current = false;
  }, items);
  const items1 = [onChange];
  callback = height.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
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
            if (tmp !== outer1_2.current) {
              outer1_2.current = tmp;
              outer1_0(tmp);
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
};