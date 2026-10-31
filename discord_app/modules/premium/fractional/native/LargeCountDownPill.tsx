// === Module 15348: LargeCountDownPill ===

// Module 15348 (LargeCountDownPill)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5735 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { largeCountdownPill: { flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(255, 255, 255, 0.1)", alignSelf: "center", paddingHorizontal: 16, marginBottom: 10 }, largeCountdownPillText: null, iconStyle: null };
let obj2 = { flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(255, 255, 255, 0.1)", alignSelf: "center", paddingHorizontal: 16, marginBottom: 10 };
obj.largeCountdownPillText = { paddingVertical: 8, color: nativeDefault.colors.TEXT_STATUS_IDLE, fontSize: 14, lineHeight: 16, marginRight: 8 };
obj.iconStyle = { width: 16, height: 16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/fractional/native/LargeCountDownPill.tsx");

export default function LargeCountDownPill(countdownText) {
  const tmp = closure_7();
  const obj = {
    onPress: function handlePress() {
      const obj2 = { text: null, icon: null, iconColor: null };
      const intl = util.intl;
      obj2.text = intl.string(util.t["Mv4E/M"]);
      obj2.icon = CircleInformationIcon.CircleInformationIcon;
      obj2.iconColor = nativeDefault.colors.STATUS_WARNING;
      ToastActionCreatorsDefault.open("LARGE_COUNTDOWN_PILL_TOAST", obj2);
    },
    children: null
  };
  let obj2 = { style: tmp.largeCountdownPill, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/bold", style: tmp.largeCountdownPillText, children: countdownText.countdownText.toUpperCase() }), ];
  const obj3 = { variant: "text-xs/bold", style: tmp.largeCountdownPillText, children: countdownText.countdownText.toUpperCase() };
  items[1] = hasOwnProperty(CircleInformationIcon.CircleInformationIcon, { style: tmp.iconStyle, color: nativeDefault.colors.TEXT_STATUS_IDLE });
  obj2.children = items;
  obj.children = timestampProducer(React4, obj2);
  return hasOwnProperty(React3, obj);
};