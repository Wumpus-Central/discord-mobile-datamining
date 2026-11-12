// discord_app/modules/voice_panel/native/dock/VoicePanelDockScrim.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useVoicePanelDockHeightDefault from "useVoicePanelDockHeight.tsx";
import ChatInputScrimGradient from "../../../chat_input/native/ChatInputScrimGradient.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c3 } = get_ActivityIndicator);
let closure_4 = fn(11942).getVoicePanelDockButtonsTop;
const jsx = fn(21).jsx;
const scrim = StyleSheet.create({ scrim: { position: "absolute", left: 0, right: 0, bottom: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockScrim.tsx");

export default noop.memo(function VoicePanelDockScrim() {
  const tmp3 = useVoicePanelDockHeightDefault();
  let tmp4 = null;
  if (tmp3 > 0) {
    const obj = { style: null, pointerEvents: "none", children: null };
    items = [scrim.scrim];
    const obj2 = { height: closure_4(tmp3) };
    items[1] = obj2;
    obj.style = items;
    const obj3 = { inline: true, gradientHeight: nativeDefault.space.PX_64 };
    obj.children = jsx(ChatInputScrimGradient.ChatInputScrimGradient, {
      inline: true,
      gradientHeight: nativeDefault.space.PX_64,
    });
    tmp4 = (
      <React3 style={null} pointerEvents="none">
        {null}
      </React3>
    );
  }
  return tmp4;
});
