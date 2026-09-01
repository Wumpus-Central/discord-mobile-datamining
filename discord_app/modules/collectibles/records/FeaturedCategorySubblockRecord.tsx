// discord_app/modules/collectibles/records/FeaturedCategorySubblockRecord.tsx
import set from "../../../../_runtime/00002_set.js";
import FeaturedSubblockType from "../../../../discord_common/js/shared/shared-constants/FeaturedSubblockType.tsx";

let prototype;
prototype = function FeaturedCategorySubblockRecord(unpublished_at) {
  const obj = Object.create(new.target.prototype);
  obj.type = FeaturedSubblockType.FeaturedSubblockType.CATEGORY;
  ({
    category_store_listing_id: tmp.categoryStoreListingId,
    category_sku_id: tmp.categorySkuId,
    name: tmp.name,
  } = unpublished_at);
  let date = null;
  if (null != unpublished_at.unpublished_at) {
    const _Date = Date;
    date = new Date(unpublished_at.unpublished_at);
  }
  obj.unpublishedAt = date;
  ({
    body_text: tmp.bodyText,
    banner_text_color: tmp.bannerTextColor,
    banner_url: tmp.bannerUrl,
    asset_url: tmp.assetUrl,
  } = unpublished_at);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(unpublished_at) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = FeaturedSubblockType.FeaturedSubblockType.CATEGORY;
  ({
    category_store_listing_id: tmp2.categoryStoreListingId,
    category_sku_id: tmp2.categorySkuId,
    name: tmp2.name,
  } = unpublished_at);
  let date = null;
  if (null != unpublished_at.unpublished_at) {
    const _Date = Date;
    date = new Date(unpublished_at.unpublished_at);
  }
  obj.unpublishedAt = date;
  ({
    body_text: tmp2.bodyText,
    banner_text_color: tmp2.bannerTextColor,
    banner_url: tmp2.bannerUrl,
    asset_url: tmp2.assetUrl,
  } = unpublished_at);
  return obj;
};
const result = set.fileFinishedImporting("modules/collectibles/records/FeaturedCategorySubblockRecord.tsx");

export const FeaturedCategorySubblockRecord = prototype;
