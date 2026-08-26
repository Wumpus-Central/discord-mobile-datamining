// === Module 4436: maybeApplyNoTextColorForLightCustomTheme ===

// Module 4436 (maybeApplyNoTextColorForLightCustomTheme)
import initializeDefault from "initialize" /* 589 */;
import Storage7 from "Storage" /* 595 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import setDefault from "set" /* 4438 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "initialize" /* 1303 */;
import closure_6 from "handleThemeChange" /* 1302 */;
import closure_7 from "handleConnectionClosedOrResumed" /* 1340 */;
import ME from "ME" /* 676 */;
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING" /* 4437 */;

require = arg1;
function maybeApplyNoTextColorForLightCustomTheme() {
  const officialMessageStyleExplicitlySet = obj.officialMessageStyleExplicitlySet;
  let tmp = !officialMessageStyleExplicitlySet;
  if (!officialMessageStyleExplicitlySet) {
    let tmp3 = "default" !== obj.officialMessageStyle;
    if (!tmp3) {
      tmp3 = theme.theme !== ThemeTypes.LIGHT;
    }
    if (!tmp3) {
      const ClientThemeSettings = require(4134) /* explicitContentFromProto */.ClientThemeSettings;
      const setting = ClientThemeSettings.getSetting();
      let tmp10 = null != setting.backgroundGradientPresetId;
      if (!tmp10) {
        const customUserThemeSettings = setting.customUserThemeSettings;
        let num;
        if (customUserThemeSettings != null) {
          const colors = customUserThemeSettings.colors;
          if (colors != null) {
            num = colors.length;
          }
        }
        if (num == null) {
          num = 0;
        }
        tmp10 = num > 0;
      }
      tmp3 = !tmp10;
    }
    let flag = !tmp3;
    if (!tmp3) {
      obj.officialMessageStyle = "no_text_color";
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}
function handleReducedMotionUpdated() {
  obj = {};
  const merged = Object.assign(obj);
  let str = "animate-never";
  let str2 = "animate-never";
  if ("animate-never" !== obj.youBarNameplateAnimation) {
    const prefersReducedMotion = obj.prefersReducedMotion;
    if ("no-preference" === prefersReducedMotion) {
      let flag = false;
    } else {
      flag = true;
      if ("reduce" !== prefersReducedMotion) {
        flag = "reduce" === obj.systemPrefersReducedMotion;
      }
    }
    let str5 = "animate-always";
    if (flag) {
      str5 = "respect-motion-settings";
    }
    str2 = str5;
  }
  obj.youBarNameplateAnimation = str2;
  if (str !== obj.youBarAvatarDecoAnimation) {
    const prefersReducedMotion2 = obj.prefersReducedMotion;
    if ("no-preference" === prefersReducedMotion2) {
      let flag2 = false;
    } else {
      flag2 = true;
      if ("reduce" !== prefersReducedMotion2) {
        flag2 = "reduce" === obj.systemPrefersReducedMotion;
      }
    }
    let str8 = "animate-always";
    if (flag2) {
      str8 = "respect-motion-settings";
    }
    str = str8;
  }
  obj.youBarAvatarDecoAnimation = str;
}
let closure_3 = ["fontScale"];
const Accessibility = ME.Accessibility;
const ThemeTypes = ME.ThemeTypes;
({ MESSAGE_GROUP_SPACING: c10, DEFAULT_COMPACT_SPACING: unpackModuleId, DEFAULT_COZY_SPACING: closure_12 } = MESSAGE_GROUP_SPACING);
let obj = { DEFAULT: "default", HIGH: "high" };
obj = { FLEXIBLE: "flexible", CONDENSED: "condensed", HIDDEN: "hidden" };
obj = { fontSize: Accessibility.FONT_SIZE_DEFAULT, zoom: Accessibility.ZOOM_DEFAULT, keyboardModeEnabled: false, contrastMode: obj.DEFAULT, colorblindMode: false, lowContrastMode: false, saturation: 1, contrast: 1, desaturateUserColors: false, forcedColorsModalSeen: false, keyboardNavigationExplainerModalSeen: false, messageGroupSpacing: null, systemPrefersReducedMotion: "no-preference", systemPrefersCrossfades: false, prefersReducedMotion: "auto", systemForcedColors: "none", syncForcedColors: true, systemPrefersContrast: "no-preference", alwaysShowLinkDecorations: false, roleStyle: "username", officialMessageStyle: "default", officialMessageStyleExplicitlySet: false, displayNameStylesEnabled: true, submitButtonEnabled: false, syncProfileThemeWithUserTheme: false, enableCustomCursor: true, switchIconsEnabled: false, appsButtonEnabled: true, expressionPickerFormat: obj.FLEXIBLE, condensePickerWhenNarrow: true, emojiButtonEnabled: true, gifButtonEnabled: true, stickerButtonEnabled: true, youBarNameplateAnimation: "animate-never", youBarAvatarDecoAnimation: "animate-never" };
let closure_17 = { 12: "font-size-12", 14: "font-size-14", 15: "font-size-15", 16: "font-size-16", 18: "font-size-18", 20: "font-size-20", 24: "font-size-24" };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class AccessibilityStore extends DeviceSettingsStore {
}
const prototype = AccessibilityStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const self = this;
  let tmp = arg0;
  this.waitFor(closure_7);
  obj = {};
  const merged = Object.assign(obj);
  if (arg0 == null) {
    tmp = null;
  }
  const merged1 = Object.assign(tmp);
  if (isNaN(obj.fontSize)) {
    obj.fontSize = Accessibility.FONT_SIZE_DEFAULT;
  }
  let num = -1;
  if (null != obj.messageGroupSpacing) {
    num = obj.messageGroupSpacing;
  }
  if (closure_10.indexOf(num) < 0) {
    obj.messageGroupSpacing = null;
  }
  const items = [closure_7, closure_5];
  self.syncWith(items, maybeApplyNoTextColorForLightCustomTheme);
};
Object.defineProperty(prototype, "fontScale", {
  get: function fontScale(applicationAccountLinkMarkAsDismissed, arg1, id) {
    return obj.fontSize / Accessibility.FONT_SIZE_DEFAULT * 100;
  },
  set: undefined
});
Object.defineProperty(prototype, "fontSize", {
  get: function fontSize() {
    return obj.fontSize;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFontScaledUp", {
  get: function isFontScaledUp() {
    return obj.fontSize > Accessibility.FONT_SIZE_DEFAULT;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFontScaledDown", {
  get: function isFontScaledDown() {
    return obj.fontSize < Accessibility.FONT_SIZE_DEFAULT;
  },
  set: undefined
});
Object.defineProperty(prototype, "fontScaleClass", {
  get: function fontScaleClass() {
    const self = this;
    let str = table[this.fontSize];
    if (str == null) {
      str = "";
    }
    if (self.isFontScaledUp) {
      const _HermesInternal2 = HermesInternal;
      let combined = "a11y-font-scaled-up " + str;
    } else {
      const _HermesInternal = HermesInternal;
      if (self.isFontScaledDown) {
        combined = concat(str);
      } else {
        combined = concat(str);
      }
    }
    return combined;
  },
  set: undefined
});
Object.defineProperty(prototype, "zoom", {
  get: function zoom() {
    return obj.zoom;
  },
  set: undefined
});
Object.defineProperty(prototype, "isZoomedIn", {
  get: function isZoomedIn() {
    return obj.zoom > Accessibility.ZOOM_DEFAULT;
  },
  set: undefined
});
Object.defineProperty(prototype, "isZoomedOut", {
  get: function isZoomedOut() {
    return obj.zoom < Accessibility.ZOOM_DEFAULT;
  },
  set: undefined
});
Object.defineProperty(prototype, "keyboardModeEnabled", {
  get: function keyboardModeEnabled() {
    return obj.keyboardModeEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "colorblindMode", {
  get: function colorblindMode() {
    return obj.colorblindMode;
  },
  set: undefined
});
Object.defineProperty(prototype, "lowContrastMode", {
  get: function lowContrastMode() {
    return obj.lowContrastMode;
  },
  set: undefined
});
Object.defineProperty(prototype, "saturation", {
  get: function saturation(arg0) {
    return obj.saturation;
  },
  set: undefined
});
Object.defineProperty(prototype, "contrast", {
  get: function contrast() {
    return obj.contrast;
  },
  set: undefined
});
Object.defineProperty(prototype, "desaturateUserColors", {
  get: function desaturateUserColors() {
    return obj.desaturateUserColors;
  },
  set: undefined
});
Object.defineProperty(prototype, "forcedColorsModalSeen", {
  get: function forcedColorsModalSeen() {
    return obj.forcedColorsModalSeen;
  },
  set: undefined
});
Object.defineProperty(prototype, "keyboardNavigationExplainerModalSeen", {
  get: function keyboardNavigationExplainerModalSeen() {
    return obj.keyboardNavigationExplainerModalSeen;
  },
  set: undefined
});
Object.defineProperty(prototype, "messageGroupSpacing", {
  get: function messageGroupSpacing() {
    if (null != obj.messageGroupSpacing) {
      let messageGroupSpacing = obj.messageGroupSpacing;
    } else {
      const MessageDisplayCompact = require(4134) /* explicitContentFromProto */.MessageDisplayCompact;
      messageGroupSpacing = MessageDisplayCompact.getSetting() ? closure_11 : closure_12;
    }
    return messageGroupSpacing;
  },
  set: undefined
});
Object.defineProperty(prototype, "isMessageGroupSpacingIncreased", {
  get: function isMessageGroupSpacingIncreased() {
    const MessageDisplayCompact = require(4134) /* explicitContentFromProto */.MessageDisplayCompact;
    return this.messageGroupSpacing > (MessageDisplayCompact.getSetting() ? closure_11 : closure_12);
  },
  set: undefined
});
Object.defineProperty(prototype, "isMessageGroupSpacingDecreased", {
  get: function isMessageGroupSpacingDecreased() {
    const MessageDisplayCompact = require(4134) /* explicitContentFromProto */.MessageDisplayCompact;
    return this.messageGroupSpacing < (MessageDisplayCompact.getSetting() ? closure_11 : closure_12);
  },
  set: undefined
});
Object.defineProperty(prototype, "isSubmitButtonEnabled", {
  get: function isSubmitButtonEnabled() {
    return obj.submitButtonEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "syncProfileThemeWithUserTheme", {
  get: function syncProfileThemeWithUserTheme() {
    return obj.syncProfileThemeWithUserTheme;
  },
  set: undefined
});
Object.defineProperty(prototype, "systemPrefersReducedMotion", {
  get: function systemPrefersReducedMotion() {
    return obj.systemPrefersReducedMotion;
  },
  set: undefined
});
Object.defineProperty(prototype, "rawPrefersReducedMotion", {
  get: function rawPrefersReducedMotion() {
    return obj.prefersReducedMotion;
  },
  set: undefined
});
Object.defineProperty(prototype, "useReducedMotion", {
  get: function useReducedMotion() {
    const prefersReducedMotion = obj.prefersReducedMotion;
    if ("no-preference" === prefersReducedMotion) {
      let flag = false;
    } else {
      flag = true;
      if ("reduce" !== prefersReducedMotion) {
        flag = "reduce" === obj.systemPrefersReducedMotion;
      }
    }
    return flag;
  },
  set: undefined
});
Object.defineProperty(prototype, "systemForcedColors", {
  get: function systemForcedColors() {
    return obj.systemForcedColors;
  },
  set: undefined
});
Object.defineProperty(prototype, "syncForcedColors", {
  get: function syncForcedColors() {
    return obj.syncForcedColors;
  },
  set: undefined
});
Object.defineProperty(prototype, "useForcedColors", {
  get: function useForcedColors() {
    const syncForcedColors = obj.syncForcedColors;
    let tmp = !syncForcedColors;
    if (syncForcedColors) {
      tmp = "active" !== obj.systemForcedColors;
    }
    return !tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "systemPrefersContrast", {
  get: function systemPrefersContrast() {
    return obj.systemPrefersContrast;
  },
  set: undefined
});
Object.defineProperty(prototype, "systemPrefersCrossfades", {
  get: function systemPrefersCrossfades() {
    return obj.systemPrefersCrossfades;
  },
  set: undefined
});
Object.defineProperty(prototype, "alwaysShowLinkDecorations", {
  get: function alwaysShowLinkDecorations(arg0) {
    return obj.alwaysShowLinkDecorations;
  },
  set: undefined
});
Object.defineProperty(prototype, "enableCustomCursor", {
  get: function enableCustomCursor() {
    return obj.enableCustomCursor;
  },
  set: undefined
});
Object.defineProperty(prototype, "roleStyle", {
  get: function roleStyle() {
    return obj.roleStyle;
  },
  set: undefined
});
Object.defineProperty(prototype, "officialMessageStyle", {
  get: function officialMessageStyle() {
    return obj.officialMessageStyle;
  },
  set: undefined
});
Object.defineProperty(prototype, "displayNameStylesEnabled", {
  get: function displayNameStylesEnabled(arg0) {
    return obj.displayNameStylesEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "isHighContrastModeEnabled", {
  get: function isHighContrastModeEnabled() {
    return obj.contrastMode === obj.HIGH;
  },
  set: undefined
});
Object.defineProperty(prototype, "isSwitchIconsEnabled", {
  get: function isSwitchIconsEnabled() {
    return obj.switchIconsEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "isAppsButtonEnabled", {
  get: function isAppsButtonEnabled() {
    return obj.appsButtonEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "expressionPickerFormat", {
  get: function expressionPickerFormat() {
    return obj.expressionPickerFormat;
  },
  set: undefined
});
Object.defineProperty(prototype, "condensePickerWhenNarrow", {
  get: function condensePickerWhenNarrow() {
    return obj.condensePickerWhenNarrow;
  },
  set: undefined
});
Object.defineProperty(prototype, "isEmojiButtonEnabled", {
  get: function isEmojiButtonEnabled() {
    return obj.emojiButtonEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "isGifButtonEnabled", {
  get: function isGifButtonEnabled() {
    return obj.gifButtonEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "isStickerButtonEnabled", {
  get: function isStickerButtonEnabled() {
    return obj.stickerButtonEnabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "animateYouBarNameplate", {
  get: function animateYouBarNameplate() {
    const youBarNameplateAnimation = obj.youBarNameplateAnimation;
    if ("animate-never" === youBarNameplateAnimation) {
      return false;
    } else if ("animate-always" === youBarNameplateAnimation) {
      return true;
    } else if ("respect-motion-settings" === youBarNameplateAnimation) {
      const self = this;
      return !this.useReducedMotion;
    }
  },
  set: undefined
});
Object.defineProperty(prototype, "animateYouBarAvatarDeco", {
  get: function animateYouBarAvatarDeco() {
    const youBarAvatarDecoAnimation = obj.youBarAvatarDecoAnimation;
    if ("animate-never" === youBarAvatarDecoAnimation) {
      return false;
    } else if ("animate-always" === youBarAvatarDecoAnimation) {
      return true;
    } else if ("respect-motion-settings" === youBarAvatarDecoAnimation) {
      const self = this;
      return !this.useReducedMotion;
    }
  },
  set: undefined
});
Object.defineProperty(prototype, "youBarNameplateAnimation", {
  get: function youBarNameplateAnimation() {
    return obj.youBarNameplateAnimation;
  },
  set: undefined
});
Object.defineProperty(prototype, "youBarAvatarDecoAnimation", {
  get: function youBarAvatarDecoAnimation() {
    return obj.youBarAvatarDecoAnimation;
  },
  set: undefined
});
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
AccessibilityStore.displayName = "AccessibilityStore";
AccessibilityStore.persistKey = "AccessibilityStore";
let items = [
  () => {
    const Storage = Storage7.Storage;
    const fontScale = Storage.get("a11yFontScale") || 100;
    const Storage2 = tmp(595).Storage;
    let zoom = Storage2.get("a11yZoom");
    if (!zoom) {
      zoom = Accessibility.ZOOM_DEFAULT;
    }
    const Storage3 = tmp(595).Storage;
    const colorblindMode = Storage3.get("a11yColorblindMode") || false;
    const Storage4 = tmp(595).Storage;
    Storage4.remove("a11yFontScale");
    const Storage5 = tmp(595).Storage;
    Storage5.remove("a11yZoom");
    const Storage6 = tmp(595).Storage;
    Storage6.remove("a11yColorblindMode");
    return { fontScale, zoom, colorblindMode, keyboardModeEnabled: false };
  },
  (fontScale) => {
    fontScale = fontScale.fontScale;
    if (82 === fontScale) {
      let num4 = 12;
    } else if (92 === fontScale) {
      num4 = 15;
    } else {
      num4 = 16;
      if (100 !== fontScale) {
        if (110 === fontScale) {
          num4 = 18;
        } else if (125 === fontScale) {
          num4 = 20;
        } else {
          num4 = 16;
          if (150 === fontScale) {
            num4 = 24;
          }
        }
      }
    }
    obj = {};
    const merged = Object.assign(callback(fontScale, closure_3));
    obj.fontSize = num4;
    return obj;
  },
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    obj.darkSidebar = false;
    return obj;
  },
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    obj.messageGroupSpacing = null;
    return obj;
  },
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    obj.systemPrefersReducedMotion = "no-preference";
    obj.prefersReducedMotion = "auto";
    return obj;
  },
  (saturation) => {
    obj = {};
    const merged = Object.assign(saturation);
    obj.alwaysShowLinkDecorations = saturation.saturation <= AccessibilityAnnouncer.LOW_SATURATION_THRESHOLD;
    return obj;
  },
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    obj.disableVoiceBackgrounds = false;
    return obj;
  },
  (arg0) => {
    try {
      delete tmp[tmp2];
      return arg0;
    } catch (err) {
    }
  },
  (arg0) => {
    try {
      delete tmp[tmp2];
      return arg0;
    } catch (err) {
    }
  },
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    obj.enableCustomCursor = true;
    return obj;
  },
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    obj.appsButtonEnabled = true;
    obj.expressionPickerFormat = obj.FLEXIBLE;
    obj.condensePickerWhenNarrow = true;
    obj.emojiButtonEnabled = true;
    obj.gifButtonEnabled = true;
    obj.stickerButtonEnabled = true;
    return obj;
  },
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    obj.youBarNameplateAnimation = "animate-never";
    obj.youBarAvatarDecoAnimation = "animate-never";
    return obj;
  }
];
AccessibilityStore.migrations = items;
const accessibilityStore = new AccessibilityStore(dispatcherDefault, {
  ACCESSIBILITY_SET_FONT_SIZE: function handleFontScaleTo(fontSize) {
    let FONT_SIZE_DEFAULT = fontSize.fontSize;
    const FONT_SIZES = Accessibility.FONT_SIZES;
    if (FONT_SIZES.indexOf(FONT_SIZE_DEFAULT) < 0) {
      FONT_SIZE_DEFAULT = tmp.FONT_SIZE_DEFAULT;
    }
    if (FONT_SIZE_DEFAULT <= Accessibility.FONT_SIZE_MAX) {
      if (FONT_SIZE_DEFAULT >= tmp.FONT_SIZE_MIN) {
        if (obj.fontSize !== FONT_SIZE_DEFAULT) {
          obj = {};
          const merged = Object.assign(obj);
          obj.fontSize = FONT_SIZE_DEFAULT;
        }
      }
    }
    return false;
  },
  ACCESSIBILITY_SET_ZOOM: function handleZoomTo(zoom) {
    if (zoom.zoom >= Accessibility.ZOOM_MIN) {
      if (zoom.zoom <= tmp.ZOOM_MAX) {
        if (obj.zoom !== zoom.zoom) {
          obj = {};
          const merged = Object.assign(obj);
          obj.zoom = zoom.zoom;
          setDefault.setZoomFactor(obj.zoom);
        }
      }
    }
    return false;
  },
  ACCESSIBILITY_RESET_TO_DEFAULT: function handleResetToDefault() {
    if (obj.fontSize === Accessibility.FONT_SIZE_DEFAULT) {
      if (obj.zoom === Accessibility.ZOOM_DEFAULT) {
        return false;
      }
    }
    obj = {};
    const merged = Object.assign(obj);
    if (obj.fontSize !== Accessibility.FONT_SIZE_DEFAULT) {
      obj.fontSize = tmp.FONT_SIZE_DEFAULT;
    }
    if (obj.zoom !== Accessibility.ZOOM_DEFAULT) {
      obj.zoom = tmp.ZOOM_DEFAULT;
      setDefault.setZoomFactor(obj.zoom);
      const obj2 = setDefault;
    }
  },
  ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function handleEnableKeyboardMode() {
    if (obj.keyboardModeEnabled) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj.keyboardModeEnabled = true;
    }
  },
  ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function handleDisableKeyboardMode() {
    if (obj.keyboardModeEnabled) {
      obj = {};
      const merged = Object.assign(obj);
      obj.keyboardModeEnabled = false;
    } else {
      return false;
    }
  },
  ACCESSIBILITY_COLORBLIND_TOGGLE: function handleToggleColorblindMode() {
    obj = {};
    const merged = Object.assign(obj);
    obj.colorblindMode = !obj.colorblindMode;
  },
  ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function handleToggleLowContrastMode() {
    obj = {};
    const merged = Object.assign(obj);
    obj.lowContrastMode = !obj.lowContrastMode;
  },
  ACCESSIBILITY_SET_SATURATION: function handleSetSaturation(saturation) {
    obj = {};
    const merged = Object.assign(obj);
    obj.saturation = saturation.saturation;
  },
  ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function handledesaturateUserColorsToggle() {
    obj = {};
    const merged = Object.assign(obj);
    obj.desaturateUserColors = !obj.desaturateUserColors;
  },
  ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function handleSystemColorPreferencesChanged(systemForcedColors) {
    obj = {};
    const merged = Object.assign(obj);
    let str = systemForcedColors.systemForcedColors;
    if (str == null) {
      str = "none";
    }
    obj.systemForcedColors = str;
  },
  ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function handleSystemPrefersContrastChanged(systemPrefersContrast) {
    if (obj.systemPrefersContrast === systemPrefersContrast.systemPrefersContrast) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj.systemPrefersContrast = systemPrefersContrast.systemPrefersContrast;
    }
  },
  ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function handleSystemPrefersReducedMotionChanged(systemPrefersReducedMotion) {
    if (obj.systemPrefersReducedMotion === systemPrefersReducedMotion.systemPrefersReducedMotion) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj.systemPrefersReducedMotion = systemPrefersReducedMotion.systemPrefersReducedMotion;
      handleReducedMotionUpdated();
    }
  },
  ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function handleSystemPrefersCrossfadesChanged(systemPrefersCrossfades) {
    if (obj.systemPrefersCrossfades === systemPrefersCrossfades.systemPrefersCrossfades) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj.systemPrefersCrossfades = systemPrefersCrossfades.systemPrefersCrossfades;
    }
  },
  ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function handleSetPrefersReducedMotion(prefersReducedMotion) {
    if (obj.prefersReducedMotion === prefersReducedMotion.prefersReducedMotion) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj.prefersReducedMotion = prefersReducedMotion.prefersReducedMotion;
      handleReducedMotionUpdated();
    }
  },
  ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function handleSetSyncForcedColors(syncForcedColors) {
    obj.syncForcedColors = syncForcedColors.syncForcedColors;
  },
  ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function handleSetAlwaysShowLinkDecorations(alwaysShowLinkDecorations) {
    obj = {};
    const merged = Object.assign(obj);
    obj.alwaysShowLinkDecorations = alwaysShowLinkDecorations.alwaysShowLinkDecorations;
  },
  ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: function handleSetEnableCustomCursor(enableCustomCursor) {
    obj = {};
    const merged = Object.assign(obj);
    obj.enableCustomCursor = enableCustomCursor.enableCustomCursor;
  },
  ACCESSIBILITY_SET_ROLE_STYLE: function handleSetRoleStyle(roleStyle) {
    obj.roleStyle = roleStyle.roleStyle;
  },
  ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE: function handleSetOfficialMessageStyle(officialMessageStyle) {
    obj.officialMessageStyle = officialMessageStyle.officialMessageStyle;
    obj.officialMessageStyleExplicitlySet = true;
  },
  ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: function handleSetDisplayNameStylesEnabled(enabled) {
    obj.displayNameStylesEnabled = enabled.enabled;
  },
  ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function handleForcedColorsModalSeen() {
    obj.forcedColorsModalSeen = true;
  },
  KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function handleKeyboardNavigationExplainerModalSeen() {
    obj = {};
    const merged = Object.assign(obj);
    obj.keyboardNavigationExplainerModalSeen = true;
  },
  ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function handleMessageGroupSpacingChange(messageGroupSpacing) {
    obj = {};
    const merged = Object.assign(obj);
    obj.messageGroupSpacing = messageGroupSpacing.messageGroupSpacing;
  },
  ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function handleSubmitButtonToggle() {
    obj = {};
    const merged = Object.assign(obj);
    obj.submitButtonEnabled = !obj.submitButtonEnabled;
  },
  ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function handleSyncProfileThemeWithUserThemeToggle() {
    obj = {};
    const merged = Object.assign(obj);
    obj.syncProfileThemeWithUserTheme = !obj.syncProfileThemeWithUserTheme;
  },
  ACCESSIBILITY_SET_CONTRAST: function handleSetContrast(contrast) {
    obj = {};
    const merged = Object.assign(obj);
    obj.contrast = contrast.contrast;
  },
  ACCESSIBILITY_SET_CONTRAST_MODE: function handleSetContrastMode(contrastMode) {
    obj = {};
    const merged = Object.assign(obj);
    obj.contrastMode = contrastMode.contrastMode;
  },
  ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: function handleSetSwitchIconsEnabled(switchIconsEnabled) {
    obj = {};
    const merged = Object.assign(obj);
    obj.switchIconsEnabled = switchIconsEnabled.switchIconsEnabled;
  },
  ACCESSIBILITY_SET_CHAT_BAR_SETTINGS: function handleSetChatBarSettings(appsButtonEnabled) {
    obj = {};
    const merged = Object.assign(obj);
    let tmp2 = null != appsButtonEnabled.appsButtonEnabled;
    if (tmp2) {
      obj = { appsButtonEnabled: null };
      obj[0] = appsButtonEnabled.appsButtonEnabled;
      tmp2 = obj;
    }
    const merged1 = Object.assign(tmp2);
    let tmp4 = null != appsButtonEnabled.expressionPickerFormat;
    if (tmp4) {
      obj = { expressionPickerFormat: null };
      obj[0] = appsButtonEnabled.expressionPickerFormat;
      tmp4 = obj;
    }
    const merged2 = Object.assign(tmp4);
    let tmp6 = null != appsButtonEnabled.condensePickerWhenNarrow;
    if (tmp6) {
      obj1 = { condensePickerWhenNarrow: null };
      obj1[0] = appsButtonEnabled.condensePickerWhenNarrow;
      tmp6 = obj1;
    }
    const merged3 = Object.assign(tmp6);
    let tmp8 = null != appsButtonEnabled.emojiButtonEnabled;
    if (tmp8) {
      const obj2 = { emojiButtonEnabled: null };
      obj2[0] = appsButtonEnabled.emojiButtonEnabled;
      tmp8 = obj2;
    }
    const merged4 = Object.assign(tmp8);
    let tmp10 = null != appsButtonEnabled.gifButtonEnabled;
    if (tmp10) {
      const obj3 = { gifButtonEnabled: null };
      obj3[0] = appsButtonEnabled.gifButtonEnabled;
      tmp10 = obj3;
    }
    const merged5 = Object.assign(tmp10);
    let tmp12 = null != appsButtonEnabled.stickerButtonEnabled;
    if (tmp12) {
      const obj4 = { stickerButtonEnabled: null };
      obj4[0] = appsButtonEnabled.stickerButtonEnabled;
      tmp12 = obj4;
    }
    const merged6 = Object.assign(tmp12);
  },
  ACCESSIBILITY_SET_YOU_BAR_ANIMATIONS: function handleSetYouBarAnimations(animateNameplate) {
    obj = {};
    const merged = Object.assign(obj);
    animateNameplate = animateNameplate.animateNameplate;
    let str = "animate-always";
    let str2 = "animate-always";
    if (true !== animateNameplate) {
      str2 = "animate-never";
      if (false !== animateNameplate) {
        if (undefined === animateNameplate) {
          str2 = tmp2;
        }
      }
    }
    obj.youBarNameplateAnimation = str2;
    const animateAvatarDeco = animateNameplate.animateAvatarDeco;
    if (true !== animateAvatarDeco) {
      str = "animate-never";
      if (false !== animateAvatarDeco) {
        if (undefined === animateAvatarDeco) {
          str = tmp3;
        }
      }
    }
    obj.youBarAvatarDecoAnimation = str;
  }
});
const result = require("set").fileFinishedImporting("modules/a11y/AccessibilityStore.tsx");

export default accessibilityStore;
export const AccessibilityContrastMode = obj;
export const ExpressionPickerFormat = obj;