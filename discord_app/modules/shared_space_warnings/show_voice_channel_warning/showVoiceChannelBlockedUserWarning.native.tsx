// discord_app/modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

require = fn;
const SharedSpacesWarningStore = fn(13734);
({ queueBlockWarning: closure_4, dequeueBlockWarning: hasOwnProperty } = SharedSpacesWarningStore);
const constants = fn(13737).VoiceChannelWarningSurfaces;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx",
);

export const showVoiceChannelBlockedUserWarning = function showVoiceChannelBlockedUserWarning(channelId, items1) {
  const state = AppStateStore.getState();
  if (state === ConstantsIOS.AppStates.ACTIVE) {
    hasOwnProperty();
    let obj = {
      channelId,
      blockedUserId: items1,
      impressionName: tmp2(1250).ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
      impressionProperties: null,
    };
    obj = { channel_id: channelId, blocked_user_ids: null, warning_surface: null };
    const items = [items1];
    obj.blocked_user_ids = items;
    obj.warning_surface = constants.POST_JOIN_SHEET;
    obj.impressionProperties = obj;
    obj.openLazy(tmp2(1896)(13740, dependencyMap.paths), "gdm_blocked_user_action_sheet", obj);
    const tmp11 = tmp2(1896)(13740, dependencyMap.paths);
  } else {
    React4();
  }
};
