// discord_app/modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = fn;
const isGuildNSFW = fn(1975).isGuildNSFW;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx");

export default function VoicePanelNsfwAlert(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  let obj = guildId(4910);
  dependencyMap = obj.useDismissModalCallback();
  const tmp3 = isGuildNSFW(GuildStore.getGuild(guildId));
  const intl = guildId(1114).intl;
  const string = intl.string;
  const t = guildId(1114).t;
  if (tmp3) {
    let stringResult = string(t.xi46lg);
  } else {
    stringResult = string(t.ZmwvDc);
  }
  obj = { title: stringResult, content: null, actions: null };
  const intl2 = tmp(1114).intl;
  const string2 = intl2.string;
  const t2 = tmp(1114).t;
  if (tmp3) {
    let string2Result = string2(t2.ZtuRts);
  } else {
    string2Result = string2(t2.E4Cd5I);
  }
  obj.content = string2Result;
  obj = { children: null };
  const obj1 = {
    variant: "primary",
    onPress() {
      GuildActionCreatorsDefault.nsfwAgree(guildId);
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channelId);
      closure_2();
    },
    text: null,
  };
  const intl3 = tmp(1114).intl;
  obj1.text = intl3.string(guildId(1114).t.wVq7uo);
  const items = [closure_5(guildId(4910).AlertActionButton, obj1, "confirm")];
  const obj2 = {
    variant: "secondary",
    onPress() {
      GuildActionCreatorsDefault.nsfwReturnToSafety(guildId);
      closure_2();
    },
    text: null,
  };
  const intl4 = tmp(1114).intl;
  obj2.text = intl4.string(guildId(1114).t["/g10LC"]);
  items[1] = closure_5(guildId(4910).AlertActionButton, obj2, "add-profile-picture");
  obj.children = items;
  obj.actions = closure_6(guildId(4910).AlertActions, obj);
  return closure_5(guildId(4910).AlertModal, obj);
}
export const VOICE_PANEL_NSFW_KEY = "voice-panel-nsfw";
