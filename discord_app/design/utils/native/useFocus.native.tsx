// discord_app/design/utils/native/useFocus.native.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("design/utils/native/useFocus.native.tsx");

export const useFocus = function useFocus() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp[1];
  return {
    focusProps: noop.useMemo(
      () => ({
        onFocus() {
          return closure_1_0(true);
        },
        onBlur() {
          return closure_1_0(false);
        },
      }),
      [],
    ),
    isFocused: tmp[0],
  };
};
