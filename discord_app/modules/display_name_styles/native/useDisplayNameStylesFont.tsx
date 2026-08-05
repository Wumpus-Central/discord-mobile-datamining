// discord_app/modules/display_name_styles/native/useDisplayNameStylesFont.tsx
import { FLYWHEEL_FONTS } from "items3";

let obj = { [require("../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx").DisplayNameFont.CHERRY_BOMB]: "Sakura-Normal", [require("../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx").DisplayNameFont.CHICLE]: "Jellybean-Normal", [require("../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx").DisplayNameFont.MUSEO_MODERNO]: "Modern-Medium", [require("../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx").DisplayNameFont.NEO_CASTEL]: "Medieval-Normal", [require("../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx").DisplayNameFont.PIXELIFY]: "8Bit-Normal", [require("../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx").DisplayNameFont.SINISTRE]: "Vampyre-Normal", [require("../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx").DisplayNameFont.ZILLA_SLAB]: "Tempo-SemiBold", [require("../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx").DisplayNameFont.PLAYPEN_SANS]: "MonkeyBars-Bold", [require("../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx").DisplayNameFont.ORBITRON]: "Mainframe-Bold", [require("../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx").DisplayNameFont.NEW_ROCKER]: "Headbang-Normal", [require("../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx").DisplayNameFont.KALAM]: "Journal-Bold" };
const result = require("useDisplayNameStylesEnabled").fileFinishedImporting("modules/display_name_styles/native/useDisplayNameStylesFont.tsx");

export const DISPLAY_NAME_STYLES_FONT_FAMILY_MAP = obj;
export const useDisplayNameStylesFont = function useDisplayNameStylesFont(arg0) {
  let displayNameStyles;
  let ignoreDisabledStylesSetting;
  ({ displayNameStyles, ignoreDisabledStylesSetting } = arg0);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  const obj = require("../hooks/useDisplayNameStylesEnabled.tsx") /* useDisplayNameStylesEnabled */;
  const displayNameStylesEnabled = obj.useDisplayNameStylesEnabled({ location: "useDisplayNameStylesFont-native" });
  require("../DisplayNameStylesFlywheelExperiment.tsx") /* apexExperiment */;
  if (displayNameStylesEnabled) {
    if (null != displayNameStyles) {
      return obj[displayNameStyles.fontId];
    }
  }
};