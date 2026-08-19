// === Module 4102: useFocus ===

// Module 4102 (useFocus)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("design/utils/native/useFocus.native.tsx");

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