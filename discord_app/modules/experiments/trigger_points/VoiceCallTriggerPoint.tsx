// === Module 20249: VoiceCallTriggerPoint ===

// Module 20249 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5527 */;
import Helpers from "Helpers" /* 9728 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 15573 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 19748 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 20250 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 20251 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 20252 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;