// discord_app/modules/experiments/trigger_points/CommonTriggerPointManager.tsx
import OpenUserSettingsTriggerPoint2 from "OpenUserSettingsTriggerPoint.tsx";
import VoiceCallTriggerPoint2 from "VoiceCallTriggerPoint.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class CommonTriggerPointManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect,
      CALL_CREATE: applyArgumentsResult.handleCallCreate,
      USER_SETTINGS_MODAL_OPEN: applyArgumentsResult.handleUserSettingsModalOpen,
    };
    return applyArgumentsResult;
  }
  handleVoiceChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (null != guildId.channelId) {
      const VoiceCallTriggerPoint = VoiceCallTriggerPoint2.VoiceCallTriggerPoint;
      const trigger = VoiceCallTriggerPoint.trigger;
      const obj = { guildId };
      trigger(obj);
    }
  }
  handleCallCreate() {
    const VoiceCallTriggerPoint = VoiceCallTriggerPoint2.VoiceCallTriggerPoint;
    VoiceCallTriggerPoint.trigger();
  }
  handleUserSettingsModalOpen() {
    const OpenUserSettingsTriggerPoint = OpenUserSettingsTriggerPoint2.OpenUserSettingsTriggerPoint;
    OpenUserSettingsTriggerPoint.trigger();
  }
}
const prototype = CommonTriggerPointManager.prototype;
const commonTriggerPointManager = new CommonTriggerPointManager();
const result = size.fileFinishedImporting("modules/experiments/trigger_points/CommonTriggerPointManager.tsx");

export default commonTriggerPointManager;
