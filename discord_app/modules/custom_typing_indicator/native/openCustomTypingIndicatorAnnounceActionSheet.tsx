// === Module 11661: openCustomTypingIndicatorAnnounceActionSheet ===

// Module 11661 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11662, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, {
    analyticsLocations,
    markAsDismissed() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
    }
  });
};