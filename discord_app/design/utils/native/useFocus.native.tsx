// === Module 5190: useFocus ===

// Module 5190 (useFocus)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("design/utils/native/useFocus.native.tsx");

export function useFocus() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp[1];
  return {
    focusProps: noop.useMemo(() => ({
      onFocus() {
        return closure_1_0(true);
      },
      onBlur() {
        return closure_1_0(false);
      }
    }), []),
    isFocused: tmp[0]
  };
}