// === Module 9475: useGameProfileOpenCritic ===

// Module 9475 (useGameProfileOpenCritic)
import util from "util" /* 1113 */;
import OpenCriticTier from "OpenCriticTier" /* 9476 */;
import _modDef9477 from "module_9477" /* 9477 */;
import _modDef9478 from "module_9478" /* 9478 */;
import _modDef9479 from "module_9479" /* 9479 */;
import _modDef9480 from "module_9480" /* 9480 */;
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
    return _modDef9477;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9478;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9479;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9480;
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