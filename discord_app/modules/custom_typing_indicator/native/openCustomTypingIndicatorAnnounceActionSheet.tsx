// === Module 11582: openCustomTypingIndicatorAnnounceActionSheet ===

// Module 11582 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11583, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, {
    markAsDismissed() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
    }
  });
};