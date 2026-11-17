// === Module 10450: useGameProfileOpenCritic ===

// Module 10450 (useGameProfileOpenCritic)
import util from "util" /* 1113 */;
import OpenCriticTier from "OpenCriticTier" /* 10451 */;
import _modDef10452 from "module_10452" /* 10452 */;
import _modDef10453 from "module_10453" /* 10453 */;
import _modDef10454 from "module_10454" /* 10454 */;
import _modDef10455 from "module_10455" /* 10455 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = util.intl;
    return intl4.string(util.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = util.intl;
    return intl3.string(util.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = util.intl;
    return intl2.string(util.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = util.intl;
    return intl.string(util.t.jtVgSh);
  }
}
export function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef10452;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef10453;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef10454;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef10455;
  }
}
export function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (OpenCriticTier.OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (OpenCriticTier.OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
}