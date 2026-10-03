// === Module 10021: VoiceChannelListInviteExperiment ===

// Module 10021 (VoiceChannelListInviteExperiment)
import c from "c" /* 576 */;
import createExperiment from "module_4774" /* 4774 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj = { kind: "guild", id: "2026-05_voice_channel_list_invite_embed", label: "Voice Channel List Invite Embed", defaultConfig: { enabled: false }, treatments: null };
const items = [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: true } }];
obj.treatments = items;
let closure_2 = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/VoiceChannelListInviteExperiment.tsx");

export const getVoiceChannelListInviteExperiment = function getVoiceChannelListInviteExperiment(guildId) {
  return closure_2.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location });
};
export const useVoiceChannelListInviteExperiment = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ guildId, location: _location } = arg0);
  if (cResult[0] === guildId) {
    if (cResult[1] === _location) {
      let tmp2 = cResult[2];
    }
    return closure_2.useExperiment(tmp2);
  }
  const obj2 = { guildId, location: _location };
  cResult[0] = guildId;
  cResult[1] = _location;
  cResult[2] = obj2;
  tmp2 = obj2;
}) : ((guildId) => closure_2.useExperiment({ guildId: guildId.guildId, location: guildId.location }));