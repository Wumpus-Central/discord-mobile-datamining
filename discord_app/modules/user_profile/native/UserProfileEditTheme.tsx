// discord_app/modules/user_profile/native/UserProfileEditTheme.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _modDef4679 from "../../../../_runtime/metro/04679__.js";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import getHigherContrastColor from "../utils/getHigherContrastColor.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ColorSwatch(color) {
  color = color.color;
  ({ label, accessibilityLabel, onPress, style } = color);
  const tmp = closure_6();
  let obj = utils_ColorUtils;
  const int2hexResult = obj.int2hex(color);
  let obj1 = getHigherContrastColor;
  obj = { backgroundColor: int2hexResult, colors: null };
  const items = [WHITE, PRIMARY_530];
  obj.colors = items;
  obj = { style: tmp.colorSwatchContainer, children: null };
  const higherContrastColor = obj1.getHigherContrastColor(obj);
  obj1 = {
    accessibilityRole: "button",
    accessibilityLabel,
    accessibilityHint: null,
    style: null,
    onPress: null,
    children: null,
  };
  const intl = util.intl;
  obj1.accessibilityHint = intl.string(util.t.Qp04hK);
  const items1 = [tmp.colorSwatch, { backgroundColor: int2hexResult }, style];
  obj1.style = items1;
  obj1.onPress = onPress;
  obj1.children = suggestedColors(PencilIcon.PencilIcon, {
    size: "xs",
    color: higherContrastColor,
    style: tmp.dropperIcon,
  });
  const items2 = [
    suggestedColors(Pressables.PressableOpacity, obj1, color),
    suggestedColors(Text_Text.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: label,
    }),
  ];
  obj.children = items2;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = {
  container: { gap: 6 },
  sectionHeader: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  themeColorContainer: { flexDirection: "row", gap: 12, justifyContent: "center" },
  colorSwatchContainer: { position: "relative", flex: 1, flexDirection: "column", alignItems: "center", gap: 4 },
  colorSwatch: null,
  dropperIcon: null,
  overflowMenu: null,
};
let size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
createStyles.colorSwatch = size;
createStyles.dropperIcon = { position: "absolute", top: 10, right: 10 };
createStyles = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
createStyles.overflowMenu = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const WHITE = nativeDefault.unsafe_rawColors.WHITE;
const PRIMARY_530 = nativeDefault.unsafe_rawColors.PRIMARY_530;
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditTheme.tsx");

export default function UserProfileEditTheme(pendingThemeColors) {
  ({
    user,
    onProfileThemeColorsChanged: secondaryColor,
    guildId,
    pendingAvatarSrc,
    showResetMenu,
  } = pendingThemeColors);
  if (showResetMenu === undefined) {
    showResetMenu = false;
  }
  let flag = pendingThemeColors.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let f97613;
  let primaryColor;
  suggestedColors = undefined;
  const tmp = closure_6();
  let tmp4 = f97613(primaryColor[11])(user.id, guildId);
  f97613 = tmp4;
  const tmp5 = f97613(primaryColor[12])({
    user,
    displayProfile: tmp4,
    pendingThemeColors: pendingThemeColors.pendingThemeColors,
    isPreview: flag,
  });
  primaryColor = tmp5.primaryColor;
  secondaryColor = tmp5.secondaryColor;
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(guildId, 80);
  }
  let obj = secondaryColor(tmp3[13]);
  suggestedColors = obj.useAvatarColors(pendingAvatarSrc, f97613(tmp3[4]).unsafe_rawColors.PRIMARY_530, false);
  if (null != primaryColor) {
    if (null != secondaryColor) {
      obj = { style: tmp.container, children: null };
      obj = { style: tmp.sectionHeader, children: null };
      const obj1 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
      const intl6 = tmp6(tmp3[8]).intl;
      obj1.children = intl6.string(tmp6(tmp3[8]).t.DMeO2X);
      let items = [suggestedColors(tmp6(tmp3[10]).Text, obj1)];
      if (showResetMenu) {
        const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl = tmp6(tmp3[8]).intl;
        obj2.accessibilityLabel = intl.string(tmp6(tmp3[8]).t["+1H47t"]);
        obj2.onPress = function onPress() {
          const obj = {
            onResetTheme() {
              themeColors = undefined;
              if (themeColors != null) {
                themeColors = themeColors.themeColors;
              }
              const items = [null, null];
              let tmp4;
              if (!tmp(items, themeColors)) {
                tmp4 = items;
              }
              secondaryColor(tmp4);
            },
          };
          obj.openLazy(asyncRequireImpl(14624, dependencyMap.paths), "Profile Theme", obj);
        };
        const obj3 = { color: tmp.overflowMenu.tintColor };
        obj2.children = tmp10(tmp6(tmp3[21]).MoreHorizontalIcon, obj3);
        showResetMenu = tmp10(tmp6(tmp3[7]).PressableOpacity, obj2);
      }
      items[1] = showResetMenu;
      obj.children = items;
      const items1 = [closure_5(secondaryColor, obj)];
      const obj4 = { style: tmp.themeColorContainer, children: null };
      const obj5 = { onPress: null, color: null, label: null, accessibilityLabel: null };
      secondaryColor = primaryColor;
      f97613 = (arg0) => {
        if (arg0 !== primaryColor) {
          const items = [arg0, secondaryColor];
          let themeColors;
          if (f97613 != null) {
            themeColors = f97613.themeColors;
          }
          let tmp8;
          if (!tmp4(items, themeColors)) {
            tmp8 = items;
          }
          secondaryColor(tmp8);
          tmp4 = _modDef4679;
        }
      };
      obj5.onPress = () => {
        let obj = secondaryColor(primaryColor[15]);
        const result = obj.UNSAFE_markDismissibleContentAsDismissed(
          secondaryColor(primaryColor[16]).DismissibleContent.PROFILE_THEMES_SETTINGS_VIEWED_V2,
        );
        obj = { color: secondaryColor, onSelect: f97613, suggestedColors };
        closure_1(primaryColor[17])(obj);
      };
      obj5.color = primaryColor;
      const intl2 = tmp6(tmp3[8]).intl;
      obj5.label = intl2.string(tmp6(tmp3[8]).t.C3KTQk);
      const intl3 = tmp6(tmp3[8]).intl;
      const obj6 = { colorHex: null };
      let tmp6Result = tmp6(tmp3[5]);
      obj6.colorHex = tmp6Result.int2hex(primaryColor);
      obj5.accessibilityLabel = intl3.formatToPlainString(tmp6(tmp3[8]).t.v4X2kc, obj6);
      const items2 = [suggestedColors(ColorSwatch, obj5)];
      const obj7 = { color: secondaryColor, onPress: null, label: null, accessibilityLabel: null };
      f97613 = (primaryColor) => {
        if (primaryColor !== secondaryColor) {
          const items = [primaryColor, primaryColor];
          let themeColors;
          if (f97613 != null) {
            themeColors = f97613.themeColors;
          }
          let tmp8;
          if (!tmp4(items, themeColors)) {
            tmp8 = items;
          }
          secondaryColor(tmp8);
          tmp4 = _modDef4679;
        }
      };
      obj7.onPress = () => {
        let obj = secondaryColor(primaryColor[15]);
        const result = obj.UNSAFE_markDismissibleContentAsDismissed(
          secondaryColor(primaryColor[16]).DismissibleContent.PROFILE_THEMES_SETTINGS_VIEWED_V2,
        );
        obj = { color: secondaryColor, onSelect: f97613, suggestedColors };
        closure_1(primaryColor[17])(obj);
      };
      const intl4 = tmp6(tmp3[8]).intl;
      obj7.label = intl4.string(tmp6(tmp3[8]).t["8elvy6"]);
      const intl5 = tmp6(tmp3[8]).intl;
      const obj8 = { colorHex: null };
      tmp6Result = tmp6(tmp3[5]);
      obj8.colorHex = tmp6Result.int2hex(secondaryColor);
      obj7.accessibilityLabel = intl5.formatToPlainString(tmp6(tmp3[8]).t.I0tmru, obj8);
      items2[1] = suggestedColors(ColorSwatch, obj7);
      obj4.children = items2;
      items1[1] = closure_5(secondaryColor, obj4);
      obj.children = items1;
      return closure_5(secondaryColor, obj);
    }
  }
  return null;
}
