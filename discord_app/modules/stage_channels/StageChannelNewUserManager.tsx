// discord_app/modules/stage_channels/StageChannelNewUserManager.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import initializeDefault from "../../lib/LifecycleManager.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import buildStageChannelUserRoles from "StageChannelRoleStore.tsx";
import { STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY as closure_7 } from "StageChannelsConstants.tsx";

let require = fn;
initializeDefault;
class StageChannelNewUserManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates(voiceStates) {
      voiceStates = voiceStates.voiceStates;
      const item = voiceStates.forEach((item, index) => {
        if (null != item.channelId) {
          if (item.userId === closure_1_4.getId()) {
            closure_0.terminate();
            const Storage2 = closure_1_0(closure_1_3[6]).Storage;
            if (!Storage2.get(closure_1_7, false)) {
              const voiceChannelId = closure_1_5.getVoiceChannelId();
              let isAudienceMemberResult = null != voiceChannelId && item.channelId === voiceChannelId;
              if (isAudienceMemberResult) {
                isAudienceMemberResult = closure_1_6.isAudienceMember(item.userId, voiceChannelId);
              }
              if (isAudienceMemberResult) {
                const Storage = closure_1_0(closure_1_3[6]).Storage;
                const result = Storage.set(closure_1_7, true);
                const result1 = closure_1_2(closure_1_3[7]).openStageChannelAudienceNoticeModal(voiceChannelId);
                const obj = closure_1_2(closure_1_3[7]);
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
  const subscription = dispatcherDefault.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
};
const stageChannelNewUserManager = new StageChannelNewUserManager();
let result = require("obj132").fileFinishedImporting("modules/stage_channels/StageChannelNewUserManager.tsx");

export default stageChannelNewUserManager;