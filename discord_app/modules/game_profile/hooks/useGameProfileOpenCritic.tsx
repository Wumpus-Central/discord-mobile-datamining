// discord_app/modules/game_profile/hooks/useGameProfileOpenCritic.tsx
import set from "../../../../_runtime/00002_set.js";
import OpenCriticTier from "../../../../discord_common/js/shared/shared-constants/OpenCriticTier.tsx";
import metadataDefault from "../../../../discord_assets/assets/game-profile/opencritic-mighty.png.js";
import metadataDefault2 from "../../../../discord_assets/assets/game-profile/opencritic-strong.png.js";
import metadataDefault3 from "../../../../discord_assets/assets/game-profile/opencritic-fair.png.js";
import metadataDefault4 from "../../../../discord_assets/assets/game-profile/opencritic-weak.png.js";

const result = set.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1114).intl;
    return intl4.string(tmp(1114).t.aZej2g);
  } else if (tmp(8726).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t.MLxnSg);
  } else if (tmp(8726).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t["3f19KA"]);
  } else if (tmp(8726).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return metadataDefault;
  } else if (tmp(8726).OpenCriticTier.STRONG === tier) {
    return metadataDefault2;
  } else if (tmp(8726).OpenCriticTier.FAIR === tier) {
    return metadataDefault3;
  } else if (tmp(8726).OpenCriticTier.WEAK === tier) {
    return metadataDefault4;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(8726).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(8726).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(8726).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};
