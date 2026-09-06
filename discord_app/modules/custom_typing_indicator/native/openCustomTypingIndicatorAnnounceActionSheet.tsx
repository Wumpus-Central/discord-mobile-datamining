// discord_app/modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx",
);

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet() {
  const obj = {
    markAsDismissed() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
    },
  };
  obj.openLazy(asyncRequireImpl(11969, dependencyMap.paths), CustomTypingIndicatorAnnounceActionSheet, obj);
};
