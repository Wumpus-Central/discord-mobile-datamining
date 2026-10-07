// discord_app/modules/collectibles/records/CollectiblesMarketingRecord.tsx
import CollectiblesMarketingBadgeRecord from "CollectiblesMarketingBadgeRecord.tsx";
import CollectiblesMarketingType from "../../../../discord_common/js/shared/shared-constants/CollectiblesMarketingType.tsx";
import CollectiblesMarketingBannerRecord from "CollectiblesMarketingBannerRecord.tsx";
import CollectiblesMarketingCoachmarkRecord from "CollectiblesMarketingCoachmarkRecord.tsx";
import CollectiblesMarketingTabTooltipRecord from "CollectiblesMarketingTabTooltipRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
