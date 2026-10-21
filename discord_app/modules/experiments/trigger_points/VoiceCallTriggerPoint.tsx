// === Module 18597: VoiceCallTriggerPoint ===

// Module 18597 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5173 */;
import Helpers from "Helpers" /* 10522 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14397 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18114 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18598 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18599 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18600 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;