// discord_app/design/void/BetaTag/native/BetaTag.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/04987_LinearGradient.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Gradients = fn(7432).Gradients;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, text: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.lg,
  marginLeft: 8,
  paddingHorizontal: 8,
  justifyContent: "center",
};
createStyles.container = createStyles;
createStyles.text = { textTransform: "uppercase" };
let closure_6 = createStyles.createStyles(createStyles);
let obj1 = { SMALL: "small", MEDIUM: "medium" };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/BetaTag/native/BetaTag.tsx");

export default function BetaTag(gradient) {
  ({ style, textStyle, size } = gradient);
  if (size === undefined) {
    size = obj1.MEDIUM;
  }
  let flag = gradient.gradient;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = closure_6();
  let str = "text-xs/bold";
  if (obj1.SMALL !== size) {
    if (obj1.MEDIUM === size) {
      str = "text-sm/bold";
    }
  }
  if (flag) {
    let obj = { style: null, start: null, end: null, colors: null, children: null };
    const items = [tmp2.container, style];
    obj.style = items;
    obj.start = ConstantsIOS.HorizontalGradient.START;
    obj.end = ConstantsIOS.HorizontalGradient.END;
    obj.colors = Gradients.PREMIUM_TIER_2_TRI_COLOR;
    obj = { variant: str, color: "text-overlay-light", style: null, children: null };
    const items1 = [tmp2.text, textStyle];
    obj.style = items1;
    const intl2 = util.intl;
    obj.children = intl2.string(util.t.oW0eUd);
    obj.children = jsx(Text_Text.Text, { variant: str, color: "text-overlay-light", style: null, children: null });
    let tmp3Result = jsx(LinearGradientDefault, {
      variant: str,
      color: "text-overlay-light",
      style: null,
      children: null,
    });
  } else {
    obj = { style: null, children: null };
    const items2 = [tmp2.container, style];
    obj.style = items2;
    obj1 = { variant: str, color: "text-overlay-light", style: null, children: null };
    const items3 = [tmp2.text, textStyle];
    obj1.style = items3;
    const intl = util.intl;
    obj1.children = intl.string(util.t.oW0eUd);
    obj.children = jsx(Text_Text.Text, { variant: str, color: "text-overlay-light", style: null, children: null });
    tmp3Result = <View style={null}>{null}</View>;
  }
  return tmp3Result;
}
export const BetaSizes = obj1;
