// === Module 9892: experiment ===

// Module 9892 (experiment)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4392 */;
import createExperiment from "createExperiment" /* 4389 */;

const items = [{ id: 1, label: "Allow users to ring each other in Guild Voice Channels", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "guild", id: "2024-12_guild_voice_channel_ringing", label: "Guild Voice Ringing", defaultConfig: { enabled: false }, commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL, treatments: items });
const obj = { kind: "guild", id: "2024-12_guild_voice_channel_ringing", label: "Guild Voice Ringing", defaultConfig: { enabled: false }, commonTriggerPoint: ExperimentBuckets.CommonTriggerPoints.VOICE_CALL, treatments: items };
const result = set.fileFinishedImporting("modules/voice_calls/GuildVoiceRingingExperiment.tsx");

export default experiment;