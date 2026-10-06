// === Module 13288: LargeCountDownPill ===

// Module 13288 (LargeCountDownPill)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4580 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4818 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
({ TouchableOpacity: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { largeCountdownPill: obj2, largeCountdownPillText: obj3, iconStyle: { width: 16, height: 16 } };
obj2 = { flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.round, backgroundColor: "rgba(255, 255, 255, 0.1)", alignSelf: "center", paddingHorizontal: 16, marginBottom: 10 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: 8, color: nativeDefault.colors.TEXT_STATUS_IDLE, fontSize: 14, lineHeight: 16, marginRight: 8 };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((countdownText) => {
  let closure_0;
  let items;
  let largeCountdownPill;
  let largeCountdownPillText;
  let tmp5;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(16);
  const tmp4 = closure_7();
  _require = tmp4;
  if (cResult[0] !== tmp4.iconStyle) {
    const fn = function l() {
      let intl;
      let intl2;
      let obj = DesignSystemsNotificationComponentsExperiment;
      const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("LargeCountDownPill");
      const tmp5 = ToastActionCreatorsDefault;
      if (designSystemsNotificationComponents) {
        const openMana = tmp5.openMana;
        const obj2 = { text: intl2.string(intl3.t["Mv4E/M"]), icon: CircleInformationIcon2.CircleInformationIcon, iconColor: nativeDefault.colors.STATUS_WARNING };
        intl2 = intl3.intl;
        openMana("LARGE_COUNTDOWN_PILL_TOAST", obj2);
      } else {
        const open = tmp5.open;
        const obj3 = {
          key: "LARGE_COUNTDOWN_PILL_TOAST",
          content: intl.string(intl3.t["Mv4E/M"]),
          icon() {
              const obj = { style: closure_1_0.iconStyle, color: nativeDefault.colors.STATUS_WARNING };
              const CircleInformationIcon = closure_0(dependencyMap[9]).CircleInformationIcon;
              return closure_2_5(CircleInformationIcon, obj);
            },
          iconColor: nativeDefault.colors.STATUS_WARNING
        };
        intl = intl3.intl;
        open(obj3);
      }
    };
    cResult[0] = tmp4.iconStyle;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  ({ largeCountdownPill, largeCountdownPillText } = tmp4);
  if (cResult[2] !== countdownText.countdownText) {
    const formatted = str.toUpperCase();
    cResult[2] = countdownText.countdownText;
    cResult[3] = formatted;
    tmp6 = formatted;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp4.largeCountdownPillText) {
    let tmp8;
    let tmp10;
    if (cResult[5] === tmp6) {
      tmp8 = cResult[6];
    }
    if (cResult[7] !== tmp4.iconStyle) {
      let obj2 = { style: tmp4.iconStyle, color: nativeDefault.colors.TEXT_STATUS_IDLE };
      let CircleInformationIcon = tmp(4818).CircleInformationIcon;
      const tmp13 = closure_5(CircleInformationIcon, obj2);
      cResult[7] = tmp4.iconStyle;
      cResult[8] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[8];
    }
    if (cResult[9] === tmp4.largeCountdownPill) {
      if (cResult[10] === tmp8) {
        let tmp14;
        if (cResult[11] === tmp10) {
          tmp14 = cResult[12];
        }
        if (cResult[13] === tmp5) {
          let tmp18;
          if (cResult[14] === tmp14) {
            tmp18 = cResult[15];
          }
          return tmp18;
        }
        let obj3 = { onPress: tmp5, children: tmp14 };
        const tmp21 = closure_5(closure_3, obj3);
        cResult[13] = tmp5;
        cResult[14] = tmp14;
        cResult[15] = tmp21;
        tmp18 = tmp21;
      }
    }
    const obj4 = { style: largeCountdownPill, children: items };
    items = [tmp8, tmp10];
    const tmp17 = closure_6(closure_4, obj4);
    cResult[9] = tmp4.largeCountdownPill;
    cResult[10] = tmp8;
    cResult[11] = tmp10;
    cResult[12] = tmp17;
    tmp14 = tmp17;
  }
  const tmp9 = closure_5(require("Text/Text").Text, { variant: "text-xs/bold", style: largeCountdownPillText, children: tmp6 });
  cResult[4] = tmp4.largeCountdownPillText;
  cResult[5] = tmp6;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : ((countdownText) => {
  let closure_0;
  let items;
  let obj2;
  const str = countdownText.countdownText;
  const tmp = closure_7();
  _require = tmp;
  let obj = {
    onPress() {
      let intl;
      let intl2;
      let obj = DesignSystemsNotificationComponentsExperiment;
      const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("LargeCountDownPill");
      const tmp5 = ToastActionCreatorsDefault;
      if (designSystemsNotificationComponents) {
        const openMana = tmp5.openMana;
        const obj2 = { text: intl2.string(intl3.t["Mv4E/M"]), icon: CircleInformationIcon2.CircleInformationIcon, iconColor: nativeDefault.colors.STATUS_WARNING };
        intl2 = intl3.intl;
        openMana("LARGE_COUNTDOWN_PILL_TOAST", obj2);
      } else {
        const open = tmp5.open;
        const obj3 = {
          key: "LARGE_COUNTDOWN_PILL_TOAST",
          content: intl.string(intl3.t["Mv4E/M"]),
          icon() {
              const obj = { style: closure_1_0.iconStyle, color: nativeDefault.colors.STATUS_WARNING };
              const CircleInformationIcon = closure_0(dependencyMap[9]).CircleInformationIcon;
              return closure_2_5(CircleInformationIcon, obj);
            },
          iconColor: nativeDefault.colors.STATUS_WARNING
        };
        intl = intl3.intl;
        open(obj3);
      }
    },
    children: closure_6(closure_4, obj2)
  };
  obj2 = { style: tmp.largeCountdownPill, children: items };
  let obj3 = { variant: "text-xs/bold", style: tmp.largeCountdownPillText, children: str.toUpperCase() };
  const Text = require("Text/Text").Text;
  items = [closure_5(Text, obj3), ];
  const obj4 = { style: tmp.iconStyle, color: nativeDefault.colors.TEXT_STATUS_IDLE };
  let CircleInformationIcon = require("CircleInformationIcon").CircleInformationIcon;
  items[1] = closure_5(CircleInformationIcon, obj4);
  return closure_5(closure_3, obj);
});
const result = size.fileFinishedImporting("modules/premium/fractional/native/LargeCountDownPill.tsx");

export default tmp5;