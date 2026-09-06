// === Module 10259: useFocusHandlers ===

// Module 10259 (useFocusHandlers)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const PostComposerInputs = { TITLE: 0, [0]: "TITLE", CONTENT: 1, [1]: "CONTENT" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/hooks/useFocusHandlers.tsx");

export { PostComposerInputs };
export const useFocusHandlers = function useFocusHandlers(arg0) {
  ({ titleInput: _slicedToArray, contentInput: noop } = arg0);
  let focusedInput;
  const tmp = _slicedToArray(noop.useState(focusedInput.TITLE), 2);
  focusedInput = tmp[0];
  return {
    setFocusedInput: tmp[1],
    focusLastInput() {
      if (obj.TITLE === first) {
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
      if (obj.TITLE === first) {
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
    focusedInput
  };
};