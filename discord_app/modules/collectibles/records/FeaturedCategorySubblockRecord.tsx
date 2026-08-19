// === Module 5341: fromServer ===

// Module 5341 (fromServer)
import set from "set" /* 2 */;
import FeaturedSubblockType from "FeaturedSubblockType" /* 5342 */;

let prototype;
prototype = function FeaturedCategorySubblockRecord(unpublished_at) {
  const obj = Object.create(new.target.prototype);
  obj.type = FeaturedSubblockType.FeaturedSubblockType.CATEGORY;
  ({ category_store_listing_id: tmp.categoryStoreListingId, name: tmp.name } = unpublished_at);
  let date = null;
  if (null != unpublished_at.unpublished_at) {
    const _Date = Date;
    date = new Date(unpublished_at.unpublished_at);
  }
  obj.unpublishedAt = date;
  ({ body_text: tmp.bodyText, banner_text_color: tmp.bannerTextColor, banner_url: tmp.bannerUrl, asset_url: tmp.assetUrl } = unpublished_at);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(unpublished_at) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = FeaturedSubblockType.FeaturedSubblockType.CATEGORY;
  ({ category_store_listing_id: tmp2.categoryStoreListingId, name: tmp2.name } = unpublished_at);
  let date = null;
  if (null != unpublished_at.unpublished_at) {
    const _Date = Date;
    date = new Date(unpublished_at.unpublished_at);
  }
  obj.unpublishedAt = date;
  ({ body_text: tmp2.bodyText, banner_text_color: tmp2.bannerTextColor, banner_url: tmp2.bannerUrl, asset_url: tmp2.assetUrl } = unpublished_at);
  return obj;
};
const result = set.fileFinishedImporting("modules/collectibles/records/FeaturedCategorySubblockRecord.tsx");

export const FeaturedCategorySubblockRecord = prototype;