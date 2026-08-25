// === Module 12867: _initialize ===

// Module 12867 (_initialize)
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 4562 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "handleConnectionOpen" /* 1981 */;
import closure_6 from "buildStageChannelUserRoles" /* 5246 */;
import { STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY as closure_7 } from "MAX_STAGE_TOPIC_LENGTH" /* 5239 */;

let require = arg1;
initializeDefault;
class StageChannelNewUserManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates(voiceStates) {
      voiceStates = voiceStates.voiceStates;
      const item = voiceStates.forEach((channelId) => {
        if (null != channelId.channelId) {
          if (channelId.userId === closure_1_4.getId()) {
            closure_0.terminate();
            const Storage2 = closure_1_0(closure_1_3[6]).Storage;
            if (!Storage2.get(closure_1_7, false)) {
              const voiceChannelId = closure_1_5.getVoiceChannelId();
              let isAudienceMemberResult = null != voiceChannelId && channelId.channelId === voiceChannelId;
              if (isAudienceMemberResult) {
                isAudienceMemberResult = closure_1_6.isAudienceMember(channelId.userId, voiceChannelId);
              }
              if (isAudienceMemberResult) {
                const Storage = tmp11(tmp12[6]).Storage;
                const result = Storage.set(tmp13, true);
                const result1 = closure_1_2(tmp12[7]).openStageChannelAudienceNoticeModal(voiceChannelId);
                const obj = closure_1_2(tmp12[7]);
              }
            }
            tmp11 = closure_1_0;
            tmp13 = closure_1_7;
          }
        }
      });
    };
    return applyArgumentsResult;
  }
}
const prototype = StageChannelNewUserManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcherDefault.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
};
const stageChannelNewUserManager = new StageChannelNewUserManager();
let result = require("set").fileFinishedImporting("modules/stage_channels/StageChannelNewUserManager.tsx");

export default stageChannelNewUserManager;