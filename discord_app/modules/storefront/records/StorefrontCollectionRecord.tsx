// discord_app/modules/storefront/records/StorefrontCollectionRecord.tsx
import closure_0 from "../../collectibles/records/CollectiblesStoreListingStylesRecord.tsx";
import { AssetDisplayConfigRecord } from "../../collectibles/records/ShopAssetConfigRecord.tsx";
import closure_2 from "StorefrontProductRecord.tsx";

let prototype;
prototype = function StorefrontCollectionRecord(arg0) {
  ({ id: tmp.id, applicationId: tmp.applicationId, name: tmp.name, description: tmp.description, products: tmp.products, createdAt: tmp.createdAt, updatedAt: tmp.updatedAt, unpublishedAt: tmp.unpublishedAt, willUnpublishAt: tmp.willUnpublishAt, styles: tmp.styles, bannerTextColor: tmp.bannerTextColor, heroRanking: tmp.heroRanking, heroDisplayConfig: tmp.heroDisplayConfig, heroLogoDisplayConfig: tmp.heroLogoDisplayConfig, heroUrl: tmp.heroUrl, heroRiveUrl: tmp.heroRiveUrl, heroAnimatedUrl: tmp.heroAnimatedUrl, heroLogoUrl: tmp.heroLogoUrl, heroBannerUrl: tmp.heroBannerUrl, heroBannerAnimatedUrl: tmp.heroBannerAnimatedUrl, catalogBannerUrl: tmp.catalogBannerUrl, catalogBannerRiveUrl: tmp.catalogBannerRiveUrl, catalogBannerAnimatedUrl: tmp.catalogBannerAnimatedUrl, featuredBlockUrl: tmp.featuredBlockUrl, logoUrl: tmp.logoUrl, pdpBgUrl: tmp.pdpBgUrl, wideBannerUrl: tmp.wideBannerUrl, wideBannerAnimatedUrl: tmp.wideBannerAnimatedUrl, mobileHeroUrl: tmp.mobileHeroUrl, mobileHeroAnimatedUrl: tmp.mobileHeroAnimatedUrl, mobileBannerUrl: tmp.mobileBannerUrl, mobileBgUrl: tmp.mobileBgUrl, shopButtonBgHoverUrl: tmp.shopButtonBgHoverUrl, upsellBannerPopoutUrl: tmp.upsellBannerPopoutUrl, upsellBannerUrl: tmp.upsellBannerUrl, heroBlockTitle: tmp.heroBlockTitle, featuredBlockBody: tmp.featuredBlockBody, mobileHeroBlockTitle: tmp.mobileHeroBlockTitle, mobileProductsTitle: tmp.mobileProductsTitle, mobileSummary: tmp.mobileSummary, wideBannerTitle: tmp.wideBannerTitle, wideBannerBody: tmp.wideBannerBody } = arg0);
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  ({ created_at, updated_at, unpublished_at, unpublish_settings } = arg0);
  ({ application_id, tenant_metadata } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let collectibles = tenant_metadata.collectibles;
  if (collectibles == null) {
    collectibles = {};
  }
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.applicationId = application_id;
  const products = merged.products;
  obj.products = products.map(fromServer.fromServer);
  obj.createdAt = new Date(created_at);
  const date = new Date(created_at);
  const tmp2 = prototype;
  obj.updatedAt = new Date(updated_at);
  let date2;
  if (null != unpublished_at) {
    const _Date = Date;
    date2 = new Date(unpublished_at);
  }
  obj.unpublishedAt = date2;
  let will_unpublish_at;
  if (unpublish_settings != null) {
    will_unpublish_at = unpublish_settings.will_unpublish_at;
  }
  let date3;
  if (null != will_unpublish_at) {
    const _Date2 = Date;
    date3 = new Date(unpublish_settings.will_unpublish_at);
  }
  obj.willUnpublishAt = date3;
  let fromServerResult;
  if (null != collectibles.styles) {
    fromServerResult = closure_0.fromServer(collectibles.styles);
  }
  obj.styles = fromServerResult;
  ({ banner_text_color: obj2.bannerTextColor, hero_ranking: obj2.heroRanking } = collectibles);
  let fromServerResult1;
  if (null != collectibles.hero_display_config) {
    fromServerResult1 = AssetDisplayConfigRecord.fromServer(collectibles.hero_display_config);
  }
  obj.heroDisplayConfig = fromServerResult1;
  let fromServerResult2;
  if (null != collectibles.hero_logo_display_config) {
    fromServerResult2 = AssetDisplayConfigRecord.fromServer(collectibles.hero_logo_display_config);
  }
  obj.heroLogoDisplayConfig = fromServerResult2;
  ({ hero_url: obj2.heroUrl, hero_rive_url: obj2.heroRiveUrl, hero_animated_url: obj2.heroAnimatedUrl, hero_logo_url: obj2.heroLogoUrl, hero_banner_url: obj2.heroBannerUrl, hero_banner_animated_url: obj2.heroBannerAnimatedUrl, catalog_banner_url: obj2.catalogBannerUrl, catalog_banner_rive_url: obj2.catalogBannerRiveUrl, catalog_banner_animated_url: obj2.catalogBannerAnimatedUrl, featured_block_url: obj2.featuredBlockUrl, logo_url: obj2.logoUrl, pdp_bg_url: obj2.pdpBgUrl, wide_banner_url: obj2.wideBannerUrl, wide_banner_animated_url: obj2.wideBannerAnimatedUrl, mobile_hero_url: obj2.mobileHeroUrl, mobile_hero_animated_url: obj2.mobileHeroAnimatedUrl, mobile_banner_url: obj2.mobileBannerUrl, mobile_bg_url: obj2.mobileBgUrl, shop_button_bg_hover_url: obj2.shopButtonBgHoverUrl, upsell_banner_popout_url: obj2.upsellBannerPopoutUrl, upsell_banner_url: obj2.upsellBannerUrl, hero_block_title: obj2.heroBlockTitle, featured_block_body: obj2.featuredBlockBody, mobile_hero_block_title: obj2.mobileHeroBlockTitle, mobile_products_title: obj2.mobileProductsTitle, mobile_summary: obj2.mobileSummary, wide_banner_title: obj2.wideBannerTitle, wide_banner_body: obj2.wideBannerBody } = collectibles);
  return new tmp2(obj);
};
const result = require("set").fileFinishedImporting("modules/storefront/records/StorefrontCollectionRecord.tsx");

export default prototype;