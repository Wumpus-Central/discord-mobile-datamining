// === Module 9323: useGameProfileOpenCritic ===

// Module 9323 (useGameProfileOpenCritic)
import util from "util" /* 1128 */;
import OpenCriticTier from "OpenCriticTier" /* 9324 */;
import _modDef9325 from "module_9325" /* 9325 */;
import _modDef9326 from "module_9326" /* 9326 */;
import _modDef9327 from "module_9327" /* 9327 */;
import _modDef9328 from "module_9328" /* 9328 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
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
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef9325;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef9326;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef9327;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef9328;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
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
};