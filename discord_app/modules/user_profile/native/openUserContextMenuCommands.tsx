// === Module 12089: openUserContextMenuCommands ===

// Module 12089 (openUserContextMenuCommands)
import obj132 from "obj132" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

let result = obj132.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8935);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  obj = {
    channel: selectedChannel,
    commandType: analyticsLocations(1954).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      analyticsLocations(dependencyMap[0]);
      const obj = { action: "PRESS_APP_COMMAND", analyticsLocations };
      return obj.trackUserProfileAction(obj);
    }
  };
  const result1 = analyticsLocations(4229).navigateToContextMenuCommands(obj);
};