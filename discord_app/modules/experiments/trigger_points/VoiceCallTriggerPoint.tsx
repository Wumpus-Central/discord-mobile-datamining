// === Module 17427: VoiceCallTriggerPoint ===

// Module 17427 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9244 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17429 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17430 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17428).VoiceChannelHoistingExperiment, fn(16929).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13257).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10879).CommonTriggerPointConfiguration(items, fn(4522).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;