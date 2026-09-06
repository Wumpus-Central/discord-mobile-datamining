// discord_app/modules/experiments/trigger_points/CommonTriggerPointManager.tsx
import OpenUserSettingsTriggerPoint2 from "OpenUserSettingsTriggerPoint.tsx";
import VoiceCallTriggerPoint2 from "VoiceCallTriggerPoint.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
class CommonTriggerPointManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = {
      VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect,
      CALL_CREATE: applyArgumentsResult.handleCallCreate,
      USER_SETTINGS_MODAL_OPEN: applyArgumentsResult.handleUserSettingsModalOpen,
    };
    return applyArgumentsResult;
  }
}
const prototype = CommonTriggerPointManager.prototype;
prototype["handleVoiceChannelSelect"] = function handleVoiceChannelSelect(guildId) {
  guildId = guildId.guildId;
  if (null != guildId.channelId) {
    const VoiceCallTriggerPoint = VoiceCallTriggerPoint2.VoiceCallTriggerPoint;
    const obj = { guildId };
    VoiceCallTriggerPoint.trigger(obj);
  }
};
prototype["handleCallCreate"] = function handleCallCreate() {
  const VoiceCallTriggerPoint = VoiceCallTriggerPoint2.VoiceCallTriggerPoint;
  VoiceCallTriggerPoint.trigger();
};
prototype["handleUserSettingsModalOpen"] = function handleUserSettingsModalOpen() {
  const OpenUserSettingsTriggerPoint = OpenUserSettingsTriggerPoint2.OpenUserSettingsTriggerPoint;
  OpenUserSettingsTriggerPoint.trigger();
};
const commonTriggerPointManager = new CommonTriggerPointManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/CommonTriggerPointManager.tsx");

export default commonTriggerPointManager;
