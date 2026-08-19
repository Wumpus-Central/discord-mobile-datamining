// discord_app/modules/forums/native/composer/hooks/useFocusHandlers.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";

const obj = { TITLE: 0, [0]: "TITLE", CONTENT: 1, [1]: "CONTENT" };
const result = require("obj132").fileFinishedImporting("modules/forums/native/composer/hooks/useFocusHandlers.tsx");

export const PostComposerInputs = obj;
export const useFocusHandlers = function useFocusHandlers(arg0) {
  ({ titleInput: closure_0, contentInput: closure_1 } = arg0);
  let first;
  const tmp = callback(React.useState(first.TITLE), 2);
  first = tmp[0];
  return {
    setFocusedInput: tmp[1],
    focusLastInput() {
      if (first.TITLE === first) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.focus();
        }
      } else if (tmp2.CONTENT === tmp) {
        const current = ref2.current;
        if (current != null) {
          current.focus();
        }
      }
    },
    blurLastInput() {
      if (first.TITLE === first) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.blur();
        }
      } else if (tmp2.CONTENT === tmp) {
        const current = ref2.current;
        if (current != null) {
          current.blur();
        }
      }
    },
    focusedInput: first
  };
};