// === Module 17337: VoiceCallTriggerPoint ===

// Module 17337 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9180 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17339 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17340 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17338).VoiceChannelHoistingExperiment, fn(16835).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13187).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10814).CommonTriggerPointConfiguration(items, fn(4477).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;