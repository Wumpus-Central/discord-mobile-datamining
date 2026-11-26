// discord_app/modules/voice_panel/native/dock/VoicePanelDockScrim.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import client_themes_ClientThemesUtils from "../../../client_themes/native/ClientThemesUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import VoicePanelDockLayout from "VoicePanelDockLayout.tsx";
import ChatInputScrimGradient from "../../../chat_input/native/ChatInputScrimGradient.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c3 } = get_ActivityIndicator);
let closure_4 = fn(11805).getVoicePanelDockButtonsTop;
const jsx = fn(21).jsx;
const scrim = StyleSheet.create({ scrim: { position: "absolute", left: 0, right: 0, bottom: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockScrim.tsx");

export default noop.memo(function VoicePanelDockScrim(background) {
  let BACKGROUND_BASE_LOWER = background.background;
  if (BACKGROUND_BASE_LOWER === undefined) {
    BACKGROUND_BASE_LOWER = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  let flag = background.ignoreTheme;
  if (flag === undefined) {
    flag = false;
  }
  const chatDockHeight = VoicePanelDockLayout.useChatDockHeight();
  const token = useToken.useToken(BACKGROUND_BASE_LOWER);
  let gradientValue = client_themes_ClientThemesUtils.useGradientValue(
    client_themes_ClientThemesUtils.GradientPercentage.END,
  );
  let tmp9Result = null;
  if (chatDockHeight > 0) {
    const obj4 = { style: null, pointerEvents: "none", children: null };
    items = [scrim.scrim];
    const obj5 = { height: closure_4(chatDockHeight) };
    items[1] = obj5;
    obj4.style = items;
    const obj6 = { inline: true, gradientHeight: nativeDefault.space.PX_64, scrimBase: null };
    let tmp14 = token;
    if (!flag) {
      if (gradientValue == null) {
        gradientValue = token;
      }
      tmp14 = gradientValue;
    }
    obj6.scrimBase = tmp14;
    obj4.children = jsx(ChatInputScrimGradient.ChatInputScrimGradient, {
      inline: true,
      gradientHeight: nativeDefault.space.PX_64,
      scrimBase: null,
    });
    tmp9Result = (
      <React3 style={null} pointerEvents="none">
        {null}
      </React3>
    );
  }
  return tmp9Result;
});
