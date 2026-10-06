// discord_app/modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import shared from "../../../../design/shared.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ChannelCallStore from "../ChannelCallStore.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let onPress;

let Fonts;
let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
({ View: c3, StyleSheet: closure_4 } = react_native);
const resetFocusTimer = ChannelCallStore.resetFocusTimer;
({ ThemeTypes: metroRequire, Fonts } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  pressableContainer: { marginHorizontal: 4 },
  pressable: obj2,
  container: size,
  text: obj3,
  disabled: { opacity: 0.5 },
  iconColor: obj4,
};
obj2 = { borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
size = {
  flexDirection: "row",
  height: 32,
  width: 32,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj3 = { marginLeft: 4, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE };
obj4 = { color: nativeDefault.colors.ICON_SUBTLE };
let closure_9 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let IconComponent;
      let accessibilityLabel;
      let children;
      let containerStyle;
      let disableBackground;
      let disabled;
      let items;
      let items1;
      let membersCount;
      let source;
      let theme;
      let tmp7;
      const tmp = onPress;
      const obj = onPress(576);
      const cResult = obj.c(31);
      onPress = onPress.onPress;
      ({
        source,
        accessibilityLabel,
        children,
        membersCount,
        disabled,
        theme,
        disableBackground,
        containerStyle,
        IconComponent,
      } = onPress);
      if (undefined === theme) {
        theme = constants.ASH;
      }
      const tmp6 = closure_9();
      if (cResult[0] !== onPress) {
        const fn = function t() {
          if (null != resetFocusTimer) {
            tmp();
          }
          onPress();
        };
        cResult[0] = onPress;
        cResult[1] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === containerStyle) {
        if (cResult[3] === tmp6.container) {
          let tmp9;
          if (cResult[4] === (disabled && tmp6.disabled)) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === (undefined === disableBackground || disableBackground)) {
            let tmp10;
            let tmp18;
            if (cResult[7] === theme) {
              tmp10 = cResult[8];
            }
            if (cResult[9] === IconComponent) {
              if (cResult[10] === source) {
                let tmp15;
                if (cResult[11] === tmp6.iconColor.color) {
                  tmp15 = cResult[12];
                }
                if (cResult[13] === membersCount) {
                  let tmp20;
                  if (cResult[14] === tmp6.text) {
                    tmp20 = cResult[15];
                  }
                  if (cResult[16] === tmp9) {
                    if (cResult[17] === tmp10) {
                      if (cResult[18] === tmp15) {
                        let tmp24;
                        if (cResult[19] === tmp20) {
                          tmp24 = cResult[20];
                        }
                        if (cResult[21] === accessibilityLabel) {
                          if (cResult[22] === children) {
                            if (cResult[23] === disabled) {
                              if (cResult[24] === tmp6.pressable) {
                                if (cResult[25] === tmp7) {
                                  let tmp28;
                                  if (cResult[26] === tmp24) {
                                    tmp28 = cResult[27];
                                  }
                                  if (cResult[28] === tmp6.pressableContainer) {
                                    let tmp31;
                                    if (cResult[29] === tmp28) {
                                      tmp31 = cResult[30];
                                    }
                                    return tmp31;
                                  }
                                  const obj2 = { style: tmp6.pressableContainer, children: tmp28 };
                                  const tmp34 = closure_7(closure_3, obj2);
                                  cResult[28] = tmp6.pressableContainer;
                                  cResult[29] = tmp28;
                                  cResult[30] = tmp34;
                                  tmp31 = tmp34;
                                }
                              }
                            }
                          }
                        }
                        const obj3 = {
                          accessibilityRole: "button",
                          accessibilityLabel,
                          disabled,
                          style: tmp6.pressable,
                          onPress: tmp7,
                          children: items,
                        };
                        items = [tmp24, children];
                        const tmp30 = closure_8(tmp(5916).PressableOpacity, obj3);
                        cResult[21] = accessibilityLabel;
                        cResult[22] = children;
                        cResult[23] = disabled;
                        cResult[24] = tmp6.pressable;
                        cResult[25] = tmp7;
                        cResult[26] = tmp24;
                        cResult[27] = tmp30;
                        tmp28 = tmp30;
                      }
                    }
                  }
                  const obj4 = { style: tmp9, children: items1 };
                  items1 = [tmp10, tmp15, tmp20];
                  const tmp27 = closure_8(closure_3, obj4);
                  cResult[16] = tmp9;
                  cResult[17] = tmp10;
                  cResult[18] = tmp15;
                  cResult[19] = tmp20;
                  cResult[20] = tmp27;
                  tmp24 = tmp27;
                }
                let tmp22 = null != membersCount && membersCount > 0;
                if (tmp22) {
                  const obj5 = { style: tmp6.text, children: membersCount };
                  tmp22 = closure_7(tmp(1188).LegacyText, obj5);
                }
                cResult[13] = membersCount;
                cResult[14] = tmp6.text;
                cResult[15] = tmp22;
                tmp20 = tmp22;
              }
            }
            if (null != IconComponent) {
              const obj6 = { color: tmp6.iconColor.color, size: "sm" };
              tmp18 = closure_7(IconComponent, obj6);
            } else {
              const obj7 = { source, color: tmp6.iconColor.color, size: tmp(1188).Icon.Sizes.SMALL_20 };
              const Icon = tmp(1188).Icon;
              tmp18 = closure_7(Icon, obj7);
            }
            cResult[9] = IconComponent;
            cResult[10] = source;
            cResult[11] = tmp6.iconColor.color;
            cResult[12] = tmp18;
            tmp15 = tmp18;
          }
          let tmp11 = null;
          const tmpResult = tmp(4735);
          if (tmpResult.isThemeDark(theme)) {
            tmp11 = null;
            if (!(undefined === disableBackground || disableBackground)) {
              const obj8 = { blurTheme: "dark", style: closure_4.absoluteFill };
              tmp11 = closure_7(VisualEffectViewDefault, obj8);
            }
          }
          cResult[6] = undefined === disableBackground || disableBackground;
          cResult[7] = theme;
          cResult[8] = tmp11;
          tmp10 = tmp11;
        }
      }
      const items2 = [tmp6.container, containerStyle, disabled && tmp6.disabled];
      cResult[2] = containerStyle;
      cResult[3] = tmp6.container;
      cResult[4] = disabled && tmp6.disabled;
      cResult[5] = items2;
      tmp9 = items2;
    }
  : (disableBackground) => {
      let PressableOpacity;
      let accessibilityLabel;
      let children;
      let disabled;
      let items1;
      let items2;
      let membersCount;
      let obj2;
      let source;
      let theme;
      let tmp3Result3;
      ({ onPress: require, membersCount, disabled, theme } = disableBackground);
      ({ source, accessibilityLabel, children } = disableBackground);
      if (theme === undefined) {
        theme = constants.ASH;
      }
      let flag = disableBackground.disableBackground;
      if (flag === undefined) {
        flag = true;
      }
      const IconComponent = disableBackground.IconComponent;
      const containerStyle = disableBackground.containerStyle;
      const tmp2 = closure_9();
      const obj = { style: tmp2.pressableContainer, children: closure_8(PressableOpacity, obj2) };
      const items = [tmp2.container, containerStyle];
      obj2 = {
        accessibilityRole: "button",
        accessibilityLabel,
        disabled,
        style: tmp2.pressable,
        onPress() {
          if (null != resetFocusTimer) {
            tmp();
          }
          require();
        },
        children: items2,
      };
      PressableOpacity = Pressables.PressableOpacity;
      if (disabled) {
        disabled = tmp2.disabled;
      }
      const obj3 = { style: items, children: items1 };
      items[2] = disabled;
      let tmp3Result = null;
      const tmp6Result = shared;
      if (tmp6Result.isThemeDark(theme)) {
        tmp3Result = null;
        if (!flag) {
          const obj4 = { blurTheme: "dark", style: closure_4.absoluteFill };
          tmp3Result = closure_7(VisualEffectViewDefault, obj4);
        }
      }
      items1 = [tmp3Result, ,];
      if (null != IconComponent) {
        const obj5 = { color: tmp2.iconColor.color, size: "sm" };
        tmp3Result3 = closure_7(IconComponent, obj5);
      } else {
        const obj6 = { source, color: tmp2.iconColor.color, size: native.Icon.Sizes.SMALL_20 };
        const Icon = native.Icon;
        tmp3Result3 = closure_7(Icon, obj6);
      }
      items1[1] = tmp3Result3;
      let tmp3Result4 = null != membersCount && membersCount > 0;
      if (tmp3Result4) {
        const obj7 = { style: tmp2.text, children: membersCount };
        tmp3Result4 = closure_7(native.LegacyText, obj7);
      }
      items1[2] = tmp3Result4;
      items2 = [closure_8(closure_3, obj3), children];
      return closure_7(closure_3, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx");

export default tmp7;
