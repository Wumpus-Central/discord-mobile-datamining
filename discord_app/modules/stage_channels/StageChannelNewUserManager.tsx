// === Module 12928: StageChannelNewUserManager ===

// Module 12928 (StageChannelNewUserManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import StageChannelAlertActionCreatorsAll from "StageChannelAlertActionCreators" /* 12929 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5421 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;

let require = fn;
let closure_7 = fn(5414).STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY;
class StageChannelNewUserManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates(voiceStates) {
      voiceStates = voiceStates.voiceStates;
      const item = voiceStates.forEach((channelId) => {
        if (null != channelId.channelId) {
          if (channelId.userId === id.getId()) {
            closure_1_0.terminate();
            const Storage2 = applyArgumentsResult(dependencyMap[6]).Storage;
            if (!Storage2.get(closure_2_7, false)) {
              voiceChannelId = voiceChannelId.getVoiceChannelId();
              let isAudienceMemberResult = null != voiceChannelId && channelId.channelId === voiceChannelId;
              if (isAudienceMemberResult) {
                isAudienceMemberResult = audienceMember.isAudienceMember(channelId.userId, voiceChannelId);
              }
              if (isAudienceMemberResult) {
                const Storage = applyArgumentsResult(dependencyMap[6]).Storage;
                const result = Storage.set(closure_2_7, true);
                const result1 = StageChannelAlertActionCreatorsAll.openStageChannelAudienceNoticeModal(voiceChannelId);
              }
            }
          }
        }
      });
    };
    return applyArgumentsResult;
  }
}
const prototype = StageChannelNewUserManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
};
const stageChannelNewUserManager = new StageChannelNewUserManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelNewUserManager.tsx");

export default stageChannelNewUserManager;