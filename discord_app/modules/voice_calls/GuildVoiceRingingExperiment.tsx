// === Module 9175: GuildVoiceRingingExperiment ===

// Module 9175 (GuildVoiceRingingExperiment)
import ExperimentConstants from "ExperimentConstants" /* 4477 */;
import createExperiment from "module_4474" /* 4474 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2024-12_guild_voice_channel_ringing", label: "Guild Voice Ringing", defaultConfig: { enabled: false }, commonTriggerPoint: ExperimentConstants.CommonTriggerPoints.VOICE_CALL, treatments: null };
const items = [{ id: 1, label: "Allow users to ring each other in Guild Voice Channels", config: { enabled: true } }];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/voice_calls/GuildVoiceRingingExperiment.tsx");

export default experiment;