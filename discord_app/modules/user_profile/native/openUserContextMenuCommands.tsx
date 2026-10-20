// === Module 14089: openUserContextMenuCommands ===

// Module 14089 (openUserContextMenuCommands)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8617 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  const result = analyticsLocations(8617).trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  const obj = analyticsLocations(8617);
  ActionSheetActionCreatorsDefault.hideAllActionSheets();
  const obj3 = analyticsLocations(5111);
  const result1 = obj3.navigateToContextMenuCommands({
    channel: selectedChannel,
    commandType: analyticsLocations(2000).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      return UserProfileAnalyticsUtils.trackUserProfileAction({ action: "PRESS_APP_COMMAND", analyticsLocations });
    }
  });
};