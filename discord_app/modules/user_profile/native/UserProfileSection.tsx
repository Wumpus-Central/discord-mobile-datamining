// discord_app/modules/user_profile/native/UserProfileSection.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import useProfileThemeValues from "../useProfileThemeValues.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = {
  titleContainer: { flexDirection: "row", marginBottom: 12, justifyContent: "space-between" },
  title: { flexDirection: "row" },
  section: { marginHorizontal: 12, marginTop: 12, marginBottom: 8 },
  contentContainer: null,
};
createStyles = {
  borderWidth: 1,
  borderRadius: nativeDefault.radii.sm,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.contentContainer = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileSection.tsx");

export default function UserProfileSection(title) {
  title = title.title;
  ({ headerIcon, trailingIcon, showContainer, children, style } = title);
  const merged = Object.assign(
    title,
    Object.assign({ title: 0, headerIcon: 0, trailingIcon: 0, showContainer: 0, children: 0, style: 0 }),
  );
  const tmp2 = closure_5();
  let obj = native;
  const themeContext = obj.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  let obj1 = useProfileThemeValues;
  const profileThemeValues = obj1.useProfileThemeValues(theme);
  obj = {};
  const merged1 = Object.assign(tmp2.contentContainer);
  if (null != primaryColor) {
    if (null != profileThemeValues) {
      let borderColor = tmp3(4409).hexOpacityToRgba(
        tmp3(8599).DIVIDER_COLORS[theme],
        profileThemeValues.dividerOpacity,
      );
      const tmp3Result = tmp3(4409);
    }
    obj.borderColor = borderColor;
    obj = { style: null };
    const items = [tmp2.section, style];
    obj.style = items;
    const merged2 = Object.assign(merged);
    let tmp8Result = null;
    if (null != title) {
      obj1 = { style: tmp2.titleContainer, children: null };
      const obj2 = { style: tmp2.title, children: null };
      const obj3 = { variant: "eyebrow", accessibilityRole: "header", children: title };
      const items1 = [React3(tmp3(4556).Text, obj3), headerIcon];
      obj2.children = items1;
      const items2 = [tmp8(tmp9, obj2), trailingIcon];
      obj1.children = items2;
      tmp8Result = tmp8(tmp9, obj1);
    }
    const items3 = [tmp8Result];
    let tmp16 = null;
    if (showContainer) {
      tmp16 = obj;
    }
    const obj4 = { style: tmp16, children };
    items3[1] = React3(View, obj4);
    obj.children = items3;
    return React4(View, obj);
  }
  borderColor = tmp2.contentContainer.borderColor;
}
