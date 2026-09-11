// === Module 17416: VoiceCallTriggerPoint ===

// Module 17416 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9265 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17418 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17419 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17417).VoiceChannelHoistingExperiment, fn(16918).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13280).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10898).CommonTriggerPointConfiguration(items, fn(4523).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;