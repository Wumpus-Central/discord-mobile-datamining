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
import _modDef15274 from "../../../../../../_runtime/metro/15274__.js";
import SynchronizeIconNativeDefault from "../../../../client_themes/images/native/SynchronizeIconNative.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../ThemeStore.tsx";
import SettingsAppearanceConstants from "../SettingsAppearanceConstants.tsx";

const ThemedGradientDefault = ThemedGradient;

require = fn;
function GradientThemeBackground(arg0) {
  ({ item, isThemeLocked } = arg0);
  let obj = themes;
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp4 = closure_9(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground];
  obj = isThemeLocked;
  if (isThemeLocked) {
    obj = { opacity: 0.5 };
  }
  obj = { style: items, children: null };
  items[1] = obj;
  const obj1 = { componentStyles: null, gradientOverride: null, mix: true, mixColorOverride: null };
  const obj2 = { borderRadius: nativeDefault.radii.sm };
  obj1.componentStyles = obj2;
  obj1.gradientOverride = item;
  obj1.mixColorOverride = isThemeDarkResult ? closure_10 : closure_11;
  const items1 = [timestampProducer(ThemedGradientDefault, obj1)];
  if (isThemeLocked) {
    const obj3 = { source: _modDef15274, style: tmp4.lock };
    isThemeLocked = timestampProducer(native.Icon, obj3);
  }
  items1[1] = isThemeLocked;
  obj.children = items1;
  return React5(View, obj);
}
function DefaultThemeBackground(item) {
  item = item.item;
  useStateFromStores;
  let obj = ThemeStore;
  [][0] = ThemeStore;
  if ("system" === item.theme) {
    let theme = obj.themePreferenceForSystemTheme(tmp4);
  } else {
    theme = item.theme;
  }
  let tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, theme);
  tmpResult = useToken;
  const token1 = tmpResult.useToken(nativeDefault.colors.BORDER_STRONG, theme);
  obj = { style: null, children: null };
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
  obj.style = size;
  let tmp9Result = null;
  if ("system" === item.theme) {
    obj = { style: { alignSelf: "center", justifyContent: "center", flex: 1 }, children: null };
    const obj1 = { fill: token2 };
    obj.children = timestampProducer(SynchronizeIconNativeDefault, obj1);
    tmp9Result = timestampProducer(View, obj);
  }
  obj.children = tmp9Result;
  return timestampProducer(View, obj);
}
function CustomThemeBackground(arg0) {
  ({ item, isThemeLocked } = arg0);
  let obj = themes;
  const isThemeDarkResult = obj.isThemeDark(item.theme);
  const tmp4 = closure_9(isThemeDarkResult);
  const items = [tmp4.themeSelectorGradientBackground];
  obj = isThemeLocked;
  if (isThemeLocked) {
    obj = { opacity: 0.5 };
  }
  obj = { style: items, children: null };
  items[1] = obj;
  const obj1 = {
    componentStyles: { borderRadius: nativeDefault.radii.sm },
    mix: true,
    mixColorOverride: isThemeDarkResult ? closure_10 : closure_11,
    customTheme: item,
  };
  const items1 = [timestampProducer(ThemedGradient.CustomThemedGradient, obj1)];
  if (isThemeLocked) {
    const obj3 = { source: _modDef15274, style: tmp4.lock };
    isThemeLocked = timestampProducer(native.Icon, obj3);
  }
  items1[1] = isThemeLocked;
  obj.children = items1;
  return React5(View, obj);
}
const View = fn(17).View;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { rippleColor: null, themeSelectorItemContainer: null, themeSelectorItem: null, newRedCircle: null };
createStyles = { color: nativeDefault.unsafe_rawColors.TRANSPARENT };
createStyles.rippleColor = createStyles;
createStyles.themeSelectorItemContainer = {
  width: SettingsAppearanceConstants.THEME_ITEM_WIDTH,
  height: SettingsAppearanceConstants.THEME_ITEM_HEIGHT,
};
createStyles.themeSelectorItem = {
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
createStyles.newRedCircle = size;
let closure_8 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = {
    themeSelectorGradientBackground: { justifyContent: "center", width: "100%", height: "100%" },
    lock: null,
  };
  const internal = nativeDefault.internal;
  const resolveSemanticColor = internal.resolveSemanticColor;
  if (arg0) {
    let semanticColor = resolveSemanticColor(ThemeTypes.DARKER, nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  } else {
    semanticColor = resolveSemanticColor(ThemeTypes.LIGHT, nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT);
  }
  obj.lock = { position: "absolute", alignSelf: "center", opacity: 0.6, tintColor: semanticColor };
  return obj;
});
let obj1 = { borderRadius: nativeDefault.radii.sm, padding: SettingsAppearanceConstants.THEME_ITEM_PADDING };
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
    let obj = { item: themePreset };
    let tmp8 = timestampProducer(DefaultThemeBackground, obj);
    let tmp9 = timestampProducer;
  } else if (themePreset.type === ClientThemesTypes.ClientThemeType.CUSTOM_BACKGROUND_GRADIENT) {
    obj = { item: themePreset, isThemeLocked: isPreview };
    tmp8 = timestampProducer(CustomThemeBackground, obj);
    tmp9 = timestampProducer;
  } else {
    obj = { isThemeLocked: isPreview, item: themePreset };
    tmp8 = timestampProducer(GradientThemeBackground, obj);
    tmp9 = timestampProducer;
  }
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: isSelected, disabled: isPreview });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj1 = {
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
  obj1.accessibilityHint = stringResult;
  const obj2 = { style: tmp.themeSelectorItem, children: null };
  const items = [tmp8];
  if (isNew) {
    isNew = !isSelected;
  }
  if (isNew) {
    const obj3 = { style: tmp.newRedCircle };
    isNew = tmp9(View, obj3);
  }
  items[1] = isNew;
  obj2.children = items;
  obj1.children = React5(View, obj2);
  return tmp9(Pressables.PressableOpacity, obj1);
}
