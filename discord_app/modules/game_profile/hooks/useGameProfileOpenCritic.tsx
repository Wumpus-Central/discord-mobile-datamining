// discord_app/modules/game_profile/hooks/useGameProfileOpenCritic.tsx
import util from "../../../intl/index.native.tsx";
import OpenCriticTier from "../../../../discord_common/js/shared/shared-constants/OpenCriticTier.tsx";
import _modDef8727 from "../../../../discord_assets/assets/game-profile/opencritic-mighty.png.js";
import _modDef8728 from "../../../../discord_assets/assets/game-profile/opencritic-strong.png.js";
import _modDef8729 from "../../../../discord_assets/assets/game-profile/opencritic-fair.png.js";
import _modDef8730 from "../../../../discord_assets/assets/game-profile/opencritic-weak.png.js";
import size from "../../../../_runtime/metro/00002__.js";

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
    return _modDef8727;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef8728;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef8729;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef8730;
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
