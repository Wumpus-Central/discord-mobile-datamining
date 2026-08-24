// discord_app/modules/activities/native/ActivitiesDebugOverlay.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import useThermalState from "../../device/useThermalState.tsx";
import useThermalStateDefault from "../../device/useThermalState.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import hexToRgba from "../../../utils/ColorUtils.tsx";

require = arg1;
noopAll;
({ jsxs: c4, jsx: c5 } = jsxProd);
createCacheKey = { container: null, row: null };
createCacheKey = { position: "absolute", top: 0, left: 0, backgroundColor: null, paddingRight: 16, paddingBottom: 16 };
createCacheKey[3] = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.BLACK, 0.7);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/activities/native/ActivitiesDebugOverlay.tsx");

export default function ActivitiesDebugOverlay() {
  const tmp = callback3();
  const tmp4 = useThermalStateDefault();
  let str = "text-overlay-light";
  let str2 = "";
  if (useThermalState.ThermalStates.UNHANDLED !== tmp4) {
    str = "text-feedback-positive";
    str2 = "nominal";
    if (tmp5(8800).ThermalStates.NOMINAL !== tmp4) {
      str = "text-feedback-warning";
      str2 = "fair";
      if (tmp5(8800).ThermalStates.FAIR !== tmp4) {
        str2 = "serious";
        str = "text-feedback-critical";
        if (tmp5(8800).ThermalStates.SERIOUS !== tmp4) {
          if (tmp5(8800).ThermalStates.CRITICAL === tmp4) {
            str2 = "critical";
            str = "text-feedback-critical";
          }
        }
      }
    }
  }
  const rect = useSafeAreaInsetsDefault();
  let obj = { style: items, pointerEvents: "none", children: null };
  items = [tmp.container, ];
  obj = { paddingTop: rect.top + 16, paddingLeft: rect.left + 16 };
  items[1] = obj;
  obj = { style: tmp.row, children: null };
  const items1 = [callback(Text.Text, { variant: "text-md/normal", color: "text-overlay-light", children: ["thermal state:", " "] }), callback2(Text.Text, { variant: "text-md/normal", color: str, children: str2 })];
  obj[1] = items1;
  obj[2] = callback(View, obj);
  return callback2(View, obj);
};