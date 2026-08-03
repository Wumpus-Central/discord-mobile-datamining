// === Module 8698: DISPLAY_NAME_STYLES_FONT_FAMILY_MAP ===

// Module 8698 (DISPLAY_NAME_STYLES_FONT_FAMILY_MAP)
import { FLYWHEEL_FONTS } from "items3";

let obj = { [require(1888).DisplayNameFont.CHERRY_BOMB]: "Sakura-Normal", [require(1888).DisplayNameFont.CHICLE]: "Jellybean-Normal", [require(1888).DisplayNameFont.MUSEO_MODERNO]: "Modern-Medium", [require(1888).DisplayNameFont.NEO_CASTEL]: "Medieval-Normal", [require(1888).DisplayNameFont.PIXELIFY]: "8Bit-Normal", [require(1888).DisplayNameFont.SINISTRE]: "Vampyre-Normal", [require(1888).DisplayNameFont.ZILLA_SLAB]: "Tempo-SemiBold", [require(1888).DisplayNameFont.PLAYPEN_SANS]: "MonkeyBars-Bold", [require(1888).DisplayNameFont.ORBITRON]: "Mainframe-Bold", [require(1888).DisplayNameFont.NEW_ROCKER]: "Headbang-Normal", [require(1888).DisplayNameFont.KALAM]: "Journal-Bold" };
const result = require("useDisplayNameStylesEnabled").fileFinishedImporting("modules/display_name_styles/native/useDisplayNameStylesFont.tsx");

export const DISPLAY_NAME_STYLES_FONT_FAMILY_MAP = obj;
export const useDisplayNameStylesFont = function useDisplayNameStylesFont(arg0) {
  let displayNameStyles;
  let ignoreDisabledStylesSetting;
  ({ displayNameStyles, ignoreDisabledStylesSetting } = arg0);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const obj = require(4486) /* useDisplayNameStylesEnabled */;
  const displayNameStylesEnabled = obj.useDisplayNameStylesEnabled({ location: "useDisplayNameStylesFont-native" });
  require(8697) /* apexExperiment */;
  if (displayNameStylesEnabled) {
    if (null != displayNameStyles) {
      return obj[displayNameStyles.fontId];
    }
  }
};