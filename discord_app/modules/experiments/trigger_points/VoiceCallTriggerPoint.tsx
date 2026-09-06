// discord_app/modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx
import GuildVoiceRingingExperimentDefault from "../../voice_calls/GuildVoiceRingingExperiment.tsx";
import PastVcActivityMessagesExperimentDefault from "../../voice_calls/PastVcActivityMessagesExperiment.tsx";
import VoiceCallTriggerPointExperimentDefault from "../../voice_calls/VoiceCallTriggerPointExperiment.tsx";

const items = [
  GuildVoiceRingingExperimentDefault,
  fn(17335).VoiceChannelHoistingExperiment,
  fn(16832).HangoutWindowExperiment,
  PastVcActivityMessagesExperimentDefault,
  VoiceCallTriggerPointExperimentDefault,
  fn(13183).VoiceChannelBadgeExperiment,
];
const commonTriggerPointConfiguration = new fn(10809).CommonTriggerPointConfiguration(
  items,
  fn(4477).CommonTriggerPoints.VOICE_CALL,
  { location: "voice call initiated" },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
