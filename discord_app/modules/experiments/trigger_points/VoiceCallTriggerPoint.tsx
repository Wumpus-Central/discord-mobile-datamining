// === Module 17787: VoiceCallTriggerPoint ===

// Module 17787 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4977 */;
import Helpers from "Helpers" /* 10150 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 13319 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 17318 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 17788 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17789 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17790 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;