// discord_app/modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import { isGuildNSFW } from "../../../../records/GuildRecord.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx");

export default function VoicePanelNsfwAlert(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  let obj = guildId(4660);
  dependencyMap = obj.useDismissModalCallback();
  const tmp3 = isGuildNSFW(guild.getGuild(guildId));
  const intl = guildId(1236).intl;
  const string = intl.string;
  const t = guildId(1236).t;
  if (tmp3) {
    let stringResult = string(t.xi46lg);
  } else {
    stringResult = string(t.ZmwvDc);
  }
  obj = { title: stringResult, content: null, actions: null };
  const intl2 = tmp(1236).intl;
  const string2 = intl2.string;
  const t2 = tmp(1236).t;
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
      channelId(6778).nsfwAgree(guildId);
      const obj = channelId(6778);
      const voiceChannel = channelId(4975).selectVoiceChannel(channelId);
      dependencyMap();
    },
    text: null
  };
  const intl3 = tmp(1236).intl;
  obj1[2] = intl3.string(guildId(1236).t.wVq7uo);
  const items = [callback(guildId(4660).AlertActionButton, obj1, "confirm"), ];
  const obj2 = {
    variant: "secondary",
    onPress() {
      channelId(6778).nsfwReturnToSafety(guildId);
      dependencyMap();
    },
    text: null
  };
  const intl4 = tmp(1236).intl;
  obj2[2] = intl4.string(guildId(1236).t["/g10LC"]);
  items[1] = callback(guildId(4660).AlertActionButton, obj2, "add-profile-picture");
  obj[0] = items;
  obj[2] = callback(guildId(4660).AlertActions, obj);
  return callback(guildId(4660).AlertModal, obj);
};
export const VOICE_PANEL_NSFW_KEY = "voice-panel-nsfw";