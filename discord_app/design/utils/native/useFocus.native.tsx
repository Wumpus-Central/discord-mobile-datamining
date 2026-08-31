// === Module 4172: useFocus ===

// Module 4172 (useFocus)
import closure_0 from "_slicedToArray" /* 32 */;
import closure_1 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("design/utils/native/useFocus.native.tsx");

export const useFocus = function useFocus() {
  const tmp = callback(React.useState(false), 2);
  callback = tmp[1];
  return {
    focusProps: React.useMemo(() => ({
      onFocus() {
        return callback(true);
      },
      onBlur() {
        return callback(false);
      }
    }), []),
    isFocused: tmp[0]
  };
};