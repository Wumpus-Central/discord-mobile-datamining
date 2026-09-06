// === Module 10264: useBackspaceHandler ===

// Module 10264 (useBackspaceHandler)
import closure_0 from "noop" /* 19 */;

const re1 = /((\ud83c[\udde6-\uddff]){2}|([#*0-9]\u20e3)|(\u00a9|\u00ae|[\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])((\ud83c[\udffb-\udfff])?(\ud83e[\uddb0-\uddb3])?(\ufe0f?\u200d([\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])\ufe0f?)?)*)/g;
const result = require("set").fileFinishedImporting("modules/forums/native/composer/hooks/useBackspaceHandler.tsx");

export const useBackspaceHandler = function useBackspaceHandler(selection) {
  selection = selection.selection;
  const draftContent = selection.draftContent;
  const handleTextChange = selection.handleTextChange;
  const items = [selection, draftContent, handleTextChange];
  return selection.useCallback(() => {
    let num2;
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
        let tmp5 = num;
        if (start >= num) {
          let obj = draftContent;
          let str = draftContent;
          if (draftContent.test(draftContent.substring(start - num, start))) {
            let sum = num + 1;
            num2 = num;
            if (start < sum) {
              break;
            } else {
              let sum1 = sum;
              num2 = num;
              if (!obj.test(str.substring(start - num - 1, start))) {
                break;
              } else {
                let num3 = 8;
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
};