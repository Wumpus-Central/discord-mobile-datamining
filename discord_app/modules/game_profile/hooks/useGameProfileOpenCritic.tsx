// discord_app/modules/game_profile/hooks/useGameProfileOpenCritic.tsx
import intl5 from "../../../intl/index.native.tsx";
import OpenCriticTier from "../../../../discord_common/js/shared/shared-constants/OpenCriticTier.tsx";
import _modDef8412 from "../../../../discord_assets/assets/game-profile/opencritic-mighty.png.js";
import _modDef8413 from "../../../../discord_assets/assets/game-profile/opencritic-strong.png.js";
import _modDef8414 from "../../../../discord_assets/assets/game-profile/opencritic-fair.png.js";
import _modDef8415 from "../../../../discord_assets/assets/game-profile/opencritic-weak.png.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileOpenCritic.tsx");

export const getOpenCriticTierText = function getOpenCriticTierText(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    const intl4 = intl5.intl;
    return intl4.string(intl5.t.aZej2g);
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    const intl3 = intl5.intl;
    return intl3.string(intl5.t.MLxnSg);
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    const intl2 = intl5.intl;
    return intl2.string(intl5.t["3f19KA"]);
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    const intl = intl5.intl;
    return intl.string(intl5.t.jtVgSh);
  }
};
export const getOpenCriticTierImage = function getOpenCriticTierImage(tier) {
  if (OpenCriticTier.OpenCriticTier.MIGHTY === tier) {
    return _modDef8412;
  } else if (OpenCriticTier.OpenCriticTier.STRONG === tier) {
    return _modDef8413;
  } else if (OpenCriticTier.OpenCriticTier.FAIR === tier) {
    return _modDef8414;
  } else if (OpenCriticTier.OpenCriticTier.WEAK === tier) {
    return _modDef8415;
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
