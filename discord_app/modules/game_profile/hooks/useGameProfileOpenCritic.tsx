// === Module 9547: useGameProfileOpenCritic ===

// Module 9547 (useGameProfileOpenCritic)
import util from "util" /* 1113 */;
import OpenCriticTier from "OpenCriticTier" /* 9548 */;
import _modDef9549 from "module_9549" /* 9549 */;
import _modDef9550 from "module_9550" /* 9550 */;
import _modDef9551 from "module_9551" /* 9551 */;
import _modDef9552 from "module_9552" /* 9552 */;
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
    return _modDef9549;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9550;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9551;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9552;
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