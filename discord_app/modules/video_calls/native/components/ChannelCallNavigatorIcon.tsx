// === Module 10963: ChannelCallNavigatorIcon ===

// Module 10963 (ChannelCallNavigatorIcon)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5364 */;
import Pressables from "Pressables" /* 6191 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const resetFocusTimer = fn(10320).resetFocusTimer;
const Constants = fn(1085);
({ ThemeTypes: metroRequire, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { pressableContainer: { marginHorizontal: 4 }, pressable: { borderRadius: nativeDefault.radii.lg }, container: null, text: null, disabled: null, iconColor: null };
let size = { flexDirection: "row", height: 32, width: 32, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.container = size;
let obj3 = { borderRadius: nativeDefault.radii.lg };
obj2.text = { marginLeft: 4, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE };
obj2.disabled = { opacity: 0.5 };
let obj4 = { marginLeft: 4, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE };
obj2.iconColor = { color: nativeDefault.colors.ICON_SUBTLE };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.ICON_SUBTLE };
size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelCallNavigatorIcon(onPress) {
  const cResult = onPress(576).c(31);
  onPress = onPress.onPress;
  ({ source, accessibilityLabel, children, membersCount, disabled, theme, disableBackground, containerStyle, IconComponent } = onPress);
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
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp6.disabled;
  }
  if (cResult[2] === containerStyle) {
    if (cResult[3] === tmp6.container) {
      if (cResult[4] === disabled2) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        if (cResult[7] === theme) {
          let tmp9 = cResult[8];
        }
        if (cResult[9] === IconComponent) {
          if (cResult[10] === source) {
            if (cResult[11] === tmp6.iconColor.color) {
              if (cResult[13] === membersCount) {
                if (cResult[14] === tmp6.text) {
                  let tmp20 = cResult[15];
                }
                if (cResult[16] === tmp8) {
                  if (cResult[17] === tmp9) {
                    if (cResult[18] === tmp14) {
                      if (cResult[19] === tmp20) {
                        let tmp24 = cResult[20];
                      }
                      if (cResult[21] === accessibilityLabel) {
                        if (cResult[22] === children) {
                          if (cResult[23] === disabled) {
                            if (cResult[24] === tmp6.pressable) {
                              if (cResult[25] === tmp7) {
                                if (cResult[26] === tmp24) {
                                  let tmp28 = cResult[27];
                                }
                                if (cResult[28] === tmp6.pressableContainer) {
                                  if (cResult[29] === tmp28) {
                                    let tmp31 = cResult[30];
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
                      const obj3 = { accessibilityRole: "button", accessibilityLabel, disabled, style: tmp6.pressable, onPress: tmp7, children: null };
                      const items = [tmp24, children];
                      obj3.children = items;
                      const tmp30 = closure_8(tmp(6191).PressableOpacity, obj3);
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
                const obj4 = { style: tmp8, children: null };
                const items1 = [tmp9, tmp14, tmp20];
                obj4.children = items1;
                const tmp27 = closure_8(closure_3, obj4);
                cResult[16] = tmp8;
                cResult[17] = tmp9;
                cResult[18] = tmp14;
                cResult[19] = tmp20;
                cResult[20] = tmp27;
                tmp24 = tmp27;
              }
              let tmp22 = null != membersCount;
              if (tmp22) {
                tmp22 = membersCount > 0;
              }
              if (tmp22) {
                const obj5 = { style: tmp6.text, children: membersCount };
                tmp22 = closure_7(tmp(1200).LegacyText, obj5);
              }
              cResult[13] = membersCount;
              cResult[14] = tmp6.text;
              cResult[15] = tmp22;
              tmp20 = tmp22;
            }
          }
        }
        if (null != IconComponent) {
          const obj6 = { color: tmp6.iconColor.color, size: "sm" };
          let tmp17 = closure_7(IconComponent, obj6);
        } else {
          const obj7 = { source, color: tmp6.iconColor.color, size: tmp(1200).Icon.Sizes.SMALL_20 };
          tmp17 = closure_7(tmp(1200).Icon, obj7);
        }
        cResult[9] = IconComponent;
        cResult[10] = source;
        source = tmp6.iconColor.color;
        cResult[11] = source;
        cResult[12] = tmp17;
      }
      let tmp10 = null;
      if (tmpResult.isThemeDark(theme)) {
        tmp10 = null;
        if (!tmp5) {
          const obj8 = { blurTheme: "dark", style: closure_4.absoluteFill };
          tmp10 = closure_7(VisualEffectViewDefault, obj8);
        }
      }
      cResult[6] = tmp5;
      cResult[7] = theme;
      cResult[8] = tmp10;
      tmp9 = tmp10;
      tmpResult = tmp(4930);
    }
  }
  const items2 = [tmp6.container, containerStyle, disabled2];
  cResult[2] = containerStyle;
  cResult[3] = tmp6.container;
  cResult[4] = disabled2;
  cResult[5] = items2;
  tmp8 = items2;
  const obj = onPress(576);
}) : (function ChannelCallNavigatorIcon(disableBackground) {
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
  const tmp2 = closure_9();
  const obj = { style: tmp2.pressableContainer, children: null };
  const obj2 = {
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
    children: null
  };
  const items = [tmp2.container, disableBackground.containerStyle, ];
  if (disabled) {
    disabled = tmp2.disabled;
  }
  const obj3 = { style: items, children: null };
  items[2] = disabled;
  let tmp3Result = null;
  if (tmp6Result.isThemeDark(theme)) {
    tmp3Result = null;
    if (!flag) {
      const obj4 = { blurTheme: "dark", style: closure_4.absoluteFill };
      tmp3Result = closure_7(VisualEffectViewDefault, obj4);
    }
  }
  const items1 = [tmp3Result, , ];
  if (null != IconComponent) {
    const obj5 = { color: tmp2.iconColor.color, size: "sm" };
    let tmp3Result3 = closure_7(IconComponent, obj5);
  } else {
    const obj6 = { source, color: tmp2.iconColor.color, size: native.Icon.Sizes.SMALL_20 };
    tmp3Result3 = closure_7(native.Icon, obj6);
  }
  items1[1] = tmp3Result3;
  let tmp3Result4 = null != membersCount;
  if (tmp3Result4) {
    tmp3Result4 = membersCount > 0;
  }
  if (tmp3Result4) {
    const obj7 = { style: tmp2.text, children: membersCount };
    tmp3Result4 = closure_7(native.LegacyText, obj7);
  }
  items1[2] = tmp3Result4;
  obj3.children = items1;
  const items2 = [closure_8(closure_3, obj3), children];
  obj2.children = items2;
  obj.children = closure_8(Pressables.PressableOpacity, obj2);
  return closure_7(closure_3, obj);
});