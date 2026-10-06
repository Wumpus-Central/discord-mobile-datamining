// === Module 10086: useBackspaceHandler ===

// Module 10086 (useBackspaceHandler)
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let selection;

const re3 = /((\ud83c[\udde6-\uddff]){2}|([#*0-9]\u20e3)|(\u00a9|\u00ae|[\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])((\ud83c[\udffb-\udfff])?(\ud83e[\uddb0-\uddb3])?(\ufe0f?\u200d([\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])\ufe0f?)?)*)/g;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((selection) => {
  let draftContent;
  const obj = selection(draftContent[2]);
  const cResult = obj.c(4);
  selection = selection.selection;
  draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  if (cResult[0] === draftContent) {
    if (cResult[1] === handleTextChange) {
      let tmp2;
      if (cResult[2] === selection) {
        tmp2 = cResult[3];
      }
      return tmp2;
    }
  }
  const fn = function t() {
    let end;
    let num2;
    let start;
    ({ start, end } = selection);
    if (0 !== start) {
      let num = 1;
      if (null != end) {
        num = 1;
        if (start !== end) {
          const substr = draftContent.substring(0, start);
          handleTextChange(substr + draftContent.substring(end));
        }
      }
      while (true) {
        if (start >= num) {
          if (re3.test(draftContent.substring(start - num, start))) {
            let sum = num + 1;
            num2 = num;
            if (start < sum) {
              break;
            } else {
              let sum1 = sum;
              num2 = num;
              if (!re3.test(draftContent.substring(start - num - 1, start))) {
                break;
              } else {
                num = sum1;
                num2 = 1;
                if (sum1 > 8) {
                  break;
                }
              }
            }
          }
        }
        sum1 = num + 1;
      }
      const substr1 = draftContent.substring(0, start - num2);
      handleTextChange(substr1 + draftContent.substring(start));
    }
  };
  cResult[0] = draftContent;
  cResult[1] = handleTextChange;
  cResult[2] = selection;
  cResult[3] = fn;
  tmp2 = fn;
}) : ((selection) => {
  selection = selection.selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const items = [selection, draftContent, handleTextChange];
  return handleTextChange.useCallback(() => {
    let end;
    let num2;
    let start;
    ({ start, end } = selection);
    if (0 !== start) {
      let num = 1;
      if (null != end) {
        num = 1;
        if (start !== end) {
          const substr = draftContent.substring(0, start);
          handleTextChange(substr + draftContent.substring(end));
        }
      }
      while (true) {
        if (start >= num) {
          if (re3.test(draftContent.substring(start - num, start))) {
            let sum = num + 1;
            num2 = num;
            if (start < sum) {
              break;
            } else {
              let sum1 = sum;
              num2 = num;
              if (!re3.test(draftContent.substring(start - num - 1, start))) {
                break;
              } else {
                num = sum1;
                num2 = 1;
                if (sum1 > 8) {
                  break;
                }
              }
            }
          }
        }
        sum1 = num + 1;
      }
      const substr1 = draftContent.substring(0, start - num2);
      handleTextChange(substr1 + draftContent.substring(start));
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/forums/native/composer/hooks/useBackspaceHandler.tsx");

export const useBackspaceHandler = tmp2;