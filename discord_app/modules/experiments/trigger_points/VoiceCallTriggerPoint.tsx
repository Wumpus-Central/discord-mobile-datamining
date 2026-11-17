// === Module 20201: VoiceCallTriggerPoint ===

// Module 20201 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5523 */;
import Helpers from "Helpers" /* 9715 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15539 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19703 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 20202 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 20203 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 20204 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;