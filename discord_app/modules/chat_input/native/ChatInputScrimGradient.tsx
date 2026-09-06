// discord_app/modules/chat_input/native/ChatInputScrimGradient.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import client_themes_ClientThemesUtils from "../../client_themes/native/ClientThemesUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
  let obj = client_themes_ClientThemesUtils;
  const gradientValue = obj.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
  let obj1 = useToken;
  const token = obj1.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  if (gradientHeight == null) {
    gradientHeight = obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  }
  if (scrimBase == null) {
    scrimBase = gradientValue;
  }
  if (scrimBase == null) {
    scrimBase = token;
  }
  let tmpResult = tmp(1091);
  let hex2rgbResult = tmpResult.hex2rgb(scrimBase, 1);
  if (hex2rgbResult == null) {
    hex2rgbResult = scrimBase;
  }
  tmpResult = tmp(1091);
  let str = tmpResult.hex2rgb(scrimBase, 0);
  if (str == null) {
    str = "transparent";
  }
  if (inline) {
    let result = tmp9;
  } else {
    result = tmp9 / 2;
  }
  obj = {
    style: { position: "absolute", top: result, left: 0, right: 0, bottom: 0 },
    pointerEvents: "none",
    children: null,
  };
  obj = {
    colors: null,
    style: { height: gradientHeight },
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
    locations: [0, 1],
  };
  const items = [str, hex2rgbResult];
  obj.colors = items;
  const items1 = [React4(LinearGradientDefault, obj)];
  obj1 = { style: { flex: 1, backgroundColor: hex2rgbResult } };
  items1[1] = React4(View, obj1);
  obj.children = items1;
  return hasOwnProperty(View, obj);
};
export const useChatInputFloatingOverlayStyle = function useChatInputFloatingOverlayStyle() {
  const obj = {
    marginTop: -useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT) / 2,
    overflow: "visible",
  };
  return obj;
};
