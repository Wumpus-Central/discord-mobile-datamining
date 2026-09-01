// discord_app/modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx
import experimentDefault from "../../voice_calls/GuildVoiceRingingExperiment.tsx";
import experimentDefault2 from "../../voice_calls/PastVcActivityMessagesExperiment.tsx";
import experimentDefault3 from "../../voice_calls/VoiceCallTriggerPointExperiment.tsx";

const items = [
  experimentDefault,
  require("experiment").VoiceChannelHoistingExperiment,
  require("experiment").HangoutWindowExperiment,
  experimentDefault2,
  experimentDefault3,
  require("experiment").VoiceChannelBadgeExperiment,
];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(
  items,
  require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL,
  { location: "voice call initiated" },
);
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
