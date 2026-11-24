// === Module 19507: VoiceCallTriggerPoint ===

// Module 19507 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5535 */;
import Helpers from "Helpers" /* 9119 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14305 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18619 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19508 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19509 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19510 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;