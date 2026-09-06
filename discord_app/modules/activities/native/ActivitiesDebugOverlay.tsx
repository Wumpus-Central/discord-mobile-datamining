// discord_app/modules/activities/native/ActivitiesDebugOverlay.tsx
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
fn(4560);
const createStyles = { container: null, row: null };
let rect = { position: "absolute", top: 0, left: 0, backgroundColor: null, paddingRight: 16, paddingBottom: 16 };
const ColorUtils = fn(4409);
rect.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7);
createStyles.container = rect;
createStyles.row = { flexDirection: "row" };
let closure_6 = createStyles.createStyles(createStyles);
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
  let obj = { style: null, pointerEvents: "none", children: null };
  const items = [tmp.container];
  obj = { paddingTop: rect.top + 16, paddingLeft: rect.left + 16 };
  items[1] = obj;
  obj.style = items;
  obj = { style: tmp.row, children: null };
  const items1 = [
    React4(Text_Text.Text, {
      variant: "text-md/normal",
      color: "text-overlay-light",
      children: ["thermal state:", " "],
    }),
    hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: str, children: str2 }),
  ];
  obj.children = items1;
  obj.children = React4(View, obj);
  return hasOwnProperty(View, obj);
}
