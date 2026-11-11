// discord_app/modules/user_profile/native/openUserProfileAddTagActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import markAccessibilityFocusDefault from "../../a11y/native/markAccessibilityFocus.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const constants = fn(8413).TrackUserProfileEditActions;
const UserProfileAddTagActionSheet = "UserProfileAddTagActionSheet";
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileAddTagActionSheet.tsx");

export default function openUserProfileAddTagActionSheet(widgetEdited) {
  markAccessibilityFocusDefault();
  const obj = UserProfileAnalyticsUtils;
  const result = obj.trackUserProfileEditAction({
    userId: AuthenticationStore.getId(),
    action: constants.PRESS_ADD_TAG,
    widgetEdited: widgetEdited.widgetType,
  });
  const obj2 = {
    userId: AuthenticationStore.getId(),
    action: constants.PRESS_ADD_TAG,
    widgetEdited: widgetEdited.widgetType,
  };
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(12075, dependencyMap.paths),
    UserProfileAddTagActionSheet,
    widgetEdited,
  );
}
export const USER_PROFILE_ADD_TAG_ACTION_SHEET_KEY = "UserProfileAddTagActionSheet";
