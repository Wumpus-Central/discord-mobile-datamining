// discord_app/modules/slayer_storefront/SlayerStorefrontUtils.tsx
import addApplication from "addApplication";
import { WishlistRecommendationReason as closure_4 } from "fromServer";
import createExecutable from "createExecutable";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleUserSettingsStoreUpdate from "handleUserSettingsStoreUpdate";
import STOREFRONT_MARKETING_GUILD_ID from "STOREFRONT_MARKETING_GUILD_ID";
import ME from "ME";
import { CollectibleShopTab } from "items";
import { CurrencyCodes } from "sum";
import { apply } from "../../../_runtime/00012_apply.js";
import { keysSorter } from "../../../_runtime/05212_keysSorter.js";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { _httpGetWithCountryCodeQuery } from "../../utils/StoreUtils.tsx";
import { isDiscordProxiedAssetUrl } from "../../utils/URLUtils.tsx";
import { useGetOrFetchApplications } from "../applications/useGetOrFetchApplications.tsx";
import { useSKUPrice } from "../storefront/StorefrontUtils.tsx";

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function getPrice(price) {
  if (null != price.prices[arg1]) {
    if (price.prices[arg1].countryPrices.prices.length > 0) {
      let countryPrices = price.prices[arg1].countryPrices;
    }
    if (null != countryPrices) {
      let first = countryPrices.prices[0];
    } else {
      first = null;
      if (null != price.price) {
        first = price.price;
      }
    }
    return first;
  }
  countryPrices = null;
  if (null != price.prices[constants2.DEFAULT]) {
    countryPrices = null;
    if (price.prices[tmp.DEFAULT].countryPrices.prices.length > 0) {
      countryPrices = price.prices[tmp.DEFAULT].countryPrices;
    }
  }
}
function hasSocialLayerStorefront(guild) {
  const storefrontGuildIds = store2.getStorefrontGuildIds();
  if (storefrontGuildIds.has(guild.id)) {
    return true;
  } else if ("type" in guild) {
    return false;
  } else {
    let applicationIdFromGuildId = obj.getApplicationIdFromGuildId(guild.id);
    if (applicationIdFromGuildId == null) {
      let length;
      if (guild != null) {
        const gameApplicationIds = guild.gameApplicationIds;
        if (gameApplicationIds != null) {
          length = gameApplicationIds.length;
        }
      }
      let first;
      if (1 === length) {
        first = guild.gameApplicationIds[0];
      }
      applicationIdFromGuildId = first;
    }
    const storefrontApplicationIds = obj.getStorefrontApplicationIds();
    const tmp5 = null == applicationIdFromGuildId || !storefrontApplicationIds.has(applicationIdFromGuildId);
    let tmp6 = !tmp5;
    if (tmp5) {
      const features = guild.features;
      let flag;
      if (features != null) {
        flag = features.has(constants.SOCIAL_LAYER_STOREFRONT);
      }
      if (flag == null) {
        flag = false;
      }
      tmp6 = flag;
    }
    return tmp6;
  }
}
function transformSlayerStorefrontPromotionServer(id) {
  let obj = { id: id.id, endsAt: null, flavor: null, pdp: null, storefront: null, checkout: null, vcStream: null };
  let ends_at = id.ends_at;
  if (ends_at == null) {
    ends_at = null;
  }
  obj[1] = ends_at;
  let str = id.flavor;
  if (str == null) {
    str = "default";
  }
  obj[2] = str;
  const pdp = id.pdp;
  let tmp2 = null;
  if (null != pdp) {
    obj = { label: null, tooltip: null, icon: null };
    ({ label: obj2[0], tooltip: obj2[1], icon: obj2[2] } = pdp);
    tmp2 = obj;
  }
  obj[3] = tmp2;
  let tmp3 = null;
  if (null != id.storefront) {
    obj = { headerText: null };
    obj[0] = id.storefront.header_text;
    tmp3 = obj;
  }
  obj[4] = tmp3;
  const checkout = id.checkout;
  let tmp4 = null;
  if (null != checkout) {
    ({ label: obj4[0], tooltip: obj4[1], icon: obj4[2] } = checkout);
    tmp4 = { label: null, tooltip: null, icon: null };
    const obj1 = { label: null, tooltip: null, icon: null };
  }
  obj[5] = tmp4;
  const vc_stream = id.vc_stream;
  let tmp5 = null;
  if (null != vc_stream) {
    const obj2 = { label: null, tooltip: null, icon: null };
    ({ label: obj5[0], tooltip: obj5[1], icon: obj5[2] } = vc_stream);
    tmp5 = obj2;
  }
  obj[6] = tmp5;
  return obj;
}
function getSKUShareURL(arg0, applicationId) {
  let tab;
  if (null != arg0) {
    const _location2 = location;
    const _location3 = location;
    const parsed = keysSorter.parse(location.search);
    const skuId = parsed.skuId;
    ({ tab, applicationId } = parsed);
    let tmp3 = pathname.indexOf(closure_13.COLLECTIBLES_SHOP) >= 0;
    if (tmp3) {
      tmp3 = tab === CollectibleShopTab.GAME_SHOPS && applicationId === applicationId.applicationId && true;
      const tmp2 = tab === CollectibleShopTab.GAME_SHOPS && applicationId === applicationId.applicationId && true;
    }
    if (!tmp3) {
      const _location = location;
      const _window = window;
      const _HermesInternal = HermesInternal;
      let combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + closure_13.GAME_SHOP(arg0, applicationId.id, applicationId.slug);
    }
    return combined;
  }
  combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + closure_13.COLLECTIBLES_SHOP_GAME_SHOP(applicationId.applicationId, undefined, applicationId.id, applicationId.slug);
}
({ getChannelsGameShopPrefix: metroImportAll, STOREFRONT_MARKETING_GUILD_ID: c9, STOREFRONT_MARKETING_GUILD_ID_TEST: c10 } = STOREFRONT_MARKETING_GUILD_ID);
({ GuildFeatures: unpackModuleId, PriceSetAssignmentPurchaseTypes: closure_12, Routes: map1, SKUProductLines: closure_14 } = ME);
let str = "jpg";
if (require("_httpGetWithCountryCodeQuery").SUPPORTS_WEBP) {
  str = "webp";
}
function getCountryPrices(arg0, arg1) {
  if (null != arg0.prices[arg1]) {
    if (arg0.prices[arg1].countryPrices.prices.length > 0) {
      let countryPrices = arg0.prices[arg1].countryPrices;
    }
    return countryPrices;
  }
  countryPrices = null;
  if (null != arg0.prices[constants2.DEFAULT]) {
    countryPrices = null;
    if (arg0.prices[tmp.DEFAULT].countryPrices.prices.length > 0) {
      countryPrices = arg0.prices[tmp.DEFAULT].countryPrices;
    }
  }
}
function isOnCollectiblesShopGameShopPage(arr) {
  let applicationId;
  let skuId;
  let tab;
  const parsed = keysSorter.parse(arg1);
  ({ tab, applicationId, skuId } = parsed);
  let tmp2 = arr.indexOf(closure_13.COLLECTIBLES_SHOP) >= 0;
  if (tmp2) {
    let tmp4 = tab === CollectibleShopTab.GAME_SHOPS;
    if (tmp4) {
      tmp4 = applicationId === arg2;
    }
    if (tmp4) {
      tmp4 = null == arg3 || skuId === arg3;
      const tmp8 = null == arg3 || skuId === arg3;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
let result = require("createExecutable").fileFinishedImporting("modules/slayer_storefront/SlayerStorefrontUtils.tsx");

export const LARGE_ASSET_FORMAT = str;
export const hasPrice = function hasPrice(price) {
  let tmp = null != price.price;
  if (!tmp) {
    tmp = null != price.prices[constants2.DEFAULT];
  }
  return tmp;
};
export { getCountryPrices };
export { getPrice };
export const isGiftPriceDifferent = function isGiftPriceDifferent(arg0) {
  let tmp3 = getPrice(arg0, constants2.DEFAULT);
  if (tmp3 == null) {
    let obj = { amount: 0, currency: null };
    obj[1] = CurrencyCodes.USD;
    tmp3 = obj;
  }
  let tmpResult = getPrice(arg0, constants2.GIFT);
  if (tmpResult == null) {
    obj = { amount: 0, currency: null };
    obj[1] = CurrencyCodes.USD;
    tmpResult = obj;
  }
  return tmp3.currency !== tmpResult.currency || tmp3.amount !== tmpResult.amount;
};
export const getOrderedStorefrontSkuIds = function getOrderedStorefrontSkuIds(arg0) {
  const set = new Set();
  const items = [];
  const iter = arg0.pages[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let skuIds = nextResult.skuIds;
    let tmp3 = skuIds;
    let tmp4 = skuIds;
    let tmp2 = nextResult;
    for (const item10024 of skuIds) {
      let tmp5 = item10024;
      if (!set.has(item10024)) {
        let tmp6 = item10024;
        let addResult = set.add(tmp5);
        let arr = items.push(tmp5);
      }
      continue;
    }
    let tmp9 = nextResult;
    let sections = tmp2.sections;
    if (sections == null) {
      sections = [];
    }
    let tmp10 = sections;
    let tmp11 = sections;
    for (const item10040 of sections) {
      let skuIds2 = item10040.skuIds;
      let tmp12 = skuIds2;
      let tmp13 = skuIds2;
      for (const item10046 of skuIds2) {
        let tmp14 = item10046;
        if (!set.has(item10046)) {
          let tmp15 = item10046;
          let addResult1 = set.add(tmp14);
          arr = items.push(tmp14);
        }
        continue;
      }
      continue;
    }
    continue;
  }
  return items;
};
export const isGameItemSKU = function isGameItemSKU(stateFromStores1) {
  let tmp = null != stateFromStores1;
  if (tmp) {
    tmp = stateFromStores1.productLine === constants3.SOCIAL_LAYER_GAME_ITEM;
  }
  return tmp;
};
export const getMarketingGuildId = function getMarketingGuildId() {
  const guild = store.getGuild(closure_10);
  if (null != guild) {
    const features = guild.features;
    if (features.has(constants.SOCIAL_LAYER_STOREFRONT)) {
      let id = guild.id;
    }
    return id;
  }
  id = closure_9;
};
export { hasSocialLayerStorefront };
export const transformStorefrontMetadataServer = function transformStorefrontMetadataServer(body) {
  let logo_asset_id = body.logo_asset_id;
  if (logo_asset_id == null) {
    logo_asset_id = null;
  }
  const obj = { logoAssetId: logo_asset_id, lightThemeLogoAssetId: null };
  let prop = body.light_theme_logo_asset_id;
  if (prop == null) {
    prop = null;
  }
  obj[1] = prop;
  return obj;
};
export const transformSlayerApplicationStorefrontSummaryServer = function transformSlayerApplicationStorefrontSummaryServer(id) {
  let logo_asset_id;
  const obj = { id: id.id, publishedAt: null, title: null, logoAssetId: null, lightThemeLogoAssetId: null };
  const published_at = id.published_at;
  let tmp = null;
  if (null != published_at) {
    const _Date = Date;
    const date = new Date(published_at);
    const _Number = Number;
    let tmp7 = null;
    if (!Number.isNaN(date.getTime())) {
      tmp7 = date;
    }
    tmp = tmp7;
  }
  obj[1] = tmp;
  ({ title: obj[2], logo_asset_id } = id);
  if (logo_asset_id == null) {
    logo_asset_id = null;
  }
  obj[3] = logo_asset_id;
  let prop = id.light_theme_logo_asset_id;
  if (prop == null) {
    prop = null;
  }
  obj[4] = prop;
  return obj;
};
export const transformSlayerApplicationStorefrontServer = function transformSlayerApplicationStorefrontServer(body) {
  let pages;
  let obj = { id: body.id, publishedAt: null, applicationId: null, title: null, logoAssetId: null, lightThemeLogoAssetId: null, pages: null, assets: null, application: null, storefrontPricing: null, promotions: null };
  const published_at = body.published_at;
  let tmp = null;
  if (null != published_at) {
    const _Date = Date;
    const date = new Date(published_at);
    const _Number = Number;
    let tmp7 = null;
    if (!Number.isNaN(date.getTime())) {
      tmp7 = date;
    }
    tmp = tmp7;
  }
  obj[1] = tmp;
  ({ application_id: obj[2], title: obj[3], logo_asset_id: obj[4], light_theme_logo_asset_id: obj[5], pages } = body);
  obj[6] = pages.map((title) => {
    let obj = { title: title.title, leaderboard: null, skuIds: null, sections: null };
    let tmp;
    if (null != title.leaderboard) {
      obj = { title: null, description: null, backgroundImageAssetId: null };
      obj[0] = title.leaderboard.title;
      obj[1] = title.leaderboard.description;
      obj[2] = title.leaderboard.background_image_asset_id;
      tmp = obj;
    }
    obj[1] = tmp;
    obj[2] = title.sku_ids;
    let mapped;
    if (null != title.sections) {
      const sections = title.sections;
      mapped = sections.map((title) => ({ title: title.title, skuIds: title.sku_ids }));
    }
    obj[3] = mapped;
    return obj;
  });
  obj[7] = apply.keyBy(body.assets, "id");
  let fromServer;
  if (null != body.application) {
    fromServer = createExecutable.createFromServer(body.application);
  }
  obj[8] = fromServer;
  let result;
  if (null != body.storefront_pricing) {
    result = useSKUPrice.transformStorefrontPricesServer(body.storefront_pricing);
    const obj4 = useSKUPrice;
  }
  obj[9] = result;
  const obj3 = apply;
  const tmp8 = importDefault;
  let promotions = body.promotions;
  if (promotions == null) {
    promotions = {};
  }
  obj[10] = apply.mapValues(promotions, transformSlayerStorefrontPromotionServer);
  return obj;
};
export const getPrimaryCarouselItemInfo = function getPrimaryCarouselItemInfo(tenantMetadata) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const size = obj.size;
  let num = 512;
  if (undefined !== size) {
    num = size;
  }
  if (null != arg1) {
    let carouselItems;
    if (tenantMetadata != null) {
      tenantMetadata = tenantMetadata.tenantMetadata;
      if (tenantMetadata != null) {
        const socialLayer = tenantMetadata.socialLayer;
        if (socialLayer != null) {
          carouselItems = socialLayer.carouselItems;
        }
      }
    }
    if (null != carouselItems) {
      if (0 !== tenantMetadata.tenantMetadata.socialLayer.carouselItems.length) {
        const first = tenantMetadata.tenantMetadata.socialLayer.carouselItems[0];
        if (null == first.labelIconAssetId) {
          obj = { primaryIconAsset: "isArray", primaryIconLabel: "accessibilityRole" };
        } else {
          const obj3 = _httpGetWithCountryCodeQuery;
          const toURLSafeResult = isDiscordProxiedAssetUrl.toURLSafe(obj3.getAssetURL(arg1, first.labelIconAssetId, num, "webp"));
          obj = { primaryIconAsset: null, primaryIconLabel: null };
          obj[0] = toURLSafeResult;
          obj[1] = first.label;
          const obj2 = isDiscordProxiedAssetUrl;
        }
        return obj;
      }
    }
  }
  return { primaryIconAsset: "isArray", primaryIconLabel: "accessibilityRole" };
};
export const getGameItemThumbnailUrl = function getGameItemThumbnailUrl(error) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const size = obj.size;
  let num = 512;
  if (undefined !== size) {
    num = size;
  }
  if (null != error) {
    if (null != error.thumbnailAssetId) {
      const obj3 = _httpGetWithCountryCodeQuery;
      return isDiscordProxiedAssetUrl.toURLSafe(obj3.getAssetURL(error.applicationId, error.thumbnailAssetId, num, "webp"));
    }
  }
};
export const getCardImageURL = function getCardImageURL(sku, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const size = obj.size;
  let num = 512;
  if (undefined !== size) {
    num = size;
  }
  if (sku != null) {
    const applicationId = sku.applicationId;
  }
  let cardImageAssetId;
  if (sku != null) {
    const tenantMetadata = sku.tenantMetadata;
    if (tenantMetadata != null) {
      const socialLayer = tenantMetadata.socialLayer;
      if (socialLayer != null) {
        cardImageAssetId = socialLayer.cardImageAssetId;
      }
    }
  }
  if (cardImageAssetId == null) {
    let thumbnailAssetId;
    if (sku != null) {
      thumbnailAssetId = sku.thumbnailAssetId;
    }
    cardImageAssetId = thumbnailAssetId;
  }
  if (null != cardImageAssetId) {
    if (null != applicationId) {
      const obj3 = _httpGetWithCountryCodeQuery;
      return isDiscordProxiedAssetUrl.toURLSafe(obj3.getAssetURL(applicationId, cardImageAssetId, num, "webp"));
    }
  }
};
export const getCardBackgroundImageURL = function getCardBackgroundImageURL(sku, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const size = obj.size;
  let num = 1024;
  if (undefined !== size) {
    num = size;
  }
  let prop;
  if (sku != null) {
    const tenantMetadata = sku.tenantMetadata;
    if (tenantMetadata != null) {
      const socialLayer = tenantMetadata.socialLayer;
      if (socialLayer != null) {
        prop = socialLayer.cardBackgroundImageAssetId;
      }
    }
  }
  if (null != prop) {
    let applicationId;
    if (sku != null) {
      applicationId = sku.applicationId;
    }
    if (null != applicationId) {
      const obj3 = _httpGetWithCountryCodeQuery;
      return isDiscordProxiedAssetUrl.toURLSafe(obj3.getAssetURL(sku.applicationId, sku.tenantMetadata.socialLayer.cardBackgroundImageAssetId, num, str));
    }
  }
};
export { isOnCollectiblesShopGameShopPage };
export { getSKUShareURL };
export const getForwardedSKUShareURL = function getForwardedSKUShareURL(arg0, applicationId) {
  return "" + getSKUShareURL(arg0, applicationId) + "\n\n";
};
export const canSeeGameShop = function canSeeGameShop(guildId) {
  const guild = store.getGuild(guildId);
  let tmp2 = null != guild;
  if (tmp2) {
    tmp2 = hasSocialLayerStorefront(guild);
  }
  return tmp2;
};
export const getHasWishlistOrPopularRecommendations = function getHasWishlistOrPopularRecommendations(arr) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  if (0 === arr.length) {
    let obj = { hasWishlist: false, hasPopular: false };
  } else {
    obj = { hasWishlist: null, hasPopular: null };
    obj[0] = arr.some((arg0) => {
      let obj = dependencyMap[arg0.id];
      if (obj == null) {
        obj = {};
      }
      const entries = Object.entries(obj);
      return entries.some((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        let hasItem = tmp2 === outer1_4.WISHLIST;
        if (hasItem) {
          hasItem = set.has(tmp);
        }
        return hasItem;
      });
    });
    obj[1] = arr.some((arg0) => {
      let everyResult = null == tmp;
      if (!everyResult) {
        const _Object = Object;
        const entries = Object.entries(tmp);
        everyResult = entries.every((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          let hasItem = tmp2 === outer1_4.RECOMMENDATION;
          if (hasItem) {
            hasItem = set.has(tmp);
          }
          if (!hasItem) {
            hasItem = !set.has(tmp);
          }
          return hasItem;
        });
      }
      return everyResult;
    });
  }
  return obj;
};
export const isOnSocialLayerStorefrontPage = function isOnSocialLayerStorefrontPage(arr) {
  let applicationId;
  let tab;
  const parsed = keysSorter.parse(arg1);
  ({ tab, applicationId } = parsed);
  let tmp2 = arr.indexOf(closure_13.COLLECTIBLES_SHOP) >= 0;
  if (tmp2) {
    let flag = tab === CollectibleShopTab.GAME_SHOPS;
    if (flag) {
      flag = applicationId === arg2;
    }
    if (flag) {
      flag = true;
    }
    tmp2 = flag;
  }
  if (!tmp2) {
    let tmp7 = null != arg3;
    if (tmp7) {
      tmp7 = arr.indexOf(callback(arg3)) >= 0;
    }
    tmp2 = tmp7;
  }
  return tmp2;
};
export const isOnSocialLayerStorefrontSkuPage = function isOnSocialLayerStorefrontSkuPage(applicationId) {
  let guildId;
  let pageIndex;
  let pathname;
  let skuId;
  let skuId2;
  let tab;
  ({ pathname, pageIndex } = applicationId);
  if (pageIndex === undefined) {
    pageIndex = 0;
  }
  ({ guildId, skuId } = applicationId);
  const parsed = keysSorter.parse(applicationId.search);
  ({ tab, applicationId, skuId: skuId2 } = parsed);
  let tmp2 = pathname.indexOf(closure_13.COLLECTIBLES_SHOP) >= 0;
  if (tmp2) {
    let tmp4 = tab === CollectibleShopTab.GAME_SHOPS && applicationId === applicationId.applicationId;
    if (tmp4) {
      tmp4 = null == skuId || skuId2 === skuId;
      const tmp6 = null == skuId || skuId2 === skuId;
    }
    tmp2 = tmp4;
  }
  if (!tmp2) {
    let hasItem = null != guildId;
    if (hasItem) {
      hasItem = pathname.includes(closure_13.CHANNELS_GAME_SHOP(guildId, pageIndex, skuId));
    }
    tmp2 = hasItem;
  }
  return tmp2;
};
export const useGetSocialLayerStorefrontGuildIdAndApplication = function useGetSocialLayerStorefrontGuildIdAndApplication(applicationId) {
  const _require = applicationId;
  const items = [handleUserSettingsStoreUpdate];
  const stateFromStores = _initialize.useStateFromStores(items, () => outer1_7.getGuildIdFromApplicationId(closure_0));
  const obj = _initialize;
  const application = _useGetOrFetchApplications.useGetOrFetchApplication(applicationId);
  let guildId = stateFromStores;
  if (stateFromStores == null) {
    guildId = undefined;
    if (application != null) {
      guildId = application.guildId;
    }
  }
  return { guildId, application };
};
export const getSocialLayerStorefrontApplicationId = function getSocialLayerStorefrontApplicationId(guildId) {
  let applicationIdFromGuildId = store2.getApplicationIdFromGuildId(guildId);
  const guild = store.getGuild(guildId);
  if (applicationIdFromGuildId == null) {
    let length;
    if (guild != null) {
      const gameApplicationIds = guild.gameApplicationIds;
      if (gameApplicationIds != null) {
        length = gameApplicationIds.length;
      }
    }
    let first;
    if (1 === length) {
      first = guild.gameApplicationIds[0];
    }
    applicationIdFromGuildId = first;
  }
  return applicationIdFromGuildId;
};
export const useGetSocialLayerStorefrontApplicationId = function useGetSocialLayerStorefrontApplicationId(arg0) {
  const _require = arg0;
  const items = [handleUserSettingsStoreUpdate];
  let stateFromStores = _initialize.useStateFromStores(items, () => outer1_7.getApplicationIdFromGuildId(closure_0));
  const obj = _initialize;
  const items1 = [createGuildRecordFromRust];
  const items2 = [arg0];
  const stateFromStores1 = _initialize.useStateFromStores(items1, () => outer1_6.getGuild(closure_0), items2);
  if (stateFromStores == null) {
    let length;
    if (stateFromStores1 != null) {
      const gameApplicationIds = stateFromStores1.gameApplicationIds;
      if (gameApplicationIds != null) {
        length = gameApplicationIds.length;
      }
    }
    let first;
    if (1 === length) {
      first = stateFromStores1.gameApplicationIds[0];
    }
    stateFromStores = first;
  }
  return stateFromStores;
};
export const getSocialLayerStorefrontGuildId = function getSocialLayerStorefrontGuildId(applicationId) {
  if (null != applicationId) {
    let guildIdFromApplicationId = store2.getGuildIdFromApplicationId(applicationId);
    if (guildIdFromApplicationId == null) {
      application = application.getApplication(applicationId);
      let guildId;
      if (application != null) {
        guildId = application.guildId;
      }
      guildIdFromApplicationId = guildId;
    }
    return guildIdFromApplicationId;
  }
};