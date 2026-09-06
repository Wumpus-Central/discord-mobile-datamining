// discord_app/modules/messages/VoiceChannelListInviteExperiment.tsx
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  kind: "guild",
  id: "2026-05_voice_channel_list_invite_embed",
  label: "Voice Channel List Invite Embed",
  defaultConfig: { enabled: false },
  treatments: null,
};
const items = [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: true } }];
obj.treatments = items;
let closure_0 = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/VoiceChannelListInviteExperiment.tsx");

export const getVoiceChannelListInviteExperiment = function getVoiceChannelListInviteExperiment(guildId) {
  return closure_0.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location });
};
export const useVoiceChannelListInviteExperiment = function useVoiceChannelListInviteExperiment(guildId) {
  return closure_0.useExperiment({ guildId: guildId.guildId, location: guildId.location });
};
