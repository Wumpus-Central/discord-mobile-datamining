// === Module 4785: useFocus ===

// Module 4785 (useFocus)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/utils/native/useFocus.native.tsx");

export const useFocus = ReactCompilerGating.isReactCompilerEnabled() ? (function useFocus() {
  const cResult = c.c(3);
  [tmp3, require] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {
      onFocus() {
          return require(true);
        },
      onBlur() {
          return require(false);
        }
    };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp3) {
    const obj3 = { focusProps: first, isFocused: tmp3 };
    cResult[1] = tmp3;
    cResult[2] = obj3;
    let tmp5 = obj3;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (function useFocus() {
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
});