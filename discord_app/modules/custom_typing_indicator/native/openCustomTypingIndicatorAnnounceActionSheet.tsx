// discord_app/modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = set.fileFinishedImporting(
  "modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx",
);

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    markAsDismissed() {
      return callback(table[0]).hideActionSheet(closure_3);
    },
  };
  obj.openLazy(asyncRequireImpl(11969, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj);
};
