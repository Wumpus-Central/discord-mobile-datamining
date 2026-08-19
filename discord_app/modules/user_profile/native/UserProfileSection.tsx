// === Module 10779: UserProfileSection ===

// Module 10779 (UserProfileSection)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import ManaContext from "ManaContext" /* 4104 */;
import hexToRgba from "hexToRgba" /* 4223 */;
import Text from "Text" /* 4734 */;
import useProfileThemeValues from "useProfileThemeValues" /* 7161 */;
import Divider from "Divider" /* 7693 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const createCacheKey = { borderWidth: 1, borderRadius: ThemesDefault.radii.sm, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[3] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileSection.tsx");

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
      let borderColor = hexToRgba.hexOpacityToRgba(Divider.DIVIDER_COLORS[theme], profileThemeValues.dividerOpacity);
      const tmp3Result = hexToRgba;
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
      const items1 = [callback(Text.Text, obj3), headerIcon];
      obj2[1] = items1;
      const items2 = [callback(View, obj2), trailingIcon];
      obj1[1] = items2;
      tmp8Result = callback(View, obj1);
    }
    const items3 = [tmp8Result, ];
    let tmp16 = null;
    if (showContainer) {
      tmp16 = obj;
    }
    const obj4 = { style: null, children: null };
    obj4[0] = tmp16;
    obj4[1] = children;
    items3[1] = callback(View, obj4);
    obj.children = items3;
    return callback(View, obj);
  }
  borderColor = tmp2.contentContainer.borderColor;
};