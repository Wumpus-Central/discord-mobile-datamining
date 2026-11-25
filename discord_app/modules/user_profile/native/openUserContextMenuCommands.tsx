// discord_app/modules/user_profile/native/openUserContextMenuCommands.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  const result = analyticsLocations(6351).trackUserProfileAction({
    action: "PRESS_VIEW_APP_COMMANDS",
    analyticsLocations,
  });
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
    },
  });
}
