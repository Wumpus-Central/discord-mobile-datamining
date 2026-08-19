// === Module 16703: handleVoiceChannelSelect ===

// Module 16703 (handleVoiceChannelSelect)
import Permissions from "Permissions" /* 1399 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import useStageHasMedia from "useStageHasMedia" /* 4988 */;
import initializeDefault from "initialize" /* 5038 */;
import useChannelVideoLimit from "useChannelVideoLimit" /* 9653 */;
import setContent from "setContent" /* 4086 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import { STAGE_BOOSTING_SHEET_KEY } from "MAX_STAGE_TOPIC_LENGTH" /* 4978 */;

require = fn;
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
              if (closure_5.can(Permissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, channel)) {
                obj = { channel: null };
                obj[0] = channel;
                ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(6707, dependencyMap.paths), STAGE_BOOSTING_SHEET_KEY, obj);
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
const result = require("obj132").fileFinishedImporting("modules/stage_channels/native/StageBoostUpsellManager.tsx");

export default stageBoostUpsellManager;