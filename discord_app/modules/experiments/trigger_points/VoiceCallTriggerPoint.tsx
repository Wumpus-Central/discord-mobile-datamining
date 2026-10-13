// === Module 18074: VoiceCallTriggerPoint ===

// Module 18074 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5017 */;
import Helpers from "Helpers" /* 10165 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 13824 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 17599 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18075 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18076 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18077 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;