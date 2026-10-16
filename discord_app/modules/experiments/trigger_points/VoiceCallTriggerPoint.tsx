// === Module 18392: VoiceCallTriggerPoint ===

// Module 18392 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5076 */;
import Helpers from "Helpers" /* 10404 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14189 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 17907 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18393 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18394 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18395 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;