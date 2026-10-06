// discord_app/modules/user_profile/native/openUserContextMenuCommands.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(7873);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  let obj2 = ActionSheetActionCreatorsDefault;
  obj2.hideAllActionSheets();
  const obj3 = analyticsLocations(4742);
  const obj4 = {
    channel: selectedChannel,
    commandType: analyticsLocations(1985).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      const obj = UserProfileAnalyticsUtils;
      const obj2 = { action: "PRESS_APP_COMMAND", analyticsLocations };
      return obj.trackUserProfileAction(obj2);
    },
  };
  const result1 = obj3.navigateToContextMenuCommands(obj4);
}
