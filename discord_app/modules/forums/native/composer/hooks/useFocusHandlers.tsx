// === Module 10081: useFocusHandlers ===

// Module 10081 (useFocusHandlers)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let titleInput;

const PostComposerInputs = { TITLE: 0, [0]: "TITLE", CONTENT: 1, [1]: "CONTENT" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((titleInput) => {
  let contentInput;
  let focusedInput;
  const obj = titleInput(contentInput[3]);
  const cResult = obj.c(12);
  titleInput = titleInput.titleInput;
  contentInput = titleInput.contentInput;
  const tmp2 = focusedInput(react.useState(obj.TITLE), 2);
  focusedInput = tmp2[0];
  if (cResult[0] === contentInput) {
    if (cResult[1] === focusedInput) {
      let tmp5;
      if (cResult[2] === titleInput) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === contentInput) {
        if (cResult[5] === focusedInput) {
          let tmp6;
          if (cResult[6] === titleInput) {
            tmp6 = cResult[7];
          }
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp5) {
              let tmp7;
              if (cResult[10] === focusedInput) {
                tmp7 = cResult[11];
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
      const fn2 = function b() {
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
      };
      cResult[4] = contentInput;
      cResult[5] = focusedInput;
      cResult[6] = titleInput;
      cResult[7] = fn2;
      tmp6 = fn2;
    }
  }
  const fn = function c() {
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
  };
  cResult[0] = contentInput;
  cResult[1] = focusedInput;
  cResult[2] = titleInput;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((arg0) => {
  let obj;
  let ref;
  let ref2;
  ({ titleInput: require, contentInput: dependencyMap } = arg0);
  let focusedInput;
  const tmp = focusedInput(react.useState(obj.TITLE), 2);
  focusedInput = tmp[0];
  obj = {
    setFocusedInput: tmp[1],
    focusLastInput() {
      if (obj.TITLE === first) {
        const current2 = require.current;
        if (current2 != null) {
          current2.focus();
        }
      } else if (tmp2.CONTENT === tmp) {
        const current = dependencyMap.current;
        if (current != null) {
          current.focus();
        }
      }
    },
    blurLastInput() {
      if (obj.TITLE === first) {
        const current2 = require.current;
        if (current2 != null) {
          current2.blur();
        }
      } else if (tmp2.CONTENT === tmp) {
        const current = dependencyMap.current;
        if (current != null) {
          current.blur();
        }
      }
    },
    focusedInput
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/forums/native/composer/hooks/useFocusHandlers.tsx");

export { PostComposerInputs };
export const useFocusHandlers = tmp2;