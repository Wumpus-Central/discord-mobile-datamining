// === Module 17583: VoiceCallTriggerPoint ===

// Module 17583 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9329 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17585 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17586 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17584).VoiceChannelHoistingExperiment, fn(17081).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13338).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10963).CommonTriggerPointConfiguration(items, fn(4556).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;