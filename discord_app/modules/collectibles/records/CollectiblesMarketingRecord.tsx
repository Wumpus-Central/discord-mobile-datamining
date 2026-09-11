// === Module 7636: CollectiblesMarketingRecord ===

// Module 7636 (CollectiblesMarketingRecord)
import CollectiblesMarketingBadgeRecord from "CollectiblesMarketingBadgeRecord" /* 7637 */;
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7638 */;
import CollectiblesMarketingBannerRecord from "CollectiblesMarketingBannerRecord" /* 7639 */;
import CollectiblesMarketingCoachmarkRecord from "CollectiblesMarketingCoachmarkRecord" /* 7640 */;
import CollectiblesMarketingTabTooltipRecord from "CollectiblesMarketingTabTooltipRecord" /* 7641 */;
import size from "module_2" /* 2 */;

let closure_2 = CollectiblesMarketingBadgeRecord.CollectiblesMarketingBadgeRecord;
let closure_3 = CollectiblesMarketingBannerRecord.CollectiblesMarketingBannerRecord;
let closure_4 = CollectiblesMarketingCoachmarkRecord.CollectiblesMarketingCoachmarkRecord;
const prototype = function CollectiblesMarketingsRecord(marketingsBySurfaces) {
  const obj = Object.create(new.target.prototype);
  obj.marketingsBySurfaces = marketingsBySurfaces;
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(marketings) {
  marketings = undefined;
  if (marketings != null) {
    marketings = marketings.marketings;
  }
  if (marketings == null) {
    marketings = {};
  }
  const entries = Object.entries(marketings);
  if (typeof prototype === "function") {
    const obj = Object.create(prototype.prototype);
    obj.marketingsBySurfaces = tmp3;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingRecord.tsx");

export const CollectiblesMarketingsRecord = prototype;