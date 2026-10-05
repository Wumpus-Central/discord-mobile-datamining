// discord_app/modules/collectibles/records/CollectiblesMarketingRecord.tsx
import CollectiblesMarketingBadgeRecord from "CollectiblesMarketingBadgeRecord.tsx";
import CollectiblesMarketingType from "../../../../discord_common/js/shared/shared-constants/CollectiblesMarketingType.tsx";
import CollectiblesMarketingBannerRecord from "CollectiblesMarketingBannerRecord.tsx";
import CollectiblesMarketingCoachmarkRecord from "CollectiblesMarketingCoachmarkRecord.tsx";
import CollectiblesMarketingTabTooltipRecord from "CollectiblesMarketingTabTooltipRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let marketings;

let closure_2 = CollectiblesMarketingBadgeRecord.CollectiblesMarketingBadgeRecord;
let closure_3 = CollectiblesMarketingBannerRecord.CollectiblesMarketingBannerRecord;
let closure_4 = CollectiblesMarketingCoachmarkRecord.CollectiblesMarketingCoachmarkRecord;
class CollectiblesMarketingsRecord {
  constructor(marketingsBySurfaces) {
    const obj = Object.create(new.target.prototype);
    obj.marketingsBySurfaces = marketingsBySurfaces;
    return obj;
  }
  static fromServer(marketings) {
    marketings = undefined;
    const _Object = Object;
    if (marketings != null) {
      marketings = marketings.marketings;
    }
    if (marketings == null) {
      marketings = {};
    }
    const entries1 = entries(marketings);
    if (typeof CollectiblesMarketingsRecord === "function") {
      const obj = Object.create(CollectiblesMarketingsRecord.prototype);
      obj.marketingsBySurfaces = tmp3;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingRecord.tsx");

export { CollectiblesMarketingsRecord };
