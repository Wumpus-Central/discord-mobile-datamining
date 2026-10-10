// === Module 14858: UserProfileEditTheme ===

// Module 14858 (UserProfileEditTheme)
import nativeDefault from "native" /* 587 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import _modDef5202 from "module_5202" /* 5202 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { gap: nativeDefault.space.PX_8 }, labelRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, overflowMenu: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.overflowMenu = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditTheme.tsx");

export default function UserProfileEditTheme(pendingThemeColors) {
  ({ user, onProfileThemeColorsChanged } = pendingThemeColors);
  ({ guildId, pendingAvatarSrc, showResetMenu } = pendingThemeColors);
  if (showResetMenu === undefined) {
    showResetMenu = false;
  }
  let flag = pendingThemeColors.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  let onChangeColors;
  let tmp = closure_7();
  let tmp4 = require("useDisplayProfile")(user.id, guildId);
  importDefault = tmp4;
  ({ primaryColor, secondaryColor } = require("useProfileTheme")({ user, displayProfile: tmp4, pendingThemeColors: pendingThemeColors.pendingThemeColors, isPreview: flag }));
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(guildId, 80);
  }
  const tmp5 = require("useProfileTheme")({ user, displayProfile: tmp4, pendingThemeColors: pendingThemeColors.pendingThemeColors, isPreview: flag });
  let themeColors;
  const avatarColors = onProfileThemeColorsChanged(onChangeColors[7]).useAvatarColors(pendingAvatarSrc, tmp2(tmp3[4]).unsafe_rawColors.PRIMARY_530, false);
  if (tmp4 != null) {
    themeColors = tmp4.themeColors;
  }
  const items = [themeColors, onProfileThemeColorsChanged];
  onChangeColors = noop.useCallback((arg0) => {
    themeColors = undefined;
    if (themeColors != null) {
      themeColors = themeColors.themeColors;
    }
    let tmp4;
    if (!tmp(arg0, themeColors)) {
      tmp4 = arg0;
    }
    onProfileThemeColorsChanged(tmp4);
    tmp = _modDef5202;
  }, items);
  require("useOpenThemeColorPickerActionSheet")({ primaryColor, secondaryColor, avatarColors, onChangeColors });
  let tmp15Result = null;
  if (null != primaryColor) {
    tmp15Result = null;
    if (null != secondaryColor) {
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { style: tmp.labelRow, children: null };
      const obj4 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
      const intl = onProfileThemeColorsChanged(tmp3[11]).intl;
      obj4.children = intl.string(onProfileThemeColorsChanged(tmp3[11]).t.DMeO2X);
      const items1 = [closure_5(onProfileThemeColorsChanged(tmp3[10]).Text, obj4), ];
      if (showResetMenu) {
        const obj5 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl2 = onProfileThemeColorsChanged(tmp3[11]).intl;
        obj5.accessibilityLabel = intl2.string(onProfileThemeColorsChanged(tmp3[11]).t["+1H47t"]);
        obj5.onPress = function handleOverflowMenuPress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14860, dependencyMap.paths), "Profile Theme", {
            onResetTheme() {
              return onChangeColors([null, null]);
            }
          });
        };
        const obj6 = { color: tmp.overflowMenu.tintColor };
        obj5.children = closure_5(onProfileThemeColorsChanged(tmp3[16]).MoreHorizontalIcon, obj6);
        showResetMenu = closure_5(onProfileThemeColorsChanged(tmp3[12]).PressableOpacity, obj5);
      }
      items1[1] = showResetMenu;
      obj3.children = items1;
      const items2 = [closure_6(View, obj3), ];
      const obj7 = { primaryColor, secondaryColor, onPressPrimary: tmp12, onPressSecondary: tmp13 };
      items2[1] = closure_5(tmp2(tmp3[17]), obj7);
      obj2.children = items2;
      tmp15Result = closure_6(View, obj2);
    }
  }
  return tmp15Result;
};