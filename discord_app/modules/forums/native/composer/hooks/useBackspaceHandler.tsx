// discord_app/modules/forums/native/composer/hooks/useBackspaceHandler.tsx
import noop from "../../../../../../_runtime/00019_noop.js";

const re1 = /((\ud83c[\udde6-\uddff]){2}|([#*0-9]\u20e3)|(\u00a9|\u00ae|[\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])((\ud83c[\udffb-\udfff])?(\ud83e[\uddb0-\uddb3])?(\ufe0f?\u200d([\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])\ufe0f?)?)*)/g;
const result = require("obj132").fileFinishedImporting("modules/forums/native/composer/hooks/useBackspaceHandler.tsx");

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
        if (start >= num) {
          if (draftContent.test(draftContent.substring(start - num, start))) {
            let sum = num + 1;
            num2 = num;
            if (start < sum) {
              break;
            } else {
              let sum1 = sum;
              num2 = num;
              if (!draftContent.test(draftContent.substring(start - num - 1, start))) {
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
};