// === Module 5828: fromServer ===

// Module 5828 (fromServer)
let prototype;
prototype = function CollectiblesMarketingBannerRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(5827) /* CollectiblesMarketingType */.CollectiblesMarketingType.BANNER;
  ({ title: tmp.title, body: tmp.body, asset: tmp.asset, popout_asset: tmp.popoutAsset, version: tmp.version, revert_text_color: tmp.revertTextColor } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = require(5827) /* CollectiblesMarketingType */.CollectiblesMarketingType.BANNER;
  ({ title: tmp2.title, body: tmp2.body, asset: tmp2.asset, popout_asset: tmp2.popoutAsset, version: tmp2.version, revert_text_color: tmp2.revertTextColor } = arg0);
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/CollectiblesMarketingBannerRecord.tsx");

export const CollectiblesMarketingBannerRecord = prototype;