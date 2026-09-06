// discord_app/modules/voice_calls/GuildVoiceRingingExperiment.tsx
import ExperimentConstants from "../experiments/ExperimentConstants.tsx";
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "guild",
  id: "2024-12_guild_voice_channel_ringing",
  label: "Guild Voice Ringing",
  defaultConfig: { enabled: false },
  commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL,
  treatments: null,
};
const items = [{ id: 1, label: "Allow users to ring each other in Guild Voice Channels", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/GuildVoiceRingingExperiment.tsx");

export default experiment;
