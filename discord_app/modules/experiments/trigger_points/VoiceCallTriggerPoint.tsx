// === Module 19681: VoiceCallTriggerPoint ===

// Module 19681 (VoiceCallTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 5661 */;
import Helpers from "Helpers" /* 9260 */;
import VoiceChannelBadgeExperiment from "VoiceChannelBadgeExperiment" /* 14480 */;
import HangoutWindowExperiment from "HangoutWindowExperiment" /* 18793 */;
import VoiceChannelHoistingExperiment from "VoiceChannelHoistingExperiment" /* 19682 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 19683 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 19684 */;
import size from "module_2" /* 2 */;

const items = [VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment, HangoutWindowExperiment.HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;