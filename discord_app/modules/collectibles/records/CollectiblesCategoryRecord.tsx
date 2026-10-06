// === Module 7067: CollectiblesCategoryRecord ===

// Module 7067 (CollectiblesCategoryRecord)
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7077 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7078 */;
import CollectiblesProductRecord from "CollectiblesProductRecord" /* 7068 */;
import CollectiblesStoreListingRecord from "CollectiblesStoreListingRecord" /* 7075 */;
import size from "module_2" /* 2 */;

let arr;

class CollectiblesCategoryRecord extends CollectiblesStoreListingRecord {
  constructor(products) {
    let isOrbsExclusive;
    const tmp4 = new CollectiblesCategoryRecord(products, tmp3, tmp2, tmp);
    ({ products: tmp4.products, heroRanking: tmp4.heroRanking, unpublishedAt: tmp4.unpublishedAt, isOrbsExclusive } = products);
    if (isOrbsExclusive == null) {
      const _Array = Array;
      let isArray = Array.isArray(products.products) && products.products.length > 0;
      if (isArray) {
        products = products.products;
        isArray = undefined === products.find((item) => {
          const obj = CollectiblesProductUtils;
          return !obj.isOrbsExclusiveProduct(item);
        });
      }
      isOrbsExclusive = isArray;
    }
    tmp4.isOrbsExclusive = isOrbsExclusive;
    ({ heroBannerUrl: tmp4.heroBannerUrl, heroBannerAnimatedUrl: tmp4.heroBannerAnimatedUrl, heroRiveUrl: tmp4.heroRiveUrl, heroLogoUrl: tmp4.heroLogoUrl, catalogBannerUrl: tmp4.catalogBannerUrl, catalogBannerAnimatedUrl: tmp4.catalogBannerAnimatedUrl, catalogBannerRiveUrl: tmp4.catalogBannerRiveUrl, featuredBlockUrl: tmp4.featuredBlockUrl, logoUrl: tmp4.logoUrl, pdpBgUrl: tmp4.pdpBgUrl, mobileBannerUrl: tmp4.mobileBannerUrl, mobileBgUrl: tmp4.mobileBgUrl, heroLogoDisplayConfig: tmp4.heroLogoDisplayConfig, heroBannerDisplayConfig: tmp4.heroBannerDisplayConfig } = products);
    return tmp4;
  }
  static fromServer(arg0) {
    let catalog_banner_animated_url;
    let catalog_banner_rive_url;
    let catalog_banner_url;
    let featured_block_url;
    let hero_banner_animated_url;
    let hero_banner_display_config;
    let hero_banner_url;
    let hero_logo_display_config;
    let hero_logo_url;
    let hero_ranking;
    let hero_rive_url;
    let logo_url;
    let mobile_banner_url;
    let mobile_bg_url;
    let obj2;
    let obj3;
    let pdp_bg_url;
    let products;
    let unpublished_at;
    ({ products, unpublished_at } = arg0);
    let date = null;
    ({ hero_ranking, hero_logo_display_config, hero_banner_display_config, hero_banner_url, hero_banner_animated_url, hero_rive_url, hero_logo_url, catalog_banner_url, catalog_banner_animated_url, catalog_banner_rive_url, featured_block_url, logo_url, pdp_bg_url, mobile_banner_url, mobile_bg_url } = arg0);
    const obj = {
      products: products.reduce((arr, item) => {
        const fromServerResult = CollectiblesProductRecord.fromServer(item);
        const type = fromServerResult.type;
        const tmp4 = type === CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP || type === CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
        if (tmp4) {
          arr = arr.push(fromServerResult);
        }
        return arr;
      }, []),
      unpublishedAt: date,
      heroRanking: hero_ranking,
      heroBannerUrl: hero_banner_url,
      heroBannerAnimatedUrl: hero_banner_animated_url,
      heroRiveUrl: hero_rive_url,
      heroLogoUrl: hero_logo_url,
      catalogBannerUrl: catalog_banner_url,
      catalogBannerAnimatedUrl: catalog_banner_animated_url,
      catalogBannerRiveUrl: catalog_banner_rive_url,
      featuredBlockUrl: featured_block_url,
      logoUrl: logo_url,
      pdpBgUrl: pdp_bg_url,
      mobileBannerUrl: mobile_banner_url,
      mobileBgUrl: mobile_bg_url,
      heroLogoDisplayConfig: obj2.getAssetDisplayConfig(hero_logo_display_config),
      heroBannerDisplayConfig: obj3.getAssetDisplayConfig(hero_banner_display_config)
    };
    const merged = Object.assign(super.fromServer(Object.assign(arg0, Object.assign({ products: 0, unpublished_at: 0, hero_ranking: 0, hero_logo_display_config: 0, hero_banner_display_config: 0, hero_banner_url: 0, hero_banner_animated_url: 0, hero_rive_url: 0, hero_logo_url: 0, catalog_banner_url: 0, catalog_banner_animated_url: 0, catalog_banner_rive_url: 0, featured_block_url: 0, logo_url: 0, pdp_bg_url: 0, mobile_banner_url: 0, mobile_bg_url: 0 }))));
    if (null != unpublished_at) {
      let tmp4 = globalThis;
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(unpublished_at);
    }
    obj2 = CollectiblesUtils;
    obj3 = CollectiblesUtils;
    return new CollectiblesCategoryRecord(obj);
  }
  static fromStorefrontCollectionRecord(id) {
    let products;
    const obj = {
      storeListingId: id.id,
      skuId: id.id,
      name: id.name,
      summary: id.description,
      unpublishedAt: id.unpublishedAt,
      isOrbsExclusive: id.isOrbsExclusive,
      styles: id.styles,
      products: products.reduce((arr, item) => {
        const result = CollectiblesProductRecord.fromStorefrontProductRecord(item);
        if (null != result) {
          const type = result.type;
          const tmp4 = type === CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP || type === CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
          if (tmp4) {
            arr = arr.push(result);
          }
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
    };
    products = id.products;
    return new CollectiblesCategoryRecord(obj);
  }
}
let result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoryRecord.tsx");

export default CollectiblesCategoryRecord;