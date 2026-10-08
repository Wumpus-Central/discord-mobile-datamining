// discord_app/modules/chat_input/native/ChatInputScrimGradient.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import client_themes_ClientThemesUtils from "../../client_themes/native/ClientThemesUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/05387_LinearGradient.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(558);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatInputScrimGradient(arg0) {
      const cResult = c.c(23);
      ({ gradientHeight, inline, scrimBase } = arg0);
      const tmp4 = undefined !== inline && inline;
      const gradientValue = client_themes_ClientThemesUtils.useGradientValue(
        client_themes_ClientThemesUtils.GradientPercentage.END,
      );
      const tmpResult = client_themes_ClientThemesUtils;
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
      const tmpResult5 = useToken;
      if (gradientHeight == null) {
        gradientHeight = tmpResult6.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
      }
      if (scrimBase == null) {
        scrimBase = gradientValue;
      }
      if (scrimBase == null) {
        scrimBase = token;
      }
      if (cResult[0] !== scrimBase) {
        let hex2rgbResult = utils_ColorUtils.hex2rgb(scrimBase, 1);
        if (hex2rgbResult == null) {
          hex2rgbResult = scrimBase;
        }
        cResult[0] = scrimBase;
        cResult[1] = hex2rgbResult;
        let tmp8 = hex2rgbResult;
        const tmpResult7 = utils_ColorUtils;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== scrimBase) {
        let str = utils_ColorUtils.hex2rgb(scrimBase, 0);
        if (str == null) {
          str = "transparent";
        }
        cResult[2] = scrimBase;
        cResult[3] = str;
        let tmp10 = str;
        const tmpResult8 = utils_ColorUtils;
      } else {
        tmp10 = cResult[3];
      }
      if (tmp4) {
        let result = tmp11;
      } else {
        result = tmp11 / 2;
      }
      if (cResult[4] !== result) {
        const rect = { position: "absolute", top: result, left: 0, right: 0, bottom: 0 };
        cResult[4] = result;
        cResult[5] = rect;
        let tmp13 = rect;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === tmp8) {
        if (cResult[7] === tmp10) {
          let tmp14 = cResult[8];
        }
        if (cResult[9] !== gradientHeight) {
          const obj2 = { height: gradientHeight };
          cResult[9] = gradientHeight;
          cResult[10] = obj2;
          let tmp15 = obj2;
        } else {
          tmp15 = cResult[10];
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const point = { x: 0, y: 0 };
          const point1 = { x: 0, y: 1 };
          const items = [0, 1];
          cResult[11] = point;
          cResult[12] = point1;
          cResult[13] = items;
          let tmp19 = items;
          let tmp18 = point1;
          let tmp17 = point;
        } else {
          tmp17 = cResult[11];
          tmp18 = cResult[12];
          tmp19 = cResult[13];
        }
        if (cResult[14] === tmp14) {
          if (cResult[15] === tmp15) {
            let tmp20 = cResult[16];
          }
          if (cResult[17] !== tmp8) {
            const obj3 = { style: null };
            const obj4 = { flex: 1, backgroundColor: tmp8 };
            obj3.style = obj4;
            const tmp26 = React4(View, obj3);
            cResult[17] = tmp8;
            cResult[18] = tmp26;
            let tmp23 = tmp26;
          } else {
            tmp23 = cResult[18];
          }
          if (cResult[19] === tmp20) {
            if (cResult[20] === tmp23) {
              if (cResult[21] === tmp13) {
                let tmp27 = cResult[22];
              }
              return tmp27;
            }
          }
          const obj5 = { style: tmp13, pointerEvents: "none", children: null };
          const items1 = [tmp20, tmp23];
          obj5.children = items1;
          const tmp30 = hasOwnProperty(View, obj5);
          cResult[19] = tmp20;
          cResult[20] = tmp23;
          cResult[21] = tmp13;
          cResult[22] = tmp30;
          tmp27 = tmp30;
        }
        const obj6 = { colors: tmp14, style: tmp15, start: tmp17, end: tmp18, locations: tmp19 };
        const tmp22 = React4(LinearGradientDefault, obj6);
        cResult[14] = tmp14;
        cResult[15] = tmp15;
        cResult[16] = tmp22;
        tmp20 = tmp22;
      }
      const items2 = [tmp10, tmp8];
      cResult[6] = tmp8;
      cResult[7] = tmp10;
      cResult[8] = items2;
      tmp14 = items2;
      tmpResult6 = useToken;
    }
  : function ChatInputScrimGradient(scrimBase) {
      ({ gradientHeight, inline } = scrimBase);
      if (inline === undefined) {
        inline = false;
      }
      scrimBase = scrimBase.scrimBase;
      const gradientValue = client_themes_ClientThemesUtils.useGradientValue(
        client_themes_ClientThemesUtils.GradientPercentage.END,
      );
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
      const obj4 = {
        style: { position: "absolute", top: result, left: 0, right: 0, bottom: 0 },
        pointerEvents: "none",
        children: null,
      };
      const obj5 = {
        colors: null,
        style: { height: gradientHeight },
        start: { x: 0, y: 0 },
        end: { x: 0, y: 1 },
        locations: [0, 1],
      };
      const items = [str, hex2rgbResult];
      obj5.colors = items;
      const items1 = [
        React4(LinearGradientDefault, obj5),
        React4(View, { style: { flex: 1, backgroundColor: hex2rgbResult } }),
      ];
      obj4.children = items1;
      return hasOwnProperty(View, obj4);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputScrimGradient.tsx");

export const ChatInputScrimGradient = tmp4;
export const useChatInputFloatingOverlayStyle = ReactCompilerGating.isReactCompilerEnabled()
  ? function useChatInputFloatingOverlayStyle() {
      const cResult = c.c(2);
      const result = -useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT) / 2;
      if (cResult[0] !== result) {
        const obj3 = { marginTop: result, overflow: "visible" };
        cResult[0] = result;
        cResult[1] = obj3;
        let tmp3 = obj3;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function useChatInputFloatingOverlayStyle() {
      const obj = {
        marginTop: -useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT) / 2,
        overflow: "visible",
      };
      return obj;
    };
