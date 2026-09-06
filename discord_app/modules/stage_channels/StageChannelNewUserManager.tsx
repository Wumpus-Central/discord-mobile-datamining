// discord_app/modules/stage_channels/StageChannelNewUserManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import StageChannelAlertActionCreatorsAll from "StageChannelAlertActionCreators.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import StageChannelRoleStore from "StageChannelRoleStore.tsx";
import LifecycleManager from "../../lib/LifecycleManager.tsx";

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
