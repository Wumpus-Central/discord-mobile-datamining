// === Module 7575: FeaturedCategorySubblockRecord ===

// Module 7575 (FeaturedCategorySubblockRecord)
import FeaturedSubblockType from "FeaturedSubblockType" /* 7576 */;
import size from "module_2" /* 2 */;

const prototype = function FeaturedCategorySubblockRecord(unpublished_at) {
  const obj = Object.create(new.target.prototype);
  obj.type = FeaturedSubblockType.FeaturedSubblockType.CATEGORY;
  ({ category_store_listing_id: tmp.categoryStoreListingId, category_sku_id: tmp.categorySkuId, name: tmp.name } = unpublished_at);
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
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    obj.type = FeaturedSubblockType.FeaturedSubblockType.CATEGORY;
    ({ category_store_listing_id: tmp3.categoryStoreListingId, category_sku_id: tmp3.categorySkuId, name: tmp3.name } = unpublished_at);
    let date = null;
    if (null != unpublished_at.unpublished_at) {
      const _Date = Date;
      date = new Date(unpublished_at.unpublished_at);
    }
    obj.unpublishedAt = date;
    ({ body_text: tmp3.bodyText, banner_text_color: tmp3.bannerTextColor, banner_url: tmp3.bannerUrl, asset_url: tmp3.assetUrl } = unpublished_at);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/FeaturedCategorySubblockRecord.tsx");

export const FeaturedCategorySubblockRecord = prototype;