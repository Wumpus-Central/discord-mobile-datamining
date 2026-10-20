// === Module 18518: VoiceCallTriggerPoint ===

// Module 18518 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5152 */;
import Helpers from "Helpers" /* 10493 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14322 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18033 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18519 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18520 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18521 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;