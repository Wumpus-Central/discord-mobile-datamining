// === Module 17836: VoiceCallTriggerPoint ===

// Module 17836 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 10074 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17838 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17839 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17837).VoiceChannelHoistingExperiment, fn(17381).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13577).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(11153).CommonTriggerPointConfiguration(items, fn(4743).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;