// discord_app/design/void/CardSection/native/CardSection.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LegacyText_LegacyTextDefault from "../../LegacyText/native/LegacyText.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles from "../../../../modules/rebrand/native/TextStyles.tsx";

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { container: { paddingTop: 16, paddingHorizontal: 16 }, title: null, card: null };
createStyles.title = TextStyles(fn(1074).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, {
  uppercase: true,
  marginBottom: 6,
});
createStyles = {
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
createStyles.card = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/CardSection/native/CardSection.tsx");

export default function CardSection(arg0) {
  ({ title, children, headerComponent } = arg0);
  ({ titleStyle, cardStyle, style, accessibilityRole, accessibilityLabel } = arg0);
  const tmp = closure_5();
  let obj = { style: null, accessibilityRole, accessibilityLabel, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  let tmp4 = null;
  if (null != title) {
    obj = { style: null, accessibilityRole: "header", children: null };
    const items1 = [tmp.title, titleStyle];
    obj.style = items1;
    obj.children = title;
    tmp4 = React3(LegacyText_LegacyTextDefault, obj);
  }
  const items2 = [tmp4, ,];
  let tmp8 = null;
  if (null != headerComponent) {
    tmp8 = headerComponent;
  }
  items2[1] = tmp8;
  let tmp9 = null;
  if (null != children) {
    obj = { style: null, children: null };
    const items3 = [tmp.card, cardStyle];
    obj.style = items3;
    obj.children = children;
    tmp9 = React3(View, obj);
  }
  items2[2] = tmp9;
  obj.children = items2;
  return React4(View, obj);
}
