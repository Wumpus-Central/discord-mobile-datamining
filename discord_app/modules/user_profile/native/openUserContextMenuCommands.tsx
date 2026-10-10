// === Module 13101: openUserContextMenuCommands ===

// Module 13101 (openUserContextMenuCommands)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8315 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  const result = analyticsLocations(8315).trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  const obj = analyticsLocations(8315);
  ActionSheetActionCreatorsDefault.hideAllActionSheets();
  const obj3 = analyticsLocations(4976);
  const result1 = obj3.navigateToContextMenuCommands({
    channel: selectedChannel,
    commandType: analyticsLocations(1998).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      return UserProfileAnalyticsUtils.trackUserProfileAction({ action: "PRESS_APP_COMMAND", analyticsLocations });
    }
  });
};