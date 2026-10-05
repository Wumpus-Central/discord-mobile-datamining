// discord_app/modules/messages/VoiceChannelListInviteExperiment.tsx
import react from "../../../_runtime/00576_react.js";
import createExperiment from "../experiments/index.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let items;
let obj = {
  kind: "guild",
  id: "2026-05_voice_channel_list_invite_embed",
  label: "Voice Channel List Invite Embed",
  defaultConfig: { enabled: false },
  treatments: items,
};
items = [{ id: 1, label: "Enable channel-list-style voice invite embed", config: { enabled: true } }];
let closure_2 = createExperiment.createExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let _location;
      let guildId;
      const obj = react;
      const cResult = obj.c(3);
      ({ guildId, location: _location } = arg0);
      if (cResult[0] === guildId) {
        let tmp2;
        if (cResult[1] === _location) {
          tmp2 = cResult[2];
        }
        return closure_2.useExperiment(tmp2);
      }
      const obj2 = { guildId, location: _location };
      cResult[0] = guildId;
      cResult[1] = _location;
      cResult[2] = obj2;
      tmp2 = obj2;
    }
  : (guildId) => {
      const obj = { guildId: guildId.guildId, location: guildId.location };
      return closure_2.useExperiment(obj);
    };
const result = size.fileFinishedImporting("modules/messages/VoiceChannelListInviteExperiment.tsx");

export const getVoiceChannelListInviteExperiment = function getVoiceChannelListInviteExperiment(guildId) {
  const obj = { guildId: guildId.guildId, location: guildId.location };
  return closure_2.getCurrentConfig(obj);
};
export const useVoiceChannelListInviteExperiment = tmp2;
