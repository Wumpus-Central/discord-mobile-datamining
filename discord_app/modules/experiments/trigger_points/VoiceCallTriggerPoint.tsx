// === Module 19618: VoiceCallTriggerPoint ===

// Module 19618 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5630 */;
import Helpers from "Helpers" /* 9218 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14428 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18730 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19619 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19620 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19621 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;