// === Module 17589: VoicePanelNoVideoParticipantsCard ===

// Module 17589 (VoicePanelNoVideoParticipantsCard)
import nativeDefault from "native" /* 587 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5104 */;
import NativeViewDefault from "NativeView" /* 6166 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11988 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Pressable = fn(17).Pressable;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj = { container: null, label: null, button: null, buttonText: null };
let size = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.container = size;
obj.label = { marginBottom: 16, textAlign: "center" };
obj.button = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: "white", borderRadius: nativeDefault.radii.round };
let obj3 = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: "white", borderRadius: nativeDefault.radii.round };
obj.buttonText = { color: nativeDefault.unsafe_rawColors.PRIMARY_860 };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.unsafe_rawColors.PRIMARY_860 };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelNoVideoParticipantsCard.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelNoVideoParticipantsCard() {
  const cResult = channelId(576).c(17);
  channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp5 = closure_7();
  if (cResult[0] !== channelId) {
    const fn = function l() {
      const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, false);
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  ({ container, label } = tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["8eBJ73"]);
    cResult[2] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp5.label) {
    const obj2 = { style: label, variant: "text-md/semibold", color: "text-overlay-light", children: tmp7 };
    const tmp11 = closure_5(tmp(5086).Text, obj2);
    cResult[3] = tmp5.label;
    cResult[4] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.kLQySL);
    cResult[5] = stringResult1;
    let tmp12 = stringResult1;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t.kLQySL);
    cResult[6] = stringResult2;
    let tmp14 = stringResult2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] !== tmp5.buttonText) {
    const obj3 = { variant: "text-sm/semibold", style: tmp5.buttonText, children: tmp14 };
    const tmp18 = closure_5(tmp(5086).Text, obj3);
    cResult[7] = tmp5.buttonText;
    cResult[8] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] === tmp6) {
    if (cResult[10] === tmp5.button) {
      if (cResult[11] === tmp16) {
        let tmp19 = cResult[12];
      }
      if (cResult[13] === tmp5.container) {
        if (cResult[14] === tmp19) {
          if (cResult[15] === tmp9) {
            let tmp21 = cResult[16];
          }
          return tmp21;
        }
      }
      const obj4 = { style: container, children: null };
      const items = [tmp9, tmp19];
      obj4.children = items;
      const tmp23 = closure_6(NativeViewDefault, obj4);
      cResult[13] = tmp5.container;
      cResult[14] = tmp19;
      cResult[15] = tmp9;
      cResult[16] = tmp23;
      tmp21 = tmp23;
    }
  }
  const tmp20 = closure_5(Pressable, { style: tmp5.button, onPress: tmp6, accessibilityRole: "button", accessibilityLabel: tmp12, children: tmp16 });
  cResult[9] = tmp6;
  cResult[10] = tmp5.button;
  cResult[11] = tmp16;
  cResult[12] = tmp20;
  tmp19 = tmp20;
  const obj = channelId(576);
}) : (function VoicePanelNoVideoParticipantsCard() {
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp = closure_7();
  const items = [channelId];
  const callback = noop.useCallback(() => {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, false);
  }, items);
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.label, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = channelId(1126).intl;
  obj2.children = intl.string(channelId(1126).t["8eBJ73"]);
  const items1 = [closure_5(channelId(5086).Text, obj2), ];
  const obj3 = { style: tmp.button, onPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl2 = channelId(1126).intl;
  obj3.accessibilityLabel = intl2.string(channelId(1126).t.kLQySL);
  const obj4 = { variant: "text-sm/semibold", style: tmp.buttonText, children: null };
  const intl3 = channelId(1126).intl;
  obj4.children = intl3.string(channelId(1126).t.kLQySL);
  obj3.children = closure_5(channelId(5086).Text, obj4);
  items1[1] = closure_5(Pressable, obj3);
  obj.children = items1;
  return closure_6(NativeViewDefault, obj);
}));