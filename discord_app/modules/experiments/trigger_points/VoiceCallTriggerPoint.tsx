// === Module 18763: VoiceCallTriggerPoint ===

// Module 18763 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5191 */;
import Helpers from "Helpers" /* 10564 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14503 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18282 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18764 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18765 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18766 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;