// discord_app/modules/premium/fractional/native/LargeCountDownPill.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import DesignSystemsNotificationComponentsExperiment from "../../../design/DesignSystemsNotificationComponentsExperiment.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {
  largeCountdownPill: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: nativeDefault.radii.round,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignSelf: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  largeCountdownPillText: null,
  iconStyle: null,
};
let obj2 = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.round,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  alignSelf: "center",
  paddingHorizontal: 16,
  marginBottom: 10,
};
obj.largeCountdownPillText = {
  paddingVertical: 8,
  color: nativeDefault.colors.TEXT_STATUS_IDLE,
  fontSize: 14,
  lineHeight: 16,
  marginRight: 8,
};
obj.iconStyle = { width: 16, height: 16 };
let closure_7 = createStyles.createStyles(obj);
let obj3 = {
  paddingVertical: 8,
  color: nativeDefault.colors.TEXT_STATUS_IDLE,
  fontSize: 14,
  lineHeight: 16,
  marginRight: 8,
};
const result = size.fileFinishedImporting("modules/premium/fractional/native/LargeCountDownPill.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (countdownText) => {
      const cResult = require("c").c(16);
      const tmp4 = closure_7();
      _require = tmp4;
      if (cResult[0] !== tmp4.iconStyle) {
        const fn = function l() {
          const designSystemsNotificationComponents =
            DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("LargeCountDownPill");
          const obj2 = ToastActionCreatorsDefault;
          if (designSystemsNotificationComponents) {
            const obj3 = { text: null, icon: null, iconColor: null };
            const intl2 = util.intl;
            obj3.text = intl2.string(util.t["Mv4E/M"]);
            obj3.icon = CircleInformationIcon.CircleInformationIcon;
            obj3.iconColor = nativeDefault.colors.STATUS_WARNING;
            obj2.openMana("LARGE_COUNTDOWN_PILL_TOAST", obj3);
          } else {
            const obj4 = { key: "LARGE_COUNTDOWN_PILL_TOAST", content: null, icon: null, iconColor: null };
            const intl = util.intl;
            obj4.content = intl.string(util.t["Mv4E/M"]);
            obj4.icon = function icon() {
              return closure_2_5(closure_0(4818).CircleInformationIcon, {
                style: closure_1_0.iconStyle,
                color: nativeDefault.colors.STATUS_WARNING,
              });
            };
            obj4.iconColor = nativeDefault.colors.STATUS_WARNING;
            obj2.open(obj4);
          }
        };
        cResult[0] = tmp4.iconStyle;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      ({ largeCountdownPill, largeCountdownPillText } = tmp4);
      if (cResult[2] !== countdownText.countdownText) {
        const formatted = str.toUpperCase();
        cResult[2] = str;
        cResult[3] = formatted;
        let tmp6 = formatted;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === tmp4.largeCountdownPillText) {
        if (cResult[5] === tmp6) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] !== tmp4.iconStyle) {
          let obj2 = { style: tmp4.iconStyle, color: nativeDefault.colors.TEXT_STATUS_IDLE };
          const tmp13 = closure_5(tmp(4818).CircleInformationIcon, obj2);
          cResult[7] = tmp4.iconStyle;
          cResult[8] = tmp13;
          let tmp10 = tmp13;
        } else {
          tmp10 = cResult[8];
        }
        if (cResult[9] === tmp4.largeCountdownPill) {
          if (cResult[10] === tmp8) {
            if (cResult[11] === tmp10) {
              let tmp14 = cResult[12];
            }
            if (cResult[13] === tmp5) {
              if (cResult[14] === tmp14) {
                let tmp18 = cResult[15];
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
        let obj4 = { style: largeCountdownPill, children: null };
        const items = [tmp8, tmp10];
        obj4.children = items;
        const tmp17 = closure_6(closure_4, obj4);
        cResult[9] = tmp4.largeCountdownPill;
        cResult[10] = tmp8;
        cResult[11] = tmp10;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
      const tmp9 = closure_5(require("Text/Text").Text, {
        variant: "text-xs/bold",
        style: largeCountdownPillText,
        children: tmp6,
      });
      cResult[4] = tmp4.largeCountdownPillText;
      cResult[5] = tmp6;
      cResult[6] = tmp9;
      tmp8 = tmp9;
      let obj = require("c");
    }
  : (countdownText) => {
      const tmp = closure_7();
      _require = tmp;
      let obj = {
        onPress() {
          const designSystemsNotificationComponents =
            DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("LargeCountDownPill");
          const obj2 = ToastActionCreatorsDefault;
          if (designSystemsNotificationComponents) {
            const obj3 = { text: null, icon: null, iconColor: null };
            const intl2 = util.intl;
            obj3.text = intl2.string(util.t["Mv4E/M"]);
            obj3.icon = CircleInformationIcon.CircleInformationIcon;
            obj3.iconColor = nativeDefault.colors.STATUS_WARNING;
            obj2.openMana("LARGE_COUNTDOWN_PILL_TOAST", obj3);
          } else {
            const obj4 = { key: "LARGE_COUNTDOWN_PILL_TOAST", content: null, icon: null, iconColor: null };
            const intl = util.intl;
            obj4.content = intl.string(util.t["Mv4E/M"]);
            obj4.icon = function icon() {
              return closure_2_5(closure_0(4818).CircleInformationIcon, {
                style: closure_1_0.iconStyle,
                color: nativeDefault.colors.STATUS_WARNING,
              });
            };
            obj4.iconColor = nativeDefault.colors.STATUS_WARNING;
            obj2.open(obj4);
          }
        },
        children: null,
      };
      let obj2 = { style: tmp.largeCountdownPill, children: null };
      const items = [
        closure_5(require("Text/Text").Text, {
          variant: "text-xs/bold",
          style: tmp.largeCountdownPillText,
          children: countdownText.countdownText.toUpperCase(),
        }),
      ];
      let obj3 = {
        variant: "text-xs/bold",
        style: tmp.largeCountdownPillText,
        children: countdownText.countdownText.toUpperCase(),
      };
      items[1] = closure_5(require("CircleInformationIcon").CircleInformationIcon, {
        style: tmp.iconStyle,
        color: nativeDefault.colors.TEXT_STATUS_IDLE,
      });
      obj2.children = items;
      obj.children = closure_6(closure_4, obj2);
      return closure_5(closure_3, obj);
    };
