// === Module 15771: VisibilitySensor ===

// Module 15771 (VisibilitySensor)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let ref;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let react = react_mod;
({ useEffect: c3, useRef: closure_4 } = react);
react = react_mod;
let View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((resetKey) => {
  let children;
  let first;
  let items1;
  let onChange;
  let tmp4;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(14);
  ({ children, onChange } = resetKey);
  resetKey = resetKey.resetKey;
  const tmp2 = React3(null);
  let closure_1 = tmp2;
  let closure_2 = React3(false);
  size = useWindowDimensionsDefault();
  const width = size.width;
  const height = size.height;
  let closure_5 = React3(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      closure_2.current = false;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== resetKey) {
    const items = [resetKey];
    cResult[1] = resetKey;
    cResult[2] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[2];
  }
  _false(first, tmp4);
  if (cResult[3] !== onChange) {
    const fn2 = function f(arg0, arg1) {
      let ref2;
      let tmp;
      let closure_0 = arg0;
      ref = arg1;
      if (null === ref.current) {
        const _setInterval = setInterval;
        tmp.current = setInterval(() => {
          if (null !== ref.current) {
            const current = ref.current;
            current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
              const tmp = arg5 + arg3 > 0 && arg5 < ref && arg4 < closure_1_0 && arg4 + arg2 > 0;
              if (tmp !== ref2.current) {
                ref2.current = tmp;
                closure_0(tmp);
              }
            });
          }
        }, 1000);
      }
    };
    cResult[3] = onChange;
    cResult[4] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[4];
  }
  View = tmp7;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function x() {
      if (null !== ref.current) {
        const _clearInterval = clearInterval;
        clearInterval(ref.current);
        ref.current = null;
      }
    };
    cResult[5] = fn3;
    tmp8 = fn3;
  } else {
    tmp8 = cResult[5];
  }
  metroImportDefault = tmp8;
  if (cResult[6] === tmp7) {
    if (cResult[7] === height) {
      let tmp9;
      let tmp10;
      let tmp12;
      let tmp16;
      if (cResult[8] === width) {
        tmp9 = cResult[9];
        tmp10 = cResult[10];
      }
      _false(tmp9, tmp10);
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = metroImportDefault(View, {});
        cResult[11] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[11];
      }
      if (cResult[12] !== children) {
        const obj2 = { collapsable: false, ref: tmp2, children: items1 };
        items1 = [children, tmp12];
        const tmp19 = metroImportAll(View, obj2);
        cResult[12] = children;
        cResult[13] = tmp19;
        tmp16 = tmp19;
      } else {
        tmp16 = cResult[13];
      }
      return tmp16;
    }
  }
  class K {
    constructor() {
      closure_6(width, height);
      return closure_7;
    }
  }
  const items2 = [tmp7, height, width];
  cResult[6] = tmp7;
  cResult[7] = height;
  cResult[8] = width;
  cResult[9] = K;
  cResult[10] = items2;
  tmp10 = items2;
  tmp9 = K;
}) : ((onChange) => {
  let children;
  let items3;
  let resetKey;
  onChange = onChange.onChange;
  function stopWatching() {
    if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
  }
  ({ children, resetKey } = onChange);
  let tmp = React3(null);
  let closure_1 = tmp;
  let closure_2 = React3(false);
  size = useWindowDimensionsDefault();
  const width = size.width;
  const height = size.height;
  let closure_5 = React3(null);
  const items = [resetKey];
  _false(() => {
    closure_2.current = false;
  }, items);
  const items1 = [onChange];
  const callback = react.useCallback((arg0, arg1) => {
    let ref2;
    let tmp;
    let closure_0 = arg0;
    ref = arg1;
    if (null === ref.current) {
      const _setInterval = setInterval;
      tmp.current = setInterval(() => {
        if (null !== ref.current) {
          const current = ref.current;
          current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
            const tmp = arg5 + arg3 > 0 && arg5 < ref && arg4 < closure_1_0 && arg4 + arg2 > 0;
            if (tmp !== ref2.current) {
              ref2.current = tmp;
              closure_0(tmp);
            }
          });
        }
      }, 1000);
    }
  }, items1);
  const items2 = [callback, height, width];
  _false(() => {
    callback(width, height);
    return stopWatching;
  }, items2);
  const obj = { collapsable: false, ref: tmp, children: items3 };
  items3 = [children, metroImportDefault(View, {})];
  return metroImportAll(View, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/VisibilitySensor.tsx");

export default tmp4;