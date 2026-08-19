// === Module 13288: showVoiceChannelBlockedUserWarning ===

// Module 13288 (showVoiceChannelBlockedUserWarning)
import encodeProperties from "encodeProperties" /* 503 */;
import keys from "keys" /* 691 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import getState from "getState" /* 7383 */;
import useSharedSpacesWarningStore from "useSharedSpacesWarningStore" /* 13283 */;
import { VoiceChannelWarningSurfaces as closure_6 } from "GdmWarningMedium" /* 13286 */;

require = fn;
({ queueBlockWarning: c4, dequeueBlockWarning: c5 } = useSharedSpacesWarningStore);
const result = require("obj132").fileFinishedImporting("modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx");

export const showVoiceChannelBlockedUserWarning = function showVoiceChannelBlockedUserWarning(channelId, items1) {
  state = state.getState();
  if (state === keys.AppStates.ACTIVE) {
    callback2();
    let obj = { channelId: null, blockedUserId: null, impressionName: null, impressionProperties: null };
    obj[0] = channelId;
    obj[1] = items1;
    obj[2] = encodeProperties.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING;
    obj = { channel_id: null, blocked_user_ids: null, warning_surface: null };
    obj[0] = channelId;
    const items = [items1];
    obj[1] = items;
    obj[2] = constants.POST_JOIN_SHEET;
    obj[3] = obj;
    obj.openLazy(asyncRequireImpl(13289, dependencyMap.paths), "gdm_blocked_user_action_sheet", obj);
    const tmp11 = asyncRequireImpl(13289, dependencyMap.paths);
  } else {
    callback();
  }
};