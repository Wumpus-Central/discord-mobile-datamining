// === Module 12895: LargeCountDownPill ===

// Module 12895 (LargeCountDownPill)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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
  const items = [callback(_require(4734).Text, obj), callback(_require(4330).CircleInformationIcon, { style: tmp.iconStyle, color: ThemesDefault.colors.TEXT_STATUS_IDLE })];
  obj[1] = items;
  obj[1] = callback2(closure_4, obj);
  return callback(closure_3, obj);
};