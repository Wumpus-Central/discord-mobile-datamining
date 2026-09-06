// === Module 17334: commonTriggerPointConfiguration ===

// Module 17334 (commonTriggerPointConfiguration)
import experimentDefault from "experiment" /* 9175 */;
import experimentDefault2 from "experiment" /* 17336 */;
import experimentDefault3 from "experiment" /* 17337 */;

const items = [experimentDefault, require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, experimentDefault2, experimentDefault3, require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;