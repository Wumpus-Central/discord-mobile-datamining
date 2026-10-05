// === Module 2027: GameDetectionTypes ===

// Module 2027 (GameDetectionTypes)
import ApplicationRecord from "ApplicationRecord" /* 2009 */;
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

const createExecutable = ApplicationRecord.createExecutable;
const result = size.fileFinishedImporting("modules/game_detection/GameDetectionTypes.tsx");
class DetectableGameRecord extends Record {
  constructor(aliases) {
    let executables;
    const tmp3 = new DetectableGameRecord(tmp2, new.target, this, tmp);
    ({ id: tmp3.id, name: tmp3.name, description: tmp3.description, icon: tmp3.icon, icon_hash: tmp3.icon_hash } = aliases);
    tmp3.aliases = aliases.aliases || [];
    ({ cover_image_hash: tmp3.cover_image_hash, executables } = aliases);
    if (executables == null) {
      executables = [];
    }
    tmp3.executables = executables.map(createExecutable);
    tmp3.overlay = aliases.overlay || false;
    tmp3.overlayWarn = aliases.overlayWarn || false;
    tmp3.overlayCompatibilityHook = aliases.overlayCompatibilityHook || false;
    tmp3.hook = aliases.hook || false;
    tmp3.supportsOutOfProcessOverlay = aliases.supportsOutOfProcessOverlay || false;
    tmp3.thirdPartySkus = aliases.thirdPartySkus || [];
    tmp3.themes = aliases.themes || [];
    tmp3.content_classification = aliases.content_classification;
    return tmp3;
  }
  getIconURL(arg0) {
    let icon;
    let id;
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
  }
  hasTheme(arg0) {
    const themes = this.themes;
    return themes.includes(arg0);
  }
}
const prototype = DetectableGameRecord.prototype;

export const GameTheme = { EROTIC: "Erotic" };
export { DetectableGameRecord };
export const SteamReviewScoreDescription = { NO_USER_REVIEWS: 0, [0]: "NO_USER_REVIEWS", OVERWHELMINGLY_POSITIVE: 1, [1]: "OVERWHELMINGLY_POSITIVE", VERY_POSITIVE: 2, [2]: "VERY_POSITIVE", POSITIVE: 3, [3]: "POSITIVE", MOSTLY_POSITIVE: 4, [4]: "MOSTLY_POSITIVE", MIXED: 5, [5]: "MIXED", MOSTLY_NEGATIVE: 6, [6]: "MOSTLY_NEGATIVE", NEGATIVE: 7, [7]: "NEGATIVE", VERY_NEGATIVE: 8, [8]: "VERY_NEGATIVE", OVERWHELMINGLY_NEGATIVE: 9, [9]: "OVERWHELMINGLY_NEGATIVE" };