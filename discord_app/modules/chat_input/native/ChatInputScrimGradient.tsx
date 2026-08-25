// === Module 11829: ChatInputScrimGradient ===

// Module 11829 (ChatInputScrimGradient)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4101 */;
import getGradientColorByPercentage from "getGradientColorByPercentage" /* 4199 */;
import LinearGradientDefault from "LinearGradient" /* 4826 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let result = require("set").fileFinishedImporting("modules/chat_input/native/ChatInputScrimGradient.tsx");

export const ChatInputScrimGradient = function ChatInputScrimGradient(scrimBase) {
  ({ gradientHeight, inline } = scrimBase);
  if (inline === undefined) {
    inline = false;
  }
  scrimBase = scrimBase.scrimBase;
  let obj = getGradientColorByPercentage;
  const gradientValue = obj.useGradientValue(getGradientColorByPercentage.GradientPercentage.END);
  const token = map.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOWER);
  const obj2 = map;
  const tmp4 = importDefault;
  if (gradientHeight == null) {
    gradientHeight = obj3.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  }
  if (scrimBase == null) {
    scrimBase = gradientValue;
  }
  if (scrimBase == null) {
    scrimBase = token;
  }
  let tmpResult = tmp(688);
  let hex2rgbResult = tmpResult.hex2rgb(scrimBase, 1);
  if (hex2rgbResult == null) {
    hex2rgbResult = scrimBase;
  }
  tmpResult = tmp(688);
  let str = tmpResult.hex2rgb(scrimBase, 0);
  if (str == null) {
    str = "transparent";
  }
  if (inline) {
    let result = tmp9;
  } else {
    result = tmp9 / 2;
  }
  obj = { style: { position: "absolute", top: result, left: 0, right: 0, bottom: 0 }, pointerEvents: "none", children: null };
  const items = [str, hex2rgbResult];
  const items1 = [callback(LinearGradientDefault, { colors: items, style: { height: gradientHeight }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1] }), callback(View, { style: { flex: 1, backgroundColor: hex2rgbResult } })];
  obj[2] = items1;
  return closure_5(View, obj);
};
export const useChatInputFloatingOverlayStyle = function useChatInputFloatingOverlayStyle() {
  const obj = { marginTop: -map.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT) / 2, overflow: "visible" };
  return obj;
};