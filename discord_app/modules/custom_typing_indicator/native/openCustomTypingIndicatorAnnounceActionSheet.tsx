// === Module 11643: openCustomTypingIndicatorAnnounceActionSheet ===

// Module 11643 (openCustomTypingIndicatorAnnounceActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx");

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet(analyticsLocations) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11644, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, {
    analyticsLocations,
    markAsDismissed() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
    }
  });
};