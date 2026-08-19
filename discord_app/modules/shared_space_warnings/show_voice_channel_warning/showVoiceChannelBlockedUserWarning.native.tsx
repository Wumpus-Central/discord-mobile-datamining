// discord_app/modules/shared_space_warnings/show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx
import encodeProperties from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import keys from "../../../ConstantsIOS.tsx";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import getState from "../../../stores/native/AppStateStore.tsx";
import useSharedSpacesWarningStore from "../SharedSpacesWarningStore.tsx";
import { VoiceChannelWarningSurfaces as closure_6 } from "../SharedSpaceWarningConstants.tsx";

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