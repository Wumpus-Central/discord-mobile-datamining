// discord_app/modules/messages/native/long_press/showLongPressMessageActionSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(analyticsLocation) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(11658, dependencyMap.paths),
    "MessageLongPressActionSheet",
    analyticsLocation,
  );
};
