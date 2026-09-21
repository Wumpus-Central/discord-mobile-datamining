// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceThemeSelectorItem.tsx
import useStateFromStores from "../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import ClientThemesTypes from "../../../../client_themes/ClientThemesTypes.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import themes from "../../../../../design/utils/shared/themes.tsx";
import useA11yRolesNative from "../../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import utils_ColorDefault from "../../../../../utils/Color.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import ThemedGradient from "../../../../client_themes/native/ThemedGradient.tsx";
import _modDef15546 from "../../../../../../_runtime/metro/15546__.js";
import SynchronizeIconNativeDefault from "../../../../client_themes/images/native/SynchronizeIconNative.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../ThemeStore.tsx";
import SettingsAppearanceConstants from "../SettingsAppearanceConstants.tsx";

const ThemedGradientDefault = ThemedGradient;

require = fn;
function GradientThemeBackground(arg0) {
  ({ item, isThemeLocked } = arg0);
  const isThemeDarkResult = themes.isThemeDark(item.theme);
  const tmp4 = closure_9(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground];
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
  const items1 = [timestampProducer(ThemedGradientDefault, obj4)];
  if (isThemeLocked) {
    const obj6 = { source: _modDef15546, style: tmp4.lock };
    isThemeLocked = timestampProducer(native.Icon, obj6);
  }
  items1[1] = isThemeLocked;
  obj3.children = items1;
  return React5(View, obj3);
}
function DefaultThemeBackground(item) {
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
  const size = {
    width: "100%",
    height: "100%",
    backgroundColor: token,
    borderColor: token1,
    borderWidth: 1,
    borderRadius: null,
  };
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
}
function CustomThemeBackground(arg0) {
  ({ item, isThemeLocked } = arg0);
  const isThemeDarkResult = themes.isThemeDark(item.theme);
  const tmp4 = closure_9(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground];
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
  const items1 = [timestampProducer(ThemedGradient.CustomThemedGradient, obj4)];
  if (isThemeLocked) {
    const obj6 = { source: _modDef15546, style: tmp4.lock };
    isThemeLocked = timestampProducer(native.Icon, obj6);
  }
  items1[1] = isThemeLocked;
  obj3.children = items1;
  return React5(View, obj3);
}
const View = fn(17).View;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4756);
let obj2 = {
  rippleColor: { color: nativeDefault.unsafe_rawColors.TRANSPARENT },
  themeSelectorItemContainer: {
    width: SettingsAppearanceConstants.THEME_ITEM_WIDTH,
    height: SettingsAppearanceConstants.THEME_ITEM_HEIGHT,
  },
  themeSelectorItem: null,
  newRedCircle: null,
};
let obj3 = { color: nativeDefault.unsafe_rawColors.TRANSPARENT };
obj2.themeSelectorItem = {
  borderRadius: nativeDefault.radii.sm,
  padding: SettingsAppearanceConstants.THEME_ITEM_PADDING,
};
let size = {
  backgroundColor: nativeDefault.unsafe_rawColors.RED_430,
  width: 12,
  height: 12,
  borderRadius: nativeDefault.radii.sm,
  position: "absolute",
  top: 0,
  right: 0,
};
obj2.newRedCircle = size;
let closure_8 = createStyles.createStyles(obj2);
createStyles = fn(4756);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = {
    themeSelectorGradientBackground: { justifyContent: "center", width: "100%", height: "100%" },
    lock: null,
  };
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
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceThemeSelectorItem.tsx",
);

export default function ThemeSelectorItem(onPress) {
  ({ themePreset, isPreview, isSelected, isNew } = onPress);
  const tmp = closure_8();
  if (isPreview) {
    isPreview = themePreset.type !== ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME;
  }
  if (themePreset.type === ClientThemesTypes.ClientThemeType.STANDARD_BACKGROUND_THEME) {
    const obj2 = { item: themePreset };
    let tmp8 = timestampProducer(DefaultThemeBackground, obj2);
    let tmp9 = timestampProducer;
  } else if (themePreset.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    const obj3 = { item: themePreset, isThemeLocked: isPreview };
    tmp8 = timestampProducer(CustomThemeBackground, obj3);
    tmp9 = timestampProducer;
  } else {
    const obj = { isThemeLocked: isPreview, item: themePreset };
    tmp8 = timestampProducer(GradientThemeBackground, obj);
    tmp9 = timestampProducer;
  }
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: isSelected, disabled: isPreview });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj4 = {
    style: tmp.themeSelectorItemContainer,
    androidRippleConfig: tmp.rippleColor,
    onPress: onPress.onPress,
    accessibilityRole,
    accessibilityLabel: themePreset.getName(),
    accessibilityState,
    accessibilityHint: null,
    children: null,
  };
  let stringResult;
  if (isPreview) {
    const intl = util.intl;
    stringResult = intl.string(util.t.VqGKm0);
  }
  obj4.accessibilityHint = stringResult;
  const obj5 = { style: tmp.themeSelectorItem, children: null };
  const items = [tmp8];
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
}
