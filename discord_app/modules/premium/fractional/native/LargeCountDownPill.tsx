// discord_app/modules/premium/fractional/native/LargeCountDownPill.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ TouchableOpacity: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { largeCountdownPill: null, largeCountdownPillText: null, iconStyle: null };
obj = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.round,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  alignSelf: "center",
  paddingHorizontal: 16,
  marginBottom: 10,
};
obj.largeCountdownPill = obj;
obj.largeCountdownPillText = {
  paddingVertical: 8,
  color: nativeDefault.colors.TEXT_STATUS_IDLE,
  fontSize: 14,
  lineHeight: 16,
  marginRight: 8,
};
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
        return closure_2_5(closure_0(4515).CircleInformationIcon, {
          style: closure_1_0.iconStyle,
          color: nativeDefault.colors.STATUS_WARNING,
        });
      };
      obj.iconColor = nativeDefault.colors.STATUS_WARNING;
      obj.open(obj);
    },
    children: null,
  };
  obj = { style: tmp.largeCountdownPill, children: null };
  obj = {
    variant: "text-xs/bold",
    style: tmp.largeCountdownPillText,
    children: countdownText.countdownText.toUpperCase(),
  };
  const items = [
    closure_5(require("Text/Text").Text, obj),
    closure_5(require("CircleInformationIcon").CircleInformationIcon, {
      style: tmp.iconStyle,
      color: nativeDefault.colors.TEXT_STATUS_IDLE,
    }),
  ];
  obj.children = items;
  obj.children = closure_6(closure_4, obj);
  return closure_5(closure_3, obj);
}
