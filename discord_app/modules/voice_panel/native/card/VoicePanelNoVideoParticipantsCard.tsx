// === Module 17615: VoicePanelNoVideoParticipantsCard ===

// Module 17615 (VoicePanelNoVideoParticipantsCard)
import nativeDefault from "native" /* 576 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4958 */;
import NativeViewDefault from "NativeView" /* 5808 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12529 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Pressable = fn(17).Pressable;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let obj = { container: null, label: null, button: null, buttonText: null };
let size = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.container = size;
obj.label = { marginBottom: 16, textAlign: "center" };
obj.button = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: "white", borderRadius: nativeDefault.radii.round };
let obj3 = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: "white", borderRadius: nativeDefault.radii.round };
obj.buttonText = { color: nativeDefault.unsafe_rawColors.PRIMARY_860 };
let closure_7 = createStyles.createStyles(obj);
let obj4 = { color: nativeDefault.unsafe_rawColors.PRIMARY_860 };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelNoVideoParticipantsCard.tsx");

export default noop.memo(function VoicePanelNoVideoParticipantsCard() {
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp = closure_7();
  const items = [channelId];
  const callback = noop.useCallback(() => {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, false);
  }, items);
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.label, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = channelId(1115).intl;
  obj2.children = intl.string(channelId(1115).t["8eBJ73"]);
  const items1 = [closure_5(channelId(4753).Text, obj2), ];
  const obj3 = { style: tmp.button, onPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl2 = channelId(1115).intl;
  obj3.accessibilityLabel = intl2.string(channelId(1115).t.kLQySL);
  const obj4 = { variant: "text-sm/semibold", style: tmp.buttonText, children: null };
  const intl3 = channelId(1115).intl;
  obj4.children = intl3.string(channelId(1115).t.kLQySL);
  obj3.children = closure_5(channelId(4753).Text, obj4);
  items1[1] = closure_5(Pressable, obj3);
  obj.children = items1;
  return closure_6(NativeViewDefault, obj);
});