// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceThemeSelectorItem.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import defaultAreStatesEqual from "../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../../design/void/native.tsx";
import ClientThemeType from "../../../../client_themes/ClientThemesTypes.tsx";
import isThemeLight from "../../../../../design/utils/shared/themes.tsx";
import map from "../../../../../design/tokens/native/useToken.tsx";
import useCheckboxA11yNative from "../../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import hslToRgbDefault from "../../../../../utils/Color.tsx";
import PressableBase from "../../../../../design/void/Pressables/native/Pressables.tsx";
import getMixedGradientColor from "../../../../client_themes/native/ThemedGradient.tsx";
import getMixedGradientColorDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import registerAssetDefault from "../../../../../../_runtime/14818_registerAsset.js";
import SynchronizeIconDefault from "../../../../client_themes/images/native/SynchronizeIconNative.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../ThemeStore.tsx";
import importDefaultResult from "../SettingsAppearanceConstants.tsx";
import { ThemeTypes } from "../../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function GradientThemeBackground(arg0) {
  ({ item, isThemeLocked } = arg0);
  let obj = isThemeLight;
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp4 = callback3(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground, ];
  obj = isThemeLocked;
  if (isThemeLocked) {
    obj = { opacity: 0.5 };
  }
  obj = { style: items, children: null };
  items[1] = obj;
  obj1 = { componentStyles: null, gradientOverride: null, mix: true, mixColorOverride: null };
  const obj2 = { borderRadius: ThemesDefault.radii.sm };
  obj1[0] = obj2;
  obj1[1] = item;
  obj1[3] = isThemeDarkResult ? closure_10 : closure_11;
  const items1 = [closure_6(getMixedGradientColorDefault, obj1), ];
  if (isThemeLocked) {
    const obj3 = { source: null, style: null };
    obj3[0] = registerAssetDefault;
    obj3[1] = tmp4.lock;
    isThemeLocked = tmp7(Button.Icon, obj3);
  }
  items1[1] = isThemeLocked;
  obj[1] = items1;
  return closure_7(View, obj);
}
function DefaultThemeBackground(item) {
  item = item.item;
  defaultAreStatesEqual;
  let obj = closure_4;
  [][0] = closure_4;
  if ("system" === item.theme) {
    let theme = obj.themePreferenceForSystemTheme(tmp4);
  } else {
    theme = item.theme;
  }
  let tmpResult = tmp(4165);
  const token = tmpResult.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOWER, theme);
  tmpResult = tmp(4165);
  const token1 = tmpResult.useToken(ThemesDefault.colors.BORDER_STRONG, theme);
  obj = { style: null, children: null };
  obj = { width: "100%", height: "100%", backgroundColor: token, borderColor: token1, borderWidth: 1, borderRadius: null };
  const token2 = map.useToken(ThemesDefault.colors.ICON_STRONG, theme);
  obj[5] = ThemesDefault.radii.sm;
  obj[0] = obj;
  let tmp9Result = null;
  if ("system" === item.theme) {
    obj1 = { style: null, children: null };
    obj1[0] = { alignSelf: "center", justifyContent: "center", flex: 1 };
    const obj2 = { fill: null };
    obj2[0] = token2;
    obj1[1] = tmp9(SynchronizeIconDefault, obj2);
    tmp9Result = tmp9(tmp10, obj1);
  }
  obj[1] = tmp9Result;
  return closure_6(View, obj);
}
function CustomThemeBackground(arg0) {
  ({ item, isThemeLocked } = arg0);
  let obj = isThemeLight;
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp4 = callback3(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground, ];
  obj = isThemeLocked;
  if (isThemeLocked) {
    obj = { opacity: 0.5 };
  }
  obj = { style: items, children: null };
  items[1] = obj;
  obj1 = { componentStyles: { borderRadius: ThemesDefault.radii.sm }, mix: true, mixColorOverride: isThemeDarkResult ? closure_10 : closure_11, customTheme: item };
  const items1 = [closure_6(getMixedGradientColor.CustomThemedGradient, obj1), ];
  if (isThemeLocked) {
    const obj3 = { source: null, style: null };
    obj3[0] = registerAssetDefault;
    obj3[1] = tmp4.lock;
    isThemeLocked = tmp7(tmp(1297).Icon, obj3);
  }
  items1[1] = isThemeLocked;
  obj[1] = items1;
  return closure_7(View, obj);
}
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { rippleColor: null, themeSelectorItemContainer: null, themeSelectorItem: null, newRedCircle: null };
createCacheKey = { color: ThemesDefault.unsafe_rawColors.TRANSPARENT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: importDefaultResult.THEME_ITEM_WIDTH, height: importDefaultResult.THEME_ITEM_HEIGHT };
createCacheKey[2] = { borderRadius: ThemesDefault.radii.sm, padding: importDefaultResult.THEME_ITEM_PADDING };
let obj1 = { borderRadius: ThemesDefault.radii.sm, padding: importDefaultResult.THEME_ITEM_PADDING };
createCacheKey[3] = { backgroundColor: ThemesDefault.unsafe_rawColors.RED_430, width: 12, height: 12, borderRadius: ThemesDefault.radii.sm, position: "absolute", top: 0, right: 0 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let closure_9 = createCacheKey.createStyles((arg0) => {
  const obj = { themeSelectorGradientBackground: { justifyContent: "center", width: "100%", height: "100%" }, lock: null };
  const internal = ThemesDefault.internal;
  const resolveSemanticColor = internal.resolveSemanticColor;
  if (arg0) {
    let semanticColor = resolveSemanticColor(tmp3.DARKER, tmp(712).colors.INTERACTIVE_TEXT_DEFAULT);
  } else {
    semanticColor = resolveSemanticColor(tmp3.LIGHT, tmp(712).colors.INTERACTIVE_TEXT_DEFAULT);
  }
  obj[1] = { position: "absolute", alignSelf: "center", opacity: 0.6, tintColor: semanticColor };
  return obj;
});
let obj2 = { backgroundColor: ThemesDefault.unsafe_rawColors.RED_430, width: 12, height: 12, borderRadius: ThemesDefault.radii.sm, position: "absolute", top: 0, right: 0 };
let closure_10 = new hslToRgbDefault(0, 0, 0, 0.2);
const tmp5 = new hslToRgbDefault(0, 0, 0, 0.2);
let closure_11 = new hslToRgbDefault(255, 255, 255, 0.5);
const tmp6 = new hslToRgbDefault(255, 255, 255, 0.5);
const result = require("set").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeSelectorItem.tsx");

export default function ThemeSelectorItem(onPress) {
  ({ themePreset, isPreview, isSelected, isNew } = onPress);
  const tmp = callback2();
  if (isPreview) {
    isPreview = themePreset.type !== ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  if (themePreset.type === ClientThemeType.ClientThemeType.STANDARD_BACKGROUND_THEME) {
    let obj = { item: null };
    obj[0] = themePreset;
    let tmp8 = callback(DefaultThemeBackground, obj);
    let tmp9 = callback;
  } else if (themePreset.type === tmp4(1349).ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
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
  const radioA11yNative = useCheckboxA11yNative.useRadioA11yNative({ selected: isSelected, disabled: isPreview });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj1 = { style: tmp.themeSelectorItemContainer, androidRippleConfig: tmp.rippleColor, onPress: onPress.onPress, accessibilityRole, accessibilityLabel: themePreset.getName(), accessibilityState, accessibilityHint: null, children: null };
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
  return tmp9(PressableBase.PressableOpacity, obj1);
};