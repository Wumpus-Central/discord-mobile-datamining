// === Module 7226: SlayerStorefrontUtils ===

// Module 7226 (SlayerStorefrontUtils)
import _modDef12 from "module_12" /* 12 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import StoreUtils from "StoreUtils" /* 4802 */;
import keysSorter from "keysSorter" /* 5456 */;
import SocialLayerStorefrontTypes from "SocialLayerStorefrontTypes" /* 7230 */;
import StorefrontUtils from "StorefrontUtils" /* 7231 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import ApplicationRecord from "ApplicationRecord" /* 1918 */;
import GuildStore from "GuildStore" /* 1979 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7228 */;

require = fn;
function getPrice(price, arg1) {
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
  const storefrontGuildIds = SocialLayerStorefrontStore.getStorefrontGuildIds();
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
    let result = obj.hasStorefrontForApplicationId(applicationIdFromGuildId);
    if (!result) {
      const features = guild.features;
      let flag;
      if (features != null) {
        flag = features.has(constants.SOCIAL_LAYER_STOREFRONT);
      }
      if (flag == null) {
        flag = false;
      }
      result = flag;
    }
    return result;
  }
}
function transformRewardRequirementServer(type) {
  let tmp = null;
  if (type.type === SocialLayerStorefrontTypes.RewardRequirementType.SUBSCRIPTION) {
    const obj = { type: null, planIds: null, progress: null };
    ({ type: obj.type, plan_ids: obj.planIds, progress } = type);
    if (progress == null) {
      progress = null;
    }
    obj.progress = progress;
    tmp = obj;
  }
  return tmp;
}
function transformSlayerStorefrontPromotionServer(id) {
  let obj = { id: id.id, endsAt: null, flavor: null, pdp: null, storefront: null, checkout: null, vcStream: null, rewardRequirements: null };
  let ends_at = id.ends_at;
  if (ends_at == null) {
    ends_at = null;
  }
  obj.endsAt = ends_at;
  str = id.flavor;
  if (str == null) {
    str = "default";
  }
  obj.flavor = str;
  const pdp = id.pdp;
  let tmp2 = null;
  if (null != pdp) {
    obj = { label: null, tooltip: null, icon: null };
    ({ label: obj2.label, tooltip: obj2.tooltip, icon: obj2.icon } = pdp);
    tmp2 = obj;
  }
  obj.pdp = tmp2;
  let tmp3 = null;
  if (null != id.storefront) {
    obj = { headerText: id.storefront.header_text };
    tmp3 = obj;
  }
  obj.storefront = tmp3;
  const checkout = id.checkout;
  let tmp4 = null;
  if (null != checkout) {
    ({ label: obj4.label, tooltip: obj4.tooltip, icon: obj4.icon } = checkout);
    tmp4 = { label: null, tooltip: null, icon: null };
    const obj1 = { label: null, tooltip: null, icon: null };
  }
  obj.checkout = tmp4;
  const vc_stream = id.vc_stream;
  let tmp5 = null;
  if (null != vc_stream) {
    const obj2 = { label: null, tooltip: null, icon: null };
    ({ label: obj5.label, tooltip: obj5.tooltip, icon: obj5.icon } = vc_stream);
    tmp5 = obj2;
  }
  obj.vcStream = tmp5;
  let reward_requirements = id.reward_requirements;
  if (reward_requirements == null) {
    reward_requirements = [];
  }
  const mapped = reward_requirements.map(transformRewardRequirementServer);
  obj.rewardRequirements = mapped.filter((item) => null != item);
  return obj;
}
function isSubscriptionRewardRequirement(type) {
  return type.type === SocialLayerStorefrontTypes.RewardRequirementType.SUBSCRIPTION;
}
function getSKUShareURL(arg0, applicationId) {
  if (null != arg0) {
    const _location2 = location;
    const _location3 = location;
    const parsed = keysSorter.parse(location.search);
    const skuId = parsed.skuId;
    ({ tab, applicationId } = parsed);
    let tmp3 = pathname.indexOf(map1.COLLECTIBLES_SHOP) >= 0;
    if (tmp3) {
      tmp3 = tab === CollectibleShopTab.GAME_SHOPS && applicationId === applicationId.applicationId && true;
      const tmp2 = tab === CollectibleShopTab.GAME_SHOPS && applicationId === applicationId.applicationId && true;
    }
    if (!tmp3) {
      const _location = location;
      const _window = window;
      const _HermesInternal = HermesInternal;
      let combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + map1.GAME_SHOP(arg0, applicationId.id, applicationId.slug);
    }
    return combined;
  }
  combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + map1.COLLECTIBLES_SHOP_GAME_SHOP(applicationId.applicationId, undefined, applicationId.id, applicationId.slug);
}
let closure_4 = fn(7227).WishlistRecommendationReason;
const SocialLayerStorefrontConstants = fn(7229);
({ getChannelsGameShopPrefix: closure_8, STOREFRONT_MARKETING_GUILD_ID: closure_9, STOREFRONT_MARKETING_GUILD_ID_TEST: c10 } = SocialLayerStorefrontConstants);
const Constants = fn(1074);
({ GuildFeatures: closure_11, PriceSetAssignmentPurchaseTypes: closure_12, Routes: map1, SKUProductLines: closure_14 } = Constants);
const CollectibleShopTab = fn(1076).CollectibleShopTab;
const CurrencyCodes = fn(1085).CurrencyCodes;
let str = "jpg";
if (fn(4802).SUPPORTS_WEBP) {
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
function getRequiredSubscriptionPlanIds(arr) {
  const found = arr.find(isSubscriptionRewardRequirement);
  let planIds = null;
  if (null != found) {
    planIds = null;
    if (found.planIds.length > 0) {
      planIds = found.planIds;
    }
  }
  return planIds;
}
function isOnCollectiblesShopGameShopPage(arr, arg1, arg2, arg3) {
  const parsed = keysSorter.parse(arg1);
  ({ tab, applicationId, skuId } = parsed);
  let tmp2 = arr.indexOf(map1.COLLECTIBLES_SHOP) >= 0;
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
let size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/SlayerStorefrontUtils.tsx");

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
    let obj = { amount: 0, currency: CurrencyCodes.USD };
    tmp3 = obj;
  }
  let tmpResult = getPrice(arg0, constants2.GIFT);
  if (tmpResult == null) {
    obj = { amount: 0, currency: CurrencyCodes.USD };
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
    let tmp2 = nextResult;
    for (const item10024 of skuIds) {
      let tmp5 = item10024;
      if (!set.has(item10024)) {
        let addResult = set.add(tmp5);
        let arr = items.push(tmp5);
      }
      continue;
    }
    let sections = tmp2.sections;
    if (sections == null) {
      sections = [];
    }
    for (const item10040 of sections) {
      let skuIds2 = item10040.skuIds;
      for (const item10046 of skuIds2) {
        let tmp14 = item10046;
        if (!set.has(item10046)) {
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
  const guild = GuildStore.getGuild(closure_1_10);
  if (null != guild) {
    const features = guild.features;
    if (features.has(constants.SOCIAL_LAYER_STOREFRONT)) {
      let id = guild.id;
    }
    return id;
  }
  id = React7;
};
export { hasSocialLayerStorefront };
export const transformStorefrontMetadataServer = function transformStorefrontMetadataServer(logo_asset_id) {
  logo_asset_id = logo_asset_id.logo_asset_id;
  if (logo_asset_id == null) {
    logo_asset_id = null;
  }
  const obj = { logoAssetId: logo_asset_id, lightThemeLogoAssetId: null };
  let prop = logo_asset_id.light_theme_logo_asset_id;
  if (prop == null) {
    prop = null;
  }
  obj.lightThemeLogoAssetId = prop;
  return obj;
};
export { getRequiredSubscriptionPlanIds };
export const getRewardRequirementPlanTargetingParams = function getRewardRequirementPlanTargetingParams(arr) {
  const found = arr.find(isSubscriptionRewardRequirement);
  let planIds = null;
  if (null != found) {
    planIds = null;
    if (found.planIds.length > 0) {
      planIds = found.planIds;
    }
  }
  if (null != planIds) {
    if (1 === planIds.length) {
      let obj = { initialPlanId: planIds[0], shouldDisallowPlanSelection: true };
    }
    return obj;
  }
  obj = {};
};
export const transformSlayerApplicationStorefrontSummaryServer = function transformSlayerApplicationStorefrontSummaryServer(id) {
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
  obj.publishedAt = tmp;
  ({ title: obj.title, logo_asset_id } = id);
  if (logo_asset_id == null) {
    logo_asset_id = null;
  }
  obj.logoAssetId = logo_asset_id;
  let prop = id.light_theme_logo_asset_id;
  if (prop == null) {
    prop = null;
  }
  obj.lightThemeLogoAssetId = prop;
  return obj;
};
export const transformSlayerApplicationStorefrontServer = function transformSlayerApplicationStorefrontServer(id) {
  let obj = { id: id.id, publishedAt: null, applicationId: null, title: null, logoAssetId: null, lightThemeLogoAssetId: null, pages: null, assets: null, application: null, storefrontPricing: null, promotions: null };
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
  obj.publishedAt = tmp;
  ({ application_id: obj.applicationId, title: obj.title, logo_asset_id: obj.logoAssetId, light_theme_logo_asset_id: obj.lightThemeLogoAssetId, pages } = id);
  obj.pages = pages.map((title) => {
    let obj = { title: title.title, leaderboard: null, skuIds: null, sections: null };
    let tmp;
    if (null != title.leaderboard) {
      obj = { title: title.leaderboard.title, description: title.leaderboard.description, backgroundImageAssetId: title.leaderboard.background_image_asset_id };
      tmp = obj;
    }
    obj.leaderboard = tmp;
    obj.skuIds = title.sku_ids;
    let mapped;
    if (null != title.sections) {
      const sections = title.sections;
      mapped = sections.map((title) => ({ title: title.title, skuIds: title.sku_ids }));
    }
    obj.sections = mapped;
    return obj;
  });
  obj.assets = _modDef12.keyBy(id.assets, "id");
  let fromServer;
  if (null != id.application) {
    fromServer = ApplicationRecord.createFromServer(id.application);
  }
  obj.application = fromServer;
  let result;
  if (null != id.storefront_pricing) {
    result = StorefrontUtils.transformStorefrontPricesServer(id.storefront_pricing);
  }
  obj.storefrontPricing = result;
  let promotions = id.promotions;
  if (promotions == null) {
    promotions = {};
  }
  obj.promotions = _modDef12.mapValues(promotions, transformSlayerStorefrontPromotionServer);
  return obj;
};
export const getPrimaryCarouselItemInfo = function getPrimaryCarouselItemInfo(tenantMetadata, arg1) {
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
          obj = { primaryIconAsset: "hash", primaryIconLabel: "call" };
        } else {
          const obj3 = StoreUtils;
          const toURLSafeResult = URLUtilsDefault.toURLSafe(obj3.getAssetURL(arg1, first.labelIconAssetId, num, "webp"));
          obj = { primaryIconAsset: toURLSafeResult, primaryIconLabel: first.label };
        }
        return obj;
      }
    }
  }
  return { primaryIconAsset: "hash", primaryIconLabel: "call" };
};
export const getGameItemThumbnailUrl = function getGameItemThumbnailUrl(value) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const size = obj.size;
  let num = 512;
  if (undefined !== size) {
    num = size;
  }
  if (null != value) {
    if (null != value.thumbnailAssetId) {
      const obj3 = StoreUtils;
      return URLUtilsDefault.toURLSafe(obj3.getAssetURL(value.applicationId, value.thumbnailAssetId, num, "webp"));
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
      const obj3 = StoreUtils;
      return URLUtilsDefault.toURLSafe(obj3.getAssetURL(applicationId, cardImageAssetId, num, "webp"));
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
      const obj3 = StoreUtils;
      return URLUtilsDefault.toURLSafe(obj3.getAssetURL(sku.applicationId, sku.tenantMetadata.socialLayer.cardBackgroundImageAssetId, num, str));
    }
  }
};
export { isOnCollectiblesShopGameShopPage };
export { getSKUShareURL };
export const getForwardedSKUShareURL = function getForwardedSKUShareURL(arg0, applicationId) {
  return "" + getSKUShareURL(arg0, applicationId) + "\n\n";
};
export const canSeeGameShop = function canSeeGameShop(guildId) {
  const guild = GuildStore.getGuild(guildId);
  let tmp2 = null != guild;
  if (tmp2) {
    tmp2 = hasSocialLayerStorefront(guild);
  }
  return tmp2;
};
export const getHasWishlistOrPopularRecommendations = function getHasWishlistOrPopularRecommendations(arr, arg1, arg2) {
  dependencyMap = arg1;
  closure_1 = arg2;
  if (0 === arr.length) {
    let obj = { hasWishlist: false, hasPopular: false };
  } else {
    obj = {
      hasWishlist: arr.some((item) => {
          let obj = dependencyMap[item.id];
          if (obj == null) {
            obj = {};
          }
          const entries = Object.entries(obj);
          return entries.some((item) => {
            [tmp, tmp2] = item;
            let hasItem = tmp2 === constants.WISHLIST;
            if (hasItem) {
              hasItem = set.has(tmp);
            }
            return hasItem;
          });
        }),
      hasPopular: arr.some((item) => {
          let everyResult = null == tmp;
          if (!everyResult) {
            const _Object = Object;
            const entries = Object.entries(tmp);
            everyResult = entries.every((item) => {
              [tmp, tmp2] = item;
              let hasItem = tmp2 === constants.RECOMMENDATION;
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
        })
    };
  }
  return obj;
};
export const isOnSocialLayerStorefrontPage = function isOnSocialLayerStorefrontPage(arr, arg1, arg2, arg3) {
  const parsed = keysSorter.parse(arg1);
  ({ tab, applicationId } = parsed);
  let tmp2 = arr.indexOf(map1.COLLECTIBLES_SHOP) >= 0;
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
      tmp7 = arr.indexOf(React6(arg3)) >= 0;
    }
    tmp2 = tmp7;
  }
  return tmp2;
};
export const isOnSocialLayerStorefrontSkuPage = function isOnSocialLayerStorefrontSkuPage(applicationId) {
  ({ pathname, pageIndex } = applicationId);
  if (pageIndex === undefined) {
    pageIndex = 0;
  }
  ({ guildId, skuId } = applicationId);
  const parsed = keysSorter.parse(applicationId.search);
  ({ tab, applicationId, skuId: skuId2 } = parsed);
  let tmp2 = pathname.indexOf(map1.COLLECTIBLES_SHOP) >= 0;
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
      hasItem = pathname.includes(map1.CHANNELS_GAME_SHOP(guildId, pageIndex, skuId));
    }
    tmp2 = hasItem;
  }
  return tmp2;
};
export const useGetSocialLayerStorefrontGuildIdAndApplication = function useGetSocialLayerStorefrontGuildIdAndApplication(applicationId) {
  _require = applicationId;
  const items = [SocialLayerStorefrontStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => SocialLayerStorefrontStore.getGuildIdFromApplicationId(closure_0));
  const obj = require("initialize");
  const application = require("useGetOrFetchApplications").useGetOrFetchApplication(applicationId);
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
  let applicationIdFromGuildId = SocialLayerStorefrontStore.getApplicationIdFromGuildId(guildId);
  const guild = GuildStore.getGuild(guildId);
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
  _require = arg0;
  const items = [SocialLayerStorefrontStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => SocialLayerStorefrontStore.getApplicationIdFromGuildId(closure_0));
  const obj = require("initialize");
  const items1 = [GuildStore];
  const items2 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(closure_0), items2);
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
    let guildIdFromApplicationId = SocialLayerStorefrontStore.getGuildIdFromApplicationId(applicationId);
    if (guildIdFromApplicationId == null) {
      const application = ApplicationStore.getApplication(applicationId);
      let guildId;
      if (application != null) {
        guildId = application.guildId;
      }
      guildIdFromApplicationId = guildId;
    }
    return guildIdFromApplicationId;
  }
};