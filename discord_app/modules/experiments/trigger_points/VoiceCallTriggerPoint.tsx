// === Module 17859: VoiceCallTriggerPoint ===

// Module 17859 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 10079 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17861 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17862 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17860).VoiceChannelHoistingExperiment, fn(17404).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13586).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(11159).CommonTriggerPointConfiguration(items, fn(4745).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;