// === Module 17027: VoicePanelNsfwAlert ===

// Module 17027 (VoicePanelNsfwAlert)
import noopAll from "noop" /* 19 */;
import { isGuildNSFW } from "GuildNSFWContentLevel" /* 1429 */;
import closure_4 from "createGuildRecordFromRust" /* 1908 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx");

export default function VoicePanelNsfwAlert(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  dependencyMap = undefined;
  let obj = guildId(4864);
  dependencyMap = obj.useDismissModalCallback();
  const tmp3 = isGuildNSFW(guild.getGuild(guildId));
  const intl = guildId(1233).intl;
  const string = intl.string;
  const t = guildId(1233).t;
  if (tmp3) {
    let stringResult = string(t.xi46lg);
  } else {
    stringResult = string(t.ZmwvDc);
  }
  obj = { title: stringResult, content: null, actions: null };
  const intl2 = tmp(1233).intl;
  const string2 = intl2.string;
  const t2 = tmp(1233).t;
  if (tmp3) {
    let string2Result = string2(t2.ZtuRts);
  } else {
    string2Result = string2(t2.E4Cd5I);
  }
  obj[1] = string2Result;
  obj = { children: null };
  obj1 = {
    variant: "primary",
    onPress() {
      channelId(5466).nsfwAgree(guildId);
      const obj = channelId(5466);
      const voiceChannel = channelId(5364).selectVoiceChannel(channelId);
      dependencyMap();
    },
    text: null
  };
  const intl3 = tmp(1233).intl;
  obj1[2] = intl3.string(guildId(1233).t.wVq7uo);
  const items = [closure_5(guildId(4864).AlertActionButton, obj1, "confirm"), ];
  const obj2 = {
    variant: "secondary",
    onPress() {
      channelId(5466).nsfwReturnToSafety(guildId);
      dependencyMap();
    },
    text: null
  };
  const intl4 = tmp(1233).intl;
  obj2[2] = intl4.string(guildId(1233).t["/g10LC"]);
  items[1] = closure_5(guildId(4864).AlertActionButton, obj2, "add-profile-picture");
  obj[0] = items;
  obj[2] = callback(guildId(4864).AlertActions, obj);
  return closure_5(guildId(4864).AlertModal, obj);
};
export const VOICE_PANEL_NSFW_KEY = "voice-panel-nsfw";