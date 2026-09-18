// === Module 17664: VoiceCallTriggerPoint ===

// Module 17664 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9413 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17666 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17667 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17665).VoiceChannelHoistingExperiment, fn(17212).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13429).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(11057).CommonTriggerPointConfiguration(items, fn(4638).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;