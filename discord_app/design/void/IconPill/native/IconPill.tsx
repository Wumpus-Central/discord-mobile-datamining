// discord_app/design/void/IconPill/native/IconPill.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import IconDefault from "../../Icon/native/Icon.tsx";
import LegacyText_LegacyTextDefault from "../../LegacyText/native/LegacyText.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  pillContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.md,
    height: 20,
    paddingHorizontal: 8,
  },
  pillIcon: null,
  pillText: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.md,
  height: 20,
  paddingHorizontal: 8,
};
obj2.pillIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE, marginRight: 4 };
let obj4 = { tintColor: nativeDefault.colors.TEXT_SUBTLE, marginRight: 4 };
obj2.pillText = {
  fontFamily: fn(1085).Fonts.PRIMARY_NORMAL,
  color: nativeDefault.colors.TEXT_SUBTLE,
  fontSize: 14,
  lineHeight: 18,
};
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/IconPill/native/IconPill.tsx");

export default function IconPill(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  ({ text, source, style, textStyle, accessibilityLabel } = IconComponent);
  const tmp = closure_5();
  const obj = { style: null, children: null };
  const items = [tmp.pillContainer, style];
  obj.style = items;
  if (null != IconComponent) {
    const obj2 = { size: "xxs", style: tmp.pillIcon };
    let tmp9 = React3(IconComponent, obj2);
    let tmp8 = React3;
  } else {
    const obj3 = { source, size: IconDefault.Sizes.EXTRA_SMALL, style: tmp.pillIcon };
    tmp8 = React3;
    tmp9 = React3(IconDefault, obj3);
  }
  const items1 = [tmp9];
  const obj4 = { style: null, numberOfLines: 1, accessibilityLabel, children: text };
  const items2 = [tmp.pillText, textStyle];
  obj4.style = items2;
  items1[1] = tmp8(LegacyText_LegacyTextDefault, obj4);
  obj.children = items1;
  return React4(View, obj);
}
