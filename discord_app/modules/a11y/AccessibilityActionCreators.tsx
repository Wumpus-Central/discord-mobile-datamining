// discord_app/modules/a11y/AccessibilityActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import UserSettingsActionCreatorsDefault from "../../actions/UserSettingsActionCreators.tsx";
import AccessibilityStore from "AccessibilityStore.tsx";

const AnalyticEvents = fn(1074).AnalyticEvents;
const StickerAnimationSettings = fn(1938).StickerAnimationSettings;
const constants = fn(1084).SettingsOverrideReasonKeys;
const size = fn(2);
let result = size.fileFinishedImporting("modules/a11y/AccessibilityActionCreators.tsx");

export const setFontSize = function setFontSize(fontSize) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize });
};
export const setMessageGroupSpacing = function setMessageGroupSpacing() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = null;
  }
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING", messageGroupSpacing: tmp });
};
export const setZoom = function setZoom(zoom) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_ZOOM", zoom });
};
export const resetToDefault = function resetToDefault() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_RESET_TO_DEFAULT" });
};
export const enableKeyboardMode = function enableKeyboardMode() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" });
  AnalyticsUtilsDefault.track(AnalyticEvents.KEYBOARD_MODE_TOGGLED, { enabled: true });
};
export const disableKeyboardMode = function disableKeyboardMode() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE" });
  AnalyticsUtilsDefault.track(AnalyticEvents.KEYBOARD_MODE_TOGGLED, { enabled: false });
};
export const toggleDesaturateUserColors = function toggleDesaturateUserColors() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE" });
};
export const toggleColorblindMode = function toggleColorblindMode() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_COLORBLIND_TOGGLE" });
};
export const forcedColorsModalSeen = function forcedColorsModalSeen() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN" });
};
export const keyboardNavigationExplainerModalSeen = function keyboardNavigationExplainerModalSeen() {
  DispatcherDefault.dispatch({ type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN" });
};
export const systemPrefersReducedMotionChanged = function systemPrefersReducedMotionChanged(reduce) {
  DispatcherDefault.dispatch({
    type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED",
    systemPrefersReducedMotion: reduce,
  });
};
export const systemPrefersCrossfadesChanged = function systemPrefersCrossfadesChanged(systemPrefersCrossfades) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED", systemPrefersCrossfades });
};
export const setLowContrastMode = function setLowContrastMode(lowContrastMode) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_LOW_CONTRAST_TOGGLE", lowContrastMode });
};
export const setSaturation = function setSaturation(saturation) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_SATURATION", saturation });
};
export const setPrefersReducedMotion = function setPrefersReducedMotion(reduce) {
  let useReducedMotion = AccessibilityStore.useReducedMotion;
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: reduce });
  const useReducedMotion2 = AccessibilityStore.useReducedMotion;
  if (!useReducedMotion) {
    if (useReducedMotion2) {
      const obj3 = { gifAutoPlay: null, animateEmoji: null, animateStickers: null };
      const obj4 = { value: false, reasonKey: constants.REDUCED_MOTION };
      obj3.gifAutoPlay = obj4;
      const obj5 = { value: false, reasonKey: constants.REDUCED_MOTION };
      obj3.animateEmoji = obj5;
      const obj6 = {
        value: StickerAnimationSettings.ANIMATE_ON_INTERACTION,
        reasonKey: constants.REDUCED_MOTION_STICKERS,
      };
      obj3.animateStickers = obj6;
      const result = UserSettingsActionCreatorsDefault.applySettingsOverride(obj3);
      const tmpResult = UserSettingsActionCreatorsDefault;
    }
  }
  if (useReducedMotion) {
    useReducedMotion = !useReducedMotion2;
  }
  if (useReducedMotion) {
    const result1 = UserSettingsActionCreatorsDefault.clearSettingsOverride(
      "gifAutoPlay",
      "animateEmoji",
      "animateStickers",
    );
    const tmpResult2 = UserSettingsActionCreatorsDefault;
  }
  const obj2 = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: reduce };
};
export const setSyncForcedColors = function setSyncForcedColors(syncForcedColors) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS", syncForcedColors });
};
export const systemColorPreferencesChanged = function systemColorPreferencesChanged(systemForcedColors) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED", systemForcedColors });
};
export const systemPrefersContrastChanged = function systemPrefersContrastChanged(systemPrefersContrast) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED", systemPrefersContrast });
};
export const setAlwaysShowLinkDecorations = function setAlwaysShowLinkDecorations(alwaysShowLinkDecorations) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS", alwaysShowLinkDecorations });
};
export const setEnableCustomCursor = function setEnableCustomCursor(enableCustomCursor) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR", enableCustomCursor });
};
export const setRoleStyle = function setRoleStyle(roleStyle) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle });
  const obj2 = { type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle };
  AnalyticsUtilsDefault.track(AnalyticEvents.ROLE_STYLE_SETTING_UPDATED, { role_style: roleStyle });
};
export const setOfficialMessageStyle = function setOfficialMessageStyle(officialMessageStyle) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE", officialMessageStyle });
  const obj2 = { type: "ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE", officialMessageStyle };
  AnalyticsUtilsDefault.track(AnalyticEvents.OFFICIAL_MESSAGE_STYLE_SETTING_UPDATED, {
    official_message_style: officialMessageStyle,
  });
};
export const setDisplayNameStylesEnabled = function setDisplayNameStylesEnabled(enabled) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED", enabled });
};
export const toggleSubmitButton = function toggleSubmitButton() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
};
export const toggleSyncProfileThemeWithUserTheme = function toggleSyncProfileThemeWithUserTheme() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE" });
};
export const setContrast = function setContrast(contrast) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_CONTRAST", contrast });
};
export const setContrastMode = function setContrastMode(contrastMode) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_CONTRAST_MODE", contrastMode });
};
export const setSwitchIconsEnabled = function setSwitchIconsEnabled(switchIconsEnabled) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED", switchIconsEnabled });
};
export const setYouBarAnimations = function setYouBarAnimations(arg0) {
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_YOU_BAR_ANIMATIONS" });
};
export const setChatBarSettings = function setChatBarSettings(arg0) {
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_CHAT_BAR_SETTINGS" });
};
export const setHDRDynamicRange = function setHDRDynamicRange(hdrDynamicRange) {
  const obj2 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { hdrDynamicRange } };
  DispatcherDefault.dispatch(obj2);
};
