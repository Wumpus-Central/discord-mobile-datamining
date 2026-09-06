// === Module 7543: CollectiblesCategoryRecord ===

// Module 7543 (CollectiblesCategoryRecord)
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7553 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7554 */;
import CollectiblesProductRecord from "CollectiblesProductRecord" /* 7544 */;
import CollectiblesStoreListingRecord from "CollectiblesStoreListingRecord" /* 7551 */;

require = fn;
const prototype = function CollectiblesCategoryRecord(products) {
  const tmp4 = new prototype(products, tmp3, tmp2, tmp);
  ({ products: tmp4.products, heroRanking: tmp4.heroRanking, unpublishedAt: tmp4.unpublishedAt, isOrbsExclusive } = products);
  if (isOrbsExclusive == null) {
    const _Array = Array;
    let isArray = Array.isArray(products.products);
    if (isArray) {
      isArray = products.products.length > 0;
    }
    if (isArray) {
      products = products.products;
      isArray = undefined === products.find((item) => !CollectiblesProductUtils.isOrbsExclusiveProduct(item));
    }
    isOrbsExclusive = isArray;
  }
  tmp4.isOrbsExclusive = isOrbsExclusive;
  ({ heroBannerUrl: tmp4.heroBannerUrl, heroBannerAnimatedUrl: tmp4.heroBannerAnimatedUrl, heroRiveUrl: tmp4.heroRiveUrl, heroLogoUrl: tmp4.heroLogoUrl, catalogBannerUrl: tmp4.catalogBannerUrl, catalogBannerAnimatedUrl: tmp4.catalogBannerAnimatedUrl, catalogBannerRiveUrl: tmp4.catalogBannerRiveUrl, featuredBlockUrl: tmp4.featuredBlockUrl, logoUrl: tmp4.logoUrl, pdpBgUrl: tmp4.pdpBgUrl, mobileBannerUrl: tmp4.mobileBannerUrl, mobileBgUrl: tmp4.mobileBgUrl, heroLogoDisplayConfig: tmp4.heroLogoDisplayConfig, heroBannerDisplayConfig: tmp4.heroBannerDisplayConfig } = products);
  return tmp4;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  ({ products, unpublished_at } = arg0);
  let date = null;
  ({ hero_ranking, hero_logo_display_config, hero_banner_display_config, hero_banner_url, hero_banner_animated_url, hero_rive_url, hero_logo_url, catalog_banner_url, catalog_banner_animated_url, catalog_banner_rive_url, featured_block_url, logo_url, pdp_bg_url, mobile_banner_url, mobile_bg_url } = arg0);
  const obj = {};
  const merged = Object.assign(super.fromServer(Object.assign(arg0, Object.assign({ products: 0, unpublished_at: 0, hero_ranking: 0, hero_logo_display_config: 0, hero_banner_display_config: 0, hero_banner_url: 0, hero_banner_animated_url: 0, hero_rive_url: 0, hero_logo_url: 0, catalog_banner_url: 0, catalog_banner_animated_url: 0, catalog_banner_rive_url: 0, featured_block_url: 0, logo_url: 0, pdp_bg_url: 0, mobile_banner_url: 0, mobile_bg_url: 0 }))));
  obj.products = products.reduce((arr, item) => {
    const fromServerResult = CollectiblesProductRecord.fromServer(item);
    const type = fromServerResult.type;
    if (tmp4) {
      arr = arr.push(fromServerResult);
    }
    return arr;
  }, []);
  if (null != unpublished_at) {
    const _Date = Date;
    date = new Date(unpublished_at);
  }
  obj.unpublishedAt = date;
  obj.heroRanking = hero_ranking;
  obj.heroBannerUrl = hero_banner_url;
  obj.heroBannerAnimatedUrl = hero_banner_animated_url;
  obj.heroRiveUrl = hero_rive_url;
  obj.heroLogoUrl = hero_logo_url;
  obj.catalogBannerUrl = catalog_banner_url;
  obj.catalogBannerAnimatedUrl = catalog_banner_animated_url;
  obj.catalogBannerRiveUrl = catalog_banner_rive_url;
  obj.featuredBlockUrl = featured_block_url;
  obj.logoUrl = logo_url;
  obj.pdpBgUrl = pdp_bg_url;
  obj.mobileBannerUrl = mobile_banner_url;
  obj.mobileBgUrl = mobile_bg_url;
  obj.heroLogoDisplayConfig = CollectiblesUtils.getAssetDisplayConfig(hero_logo_display_config);
  obj.heroBannerDisplayConfig = CollectiblesUtils.getAssetDisplayConfig(hero_banner_display_config);
  return new prototype(obj);
};
prototype["fromStorefrontCollectionRecord"] = function fromStorefrontCollectionRecord(id) {
  const obj = { storeListingId: id.id, skuId: id.id, name: id.name, summary: id.description, unpublishedAt: id.unpublishedAt, isOrbsExclusive: id.isOrbsExclusive, styles: id.styles, products: null, heroRanking: id.heroRanking, heroBannerUrl: id.heroBannerUrl, heroBannerAnimatedUrl: id.heroBannerAnimatedUrl, heroRiveUrl: id.heroRiveUrl, heroLogoUrl: id.heroLogoUrl, catalogBannerUrl: id.catalogBannerUrl, catalogBannerAnimatedUrl: id.catalogBannerAnimatedUrl, catalogBannerRiveUrl: id.catalogBannerRiveUrl, featuredBlockUrl: id.featuredBlockUrl, logoUrl: id.logoUrl, pdpBgUrl: id.pdpBgUrl, mobileBannerUrl: id.mobileBannerUrl, mobileBgUrl: id.mobileBgUrl, heroLogoDisplayConfig: id.heroLogoDisplayConfig, heroBannerDisplayConfig: id.heroDisplayConfig };
  const products = id.products;
  obj.products = products.reduce((arr, item) => {
    const result = CollectiblesProductRecord.fromStorefrontProductRecord(item);
    if (null != result) {
      const type = result.type;
      if (tmp4) {
        arr = arr.push(result);
      }
      tmp4 = type === CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP || type === CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
    }
    return arr;
  }, []);
  return new prototype(obj);
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoryRecord.tsx");

export default prototype;