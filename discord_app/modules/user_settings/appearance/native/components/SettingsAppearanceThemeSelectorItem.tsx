// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceThemeSelectorItem.tsx
import "getSystemLocale";
import { View } from "useCheckboxA11yNative";
import handleThemeChange from "handleThemeChange";
import importDefaultResult from "THEME_ITEM_WIDTH";
import { ThemeTypes } from "sum";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
function GradientThemeBackground(arg0) {
  let isThemeLocked;
  let item;
  ({ item, isThemeLocked } = arg0);
  let obj = require(3995) /* isThemeLight */;
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp4 = callback2(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground, ];
  obj = isThemeLocked;
  if (isThemeLocked) {
    obj = { opacity: 0.5 };
  }
  obj = { style: items, children: null };
  items[1] = obj;
  const obj1 = { componentStyles: null, gradientOverride: null, mix: true, mixColorOverride: null };
  const obj2 = { borderRadius: null };
  obj2[0] = importDefault(712).radii.sm;
  obj1[0] = obj2;
  obj1[1] = item;
  obj1[3] = isThemeDarkResult ? closure_10 : closure_11;
  const items1 = [closure_6(importDefault(4814), obj1), ];
  if (isThemeLocked) {
    const obj3 = { source: null, style: null };
    obj3[0] = importDefault(14410);
    obj3[1] = tmp4.lock;
    isThemeLocked = tmp7(require(1297) /* Button */.Icon, obj3);
  }
  items1[1] = isThemeLocked;
  obj[1] = items1;
  return closure_7(View, obj);
}
function DefaultThemeBackground(item) {
  item = item.item;
  require(647) /* defaultAreStatesEqual */;
  let obj = handleThemeChange;
  [][0] = handleThemeChange;
  if ("system" === item.theme) {
    let theme = obj.themePreferenceForSystemTheme(tmp4);
  } else {
    theme = item.theme;
  }
  let tmpResult = tmp(3989);
  const token = tmpResult.useToken(importDefault(712).colors.BACKGROUND_BASE_LOWER, theme);
  tmpResult = tmp(3989);
  const token1 = tmpResult.useToken(importDefault(712).colors.BORDER_STRONG, theme);
  obj = { style: null, children: null };
  obj = { width: "100%", height: "100%", backgroundColor: token, borderColor: token1, borderWidth: 1, borderRadius: null };
  const token2 = require(3989) /* map */.useToken(importDefault(712).colors.ICON_STRONG, theme);
  obj[5] = importDefault(712).radii.sm;
  obj[0] = obj;
  let tmp9Result = null;
  if ("system" === item.theme) {
    const obj1 = { style: null, children: null };
    obj1[0] = { alignSelf: "center", justifyContent: "center", flex: 1 };
    const obj2 = { fill: null };
    obj2[0] = token2;
    obj1[1] = tmp9(importDefault(14411), obj2);
    tmp9Result = tmp9(tmp10, obj1);
  }
  obj[1] = tmp9Result;
  return closure_6(View, obj);
}
function CustomThemeBackground(arg0) {
  let isThemeLocked;
  let item;
  ({ item, isThemeLocked } = arg0);
  let obj = require(3995) /* isThemeLight */;
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp4 = callback2(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground, ];
  obj = isThemeLocked;
  if (isThemeLocked) {
    obj = { opacity: 0.5 };
  }
  obj = { style: items, children: null };
  items[1] = obj;
  const obj1 = { componentStyles: null, mix: true, mixColorOverride: null, customTheme: null };
  const obj2 = { borderRadius: null };
  obj2[0] = importDefault(712).radii.sm;
  obj1[0] = obj2;
  obj1[2] = isThemeDarkResult ? closure_10 : closure_11;
  obj1[3] = item;
  const items1 = [closure_6(require(4814) /* getMixedGradientColor */.CustomThemedGradient, obj1), ];
  if (isThemeLocked) {
    const obj3 = { source: null, style: null };
    obj3[0] = importDefault(14410);
    obj3[1] = tmp4.lock;
    isThemeLocked = tmp7(tmp(1297).Icon, obj3);
  }
  items1[1] = isThemeLocked;
  obj[1] = items1;
  return closure_7(View, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { rippleColor: null, themeSelectorItemContainer: null, themeSelectorItem: null, newRedCircle: null };
createCacheKey = { color: require("Themes").unsafe_rawColors.TRANSPARENT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: importDefaultResult.THEME_ITEM_WIDTH, height: importDefaultResult.THEME_ITEM_HEIGHT };
createCacheKey[2] = { borderRadius: require("Themes").radii.sm, padding: importDefaultResult.THEME_ITEM_PADDING };
let obj1 = { borderRadius: require("Themes").radii.sm, padding: importDefaultResult.THEME_ITEM_PADDING };
createCacheKey[3] = { backgroundColor: require("Themes").unsafe_rawColors.RED_430, width: 12, height: 12, borderRadius: require("Themes").radii.sm, position: "absolute", top: 0, right: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_9 = createCacheKey.createStyles((arg0) => {
  const obj = { themeSelectorGradientBackground: { justifyContent: "center", width: "100%", height: "100%" }, lock: null };
  const internal = importDefault(712).internal;
  const resolveSemanticColor = internal.resolveSemanticColor;
  if (arg0) {
    let semanticColor = resolveSemanticColor(tmp3.DARKER, tmp(712).colors.INTERACTIVE_TEXT_DEFAULT);
  } else {
    semanticColor = resolveSemanticColor(tmp3.LIGHT, tmp(712).colors.INTERACTIVE_TEXT_DEFAULT);
  }
  obj[1] = { position: "absolute", alignSelf: "center", opacity: 0.6, tintColor: semanticColor };
  return obj;
});
let obj2 = { backgroundColor: require("Themes").unsafe_rawColors.RED_430, width: 12, height: 12, borderRadius: require("Themes").radii.sm, position: "absolute", top: 0, right: 0 };
let c10 = new require("hslToRgb")(0, 0, 0, 0.2);
const tmp5 = new require("hslToRgb")(0, 0, 0, 0.2);
const unpackModuleId = new require("hslToRgb")(255, 255, 255, 0.5);
const tmp6 = new require("hslToRgb")(255, 255, 255, 0.5);
const result = require("handleThemeChange").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeSelectorItem.tsx");

export default function ThemeSelectorItem(onPress) {
  let accessibilityRole;
  let accessibilityState;
  let isNew;
  let isPreview;
  let isSelected;
  let themePreset;
  ({ themePreset, isPreview, isSelected, isNew } = onPress);
  const tmp = createCacheKey();
  if (isPreview) {
    isPreview = themePreset.type !== require(4099) /* ClientThemeType */.ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  if (themePreset.type === require(4099) /* ClientThemeType */.ClientThemeType.STANDARD_BACKGROUND_THEME) {
    let obj = { item: null };
    obj[0] = themePreset;
    let tmp8 = callback(DefaultThemeBackground, obj);
    let tmp9 = callback;
  } else if (themePreset.type === tmp4(4099).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    obj = { item: null, isThemeLocked: null };
    obj[0] = themePreset;
    obj[1] = isPreview;
    tmp8 = callback(CustomThemeBackground, obj);
    tmp9 = callback;
  } else {
    obj = { isThemeLocked: null, item: null };
    obj[0] = isPreview;
    obj[1] = themePreset;
    tmp8 = callback(GradientThemeBackground, obj);
    tmp9 = callback;
  }
  const radioA11yNative = require(4003) /* useCheckboxA11yNative */.useRadioA11yNative({ selected: isSelected, disabled: isPreview });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj1 = { style: tmp.themeSelectorItemContainer, androidRippleConfig: tmp.rippleColor, onPress: onPress.onPress, accessibilityRole, accessibilityLabel: null, accessibilityState: null, accessibilityHint: null, children: null };
  obj1[4] = themePreset.getName();
  obj1[5] = accessibilityState;
  let stringResult;
  if (isPreview) {
    const intl = tmp4(1236).intl;
    stringResult = intl.string(tmp4(1236).t.VqGKm0);
  }
  obj1[6] = stringResult;
  const obj2 = { style: tmp.themeSelectorItem, children: null };
  const items = [tmp8, ];
  if (isNew) {
    isNew = !isSelected;
  }
  if (isNew) {
    const obj3 = { style: null };
    obj3[0] = tmp.newRedCircle;
    isNew = tmp9(tmp17, obj3);
  }
  items[1] = isNew;
  obj2[1] = items;
  obj1[7] = closure_7(View, obj2);
  return tmp9(require(4812) /* PressableBase */.PressableOpacity, obj1);
};