// === Module 12513: LargeCountDownPill ===

// Module 12513 (LargeCountDownPill)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
({ TouchableOpacity: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { largeCountdownPill: null, largeCountdownPillText: null, iconStyle: null };
obj = { flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: require("Themes").radii.round, backgroundColor: "rgba(255, 255, 255, 0.1)", alignSelf: "center", paddingHorizontal: 16, marginBottom: 10 };
obj[0] = obj;
obj[1] = { paddingVertical: 8, color: require("Themes").colors.TEXT_STATUS_IDLE, fontSize: 14, lineHeight: 16, marginRight: 8 };
obj[2] = { width: 16, height: 16 };
let closure_7 = createCacheKey.createStyles(obj);
let obj1 = { paddingVertical: 8, color: require("Themes").colors.TEXT_STATUS_IDLE, fontSize: 14, lineHeight: 16, marginRight: 8 };
const result = require("createCacheKey").fileFinishedImporting("modules/premium/fractional/native/LargeCountDownPill.tsx");

export default function LargeCountDownPill(countdownText) {
  let _require;
  const tmp = callback3();
  _require = tmp;
  let obj = {
    onPress() {
      let obj = outer1_1(outer1_2[4]);
      obj = { key: "LARGE_COUNTDOWN_PILL_TOAST", content: null, icon: null, iconColor: null };
      const intl = _undefined(outer1_2[5]).intl;
      obj[1] = intl.string(_undefined(outer1_2[5]).t["Mv4E/M"]);
      obj[2] = function icon() {
        const obj = { style: iconStyle.iconStyle, color: null };
        obj[1] = outer1_1(outer1_2[3]).colors.STATUS_WARNING;
        return outer1_5(outer1_0(outer1_2[6]).CircleInformationIcon, obj);
      };
      obj[3] = outer1_1(outer1_2[3]).colors.STATUS_WARNING;
      obj.open(obj);
    },
    children: null
  };
  obj = { style: tmp.largeCountdownPill, children: null };
  obj = { variant: "text-xs/bold", style: tmp.largeCountdownPillText, children: null };
  obj[2] = countdownText.countdownText.toUpperCase();
  const items = [callback(_require(4189).Text, obj), ];
  const obj1 = { style: tmp.iconStyle, color: null };
  obj1[1] = importDefault(712).colors.TEXT_STATUS_IDLE;
  items[1] = callback(_require(4149).CircleInformationIcon, obj1);
  obj[1] = items;
  obj[1] = callback2(closure_4, obj);
  return callback(closure_3, obj);
};