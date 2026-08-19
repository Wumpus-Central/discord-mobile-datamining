// === Module 16547: commonTriggerPointConfiguration ===

// Module 16547 (commonTriggerPointConfiguration)
import experimentDefault from "experiment" /* 4798 */;
import experimentDefault2 from "experiment" /* 16549 */;
import experimentDefault3 from "experiment" /* 16550 */;

const items = [experimentDefault, require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, experimentDefault2, experimentDefault3, require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("obj132").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;