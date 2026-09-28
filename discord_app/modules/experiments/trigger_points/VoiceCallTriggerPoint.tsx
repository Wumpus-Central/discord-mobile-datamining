// === Module 17117: VoiceCallTriggerPoint ===

// Module 17117 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4751 */;
import Helpers from "Helpers" /* 10271 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 12756 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 16654 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 17118 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17119 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17120 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;