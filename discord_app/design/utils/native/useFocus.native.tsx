// discord_app/design/utils/native/useFocus.native.tsx
import closure_0 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_1 from "../../../../_runtime/00019_noop.js";

const result = require("set").fileFinishedImporting("design/utils/native/useFocus.native.tsx");

export const useFocus = function useFocus() {
  const tmp = callback(React.useState(false), 2);
  callback = tmp[1];
  return {
    focusProps: React.useMemo(
      () => ({
        onFocus() {
          return callback(true);
        },
        onBlur() {
          return callback(false);
        },
      }),
      [],
    ),
    isFocused: tmp[0],
  };
};
