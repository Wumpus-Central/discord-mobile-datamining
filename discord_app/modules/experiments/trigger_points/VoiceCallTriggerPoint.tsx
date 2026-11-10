// === Module 19853: VoiceCallTriggerPoint ===

// Module 19853 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5357 */;
import Helpers from "Helpers" /* 10806 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15388 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19319 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19854 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19855 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19856 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;