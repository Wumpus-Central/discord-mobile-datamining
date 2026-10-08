// === Module 15370: SettingsAppearanceThemeSelectorItem ===

// Module 15370 (SettingsAppearanceThemeSelectorItem)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1253 */;
import useToken from "useToken" /* 4778 */;
import themes from "themes" /* 4785 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4792 */;
import utils_ColorDefault from "utils/Color" /* 4928 */;
import Pressables from "Pressables" /* 6189 */;
import ThemedGradient from "ThemedGradient" /* 10211 */;
import _modDef15371 from "module_15371" /* 15371 */;
import SynchronizeIconNativeDefault from "SynchronizeIconNative" /* 15372 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 15369 */;

const ThemedGradientDefault = ThemedGradient;

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(5090);
let obj2 = { rippleColor: { color: nativeDefault.unsafe_rawColors.TRANSPARENT }, themeSelectorItemContainer: { width: SettingsAppearanceConstants.THEME_ITEM_WIDTH, height: SettingsAppearanceConstants.THEME_ITEM_HEIGHT }, themeSelectorItem: null, newRedCircle: null };
let obj3 = { color: nativeDefault.unsafe_rawColors.TRANSPARENT };
obj2.themeSelectorItem = { borderRadius: nativeDefault.radii.sm, padding: SettingsAppearanceConstants.THEME_ITEM_PADDING };
let size = { backgroundColor: nativeDefault.unsafe_rawColors.RED_430, width: 12, height: 12, borderRadius: nativeDefault.radii.sm, position: "absolute", top: 0, right: 0 };
obj2.newRedCircle = size;
let closure_8 = createStyles.createStyles(obj2);
createStyles = fn(5090);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { themeSelectorGradientBackground: { justifyContent: "center", width: "100%", height: "100%" }, lock: null };
  const internal = nativeDefault.internal;
  const resolveSemanticColor = internal.resolveSemanticColor;
  if (arg0) {
    let semanticColor = resolveSemanticColor(ThemeTypes.DARK, nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  } else {
    semanticColor = resolveSemanticColor(ThemeTypes.LIGHT, nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  }
  obj.lock = { position: "absolute", alignSelf: "center", opacity: 0.6, tintColor: semanticColor };
  return obj;
});
let obj4 = { borderRadius: nativeDefault.radii.sm, padding: SettingsAppearanceConstants.THEME_ITEM_PADDING };
let closure_10 = new utils_ColorDefault(0, 0, 0, 0.2);
const tmp5 = new utils_ColorDefault(0, 0, 0, 0.2);
let closure_11 = new utils_ColorDefault(255, 255, 255, 0.5);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GradientThemeBackground(arg0) {
  const cResult = c.c(18);
  ({ item, isThemeLocked } = arg0);
  if (cResult[0] !== item.theme) {
    const isThemeDarkResult = themes.isThemeDark(item.theme);
    cResult[0] = item.theme;
    cResult[1] = isThemeDarkResult;
    let tmp4 = isThemeDarkResult;
    const tmpResult = themes;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = closure_9(tmp4);
  if (cResult[2] !== isThemeLocked) {
    let obj2 = isThemeLocked;
    if (isThemeLocked) {
      obj2 = { opacity: 0.5 };
    }
    cResult[2] = isThemeLocked;
    cResult[3] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp6.themeSelectorGradientBackground) {
    if (cResult[5] === tmp7) {
      let tmp8 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { borderRadius: nativeDefault.radii.sm };
      cResult[7] = obj3;
      let tmp10 = obj3;
    } else {
      tmp10 = cResult[7];
    }
    const tmp12 = tmp4 ? closure_10 : closure_11;
    if (cResult[8] === item) {
      if (cResult[9] === tmp12) {
        let tmp13 = cResult[10];
      }
      if (cResult[11] === isThemeLocked) {
        if (cResult[12] === tmp6.lock) {
          let tmp17 = cResult[13];
        }
        if (cResult[14] === tmp8) {
          if (cResult[15] === tmp13) {
            if (cResult[16] === tmp17) {
              let tmp21 = cResult[17];
            }
            return tmp21;
          }
        }
        const obj4 = { style: tmp8, children: null };
        const items = [tmp13, tmp17];
        obj4.children = items;
        const tmp24 = React5(View, obj4);
        cResult[14] = tmp8;
        cResult[15] = tmp13;
        cResult[16] = tmp17;
        cResult[17] = tmp24;
        tmp21 = tmp24;
      }
      let tmp18 = isThemeLocked;
      if (isThemeLocked) {
        const obj5 = { source: _modDef15371, style: tmp6.lock };
        tmp18 = timestampProducer(native.Icon, obj5);
      }
      cResult[11] = isThemeLocked;
      cResult[12] = tmp6.lock;
      cResult[13] = tmp18;
      tmp17 = tmp18;
    }
    const obj6 = { componentStyles: tmp10, gradientOverride: item, mix: true, mixColorOverride: tmp12 };
    const tmp16 = timestampProducer(ThemedGradientDefault, obj6);
    cResult[8] = item;
    cResult[9] = tmp12;
    cResult[10] = tmp16;
    tmp13 = tmp16;
  }
  const items1 = [tmp6.themeSelectorGradientBackground, tmp7];
  cResult[4] = tmp6.themeSelectorGradientBackground;
  cResult[5] = tmp7;
  cResult[6] = items1;
  tmp8 = items1;
}) : (function GradientThemeBackground(arg0) {
  ({ item, isThemeLocked } = arg0);
  const isThemeDarkResult = themes.isThemeDark(item.theme);
  const tmp4 = closure_9(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground, ];
  let obj2 = isThemeLocked;
  if (isThemeLocked) {
    obj2 = { opacity: 0.5 };
  }
  const obj3 = { style: items, children: null };
  items[1] = obj2;
  const obj4 = { componentStyles: null, gradientOverride: null, mix: true, mixColorOverride: null };
  const obj5 = { borderRadius: null };
  obj5.borderRadius = nativeDefault.radii.sm;
  obj4.componentStyles = obj5;
  obj4.gradientOverride = item;
  obj4.mixColorOverride = isThemeDarkResult ? closure_10 : closure_11;
  const items1 = [timestampProducer(ThemedGradientDefault, obj4), ];
  if (isThemeLocked) {
    const obj6 = { source: _modDef15371, style: tmp4.lock };
    isThemeLocked = timestampProducer(native.Icon, obj6);
  }
  items1[1] = isThemeLocked;
  obj3.children = items1;
  return React5(View, obj3);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function DefaultThemeBackground(item) {
  const cResult = c.c(14);
  item = item.item;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function n() {
      return systemTheme.systemTheme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === item.theme) {
    if (cResult[3] === stateFromStores) {
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, tmp8);
      const tmpResult4 = useToken;
      const token1 = useToken.useToken(nativeDefault.colors.BORDER_STRONG, tmp8);
      const tmpResult5 = useToken;
      const token2 = useToken.useToken(nativeDefault.colors.ICON_STRONG, tmp8);
      if (cResult[5] === token) {
        if (cResult[6] === token1) {
          let tmp14 = cResult[7];
        }
        if (cResult[8] === token2) {
          if (cResult[9] === item.theme) {
            let tmp15 = cResult[10];
          }
          if (cResult[11] === tmp14) {
            if (cResult[12] === tmp15) {
              let tmp19 = cResult[13];
            }
            return tmp19;
          }
          const obj2 = { style: tmp14, children: tmp15 };
          const tmp22 = timestampProducer(View, obj2);
          cResult[11] = tmp14;
          cResult[12] = tmp15;
          cResult[13] = tmp22;
          tmp19 = tmp22;
        }
        let tmp16 = null;
        if ("system" === item.theme) {
          const obj3 = { style: { alignSelf: "center", justifyContent: "center", flex: 1 }, children: null };
          const obj4 = { fill: token2 };
          obj3.children = timestampProducer(SynchronizeIconNativeDefault, obj4);
          tmp16 = timestampProducer(View, obj3);
        }
        cResult[8] = token2;
        cResult[9] = item.theme;
        cResult[10] = tmp16;
        tmp15 = tmp16;
      }
      const size = { width: "100%", height: "100%", backgroundColor: token, borderColor: token1, borderWidth: 1, borderRadius: nativeDefault.radii.sm };
      cResult[5] = token;
      cResult[6] = token1;
      cResult[7] = size;
      tmp14 = size;
      const tmpResult6 = useToken;
    }
  }
  if ("system" === item.theme) {
    let theme = ThemeStore.themePreferenceForSystemTheme(stateFromStores);
  } else {
    theme = item.theme;
  }
  cResult[2] = item.theme;
  cResult[3] = stateFromStores;
  cResult[4] = theme;
  const tmpResult = useStateFromStores;
}) : (function DefaultThemeBackground(item) {
  item = item.item;
  useStateFromStores;
  [][0] = ThemeStore;
  if ("system" === item.theme) {
    let theme = ThemeStore.themePreferenceForSystemTheme(tmp4);
  } else {
    theme = item.theme;
  }
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, theme);
  const tmpResult = useToken;
  const token1 = useToken.useToken(nativeDefault.colors.BORDER_STRONG, theme);
  const tmpResult3 = useToken;
  const obj2 = { style: null, children: null };
  const size = { width: "100%", height: "100%", backgroundColor: token, borderColor: token1, borderWidth: 1, borderRadius: null };
  const token2 = useToken.useToken(nativeDefault.colors.ICON_STRONG, theme);
  size.borderRadius = nativeDefault.radii.sm;
  obj2.style = size;
  let tmp9Result = null;
  if ("system" === item.theme) {
    const obj3 = { style: { alignSelf: "center", justifyContent: "center", flex: 1 }, children: null };
    const obj4 = { fill: token2 };
    obj3.children = timestampProducer(SynchronizeIconNativeDefault, obj4);
    tmp9Result = timestampProducer(View, obj3);
  }
  obj2.children = tmp9Result;
  return timestampProducer(View, obj2);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomThemeBackground(arg0) {
  const cResult = c.c(18);
  ({ item, isThemeLocked } = arg0);
  if (cResult[0] !== item.theme) {
    const isThemeDarkResult = themes.isThemeDark(item.theme);
    cResult[0] = item.theme;
    cResult[1] = isThemeDarkResult;
    let tmp4 = isThemeDarkResult;
    const tmpResult = themes;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = closure_9(tmp4);
  if (cResult[2] !== isThemeLocked) {
    let obj2 = isThemeLocked;
    if (isThemeLocked) {
      obj2 = { opacity: 0.5 };
    }
    cResult[2] = isThemeLocked;
    cResult[3] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp6.themeSelectorGradientBackground) {
    if (cResult[5] === tmp7) {
      let tmp8 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { borderRadius: nativeDefault.radii.sm };
      cResult[7] = obj3;
      let tmp10 = obj3;
    } else {
      tmp10 = cResult[7];
    }
    const tmp12 = tmp4 ? closure_10 : closure_11;
    if (cResult[8] === item) {
      if (cResult[9] === tmp12) {
        let tmp13 = cResult[10];
      }
      if (cResult[11] === isThemeLocked) {
        if (cResult[12] === tmp6.lock) {
          let tmp16 = cResult[13];
        }
        if (cResult[14] === tmp8) {
          if (cResult[15] === tmp13) {
            if (cResult[16] === tmp16) {
              let tmp20 = cResult[17];
            }
            return tmp20;
          }
        }
        const obj4 = { style: tmp8, children: null };
        const items = [tmp13, tmp16];
        obj4.children = items;
        const tmp23 = React5(View, obj4);
        cResult[14] = tmp8;
        cResult[15] = tmp13;
        cResult[16] = tmp16;
        cResult[17] = tmp23;
        tmp20 = tmp23;
      }
      let tmp17 = isThemeLocked;
      if (isThemeLocked) {
        const obj5 = { source: _modDef15371, style: tmp6.lock };
        tmp17 = timestampProducer(native.Icon, obj5);
      }
      cResult[11] = isThemeLocked;
      cResult[12] = tmp6.lock;
      cResult[13] = tmp17;
      tmp16 = tmp17;
    }
    const obj6 = { componentStyles: tmp10, mix: true, mixColorOverride: tmp12, customTheme: item };
    const tmp15 = timestampProducer(ThemedGradient.CustomThemedGradient, obj6);
    cResult[8] = item;
    cResult[9] = tmp12;
    cResult[10] = tmp15;
    tmp13 = tmp15;
  }
  const items1 = [tmp6.themeSelectorGradientBackground, tmp7];
  cResult[4] = tmp6.themeSelectorGradientBackground;
  cResult[5] = tmp7;
  cResult[6] = items1;
  tmp8 = items1;
}) : (function CustomThemeBackground(arg0) {
  ({ item, isThemeLocked } = arg0);
  const isThemeDarkResult = themes.isThemeDark(item.theme);
  const tmp4 = closure_9(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground, ];
  let obj2 = isThemeLocked;
  if (isThemeLocked) {
    obj2 = { opacity: 0.5 };
  }
  const obj3 = { style: items, children: null };
  items[1] = obj2;
  const obj4 = { componentStyles: null, mix: true, mixColorOverride: null, customTheme: null };
  obj4.componentStyles = { borderRadius: nativeDefault.radii.sm };
  obj4.mixColorOverride = isThemeDarkResult ? closure_10 : closure_11;
  obj4.customTheme = item;
  const items1 = [timestampProducer(ThemedGradient.CustomThemedGradient, obj4), ];
  if (isThemeLocked) {
    const obj6 = { source: _modDef15371, style: tmp4.lock };
    isThemeLocked = timestampProducer(native.Icon, obj6);
  }
  items1[1] = isThemeLocked;
  obj3.children = items1;
  return React5(View, obj3);
});
ReactCompilerGating = fn(558);
let tmp6 = new utils_ColorDefault(255, 255, 255, 0.5);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeSelectorItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ThemeSelectorItem(arg0) {
  const cResult = c.c(27);
  ({ themePreset, isPreview, isSelected, onPress, isNew } = arg0);
  const tmp4 = closure_8();
  if (isPreview) {
    isPreview = themePreset.type !== ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  if (cResult[0] === isPreview) {
    if (cResult[1] === themePreset) {
      if (cResult[3] === isSelected) {
        if (cResult[4] === isPreview) {
          let tmp13 = cResult[5];
        }
        const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp13);
        ({ accessibilityRole, accessibilityState } = radioA11yNative);
        ({ themeSelectorItemContainer, rippleColor } = tmp4);
        if (cResult[6] !== themePreset) {
          const name = themePreset.getName();
          cResult[6] = themePreset;
          cResult[7] = name;
          let tmp15 = name;
        } else {
          tmp15 = cResult[7];
        }
        if (cResult[8] !== isPreview) {
          let stringResult;
          if (isPreview) {
            const intl = util.intl;
            stringResult = intl.string(util.t.VqGKm0);
          }
          cResult[8] = isPreview;
          cResult[9] = stringResult;
          let tmp17 = stringResult;
        } else {
          tmp17 = cResult[9];
        }
        if (cResult[10] === isNew) {
          if (cResult[11] === isSelected) {
            if (cResult[12] === tmp4.newRedCircle) {
              let tmp19 = cResult[13];
            }
            if (cResult[14] === tmp5) {
              if (cResult[15] === tmp4.themeSelectorItem) {
                if (cResult[16] === tmp19) {
                  let tmp23 = cResult[17];
                }
                if (cResult[18] === accessibilityRole) {
                  if (cResult[19] === accessibilityState) {
                    if (cResult[20] === onPress) {
                      if (cResult[21] === tmp4.rippleColor) {
                        if (cResult[22] === tmp4.themeSelectorItemContainer) {
                          if (cResult[23] === tmp15) {
                            if (cResult[24] === tmp17) {
                              if (cResult[25] === tmp23) {
                                let tmp27 = cResult[26];
                              }
                              return tmp27;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj2 = { style: themeSelectorItemContainer, androidRippleConfig: rippleColor, onPress, accessibilityRole, accessibilityLabel: tmp15, accessibilityState, accessibilityHint: tmp17, children: tmp23 };
                const tmp29 = timestampProducer(Pressables.PressableOpacity, obj2);
                cResult[18] = accessibilityRole;
                cResult[19] = accessibilityState;
                cResult[20] = onPress;
                cResult[21] = tmp4.rippleColor;
                cResult[22] = tmp4.themeSelectorItemContainer;
                cResult[23] = tmp15;
                cResult[24] = tmp17;
                cResult[25] = tmp23;
                cResult[26] = tmp29;
                tmp27 = tmp29;
              }
            }
            const obj3 = { style: tmp4.themeSelectorItem, children: null };
            const items = [tmp5, tmp19];
            obj3.children = items;
            const tmp26 = React5(View, obj3);
            cResult[14] = tmp5;
            cResult[15] = tmp4.themeSelectorItem;
            cResult[16] = tmp19;
            cResult[17] = tmp26;
            tmp23 = tmp26;
          }
        }
        let tmp20 = isNew;
        if (isNew) {
          tmp20 = !isSelected;
        }
        if (tmp20) {
          const obj4 = { style: tmp4.newRedCircle };
          tmp20 = timestampProducer(View, obj4);
        }
        cResult[10] = isNew;
        cResult[11] = isSelected;
        cResult[12] = tmp4.newRedCircle;
        cResult[13] = tmp20;
        tmp19 = tmp20;
        const tmpResult = useA11yRolesNative;
      }
      const obj5 = { selected: isSelected, disabled: isPreview };
      cResult[3] = isSelected;
      cResult[4] = isPreview;
      cResult[5] = obj5;
      tmp13 = obj5;
    }
  }
  if (themePreset.type === ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME) {
    const obj6 = { item: themePreset };
    let tmp8 = timestampProducer(closure_13, obj6);
  } else if (themePreset.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const obj7 = { item: themePreset, isThemeLocked: isPreview };
    tmp8 = timestampProducer(closure_14, obj7);
  } else {
    const obj8 = { isThemeLocked: isPreview, item: themePreset };
    tmp8 = timestampProducer(closure_12, obj8);
  }
  cResult[0] = isPreview;
  cResult[1] = themePreset;
  cResult[2] = tmp8;
}) : (function ThemeSelectorItem(onPress) {
  ({ themePreset, isPreview, isSelected, isNew } = onPress);
  const tmp = closure_8();
  if (isPreview) {
    isPreview = themePreset.type !== ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  if (themePreset.type === ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME) {
    const obj2 = { item: themePreset };
    let tmp8 = timestampProducer(closure_13, obj2);
    let tmp9 = timestampProducer;
  } else if (themePreset.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const obj3 = { item: themePreset, isThemeLocked: isPreview };
    tmp8 = timestampProducer(closure_14, obj3);
    tmp9 = timestampProducer;
  } else {
    const obj = { isThemeLocked: isPreview, item: themePreset };
    tmp8 = timestampProducer(closure_12, obj);
    tmp9 = timestampProducer;
  }
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: isSelected, disabled: isPreview });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj4 = { style: tmp.themeSelectorItemContainer, androidRippleConfig: tmp.rippleColor, onPress: onPress.onPress, accessibilityRole, accessibilityLabel: themePreset.getName(), accessibilityState, accessibilityHint: null, children: null };
  let stringResult;
  if (isPreview) {
    const intl = util.intl;
    stringResult = intl.string(util.t.VqGKm0);
  }
  obj4.accessibilityHint = stringResult;
  const obj5 = { style: tmp.themeSelectorItem, children: null };
  const items = [tmp8, ];
  if (isNew) {
    isNew = !isSelected;
  }
  if (isNew) {
    const obj6 = { style: tmp.newRedCircle };
    isNew = tmp9(View, obj6);
  }
  items[1] = isNew;
  obj5.children = items;
  obj4.children = React5(View, obj5);
  return tmp9(Pressables.PressableOpacity, obj4);
});