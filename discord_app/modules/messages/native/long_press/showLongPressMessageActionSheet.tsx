// discord_app/modules/messages/native/long_press/showLongPressMessageActionSheet.tsx
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(analyticsLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11281, dependencyMap.paths), "MessageLongPressActionSheet", analyticsLocation);
};
