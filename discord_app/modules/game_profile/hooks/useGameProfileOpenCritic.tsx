// === Module 9374: useGameProfileOpenCritic ===

// Module 9374 (useGameProfileOpenCritic)
import util from "util" /* 1114 */;
import OpenCriticTier from "OpenCriticTier" /* 9375 */;
import _modDef9376 from "module_9376" /* 9376 */;
import _modDef9377 from "module_9377" /* 9377 */;
import _modDef9378 from "module_9378" /* 9378 */;
import _modDef9379 from "module_9379" /* 9379 */;
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
    return _modDef9376;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9377;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9378;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9379;
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