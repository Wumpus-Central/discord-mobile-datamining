// === Module 13085: openUserContextMenuCommands ===

// Module 13085 (openUserContextMenuCommands)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8276 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8276);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  ActionSheetActionCreatorsDefault.hideAllActionSheets();
  obj = {
    channel: selectedChannel,
    commandType: analyticsLocations(1894).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      const obj = { action: "PRESS_APP_COMMAND", analyticsLocations };
      return obj.trackUserProfileAction(obj);
    }
  };
  const result1 = analyticsLocations(4464).navigateToContextMenuCommands(obj);
};