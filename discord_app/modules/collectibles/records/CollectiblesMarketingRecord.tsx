// === Module 5330: fromServer ===

// Module 5330 (fromServer)
import obj132 from "obj132" /* 2 */;
import fromServer from "fromServer" /* 5331 */;
import fromServer2 from "fromServer" /* 5333 */;
import fromServer3 from "fromServer" /* 5334 */;
import fromServer4 from "fromServer" /* 5335 */;

let closure_2 = fromServer.CollectiblesMarketingBadgeRecord;
let closure_3 = fromServer2.CollectiblesMarketingBannerRecord;
let closure_4 = fromServer3.CollectiblesMarketingCoachmarkRecord;
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
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.marketingsBySurfaces = Object.fromEntries(entries.map((item, index) => {
    [tmp, tmp2] = item;
    let type;
    if (tmp2 != null) {
      type = tmp2.type;
    }
    if (callback(table[4]).CollectiblesMarketingType.BADGE === type) {
      const items = [tmp, closure_2.fromServer(tmp2)];
      return items;
    } else if (callback(table[4]).CollectiblesMarketingType.BANNER === type) {
      const items1 = [tmp, closure_3.fromServer(tmp2)];
      return items1;
    } else if (callback(table[4]).CollectiblesMarketingType.COACHMARK === type) {
      const items2 = [tmp, closure_4.fromServer(tmp2)];
      return items2;
    } else if (callback(table[4]).CollectiblesMarketingType.TAB_TOOLTIP === type) {
      const items3 = [tmp, closure_5.fromServer(tmp2)];
      return items3;
    } else {
      const items4 = [tmp, undefined];
      return items4;
    }
  }));
  return obj;
};
const result = obj132.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingRecord.tsx");

export const CollectiblesMarketingsRecord = prototype;