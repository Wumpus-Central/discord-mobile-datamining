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
  const obj = { type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize };
  obj.dispatch(obj);
};
export const setMessageGroupSpacing = function setMessageGroupSpacing() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = null;
  }
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING", messageGroupSpacing: tmp });
};
export const setZoom = function setZoom(zoom) {
  const obj = { type: "ACCESSIBILITY_SET_ZOOM", zoom };
  obj.dispatch(obj);
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
  const obj = { type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED", systemPrefersReducedMotion: reduce };
  obj.dispatch(obj);
};
export const systemPrefersCrossfadesChanged = function systemPrefersCrossfadesChanged(systemPrefersCrossfades) {
  const obj = { type: "ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED", systemPrefersCrossfades };
  obj.dispatch(obj);
};
export const setLowContrastMode = function setLowContrastMode(lowContrastMode) {
  const obj = { type: "ACCESSIBILITY_LOW_CONTRAST_TOGGLE", lowContrastMode };
  obj.dispatch(obj);
};
export const setSaturation = function setSaturation(saturation) {
  const obj = { type: "ACCESSIBILITY_SET_SATURATION", saturation };
  obj.dispatch(obj);
};
export const setPrefersReducedMotion = function setPrefersReducedMotion(reduce) {
  let useReducedMotion = AccessibilityStore.useReducedMotion;
  let obj = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: reduce };
  obj.dispatch(obj);
  const useReducedMotion2 = AccessibilityStore.useReducedMotion;
  if (!useReducedMotion) {
    if (useReducedMotion2) {
      let tmpResult = UserSettingsActionCreatorsDefault;
      obj = { gifAutoPlay: null, animateEmoji: null, animateStickers: null };
      const obj1 = { value: false, reasonKey: constants.REDUCED_MOTION };
      obj.gifAutoPlay = obj1;
      const obj2 = { value: false, reasonKey: constants.REDUCED_MOTION };
      obj.animateEmoji = obj2;
      const obj3 = {
        value: StickerAnimationSettings.ANIMATE_ON_INTERACTION,
        reasonKey: constants.REDUCED_MOTION_STICKERS,
      };
      obj.animateStickers = obj3;
      const result = tmpResult.applySettingsOverride(obj);
    }
  }
  if (useReducedMotion) {
    useReducedMotion = !useReducedMotion2;
  }
  if (useReducedMotion) {
    tmpResult = UserSettingsActionCreatorsDefault;
    const result1 = tmpResult.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers");
  }
};
export const setSyncForcedColors = function setSyncForcedColors(syncForcedColors) {
  const obj = { type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS", syncForcedColors };
  obj.dispatch(obj);
};
export const systemColorPreferencesChanged = function systemColorPreferencesChanged(systemForcedColors) {
  const obj = { type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED", systemForcedColors };
  obj.dispatch(obj);
};
export const systemPrefersContrastChanged = function systemPrefersContrastChanged(systemPrefersContrast) {
  const obj = { type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED", systemPrefersContrast };
  obj.dispatch(obj);
};
export const setAlwaysShowLinkDecorations = function setAlwaysShowLinkDecorations(alwaysShowLinkDecorations) {
  const obj = { type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS", alwaysShowLinkDecorations };
  obj.dispatch(obj);
};
export const setEnableCustomCursor = function setEnableCustomCursor(enableCustomCursor) {
  const obj = { type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR", enableCustomCursor };
  obj.dispatch(obj);
};
export const setRoleStyle = function setRoleStyle(roleStyle) {
  let obj = { type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle };
  obj.dispatch(obj);
  obj = { role_style: roleStyle };
  AnalyticsUtilsDefault.track(AnalyticEvents.ROLE_STYLE_SETTING_UPDATED, obj);
};
export const setOfficialMessageStyle = function setOfficialMessageStyle(officialMessageStyle) {
  let obj = { type: "ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE", officialMessageStyle };
  obj.dispatch(obj);
  obj = { official_message_style: officialMessageStyle };
  AnalyticsUtilsDefault.track(AnalyticEvents.OFFICIAL_MESSAGE_STYLE_SETTING_UPDATED, obj);
};
export const setDisplayNameStylesEnabled = function setDisplayNameStylesEnabled(enabled) {
  const obj = { type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED", enabled };
  obj.dispatch(obj);
};
export const toggleSubmitButton = function toggleSubmitButton() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
};
export const toggleSyncProfileThemeWithUserTheme = function toggleSyncProfileThemeWithUserTheme() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE" });
};
export const setContrast = function setContrast(contrast) {
  const obj = { type: "ACCESSIBILITY_SET_CONTRAST", contrast };
  obj.dispatch(obj);
};
export const setContrastMode = function setContrastMode(contrastMode) {
  const obj = { type: "ACCESSIBILITY_SET_CONTRAST_MODE", contrastMode };
  obj.dispatch(obj);
};
export const setSwitchIconsEnabled = function setSwitchIconsEnabled(switchIconsEnabled) {
  const obj = { type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED", switchIconsEnabled };
  obj.dispatch(obj);
};
export const setYouBarAnimations = function setYouBarAnimations(arg0) {
  const obj = { type: "ACCESSIBILITY_SET_YOU_BAR_ANIMATIONS" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export const setChatBarSettings = function setChatBarSettings(arg0) {
  const obj = { type: "ACCESSIBILITY_SET_CHAT_BAR_SETTINGS" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export const setHDRDynamicRange = function setHDRDynamicRange(hdrDynamicRange) {
  let obj = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: null };
  obj = { hdrDynamicRange };
  obj.settings = obj;
  obj.dispatch(obj);
};
