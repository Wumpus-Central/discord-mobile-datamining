// discord_app/modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const CustomTypingIndicatorAnnounceActionSheet = "CustomTypingIndicatorAnnounceActionSheet";
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/openCustomTypingIndicatorAnnounceActionSheet.tsx",
);

export const openCustomTypingIndicatorAnnounceActionSheet = function openCustomTypingIndicatorAnnounceActionSheet(
  analyticsLocations,
) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(11644, dependencyMap.paths),
    CustomTypingIndicatorAnnounceActionSheet,
    {
      analyticsLocations,
      markAsDismissed() {
        return ActionSheetActionCreatorsDefault.hideActionSheet(CustomTypingIndicatorAnnounceActionSheet);
      },
    },
  );
};
