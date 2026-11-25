// === Module 14826: openUserContextMenuCommands ===

// Module 14826 (openUserContextMenuCommands)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 6351 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  const result = analyticsLocations(6351).trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  const obj = analyticsLocations(6351);
  ActionSheetActionCreatorsDefault.hideAllActionSheets();
  const obj3 = analyticsLocations(5188);
  const result1 = obj3.navigateToContextMenuCommands({
    channel: selectedChannel,
    commandType: analyticsLocations(2117).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      return UserProfileAnalyticsUtils.trackUserProfileAction({ action: "PRESS_APP_COMMAND", analyticsLocations });
    }
  });
};