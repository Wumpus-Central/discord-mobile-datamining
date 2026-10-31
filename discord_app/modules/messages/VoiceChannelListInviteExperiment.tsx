// === Module 10114: VoiceChannelListInviteExperiment ===

// Module 10114 (VoiceChannelListInviteExperiment)
import createExperiment from "module_5236" /* 5236 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", id: "2026-05_voice_channel_list_invite_embed", label: "Voice Channel List Invite Embed", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: true } }];
obj.treatments = items;
let closure_0 = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/VoiceChannelListInviteExperiment.tsx");

export function getVoiceChannelListInviteExperiment(guildId) {
  return closure_0.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location });
}
export function useVoiceChannelListInviteExperiment(guildId) {
  return closure_0.useExperiment({ guildId: guildId.guildId, location: guildId.location });
}