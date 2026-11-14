// discord_app/modules/activities/DiscordEnvironment.tsx
import UserSettings from "../user_settings/UserSettings.tsx";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";
import ThemeStore from "../user_settings/ThemeStore.tsx";
import StreamerModeStore from "../../stores/StreamerModeStore.tsx";

require = fn;
function getDiscordCustomTheme() {
  if (typeof document !== "undefined") {
    const _window = window;
    if (typeof window !== "undefined") {
      const _document = document;
      const found = closure_9.filter((item) => {
        const classList = documentElement.classList;
        return classList.contains(item);
      });
      if (0 === found.length) {
        return null;
      } else {
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
        const trimmed = computedStyle.getPropertyValue("--background-gradient-chat").trim();
        if ("" !== trimmed) {
          obj["--background-gradient-chat"] = trimmed;
        }
        const obj2 = { classNames: found, variables: obj };
        return obj2;
      }
    }
  }
  return null;
}
const UIDensityConstants = fn(12851);
({
  RESPONSIVE_DENSITY_FALLBACK: hasOwnProperty,
  RESPONSIVE_DENSITY_MEDIA_QUERY: closure_6,
  resolveUIDensity: metroImportDefault,
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
  formFactor: "desktop",
  hidePersonalInformation: false,
});
let closure_9 = ["custom-theme-background", "custom-client-theme"];
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
export { getDiscordCustomTheme };
export function getDiscordUIDensity() {
  if (typeof window !== "undefined") {
    const _window2 = window;
    if (typeof window.matchMedia === "function") {
      const _window = window;
      let str = "compact";
      if (window.matchMedia(timestampProducer).matches) {
        str = "cozy";
      }
      let tmp = str;
    }
    const UIDensitySetting = UserSettings.UIDensitySetting;
    return metroImportDefault(UIDensitySetting.getSetting(), tmp);
  }
  tmp = hasOwnProperty;
}
export function getDiscordFontScale() {
  const fontScale = AccessibilityStore.fontScale;
  if (Number.isFinite(fontScale)) {
    const _Math = Math;
    let fontScale2 = Math.round(100 * fontScale) / 100;
  } else {
    fontScale2 = frozen.fontScale;
  }
  return fontScale2;
}
export function getDiscordEnvironment(useReducedMotion) {
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
    customTheme: getDiscordCustomTheme(),
    uiDensity: null,
    messageDisplayCompact: null,
    fontScale: null,
    reducedMotion: null,
    highContrast: null,
    forcedColors: null,
    underlineLinks: null,
    formFactor: "mobile",
    hidePersonalInformation: null,
  };
  if (typeof window !== "undefined") {
    const _window2 = window;
    if (typeof window.matchMedia === "function") {
      const _window = window;
      let str4 = "compact";
      if (window.matchMedia(timestampProducer).matches) {
        str4 = "cozy";
      }
      let tmp = str4;
    }
    const UIDensitySetting = UserSettings.UIDensitySetting;
    obj.uiDensity = metroImportDefault(UIDensitySetting.getSetting(), tmp);
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
    obj.hidePersonalInformation = StreamerModeStore.hidePersonalInformation;
    return obj;
  }
  tmp = hasOwnProperty;
}
export function getDiscordEnvQueryParams() {
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
    hide_personal_information: null,
  };
  if (typeof window !== "undefined") {
    const _window2 = window;
    if (typeof window.matchMedia === "function") {
      const _window = window;
      let str4 = "compact";
      if (window.matchMedia(timestampProducer).matches) {
        str4 = "cozy";
      }
      let tmp = str4;
    }
    const UIDensitySetting = UserSettings.UIDensitySetting;
    obj.ui_density = metroImportDefault(UIDensitySetting.getSetting(), tmp);
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
    const _String6 = String;
    obj.hide_personal_information = String(StreamerModeStore.hidePersonalInformation);
    return obj;
  }
  tmp = hasOwnProperty;
}
