// discord_app/modules/stage_channels/native/StageBoostUpsellManager.tsx
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useStageHasMedia from "../StageMediaHooks.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import closure_3 from "../../action_sheet/native/ActionSheetStore.tsx";
import closure_4 from "../../../stores/ChannelStore.tsx";
import closure_5 from "../../../stores/PermissionStore.tsx";
import closure_6 from "../../../stores/SelectedChannelStore.tsx";
import { STAGE_BOOSTING_SHEET_KEY } from "../StageChannelsConstants.tsx";

require = arg1;
let c8 = false;
initializeDefault;
class StageBoostUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect, VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
}
const prototype = StageBoostUpsellManager.prototype;
prototype["handleVoiceChannelSelect"] = function handleVoiceChannelSelect(channelId) {
  let tmp = null == channelId.channelId;
  if (tmp) {
    tmp = key.getKey() === STAGE_BOOSTING_SHEET_KEY;
  }
  if (tmp) {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(STAGE_BOOSTING_SHEET_KEY);
    const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  }
};
prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates() {
  if (!c8) {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null != voiceChannelId) {
      channel = channel.getChannel(voiceChannelId);
      if (null != channel) {
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          let obj = useStageHasMedia;
          if (obj.getStageHasMedia(channel.id)) {
            if (tmp5Result.getChannelVideoLimit(channel).reachedLimit) {
              if (closure_5.can(tmp5(1399).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel)) {
                obj = { channel: null };
                obj[0] = channel;
                ACTION_SHEET_HEIGHT_HALFDefault.openLazy(tmp5(2010)(5338, tmp6.paths), STAGE_BOOSTING_SHEET_KEY, obj);
                c8 = true;
                const obj3 = ACTION_SHEET_HEIGHT_HALFDefault;
              }
            }
            tmp5Result = tmp5(9719);
          }
          tmp6 = dependencyMap;
        }
      }
    }
  }
};
const stageBoostUpsellManager = new StageBoostUpsellManager();
const result = require("set").fileFinishedImporting("modules/stage_channels/native/StageBoostUpsellManager.tsx");

export default stageBoostUpsellManager;