// === Module 17362: VoiceCallTriggerPoint ===

// Module 17362 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4762 */;
import Helpers from "Helpers" /* 10466 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 12961 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 16898 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 17363 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17364 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17365 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;