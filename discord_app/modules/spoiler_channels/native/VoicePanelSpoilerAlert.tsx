// === Module 13230: VoicePanelSpoilerAlert ===

// Module 13230 (VoicePanelSpoilerAlert)
import util from "util" /* 1115 */;
import AlertModal from "AlertModal" /* 5115 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5630 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5739 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/native/VoicePanelSpoilerAlert.tsx");

export default function VoicePanelSpoilerAlert(arg0) {
  ({ channelId: require, onConnect: importDefault } = arg0);
  dependencyMap = AlertModal.useDismissModalCallback();
  const obj2 = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["q38/ae"]);
  const intl2 = util.intl;
  obj2.content = intl2.string(util.t["2fDWXK"]);
  const obj3 = { children: null };
  const obj4 = {
    variant: "primary",
    onPress() {
      GuildActionCreatorsDefault.spoilerAgree(require);
      if (null != closure_1_1) {
        closure_1_1();
      } else {
        const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(require);
        const tmpResult = SelectedChannelActionCreatorsDefault;
      }
      closure_2();
    },
    text: null
  };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t.p89ACt);
  const items = [closure_3(AlertModal.AlertActionButton, obj4, "confirm"), ];
  const obj5 = {
    variant: "secondary",
    onPress() {
      closure_2();
    },
    text: null
  };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t["/g10LC"]);
  items[1] = closure_3(AlertModal.AlertActionButton, obj5, "cancel");
  obj3.children = items;
  obj2.actions = closure_4(AlertModal.AlertActions, obj3);
  return closure_3(AlertModal.AlertModal, obj2);
};
export const VOICE_PANEL_SPOILER_KEY = "voice-panel-spoiler";