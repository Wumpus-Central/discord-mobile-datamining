// === Module 19336: VoiceCallTriggerPoint ===

// Module 19336 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5412 */;
import Helpers from "Helpers" /* 9119 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14154 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18449 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19337 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19338 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19339 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;