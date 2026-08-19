// discord_app/modules/premium/fractional/native/LargeCountDownPill.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import dispatcherDefault from "../../../toast/native/ToastActionCreators.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

({ TouchableOpacity: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.round, backgroundColor: "rgba(255, 255, 255, 0.1)", alignSelf: "center", paddingHorizontal: 16, marginBottom: 10 };
obj[0] = obj;
obj[1] = { paddingVertical: 8, color: ThemesDefault.colors.TEXT_STATUS_IDLE, fontSize: 14, lineHeight: 16, marginRight: 8 };
obj[2] = { width: 16, height: 16 };
let closure_7 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/premium/fractional/native/LargeCountDownPill.tsx");

export default function LargeCountDownPill(countdownText) {
  const tmp = callback3();
  const _require = tmp;
  let obj = { variant: "text-xs/bold", style: tmp.largeCountdownPillText, children: countdownText.countdownText.toUpperCase() };
  const items = [callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj), callback(require("../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx").CircleInformationIcon, { style: tmp.iconStyle, color: ThemesDefault.colors.TEXT_STATUS_IDLE })];
  obj[1] = items;
  obj[1] = callback2(closure_4, obj);
  return callback(closure_3, obj);
};