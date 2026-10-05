// discord_app/modules/activities/native/ActivitiesDebugOverlay.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useThermalState from "../../device/useThermalState.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ColorUtils_mod from "../../../utils/ColorUtils.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useThermalStateDefault = useThermalState;

let ColorUtils;
let closure_4;
let hasOwnProperty;
let rect;
const View = react_native.View;
({ jsxs: closure_4, jsx: hasOwnProperty } = Fragment);
let c6 = 16;
let createStyles = createStyles_mod;
let obj = { container: rect, row: { flexDirection: "row" } };
rect = {
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7),
  paddingRight: 16,
  paddingBottom: 16,
};
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      const obj = react2;
      const cResult = obj.c(16);
      const tmp4 = closure_7();
      const tmp6 = useThermalStateDefault();
      let str = "text-overlay-light";
      let str2 = "";
      if (useThermalState.ThermalStates.UNHANDLED !== tmp6) {
        str = "text-feedback-positive";
        str2 = "nominal";
        if (useThermalState.ThermalStates.NOMINAL !== tmp6) {
          str = "text-feedback-warning";
          str2 = "fair";
          if (useThermalState.ThermalStates.FAIR !== tmp6) {
            str2 = "serious";
            str = "text-feedback-critical";
            if (useThermalState.ThermalStates.SERIOUS !== tmp6) {
              if (useThermalState.ThermalStates.CRITICAL === tmp6) {
                str2 = "critical";
                str = "text-feedback-critical";
              }
            }
          }
        }
      }
      const rect = useSafeAreaInsetsDefault();
      const sum = rect.top + c6;
      const sum1 = rect.left + c6;
      if (cResult[0] === sum1) {
        let tmp9;
        if (cResult[1] === sum) {
          tmp9 = cResult[2];
        }
        if (cResult[3] === tmp4.container) {
          let tmp10;
          let tmp12;
          if (cResult[4] === tmp9) {
            tmp10 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { variant: "text-md/normal", color: "text-overlay-light", children: ["thermal state:", " "] };
            const tmp14 = React3(Text_Text.Text, obj2);
            cResult[6] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[6];
          }
          if (cResult[7] === str2) {
            let tmp15;
            if (cResult[8] === str) {
              tmp15 = cResult[9];
            }
            if (cResult[10] === tmp4.row) {
              let tmp18;
              if (cResult[11] === tmp15) {
                tmp18 = cResult[12];
              }
              if (cResult[13] === tmp10) {
                let tmp22;
                if (cResult[14] === tmp18) {
                  tmp22 = cResult[15];
                }
                return tmp22;
              }
              const obj3 = { style: tmp10, pointerEvents: "none", children: tmp18 };
              const tmp25 = hasOwnProperty(View, obj3);
              cResult[13] = tmp10;
              cResult[14] = tmp18;
              cResult[15] = tmp25;
              tmp22 = tmp25;
            }
            const obj4 = { style: tmp4.row, children: items };
            items = [tmp12, tmp15];
            const tmp21 = React3(View, obj4);
            cResult[10] = tmp4.row;
            cResult[11] = tmp15;
            cResult[12] = tmp21;
            tmp18 = tmp21;
          }
          const obj5 = { variant: "text-md/normal", color: str, children: str2 };
          const tmp17 = hasOwnProperty(Text_Text.Text, obj5);
          cResult[7] = str2;
          cResult[8] = str;
          cResult[9] = tmp17;
          tmp15 = tmp17;
        }
        const items1 = [tmp4.container, tmp9];
        cResult[3] = tmp4.container;
        cResult[4] = tmp9;
        cResult[5] = items1;
        tmp10 = items1;
      }
      const obj6 = { paddingTop: sum, paddingLeft: sum1 };
      cResult[0] = sum1;
      cResult[1] = sum;
      cResult[2] = obj6;
      tmp9 = obj6;
    }
  : () => {
      let items;
      let items1;
      let obj3;
      const tmp = closure_7();
      const tmp4 = useThermalStateDefault();
      let str = "text-overlay-light";
      let str2 = "";
      if (useThermalState.ThermalStates.UNHANDLED !== tmp4) {
        str = "text-feedback-positive";
        str2 = "nominal";
        if (useThermalState.ThermalStates.NOMINAL !== tmp4) {
          str = "text-feedback-warning";
          str2 = "fair";
          if (useThermalState.ThermalStates.FAIR !== tmp4) {
            str2 = "serious";
            str = "text-feedback-critical";
            if (useThermalState.ThermalStates.SERIOUS !== tmp4) {
              if (useThermalState.ThermalStates.CRITICAL === tmp4) {
                str2 = "critical";
                str = "text-feedback-critical";
              }
            }
          }
        }
      }
      const rect = useSafeAreaInsetsDefault();
      const obj = { style: items, pointerEvents: "none", children: React3(View, obj3) };
      items = [tmp.container];
      const obj2 = { paddingTop: rect.top + c6, paddingLeft: rect.left + c6 };
      items[1] = obj2;
      obj3 = { style: tmp.row, children: items1 };
      items1 = [
        React3(Text_Text.Text, {
          variant: "text-md/normal",
          color: "text-overlay-light",
          children: ["thermal state:", " "],
        }),
        hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: str, children: str2 }),
      ];
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("modules/activities/native/ActivitiesDebugOverlay.tsx");

export default tmp5;
