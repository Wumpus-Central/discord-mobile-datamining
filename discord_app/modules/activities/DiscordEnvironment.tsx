// === Module 9527: frozen ===

// Module 9527 (frozen)
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4437 */;
import closure_3 from "handleThemeChange" /* 1302 */;
import RESPONSIVE_DENSITY_MEDIA_QUERY from "RESPONSIVE_DENSITY_MEDIA_QUERY" /* 9528 */;

require = arg1;
({ RESPONSIVE_DENSITY_FALLBACK: c4, RESPONSIVE_DENSITY_MEDIA_QUERY: c5, resolveUIDensity: closure_6 } = RESPONSIVE_DENSITY_MEDIA_QUERY);
const frozen = Object.freeze({ baseTheme: "dark", customTheme: null, uiDensity: "default", messageDisplayCompact: false, fontScale: 100, reducedMotion: false, highContrast: false, forcedColors: false, underlineLinks: false });
let closure_8 = ["custom-theme-background", "custom-client-theme"];
const result = require("set").fileFinishedImporting("modules/activities/DiscordEnvironment.tsx");

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
      const found = closure_8.filter((arg0) => {
        const classList = documentElement.classList;
        return classList.contains(arg0);
      });
      if (0 === found.length) {
        return null;
      } else {
        const _window2 = window;
        const computedStyle = window.getComputedStyle(documentElement);
        let obj = {};
        for (let num = 0; num < computedStyle.length; num = num + 1) {
          let itemResult = computedStyle.item(num);
          let tmp = num;
          if (itemResult.startsWith("--custom-")) {
            let str = computedStyle.getPropertyValue(itemResult);
            obj[itemResult] = str.trim();
          }
        }
        obj = { classNames: null, variables: null };
        obj[0] = found;
        obj[1] = obj;
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
      if (window.matchMedia(closure_5).matches) {
        str = "cozy";
      }
      let tmp = str;
    }
    const UIDensitySetting = explicitContentFromProto.UIDensitySetting;
    return callback(UIDensitySetting.getSetting(), tmp);
  }
  tmp = closure_4;
};
export const getDiscordFontScale = function getDiscordFontScale() {
  const fontScale = closure_2.fontScale;
  if (Number.isFinite(fontScale)) {
    const _Math = Math;
    let fontScale2 = Math.round(100 * fontScale) / 100;
  } else {
    fontScale2 = frozen.fontScale;
  }
  return fontScale2;
};
export const getDiscordEnvironment = function getDiscordEnvironment(useReducedMotion) {
  const theme = closure_3.theme;
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
  let obj = { baseTheme: str, customTheme: null, uiDensity: null, messageDisplayCompact: null, fontScale: null, reducedMotion: null, highContrast: null, forcedColors: null, underlineLinks: null };
  let tmp = null;
  if (typeof document !== "undefined") {
    const _window2 = window;
    tmp = null;
    if (typeof window !== "undefined") {
      const _document = document;
      const found = closure_8.filter((arg0) => {
        const classList = documentElement.classList;
        return classList.contains(arg0);
      });
      tmp = null;
      if (0 !== found.length) {
        const _window3 = window;
        const computedStyle = window.getComputedStyle(documentElement);
        obj = {};
        for (let num = 0; num < computedStyle.length; num = num + 1) {
          let itemResult = computedStyle.item(num);
          let tmp2 = num;
          if (itemResult.startsWith("--custom-")) {
            let str4 = computedStyle.getPropertyValue(itemResult);
            obj[itemResult] = str4.trim();
          }
        }
        obj = { classNames: null, variables: null };
        obj[0] = found;
        obj[1] = obj;
        tmp = obj;
      }
    }
  }
  obj[1] = tmp;
  if (typeof window !== "undefined") {
    const _window4 = window;
    if (typeof window.matchMedia === "function") {
      const _window = window;
      let str5 = "compact";
      if (window.matchMedia(closure_5).matches) {
        str5 = "cozy";
      }
      let tmp3 = str5;
    }
    const UIDensitySetting = documentElement(4134).UIDensitySetting;
    obj[2] = callback(UIDensitySetting.getSetting(), tmp3);
    const MessageDisplayCompact = documentElement(4134).MessageDisplayCompact;
    obj[3] = MessageDisplayCompact.getSetting();
    const fontScale = closure_2.fontScale;
    const _Number = Number;
    if (Number.isFinite(fontScale)) {
      const _Math = Math;
      let fontScale2 = Math.round(100 * fontScale) / 100;
    } else {
      fontScale2 = frozen.fontScale;
    }
    obj[4] = fontScale2;
    obj[5] = useReducedMotion;
    ({ isHighContrastModeEnabled: obj[6], useForcedColors: obj[7], alwaysShowLinkDecorations: obj[8] } = closure_2);
    return obj;
  }
  tmp3 = closure_4;
};
export const getDiscordEnvQueryParams = function getDiscordEnvQueryParams() {
  const theme = closure_3.theme;
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
  const obj = { theme: str, ui_density: null, message_display_compact: null, font_scale: null, reduced_motion: null, high_contrast: null, forced_colors: null, underline_links: null };
  if (typeof window !== "undefined") {
    const _window2 = window;
    if (typeof window.matchMedia === "function") {
      const _window = window;
      let str4 = "compact";
      if (window.matchMedia(closure_5).matches) {
        str4 = "cozy";
      }
      let tmp = str4;
    }
    const UIDensitySetting = explicitContentFromProto.UIDensitySetting;
    obj[1] = callback(UIDensitySetting.getSetting(), tmp);
    const _String = String;
    const MessageDisplayCompact = explicitContentFromProto.MessageDisplayCompact;
    obj[2] = String(MessageDisplayCompact.getSetting());
    const fontScale = closure_2.fontScale;
    const _Number = Number;
    if (Number.isFinite(fontScale)) {
      const _Math = Math;
      let fontScale2 = Math.round(100 * fontScale) / 100;
    } else {
      fontScale2 = frozen.fontScale;
    }
    obj[3] = String(fontScale2);
    const _String2 = String;
    obj[4] = String(closure_2.useReducedMotion);
    const _String3 = String;
    obj[5] = String(closure_2.isHighContrastModeEnabled);
    const _String4 = String;
    obj[6] = String(closure_2.useForcedColors);
    const _String5 = String;
    obj[7] = String(closure_2.alwaysShowLinkDecorations);
    return obj;
  }
  tmp = closure_4;
};