// discord_app/modules/premium/fractional/native/LargeCountDownPill.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  ? function LargeCountDownPill(countdownText) {
      const cResult = c.c(12);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        function handlePress() {
          const obj2 = { text: null, icon: null, iconColor: null };
          const intl = util.intl;
          obj2.text = intl.string(util.t["Mv4E/M"]);
          obj2.icon = CircleInformationIcon.CircleInformationIcon;
          obj2.iconColor = nativeDefault.colors.STATUS_WARNING;
          ToastActionCreatorsDefault.open("LARGE_COUNTDOWN_PILL_TOAST", obj2);
        }
        cResult[0] = handlePress;
        let first = handlePress;
      } else {
        first = cResult[0];
      }
      ({ largeCountdownPill, largeCountdownPillText } = tmp4);
      if (cResult[1] !== countdownText.countdownText) {
        const formatted = str.toUpperCase();
        cResult[1] = str;
        cResult[2] = formatted;
        let tmp6 = formatted;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === tmp4.largeCountdownPillText) {
        if (cResult[4] === tmp6) {
          let tmp8 = cResult[5];
        }
        if (cResult[6] !== tmp4.iconStyle) {
          let obj2 = { style: tmp4.iconStyle, color: nativeDefault.colors.TEXT_STATUS_IDLE };
          const tmp13 = hasOwnProperty(CircleInformationIcon.CircleInformationIcon, obj2);
          cResult[6] = tmp4.iconStyle;
          cResult[7] = tmp13;
          let tmp10 = tmp13;
        } else {
          tmp10 = cResult[7];
        }
        if (cResult[8] === tmp4.largeCountdownPill) {
          if (cResult[9] === tmp8) {
            if (cResult[10] === tmp10) {
              let tmp14 = cResult[11];
            }
            return tmp14;
          }
        }
        const obj3 = { onPress: first, children: null };
        const obj4 = { style: largeCountdownPill, children: null };
        const items = [tmp8, tmp10];
        obj4.children = items;
        obj3.children = timestampProducer(React4, obj4);
        const tmp19 = hasOwnProperty(React3, obj3);
        cResult[8] = tmp4.largeCountdownPill;
        cResult[9] = tmp8;
        cResult[10] = tmp10;
        cResult[11] = tmp19;
        tmp14 = tmp19;
      }
      const tmp9 = hasOwnProperty(Text_Text.Text, {
        variant: "text-xs/bold",
        style: largeCountdownPillText,
        children: tmp6,
      });
      cResult[3] = tmp4.largeCountdownPillText;
      cResult[4] = tmp6;
      cResult[5] = tmp9;
      tmp8 = tmp9;
    }
  : function LargeCountDownPill(countdownText) {
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
        children: null,
      };
      let obj2 = { style: tmp.largeCountdownPill, children: null };
      const items = [
        hasOwnProperty(Text_Text.Text, {
          variant: "text-xs/bold",
          style: tmp.largeCountdownPillText,
          children: countdownText.countdownText.toUpperCase(),
        }),
      ];
      const obj3 = {
        variant: "text-xs/bold",
        style: tmp.largeCountdownPillText,
        children: countdownText.countdownText.toUpperCase(),
      };
      items[1] = hasOwnProperty(CircleInformationIcon.CircleInformationIcon, {
        style: tmp.iconStyle,
        color: nativeDefault.colors.TEXT_STATUS_IDLE,
      });
      obj2.children = items;
      obj.children = timestampProducer(React4, obj2);
      return hasOwnProperty(React3, obj);
    };
