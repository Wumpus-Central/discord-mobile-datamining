// === Module 15122: VoicePanelDockScrim ===

// Module 15122 (VoicePanelDockScrim)
import nativeDefault from "native" /* 575 */;
import VoicePanelDockLayout from "VoicePanelDockLayout" /* 12008 */;
import ChatInputScrimGradient from "ChatInputScrimGradient" /* 14668 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c3 } = get_ActivityIndicator);
let closure_4 = fn(12009).getVoicePanelDockButtonsTop;
const jsx = fn(21).jsx;
const scrim = StyleSheet.create({ scrim: { position: "absolute", left: 0, right: 0, bottom: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockScrim.tsx");

export default noop.memo(function VoicePanelDockScrim() {
  const chatDockHeight = VoicePanelDockLayout.useChatDockHeight();
  let tmp4 = null;
  if (chatDockHeight > 0) {
    const obj2 = { style: null, pointerEvents: "none", children: null };
    items = [scrim.scrim, ];
    const obj3 = { height: closure_4(chatDockHeight) };
    items[1] = obj3;
    obj2.style = items;
    const obj4 = { inline: true, gradientHeight: nativeDefault.space.PX_64 };
    obj2.children = jsx(ChatInputScrimGradient.ChatInputScrimGradient, { inline: true, gradientHeight: nativeDefault.space.PX_64 });
    tmp4 = <React3 style={null} pointerEvents="none">{null}</React3>;
  }
  return tmp4;
});