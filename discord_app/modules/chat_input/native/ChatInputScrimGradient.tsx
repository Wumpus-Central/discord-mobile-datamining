// discord_app/modules/chat_input/native/ChatInputScrimGradient.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";
import { getGradientColorByPercentage } from "../../client_themes/native/ClientThemesUtils.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/ChatInputScrimGradient.tsx");

export const ChatInputScrimGradient = function ChatInputScrimGradient(scrimBase) {
  let gradientHeight;
  let inline;
  ({ gradientHeight, inline } = scrimBase);
  if (inline === undefined) {
    inline = false;
  }
  scrimBase = scrimBase.scrimBase;
  let obj = getGradientColorByPercentage /* getGradientColorByPercentage */;
  const gradientValue = obj.useGradientValue(getGradientColorByPercentage /* getGradientColorByPercentage */.GradientPercentage.END);
  const token = map /* map */.useToken(Themes.colors.BACKGROUND_BASE_LOWER);
  const obj2 = map /* map */;
  const tmp4 = importDefault;
  if (gradientHeight == null) {
    gradientHeight = obj3.useToken(Themes.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
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
  const items1 = [callback(tmp4(4706), { colors: items, style: { height: gradientHeight }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1] }), callback(View, { style: { flex: 1, backgroundColor: hex2rgbResult } })];
  obj[2] = items1;
  return closure_5(View, obj);
};
export const useChatInputFloatingOverlayStyle = function useChatInputFloatingOverlayStyle() {
  const obj = { marginTop: null, overflow: "visible" };
  obj[0] = -map /* map */.useToken(Themes.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT) / 2;
  return obj;
};