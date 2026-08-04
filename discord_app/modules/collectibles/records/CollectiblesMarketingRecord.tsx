// discord_app/modules/collectibles/records/CollectiblesMarketingRecord.tsx
import { CollectiblesMarketingBadgeRecord as closure_2 } from "fromServer";
import { CollectiblesMarketingBannerRecord as closure_3 } from "fromServer";
import { CollectiblesMarketingCoachmarkRecord as closure_4 } from "fromServer";
import fromServer from "fromServer";

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
  if (typeof prototype !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.marketingsBySurfaces = Object.fromEntries(entries.map((arg0) => {
    let tmp;
    let tmp2;
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
      const items3 = [tmp, fromServer.fromServer(tmp2)];
      return items3;
    } else {
      const items4 = [tmp, undefined];
      return items4;
    }
  }));
  return obj;
};
const result = require("fromServer").fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingRecord.tsx");

export const CollectiblesMarketingsRecord = prototype;