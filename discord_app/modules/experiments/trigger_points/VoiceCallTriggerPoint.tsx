// === Module 17306: VoiceCallTriggerPoint ===

// Module 17306 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4751 */;
import Helpers from "Helpers" /* 10440 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 12926 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 16842 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 17307 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17308 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17309 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;