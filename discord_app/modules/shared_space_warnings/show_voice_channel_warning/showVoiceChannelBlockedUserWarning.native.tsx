// === Module 13739: showVoiceChannelBlockedUserWarning ===

// Module 13739 (showVoiceChannelBlockedUserWarning)
import keys from "keys" /* 1093 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;
import closure_3 from "getState" /* 1895 */;
import useSharedSpacesWarningStore from "useSharedSpacesWarningStore" /* 13734 */;
import { VoiceChannelWarningSurfaces as closure_6 } from "GdmWarningMedium" /* 13737 */;

require = arg1;
({ queueBlockWarning: c4, dequeueBlockWarning: c5 } = useSharedSpacesWarningStore);
const result = require("set").fileFinishedImporting("modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx");

export const showVoiceChannelBlockedUserWarning = function showVoiceChannelBlockedUserWarning(channelId, id) {
  state = state.getState();
  if (state === keys.AppStates.ACTIVE) {
    callback2();
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { channelId: null, blockedUserId: null, impressionName: null, impressionProperties: null };
    obj[0] = channelId;
    obj[1] = id;
    obj[2] = tmp2(1250).ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING;
    obj = { channel_id: null, blocked_user_ids: null, warning_surface: null };
    obj[0] = channelId;
    const items = [id];
    obj[1] = items;
    obj[2] = constants.POST_JOIN_SHEET;
    obj[3] = obj;
    obj.openLazy(tmp2(1896)(13740, dependencyMap.paths), "gdm_blocked_user_action_sheet", obj);
    const tmp11 = tmp2(1896)(13740, dependencyMap.paths);
  } else {
    callback();
  }
};