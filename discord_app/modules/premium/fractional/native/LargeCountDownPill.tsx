// === Module 13463: LargeCountDownPill ===

// Module 13463 (LargeCountDownPill)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { largeCountdownPill: null, largeCountdownPillText: null, iconStyle: null };
obj = { flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(255, 255, 255, 0.1)", alignSelf: "center", paddingHorizontal: 16, marginBottom: 10 };
obj.largeCountdownPill = obj;
obj.largeCountdownPillText = { paddingVertical: 8, color: nativeDefault.colors.TEXT_STATUS_IDLE, fontSize: 14, lineHeight: 16, marginRight: 8 };
obj.iconStyle = { width: 16, height: 16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/fractional/native/LargeCountDownPill.tsx");

export default function LargeCountDownPill(countdownText) {
  const tmp = closure_7();
  _require = tmp;
  let obj = {
    onPress() {
      const obj = { key: "LARGE_COUNTDOWN_PILL_TOAST", content: null, icon: null, iconColor: null };
      const intl = util.intl;
      obj.content = intl.string(util.t["Mv4E/M"]);
      obj.icon = function icon() {
        return closure_2_5(closure_0(4515).CircleInformationIcon, { style: closure_1_0.iconStyle, color: nativeDefault.colors.STATUS_WARNING });
      };
      obj.iconColor = nativeDefault.colors.STATUS_WARNING;
      obj.open(obj);
    },
    children: null
  };
  obj = { style: tmp.largeCountdownPill, children: null };
  obj = { variant: "text-xs/bold", style: tmp.largeCountdownPillText, children: countdownText.countdownText.toUpperCase() };
  const items = [closure_5(require("Text/Text").Text, obj), closure_5(require("CircleInformationIcon").CircleInformationIcon, { style: tmp.iconStyle, color: nativeDefault.colors.TEXT_STATUS_IDLE })];
  obj.children = items;
  obj.children = closure_6(closure_4, obj);
  return closure_5(closure_3, obj);
};