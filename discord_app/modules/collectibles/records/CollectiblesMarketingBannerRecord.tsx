// === Module 7567: CollectiblesMarketingBannerRecord ===

// Module 7567 (CollectiblesMarketingBannerRecord)
import CollectiblesMarketingType from "CollectiblesMarketingType" /* 7566 */;
import size from "module_2" /* 2 */;

const prototype = function CollectiblesMarketingBannerRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = CollectiblesMarketingType.CollectiblesMarketingType.BANNER;
  ({ title: tmp.title, body: tmp.body, asset: tmp.asset, popout_asset: tmp.popoutAsset, version: tmp.version, revert_text_color: tmp.revertTextColor } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    obj.type = CollectiblesMarketingType.CollectiblesMarketingType.BANNER;
    ({ title: tmp3.title, body: tmp3.body, asset: tmp3.asset, popout_asset: tmp3.popoutAsset, version: tmp3.version, revert_text_color: tmp3.revertTextColor } = arg0);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingBannerRecord.tsx");

export const CollectiblesMarketingBannerRecord = prototype;