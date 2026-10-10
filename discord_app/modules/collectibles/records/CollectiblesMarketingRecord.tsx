// === Module 7285: CollectiblesMarketingRecord ===

// Module 7285 (CollectiblesMarketingRecord)
import CollectiblesMarketingBadgeRecord from "CollectiblesMarketingBadgeRecord" /* 7286 */;
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7287 */;
import CollectiblesMarketingBannerRecord from "CollectiblesMarketingBannerRecord" /* 7288 */;
import CollectiblesMarketingCoachmarkRecord from "CollectiblesMarketingCoachmarkRecord" /* 7289 */;
import CollectiblesMarketingTabTooltipRecord from "CollectiblesMarketingTabTooltipRecord" /* 7290 */;
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
export const rehydratePersistedMarketings = function rehydratePersistedMarketings(arg0) {
  const entries = Object.entries(arg0);
  if (typeof prototype === "function") {
    const obj = Object.create(prototype.prototype);
    obj.marketingsBySurfaces = tmp3;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};