// === Module 17279: VoicePanelNoVideoParticipantsCard ===

// Module 17279 (VoicePanelNoVideoParticipantsCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5091 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11901 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
const Pressable = react_native.Pressable;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: size, label: { marginBottom: 16, textAlign: "center" }, button: obj2, buttonText: obj3 };
size = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
createStyles = createStyles.createStyles;
obj2 = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: "white", borderRadius: nativeDefault.radii.round };
obj3 = { color: nativeDefault.unsafe_rawColors.PRIMARY_860 };
let closure_7 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let channelId;
  let container;
  let items;
  let label;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = channelId(576);
  const cResult = obj.c(17);
  channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const tmp5 = closure_7();
  if (cResult[0] !== channelId) {
    const fn = function l() {
      const obj = ChannelRTCActionCreatorsDefault;
      const result = obj.toggleVoiceParticipantsHidden(channelId, false);
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  ({ container, label } = tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(channelId(1126).t["8eBJ73"]);
    cResult[2] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp5.label) {
    const obj2 = { style: label, variant: "text-md/semibold", color: "text-overlay-light", children: tmp7 };
    const tmp11 = closure_5(channelId(4886).Text, obj2);
    cResult[3] = tmp5.label;
    cResult[4] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[4];
  }
  const button = tmp5.button;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(channelId(1126).t.kLQySL);
    cResult[5] = stringResult1;
    tmp12 = stringResult1;
  } else {
    tmp12 = cResult[5];
  }
  const buttonText = tmp5.buttonText;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(channelId(1126).t.kLQySL);
    cResult[6] = stringResult2;
    tmp14 = stringResult2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== tmp5.buttonText) {
    const obj3 = { variant: "text-sm/semibold", style: buttonText, children: tmp14 };
    const tmp18 = closure_5(channelId(4886).Text, obj3);
    cResult[7] = tmp5.buttonText;
    cResult[8] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] === tmp6) {
    if (cResult[10] === tmp5.button) {
      let tmp19;
      if (cResult[11] === tmp16) {
        tmp19 = cResult[12];
      }
      if (cResult[13] === tmp5.container) {
        if (cResult[14] === tmp19) {
          let tmp21;
          if (cResult[15] === tmp9) {
            tmp21 = cResult[16];
          }
          return tmp21;
        }
      }
      const obj4 = { style: container, children: items };
      items = [tmp9, tmp19];
      const tmp23 = closure_6(NativeViewDefault, obj4);
      cResult[13] = tmp5.container;
      cResult[14] = tmp19;
      cResult[15] = tmp9;
      cResult[16] = tmp23;
      tmp21 = tmp23;
    }
  }
  const tmp20 = closure_5(Pressable, { style: button, onPress: tmp6, accessibilityRole: "button", accessibilityLabel: tmp12, children: tmp16 });
  cResult[9] = tmp6;
  cResult[10] = tmp5.button;
  cResult[11] = tmp16;
  cResult[12] = tmp20;
  tmp19 = tmp20;
}) : (() => {
  let Text2;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj4;
  const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
  const tmp = closure_7();
  const items = [channelId];
  const callback = react.useCallback(() => {
    const obj = ChannelRTCActionCreatorsDefault;
    const result = obj.toggleVoiceParticipantsHidden(channelId, false);
  }, items);
  let obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.label, variant: "text-md/semibold", color: "text-overlay-light", children: intl.string(channelId(1126).t["8eBJ73"]) };
  const tmp3 = NativeViewDefault;
  const Text = channelId(4886).Text;
  intl = channelId(1126).intl;
  items1 = [closure_5(Text, obj2), ];
  const obj3 = { style: tmp.button, onPress: callback, accessibilityRole: "button", accessibilityLabel: intl2.string(channelId(1126).t.kLQySL), children: closure_5(Text2, obj4) };
  intl2 = channelId(1126).intl;
  obj4 = { variant: "text-sm/semibold", style: tmp.buttonText, children: intl3.string(channelId(1126).t.kLQySL) };
  Text2 = channelId(4886).Text;
  intl3 = channelId(1126).intl;
  items1[1] = closure_5(Pressable, obj3);
  return closure_6(tmp3, obj);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelNoVideoParticipantsCard.tsx");

export default memoResult;