// === Module 16486: UserProfileUpsellCardV2 ===

// Module 16486 (UserProfileUpsellCardV2)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9506 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Gradients = fn(7610).Gradients;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = { outer: { borderRadius: nativeDefault.radii.lg, padding: 1 }, inner: null, text: null, textCenter: null };
let obj3 = { borderRadius: nativeDefault.radii.lg, padding: 1 };
obj2.inner = { borderRadius: nativeDefault.radii.lg - 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: nativeDefault.space.PX_16 };
const obj4 = { borderRadius: nativeDefault.radii.lg - 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: nativeDefault.space.PX_16 };
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
  ({ children, style, innerStyle, onLayout } = children);
  const tmp = closure_7();
  const obj = { start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2, style: null, onLayout, children: null };
  const items = [tmp.outer, style];
  obj.style = items;
  const obj2 = { style: null, children: null };
  const items1 = [tmp.inner, innerStyle];
  obj2.style = items1;
  const items2 = [tmp.text, ];
  let textCenter = "center" === str;
  if (textCenter) {
    textCenter = tmp.textCenter;
  }
  items2[1] = textCenter;
  const items3 = [hasOwnProperty(Text_Text.Text, { style: items2, variant: "text-md/normal", color: "text-default", maxFontSizeMultiplier: 2.5, children: children.text }), , ];
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
  items3[1] = hasOwnProperty(components_Button_Button.Button, obj3);
  items3[2] = children;
  obj2.children = items3;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(tmp5, obj);
};
export const GRADIENT_BORDER_WIDTH = 1;