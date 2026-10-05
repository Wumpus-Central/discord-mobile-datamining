// === Module 15093: SettingsAppearanceThemeSelectorItem ===

// Module 15093 (SettingsAppearanceThemeSelectorItem)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import ClientThemesTypes from "ClientThemesTypes" /* 1241 */;
import useToken from "useToken" /* 4580 */;
import themes from "themes" /* 4587 */;
import react_native2 from "react-native" /* 4594 */;
import utils_ColorDefault from "utils/Color" /* 4728 */;
import Pressables from "Pressables" /* 5909 */;
import ThemedGradient from "ThemedGradient" /* 5911 */;
import AssetRegistryDefault from "AssetRegistry" /* 15094 */;
import SynchronizeIconNativeDefault from "SynchronizeIconNative" /* 15095 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 15092 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ThemedGradientDefault = ThemedGradient;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { rippleColor: obj2, themeSelectorItemContainer: { width: SettingsAppearanceConstants.THEME_ITEM_WIDTH, height: SettingsAppearanceConstants.THEME_ITEM_HEIGHT }, themeSelectorItem: obj3, newRedCircle: size };
obj2 = { color: nativeDefault.unsafe_rawColors.TRANSPARENT };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.sm, padding: SettingsAppearanceConstants.THEME_ITEM_PADDING };
size = { backgroundColor: nativeDefault.unsafe_rawColors.RED_430, width: 12, height: 12, borderRadius: nativeDefault.radii.sm, position: "absolute", top: 0, right: 0 };
let closure_8 = createStyles(obj);
createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((arg0) => {
  let semanticColor;
  const obj = { themeSelectorGradientBackground: { justifyContent: "center", width: "100%", height: "100%" }, lock: { position: "absolute", alignSelf: "center", opacity: 0.6, tintColor: semanticColor } };
  const internal = nativeDefault.internal;
  const resolveSemanticColor = internal.resolveSemanticColor;
  const tmp4 = arg0;
  if (tmp4) {
    semanticColor = resolveSemanticColor(ThemeTypes.DARK, nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  } else {
    semanticColor = resolveSemanticColor(ThemeTypes.LIGHT, nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  }
  return obj;
});
let tmp6 = new utils_ColorDefault(0, 0, 0, 0.2);
let closure_10 = tmp6;
let tmp7 = new utils_ColorDefault(255, 255, 255, 0.5);
let closure_11 = tmp7;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isThemeLocked;
  let item;
  let items;
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(18);
  ({ item, isThemeLocked } = arg0);
  if (cResult[0] !== item.theme) {
    const tmpResult = themes;
    const isThemeDarkResult = tmpResult.isThemeDark(item.theme);
    cResult[0] = item.theme;
    cResult[1] = isThemeDarkResult;
    tmp4 = isThemeDarkResult;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = closure_9(tmp4);
  if (cResult[2] !== isThemeLocked) {
    const tmp8 = isThemeLocked && { opacity: 0.5 };
    cResult[2] = isThemeLocked;
    cResult[3] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp6.themeSelectorGradientBackground) {
    let tmp9;
    let tmp11;
    if (cResult[5] === tmp7) {
      tmp9 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { borderRadius: nativeDefault.radii.sm };
      cResult[7] = obj2;
      tmp11 = obj2;
    } else {
      tmp11 = cResult[7];
    }
    const tmp13 = tmp4 ? closure_10 : closure_11;
    if (cResult[8] === item) {
      let tmp14;
      if (cResult[9] === tmp13) {
        tmp14 = cResult[10];
      }
      if (cResult[11] === isThemeLocked) {
        let tmp18;
        if (cResult[12] === tmp6.lock) {
          tmp18 = cResult[13];
        }
        if (cResult[14] === tmp9) {
          if (cResult[15] === tmp14) {
            let tmp22;
            if (cResult[16] === tmp18) {
              tmp22 = cResult[17];
            }
            return tmp22;
          }
        }
        const obj3 = { style: tmp9, children: items };
        items = [tmp14, tmp18];
        const tmp25 = metroImportDefault(View, obj3);
        cResult[14] = tmp9;
        cResult[15] = tmp14;
        cResult[16] = tmp18;
        cResult[17] = tmp25;
        tmp22 = tmp25;
      }
      let tmp19 = isThemeLocked;
      if (tmp19) {
        const obj4 = { source: AssetRegistryDefault, style: tmp6.lock };
        const Icon = native.Icon;
        tmp19 = metroRequire(Icon, obj4);
      }
      cResult[11] = isThemeLocked;
      cResult[12] = tmp6.lock;
      cResult[13] = tmp19;
      tmp18 = tmp19;
    }
    const obj5 = { componentStyles: tmp11, gradientOverride: item, mix: true, mixColorOverride: tmp13 };
    const tmp17 = metroRequire(ThemedGradientDefault, obj5);
    cResult[8] = item;
    cResult[9] = tmp13;
    cResult[10] = tmp17;
    tmp14 = tmp17;
  }
  const items1 = [tmp6.themeSelectorGradientBackground, tmp7];
  cResult[4] = tmp6.themeSelectorGradientBackground;
  cResult[5] = tmp7;
  cResult[6] = items1;
  tmp9 = items1;
}) : ((arg0) => {
  let isThemeLocked;
  let item;
  let items1;
  let obj5;
  ({ item, isThemeLocked } = arg0);
  const obj = themes;
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp4 = closure_9(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground, ];
  const obj2 = isThemeLocked && { opacity: 0.5 };
  const obj3 = { style: items, children: items1 };
  items[1] = obj2;
  const obj4 = { componentStyles: obj5, gradientOverride: item, mix: true, mixColorOverride: isThemeDarkResult ? closure_10 : closure_11 };
  obj5 = { borderRadius: nativeDefault.radii.sm };
  const tmp9 = ThemedGradientDefault;
  items1 = [metroRequire(tmp9, obj4), ];
  if (isThemeLocked) {
    const obj6 = { source: AssetRegistryDefault, style: tmp4.lock };
    const Icon = native.Icon;
    isThemeLocked = metroRequire(Icon, obj6);
  }
  items1[1] = isThemeLocked;
  return metroImportDefault(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((item) => {
  let obj4;
  let systemTheme;
  let theme;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(14);
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
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === item.theme) {
    let tmp8;
    if (cResult[3] === stateFromStores) {
      tmp8 = cResult[4];
    }
    const tmpResult4 = useToken;
    const token = tmpResult4.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, tmp8);
    const tmpResult5 = useToken;
    const token1 = tmpResult5.useToken(nativeDefault.colors.BORDER_STRONG, tmp8);
    const tmpResult6 = useToken;
    const token2 = tmpResult6.useToken(nativeDefault.colors.ICON_STRONG, tmp8);
    if (cResult[5] === token) {
      let tmp14;
      if (cResult[6] === token1) {
        tmp14 = cResult[7];
      }
      if (cResult[8] === token2) {
        let tmp15;
        if (cResult[9] === item.theme) {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp14) {
          let tmp19;
          if (cResult[12] === tmp15) {
            tmp19 = cResult[13];
          }
          return tmp19;
        }
        const obj2 = { style: tmp14, children: tmp15 };
        const tmp22 = metroRequire(View, obj2);
        cResult[11] = tmp14;
        cResult[12] = tmp15;
        cResult[13] = tmp22;
        tmp19 = tmp22;
      }
      let tmp16 = null;
      if ("system" === item.theme) {
        const obj3 = { style: { alignSelf: "center", justifyContent: "center", flex: 1 }, children: metroRequire(SynchronizeIconNativeDefault, obj4) };
        obj4 = { fill: token2 };
        tmp16 = metroRequire(View, obj3);
      }
      cResult[8] = token2;
      cResult[9] = item.theme;
      cResult[10] = tmp16;
      tmp15 = tmp16;
    }
    size = { width: "100%", height: "100%", backgroundColor: token, borderColor: token1, borderWidth: 1, borderRadius: nativeDefault.radii.sm };
    cResult[5] = token;
    cResult[6] = token1;
    cResult[7] = size;
    tmp14 = size;
  }
  if ("system" === item.theme) {
    theme = ThemeStore.themePreferenceForSystemTheme(stateFromStores);
  } else {
    theme = item.theme;
  }
  cResult[2] = item.theme;
  cResult[3] = stateFromStores;
  cResult[4] = theme;
  tmp8 = theme;
}) : ((item) => {
  let obj4;
  let systemTheme;
  let theme;
  let tmp9Result;
  item = item.item;
  useStateFromStores;
  [][0] = ThemeStore;
  if ("system" === item.theme) {
    theme = ThemeStore.themePreferenceForSystemTheme(tmp4);
  } else {
    theme = item.theme;
  }
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, theme);
  const tmpResult3 = useToken;
  const token1 = tmpResult3.useToken(nativeDefault.colors.BORDER_STRONG, theme);
  const obj2 = { style: size, children: tmp9Result };
  size = { width: "100%", height: "100%", backgroundColor: token, borderColor: token1, borderWidth: 1, borderRadius: nativeDefault.radii.sm };
  const tmpResult4 = useToken;
  const token2 = tmpResult4.useToken(nativeDefault.colors.ICON_STRONG, theme);
  tmp9Result = null;
  if ("system" === item.theme) {
    const obj3 = { style: { alignSelf: "center", justifyContent: "center", flex: 1 }, children: metroRequire(SynchronizeIconNativeDefault, obj4) };
    obj4 = { fill: token2 };
    tmp9Result = metroRequire(View, obj3);
  }
  return metroRequire(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isThemeLocked;
  let item;
  let items;
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(18);
  ({ item, isThemeLocked } = arg0);
  if (cResult[0] !== item.theme) {
    const tmpResult = themes;
    const isThemeDarkResult = tmpResult.isThemeDark(item.theme);
    cResult[0] = item.theme;
    cResult[1] = isThemeDarkResult;
    tmp4 = isThemeDarkResult;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = closure_9(tmp4);
  if (cResult[2] !== isThemeLocked) {
    const tmp8 = isThemeLocked && { opacity: 0.5 };
    cResult[2] = isThemeLocked;
    cResult[3] = tmp8;
    tmp7 = tmp8;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp6.themeSelectorGradientBackground) {
    let tmp9;
    let tmp11;
    if (cResult[5] === tmp7) {
      tmp9 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { borderRadius: nativeDefault.radii.sm };
      cResult[7] = obj2;
      tmp11 = obj2;
    } else {
      tmp11 = cResult[7];
    }
    const tmp13 = tmp4 ? closure_10 : closure_11;
    if (cResult[8] === item) {
      let tmp14;
      if (cResult[9] === tmp13) {
        tmp14 = cResult[10];
      }
      if (cResult[11] === isThemeLocked) {
        let tmp17;
        if (cResult[12] === tmp6.lock) {
          tmp17 = cResult[13];
        }
        if (cResult[14] === tmp9) {
          if (cResult[15] === tmp14) {
            let tmp21;
            if (cResult[16] === tmp17) {
              tmp21 = cResult[17];
            }
            return tmp21;
          }
        }
        const obj3 = { style: tmp9, children: items };
        items = [tmp14, tmp17];
        const tmp24 = metroImportDefault(View, obj3);
        cResult[14] = tmp9;
        cResult[15] = tmp14;
        cResult[16] = tmp17;
        cResult[17] = tmp24;
        tmp21 = tmp24;
      }
      let tmp18 = isThemeLocked;
      if (tmp18) {
        const obj4 = { source: AssetRegistryDefault, style: tmp6.lock };
        const Icon = native.Icon;
        tmp18 = metroRequire(Icon, obj4);
      }
      cResult[11] = isThemeLocked;
      cResult[12] = tmp6.lock;
      cResult[13] = tmp18;
      tmp17 = tmp18;
    }
    const obj5 = { componentStyles: tmp11, mix: true, mixColorOverride: tmp13, customTheme: item };
    const tmp16 = metroRequire(ThemedGradient.CustomThemedGradient, obj5);
    cResult[8] = item;
    cResult[9] = tmp13;
    cResult[10] = tmp16;
    tmp14 = tmp16;
  }
  const items1 = [tmp6.themeSelectorGradientBackground, tmp7];
  cResult[4] = tmp6.themeSelectorGradientBackground;
  cResult[5] = tmp7;
  cResult[6] = items1;
  tmp9 = items1;
}) : ((arg0) => {
  let isThemeLocked;
  let item;
  let items1;
  let obj5;
  ({ item, isThemeLocked } = arg0);
  const obj = themes;
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp4 = closure_9(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground, ];
  const obj2 = isThemeLocked && { opacity: 0.5 };
  const obj3 = { style: items, children: items1 };
  items[1] = obj2;
  const obj4 = { componentStyles: obj5, mix: true, mixColorOverride: isThemeDarkResult ? closure_10 : closure_11, customTheme: item };
  obj5 = { borderRadius: nativeDefault.radii.sm };
  const CustomThemedGradient = ThemedGradient.CustomThemedGradient;
  items1 = [metroRequire(CustomThemedGradient, obj4), ];
  if (isThemeLocked) {
    const obj6 = { source: AssetRegistryDefault, style: tmp4.lock };
    const Icon = native.Icon;
    isThemeLocked = metroRequire(Icon, obj6);
  }
  items1[1] = isThemeLocked;
  return metroImportDefault(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityRole;
  let accessibilityState;
  let isNew;
  let isPreview;
  let isSelected;
  let items;
  let onPress;
  let rippleColor;
  let themePreset;
  let themeSelectorItemContainer;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(27);
  ({ themePreset, isPreview, isSelected, onPress, isNew } = arg0);
  const tmp4 = closure_8();
  if (isPreview) {
    isPreview = themePreset.type !== ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  if (cResult[0] === isPreview) {
    let tmp5;
    if (cResult[1] === themePreset) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === isSelected) {
      let tmp13;
      let tmp15;
      let tmp17;
      if (cResult[4] === isPreview) {
        tmp13 = cResult[5];
      }
      const tmpResult = react_native2;
      const radioA11yNative = tmpResult.useRadioA11yNative(tmp13);
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      ({ themeSelectorItemContainer, rippleColor } = tmp4);
      if (cResult[6] !== themePreset) {
        const name = themePreset.getName();
        cResult[6] = themePreset;
        cResult[7] = name;
        tmp15 = name;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] !== isPreview) {
        let stringResult;
        if (isPreview) {
          const intl = intl2.intl;
          stringResult = intl.string(intl2.t.VqGKm0);
        }
        cResult[8] = isPreview;
        cResult[9] = stringResult;
        tmp17 = stringResult;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] === isNew) {
        if (cResult[11] === isSelected) {
          let tmp19;
          if (cResult[12] === tmp4.newRedCircle) {
            tmp19 = cResult[13];
          }
          if (cResult[14] === tmp5) {
            if (cResult[15] === tmp4.themeSelectorItem) {
              let tmp23;
              if (cResult[16] === tmp19) {
                tmp23 = cResult[17];
              }
              if (cResult[18] === accessibilityRole) {
                if (cResult[19] === accessibilityState) {
                  if (cResult[20] === onPress) {
                    if (cResult[21] === tmp4.rippleColor) {
                      if (cResult[22] === tmp4.themeSelectorItemContainer) {
                        if (cResult[23] === tmp15) {
                          if (cResult[24] === tmp17) {
                            let tmp27;
                            if (cResult[25] === tmp23) {
                              tmp27 = cResult[26];
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
              const tmp29 = metroRequire(Pressables.PressableOpacity, obj2);
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
          const obj3 = { style: tmp4.themeSelectorItem, children: items };
          items = [tmp5, tmp19];
          const tmp26 = metroImportDefault(View, obj3);
          cResult[14] = tmp5;
          cResult[15] = tmp4.themeSelectorItem;
          cResult[16] = tmp19;
          cResult[17] = tmp26;
          tmp23 = tmp26;
        }
      }
      let tmp20 = isNew && !isSelected;
      if (tmp20) {
        const obj4 = { style: tmp4.newRedCircle };
        tmp20 = metroRequire(View, obj4);
      }
      cResult[10] = isNew;
      cResult[11] = isSelected;
      cResult[12] = tmp4.newRedCircle;
      cResult[13] = tmp20;
      tmp19 = tmp20;
    }
    const obj5 = { selected: isSelected, disabled: isPreview };
    cResult[3] = isSelected;
    cResult[4] = isPreview;
    cResult[5] = obj5;
    tmp13 = obj5;
  }
  if (themePreset.type === ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME) {
    const obj6 = { item: themePreset };
    tmp8 = metroRequire(closure_13, obj6);
  } else if (themePreset.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const obj7 = { item: themePreset, isThemeLocked: isPreview };
    tmp8 = metroRequire(closure_14, obj7);
  } else {
    const obj8 = { isThemeLocked: isPreview, item: themePreset };
    tmp8 = metroRequire(closure_12, obj8);
  }
  cResult[0] = isPreview;
  cResult[1] = themePreset;
  cResult[2] = tmp8;
  tmp5 = tmp8;
}) : ((onPress) => {
  let accessibilityRole;
  let accessibilityState;
  let isNew;
  let isPreview;
  let isSelected;
  let items;
  let obj5;
  let stringResult;
  let themePreset;
  let tmp8;
  let tmp9;
  ({ themePreset, isPreview, isSelected, isNew } = onPress);
  onPress = onPress.onPress;
  const tmp = closure_8();
  if (isPreview) {
    isPreview = themePreset.type !== ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  if (themePreset.type === ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME) {
    const obj2 = { item: themePreset };
    tmp8 = metroRequire(closure_13, obj2);
    tmp9 = metroRequire;
  } else if (themePreset.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const obj3 = { item: themePreset, isThemeLocked: isPreview };
    tmp8 = metroRequire(closure_14, obj3);
    tmp9 = metroRequire;
  } else {
    const obj = { isThemeLocked: isPreview, item: themePreset };
    tmp8 = metroRequire(closure_12, obj);
    tmp9 = metroRequire;
  }
  const tmp4Result = react_native2;
  const radioA11yNative = tmp4Result.useRadioA11yNative({ selected: isSelected, disabled: isPreview });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj4 = { style: tmp.themeSelectorItemContainer, androidRippleConfig: tmp.rippleColor, onPress, accessibilityRole, accessibilityLabel: themePreset.getName(), accessibilityState, accessibilityHint: stringResult, children: metroImportDefault(View, obj5) };
  const PressableOpacity = Pressables.PressableOpacity;
  stringResult = undefined;
  if (isPreview) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t.VqGKm0);
  }
  obj5 = { style: tmp.themeSelectorItem, children: items };
  items = [tmp8, ];
  if (isNew) {
    isNew = !isSelected;
  }
  if (isNew) {
    const obj6 = { style: tmp.newRedCircle };
    isNew = tmp9(View, obj6);
  }
  items[1] = isNew;
  return tmp9(PressableOpacity, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeSelectorItem.tsx");

export default tmp8;