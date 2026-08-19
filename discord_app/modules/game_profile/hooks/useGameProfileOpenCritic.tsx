// discord_app/modules/game_profile/hooks/useGameProfileOpenCritic.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import OpenCriticTier from "../../../../discord_common/js/shared/shared-constants/OpenCriticTier.tsx";
import metadataDefault from "../../../../discord_assets/assets/game-profile/opencritic-mighty.png.js";
import metadataDefault2 from "../../../../discord_assets/assets/game-profile/opencritic-strong.png.js";
import metadataDefault3 from "../../../../discord_assets/assets/game-profile/opencritic-fair.png.js";
import metadataDefault4 from "../../../../discord_assets/assets/game-profile/opencritic-weak.png.js";

const result = obj132.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return metadataDefault;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return metadataDefault2;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return metadataDefault3;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return metadataDefault4;
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