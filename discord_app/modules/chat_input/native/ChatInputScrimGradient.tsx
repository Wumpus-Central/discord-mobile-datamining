// === Module 12391: ChatInputScrimGradient ===

// Module 12391 (ChatInputScrimGradient)
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import useToken from "useToken" /* 4338 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4455 */;
import LinearGradientDefault from "LinearGradient" /* 5068 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputScrimGradient.tsx");

export const ChatInputScrimGradient = function ChatInputScrimGradient(scrimBase) {
  ({ gradientHeight, inline } = scrimBase);
  if (inline === undefined) {
    inline = false;
  }
  scrimBase = scrimBase.scrimBase;
  const gradientValue = client_themes_ClientThemesUtils.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  if (gradientHeight == null) {
    gradientHeight = obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  }
  if (scrimBase == null) {
    scrimBase = gradientValue;
  }
  if (scrimBase == null) {
    scrimBase = token;
  }
  obj3 = useToken;
  let hex2rgbResult = utils_ColorUtils.hex2rgb(scrimBase, 1);
  if (hex2rgbResult == null) {
    hex2rgbResult = scrimBase;
  }
  const tmpResult = utils_ColorUtils;
  let str = utils_ColorUtils.hex2rgb(scrimBase, 0);
  if (str == null) {
    str = "transparent";
  }
  if (inline) {
    let result = tmp9;
  } else {
    result = tmp9 / 2;
  }
  const obj4 = { style: { position: "absolute", top: result, left: 0, right: 0, bottom: 0 }, pointerEvents: "none", children: null };
  const obj5 = { colors: null, style: { height: gradientHeight }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1] };
  const items = [str, hex2rgbResult];
  obj5.colors = items;
  const items1 = [React4(LinearGradientDefault, obj5), React4(View, { style: { flex: 1, backgroundColor: hex2rgbResult } })];
  obj4.children = items1;
  return hasOwnProperty(View, obj4);
};
export const useChatInputFloatingOverlayStyle = function useChatInputFloatingOverlayStyle() {
  const obj = { marginTop: -useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT) / 2, overflow: "visible" };
  return obj;
};