// discord_app/modules/a11y/AccessibilityActionCreators.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { AnalyticEvents } from "ME";
import { StickerAnimationSettings } from "STICKER_PICKER_TAB_PANEL_ID";
import { SettingsOverrideReasonKeys as closure_5 } from "MAX_FAVORITES";
import { dispatcher } from "../../Dispatcher.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";

let result = require("STICKER_PICKER_TAB_PANEL_ID").fileFinishedImporting("modules/a11y/AccessibilityActionCreators.tsx");

export const setFontSize = function setFontSize(fontSize) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize };
  obj.dispatch(obj);
};
export const setMessageGroupSpacing = function setMessageGroupSpacing() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = null;
  }
  dispatcher.dispatch({ type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING", messageGroupSpacing: tmp });
};
export const setZoom = function setZoom(zoom) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_ZOOM", zoom };
  obj.dispatch(obj);
};
export const resetToDefault = function resetToDefault() {
  dispatcher.dispatch({ type: "ACCESSIBILITY_RESET_TO_DEFAULT" });
};
export const enableKeyboardMode = function enableKeyboardMode() {
  dispatcher.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" });
  const obj = dispatcher;
  expandEventProperties.track(AnalyticEvents.KEYBOARD_MODE_TOGGLED, { enabled: true });
};
export const disableKeyboardMode = function disableKeyboardMode() {
  dispatcher.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE" });
  const obj = dispatcher;
  expandEventProperties.track(AnalyticEvents.KEYBOARD_MODE_TOGGLED, { enabled: false });
};
export const toggleDesaturateUserColors = function toggleDesaturateUserColors() {
  dispatcher.dispatch({ type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE" });
};
export const toggleColorblindMode = function toggleColorblindMode() {
  dispatcher.dispatch({ type: "ACCESSIBILITY_COLORBLIND_TOGGLE" });
};
export const forcedColorsModalSeen = function forcedColorsModalSeen() {
  dispatcher.dispatch({ type: "ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN" });
};
export const keyboardNavigationExplainerModalSeen = function keyboardNavigationExplainerModalSeen() {
  dispatcher.dispatch({ type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN" });
};
export const systemPrefersReducedMotionChanged = function systemPrefersReducedMotionChanged(systemPrefersReducedMotion) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED", systemPrefersReducedMotion };
  obj.dispatch(obj);
};
export const systemPrefersCrossfadesChanged = function systemPrefersCrossfadesChanged(systemPrefersCrossfades) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED", systemPrefersCrossfades };
  obj.dispatch(obj);
};
export const setLowContrastMode = function setLowContrastMode(lowContrastMode) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_LOW_CONTRAST_TOGGLE", lowContrastMode };
  obj.dispatch(obj);
};
export const setSaturation = function setSaturation(saturation) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_SATURATION", saturation };
  obj.dispatch(obj);
};
export const setPrefersReducedMotion = function setPrefersReducedMotion(prefersReducedMotion) {
  let useReducedMotion = maybeApplyNoTextColorForLightCustomTheme.useReducedMotion;
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion };
  obj.dispatch(obj);
  const useReducedMotion2 = maybeApplyNoTextColorForLightCustomTheme.useReducedMotion;
  if (!useReducedMotion) {
    if (useReducedMotion2) {
      let tmpResult = tmp(8698);
      obj = { gifAutoPlay: null, animateEmoji: null, animateStickers: null };
      const obj1 = { value: false, reasonKey: null };
      obj1[1] = constants.REDUCED_MOTION;
      obj[0] = obj1;
      const obj2 = { value: false, reasonKey: null };
      obj2[1] = constants.REDUCED_MOTION;
      obj[1] = obj2;
      const obj3 = { value: null, reasonKey: null };
      obj3[0] = StickerAnimationSettings.ANIMATE_ON_INTERACTION;
      obj3[1] = constants.REDUCED_MOTION_STICKERS;
      obj[2] = obj3;
      const result = tmpResult.applySettingsOverride(obj);
    }
  }
  if (useReducedMotion) {
    useReducedMotion = !useReducedMotion2;
  }
  if (useReducedMotion) {
    tmpResult = tmp(8698);
    const result1 = tmpResult.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers");
  }
};
export const setSyncForcedColors = function setSyncForcedColors(syncForcedColors) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS", syncForcedColors };
  obj.dispatch(obj);
};
export const systemColorPreferencesChanged = function systemColorPreferencesChanged(systemForcedColors) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED", systemForcedColors };
  obj.dispatch(obj);
};
export const systemPrefersContrastChanged = function systemPrefersContrastChanged(systemPrefersContrast) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED", systemPrefersContrast };
  obj.dispatch(obj);
};
export const setAlwaysShowLinkDecorations = function setAlwaysShowLinkDecorations(alwaysShowLinkDecorations) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS", alwaysShowLinkDecorations };
  obj.dispatch(obj);
};
export const setEnableCustomCursor = function setEnableCustomCursor(enableCustomCursor) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR", enableCustomCursor };
  obj.dispatch(obj);
};
export const setRoleStyle = function setRoleStyle(roleStyle) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle };
  obj.dispatch(obj);
  obj = { role_style: roleStyle };
  expandEventProperties.track(AnalyticEvents.ROLE_STYLE_SETTING_UPDATED, obj);
};
export const setOfficialMessageStyle = function setOfficialMessageStyle(officialMessageStyle) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE", officialMessageStyle };
  obj.dispatch(obj);
  obj = { official_message_style: officialMessageStyle };
  expandEventProperties.track(AnalyticEvents.OFFICIAL_MESSAGE_STYLE_SETTING_UPDATED, obj);
};
export const setDisplayNameStylesEnabled = function setDisplayNameStylesEnabled(enabled) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED", enabled };
  obj.dispatch(obj);
};
export const toggleSubmitButton = function toggleSubmitButton() {
  dispatcher.dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
};
export const toggleSyncProfileThemeWithUserTheme = function toggleSyncProfileThemeWithUserTheme() {
  dispatcher.dispatch({ type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE" });
};
export const setContrast = function setContrast(contrast) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_CONTRAST", contrast };
  obj.dispatch(obj);
};
export const setContrastMode = function setContrastMode(contrastMode) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_CONTRAST_MODE", contrastMode };
  obj.dispatch(obj);
};
export const setSwitchIconsEnabled = function setSwitchIconsEnabled(switchIconsEnabled) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED", switchIconsEnabled };
  obj.dispatch(obj);
};
export const setChatBarSettings = function setChatBarSettings(arg0) {
  let obj = dispatcher;
  obj = { type: "ACCESSIBILITY_SET_CHAT_BAR_SETTINGS" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
};
export const setHDRDynamicRange = function setHDRDynamicRange(hdrDynamicRange) {
  let obj = dispatcher;
  obj = { hdrDynamicRange };
  obj.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: obj });
};