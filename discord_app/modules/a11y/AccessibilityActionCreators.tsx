// === Module 14295: AccessibilityActionCreators ===

// Module 14295 (AccessibilityActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import StickersConstants from "StickersConstants" /* 2031 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 8091 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
const constants = UserSettingsConstants.SettingsOverrideReasonKeys;
let result = size.fileFinishedImporting("modules/a11y/AccessibilityActionCreators.tsx");

export const setFontSize = function setFontSize(fontSize) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize };
  obj.dispatch(obj2);
};
export const setMessageGroupSpacing = function setMessageGroupSpacing() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = null;
  }
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING", messageGroupSpacing: tmp });
};
export const setZoom = function setZoom(zoom) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_ZOOM", zoom };
  obj.dispatch(obj2);
};
export const resetToDefault = function resetToDefault() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACCESSIBILITY_RESET_TO_DEFAULT" });
};
export const enableKeyboardMode = function enableKeyboardMode() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" });
  const obj2 = AnalyticsUtilsDefault;
  obj2.track(AnalyticEvents.KEYBOARD_MODE_TOGGLED, { enabled: true });
};
export const disableKeyboardMode = function disableKeyboardMode() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE" });
  const obj2 = AnalyticsUtilsDefault;
  obj2.track(AnalyticEvents.KEYBOARD_MODE_TOGGLED, { enabled: false });
};
export const toggleDesaturateUserColors = function toggleDesaturateUserColors() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE" });
};
export const toggleColorblindMode = function toggleColorblindMode() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACCESSIBILITY_COLORBLIND_TOGGLE" });
};
export const forcedColorsModalSeen = function forcedColorsModalSeen() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN" });
};
export const keyboardNavigationExplainerModalSeen = function keyboardNavigationExplainerModalSeen() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN" });
};
export const systemPrefersReducedMotionChanged = function systemPrefersReducedMotionChanged(reduce) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED", systemPrefersReducedMotion: reduce };
  obj.dispatch(obj2);
};
export const systemPrefersCrossfadesChanged = function systemPrefersCrossfadesChanged(systemPrefersCrossfades) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED", systemPrefersCrossfades };
  obj.dispatch(obj2);
};
export const setLowContrastMode = function setLowContrastMode(lowContrastMode) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_LOW_CONTRAST_TOGGLE", lowContrastMode };
  obj.dispatch(obj2);
};
export const setSaturation = function setSaturation(saturation) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_SATURATION", saturation };
  obj.dispatch(obj2);
};
export const setPrefersReducedMotion = function setPrefersReducedMotion(reduce) {
  let obj4;
  let obj5;
  let obj6;
  let prefersReducedMotion = AccessibilityStore.prefersReducedMotion;
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: reduce };
  obj.dispatch(obj2);
  const prefersReducedMotion2 = AccessibilityStore.prefersReducedMotion;
  if (!prefersReducedMotion) {
    if (prefersReducedMotion2) {
      const obj3 = { gifAutoPlay: obj4, animateEmoji: obj5, animateStickers: obj6 };
      obj4 = { value: false, reasonKey: constants.REDUCED_MOTION };
      obj5 = { value: false, reasonKey: constants.REDUCED_MOTION };
      obj6 = { value: StickerAnimationSettings.ANIMATE_ON_INTERACTION, reasonKey: constants.REDUCED_MOTION_STICKERS };
      const tmpResult = UserSettingsActionCreatorsDefault;
      const result = tmpResult.applySettingsOverride(obj3);
    }
  }
  if (prefersReducedMotion) {
    prefersReducedMotion = !prefersReducedMotion2;
  }
  if (prefersReducedMotion) {
    const tmpResult2 = UserSettingsActionCreatorsDefault;
    const result1 = tmpResult2.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers");
  }
};
export const setSyncForcedColors = function setSyncForcedColors(syncForcedColors) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS", syncForcedColors };
  obj.dispatch(obj2);
};
export const systemColorPreferencesChanged = function systemColorPreferencesChanged(systemForcedColors) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED", systemForcedColors };
  obj.dispatch(obj2);
};
export const systemPrefersContrastChanged = function systemPrefersContrastChanged(systemPrefersContrast) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED", systemPrefersContrast };
  obj.dispatch(obj2);
};
export const setAlwaysShowLinkDecorations = function setAlwaysShowLinkDecorations(alwaysShowLinkDecorations) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS", alwaysShowLinkDecorations };
  obj.dispatch(obj2);
};
export const setEnableCustomCursor = function setEnableCustomCursor(enableCustomCursor) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR", enableCustomCursor };
  obj.dispatch(obj2);
};
export const setRoleStyle = function setRoleStyle(roleStyle) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle };
  obj.dispatch(obj2);
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { role_style: roleStyle };
  obj3.track(AnalyticEvents.ROLE_STYLE_SETTING_UPDATED, obj4);
};
export const setOfficialMessageStyle = function setOfficialMessageStyle(officialMessageStyle) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE", officialMessageStyle };
  obj.dispatch(obj2);
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { official_message_style: officialMessageStyle };
  obj3.track(AnalyticEvents.OFFICIAL_MESSAGE_STYLE_SETTING_UPDATED, obj4);
};
export const setDisplayNameStylesEnabled = function setDisplayNameStylesEnabled(enabled) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED", enabled };
  obj.dispatch(obj2);
};
export const toggleSubmitButton = function toggleSubmitButton() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
};
export const toggleSyncProfileThemeWithUserTheme = function toggleSyncProfileThemeWithUserTheme() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE" });
};
export const setContrast = function setContrast(contrast) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_CONTRAST", contrast };
  obj.dispatch(obj2);
};
export const setMinToastDuration = function setMinToastDuration(minToastDurationMs) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_MIN_TOAST_DURATION", minToastDurationMs };
  obj.dispatch(obj2);
};
export const setContrastMode = function setContrastMode(contrastMode) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_CONTRAST_MODE", contrastMode };
  obj.dispatch(obj2);
};
export const setSwitchIconsEnabled = function setSwitchIconsEnabled(switchIconsEnabled) {
  const obj = DispatcherDefault;
  const obj2 = { type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED", switchIconsEnabled };
  obj.dispatch(obj2);
};
export const setYouBarAnimations = function setYouBarAnimations(arg0) {
  const dispatch = DispatcherDefault.dispatch;
  const obj = { type: "ACCESSIBILITY_SET_YOU_BAR_ANIMATIONS" };
  DispatcherDefault;
  const merged = Object.assign(arg0);
  dispatch(obj);
};
export const setChatBarSettings = function setChatBarSettings(arg0) {
  const dispatch = DispatcherDefault.dispatch;
  const obj = { type: "ACCESSIBILITY_SET_CHAT_BAR_SETTINGS" };
  DispatcherDefault;
  const merged = Object.assign(arg0);
  dispatch(obj);
};
export const setHDRDynamicRange = function setHDRDynamicRange(hdrDynamicRange) {
  let obj3;
  const obj2 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: obj3 };
  obj3 = { hdrDynamicRange };
  const obj = DispatcherDefault;
  obj.dispatch(obj2);
};