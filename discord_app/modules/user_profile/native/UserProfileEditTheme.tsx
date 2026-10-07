// discord_app/modules/user_profile/native/UserProfileEditTheme.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01987_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _modDef5016 from "../../../../_runtime/metro/05016__.js";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import getHigherContrastColor from "../utils/getHigherContrastColor.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
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
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(25);
      ({ color, label, accessibilityLabel, onPress, style } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] !== color) {
        const int2hexResult = utils_ColorUtils.int2hex(color);
        const tmpResult = utils_ColorUtils;
        const obj2 = { backgroundColor: int2hexResult, colors: null };
        const items = [WHITE, PRIMARY_530];
        obj2.colors = items;
        const higherContrastColor = getHigherContrastColor.getHigherContrastColor(obj2);
        cResult[0] = color;
        cResult[1] = int2hexResult;
        cResult[2] = higherContrastColor;
        let tmp6 = higherContrastColor;
        let tmp5 = int2hexResult;
        const tmpResult2 = getHigherContrastColor;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.Qp04hK);
        cResult[3] = stringResult;
        let tmp11 = stringResult;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { backgroundColor: tmp5 };
        cResult[4] = tmp5;
        cResult[5] = obj3;
        let tmp13 = obj3;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === style) {
        if (cResult[7] === tmp4.colorSwatch) {
          if (cResult[8] === tmp13) {
            let tmp14 = cResult[9];
          }
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp4.dropperIcon) {
              let tmp15 = cResult[12];
            }
            if (cResult[13] === accessibilityLabel) {
              if (cResult[14] === color) {
                if (cResult[15] === onPress) {
                  if (cResult[16] === tmp14) {
                    if (cResult[17] === tmp15) {
                      let tmp18 = cResult[18];
                    }
                    if (cResult[19] !== label) {
                      const obj4 = {
                        variant: "text-sm/normal",
                        color: "text-default",
                        accessibilityElementsHidden: true,
                        importantForAccessibility: "no-hide-descendants",
                        children: label,
                      };
                      const tmp23 = suggestedColors(Text_Text.Text, obj4);
                      cResult[19] = label;
                      cResult[20] = tmp23;
                      let tmp21 = tmp23;
                    } else {
                      tmp21 = cResult[20];
                    }
                    if (cResult[21] === tmp4.colorSwatchContainer) {
                      if (cResult[22] === tmp18) {
                        if (cResult[23] === tmp21) {
                          let tmp24 = cResult[24];
                        }
                        return tmp24;
                      }
                    }
                    const obj5 = { style: tmp4.colorSwatchContainer, children: null };
                    const items1 = [tmp18, tmp21];
                    obj5.children = items1;
                    const tmp27 = hasOwnProperty(View, obj5);
                    cResult[21] = tmp4.colorSwatchContainer;
                    cResult[22] = tmp18;
                    cResult[23] = tmp21;
                    cResult[24] = tmp27;
                    tmp24 = tmp27;
                  }
                }
              }
            }
            const obj6 = {
              accessibilityRole: "button",
              accessibilityLabel,
              accessibilityHint: tmp11,
              style: tmp14,
              onPress,
              children: tmp15,
            };
            const tmp20 = suggestedColors(Pressables.PressableOpacity, obj6, color);
            cResult[13] = accessibilityLabel;
            cResult[14] = color;
            cResult[15] = onPress;
            cResult[16] = tmp14;
            cResult[17] = tmp15;
            cResult[18] = tmp20;
            tmp18 = tmp20;
          }
          const obj7 = { size: "xs", color: tmp6, style: tmp4.dropperIcon };
          const tmp17 = suggestedColors(PencilIcon.PencilIcon, obj7);
          cResult[10] = tmp6;
          cResult[11] = tmp4.dropperIcon;
          cResult[12] = tmp17;
          tmp15 = tmp17;
        }
      }
      const items2 = [tmp4.colorSwatch, tmp13, style];
      cResult[6] = style;
      cResult[7] = tmp4.colorSwatch;
      cResult[8] = tmp13;
      cResult[9] = items2;
      tmp14 = items2;
    }
  : (color) => {
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
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditTheme.tsx");

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
  let f117031;
  let primaryColor;
  suggestedColors = undefined;
  let tmp = closure_6();
  let tmp4 = f117031(primaryColor[13])(user.id, guildId);
  f117031 = tmp4;
  const tmp5 = f117031(primaryColor[14])({
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
  suggestedColors = secondaryColor(primaryColor[15]).useAvatarColors(
    pendingAvatarSrc,
    f117031(tmp3[4]).unsafe_rawColors.PRIMARY_530,
    false,
  );
  if (null != primaryColor) {
    if (null != secondaryColor) {
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { style: tmp.sectionHeader, children: null };
      const obj4 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
      const intl6 = tmp6(tmp3[9]).intl;
      obj4.children = intl6.string(tmp6(tmp3[9]).t.DMeO2X);
      let items = [suggestedColors(tmp6(tmp3[12]).Text, obj4)];
      if (showResetMenu) {
        const obj5 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl = tmp6(tmp3[9]).intl;
        obj5.accessibilityLabel = intl.string(tmp6(tmp3[9]).t["+1H47t"]);
        obj5.onPress = function onPress() {
          ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14469, dependencyMap.paths), "Profile Theme", {
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
              tmp = f117031(primaryColor[16]);
            },
          });
        };
        const obj6 = { color: tmp.overflowMenu.tintColor };
        obj5.children = tmp10(tmp6(tmp3[21]).MoreHorizontalIcon, obj6);
        showResetMenu = tmp10(tmp6(tmp3[11]).PressableOpacity, obj5);
      }
      items[1] = showResetMenu;
      obj3.children = items;
      const items1 = [closure_5(secondaryColor, obj3)];
      const obj7 = { style: tmp.themeColorContainer, children: null };
      const obj8 = { onPress: null, color: null, label: null, accessibilityLabel: null };
      secondaryColor = primaryColor;
      f117031 = (arg0) => {
        if (arg0 !== primaryColor) {
          const items = [arg0, secondaryColor];
          let themeColors;
          if (f117031 != null) {
            themeColors = f117031.themeColors;
          }
          let tmp8;
          if (!tmp4(items, themeColors)) {
            tmp8 = items;
          }
          secondaryColor(tmp8);
          tmp4 = _modDef5016;
        }
      };
      obj8.onPress = () => {
        closure_1(primaryColor[17])({ color: secondaryColor, onSelect: f117031, suggestedColors });
      };
      obj8.color = primaryColor;
      const intl2 = tmp6(tmp3[9]).intl;
      obj8.label = intl2.string(tmp6(tmp3[9]).t.C3KTQk);
      const intl3 = tmp6(tmp3[9]).intl;
      const obj9 = { colorHex: tmp6(tmp3[7]).int2hex(primaryColor) };
      obj8.accessibilityLabel = intl3.formatToPlainString(tmp6(tmp3[9]).t.v4X2kc, obj9);
      const items2 = [suggestedColors(closure_9, obj8)];
      const obj10 = { color: secondaryColor, onPress: null, label: null, accessibilityLabel: null };
      f117031 = (primaryColor) => {
        if (primaryColor !== secondaryColor) {
          const items = [primaryColor, primaryColor];
          let themeColors;
          if (f117031 != null) {
            themeColors = f117031.themeColors;
          }
          let tmp8;
          if (!tmp4(items, themeColors)) {
            tmp8 = items;
          }
          secondaryColor(tmp8);
          tmp4 = _modDef5016;
        }
      };
      obj10.onPress = () => {
        closure_1(primaryColor[17])({ color: secondaryColor, onSelect: f117031, suggestedColors });
      };
      const intl4 = tmp6(tmp3[9]).intl;
      obj10.label = intl4.string(tmp6(tmp3[9]).t["8elvy6"]);
      const intl5 = tmp6(tmp3[9]).intl;
      const obj11 = { colorHex: null };
      const tmp6Result = tmp6(tmp3[7]);
      obj11.colorHex = tmp6(tmp3[7]).int2hex(secondaryColor);
      obj10.accessibilityLabel = intl5.formatToPlainString(tmp6(tmp3[9]).t.I0tmru, obj11);
      items2[1] = suggestedColors(closure_9, obj10);
      obj7.children = items2;
      items1[1] = closure_5(secondaryColor, obj7);
      obj2.children = items1;
      return closure_5(secondaryColor, obj2);
    }
  }
  return null;
}
