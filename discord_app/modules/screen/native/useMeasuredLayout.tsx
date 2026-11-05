// === Module 9141: useMeasuredLayout ===

// Module 9141 (useMeasuredLayout)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

let size = fn(2);
const result = size.fileFinishedImporting("modules/screen/native/useMeasuredLayout.tsx");

export default function useMeasuredLayout() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.isMounted;
  if (flag === undefined) {
    flag = true;
  }
  c2 = undefined;
  const ref = noop.useRef(null);
  [tmp3, c2] = noop.useState();
  const tmp4 = _slicedToArray(noop.useState(), 2);
  closure_3 = tmp4[1];
  items = [flag];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (flag) {
      const current = ref.current;
      if (current != null) {
        current.measureInWindow((arg0, arg1, arg2, arg3) => {
          _undefined(arg2);
          closure_1_3(arg3);
        });
      }
    }
  }, items);
  const size = {
    ref,
    onLayout: noop.useCallback((nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      _undefined(layout.width);
      closure_3(layout.height);
    }, []),
    width: tmp3,
    height: tmp4[0]
  };
  return size;
};