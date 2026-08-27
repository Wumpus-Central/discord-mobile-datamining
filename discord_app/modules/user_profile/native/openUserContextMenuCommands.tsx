// === Module 9006: openUserContextMenuCommands ===

// Module 9006 (openUserContextMenuCommands)
import set from "set" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

let result = set.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8491);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  ACTION_SHEET_HEIGHT_HALFDefault.hideAllActionSheets();
  const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    channel: selectedChannel,
    commandType: analyticsLocations(1955).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      let obj = analyticsLocations(closure_1_2[0]);
      obj = { action: "PRESS_APP_COMMAND", analyticsLocations };
      return obj.trackUserProfileAction(obj);
    }
  };
  const result1 = analyticsLocations(4299).navigateToContextMenuCommands(obj);
};