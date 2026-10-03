// discord_app/modules/activities/native/ActivitiesDebugOverlay.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useThermalState from "../../device/useThermalState.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const useThermalStateDefault = useThermalState;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: closure_4, jsx: hasOwnProperty } = jsxProd);
let c6 = 16;
const createStyles = fn(4890);
let obj2 = { container: null, row: null };
let rect = { position: "absolute", top: 0, left: 0, backgroundColor: null, paddingRight: 16, paddingBottom: 16 };
const ColorUtils = fn(4727);
rect.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7);
obj2.container = rect;
obj2.row = { flexDirection: "row" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivitiesDebugOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(16);
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
        if (cResult[1] === sum) {
          let tmp9 = cResult[2];
        }
        if (cResult[3] === tmp4.container) {
          if (cResult[4] === tmp9) {
            let tmp10 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { variant: "text-md/normal", color: "text-overlay-light", children: ["thermal state:", " "] };
            const tmp14 = React4(Text_Text.Text, obj2);
            cResult[6] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[6];
          }
          if (cResult[7] === str2) {
            if (cResult[8] === str) {
              let tmp15 = cResult[9];
            }
            if (cResult[10] === tmp4.row) {
              if (cResult[11] === tmp15) {
                let tmp18 = cResult[12];
              }
              if (cResult[13] === tmp10) {
                if (cResult[14] === tmp18) {
                  let tmp22 = cResult[15];
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
            const obj4 = { style: tmp4.row, children: null };
            const items = [tmp12, tmp15];
            obj4.children = items;
            const tmp21 = React4(View, obj4);
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
      const obj = { style: null, pointerEvents: "none", children: null };
      const items = [tmp.container, { paddingTop: rect.top + c6, paddingLeft: rect.left + c6 }];
      obj.style = items;
      const obj3 = { style: tmp.row, children: null };
      const items1 = [
        React4(Text_Text.Text, {
          variant: "text-md/normal",
          color: "text-overlay-light",
          children: ["thermal state:", " "],
        }),
        hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: str, children: str2 }),
      ];
      obj3.children = items1;
      obj.children = React4(View, obj3);
      return hasOwnProperty(View, obj);
    };
