// === Module 12751: VoicePanelSpoilerAlert ===

// Module 12751 (VoicePanelSpoilerAlert)
import intl5 from "intl" /* 1126 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5575 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import AlertModal2 from "AlertModal" /* 5720 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId, dependencyMap;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let dismissModalCallback;
  let items;
  let obj6;
  let obj = channelId(dismissModalCallback[3]);
  const cResult = obj.c(17);
  channelId = channelId.channelId;
  const onConnect = channelId.onConnect;
  const obj2 = channelId(dismissModalCallback[4]);
  dismissModalCallback = obj2.useDismissModalCallback();
  if (cResult[0] === channelId) {
    if (cResult[1] === onConnect) {
      let tmp5;
      let tmp6;
      let tmp9;
      let tmp8;
      let tmp12;
      let tmp14;
      let tmp17;
      let tmp19;
      if (cResult[2] === dismissModalCallback) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== dismissModalCallback) {
        const fn2 = function f() {
          dismissModalCallback();
        };
        cResult[4] = dismissModalCallback;
        cResult[5] = fn2;
        tmp6 = fn2;
      } else {
        tmp6 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[7]).intl;
        const stringResult = intl.string(channelId(dismissModalCallback[7]).t["q38/ae"]);
        const intl2 = tmp(tmp2[7]).intl;
        const stringResult1 = intl2.string(channelId(dismissModalCallback[7]).t["2fDWXK"]);
        cResult[6] = stringResult;
        cResult[7] = stringResult1;
        tmp9 = stringResult1;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[6];
        tmp9 = cResult[7];
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(tmp2[7]).intl;
        const stringResult2 = intl3.string(channelId(dismissModalCallback[7]).t.p89ACt);
        cResult[8] = stringResult2;
        tmp12 = stringResult2;
      } else {
        tmp12 = cResult[8];
      }
      if (cResult[9] !== tmp5) {
        const obj3 = { variant: "primary", onPress: tmp5, text: tmp12 };
        const tmp16 = closure_3(channelId(dismissModalCallback[8]).AlertActionButton, obj3, "confirm");
        cResult[9] = tmp5;
        cResult[10] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[10];
      }
      const _Symbol3 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(tmp2[7]).intl;
        const stringResult3 = intl4.string(channelId(dismissModalCallback[7]).t["/g10LC"]);
        cResult[11] = stringResult3;
        tmp17 = stringResult3;
      } else {
        tmp17 = cResult[11];
      }
      if (cResult[12] !== tmp6) {
        const obj4 = { variant: "secondary", onPress: tmp6, text: tmp17 };
        const tmp21 = closure_3(channelId(dismissModalCallback[8]).AlertActionButton, obj4, "cancel");
        cResult[12] = tmp6;
        cResult[13] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[13];
      }
      if (cResult[14] === tmp14) {
        let tmp22;
        if (cResult[15] === tmp19) {
          tmp22 = cResult[16];
        }
        return tmp22;
      }
      const obj5 = { title: tmp8, content: tmp9, actions: closure_4(channelId(dismissModalCallback[4]).AlertActions, obj6) };
      const AlertModal = tmp(tmp2[8]).AlertModal;
      obj6 = { children: items };
      items = [tmp14, tmp19];
      const tmp25 = closure_3(AlertModal, obj5);
      cResult[14] = tmp14;
      cResult[15] = tmp19;
      cResult[16] = tmp25;
      tmp22 = tmp25;
    }
  }
  const fn = function o() {
    const obj = GuildActionCreatorsDefault;
    obj.spoilerAgree(channelId);
    if (null != onConnect) {
      onConnect();
    } else {
      const tmpResult = SelectedChannelActionCreatorsDefault;
      const voiceChannel = tmpResult.selectVoiceChannel(channelId);
    }
    dismissModalCallback();
  };
  cResult[0] = channelId;
  cResult[1] = onConnect;
  cResult[2] = dismissModalCallback;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((arg0) => {
  let AlertActions;
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj3;
  ({ channelId: require, onConnect: importDefault } = arg0);
  let obj = AlertModal2;
  dependencyMap = obj.useDismissModalCallback();
  const obj2 = { title: intl.string(intl5.t["q38/ae"]), content: intl2.string(intl5.t["2fDWXK"]), actions: closure_4(AlertActions, obj3) };
  const AlertModal = AlertModal2.AlertModal;
  intl = intl5.intl;
  intl2 = intl5.intl;
  obj3 = { children: items };
  AlertActions = AlertModal2.AlertActions;
  const obj4 = {
    variant: "primary",
    onPress() {
      const obj = GuildActionCreatorsDefault;
      obj.spoilerAgree(require);
      if (null != importDefault) {
        importDefault();
      } else {
        const tmpResult = SelectedChannelActionCreatorsDefault;
        const voiceChannel = tmpResult.selectVoiceChannel(require);
      }
      closure_2();
    },
    text: intl3.string(intl5.t.p89ACt)
  };
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl5.intl;
  items = [closure_3(AlertActionButton, obj4, "confirm"), ];
  const obj5 = {
    variant: "secondary",
    onPress() {
      closure_2();
    },
    text: intl4.string(intl5.t["/g10LC"])
  };
  const AlertActionButton2 = AlertModal2.AlertActionButton;
  intl4 = intl5.intl;
  items[1] = closure_3(AlertActionButton2, obj5, "cancel");
  return closure_3(AlertModal, obj2);
});
const result = size.fileFinishedImporting("modules/spoiler_channels/native/VoicePanelSpoilerAlert.tsx");

export default tmp4;
export const VOICE_PANEL_SPOILER_KEY = "voice-panel-spoiler";