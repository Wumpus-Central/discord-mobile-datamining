// === Module 18813: VoiceCallTriggerPoint ===

// Module 18813 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5192 */;
import Helpers from "Helpers" /* 10567 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14544 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18329 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18814 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18815 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18816 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;