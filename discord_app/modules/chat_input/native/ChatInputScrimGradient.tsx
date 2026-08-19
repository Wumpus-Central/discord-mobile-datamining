// discord_app/modules/chat_input/native/ChatInputScrimGradient.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import int2hslRaw from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import getGradientColorByPercentage from "../../client_themes/native/ClientThemesUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/04756_LinearGradient.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let result = require("obj132").fileFinishedImporting("modules/chat_input/native/ChatInputScrimGradient.tsx");

export const ChatInputScrimGradient = function ChatInputScrimGradient(scrimBase) {
  ({ gradientHeight, inline } = scrimBase);
  if (inline === undefined) {
    inline = false;
  }
  scrimBase = scrimBase.scrimBase;
  let obj = getGradientColorByPercentage;
  const gradientValue = obj.useGradientValue(getGradientColorByPercentage.GradientPercentage.END);
  const token = map.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOWER);
  if (gradientHeight == null) {
    gradientHeight = obj3.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  }
  if (scrimBase == null) {
    scrimBase = gradientValue;
  }
  if (scrimBase == null) {
    scrimBase = token;
  }
  let tmpResult = int2hslRaw;
  let hex2rgbResult = tmpResult.hex2rgb(scrimBase, 1);
  if (hex2rgbResult == null) {
    hex2rgbResult = scrimBase;
  }
  tmpResult = int2hslRaw;
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
  return callback(View, obj);
};
export const useChatInputFloatingOverlayStyle = function useChatInputFloatingOverlayStyle() {
  const obj = { marginTop: -map.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT) / 2, overflow: "visible" };
  return obj;
};