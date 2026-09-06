// discord_app/modules/stage_channels/native/StageBoostUpsellManager.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import StageChannelPermissions from "../StageChannelPermissions.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import StageMediaHooks from "../StageMediaHooks.tsx";
import useChannelVideoLimit from "../../video_calls/useChannelVideoLimit.tsx";
import ActionSheetStore from "../../action_sheet/native/ActionSheetStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5414).STAGE_BOOSTING_SHEET_KEY;
let c8 = false;
class StageBoostUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = {
      VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect,
      VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates,
    };
    return applyArgumentsResult;
  }
}
const prototype = StageBoostUpsellManager.prototype;
prototype["handleVoiceChannelSelect"] = function handleVoiceChannelSelect(channelId) {
  let tmp = null == channelId.channelId;
  if (tmp) {
    tmp = ActionSheetStore.getKey() === STAGE_BOOSTING_SHEET_KEY;
  }
  if (tmp) {
    ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_BOOSTING_SHEET_KEY);
  }
};
prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates() {
  if (!c8) {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    if (null != voiceChannelId) {
      const channel = ChannelStore.getChannel(voiceChannelId);
      if (null != channel) {
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          let obj = StageMediaHooks;
          if (obj.getStageHasMedia(channel.id)) {
            if (tmp5Result.getChannelVideoLimit(channel).reachedLimit) {
              if (PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel)) {
                obj = { channel };
                ActionSheetActionCreatorsDefault.openLazy(
                  asyncRequireImpl(5430, dependencyMap.paths),
                  STAGE_BOOSTING_SHEET_KEY,
                  obj,
                );
                c8 = true;
              }
            }
            tmp5Result = useChannelVideoLimit;
          }
        }
      }
    }
  }
};
const stageBoostUpsellManager = new StageBoostUpsellManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/StageBoostUpsellManager.tsx");

export default stageBoostUpsellManager;
