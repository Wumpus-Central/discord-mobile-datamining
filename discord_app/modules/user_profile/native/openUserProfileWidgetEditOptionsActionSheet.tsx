// discord_app/modules/user_profile/native/openUserProfileWidgetEditOptionsActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const UserProfileWidgetEditOptionsActionSheet = "UserProfileWidgetEditOptionsActionSheet";
const result = size.fileFinishedImporting(
  "modules/user_profile/native/openUserProfileWidgetEditOptionsActionSheet.tsx",
);

export default function openUserProfileWidgetEditOptionsActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(12535, dependencyMap.paths),
    UserProfileWidgetEditOptionsActionSheet,
    arg0,
  );
}
export const USER_PROFILE_WIDGET_EDIT_OPTIONS_ACTION_SHEET_KEY = "UserProfileWidgetEditOptionsActionSheet";
