// === Module 18777: VoiceCallTriggerPoint ===

// Module 18777 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5191 */;
import Helpers from "Helpers" /* 10564 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14508 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18295 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 18778 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 18779 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 18780 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;