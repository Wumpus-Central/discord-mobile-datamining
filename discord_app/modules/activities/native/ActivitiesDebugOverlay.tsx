// === Module 16361: ActivitiesDebugOverlay ===

// Module 16361 (ActivitiesDebugOverlay)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import Text from "Text" /* 4734 */;
import useThermalState from "useThermalState" /* 8763 */;
import useThermalStateDefault from "useThermalState" /* 8763 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import hexToRgba from "hexToRgba" /* 4223 */;

require = fn;
noopAll;
({ jsxs: c4, jsx: c5 } = jsxProd);
const createCacheKey = { position: "absolute", top: 0, left: 0, backgroundColor: null, paddingRight: 16, paddingBottom: 16 };
createCacheKey[3] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.BLACK, 0.7);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/activities/native/ActivitiesDebugOverlay.tsx");

export default function ActivitiesDebugOverlay() {
  const tmp = callback3();
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
  const items = [tmp.container, ];
  let obj = { paddingTop: rect.top + 16, paddingLeft: rect.left + 16 };
  items[1] = obj;
  obj = { style: tmp.row, children: null };
  const items1 = [callback(Text.Text, { variant: "text-md/normal", color: "text-overlay-light", children: ["thermal state:", " "] }), callback2(Text.Text, { variant: "text-md/normal", color: str, children: str2 })];
  obj[1] = items1;
  obj[2] = callback(View, obj);
  return callback2(View, obj);
};