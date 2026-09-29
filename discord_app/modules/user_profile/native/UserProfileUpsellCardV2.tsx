// === Module 14338: UserProfileUpsellCardV2 ===

// Module 14338 (UserProfileUpsellCardV2)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5447 */;
import LinearGradientDefault from "LinearGradient" /* 5459 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8287 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Gradients = fn(7018).Gradients;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
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
  const loading = children.loading;
  ({ style, onLayout } = children);
  const tmp = closure_7();
  const obj = { start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, colors: Gradients.PREMIUM_TIER_2, style: null, onLayout, children: null };
  const items = [tmp.outer, style];
  obj.style = items;
  const obj2 = { style: tmp.inner, children: null };
  const items1 = [tmp.text, ];
  let textCenter = "center" === str;
  if (textCenter) {
    textCenter = tmp.textCenter;
  }
  items1[1] = textCenter;
  const items2 = [hasOwnProperty(Text_Text.Text, { style: items1, variant: "text-md/normal", color: "text-default", maxFontSizeMultiplier: 2.5, children: children.text }), ];
  const obj3 = { icon: null, text: null, onPress: null, variant: null, loading: null, disabled: null, grow: true };
  const tmp5 = LinearGradientDefault;
  obj3.icon = hasOwnProperty(NitroWheelIcon.NitroWheelIcon, { color: nativeDefault.colors.WHITE, size: "xs" });
  obj3.text = buttonText;
  obj3.onPress = onButtonPress;
  obj3.variant = buttonVariant;
  obj3.loading = loading;
  if (!flag) {
    flag = loading;
  }
  obj3.disabled = flag;
  items2[1] = hasOwnProperty(components_Button_Button.Button, obj3);
  obj2.children = items2;
  obj.children = timestampProducer(View, obj2);
  return hasOwnProperty(tmp5, obj);
};
export const GRADIENT_BORDER_WIDTH = 1;