// === Module 17690: ActivitiesDebugOverlay ===

// Module 17690 (ActivitiesDebugOverlay)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import Text_Text from "Text/Text" /* 4823 */;
import useThermalState from "useThermalState" /* 9671 */;
import noop from "module_19" /* 19 */;

const useThermalStateDefault = useThermalState;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: closure_4, jsx: hasOwnProperty } = jsxProd);
const createStyles = fn(4827);
const obj2 = { container: null, row: null };
let rect = { position: "absolute", top: 0, left: 0, backgroundColor: null, paddingRight: 16, paddingBottom: 16 };
const ColorUtils = fn(4676);
rect.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7);
obj2.container = rect;
obj2.row = { flexDirection: "row" };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/ActivitiesDebugOverlay.tsx");

export default function ActivitiesDebugOverlay() {
  const tmp = closure_6();
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
  const items = [tmp.container, { paddingTop: rect.top + 16, paddingLeft: rect.left + 16 }];
  obj.style = items;
  const obj3 = { style: tmp.row, children: null };
  const items1 = [React4(Text_Text.Text, { variant: "text-md/normal", color: "text-overlay-light", children: ["thermal state:", " "] }), hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: str, children: str2 })];
  obj3.children = items1;
  obj.children = React4(View, obj3);
  return hasOwnProperty(View, obj);
};