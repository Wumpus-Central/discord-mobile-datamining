// === Module 7256: fromServer ===

// Module 7256 (fromServer)
import fromServerDefault from "fromServer" /* 7264 */;
import getItemRecordsFromPurchases from "getItemRecordsFromPurchases" /* 7267 */;
import closure_2 from "fromServer" /* 7257 */;

require = arg1;
fromServerDefault;
let prototype;
prototype = function CollectiblesCategoryRecord(products) {
  const tmp4 = new prototype(products, tmp3, tmp2, tmp);
  // ThrowIfThisInitialized (0x7c)
  ({ products: tmp4.products, heroRanking: tmp4.heroRanking, unpublishedAt: tmp4.unpublishedAt, isOrbsExclusive } = products);
  if (isOrbsExclusive == null) {
    const _Array = Array;
    let isArray = Array.isArray(products.products);
    if (isArray) {
      isArray = products.products.length > 0;
    }
    if (isArray) {
      products = products.products;
      isArray = undefined === products.find((product) => !callback(table[3]).isOrbsExclusiveProduct(product));
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
  const merged = Object.assign(super.fromServer(Object.assign(arg0, Object.create(null))));
  obj.products = products.reduce((arr) => {
    const fromServerResult = closure_2.fromServer(arg1);
    const type = fromServerResult.type;
    if (tmp4) {
      arr.push(fromServerResult);
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
  obj.heroLogoDisplayConfig = getItemRecordsFromPurchases.getAssetDisplayConfig(hero_logo_display_config);
  const obj2 = getItemRecordsFromPurchases;
  const tmp2 = prototype;
  obj.heroBannerDisplayConfig = getItemRecordsFromPurchases.getAssetDisplayConfig(hero_banner_display_config);
  return new tmp2(obj);
};
prototype["fromStorefrontCollectionRecord"] = function fromStorefrontCollectionRecord(id) {
  const products = id.products;
  return new prototype({
    storeListingId: id.id,
    skuId: id.id,
    name: id.name,
    summary: id.description,
    unpublishedAt: id.unpublishedAt,
    isOrbsExclusive: id.isOrbsExclusive,
    styles: id.styles,
    products: products.reduce((arr, skus) => {
      const result = closure_2.fromStorefrontProductRecord(skus);
      if (null != result) {
        const type = result.type;
        if (tmp4) {
          arr.push(result);
        }
        const tmp2 = callback;
        const tmp3 = table;
        tmp4 = type === callback(table[2]).CollectiblesItemType.VARIANTS_GROUP || type === callback(table[2]).CollectiblesItemType.EXTERNAL_SKU;
      }
      return arr;
    }, []),
    heroRanking: id.heroRanking,
    heroBannerUrl: id.heroBannerUrl,
    heroBannerAnimatedUrl: id.heroBannerAnimatedUrl,
    heroRiveUrl: id.heroRiveUrl,
    heroLogoUrl: id.heroLogoUrl,
    catalogBannerUrl: id.catalogBannerUrl,
    catalogBannerAnimatedUrl: id.catalogBannerAnimatedUrl,
    catalogBannerRiveUrl: id.catalogBannerRiveUrl,
    featuredBlockUrl: id.featuredBlockUrl,
    logoUrl: id.logoUrl,
    pdpBgUrl: id.pdpBgUrl,
    mobileBannerUrl: id.mobileBannerUrl,
    mobileBgUrl: id.mobileBgUrl,
    heroLogoDisplayConfig: id.heroLogoDisplayConfig,
    heroBannerDisplayConfig: id.heroDisplayConfig
  });
};
let result = require("set").fileFinishedImporting("modules/collectibles/records/CollectiblesCategoryRecord.tsx");

export default prototype;