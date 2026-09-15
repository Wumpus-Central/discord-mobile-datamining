// === Module 17340: VoicePanelNsfwAlert ===

// Module 17340 (VoicePanelNsfwAlert)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5496 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5605 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1980 */;

const require = fn;
const isGuildNSFW = fn(1976).isGuildNSFW;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/alerts/VoicePanelNsfwAlert.tsx");

export default function VoicePanelNsfwAlert(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  dependencyMap = guildId(4989).useDismissModalCallback();
  const tmp3 = isGuildNSFW(GuildStore.getGuild(guildId));
  const intl = guildId(1115).intl;
  const string = intl.string;
  const t = guildId(1115).t;
  if (tmp3) {
    let stringResult = string(t.xi46lg);
  } else {
    stringResult = string(t.ZmwvDc);
  }
  const obj2 = { title: stringResult, content: null, actions: null };
  const intl2 = tmp(1115).intl;
  const string2 = intl2.string;
  const t2 = tmp(1115).t;
  if (tmp3) {
    let string2Result = string2(t2.ZtuRts);
  } else {
    string2Result = string2(t2.E4Cd5I);
  }
  obj2.content = string2Result;
  const obj3 = { children: null };
  const obj4 = {
    variant: "primary",
    onPress() {
      GuildActionCreatorsDefault.nsfwAgree(guildId);
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channelId);
      closure_2();
    },
    text: null
  };
  const intl3 = tmp(1115).intl;
  obj4.text = intl3.string(guildId(1115).t.wVq7uo);
  const items = [closure_5(guildId(4989).AlertActionButton, obj4, "confirm"), ];
  const obj5 = {
    variant: "secondary",
    onPress() {
      GuildActionCreatorsDefault.nsfwReturnToSafety(guildId);
      closure_2();
    },
    text: null
  };
  const intl4 = tmp(1115).intl;
  obj5.text = intl4.string(guildId(1115).t["/g10LC"]);
  items[1] = closure_5(guildId(4989).AlertActionButton, obj5, "add-profile-picture");
  obj3.children = items;
  obj2.actions = closure_6(guildId(4989).AlertActions, obj3);
  return closure_5(guildId(4989).AlertModal, obj2);
};
export const VOICE_PANEL_NSFW_KEY = "voice-panel-nsfw";