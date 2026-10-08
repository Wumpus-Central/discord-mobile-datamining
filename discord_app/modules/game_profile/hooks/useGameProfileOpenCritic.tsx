// === Module 8907: useGameProfileOpenCritic ===

// Module 8907 (useGameProfileOpenCritic)
import util from "util" /* 1126 */;
import OpenCriticTier from "OpenCriticTier" /* 8908 */;
import _modDef8909 from "module_8909" /* 8909 */;
import _modDef8910 from "module_8910" /* 8910 */;
import _modDef8911 from "module_8911" /* 8911 */;
import _modDef8912 from "module_8912" /* 8912 */;
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
    return _modDef8909;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef8910;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef8911;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef8912;
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