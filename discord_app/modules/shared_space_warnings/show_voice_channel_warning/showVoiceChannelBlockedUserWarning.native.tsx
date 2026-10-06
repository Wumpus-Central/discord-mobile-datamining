// discord_app/modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import SharedSpaceWarningConstants from "../SharedSpaceWarningConstants.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import SharedSpacesWarningStore from "../SharedSpacesWarningStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
({ queueBlockWarning: closure_4, dequeueBlockWarning: hasOwnProperty } = SharedSpacesWarningStore);
const constants = SharedSpaceWarningConstants.VoiceChannelWarningSurfaces;
const result = size.fileFinishedImporting(
  "modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx",
);

export const showVoiceChannelBlockedUserWarning = function showVoiceChannelBlockedUserWarning(channelId, items1) {
  let items;
  let obj2;
  const state = AppStateStore.getState();
  if (state === ConstantsIOS.AppStates.ACTIVE) {
    hasOwnProperty();
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj = {
      channelId,
      blockedUserId: items1,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
      impressionProperties: obj2,
    };
    ActionSheetActionCreatorsDefault;
    obj2 = { channel_id: channelId, blocked_user_ids: items, warning_surface: constants.POST_JOIN_SHEET };
    items = [items1];
    const tmp12 = asyncRequire(13567, dependencyMap.paths);
    openLazy(tmp12, "gdm_blocked_user_action_sheet", obj);
  } else {
    React3();
  }
};
