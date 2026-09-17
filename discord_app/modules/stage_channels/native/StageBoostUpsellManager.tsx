// === Module 17735: StageBoostUpsellManager ===

// Module 17735 (StageBoostUpsellManager)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import StageChannelPermissions from "StageChannelPermissions" /* 1966 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import StageMediaHooks from "StageMediaHooks" /* 5505 */;
import useChannelVideoLimit from "useChannelVideoLimit" /* 9242 */;
import ActionSheetStore from "ActionSheetStore" /* 4330 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7232 */;

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5502).STAGE_BOOSTING_SHEET_KEY;
let c8 = false;
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
          if (obj.getStageHasMedia(channel.id)) {
            if (tmp5Result.getChannelVideoLimit(channel).reachedLimit) {
              if (PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel)) {
                const obj2 = { channel };
                ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(5518, dependencyMap.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
                c8 = true;
              }
            }
            tmp5Result = useChannelVideoLimit;
          }
          obj = StageMediaHooks;
        }
      }
    }
  }
};
const stageBoostUpsellManager = new StageBoostUpsellManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/StageBoostUpsellManager.tsx");

export default stageBoostUpsellManager;