import setContent from "setContent";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import { STAGE_BOOSTING_SHEET_KEY } from "MAX_STAGE_TOPIC_LENGTH";
import "initialize";

const require = arg1;
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
    tmp = key.getKey() === STAGE_BOOSTING_SHEET_KEY;
  }
  if (tmp) {
    importDefault(4223).hideActionSheet(STAGE_BOOSTING_SHEET_KEY);
    const obj = importDefault(4223);
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
          let obj = require(5073) /* useStageHasMedia */;
          if (obj.getStageHasMedia(channel.id)) {
            if (tmp5Result.getChannelVideoLimit(channel).reachedLimit) {
              if (getUncachedChannelPermissions.can(tmp5(1380).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel)) {
                obj = { channel: null };
                obj[0] = channel;
                importDefault(4223).openLazy(tmp5(1959)(5085, tmp6.paths), STAGE_BOOSTING_SHEET_KEY, obj);
                c8 = true;
                const obj3 = importDefault(4223);
              }
            }
            tmp5Result = tmp5(9023);
          }
          tmp6 = dependencyMap;
        }
      }
    }
  }
};
const stageBoostUpsellManager = new StageBoostUpsellManager();
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/stage_channels/native/StageBoostUpsellManager.tsx");

export default stageBoostUpsellManager;