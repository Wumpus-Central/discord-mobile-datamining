// discord_app/modules/activities/DiscordEnvironment.tsx
import UserSettings from "../user_settings/UserSettings.tsx";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";
import ThemeStore from "../user_settings/ThemeStore.tsx";
import UIDensityConstants from "../themes/UIDensityConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroRequire;
({
  RESPONSIVE_DENSITY_FALLBACK: closure_4,
  RESPONSIVE_DENSITY_MEDIA_QUERY: hasOwnProperty,
  resolveUIDensity: metroRequire,
} = UIDensityConstants);
const frozen = Object.freeze({
  baseTheme: "dark",
  customTheme: null,
  uiDensity: "default",
  messageDisplayCompact: false,
  fontScale: 100,
  reducedMotion: false,
  highContrast: false,
  forcedColors: false,
  underlineLinks: false,
});
let closure_8 = ["custom-theme-background", "custom-client-theme"];
const result = size.fileFinishedImporting("modules/activities/DiscordEnvironment.tsx");

export const DEFAULT_DISCORD_ENVIRONMENT = frozen;
export function getDiscordBaseTheme(arg0) {
  if ("light" !== arg0) {
    if ("midnight" !== arg0) {
      if ("darker" !== arg0) {
        return "dark";
      }
    }
  }
  return arg0;
}
export const getDiscordCustomTheme = function getDiscordCustomTheme() {
  if (typeof document !== "undefined") {
    const _window = window;
    if (typeof window !== "undefined") {
      const _document = document;
      const found = closure_8.filter((item) => {
        const classList = documentElement.classList;
        return classList.contains(item);
      });
      if (0 === found.length) {
        return null;
      } else {
        let num;
        const _window2 = window;
        const computedStyle = window.getComputedStyle(documentElement);
        const obj = {};
        for (let num = 0; num < computedStyle.length; num = num + 1) {
          let itemResult = computedStyle.item(num);
          if (itemResult.startsWith("--custom-")) {
            let str = computedStyle.getPropertyValue(itemResult);
            obj[itemResult] = str.trim();
          }
        }
        return { classNames: found, variables: obj };
      }
    }
  }
  return null;
};
export const getDiscordUIDensity = function getDiscordUIDensity() {
  if (typeof window !== "undefined") {
    let tmp;
    const _window2 = window;
    if (typeof window.matchMedia === "function") {
      const _window = window;
      let str = "compact";
      if (window.matchMedia(hasOwnProperty).matches) {
        str = "cozy";
      }
      tmp = str;
    }
    const UIDensitySetting = UserSettings.UIDensitySetting;
    return metroRequire(UIDensitySetting.getSetting(), tmp);
  }
  tmp = React3;
};
export const getDiscordFontScale = function getDiscordFontScale() {
  let fontScale2;
  const fontScale = AccessibilityStore.fontScale;
  if (Number.isFinite(fontScale)) {
    const _Math = Math;
    fontScale2 = Math.round(100 * fontScale) / 100;
  } else {
    fontScale2 = frozen.fontScale;
  }
  return fontScale2;
};
export const getDiscordEnvironment = function getDiscordEnvironment(useReducedMotion) {
  let tmp;
  const theme = ThemeStore.theme;
  let str = theme;
  if ("light" !== theme) {
    str = theme;
    if ("midnight" !== theme) {
      str = theme;
      if ("darker" !== theme) {
        str = "dark";
      }
    }
  }
  const obj = {
    baseTheme: str,
    customTheme: tmp,
    uiDensity: null,
    messageDisplayCompact: null,
    fontScale: null,
    reducedMotion: null,
    highContrast: null,
    forcedColors: null,
    underlineLinks: null,
  };
  tmp = null;
  if (typeof document !== "undefined") {
    const _window2 = window;
    tmp = null;
    if (typeof window !== "undefined") {
      const _document = document;
      const found = closure_8.filter((item) => {
        const classList = documentElement.classList;
        return classList.contains(item);
      });
      tmp = null;
      if (0 !== found.length) {
        let num;
        const _window3 = window;
        const computedStyle = window.getComputedStyle(documentElement);
        const obj2 = {};
        for (let num = 0; num < computedStyle.length; num = num + 1) {
          let itemResult = computedStyle.item(num);
          if (itemResult.startsWith("--custom-")) {
            let str4 = computedStyle.getPropertyValue(itemResult);
            obj2[itemResult] = str4.trim();
          }
        }
        tmp = { classNames: found, variables: obj2 };
        const obj3 = { classNames: found, variables: obj2 };
      }
    }
  }
  if (typeof window !== "undefined") {
    let tmp3;
    let fontScale2;
    const _window4 = window;
    if (typeof window.matchMedia === "function") {
      const _window = window;
      let str5 = "compact";
      if (window.matchMedia(hasOwnProperty).matches) {
        str5 = "cozy";
      }
      tmp3 = str5;
    }
    const UIDensitySetting = UserSettings.UIDensitySetting;
    obj.uiDensity = metroRequire(UIDensitySetting.getSetting(), tmp3);
    const MessageDisplayCompact = UserSettings.MessageDisplayCompact;
    obj.messageDisplayCompact = MessageDisplayCompact.getSetting();
    const fontScale = AccessibilityStore.fontScale;
    const _Number = Number;
    if (Number.isFinite(fontScale)) {
      const _Math = Math;
      fontScale2 = Math.round(100 * fontScale) / 100;
    } else {
      fontScale2 = frozen.fontScale;
    }
    obj.fontScale = fontScale2;
    obj.reducedMotion = useReducedMotion;
    ({
      isHighContrastModeEnabled: obj.highContrast,
      useForcedColors: obj.forcedColors,
      alwaysShowLinkDecorations: obj.underlineLinks,
    } = AccessibilityStore);
    return obj;
  }
  tmp3 = React3;
};
export const getDiscordEnvQueryParams = function getDiscordEnvQueryParams() {
  const theme = ThemeStore.theme;
  let str = theme;
  if ("light" !== theme) {
    str = theme;
    if ("midnight" !== theme) {
      str = theme;
      if ("darker" !== theme) {
        str = "dark";
      }
    }
  }
  const obj = {
    theme: str,
    ui_density: null,
    message_display_compact: null,
    font_scale: null,
    reduced_motion: null,
    high_contrast: null,
    forced_colors: null,
    underline_links: null,
  };
  if (typeof window !== "undefined") {
    let tmp;
    let fontScale2;
    const _window2 = window;
    if (typeof window.matchMedia === "function") {
      const _window = window;
      let str4 = "compact";
      if (window.matchMedia(hasOwnProperty).matches) {
        str4 = "cozy";
      }
      tmp = str4;
    }
    const UIDensitySetting = UserSettings.UIDensitySetting;
    obj.ui_density = metroRequire(UIDensitySetting.getSetting(), tmp);
    const _String = String;
    const MessageDisplayCompact = UserSettings.MessageDisplayCompact;
    obj.message_display_compact = String(MessageDisplayCompact.getSetting());
    const fontScale = AccessibilityStore.fontScale;
    const _Number = Number;
    const _String2 = String;
    if (Number.isFinite(fontScale)) {
      const _Math = Math;
      fontScale2 = Math.round(100 * fontScale) / 100;
    } else {
      fontScale2 = frozen.fontScale;
    }
    obj.font_scale = _String2(fontScale2);
    const _String3 = String;
    obj.reduced_motion = String(AccessibilityStore.useReducedMotion);
    const _String4 = String;
    obj.high_contrast = String(AccessibilityStore.isHighContrastModeEnabled);
    const _String5 = String;
    obj.forced_colors = String(AccessibilityStore.useForcedColors);
    const _String6 = String;
    obj.underline_links = String(AccessibilityStore.alwaysShowLinkDecorations);
    return obj;
  }
  tmp = React3;
};
