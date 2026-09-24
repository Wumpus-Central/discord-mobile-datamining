// discord_app/modules/premium/fractional/native/LargeCountDownPill.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
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
const result = size.fileFinishedImporting("modules/premium/fractional/native/LargeCountDownPill.tsx");

export default function LargeCountDownPill(countdownText) {
  const tmp = closure_7();
  _require = tmp;
  const obj = {
    onPress() {
      const obj2 = { key: "LARGE_COUNTDOWN_PILL_TOAST", content: null, icon: null, iconColor: null };
      const intl = util.intl;
      obj2.content = intl.string(util.t["Mv4E/M"]);
      obj2.icon = function icon() {
        return closure_2_5(closure_0(4783).CircleInformationIcon, {
          style: closure_1_0.iconStyle,
          color: nativeDefault.colors.STATUS_WARNING,
        });
      };
      obj2.iconColor = nativeDefault.colors.STATUS_WARNING;
      ToastActionCreatorsDefault.open(obj2);
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
  const obj3 = {
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
}
