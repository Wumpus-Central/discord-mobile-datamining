// === Module 17454: VoiceCallTriggerPoint ===

// Module 17454 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4777 */;
import Helpers from "Helpers" /* 10540 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 13020 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 16987 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 17455 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17456 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17457 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;