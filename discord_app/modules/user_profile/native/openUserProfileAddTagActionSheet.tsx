// === Module 14542: openUserProfileAddTagActionSheet ===

// Module 14542 (openUserProfileAddTagActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import markAccessibilityFocusDefault from "markAccessibilityFocus" /* 6020 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 6351 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const constants = fn(6106).TrackUserProfileEditActions;
const UserProfileAddTagActionSheet = "UserProfileAddTagActionSheet";
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/openUserProfileAddTagActionSheet.tsx");

export default function openUserProfileAddTagActionSheet(widgetEdited) {
  markAccessibilityFocusDefault();
  const obj = UserProfileAnalyticsUtils;
  const result = obj.trackUserProfileEditAction({ userId: AuthenticationStore.getId(), action: constants.PRESS_ADD_TAG, widgetEdited: widgetEdited.widgetType });
  const obj2 = { userId: AuthenticationStore.getId(), action: constants.PRESS_ADD_TAG, widgetEdited: widgetEdited.widgetType };
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14543, dependencyMap.paths), UserProfileAddTagActionSheet, widgetEdited);
};
export const USER_PROFILE_ADD_TAG_ACTION_SHEET_KEY = "UserProfileAddTagActionSheet";