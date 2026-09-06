// discord_app/modules/activities/DiscordEnvironment.tsx
import UserSettings from "../user_settings/UserSettings.tsx";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";
import ThemeStore from "../user_settings/ThemeStore.tsx";

require = fn;
const UIDensityConstants = fn(9638);
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
const size = fn(2);
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
        const _window2 = window;
        const computedStyle = window.getComputedStyle(documentElement);
        let obj = {};
        for (let num = 0; num < computedStyle.length; num = num + 1) {
          let itemResult = computedStyle.item(num);
          if (itemResult.startsWith("--custom-")) {
            let str = computedStyle.getPropertyValue(itemResult);
            obj[itemResult] = str.trim();
          }
        }
        obj = { classNames: found, variables: null };
        obj.variables = obj;
        return obj;
      }
    }
  }
  return null;
};
export const getDiscordUIDensity = function getDiscordUIDensity() {
  if (typeof window !== "undefined") {
    const _window2 = window;
    if (typeof window.matchMedia === "function") {
      const _window = window;
      let str = "compact";
      if (window.matchMedia(hasOwnProperty).matches) {
        str = "cozy";
      }
      let tmp = str;
    }
    const UIDensitySetting = UserSettings.UIDensitySetting;
    return timestampProducer(UIDensitySetting.getSetting(), tmp);
  }
  tmp = React4;
};
export const getDiscordFontScale = function getDiscordFontScale() {
  const fontScale = AccessibilityStore.fontScale;
  if (Number.isFinite(fontScale)) {
    const _Math = Math;
    let fontScale2 = Math.round(100 * fontScale) / 100;
  } else {
    fontScale2 = frozen.fontScale;
  }
  return fontScale2;
};
export const getDiscordEnvironment = function getDiscordEnvironment(useReducedMotion) {
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
  let obj = {
    baseTheme: str,
    customTheme: null,
    uiDensity: null,
    messageDisplayCompact: null,
    fontScale: null,
    reducedMotion: null,
    highContrast: null,
    forcedColors: null,
    underlineLinks: null,
  };
  let tmp = null;
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
        const _window3 = window;
        const computedStyle = window.getComputedStyle(documentElement);
        obj = {};
        for (let num = 0; num < computedStyle.length; num = num + 1) {
          let itemResult = computedStyle.item(num);
          if (itemResult.startsWith("--custom-")) {
            let str4 = computedStyle.getPropertyValue(itemResult);
            obj[itemResult] = str4.trim();
          }
        }
        obj = { classNames: found, variables: null };
        obj.variables = obj;
        tmp = obj;
      }
    }
  }
  obj.customTheme = tmp;
  if (typeof window !== "undefined") {
    const _window4 = window;
    if (typeof window.matchMedia === "function") {
      const _window = window;
      let str5 = "compact";
      if (window.matchMedia(hasOwnProperty).matches) {
        str5 = "cozy";
      }
      let tmp3 = str5;
    }
    const UIDensitySetting = UserSettings.UIDensitySetting;
    obj.uiDensity = timestampProducer(UIDensitySetting.getSetting(), tmp3);
    const MessageDisplayCompact = UserSettings.MessageDisplayCompact;
    obj.messageDisplayCompact = MessageDisplayCompact.getSetting();
    const fontScale = AccessibilityStore.fontScale;
    const _Number = Number;
    if (Number.isFinite(fontScale)) {
      const _Math = Math;
      let fontScale2 = Math.round(100 * fontScale) / 100;
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
  tmp3 = React4;
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
    const _window2 = window;
    if (typeof window.matchMedia === "function") {
      const _window = window;
      let str4 = "compact";
      if (window.matchMedia(hasOwnProperty).matches) {
        str4 = "cozy";
      }
      let tmp = str4;
    }
    const UIDensitySetting = UserSettings.UIDensitySetting;
    obj.ui_density = timestampProducer(UIDensitySetting.getSetting(), tmp);
    const _String = String;
    const MessageDisplayCompact = UserSettings.MessageDisplayCompact;
    obj.message_display_compact = String(MessageDisplayCompact.getSetting());
    const fontScale = AccessibilityStore.fontScale;
    const _Number = Number;
    if (Number.isFinite(fontScale)) {
      const _Math = Math;
      let fontScale2 = Math.round(100 * fontScale) / 100;
    } else {
      fontScale2 = frozen.fontScale;
    }
    obj.font_scale = String(fontScale2);
    const _String2 = String;
    obj.reduced_motion = String(AccessibilityStore.useReducedMotion);
    const _String3 = String;
    obj.high_contrast = String(AccessibilityStore.isHighContrastModeEnabled);
    const _String4 = String;
    obj.forced_colors = String(AccessibilityStore.useForcedColors);
    const _String5 = String;
    obj.underline_links = String(AccessibilityStore.alwaysShowLinkDecorations);
    return obj;
  }
  tmp = React4;
};
