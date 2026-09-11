// === Module 12061: openCustomTypingIndicatorAnnounceActionSheet ===

// Module 12061 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet() {
  const obj = {
    markAsDismissed() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
    }
  };
  obj.openLazy(asyncRequireImpl(12062, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj);
};