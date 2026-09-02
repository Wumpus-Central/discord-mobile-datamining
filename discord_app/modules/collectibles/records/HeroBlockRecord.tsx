// === Module 7333: fromServer ===

// Module 7333 (fromServer)
import set from "set" /* 2 */;
import ShopBlockType from "ShopBlockType" /* 7327 */;

let prototype;
prototype = function HeroBlockRecord(unpublished_at) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.HERO;
  ({ category_sku_id: tmp.categorySkuId, name: tmp.name, summary } = unpublished_at);
  obj.summary = summary.trim();
  ({ category_store_listing_id: tmp.categoryStoreListingId, title: tmp.title, ranked_sku_ids: tmp.rankedSkuIds } = unpublished_at);
  let date = null;
  if (null != unpublished_at.unpublished_at) {
    const _Date = Date;
    date = new Date(unpublished_at.unpublished_at);
  }
  obj.unpublishedAt = date;
  ({ banner_text_color: tmp.bannerTextColor, mobile_title: tmp.mobileTitle, mobile_summary: tmp.mobileSummary, mobile_products_title: tmp.mobileProductsTitle, hero_banner_url: tmp.heroBannerUrl, hero_banner_animated_url: tmp.heroBannerAnimatedUrl, hero_rive_url: tmp.heroRiveUrl, hero_logo_url: tmp.heroLogoUrl, mobile_hero_url: tmp.mobileHeroUrl, mobile_hero_animated_url: tmp.mobileHeroAnimatedUrl } = unpublished_at);
  let tmp2Result = tmp2(7308);
  obj.bannerDisplayConfig = tmp2Result.getAssetDisplayConfig(unpublished_at.banner_display_config);
  tmp2Result = tmp2(7308);
  obj.logoDisplayConfig = tmp2Result.getAssetDisplayConfig(unpublished_at.logo_display_config);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  return new prototype(arg0);
};
const result = set.fileFinishedImporting("modules/collectibles/records/HeroBlockRecord.tsx");

export const HeroBlockRecord = prototype;