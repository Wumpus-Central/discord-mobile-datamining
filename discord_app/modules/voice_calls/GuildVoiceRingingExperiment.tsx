// discord_app/modules/voice_calls/GuildVoiceRingingExperiment.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ExperimentBuckets from "../experiments/ExperimentConstants.tsx";
import createExperiment from "../experiments/index.tsx";

const items = [{ id: 1, label: "Allow users to ring each other in Guild Voice Channels", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2024-12_guild_voice_channel_ringing", label: "Guild Voice Ringing", defaultConfig: { enabled: false }, commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL, treatments: items });
const result = obj132.fileFinishedImporting("modules/voice_calls/GuildVoiceRingingExperiment.tsx");

export default experiment;