// discord_app/modules/collectibles/records/CollectiblesCategoryRecord.tsx
import fromServerDefault from "fromServer" /* 5310 */;
import getItemRecordsFromPurchases from "getItemRecordsFromPurchases" /* 5313 */;
import closure_2 from "fromServer" /* 5303 */;

require = arg1;
fromServerDefault;
let prototype;
prototype = function CollectiblesCategoryRecord(products) {
  const tmp3 = new prototype(products, tmp2, new.target, tmp, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ products: tmp3.products, heroRanking: tmp3.heroRanking, unpublishedAt: tmp3.unpublishedAt } = products);
  let isArray = Array.isArray(products.products);
  if (isArray) {
    isArray = products.products.length > 0;
  }
  if (isArray) {
    products = products.products;
    isArray = undefined === products.find((product) => !callback(table[3]).isOrbsExclusiveProduct(product));
  }
  tmp3.isOrbsExclusive = isArray;
  ({ heroBannerUrl: tmp3.heroBannerUrl, heroBannerAnimatedUrl: tmp3.heroBannerAnimatedUrl, heroRiveUrl: tmp3.heroRiveUrl, heroLogoUrl: tmp3.heroLogoUrl, catalogBannerUrl: tmp3.catalogBannerUrl, catalogBannerAnimatedUrl: tmp3.catalogBannerAnimatedUrl, catalogBannerRiveUrl: tmp3.catalogBannerRiveUrl, featuredBlockUrl: tmp3.featuredBlockUrl, logoUrl: tmp3.logoUrl, pdpBgUrl: tmp3.pdpBgUrl, mobileBannerUrl: tmp3.mobileBannerUrl, mobileBgUrl: tmp3.mobileBgUrl, heroLogoDisplayConfig: tmp3.heroLogoDisplayConfig, heroBannerDisplayConfig: tmp3.heroBannerDisplayConfig } = products);
  return tmp3;
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