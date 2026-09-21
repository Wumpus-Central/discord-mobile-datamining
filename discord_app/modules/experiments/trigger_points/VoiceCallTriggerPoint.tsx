// discord_app/modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx
import GuildVoiceRingingExperimentDefault from "../../voice_calls/GuildVoiceRingingExperiment.tsx";
import PastVcActivityMessagesExperimentDefault from "../../voice_calls/PastVcActivityMessagesExperiment.tsx";
import VoiceCallTriggerPointExperimentDefault from "../../voice_calls/VoiceCallTriggerPointExperiment.tsx";

const items = [
  GuildVoiceRingingExperimentDefault,
  fn(17756).VoiceChannelHoistingExperiment,
  fn(17300).HangoutWindowExperiment,
  PastVcActivityMessagesExperimentDefault,
  VoiceCallTriggerPointExperimentDefault,
  fn(13487).VoiceChannelBadgeExperiment,
];
const commonTriggerPointConfiguration = new fn(11071).CommonTriggerPointConfiguration(
  items,
  fn(4672).CommonTriggerPoints.VOICE_CALL,
  { location: "voice call initiated" },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
