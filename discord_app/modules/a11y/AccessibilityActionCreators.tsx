// === Module 16266: AccessibilityActionCreators ===

// Module 16266 (AccessibilityActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5932 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;

const AnalyticEvents = fn(1072).AnalyticEvents;
const StickerAnimationSettings = fn(4842).StickerAnimationSettings;
const constants = fn(1082).SettingsOverrideReasonKeys;
const size = fn(2);
let result = size.fileFinishedImporting("modules/a11y/AccessibilityActionCreators.tsx");

export function setFontSize(fontSize) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize });
}
export function setMessageGroupSpacing() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = null;
  }
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING", messageGroupSpacing: tmp });
}
export function setZoom(zoom) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_ZOOM", zoom });
}
export function resetToDefault() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_RESET_TO_DEFAULT" });
}
export function enableKeyboardMode() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" });
  AnalyticsUtilsDefault.track(AnalyticEvents.KEYBOARD_MODE_TOGGLED, { enabled: true });
}
export function disableKeyboardMode() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE" });
  AnalyticsUtilsDefault.track(AnalyticEvents.KEYBOARD_MODE_TOGGLED, { enabled: false });
}
export function toggleDesaturateUserColors() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE" });
}
export function toggleColorblindMode() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_COLORBLIND_TOGGLE" });
}
export function forcedColorsModalSeen() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN" });
}
export function keyboardNavigationExplainerModalSeen() {
  DispatcherDefault.dispatch({ type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN" });
}
export function systemPrefersReducedMotionChanged(reduce) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED", systemPrefersReducedMotion: reduce });
}
export function systemPrefersCrossfadesChanged(systemPrefersCrossfades) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED", systemPrefersCrossfades });
}
export function setLowContrastMode(lowContrastMode) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_LOW_CONTRAST_TOGGLE", lowContrastMode });
}
export function setSaturation(saturation) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_SATURATION", saturation });
}
export function setPrefersReducedMotion(reduce) {
  let prefersReducedMotion = AccessibilityStore.prefersReducedMotion;
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: reduce });
  const prefersReducedMotion2 = AccessibilityStore.prefersReducedMotion;
  if (!prefersReducedMotion) {
    if (prefersReducedMotion2) {
      const obj3 = { gifAutoPlay: null, animateEmoji: null, animateStickers: null };
      const obj4 = { value: false, reasonKey: constants.REDUCED_MOTION };
      obj3.gifAutoPlay = obj4;
      const obj5 = { value: false, reasonKey: constants.REDUCED_MOTION };
      obj3.animateEmoji = obj5;
      const obj6 = { value: StickerAnimationSettings.ANIMATE_ON_INTERACTION, reasonKey: constants.REDUCED_MOTION_STICKERS };
      obj3.animateStickers = obj6;
      const result = UserSettingsActionCreatorsDefault.applySettingsOverride(obj3);
      const tmpResult = UserSettingsActionCreatorsDefault;
    }
  }
  if (prefersReducedMotion) {
    prefersReducedMotion = !prefersReducedMotion2;
  }
  if (prefersReducedMotion) {
    const result1 = UserSettingsActionCreatorsDefault.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers");
    const tmpResult2 = UserSettingsActionCreatorsDefault;
  }
  const obj2 = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: reduce };
}
export function setSyncForcedColors(syncForcedColors) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS", syncForcedColors });
}
export function systemColorPreferencesChanged(systemForcedColors) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED", systemForcedColors });
}
export function systemPrefersContrastChanged(systemPrefersContrast) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED", systemPrefersContrast });
}
export function setAlwaysShowLinkDecorations(alwaysShowLinkDecorations) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS", alwaysShowLinkDecorations });
}
export function setEnableCustomCursor(enableCustomCursor) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR", enableCustomCursor });
}
export function setRoleStyle(roleStyle) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle });
  const obj2 = { type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle };
  AnalyticsUtilsDefault.track(AnalyticEvents.ROLE_STYLE_SETTING_UPDATED, { role_style: roleStyle });
}
export function setOfficialMessageStyle(officialMessageStyle) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE", officialMessageStyle });
  const obj2 = { type: "ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE", officialMessageStyle };
  AnalyticsUtilsDefault.track(AnalyticEvents.OFFICIAL_MESSAGE_STYLE_SETTING_UPDATED, { official_message_style: officialMessageStyle });
}
export function setDisplayNameStylesEnabled(enabled) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED", enabled });
}
export function toggleSubmitButton() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
}
export function toggleSyncProfileThemeWithUserTheme() {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE" });
}
export function setContrast(contrast) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_CONTRAST", contrast });
}
export function setMinToastDuration(minToastDurationMs) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_MIN_TOAST_DURATION", minToastDurationMs });
}
export function setContrastMode(contrastMode) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_CONTRAST_MODE", contrastMode });
}
export function setSwitchIconsEnabled(switchIconsEnabled) {
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED", switchIconsEnabled });
}
export function setYouBarAnimations(arg0) {
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_YOU_BAR_ANIMATIONS" });
}
export function setChatBarSettings(arg0) {
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch({ type: "ACCESSIBILITY_SET_CHAT_BAR_SETTINGS" });
}
export function setHDRDynamicRange(hdrDynamicRange) {
  const obj2 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { hdrDynamicRange } };
  DispatcherDefault.dispatch(obj2);
}