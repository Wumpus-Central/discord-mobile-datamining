// === Module 11905: ChatInputScrimGradient ===

// Module 11905 (ChatInputScrimGradient)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import useToken2 from "useToken" /* 4586 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4702 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let gradientHeight;
  let inline;
  let items1;
  let obj4;
  let result;
  let scrimBase;
  let tmp11;
  let tmp14;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(23);
  ({ gradientHeight, inline, scrimBase } = arg0);
  const tmp4 = undefined !== inline && inline;
  const tmpResult = client_themes_ClientThemesUtils;
  const gradientValue = tmpResult.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
  const tmpResult5 = useToken2;
  const token = tmpResult5.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const useToken = useToken2.useToken;
  useToken2;
  if (gradientHeight == null) {
    gradientHeight = useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  }
  if (scrimBase == null) {
    scrimBase = gradientValue;
  }
  if (scrimBase == null) {
    scrimBase = token;
  }
  if (cResult[0] !== scrimBase) {
    const tmpResult7 = utils_ColorUtils;
    let hex2rgbResult = tmpResult7.hex2rgb(scrimBase, 1);
    if (hex2rgbResult == null) {
      hex2rgbResult = scrimBase;
    }
    cResult[0] = scrimBase;
    cResult[1] = hex2rgbResult;
    tmp9 = hex2rgbResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== scrimBase) {
    const tmpResult8 = utils_ColorUtils;
    let str = tmpResult8.hex2rgb(scrimBase, 0);
    if (str == null) {
      str = "transparent";
    }
    cResult[2] = scrimBase;
    cResult[3] = str;
    tmp11 = str;
  } else {
    tmp11 = cResult[3];
  }
  if (tmp4) {
    result = tmp12;
  } else {
    result = tmp12 / 2;
  }
  if (cResult[4] !== result) {
    const rect = { position: "absolute", top: result, left: 0, right: 0, bottom: 0 };
    cResult[4] = result;
    cResult[5] = rect;
    tmp14 = rect;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === tmp9) {
    let tmp15;
    let tmp16;
    let tmp20;
    let tmp19;
    let tmp18;
    if (cResult[7] === tmp11) {
      tmp15 = cResult[8];
    }
    if (cResult[9] !== gradientHeight) {
      const obj2 = { height: gradientHeight };
      cResult[9] = gradientHeight;
      cResult[10] = obj2;
      tmp16 = obj2;
    } else {
      tmp16 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const point = { x: 0, y: 0 };
      const point1 = { x: 0, y: 1 };
      const items = [0, 1];
      cResult[11] = point;
      cResult[12] = point1;
      cResult[13] = items;
      tmp20 = items;
      tmp19 = point1;
      tmp18 = point;
    } else {
      tmp18 = cResult[11];
      tmp19 = cResult[12];
      tmp20 = cResult[13];
    }
    if (cResult[14] === tmp15) {
      let tmp21;
      let tmp24;
      if (cResult[15] === tmp16) {
        tmp21 = cResult[16];
      }
      if (cResult[17] !== tmp9) {
        const obj3 = { style: obj4 };
        obj4 = { flex: 1, backgroundColor: tmp9 };
        const tmp27 = React3(View, obj3);
        cResult[17] = tmp9;
        cResult[18] = tmp27;
        tmp24 = tmp27;
      } else {
        tmp24 = cResult[18];
      }
      if (cResult[19] === tmp21) {
        if (cResult[20] === tmp24) {
          let tmp28;
          if (cResult[21] === tmp14) {
            tmp28 = cResult[22];
          }
          return tmp28;
        }
      }
      const obj5 = { style: tmp14, pointerEvents: "none", children: items1 };
      items1 = [tmp21, tmp24];
      const tmp31 = hasOwnProperty(View, obj5);
      cResult[19] = tmp21;
      cResult[20] = tmp24;
      cResult[21] = tmp14;
      cResult[22] = tmp31;
      tmp28 = tmp31;
    }
    const obj6 = { colors: tmp15, style: tmp16, start: tmp18, end: tmp19, locations: tmp20 };
    const tmp23 = React3(LinearGradientDefault, obj6);
    cResult[14] = tmp15;
    cResult[15] = tmp16;
    cResult[16] = tmp23;
    tmp21 = tmp23;
  }
  const items2 = [tmp11, tmp9];
  cResult[6] = tmp9;
  cResult[7] = tmp11;
  cResult[8] = items2;
  tmp15 = items2;
}) : ((scrimBase) => {
  let gradientHeight;
  let inline;
  let items;
  let items1;
  let result;
  ({ gradientHeight, inline } = scrimBase);
  if (inline === undefined) {
    inline = false;
  }
  scrimBase = scrimBase.scrimBase;
  const obj = client_themes_ClientThemesUtils;
  const gradientValue = obj.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
  const obj2 = useToken2;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const useToken = useToken2.useToken;
  useToken2;
  if (gradientHeight == null) {
    gradientHeight = useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  }
  if (scrimBase == null) {
    scrimBase = gradientValue;
  }
  if (scrimBase == null) {
    scrimBase = token;
  }
  const tmpResult = utils_ColorUtils;
  let hex2rgbResult = tmpResult.hex2rgb(scrimBase, 1);
  if (hex2rgbResult == null) {
    hex2rgbResult = scrimBase;
  }
  const tmpResult2 = utils_ColorUtils;
  let str = tmpResult2.hex2rgb(scrimBase, 0);
  if (str == null) {
    str = "transparent";
  }
  if (inline) {
    result = tmp10;
  } else {
    result = tmp10 / 2;
  }
  const obj4 = { colors: items, style: { height: gradientHeight }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1] };
  items = [str, hex2rgbResult];
  const obj3 = { style: { position: "absolute", top: result, left: 0, right: 0, bottom: 0 }, pointerEvents: "none", children: items1 };
  items1 = [React3(LinearGradientDefault, obj4), ];
  const obj5 = { style: { flex: 1, backgroundColor: hex2rgbResult } };
  items1[1] = React3(View, obj5);
  return hasOwnProperty(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = useToken2;
  const result = -obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT) / 2;
  if (cResult[0] !== result) {
    const obj3 = { marginTop: result, overflow: "visible" };
    cResult[0] = result;
    cResult[1] = obj3;
    tmp3 = obj3;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let obj2;
  const obj = { marginTop: -obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT) / 2, overflow: "visible" };
  obj2 = useToken2;
  return obj;
});
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputScrimGradient.tsx");

export const ChatInputScrimGradient = tmp4;
export const useChatInputFloatingOverlayStyle = tmp5;