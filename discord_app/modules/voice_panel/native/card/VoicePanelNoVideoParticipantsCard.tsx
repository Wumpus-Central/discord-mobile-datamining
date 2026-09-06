// discord_app/modules/voice_panel/native/card/VoicePanelNoVideoParticipantsCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const Pressable = fn(17).Pressable;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let obj = { container: null, label: null, button: null, buttonText: null };
let size = {
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND,
};
obj.container = size;
obj.label = { marginBottom: 16, textAlign: "center" };
obj = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: "white", borderRadius: nativeDefault.radii.round };
obj.button = obj;
const createStyles = { color: nativeDefault.unsafe_rawColors.PRIMARY_860 };
obj.buttonText = createStyles;
let closure_7 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelNoVideoParticipantsCard.tsx");

export default noop.memo(function VoicePanelNoVideoParticipantsCard() {
  const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
  const tmp = closure_7();
  const items = [channelId];
  const callback = noop.useCallback(() => {
    const result = ChannelRTCActionCreatorsDefault.toggleVoiceParticipantsHidden(channelId, false);
  }, items);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.label, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = channelId(1114).intl;
  obj.children = intl.string(channelId(1114).t["8eBJ73"]);
  const items1 = [closure_5(channelId(4556).Text, obj)];
  obj = { style: tmp.button, onPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl2 = channelId(1114).intl;
  obj.accessibilityLabel = intl2.string(channelId(1114).t.kLQySL);
  const obj1 = { variant: "text-sm/semibold", style: tmp.buttonText, children: null };
  const intl3 = channelId(1114).intl;
  obj1.children = intl3.string(channelId(1114).t.kLQySL);
  obj.children = closure_5(channelId(4556).Text, obj1);
  items1[1] = closure_5(Pressable, obj);
  obj.children = items1;
  return closure_6(NativeViewDefault, obj);
});
