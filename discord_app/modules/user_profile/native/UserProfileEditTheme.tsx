// discord_app/modules/user_profile/native/UserProfileEditTheme.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import int2hslRaw from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import DismissibleContent from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import UNSAFE_isDismissibleContentDismissed from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import getHigherContrastColor from "../utils/getHigherContrastColor.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import showCustomColorPickerActionSheetDefault from "../../color_picker/native/showCustomColorPickerActionSheet.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function ColorSwatch(color) {
  color = color.color;
  ({ label, accessibilityLabel, onPress, style } = color);
  const tmp = callback3();
  let obj = int2hslRaw;
  const int2hexResult = obj.int2hex(color);
  obj1 = getHigherContrastColor;
  const items = [WHITE, PRIMARY_530];
  obj = { style: tmp.colorSwatchContainer, children: null };
  const higherContrastColor = obj1.getHigherContrastColor({ backgroundColor: int2hexResult, colors: items });
  obj = { accessibilityRole: "button", accessibilityLabel, accessibilityHint: null, style: null, onPress: null, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.Qp04hK);
  const items1 = [tmp.colorSwatch, { backgroundColor: int2hexResult }, style];
  obj[3] = items1;
  obj[4] = onPress;
  obj1 = { size: "xs", color: higherContrastColor, style: tmp.dropperIcon };
  obj[5] = callback(PencilIcon.PencilIcon, obj1);
  const items2 = [callback(PressableBase.PressableOpacity, obj, color), callback(Text.Text, { variant: "text-sm/normal", color: "text-default", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: label })];
  obj[1] = items2;
  return callback2(View, obj);
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { gap: 6 }, sectionHeader: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, themeColorContainer: { flexDirection: "row", gap: 12, justifyContent: "center" }, colorSwatchContainer: { position: "relative", flex: 1, flexDirection: "column", alignItems: "center", gap: 4 }, colorSwatch: null, dropperIcon: null, overflowMenu: null };
createCacheKey = { height: 50, width: "100%", borderRadius: ThemesDefault.radii.sm };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { position: "absolute", top: 10, right: 10 };
createCacheKey[6] = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const WHITE = ThemesDefault.unsafe_rawColors.WHITE;
const PRIMARY_530 = ThemesDefault.unsafe_rawColors.PRIMARY_530;
let obj1 = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileEditTheme.tsx");

export default function UserProfileEditTheme(pendingThemeColors) {
  ({ user, onProfileThemeColorsChanged: secondaryColor, guildId, pendingAvatarSrc, showResetMenu } = pendingThemeColors);
  if (showResetMenu === undefined) {
    showResetMenu = false;
  }
  let flag = pendingThemeColors.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let f94840;
  let primaryColor;
  secondaryColor = undefined;
  let callback;
  const tmp = callback3();
  let tmp4 = f94840(primaryColor[11])(user.id, guildId);
  f94840 = tmp4;
  const tmp5 = f94840(primaryColor[12])({ user, displayProfile: tmp4, pendingThemeColors: pendingThemeColors.pendingThemeColors, isPreview: flag });
  primaryColor = tmp5.primaryColor;
  secondaryColor = tmp5.secondaryColor;
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(guildId, 80);
  }
  let obj = secondaryColor(tmp3[13]);
  callback = obj.useAvatarColors(pendingAvatarSrc, f94840(tmp3[4]).unsafe_rawColors.PRIMARY_530, false);
  if (null != primaryColor) {
    if (null != secondaryColor) {
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { style: null, children: null };
      obj[0] = tmp.sectionHeader;
      obj1 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
      const intl6 = tmp6(tmp3[8]).intl;
      obj1[2] = intl6.string(tmp6(tmp3[8]).t.DMeO2X);
      let items = [callback(tmp6(tmp3[10]).Text, obj1), ];
      if (showResetMenu) {
        const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl = tmp6(tmp3[8]).intl;
        obj2[1] = intl.string(tmp6(tmp3[8]).t["+1H47t"]);
        obj2[2] = function onPress() {
          let obj = f94840(primaryColor[18]);
          obj = {
            onResetTheme(arg0) {
              let themeColors;
              if (themeColors != null) {
                themeColors = themeColors.themeColors;
              }
              const items = [null, null];
              let tmp4;
              if (!tmp(items, themeColors)) {
                tmp4 = items;
              }
              closure_0(tmp4);
            }
          };
          obj.openLazy(secondaryColor(primaryColor[20])(primaryColor[19], primaryColor.paths), "Profile Theme", obj);
        };
        const obj3 = { color: null };
        obj3[0] = tmp.overflowMenu.tintColor;
        obj2[3] = tmp10(tmp6(tmp3[21]).MoreHorizontalIcon, obj3);
        showResetMenu = tmp10(tmp6(tmp3[7]).PressableOpacity, obj2);
      }
      items[1] = showResetMenu;
      obj[1] = items;
      const items1 = [closure_5(secondaryColor, obj), ];
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.themeColorContainer;
      const obj5 = { onPress: null, color: null, label: null, accessibilityLabel: null };
      secondaryColor = primaryColor;
      f94840 = (arg0) => {
        if (arg0 !== primaryColor) {
          const items = [arg0, secondaryColor];
          let themeColors;
          if (f94840 != null) {
            themeColors = f94840.themeColors;
          }
          let tmp8;
          if (!tmp4(items, themeColors)) {
            tmp8 = items;
          }
          secondaryColor(tmp8);
          tmp4 = f94840(primaryColor[14]);
          const tmp7 = secondaryColor;
        }
      };
      obj5[0] = () => {
        let obj = UNSAFE_isDismissibleContentDismissed;
        const result = obj.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.PROFILE_THEMES_SETTINGS_VIEWED_V2);
        obj = { color: secondaryColor, onSelect: f94840, suggestedColors: closure_4 };
        showCustomColorPickerActionSheetDefault(obj);
      };
      obj5[1] = primaryColor;
      const intl2 = tmp6(tmp3[8]).intl;
      obj5[2] = intl2.string(tmp6(tmp3[8]).t.C3KTQk);
      const intl3 = tmp6(tmp3[8]).intl;
      const obj6 = { colorHex: null };
      let tmp6Result = tmp6(tmp3[5]);
      obj6[0] = tmp6Result.int2hex(primaryColor);
      obj5[3] = intl3.formatToPlainString(tmp6(tmp3[8]).t.v4X2kc, obj6);
      const items2 = [callback(ColorSwatch, obj5), ];
      const obj7 = { color: null, onPress: null, label: null, accessibilityLabel: null };
      obj7[0] = secondaryColor;
      f94840 = (arg0) => {
        if (arg0 !== secondaryColor) {
          const items = [primaryColor, arg0];
          let themeColors;
          if (f94840 != null) {
            themeColors = f94840.themeColors;
          }
          let tmp8;
          if (!tmp4(items, themeColors)) {
            tmp8 = items;
          }
          secondaryColor(tmp8);
          tmp4 = f94840(primaryColor[14]);
          const tmp7 = secondaryColor;
        }
      };
      obj7[1] = () => {
        let obj = UNSAFE_isDismissibleContentDismissed;
        const result = obj.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.PROFILE_THEMES_SETTINGS_VIEWED_V2);
        obj = { color: secondaryColor, onSelect: f94840, suggestedColors: closure_4 };
        showCustomColorPickerActionSheetDefault(obj);
      };
      const intl4 = tmp6(tmp3[8]).intl;
      obj7[2] = intl4.string(tmp6(tmp3[8]).t["8elvy6"]);
      const intl5 = tmp6(tmp3[8]).intl;
      const obj8 = { colorHex: null };
      tmp6Result = tmp6(tmp3[5]);
      obj8[0] = tmp6Result.int2hex(secondaryColor);
      obj7[3] = intl5.formatToPlainString(tmp6(tmp3[8]).t.I0tmru, obj8);
      items2[1] = callback(ColorSwatch, obj7);
      obj4[1] = items2;
      items1[1] = closure_5(secondaryColor, obj4);
      obj[1] = items1;
      return closure_5(secondaryColor, obj);
    }
  }
  return null;
};