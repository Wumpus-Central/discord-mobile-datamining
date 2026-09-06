// discord_app/modules/spoiler_channels/native/VoicePanelSpoilerAlert.tsx
import SelectedChannelActionCreatorsDefault from "../../../actions/SelectedChannelActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/native/VoicePanelSpoilerAlert.tsx");

export default function VoicePanelSpoilerAlert(channelId) {
  channelId = channelId.channelId;
  let obj = channelId(4910);
  closure_1 = obj.useDismissModalCallback();
  obj = { title: null, content: null, actions: null };
  const intl = channelId(1114).intl;
  obj.title = intl.string(channelId(1114).t["q38/ae"]);
  const intl2 = channelId(1114).intl;
  obj.content = intl2.string(channelId(1114).t["2fDWXK"]);
  obj = { children: null };
  const obj1 = {
    variant: "primary",
    onPress() {
      GuildActionCreatorsDefault.spoilerAgree(channelId);
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channelId);
      closure_1();
    },
    text: null,
  };
  const intl3 = channelId(1114).intl;
  obj1.text = intl3.string(channelId(1114).t.p89ACt);
  const items = [closure_3(channelId(4910).AlertActionButton, obj1, "confirm")];
  const obj2 = {
    variant: "secondary",
    onPress() {
      closure_1();
    },
    text: null,
  };
  const intl4 = channelId(1114).intl;
  obj2.text = intl4.string(channelId(1114).t["/g10LC"]);
  items[1] = closure_3(channelId(4910).AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = closure_4(channelId(4910).AlertActions, obj);
  return closure_3(channelId(4910).AlertModal, obj);
}
export const VOICE_PANEL_SPOILER_KEY = "voice-panel-spoiler";
