// === Module 12899: VoicePanelSpoilerAlert ===

// Module 12899 (VoicePanelSpoilerAlert)
import util from "util" /* 1126 */;
import AlertModal from "AlertModal" /* 5303 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5885 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6102 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/native/VoicePanelSpoilerAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelSpoilerAlert(channelId) {
  const cResult = channelId(dismissModalCallback[3]).c(17);
  channelId = channelId.channelId;
  const onConnect = channelId.onConnect;
  let obj = channelId(dismissModalCallback[3]);
  dismissModalCallback = channelId(dismissModalCallback[4]).useDismissModalCallback();
  if (cResult[0] === channelId) {
    if (cResult[1] === onConnect) {
      if (cResult[2] === dismissModalCallback) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== dismissModalCallback) {
        function handleDisagree() {
          dismissModalCallback();
        }
        cResult[4] = dismissModalCallback;
        cResult[5] = handleDisagree;
        let tmp6 = handleDisagree;
      } else {
        tmp6 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[7]).intl;
        const stringResult = intl.string(tmp(tmp2[7]).t["q38/ae"]);
        const intl2 = tmp(tmp2[7]).intl;
        const stringResult1 = intl2.string(tmp(tmp2[7]).t["2fDWXK"]);
        cResult[6] = stringResult;
        cResult[7] = stringResult1;
        let tmp9 = stringResult1;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[6];
        tmp9 = cResult[7];
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(tmp2[7]).intl;
        const stringResult2 = intl3.string(tmp(tmp2[7]).t.p89ACt);
        cResult[8] = stringResult2;
        let tmp12 = stringResult2;
      } else {
        tmp12 = cResult[8];
      }
      if (cResult[9] !== tmp5) {
        const obj3 = { variant: "primary", onPress: tmp5, text: tmp12 };
        const tmp16 = closure_3(tmp(tmp2[8]).AlertActionButton, obj3, "confirm");
        cResult[9] = tmp5;
        cResult[10] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[10];
      }
      const _Symbol3 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(tmp2[7]).intl;
        const stringResult3 = intl4.string(tmp(tmp2[7]).t["/g10LC"]);
        cResult[11] = stringResult3;
        let tmp17 = stringResult3;
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] !== tmp6) {
        const obj4 = { variant: "secondary", onPress: tmp6, text: tmp17 };
        const tmp21 = closure_3(tmp(tmp2[8]).AlertActionButton, obj4, "cancel");
        cResult[12] = tmp6;
        cResult[13] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[13];
      }
      if (cResult[14] === tmp14) {
        if (cResult[15] === tmp19) {
          let tmp22 = cResult[16];
        }
        return tmp22;
      }
      const obj5 = { title: tmp8, content: tmp9, actions: null };
      const obj6 = { children: null };
      const items = [tmp14, tmp19];
      obj6.children = items;
      obj5.actions = closure_4(tmp(tmp2[4]).AlertActions, obj6);
      const tmp25 = closure_3(tmp(tmp2[8]).AlertModal, obj5);
      cResult[14] = tmp14;
      cResult[15] = tmp19;
      cResult[16] = tmp25;
      tmp22 = tmp25;
    }
  }
  function handleAgree() {
    GuildActionCreatorsDefault.spoilerAgree(channelId);
    if (null != onConnect) {
      onConnect();
    } else {
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channelId);
      const tmpResult = SelectedChannelActionCreatorsDefault;
    }
    dismissModalCallback();
  }
  cResult[0] = channelId;
  cResult[1] = onConnect;
  cResult[2] = dismissModalCallback;
  cResult[3] = handleAgree;
  tmp5 = handleAgree;
  const obj2 = channelId(dismissModalCallback[4]);
}) : (function VoicePanelSpoilerAlert(arg0) {
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
    onPress: function handleAgree() {
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
    onPress: function handleDisagree() {
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
});
export const VOICE_PANEL_SPOILER_KEY = "voice-panel-spoiler";