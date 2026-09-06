// === Module 9176: useDisplayNameStylesFont ===

// Module 9176 (useDisplayNameStylesFont)
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1389 */;
import DisplayNameFont from "DisplayNameFont" /* 1391 */;
import useDisplayNameStylesEnabled from "useDisplayNameStylesEnabled" /* 4795 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 9177 */;
import size from "module_2" /* 2 */;

const FLYWHEEL_FONTS = DisplayNameStylesConstants.FLYWHEEL_FONTS;
const DISPLAY_NAME_STYLES_FONT_FAMILY_MAP = { [DisplayNameFont.DisplayNameFont.CHERRY_BOMB]: "Sakura-Normal", [DisplayNameFont.DisplayNameFont.CHICLE]: "Jellybean-Normal", [DisplayNameFont.DisplayNameFont.MUSEO_MODERNO]: "Modern-Medium", [DisplayNameFont.DisplayNameFont.NEO_CASTEL]: "Medieval-Normal", [DisplayNameFont.DisplayNameFont.PIXELIFY]: "8Bit-Normal", [DisplayNameFont.DisplayNameFont.SINISTRE]: "Vampyre-Normal", [DisplayNameFont.DisplayNameFont.ZILLA_SLAB]: "Tempo-SemiBold", [DisplayNameFont.DisplayNameFont.PLAYPEN_SANS]: "MonkeyBars-Bold", [DisplayNameFont.DisplayNameFont.ORBITRON]: "Mainframe-Bold", [DisplayNameFont.DisplayNameFont.NEW_ROCKER]: "Headbang-Normal", [DisplayNameFont.DisplayNameFont.KALAM]: "Journal-Bold" };
const result = size.fileFinishedImporting("modules/display_name_styles/native/useDisplayNameStylesFont.tsx");

export { DISPLAY_NAME_STYLES_FONT_FAMILY_MAP };
export const useDisplayNameStylesFont = function useDisplayNameStylesFont(arg0) {
  ({ displayNameStyles, ignoreDisabledStylesSetting } = arg0);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const obj = useDisplayNameStylesEnabled;
  const displayNameStylesEnabled = obj.useDisplayNameStylesEnabled({ location: "useDisplayNameStylesFont-native" });
  DisplayNameStylesFlywheelExperiment;
  if (displayNameStylesEnabled) {
    if (null != displayNameStyles) {
      return obj[displayNameStyles.fontId];
    }
  }
};