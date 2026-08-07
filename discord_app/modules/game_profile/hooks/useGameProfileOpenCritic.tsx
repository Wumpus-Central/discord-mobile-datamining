// discord_app/modules/game_profile/hooks/useGameProfileOpenCritic.tsx
import { metadata } from "../../../../discord_assets/assets/game-profile/opencritic-fair.png.js";
import { metadata } from "../../../../discord_assets/assets/game-profile/opencritic-mighty.png.js";
import { metadata } from "../../../../discord_assets/assets/game-profile/opencritic-strong.png.js";
import { metadata } from "../../../../discord_assets/assets/game-profile/opencritic-weak.png.js";
import { OpenCriticTier } from "../../../../discord_common/js/shared/shared-constants/OpenCriticTier.tsx";
const result = require("metadata").fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = tmp(1236).intl;
    return intl4.string(tmp(1236).t.aZej2g);
  } else if (tmp(9256).OpenCriticTier.STRONG === tier) {
    const intl3 = tmp(1236).intl;
    return intl3.string(tmp(1236).t.MLxnSg);
  } else if (tmp(9256).OpenCriticTier.FAIR === tier) {
    const intl2 = tmp(1236).intl;
    return intl2.string(tmp(1236).t["3f19KA"]);
  } else if (tmp(9256).OpenCriticTier.WEAK === tier) {
    const intl = tmp(1236).intl;
    return intl.string(tmp(1236).t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return metadata;
  } else if (tmp(9256).OpenCriticTier.STRONG === tier) {
    return metadata;
  } else if (tmp(9256).OpenCriticTier.FAIR === tier) {
    return metadata;
  } else if (tmp(9256).OpenCriticTier.WEAK === tier) {
    return metadata;
  }
};
export const getOpenCriticCircleRatingColor = function getOpenCriticCircleRatingColor(tier) {
  let foregroundColor = "#fc430a";
  if (OpenCriticTier.OpenCriticTier.MIGHTY !== tier) {
    foregroundColor = "#9e00b4";
    if (tmp(9256).OpenCriticTier.STRONG !== tier) {
      foregroundColor = "#4aa1ce";
      if (tmp(9256).OpenCriticTier.FAIR !== tier) {
        foregroundColor = "";
        if (tmp(9256).OpenCriticTier.WEAK === tier) {
          foregroundColor = "#80b06a";
        }
      }
    }
  }
  return { foregroundColor, backgroundColor: "#2e2e2e" };
};