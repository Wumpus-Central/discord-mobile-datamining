// discord_app/modules/screen/native/useMeasuredLayout.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

let size = fn(2);
const result = size.fileFinishedImporting("modules/screen/native/useMeasuredLayout.tsx");

export default function useMeasuredLayout() {
  const ref = noop.useRef(null);
  [tmp3, noop] = noop.useState();
  const tmp2 = _slicedToArray(noop.useState(), 2);
  [tmp5, closure_2] = noop.useState();
  const layoutEffect = noop.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.measureInWindow((arg0, arg1, arg2, arg3) => {
        closure_1_1(arg2);
        closure_1_2(arg3);
      });
    }
  }, []);
  const size = {
    ref,
    onLayout: noop.useCallback((nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      noop(layout.width);
      closure_1_2(layout.height);
    }, []),
    width: tmp3,
    height: tmp5,
  };
  return size;
}
