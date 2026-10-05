// discord_app/modules/a11y/AccessibilityStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage7 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import shared from "../../design/shared.tsx";
import CrossPlatformNativeUtilsDefault from "../../utils/CrossPlatformNativeUtils.native.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import GameModeStore from "../game_mode/GameModeStore.tsx";
import SelectivelySyncedUserSettingsStore from "../user_settings/SelectivelySyncedUserSettingsStore.tsx";
import ThemeStore from "../user_settings/ThemeStore.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import Constants from "../../Constants.tsx";
import MessageConstants from "../messages/MessageConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let indexOf;

let closure_12;
let map1;
let unpackModuleId;
function maybeApplyNoTextColorForLightCustomTheme() {
  let tmp = !obj.officialMessageStyleExplicitlySet;
  if (tmp) {
    let tmp3 = "default" !== obj.officialMessageStyle || ThemeStore.theme !== ThemeTypes.LIGHT;
    if (!tmp3) {
      const ClientThemeSettings = require("UserSettings").ClientThemeSettings;
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
    if (flag) {
      obj.officialMessageStyle = "no_text_color";
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}
function handleReducedMotionUpdated() {
  let str;
  let str2;
  obj = { youBarNameplateAnimation: str2, youBarAvatarDecoAnimation: str };
  const merged = Object.assign(obj);
  str = "animate-never";
  str2 = "animate-never";
  if ("animate-never" !== obj.youBarNameplateAnimation) {
    let flag;
    const prefersReducedMotion = obj.prefersReducedMotion;
    if ("no-preference" === prefersReducedMotion) {
      flag = false;
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
  if (str !== obj.youBarAvatarDecoAnimation) {
    let flag2;
    const prefersReducedMotion2 = obj.prefersReducedMotion;
    if ("no-preference" === prefersReducedMotion2) {
      flag2 = false;
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
}
let closure_3 = ["fontScale"];
const Accessibility = Constants.Accessibility;
const ThemeTypes = Constants.ThemeTypes;
({
  MESSAGE_GROUP_SPACING: unpackModuleId,
  DEFAULT_COMPACT_SPACING: closure_12,
  DEFAULT_COZY_SPACING: map1,
} = MessageConstants);
let obj = { DEFAULT: "default", HIGH: "high" };
let obj2 = { FLEXIBLE: "flexible", CONDENSED: "condensed", HIDDEN: "hidden" };
let obj3 = {
  fontSize: Accessibility.FONT_SIZE_DEFAULT,
  zoom: Accessibility.ZOOM_DEFAULT,
  keyboardModeEnabled: false,
  contrastMode: obj.DEFAULT,
  colorblindMode: false,
  lowContrastMode: false,
  saturation: 1,
  contrast: 1,
  minToastDurationMs: Accessibility.TOAST_DURATION_DEFAULT_MS,
  desaturateUserColors: false,
  forcedColorsModalSeen: false,
  keyboardNavigationExplainerModalSeen: false,
  messageGroupSpacing: null,
  systemPrefersReducedMotion: "no-preference",
  systemPrefersCrossfades: false,
  prefersReducedMotion: "auto",
  systemForcedColors: "none",
  syncForcedColors: true,
  systemPrefersContrast: "no-preference",
  alwaysShowLinkDecorations: false,
  roleStyle: "username",
  officialMessageStyle: "default",
  officialMessageStyleExplicitlySet: false,
  displayNameStylesEnabled: true,
  submitButtonEnabled: false,
  syncProfileThemeWithUserTheme: false,
  enableCustomCursor: true,
  switchIconsEnabled: false,
  appsButtonEnabled: true,
  expressionPickerFormat: obj2.FLEXIBLE,
  condensePickerWhenNarrow: true,
  emojiButtonEnabled: true,
  gifButtonEnabled: true,
  stickerButtonEnabled: true,
  youBarNameplateAnimation: "animate-never",
  youBarAvatarDecoAnimation: "animate-never",
};
obj = obj3;
let closure_18 = {
  12: "font-size-12",
  14: "font-size-14",
  15: "font-size-15",
  16: "font-size-16",
  18: "font-size-18",
  20: "font-size-20",
  24: "font-size-24",
};
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class AccessibilityStore extends DeviceSettingsStore {
  initialize(arg0) {
    let TOAST_DURATION_DEFAULT_MS;
    const self = this;
    let tmp = arg0;
    this.waitFor(UserSettingsProtoStore);
    obj = {};
    const merged = Object.assign(obj3);
    if (arg0 == null) {
      tmp = null;
    }
    const merged1 = Object.assign(tmp);
    if (isNaN(obj.fontSize)) {
      obj.fontSize = Accessibility.FONT_SIZE_DEFAULT;
    }
    const minToastDurationMs = obj.minToastDurationMs;
    const tmp8 = obj;
    if (Number.isFinite(minToastDurationMs)) {
      const _Math = Math;
      const _Math2 = Math;
      TOAST_DURATION_DEFAULT_MS = Math.min(
        Math.max(minToastDurationMs, 1000 * Accessibility.TOAST_DURATION_MIN_SECONDS),
        1000 * Accessibility.TOAST_DURATION_MAX_SECONDS,
      );
    } else {
      TOAST_DURATION_DEFAULT_MS = Accessibility.TOAST_DURATION_DEFAULT_MS;
    }
    tmp8.minToastDurationMs = TOAST_DURATION_DEFAULT_MS;
    let num2 = -1;
    indexOf = indexOf.indexOf;
    if (null != obj.messageGroupSpacing) {
      num2 = obj.messageGroupSpacing;
    }
    if (indexOf(num2) < 0) {
      obj.messageGroupSpacing = null;
    }
    const items = [UserSettingsProtoStore, SelectivelySyncedUserSettingsStore];
    self.syncWith(items, maybeApplyNoTextColorForLightCustomTheme);
    let isThrottling = false;
    const items1 = [GameModeStore];
    self.syncWith(items1, () => {
      isThrottling = GameModeStore.isThrottling;
      let flag = isThrottling !== isThrottling;
      if (flag) {
        flag = true;
      }
      return flag;
    });
  }
  getUserAgnosticState() {
    return obj;
  }
}
const prototype = AccessibilityStore.prototype;
Object.defineProperty(prototype, "fontScale", {
  get: function fontScale() {
    return (obj.fontSize / Accessibility.FONT_SIZE_DEFAULT) * 100;
  },
  set: undefined,
});
Object.defineProperty(prototype, "fontSize", {
  get: function fontSize() {
    return obj.fontSize;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isFontScaledUp", {
  get: function isFontScaledUp() {
    return obj.fontSize > Accessibility.FONT_SIZE_DEFAULT;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isFontScaledDown", {
  get: function isFontScaledDown() {
    return obj.fontSize < Accessibility.FONT_SIZE_DEFAULT;
  },
  set: undefined,
});
Object.defineProperty(prototype, "fontScaleClass", {
  get: function fontScaleClass() {
    let combined;
    const self = this;
    let str = closure_18[this.fontSize];
    if (str == null) {
      str = "";
    }
    if (self.isFontScaledUp) {
      const _HermesInternal2 = HermesInternal;
      combined = "a11y-font-scaled-up " + str;
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
  set: undefined,
});
Object.defineProperty(prototype, "zoom", {
  get: function zoom() {
    return obj.zoom;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isZoomedIn", {
  get: function isZoomedIn() {
    return obj.zoom > Accessibility.ZOOM_DEFAULT;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isZoomedOut", {
  get: function isZoomedOut() {
    return obj.zoom < Accessibility.ZOOM_DEFAULT;
  },
  set: undefined,
});
Object.defineProperty(prototype, "keyboardModeEnabled", {
  get: function keyboardModeEnabled() {
    return obj.keyboardModeEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "colorblindMode", {
  get: function colorblindMode() {
    return obj.colorblindMode;
  },
  set: undefined,
});
Object.defineProperty(prototype, "lowContrastMode", {
  get: function lowContrastMode() {
    return obj.lowContrastMode;
  },
  set: undefined,
});
Object.defineProperty(prototype, "saturation", {
  get: function saturation() {
    return obj.saturation;
  },
  set: undefined,
});
Object.defineProperty(prototype, "contrast", {
  get: function contrast() {
    return obj.contrast;
  },
  set: undefined,
});
Object.defineProperty(prototype, "minToastDurationMs", {
  get: function minToastDurationMs() {
    return obj.minToastDurationMs;
  },
  set: undefined,
});
Object.defineProperty(prototype, "desaturateUserColors", {
  get: function desaturateUserColors() {
    return obj.desaturateUserColors;
  },
  set: undefined,
});
Object.defineProperty(prototype, "forcedColorsModalSeen", {
  get: function forcedColorsModalSeen() {
    return obj.forcedColorsModalSeen;
  },
  set: undefined,
});
Object.defineProperty(prototype, "keyboardNavigationExplainerModalSeen", {
  get: function keyboardNavigationExplainerModalSeen() {
    return obj.keyboardNavigationExplainerModalSeen;
  },
  set: undefined,
});
Object.defineProperty(prototype, "messageGroupSpacing", {
  get: function messageGroupSpacing() {
    let messageGroupSpacing;
    if (null != obj.messageGroupSpacing) {
      messageGroupSpacing = obj.messageGroupSpacing;
    } else {
      const MessageDisplayCompact = require("UserSettings").MessageDisplayCompact;
      messageGroupSpacing = MessageDisplayCompact.getSetting() ? closure_12 : map1;
    }
    return messageGroupSpacing;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isMessageGroupSpacingIncreased", {
  get: function isMessageGroupSpacingIncreased() {
    const MessageDisplayCompact = require("UserSettings").MessageDisplayCompact;
    return this.messageGroupSpacing > (MessageDisplayCompact.getSetting() ? closure_12 : map1);
  },
  set: undefined,
});
Object.defineProperty(prototype, "isMessageGroupSpacingDecreased", {
  get: function isMessageGroupSpacingDecreased() {
    const MessageDisplayCompact = require("UserSettings").MessageDisplayCompact;
    return this.messageGroupSpacing < (MessageDisplayCompact.getSetting() ? closure_12 : map1);
  },
  set: undefined,
});
Object.defineProperty(prototype, "isSubmitButtonEnabled", {
  get: function isSubmitButtonEnabled() {
    return obj.submitButtonEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "syncProfileThemeWithUserTheme", {
  get: function syncProfileThemeWithUserTheme() {
    return obj.syncProfileThemeWithUserTheme;
  },
  set: undefined,
});
Object.defineProperty(prototype, "systemPrefersReducedMotion", {
  get: function systemPrefersReducedMotion() {
    return obj.systemPrefersReducedMotion;
  },
  set: undefined,
});
Object.defineProperty(prototype, "rawPrefersReducedMotion", {
  get: function rawPrefersReducedMotion() {
    return obj.prefersReducedMotion;
  },
  set: undefined,
});
Object.defineProperty(prototype, "prefersReducedMotion", {
  get: function prefersReducedMotion() {
    let flag;
    const prefersReducedMotion = obj.prefersReducedMotion;
    if ("no-preference" === prefersReducedMotion) {
      flag = false;
    } else {
      flag = true;
      if ("reduce" !== prefersReducedMotion) {
        flag = "reduce" === obj.systemPrefersReducedMotion;
      }
    }
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "useReducedMotion", {
  get: function useReducedMotion() {
    let prefersReducedMotion = GameModeStore.isThrottling;
    if (!prefersReducedMotion) {
      const self = this;
      prefersReducedMotion = this.prefersReducedMotion;
    }
    return prefersReducedMotion;
  },
  set: undefined,
});
Object.defineProperty(prototype, "systemForcedColors", {
  get: function systemForcedColors() {
    return obj.systemForcedColors;
  },
  set: undefined,
});
Object.defineProperty(prototype, "syncForcedColors", {
  get: function syncForcedColors() {
    return obj.syncForcedColors;
  },
  set: undefined,
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
  set: undefined,
});
Object.defineProperty(prototype, "systemPrefersContrast", {
  get: function systemPrefersContrast() {
    return obj.systemPrefersContrast;
  },
  set: undefined,
});
Object.defineProperty(prototype, "systemPrefersCrossfades", {
  get: function systemPrefersCrossfades() {
    return obj.systemPrefersCrossfades;
  },
  set: undefined,
});
Object.defineProperty(prototype, "alwaysShowLinkDecorations", {
  get: function alwaysShowLinkDecorations() {
    return obj.alwaysShowLinkDecorations;
  },
  set: undefined,
});
Object.defineProperty(prototype, "enableCustomCursor", {
  get: function enableCustomCursor() {
    return obj.enableCustomCursor;
  },
  set: undefined,
});
Object.defineProperty(prototype, "roleStyle", {
  get: function roleStyle() {
    return obj.roleStyle;
  },
  set: undefined,
});
Object.defineProperty(prototype, "officialMessageStyle", {
  get: function officialMessageStyle() {
    return obj.officialMessageStyle;
  },
  set: undefined,
});
Object.defineProperty(prototype, "displayNameStylesEnabled", {
  get: function displayNameStylesEnabled() {
    return obj.displayNameStylesEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isHighContrastModeEnabled", {
  get: function isHighContrastModeEnabled() {
    return obj.contrastMode === obj.HIGH;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isSwitchIconsEnabled", {
  get: function isSwitchIconsEnabled() {
    return obj.switchIconsEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isAppsButtonEnabled", {
  get: function isAppsButtonEnabled() {
    return obj.appsButtonEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "expressionPickerFormat", {
  get: function expressionPickerFormat() {
    return obj.expressionPickerFormat;
  },
  set: undefined,
});
Object.defineProperty(prototype, "condensePickerWhenNarrow", {
  get: function condensePickerWhenNarrow() {
    return obj.condensePickerWhenNarrow;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isEmojiButtonEnabled", {
  get: function isEmojiButtonEnabled() {
    return obj.emojiButtonEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isGifButtonEnabled", {
  get: function isGifButtonEnabled() {
    return obj.gifButtonEnabled;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isStickerButtonEnabled", {
  get: function isStickerButtonEnabled() {
    return obj.stickerButtonEnabled;
  },
  set: undefined,
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
  set: undefined,
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
  set: undefined,
});
Object.defineProperty(prototype, "youBarNameplateAnimation", {
  get: function youBarNameplateAnimation() {
    return obj.youBarNameplateAnimation;
  },
  set: undefined,
});
Object.defineProperty(prototype, "youBarAvatarDecoAnimation", {
  get: function youBarAvatarDecoAnimation() {
    return obj.youBarAvatarDecoAnimation;
  },
  set: undefined,
});
AccessibilityStore.displayName = "AccessibilityStore";
AccessibilityStore.persistKey = "AccessibilityStore";
let items = [
  () => {
    const Storage = Storage7.Storage;
    const fontScale = Storage.get("a11yFontScale") || 100;
    const Storage2 = Storage7.Storage;
    const zoom = Storage2.get("a11yZoom") || Accessibility.ZOOM_DEFAULT;
    const Storage3 = Storage7.Storage;
    const colorblindMode = Storage3.get("a11yColorblindMode") || false;
    const Storage4 = Storage7.Storage;
    Storage4.remove("a11yFontScale");
    const Storage5 = Storage7.Storage;
    Storage5.remove("a11yZoom");
    const Storage6 = Storage7.Storage;
    Storage6.remove("a11yColorblindMode");
    return { fontScale, zoom, colorblindMode, keyboardModeEnabled: false };
  },
  (fontScale) => {
    let num4;
    fontScale = fontScale.fontScale;
    const tmp = _objectWithoutProperties(fontScale, closure_3);
    if (82 === fontScale) {
      num4 = 12;
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
    obj = { fontSize: num4 };
    const merged = Object.assign(tmp);
    return obj;
  },
  (arg0) => {
    obj = { darkSidebar: false };
    const merged = Object.assign(arg0);
    return obj;
  },
  (arg0) => {
    obj = { messageGroupSpacing: null };
    const merged = Object.assign(arg0);
    return obj;
  },
  (arg0) => {
    obj = { systemPrefersReducedMotion: "no-preference", prefersReducedMotion: "auto" };
    const merged = Object.assign(arg0);
    return obj;
  },
  (saturation) => {
    obj = { alwaysShowLinkDecorations: saturation.saturation <= shared.LOW_SATURATION_THRESHOLD };
    const merged = Object.assign(saturation);
    return obj;
  },
  (arg0) => {
    obj = { disableVoiceBackgrounds: false };
    const merged = Object.assign(arg0);
    return obj;
  },
  (arg0) => {
    try {
      delete tmp["disableVoiceBackgrounds"];
    } catch (err) {}
    return arg0;
  },
  (arg0) => {
    try {
      delete tmp["hideGuildTags"];
    } catch (err) {}
    return arg0;
  },
  (arg0) => {
    obj = { enableCustomCursor: true };
    const merged = Object.assign(arg0);
    return obj;
  },
  (arg0) => {
    obj = {
      appsButtonEnabled: true,
      expressionPickerFormat: obj2.FLEXIBLE,
      condensePickerWhenNarrow: true,
      emojiButtonEnabled: true,
      gifButtonEnabled: true,
      stickerButtonEnabled: true,
    };
    const merged = Object.assign(arg0);
    return obj;
  },
  (arg0) => {
    obj = { youBarNameplateAnimation: "animate-never", youBarAvatarDecoAnimation: "animate-never" };
    const merged = Object.assign(arg0);
    return obj;
  },
];
AccessibilityStore.migrations = items;
let obj4 = {
  ACCESSIBILITY_SET_FONT_SIZE: function handleFontScaleTo(fontSize) {
    let FONT_SIZE_DEFAULT = fontSize.fontSize;
    const FONT_SIZES = Accessibility.FONT_SIZES;
    if (FONT_SIZES.indexOf(FONT_SIZE_DEFAULT) < 0) {
      FONT_SIZE_DEFAULT = Accessibility.FONT_SIZE_DEFAULT;
    }
    if (FONT_SIZE_DEFAULT <= Accessibility.FONT_SIZE_MAX) {
      if (FONT_SIZE_DEFAULT >= Accessibility.FONT_SIZE_MIN) {
        if (obj.fontSize !== FONT_SIZE_DEFAULT) {
          obj = { fontSize: FONT_SIZE_DEFAULT };
          const merged = Object.assign(obj);
        }
      }
    }
    return false;
  },
  ACCESSIBILITY_SET_ZOOM: function handleZoomTo(zoom) {
    if (zoom.zoom >= Accessibility.ZOOM_MIN) {
      if (zoom.zoom <= tmp.ZOOM_MAX) {
        if (obj.zoom !== zoom.zoom) {
          obj = { zoom: zoom.zoom };
          const merged = Object.assign(obj);
          obj2 = CrossPlatformNativeUtilsDefault;
          obj2.setZoomFactor(obj.zoom);
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
      obj.fontSize = Accessibility.FONT_SIZE_DEFAULT;
    }
    if (obj.zoom !== Accessibility.ZOOM_DEFAULT) {
      obj.zoom = Accessibility.ZOOM_DEFAULT;
      obj2 = CrossPlatformNativeUtilsDefault;
      obj2.setZoomFactor(obj.zoom);
    }
  },
  ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function handleEnableKeyboardMode() {
    if (obj.keyboardModeEnabled) {
      return false;
    } else {
      obj = { keyboardModeEnabled: true };
      const merged = Object.assign(obj);
    }
  },
  ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function handleDisableKeyboardMode() {
    if (obj.keyboardModeEnabled) {
      obj = { keyboardModeEnabled: false };
      const merged = Object.assign(obj);
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
    let str;
    obj = { systemForcedColors: str };
    const merged = Object.assign(obj);
    str = systemForcedColors.systemForcedColors;
    if (str == null) {
      str = "none";
    }
  },
  ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function handleSystemPrefersContrastChanged(systemPrefersContrast) {
    if (obj.systemPrefersContrast === systemPrefersContrast.systemPrefersContrast) {
      return false;
    } else {
      obj = { systemPrefersContrast: systemPrefersContrast.systemPrefersContrast };
      const merged = Object.assign(obj);
    }
  },
  ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function handleSystemPrefersReducedMotionChanged(
    systemPrefersReducedMotion,
  ) {
    if (obj.systemPrefersReducedMotion === systemPrefersReducedMotion.systemPrefersReducedMotion) {
      return false;
    } else {
      obj = { systemPrefersReducedMotion: systemPrefersReducedMotion.systemPrefersReducedMotion };
      const merged = Object.assign(obj);
      handleReducedMotionUpdated();
    }
  },
  ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function handleSystemPrefersCrossfadesChanged(
    systemPrefersCrossfades,
  ) {
    if (obj.systemPrefersCrossfades === systemPrefersCrossfades.systemPrefersCrossfades) {
      return false;
    } else {
      obj = { systemPrefersCrossfades: systemPrefersCrossfades.systemPrefersCrossfades };
      const merged = Object.assign(obj);
    }
  },
  ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function handleSetPrefersReducedMotion(prefersReducedMotion) {
    if (obj.prefersReducedMotion === prefersReducedMotion.prefersReducedMotion) {
      return false;
    } else {
      obj = { prefersReducedMotion: prefersReducedMotion.prefersReducedMotion };
      const merged = Object.assign(obj);
      handleReducedMotionUpdated();
    }
  },
  ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function handleSetSyncForcedColors(syncForcedColors) {
    obj.syncForcedColors = syncForcedColors.syncForcedColors;
  },
  ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function handleSetAlwaysShowLinkDecorations(
    alwaysShowLinkDecorations,
  ) {
    obj = { alwaysShowLinkDecorations: alwaysShowLinkDecorations.alwaysShowLinkDecorations };
    const merged = Object.assign(obj);
  },
  ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: function handleSetEnableCustomCursor(enableCustomCursor) {
    obj = { enableCustomCursor: enableCustomCursor.enableCustomCursor };
    const merged = Object.assign(obj);
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
    obj = { keyboardNavigationExplainerModalSeen: true };
    const merged = Object.assign(obj);
  },
  ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function handleMessageGroupSpacingChange(messageGroupSpacing) {
    obj = { messageGroupSpacing };
    messageGroupSpacing = messageGroupSpacing.messageGroupSpacing;
    const merged = Object.assign(obj);
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
    obj = { contrast };
    contrast = contrast.contrast;
    const merged = Object.assign(obj);
  },
  ACCESSIBILITY_SET_MIN_TOAST_DURATION: function handleSetMinToastDuration(minToastDurationMs) {
    let TOAST_DURATION_DEFAULT_MS;
    obj = { minToastDurationMs: TOAST_DURATION_DEFAULT_MS };
    const merged = Object.assign(obj);
    minToastDurationMs = minToastDurationMs.minToastDurationMs;
    if (Number.isFinite(minToastDurationMs)) {
      const _Math = Math;
      const _Math2 = Math;
      TOAST_DURATION_DEFAULT_MS = Math.min(
        Math.max(minToastDurationMs, 1000 * Accessibility.TOAST_DURATION_MIN_SECONDS),
        1000 * Accessibility.TOAST_DURATION_MAX_SECONDS,
      );
    } else {
      TOAST_DURATION_DEFAULT_MS = Accessibility.TOAST_DURATION_DEFAULT_MS;
    }
  },
  ACCESSIBILITY_SET_CONTRAST_MODE: function handleSetContrastMode(contrastMode) {
    obj = { contrastMode };
    contrastMode = contrastMode.contrastMode;
    const merged = Object.assign(obj);
  },
  ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: function handleSetSwitchIconsEnabled(switchIconsEnabled) {
    obj = { switchIconsEnabled: switchIconsEnabled.switchIconsEnabled };
    const merged = Object.assign(obj);
  },
  ACCESSIBILITY_SET_CHAT_BAR_SETTINGS: function handleSetChatBarSettings(appsButtonEnabled) {
    obj = {};
    const merged = Object.assign(obj);
    let tmp2 = null != appsButtonEnabled.appsButtonEnabled;
    if (tmp2) {
      tmp2 = { appsButtonEnabled: appsButtonEnabled.appsButtonEnabled };
      obj2 = { appsButtonEnabled: appsButtonEnabled.appsButtonEnabled };
    }
    const merged1 = Object.assign(tmp2);
    let tmp4 = null != appsButtonEnabled.expressionPickerFormat;
    if (tmp4) {
      tmp4 = { expressionPickerFormat: appsButtonEnabled.expressionPickerFormat };
      obj3 = { expressionPickerFormat: appsButtonEnabled.expressionPickerFormat };
    }
    const merged2 = Object.assign(tmp4);
    let tmp6 = null != appsButtonEnabled.condensePickerWhenNarrow;
    if (tmp6) {
      tmp6 = { condensePickerWhenNarrow: appsButtonEnabled.condensePickerWhenNarrow };
      const obj4 = { condensePickerWhenNarrow: appsButtonEnabled.condensePickerWhenNarrow };
    }
    const merged3 = Object.assign(tmp6);
    let tmp8 = null != appsButtonEnabled.emojiButtonEnabled;
    if (tmp8) {
      tmp8 = { emojiButtonEnabled: appsButtonEnabled.emojiButtonEnabled };
      const obj5 = { emojiButtonEnabled: appsButtonEnabled.emojiButtonEnabled };
    }
    const merged4 = Object.assign(tmp8);
    let tmp10 = null != appsButtonEnabled.gifButtonEnabled;
    if (tmp10) {
      tmp10 = { gifButtonEnabled: appsButtonEnabled.gifButtonEnabled };
      const obj6 = { gifButtonEnabled: appsButtonEnabled.gifButtonEnabled };
    }
    const merged5 = Object.assign(tmp10);
    let tmp12 = null != appsButtonEnabled.stickerButtonEnabled;
    if (tmp12) {
      tmp12 = { stickerButtonEnabled: appsButtonEnabled.stickerButtonEnabled };
      const obj7 = { stickerButtonEnabled: appsButtonEnabled.stickerButtonEnabled };
    }
    const merged6 = Object.assign(tmp12);
  },
  ACCESSIBILITY_SET_YOU_BAR_ANIMATIONS: function handleSetYouBarAnimations(animateNameplate) {
    let str;
    let str2;
    obj = { youBarNameplateAnimation: str2, youBarAvatarDecoAnimation: str };
    const merged = Object.assign(obj);
    animateNameplate = animateNameplate.animateNameplate;
    str = "animate-always";
    str2 = "animate-always";
    if (true !== animateNameplate) {
      str2 = "animate-never";
      if (false !== animateNameplate) {
        if (undefined === animateNameplate) {
          str2 = tmp2;
        }
      }
    }
    const animateAvatarDeco = animateNameplate.animateAvatarDeco;
    if (true !== animateAvatarDeco) {
      str = "animate-never";
      if (false !== animateAvatarDeco) {
        if (undefined === animateAvatarDeco) {
          str = tmp3;
        }
      }
    }
  },
};
const accessibilityStore = new AccessibilityStore(DispatcherDefault, obj4);
const result = size.fileFinishedImporting("modules/a11y/AccessibilityStore.tsx");

export default accessibilityStore;
export const AccessibilityContrastMode = obj;
export const ExpressionPickerFormat = obj2;
