// === Module 9712: useFocusHandlers ===

// Module 9712 (useFocusHandlers)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const PostComposerInputs = { TITLE: 0, [0]: "TITLE", CONTENT: 1, [1]: "CONTENT" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/hooks/useFocusHandlers.tsx");

export { PostComposerInputs };
export const useFocusHandlers = ReactCompilerGating.isReactCompilerEnabled() ? (function useFocusHandlers(titleInput) {
  const obj = titleInput(contentInput[3]);
  const cResult = obj.c(12);
  titleInput = titleInput.titleInput;
  contentInput = titleInput.contentInput;
  focusedInput = focusedInput(noop.useState(obj.TITLE), 2)[0];
  if (cResult[0] === contentInput) {
    if (cResult[1] === focusedInput) {
      if (cResult[2] === titleInput) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] === contentInput) {
        if (cResult[5] === focusedInput) {
          if (cResult[6] === titleInput) {
            let tmp6 = cResult[7];
          }
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp5) {
              if (cResult[10] === focusedInput) {
                let tmp7 = cResult[11];
              }
              return tmp7;
            }
          }
          const obj2 = { setFocusedInput: tmp4, focusLastInput: tmp5, blurLastInput: tmp6, focusedInput };
          cResult[8] = tmp6;
          cResult[9] = tmp5;
          cResult[10] = focusedInput;
          cResult[11] = obj2;
          tmp7 = obj2;
        }
      }
      function blurLastInput() {
        if (obj.TITLE === first) {
          const current2 = titleInput.current;
          if (current2 != null) {
            current2.blur();
          }
        } else if (tmp2.CONTENT === tmp) {
          const current = contentInput.current;
          if (current != null) {
            current.blur();
          }
        }
      }
      cResult[4] = contentInput;
      cResult[5] = focusedInput;
      cResult[6] = titleInput;
      cResult[7] = blurLastInput;
      tmp6 = blurLastInput;
    }
  }
  function focusLastInput() {
    if (obj.TITLE === first) {
      const current2 = titleInput.current;
      if (current2 != null) {
        current2.focus();
      }
    } else if (tmp2.CONTENT === tmp) {
      const current = contentInput.current;
      if (current != null) {
        current.focus();
      }
    }
  }
  cResult[0] = contentInput;
  cResult[1] = focusedInput;
  cResult[2] = titleInput;
  cResult[3] = focusLastInput;
  tmp5 = focusLastInput;
}) : (function useFocusHandlers(arg0) {
  ({ titleInput: require, contentInput: dependencyMap } = arg0);
  let focusedInput;
  const tmp = focusedInput(noop.useState(obj.TITLE), 2);
  focusedInput = tmp[0];
  obj = {
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
  return obj;
});