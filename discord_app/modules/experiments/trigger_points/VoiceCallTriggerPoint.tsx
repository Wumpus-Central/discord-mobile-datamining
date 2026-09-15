// discord_app/modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx
import GuildVoiceRingingExperimentDefault from "../../voice_calls/GuildVoiceRingingExperiment.tsx";
import PastVcActivityMessagesExperimentDefault from "../../voice_calls/PastVcActivityMessagesExperiment.tsx";
import VoiceCallTriggerPointExperimentDefault from "../../voice_calls/VoiceCallTriggerPointExperiment.tsx";

const items = [
  GuildVoiceRingingExperimentDefault,
  fn(17487).VoiceChannelHoistingExperiment,
  fn(16985).HangoutWindowExperiment,
  PastVcActivityMessagesExperimentDefault,
  VoiceCallTriggerPointExperimentDefault,
  fn(13319).VoiceChannelBadgeExperiment,
];
const commonTriggerPointConfiguration = new fn(10942).CommonTriggerPointConfiguration(
  items,
  fn(4556).CommonTriggerPoints.VOICE_CALL,
  { location: "voice call initiated" },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
