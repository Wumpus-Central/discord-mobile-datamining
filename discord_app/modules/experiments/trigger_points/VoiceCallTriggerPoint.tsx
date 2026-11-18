// === Module 19520: VoiceCallTriggerPoint ===

// Module 19520 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5441 */;
import Helpers from "Helpers" /* 9143 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14201 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19019 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19521 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19522 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19523 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;