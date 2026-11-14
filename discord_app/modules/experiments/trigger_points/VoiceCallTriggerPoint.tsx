// === Module 20198: VoiceCallTriggerPoint ===

// Module 20198 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5533 */;
import Helpers from "Helpers" /* 9715 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15539 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19701 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 20199 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 20200 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 20201 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;