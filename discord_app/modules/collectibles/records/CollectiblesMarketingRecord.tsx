// discord_app/modules/collectibles/records/CollectiblesMarketingRecord.tsx
import set from "../../../../_runtime/00002_set.js";
import fromServer from "CollectiblesMarketingBadgeRecord.tsx";
import fromServer2 from "CollectiblesMarketingBannerRecord.tsx";
import fromServer3 from "CollectiblesMarketingCoachmarkRecord.tsx";
import closure_5 from "CollectiblesMarketingTabTooltipRecord.tsx";

let closure_2 = fromServer.CollectiblesMarketingBadgeRecord;
let closure_3 = fromServer2.CollectiblesMarketingBannerRecord;
let closure_4 = fromServer3.CollectiblesMarketingCoachmarkRecord;
let prototype;
prototype = function CollectiblesMarketingsRecord(marketingsBySurfaces) {
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
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.marketingsBySurfaces = Object.fromEntries(entries.map((arg0) => {
    [tmp, tmp2] = arg0;
    let type;
    if (tmp2 != null) {
      type = tmp2.type;
    }
    if (callback(table[4]).CollectiblesMarketingType.BADGE === type) {
      const items = [tmp, closure_2.fromServer(tmp2)];
      return items;
    } else if (tmp4(tmp5[4]).CollectiblesMarketingType.BANNER === type) {
      const items1 = [tmp, closure_3.fromServer(tmp2)];
      return items1;
    } else if (tmp4(tmp5[4]).CollectiblesMarketingType.COACHMARK === type) {
      const items2 = [tmp, closure_4.fromServer(tmp2)];
      return items2;
    } else if (tmp4(tmp5[4]).CollectiblesMarketingType.TAB_TOOLTIP === type) {
      const items3 = [tmp, closure_5.fromServer(tmp2)];
      return items3;
    } else {
      const items4 = [tmp, undefined];
      return items4;
    }
  }));
  return obj;
};
const result = set.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingRecord.tsx");

export const CollectiblesMarketingsRecord = prototype;