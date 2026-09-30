// discord_app/modules/user_profile/native/UserProfileUpsellCardV2.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import LinearGradientDefault from "../../../../_runtime/05489_LinearGradient.js";
import NitroWheelIcon from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Gradients = fn(7048).Gradients;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4866);
let obj2 = { outer: { borderRadius: nativeDefault.radii.lg, padding: 1 }, inner: null, text: null, textCenter: null };
let obj3 = { borderRadius: nativeDefault.radii.lg, padding: 1 };
obj2.inner = {
  borderRadius: nativeDefault.radii.lg - 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  padding: nativeDefault.space.PX_16,
};
const obj4 = {
  borderRadius: nativeDefault.radii.lg - 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  padding: nativeDefault.space.PX_16,
};
obj2.text = { marginBottom: nativeDefault.space.PX_12 };
obj2.textCenter = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellCardV2.tsx");

export default function UserProfileUpsellCardV2(children) {
  let str = children.textAlign;
  if (str === undefined) {
    str = "left";
  }
  ({ buttonVariant, buttonText, onButtonPress } = children);
  if (buttonVariant === undefined) {
    buttonVariant = "primary";
  }
  let flag = children.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = children.loading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ children, style, onLayout } = children);
  const tmp = closure_7();
  const obj = {
    start: ConstantsIOS.HorizontalGradient.START,
    end: ConstantsIOS.HorizontalGradient.END,
    colors: Gradients.PREMIUM_TIER_2,
    style: null,
    onLayout,
    children: null,
  };
  const items = [tmp.outer, style];
  obj.style = items;
  const obj2 = { style: tmp.inner, children: null };
  const items1 = [tmp.text];
  let textCenter = "center" === str;
  if (textCenter) {
    textCenter = tmp.textCenter;
  }
  items1[1] = textCenter;
  const items2 = [
    hasOwnProperty(Text_Text.Text, {
      style: items1,
      variant: "text-md/normal",
      color: "text-default",
      maxFontSizeMultiplier: 2.5,
      children: children.text,
    }),
    ,
  ];
  const obj3 = { icon: null, text: null, onPress: null, variant: null, loading: null, disabled: null, grow: true };
  const tmp5 = LinearGradientDefault;
  obj3.icon = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, { color: nativeDefault.colors.WHITE, size: "xs" });
  obj3.text = buttonText;
  obj3.onPress = onButtonPress;
  obj3.variant = buttonVariant;
  obj3.loading = flag2;
  if (!flag) {
    flag = flag2;
  }
  obj3.disabled = flag;
  items2[1] = hasOwnProperty(components_Button_Button.Button, obj3);
  items2[2] = children;
  obj2.children = items2;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(tmp5, obj);
}
export const GRADIENT_BORDER_WIDTH = 1;
