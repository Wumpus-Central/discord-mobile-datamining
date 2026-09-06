// === Module 17334: VoiceCallTriggerPoint ===

// Module 17334 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9175 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17336 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17337 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17335).VoiceChannelHoistingExperiment, fn(16832).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13183).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10809).CommonTriggerPointConfiguration(items, fn(4477).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;