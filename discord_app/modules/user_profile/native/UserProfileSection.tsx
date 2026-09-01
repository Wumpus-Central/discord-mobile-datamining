// discord_app/modules/user_profile/native/UserProfileSection.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ManaContext from "../../../../discord_common/js/packages/design/native.tsx";
import useProfileThemeValues from "../useProfileThemeValues.native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = {
  titleContainer: { flexDirection: "row", marginBottom: 12, justifyContent: "space-between" },
  title: { flexDirection: "row" },
  section: { marginHorizontal: 12, marginTop: 12, marginBottom: 8 },
  contentContainer: null,
};
createCacheKey = {
  borderWidth: 1,
  borderRadius: ThemesDefault.radii.sm,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
};
createCacheKey[3] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileSection.tsx");

export default function UserProfileSection(title) {
  title = title.title;
  ({ headerIcon, trailingIcon, showContainer, children, style } = title);
  const merged = Object.assign(title, Object.create(null));
  const tmp2 = callback2();
  let obj = ManaContext;
  const themeContext = obj.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  obj1 = useProfileThemeValues;
  const profileThemeValues = obj1.useProfileThemeValues(theme);
  obj = {};
  const merged1 = Object.assign(tmp2.contentContainer);
  if (null != primaryColor) {
    if (null != profileThemeValues) {
      let borderColor = tmp3(4326).hexOpacityToRgba(
        tmp3(8369).DIVIDER_COLORS[theme],
        profileThemeValues.dividerOpacity,
      );
      const tmp3Result = tmp3(4326);
    }
    obj.borderColor = borderColor;
    obj = { style: null };
    const items = [tmp2.section, style];
    obj[0] = items;
    const merged2 = Object.assign(merged);
    let tmp8Result = null;
    if (null != title) {
      obj1 = { style: null, children: null };
      obj1[0] = tmp2.titleContainer;
      const obj2 = { style: null, children: null };
      obj2[0] = tmp2.title;
      const obj3 = { variant: "eyebrow", accessibilityRole: "header", children: null };
      obj3[2] = title;
      const items1 = [callback(tmp3(4474).Text, obj3), headerIcon];
      obj2[1] = items1;
      const items2 = [tmp8(tmp9, obj2), trailingIcon];
      obj1[1] = items2;
      tmp8Result = tmp8(tmp9, obj1);
    }
    const items3 = [tmp8Result];
    let tmp16 = null;
    if (showContainer) {
      tmp16 = obj;
    }
    const obj4 = { style: null, children: null };
    obj4[0] = tmp16;
    obj4[1] = children;
    items3[1] = callback(View, obj4);
    obj.children = items3;
    return closure_4(View, obj);
  }
  borderColor = tmp2.contentContainer.borderColor;
}
