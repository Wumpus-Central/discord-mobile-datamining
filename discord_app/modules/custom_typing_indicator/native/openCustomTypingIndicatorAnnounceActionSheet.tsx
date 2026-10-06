// discord_app/modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx",
);

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet() {
  let obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    markAsDismissed() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
    },
  };
  obj.openLazy(asyncRequire(11596, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj2);
};
