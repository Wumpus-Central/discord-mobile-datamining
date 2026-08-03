import fetchFingerprint from "fetchFingerprint";
import handleConnectionOpen from "handleConnectionOpen";
import buildStageChannelUserRoles from "buildStageChannelUserRoles";
import { STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY as closure_7 } from "MAX_STAGE_TOPIC_LENGTH";
import "initialize";

let require = arg1;
class StageChannelNewUserManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates(voiceStates) {
      voiceStates = voiceStates.voiceStates;
      const item = voiceStates.forEach((channelId) => {
        if (null != channelId.channelId) {
          if (channelId.userId === outer1_4.getId()) {
            closure_0.terminate();
            const Storage2 = outer1_0(outer1_3[6]).Storage;
            if (!Storage2.get(outer1_7, false)) {
              const voiceChannelId = outer1_5.getVoiceChannelId();
              let isAudienceMemberResult = null != voiceChannelId && channelId.channelId === voiceChannelId;
              if (isAudienceMemberResult) {
                isAudienceMemberResult = outer1_6.isAudienceMember(channelId.userId, voiceChannelId);
              }
              if (isAudienceMemberResult) {
                const Storage = tmp11(tmp12[6]).Storage;
                const result = Storage.set(tmp13, true);
                const result1 = outer1_2(tmp12[7]).openStageChannelAudienceNoticeModal(voiceChannelId);
                const obj = outer1_2(tmp12[7]);
              }
            }
            tmp11 = outer1_0;
            tmp13 = outer1_7;
          }
        }
      });
    };
    return applyArgumentsResult;
  }
}
const prototype = StageChannelNewUserManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = importDefault(709).subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
};
prototype["_terminate"] = function _terminate() {
  importDefault(709).unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
};
const stageChannelNewUserManager = new StageChannelNewUserManager();
let result = require("buildStageChannelUserRoles").fileFinishedImporting("modules/stage_channels/StageChannelNewUserManager.tsx");

export default stageChannelNewUserManager;