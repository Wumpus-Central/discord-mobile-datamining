// === Module 12937: LargeCountDownPill ===

// Module 12937 (LargeCountDownPill)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

({ TouchableOpacity: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { largeCountdownPill: null, largeCountdownPillText: null, iconStyle: null };
obj = { flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.round, backgroundColor: "rgba(255, 255, 255, 0.1)", alignSelf: "center", paddingHorizontal: 16, marginBottom: 10 };
obj[0] = obj;
obj[1] = { paddingVertical: 8, color: ThemesDefault.colors.TEXT_STATUS_IDLE, fontSize: 14, lineHeight: 16, marginRight: 8 };
obj[2] = { width: 16, height: 16 };
let closure_7 = createCacheKey.createStyles(obj);
const obj1 = { paddingVertical: 8, color: ThemesDefault.colors.TEXT_STATUS_IDLE, fontSize: 14, lineHeight: 16, marginRight: 8 };
const result = set.fileFinishedImporting("modules/premium/fractional/native/LargeCountDownPill.tsx");

export default function LargeCountDownPill(countdownText) {
  let _require;
  const tmp = callback3();
  _require = tmp;
  let obj = {
    onPress() {
      let obj = closure_1_1(closure_1_2[4]);
      obj = { key: "LARGE_COUNTDOWN_PILL_TOAST", content: null, icon: null, iconColor: null };
      const intl = callback(closure_1_2[5]).intl;
      obj[1] = intl.string(callback(closure_1_2[5]).t["Mv4E/M"]);
      obj[2] = function icon() {
        return closure_1_5(closure_1_0(closure_1_2[6]).CircleInformationIcon, { style: iconStyle.iconStyle, color: closure_1_1(closure_1_2[3]).colors.STATUS_WARNING });
      };
      obj[3] = closure_1_1(closure_1_2[3]).colors.STATUS_WARNING;
      obj.open(obj);
    },
    children: null
  };
  obj = { style: tmp.largeCountdownPill, children: null };
  obj = { variant: "text-xs/bold", style: tmp.largeCountdownPillText, children: countdownText.countdownText.toUpperCase() };
  const items = [callback(_require(4376).Text, obj), callback(_require(4335).CircleInformationIcon, { style: tmp.iconStyle, color: ThemesDefault.colors.TEXT_STATUS_IDLE })];
  obj[1] = items;
  obj[1] = callback2(closure_4, obj);
  return callback(closure_3, obj);
};