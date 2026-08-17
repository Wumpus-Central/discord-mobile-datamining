// discord_app/modules/display_name_styles/native/useDisplayNameStylesFont.tsx
import set from "../../../../_runtime/00002_set.js";
import items3 from "../DisplayNameStylesConstants.tsx";
import DisplayNameFont from "../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx";
import useDisplayNameStylesEnabled from "../hooks/useDisplayNameStylesEnabled.tsx";
import apexExperiment from "../DisplayNameStylesFlywheelExperiment.tsx";

const FLYWHEEL_FONTS = items3.FLYWHEEL_FONTS;
let obj = { [DisplayNameFont.DisplayNameFont.CHERRY_BOMB]: "Sakura-Normal", [DisplayNameFont.DisplayNameFont.CHICLE]: "Jellybean-Normal", [DisplayNameFont.DisplayNameFont.MUSEO_MODERNO]: "Modern-Medium", [DisplayNameFont.DisplayNameFont.NEO_CASTEL]: "Medieval-Normal", [DisplayNameFont.DisplayNameFont.PIXELIFY]: "8Bit-Normal", [DisplayNameFont.DisplayNameFont.SINISTRE]: "Vampyre-Normal", [DisplayNameFont.DisplayNameFont.ZILLA_SLAB]: "Tempo-SemiBold", [DisplayNameFont.DisplayNameFont.PLAYPEN_SANS]: "MonkeyBars-Bold", [DisplayNameFont.DisplayNameFont.ORBITRON]: "Mainframe-Bold", [DisplayNameFont.DisplayNameFont.NEW_ROCKER]: "Headbang-Normal", [DisplayNameFont.DisplayNameFont.KALAM]: "Journal-Bold" };
const result = set.fileFinishedImporting("modules/display_name_styles/native/useDisplayNameStylesFont.tsx");

export const DISPLAY_NAME_STYLES_FONT_FAMILY_MAP = obj;
export const useDisplayNameStylesFont = function useDisplayNameStylesFont(arg0) {
  ({ displayNameStyles, ignoreDisabledStylesSetting } = arg0);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  obj = useDisplayNameStylesEnabled;
  const displayNameStylesEnabled = obj.useDisplayNameStylesEnabled({ location: "useDisplayNameStylesFont-native" });
  apexExperiment;
  if (displayNameStylesEnabled) {
    if (null != displayNameStyles) {
      return obj[displayNameStyles.fontId];
    }
  }
};