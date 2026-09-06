// discord_app/modules/collectibles/native/VisibilitySensor.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import size from "../../../../_runtime/metro/00002__.js";

({ useEffect: c2, useRef: c3 } = noop);
const View = _mod17.View;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const result = size.fileFinishedImporting("modules/collectibles/native/VisibilitySensor.tsx");

export default function _default(onChange) {
  onChange = onChange.onChange;
  function stopWatching() {
    if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(tmp.current);
      tmp.current = null;
    }
  }
  ({ children, resetKey } = onChange);
  let tmp = React3(null);
  closure_1 = tmp;
  closure_2 = React3(false);
  const size = useWindowDimensionsDefault();
  const width = size.width;
  const height = size.height;
  React3(null);
  const items = [resetKey];
  React2(() => {
    closure_2.current = false;
  }, items);
  const items1 = [onChange];
  const callback = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    if (null === arg1.current) {
      const _setInterval = setInterval;
      tmp.current = setInterval(() => {
        if (null !== ref.current) {
          const current = ref.current;
          current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
            let tmp = arg5 + arg3 > 0;
            if (tmp) {
              tmp = arg5 < ref;
            }
            if (tmp) {
              tmp = arg4 < closure_1_0;
            }
            if (tmp) {
              tmp = arg4 + arg2 > 0;
            }
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
  React2(() => {
    callback(width, height);
    return stopWatching;
  }, items2);
  const obj = { collapsable: false, ref: tmp, children: null };
  const items3 = [children, timestampProducer(View, {})];
  obj.children = items3;
  return React5(View, obj);
}
