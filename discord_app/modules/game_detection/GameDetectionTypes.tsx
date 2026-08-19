// === Module 4511: GameTheme ===

// Module 4511 (GameTheme)
import toJSDefault from "toJS" /* 1931 */;
import { createExecutable } from "createExecutable" /* 4479 */;

toJSDefault;
const result = require("obj132").fileFinishedImporting("modules/game_detection/GameDetectionTypes.tsx");
class DetectableGameRecord extends tmp2 {
  constructor(arg0) {
    tmp3 = new DetectableGameRecord(tmp2, new.target, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp3.id, name: tmp3.name, description: tmp3.description, icon: tmp3.icon, icon_hash: tmp3.icon_hash } = global);
    tmp3.aliases = global.aliases || [];
    ({ cover_image_hash: tmp3.cover_image_hash, executables } = global);
    if (executables == null) {
      executables = [];
    }
    tmp3.executables = executables.map(createExecutable);
    tmp3.overlay = global.overlay || false;
    tmp3.overlayWarn = global.overlayWarn || false;
    tmp3.overlayCompatibilityHook = global.overlayCompatibilityHook || false;
    tmp3.hook = global.hook || false;
    tmp3.supportsOutOfProcessOverlay = global.supportsOutOfProcessOverlay || false;
    tmp3.thirdPartySkus = global.thirdPartySkus || [];
    tmp3.themes = global.themes || [];
    tmp3.content_classification = global.content_classification;
    return tmp3;
  }
}
const prototype = DetectableGameRecord.prototype;
prototype["getIconURL"] = function getIconURL(arg0) {
  let combined = null;
  if (null != this.icon) {
    ({ id, icon } = this);
    let str = "";
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      str = "?size=" + arg0;
    }
    const _HermesInternal2 = HermesInternal;
    combined = "https://cdn.discordapp.com/app-icons/" + id + "/" + icon + ".png" + str;
  }
  return combined;
};
prototype["hasTheme"] = function hasTheme(arg0) {
  const themes = this.themes;
  return themes.includes(arg0);
};

export const GameTheme = { EROTIC: "Erotic" };
export { DetectableGameRecord };
export const GameDetectionDebugLevel = { NONE: 0, [0]: "NONE", WINDOWED_ONLY: 1, [1]: "WINDOWED_ONLY", ALL: 2, [2]: "ALL" };
export const SteamReviewScoreDescription = { NO_USER_REVIEWS: 0, [0]: "NO_USER_REVIEWS", OVERWHELMINGLY_POSITIVE: 1, [1]: "OVERWHELMINGLY_POSITIVE", VERY_POSITIVE: 2, [2]: "VERY_POSITIVE", POSITIVE: 3, [3]: "POSITIVE", MOSTLY_POSITIVE: 4, [4]: "MOSTLY_POSITIVE", MIXED: 5, [5]: "MIXED", MOSTLY_NEGATIVE: 6, [6]: "MOSTLY_NEGATIVE", NEGATIVE: 7, [7]: "NEGATIVE", VERY_NEGATIVE: 8, [8]: "VERY_NEGATIVE", OVERWHELMINGLY_NEGATIVE: 9, [9]: "OVERWHELMINGLY_NEGATIVE" };