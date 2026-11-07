// === Module 19811: VoiceCallTriggerPoint ===

// Module 19811 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5355 */;
import Helpers from "Helpers" /* 10797 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15353 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19277 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19812 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19813 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19814 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;