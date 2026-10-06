// discord_app/modules/user_profile/native/UserProfileEditTheme.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import intl7 from "../../../intl/index.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import getHigherContrastColor from "../utils/getHigherContrastColor.tsx";
import PencilIcon from "../../../design/components/Icon/native/redesign/generated/PencilIcon.tsx";
import showCustomColorPickerActionSheetDefault from "../../color_picker/native/showCustomColorPickerActionSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { gap: 6 },
  sectionHeader: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  themeColorContainer: { flexDirection: "row", gap: 12, justifyContent: "center" },
  colorSwatchContainer: { position: "relative", flex: 1, flexDirection: "column", alignItems: "center", gap: 4 },
  colorSwatch: size,
  dropperIcon: { position: "absolute", top: 10, right: 10 },
  overflowMenu: obj2,
};
size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_6 = createStyles(obj);
const WHITE = nativeDefault.unsafe_rawColors.WHITE;
const PRIMARY_530 = nativeDefault.unsafe_rawColors.PRIMARY_530;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let color;
      let items;
      let items1;
      let label;
      let onPress;
      let style;
      let tmp11;
      let tmp13;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(25);
      ({ color, label, accessibilityLabel, onPress, style } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] !== color) {
        const tmpResult = utils_ColorUtils;
        const int2hexResult = tmpResult.int2hex(color);
        const obj2 = { backgroundColor: int2hexResult, colors: items };
        items = [WHITE, PRIMARY_530];
        const tmpResult2 = getHigherContrastColor;
        const higherContrastColor = tmpResult2.getHigherContrastColor(obj2);
        cResult[0] = color;
        cResult[1] = int2hexResult;
        cResult[2] = higherContrastColor;
        tmp6 = higherContrastColor;
        tmp5 = int2hexResult;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const colorSwatchContainer = tmp4.colorSwatchContainer;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl7.intl;
        const stringResult = intl.string(intl7.t.Qp04hK);
        cResult[3] = stringResult;
        tmp11 = stringResult;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { backgroundColor: tmp5 };
        cResult[4] = tmp5;
        cResult[5] = obj3;
        tmp13 = obj3;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === style) {
        if (cResult[7] === tmp4.colorSwatch) {
          let tmp14;
          if (cResult[8] === tmp13) {
            tmp14 = cResult[9];
          }
          if (cResult[10] === tmp6) {
            let tmp15;
            if (cResult[11] === tmp4.dropperIcon) {
              tmp15 = cResult[12];
            }
            if (cResult[13] === accessibilityLabel) {
              if (cResult[14] === color) {
                if (cResult[15] === onPress) {
                  if (cResult[16] === tmp14) {
                    let tmp18;
                    let tmp21;
                    if (cResult[17] === tmp15) {
                      tmp18 = cResult[18];
                    }
                    if (cResult[19] !== label) {
                      const obj4 = {
                        variant: "text-sm/normal",
                        color: "text-default",
                        accessibilityElementsHidden: true,
                        importantForAccessibility: "no-hide-descendants",
                        children: label,
                      };
                      const tmp23 = React3(Text_Text.Text, obj4);
                      cResult[19] = label;
                      cResult[20] = tmp23;
                      tmp21 = tmp23;
                    } else {
                      tmp21 = cResult[20];
                    }
                    if (cResult[21] === tmp4.colorSwatchContainer) {
                      if (cResult[22] === tmp18) {
                        let tmp24;
                        if (cResult[23] === tmp21) {
                          tmp24 = cResult[24];
                        }
                        return tmp24;
                      }
                    }
                    const obj5 = { style: colorSwatchContainer, children: items1 };
                    items1 = [tmp18, tmp21];
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
            const tmp20 = React3(Pressables.PressableOpacity, obj6, color);
            cResult[13] = accessibilityLabel;
            cResult[14] = color;
            cResult[15] = onPress;
            cResult[16] = tmp14;
            cResult[17] = tmp15;
            cResult[18] = tmp20;
            tmp18 = tmp20;
          }
          const obj7 = { size: "xs", color: tmp6, style: tmp4.dropperIcon };
          const tmp17 = React3(PencilIcon.PencilIcon, obj7);
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
      let accessibilityLabel;
      let intl;
      let items;
      let items1;
      let items2;
      let label;
      let obj6;
      let onPress;
      let style;
      color = color.color;
      ({ label, accessibilityLabel, onPress, style } = color);
      const tmp = closure_6();
      const obj = utils_ColorUtils;
      const int2hexResult = obj.int2hex(color);
      const obj3 = { backgroundColor: int2hexResult, colors: items };
      items = [WHITE, PRIMARY_530];
      const obj4 = { style: tmp.colorSwatchContainer, children: items2 };
      const obj2 = getHigherContrastColor;
      const higherContrastColor = obj2.getHigherContrastColor(obj3);
      const obj5 = {
        accessibilityRole: "button",
        accessibilityLabel,
        accessibilityHint: intl.string(intl7.t.Qp04hK),
        style: items1,
        onPress,
        children: React3(PencilIcon.PencilIcon, obj6),
      };
      const PressableOpacity = Pressables.PressableOpacity;
      intl = intl7.intl;
      items1 = [tmp.colorSwatch, { backgroundColor: int2hexResult }, style];
      obj6 = { size: "xs", color: higherContrastColor, style: tmp.dropperIcon };
      items2 = [
        React3(PressableOpacity, obj5, color),
        React3(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: label,
        }),
      ];
      return hasOwnProperty(View, obj4);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditTheme.tsx");

export default function UserProfileEditTheme(pendingThemeColors) {
  let I0tmru;
  let closure_1;
  let formatToPlainString;
  let formatToPlainString2;
  let guildId;
  let intl;
  let intl2;
  let intl4;
  let intl6;
  let items;
  let items1;
  let items2;
  let obj11;
  let obj6;
  let obj9;
  let pendingAvatarSrc;
  let showResetMenu;
  let tmp6Result;
  let tmp6Result2;
  let user;
  let v4X2kc;
  const onPress = () => {
    const obj = { color: secondaryColor, onSelect: f117031, suggestedColors };
    showCustomColorPickerActionSheetDefault(obj);
  };
  ({ user, onProfileThemeColorsChanged: require, guildId, pendingAvatarSrc, showResetMenu } = pendingThemeColors);
  pendingThemeColors = pendingThemeColors.pendingThemeColors;
  if (showResetMenu === undefined) {
    showResetMenu = false;
  }
  let flag = pendingThemeColors.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  let primaryColor;
  let closure_4;
  let tmp = closure_6();
  let tmp4 = require("useDisplayProfile")(user.id, guildId);
  const tmp2 = importDefault;
  importDefault = tmp4;
  const tmp5 = require("useProfileTheme")({ user, displayProfile: tmp4, pendingThemeColors, isPreview: flag });
  primaryColor = tmp5.primaryColor;
  const secondaryColor = tmp5.secondaryColor;
  if (pendingAvatarSrc == null) {
    pendingAvatarSrc = user.getAvatarURL(guildId, 80);
  }
  let obj = require("useAvatarColor");
  closure_4 = obj.useAvatarColors(pendingAvatarSrc, tmp2(tmp3[4]).unsafe_rawColors.PRIMARY_530, false);
  if (null != primaryColor) {
    if (null != secondaryColor) {
      let obj2 = { style: tmp.container, children: items1 };
      const obj3 = { style: tmp.sectionHeader, children: items };
      const obj4 = {
        variant: "text-sm/semibold",
        color: "text-subtle",
        children: intl6.string(require("intl").t.DMeO2X),
      };
      const Text = require("Text/Text").Text;
      intl6 = require("intl").intl;
      items = [closure_4(Text, obj4)];
      if (showResetMenu) {
        const obj5 = {
          accessibilityRole: "button",
          accessibilityLabel: intl.string(require("intl").t["+1H47t"]),
          onPress() {
            const obj = ActionSheetActionCreatorsDefault;
            const obj2 = {
              onResetTheme() {
                let themeColors;
                const tmp = closure_1(primaryColor[16]);
                if (closure_1_1 != null) {
                  themeColors = closure_1_1.themeColors;
                }
                const items = [null, null];
                let tmp4;
                if (!tmp(items, themeColors)) {
                  tmp4 = items;
                }
                closure_1_0(tmp4);
              },
            };
            obj.openLazy(asyncRequire(14469, dependencyMap.paths), "Profile Theme", obj2);
          },
          children: closure_4(require("MoreHorizontalIcon").MoreHorizontalIcon, obj6),
        };
        const PressableOpacity = require("Pressables").PressableOpacity;
        intl = require("intl").intl;
        obj6 = { color: tmp.overflowMenu.tintColor };
        showResetMenu = tmp10(PressableOpacity, obj5);
      }
      items[1] = showResetMenu;
      items1 = [closure_5(secondaryColor, obj3)];
      const obj7 = { style: tmp.themeColorContainer, children: items2 };
      const f117030 = (arg0) => {
        if (arg0 !== closure_1_2) {
          const items = [arg0, secondaryColor];
          let themeColors;
          const tmp4 = closure_1(primaryColor[16]);
          if (f117030 != null) {
            themeColors = f117030.themeColors;
          }
          let tmp8;
          if (!tmp4(items, themeColors)) {
            tmp8 = items;
          }
          primaryColor(tmp8);
        }
      };
      const obj8 = {
        onPress,
        color: primaryColor,
        label: intl2.string(require("intl").t.C3KTQk),
        accessibilityLabel: formatToPlainString(v4X2kc, obj9),
      };
      intl2 = require("intl").intl;
      const intl3 = require("intl").intl;
      formatToPlainString = intl3.formatToPlainString;
      obj9 = { colorHex: tmp6Result.int2hex(primaryColor) };
      v4X2kc = require("intl").t.v4X2kc;
      tmp6Result = require("utils/ColorUtils");
      items2 = [closure_4(closure_9, obj8)];
      const f117031 = (arg0) => {
        if (arg0 !== closure_1_3) {
          const items = [closure_1_2, arg0];
          let themeColors;
          const tmp4 = closure_1(primaryColor[16]);
          if (f117031 != null) {
            themeColors = f117031.themeColors;
          }
          let tmp8;
          if (!tmp4(items, themeColors)) {
            tmp8 = items;
          }
          secondaryColor(tmp8);
        }
      };
      const obj10 = {
        color: secondaryColor,
        onPress,
        label: intl4.string(require("intl").t["8elvy6"]),
        accessibilityLabel: formatToPlainString2(I0tmru, obj11),
      };
      intl4 = require("intl").intl;
      const intl5 = require("intl").intl;
      formatToPlainString2 = intl5.formatToPlainString;
      obj11 = { colorHex: tmp6Result2.int2hex(secondaryColor) };
      I0tmru = require("intl").t.I0tmru;
      tmp6Result2 = require("utils/ColorUtils");
      items2[1] = closure_4(closure_9, obj10);
      items1[1] = closure_5(secondaryColor, obj7);
      return closure_5(secondaryColor, obj2);
    }
  }
  return null;
}
