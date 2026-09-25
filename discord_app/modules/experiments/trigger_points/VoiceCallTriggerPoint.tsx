// discord_app/modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx
import ExperimentConstants from "../ExperimentConstants.tsx";
import Helpers from "Helpers.tsx";
import VoiceChannelBadgeExperiment from "../../channel/VoiceChannelBadgeExperiment.tsx";
import HangoutWindowExperiment from "../../hangout_window/HangoutWindowExperiment.tsx";
import VoiceChannelHoistingExperiment from "../../channel/VoiceChannelHoistingExperiment.tsx";
import PastVcActivityMessagesExperimentDefault from "../../voice_calls/PastVcActivityMessagesExperiment.tsx";
import VoiceCallTriggerPointExperimentDefault from "../../voice_calls/VoiceCallTriggerPointExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const items = [
  VoiceChannelHoistingExperiment.VoiceChannelHoistingExperiment,
  HangoutWindowExperiment.HangoutWindowExperiment,
  PastVcActivityMessagesExperimentDefault,
  VoiceCallTriggerPointExperimentDefault,
  VoiceChannelBadgeExperiment.VoiceChannelBadgeExperiment,
];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(
  items,
  ExperimentConstants.CommonTriggerPoints.VOICE_CALL,
  { location: "voice call initiated" },
);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
