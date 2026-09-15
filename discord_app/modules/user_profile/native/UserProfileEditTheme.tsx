// discord_app/modules/user_profile/native/UserProfileEditTheme.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _modDef4758 from "../../../../_runtime/metro/04758__.js";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import getHigherContrastColor from "../utils/getHigherContrastColor.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ColorSwatch(color) {
  color = color.color;
  ({ label, accessibilityLabel, onPress, style } = color);
  const tmp = closure_6();
  const int2hexResult = utils_ColorUtils.int2hex(color);
  const obj3 = { backgroundColor: int2hexResult, colors: null };
  const items = [WHITE, PRIMARY_530];
  obj3.colors = items;
  const obj4 = { style: tmp.colorSwatchContainer, children: null };
  const higherContrastColor = getHigherContrastColor.getHigherContrastColor(obj3);
  const obj5 = {
    accessibilityRole: "button",
    accessibilityLabel,
    accessibilityHint: null,
    style: null,
    onPress: null,
    children: null,
  };
  const intl = util.intl;
  obj5.accessibilityHint = intl.string(util.t.Qp04hK);
  const items1 = [tmp.colorSwatch, { backgroundColor: int2hexResult }, style];
  obj5.style = items1;
  obj5.onPress = onPress;
  obj5.children = suggestedColors(PencilIcon.PencilIcon, {
    size: "xs",
    color: higherContrastColor,
    style: tmp.dropperIcon,
  });
  const items2 = [
    suggestedColors(Pressables.PressableOpacity, obj5, color),
    suggestedColors(Text_Text.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: label,
    }),
  ];
  obj4.children = items2;
  return hasOwnProperty(View, obj4);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  container: { gap: 6 },
  sectionHeader: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  themeColorContainer: { flexDirection: "row", gap: 12, justifyContent: "center" },
  colorSwatchContainer: { position: "relative", flex: 1, flexDirection: "column", alignItems: "center", gap: 4 },
  colorSwatch: null,
  dropperIcon: null,
  overflowMenu: null,
};
let size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
obj2.colorSwatch = size;
obj2.dropperIcon = { position: "absolute", top: 10, right: 10 };
obj2.overflowMenu = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_6 = createStyles.createStyles(obj2);
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
  let f98258;
  let primaryColor;
  suggestedColors = undefined;
  let tmp = closure_6();
  let tmp4 = f98258(primaryColor[11])(user.id, guildId);
  f98258 = tmp4;
  const tmp5 = f98258(primaryColor[12])({
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
  suggestedColors = secondaryColor(primaryColor[13]).useAvatarColors(
    pendingAvatarSrc,
    f98258(tmp3[4]).unsafe_rawColors.PRIMARY_530,
    false,
  );
  if (null != primaryColor) {
    if (null != secondaryColor) {
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { style: tmp.sectionHeader, children: null };
      const obj4 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
      const intl6 = tmp6(tmp3[8]).intl;
      obj4.children = intl6.string(tmp6(tmp3[8]).t.DMeO2X);
      let items = [suggestedColors(tmp6(tmp3[10]).Text, obj4)];
      if (showResetMenu) {
        const obj5 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl = tmp6(tmp3[8]).intl;
        obj5.accessibilityLabel = intl.string(tmp6(tmp3[8]).t["+1H47t"]);
        obj5.onPress = function onPress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14722, dependencyMap.paths), "Profile Theme", {
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
              tmp = f98258(primaryColor[14]);
            },
          });
        };
        const obj6 = { color: tmp.overflowMenu.tintColor };
        obj5.children = tmp10(tmp6(tmp3[21]).MoreHorizontalIcon, obj6);
        showResetMenu = tmp10(tmp6(tmp3[7]).PressableOpacity, obj5);
      }
      items[1] = showResetMenu;
      obj3.children = items;
      const items1 = [closure_5(secondaryColor, obj3)];
      const obj7 = { style: tmp.themeColorContainer, children: null };
      const obj8 = { onPress: null, color: null, label: null, accessibilityLabel: null };
      secondaryColor = primaryColor;
      f98258 = (arg0) => {
        if (arg0 !== primaryColor) {
          const items = [arg0, secondaryColor];
          let themeColors;
          if (f98258 != null) {
            themeColors = f98258.themeColors;
          }
          let tmp8;
          if (!tmp4(items, themeColors)) {
            tmp8 = items;
          }
          secondaryColor(tmp8);
          tmp4 = _modDef4758;
        }
      };
      obj8.onPress = () => {
        const result = secondaryColor(primaryColor[15]).UNSAFE_markDismissibleContentAsDismissed(
          secondaryColor(primaryColor[16]).DismissibleContent.PROFILE_THEMES_SETTINGS_VIEWED_V2,
        );
        closure_1(primaryColor[17])({ color: secondaryColor, onSelect: f98258, suggestedColors });
      };
      obj8.color = primaryColor;
      const intl2 = tmp6(tmp3[8]).intl;
      obj8.label = intl2.string(tmp6(tmp3[8]).t.C3KTQk);
      const intl3 = tmp6(tmp3[8]).intl;
      const obj9 = { colorHex: tmp6(tmp3[5]).int2hex(primaryColor) };
      obj8.accessibilityLabel = intl3.formatToPlainString(tmp6(tmp3[8]).t.v4X2kc, obj9);
      const items2 = [suggestedColors(ColorSwatch, obj8)];
      const obj10 = { color: secondaryColor, onPress: null, label: null, accessibilityLabel: null };
      f98258 = (primaryColor) => {
        if (primaryColor !== secondaryColor) {
          const items = [primaryColor, primaryColor];
          let themeColors;
          if (f98258 != null) {
            themeColors = f98258.themeColors;
          }
          let tmp8;
          if (!tmp4(items, themeColors)) {
            tmp8 = items;
          }
          secondaryColor(tmp8);
          tmp4 = _modDef4758;
        }
      };
      obj10.onPress = () => {
        const result = secondaryColor(primaryColor[15]).UNSAFE_markDismissibleContentAsDismissed(
          secondaryColor(primaryColor[16]).DismissibleContent.PROFILE_THEMES_SETTINGS_VIEWED_V2,
        );
        closure_1(primaryColor[17])({ color: secondaryColor, onSelect: f98258, suggestedColors });
      };
      const intl4 = tmp6(tmp3[8]).intl;
      obj10.label = intl4.string(tmp6(tmp3[8]).t["8elvy6"]);
      const intl5 = tmp6(tmp3[8]).intl;
      const obj11 = { colorHex: null };
      const tmp6Result = tmp6(tmp3[5]);
      obj11.colorHex = tmp6(tmp3[5]).int2hex(secondaryColor);
      obj10.accessibilityLabel = intl5.formatToPlainString(tmp6(tmp3[8]).t.I0tmru, obj11);
      items2[1] = suggestedColors(ColorSwatch, obj10);
      obj7.children = items2;
      items1[1] = closure_5(secondaryColor, obj7);
      obj2.children = items1;
      return closure_5(secondaryColor, obj2);
    }
  }
  return null;
}
