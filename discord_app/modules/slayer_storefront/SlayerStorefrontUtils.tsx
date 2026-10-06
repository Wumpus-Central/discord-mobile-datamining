// === Module 6741: SlayerStorefrontUtils ===

// Module 6741 (SlayerStorefrontUtils)
import _modDef12 from "module_12" /* 12 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import StoreUtils from "StoreUtils" /* 5329 */;
import _mod5642 from "module_5642" /* 5642 */;
import WishlistRecommendationRecord from "WishlistRecommendationRecord" /* 6742 */;
import SocialLayerStorefrontTypes from "SocialLayerStorefrontTypes" /* 6745 */;
import StorefrontUtils from "StorefrontUtils" /* 6746 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import ApplicationRecord from "ApplicationRecord" /* 2009 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6743 */;
import SocialLayerStorefrontConstants from "SocialLayerStorefrontConstants" /* 6744 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
function hasSocialLayerStorefront(guild) {
  const storefrontGuildIds = SocialLayerStorefrontStore.getStorefrontGuildIds();
  if (storefrontGuildIds.has(guild.id)) {
    return true;
  } else if ("type" in guild) {
    return false;
  } else {
    let applicationIdFromGuildId = SocialLayerStorefrontStore.getApplicationIdFromGuildId(guild.id);
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
    let result = SocialLayerStorefrontStore.hasStorefrontForApplicationId(applicationIdFromGuildId);
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
  let progress;
  let tmp = null;
  if (type.type === SocialLayerStorefrontTypes.RewardRequirementType.SUBSCRIPTION) {
    const obj = { type: null, planIds: null, progress };
    ({ type: obj.type, plan_ids: obj.planIds, progress } = type);
    if (progress == null) {
      progress = null;
    }
    tmp = obj;
  }
  return tmp;
}
function transformSlayerStorefrontPromotionServer(id) {
  let ends_at;
  let mapped;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  const obj = { id: id.id, endsAt: ends_at, flavor: str, pdp: tmp2, storefront: tmp3, checkout: tmp4, vcStream: tmp5, rewardRequirements: mapped.filter((item) => null != item) };
  ends_at = id.ends_at;
  if (ends_at == null) {
    ends_at = null;
  }
  str = id.flavor;
  if (str == null) {
    str = "default";
  }
  const pdp = id.pdp;
  tmp2 = null;
  if (null != pdp) {
    const obj3 = { label: null, tooltip: null, icon: null };
    ({ label: obj2.label, tooltip: obj2.tooltip, icon: obj2.icon } = pdp);
    tmp2 = obj3;
  }
  tmp3 = null;
  if (null != id.storefront) {
    tmp3 = { headerText: id.storefront.header_text };
    const obj9 = { headerText: id.storefront.header_text };
  }
  const checkout = id.checkout;
  tmp4 = null;
  if (null != checkout) {
    const obj10 = { label: null, tooltip: null, icon: null };
    ({ label: obj4.label, tooltip: obj4.tooltip, icon: obj4.icon } = checkout);
    tmp4 = obj10;
  }
  const vc_stream = id.vc_stream;
  tmp5 = null;
  if (null != vc_stream) {
    const obj11 = { label: null, tooltip: null, icon: null };
    ({ label: obj5.label, tooltip: obj5.tooltip, icon: obj5.icon } = vc_stream);
    tmp5 = obj11;
  }
  let reward_requirements = id.reward_requirements;
  if (reward_requirements == null) {
    reward_requirements = [];
  }
  mapped = reward_requirements.map(transformRewardRequirementServer);
  return obj;
}
function isSubscriptionRewardRequirement(type) {
  return type.type === SocialLayerStorefrontTypes.RewardRequirementType.SUBSCRIPTION;
}
function getSKUShareURL(guildId, applicationId) {
  let applicationId2;
  let tab;
  if (null != guildId) {
    let combined;
    const _location2 = location;
    const _location3 = location;
    applicationId = applicationId.applicationId;
    const obj = _mod5642;
    const parsed = obj.parse(search);
    const skuId = parsed.skuId;
    ({ tab, applicationId: applicationId2 } = parsed);
    let tmp3 = pathname.indexOf(map1.COLLECTIBLES_SHOP) >= 0;
    if (tmp3) {
      tmp3 = tab === CollectibleShopTab.GAME_SHOPS && applicationId2 === applicationId && true;
    }
    if (!tmp3) {
      const _location = location;
      const _window = window;
      const _HermesInternal = HermesInternal;
      combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + map1.GAME_SHOP(guildId, applicationId.id, applicationId.slug);
    }
    return combined;
  }
  combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + map1.COLLECTIBLES_SHOP_GAME_SHOP(applicationId.applicationId, undefined, applicationId.id, applicationId.slug);
}
let closure_4 = WishlistRecommendationRecord.WishlistRecommendationReason;
({ getChannelsGameShopPrefix: c9, STOREFRONT_MARKETING_GUILD_ID: c10, STOREFRONT_MARKETING_GUILD_ID_TEST: unpackModuleId } = SocialLayerStorefrontConstants);
({ GuildFeatures: closure_12, Routes: map1, SKUProductLines: closure_14 } = Constants);
const CollectibleShopTab = CollectiblesShopConstants.CollectibleShopTab;
let str = "jpg";
if (StoreUtils.SUPPORTS_WEBP) {
  str = "webp";
}
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SocialLayerStorefrontStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return SocialLayerStorefrontStore.getGuildIdFromApplicationId(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmpResult2 = require("useGetOrFetchApplications");
  const getOrFetchApplication = tmpResult2.useGetOrFetchApplication(arg0);
  let tmp9 = stateFromStores;
  if (stateFromStores == null) {
    let guildId;
    if (getOrFetchApplication != null) {
      guildId = getOrFetchApplication.guildId;
    }
    tmp9 = guildId;
  }
  if (cResult[3] === getOrFetchApplication) {
    let tmp11;
    if (cResult[4] === tmp9) {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const obj2 = { guildId: tmp9, application: getOrFetchApplication };
  cResult[3] = getOrFetchApplication;
  cResult[4] = tmp9;
  cResult[5] = obj2;
  tmp11 = obj2;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [SocialLayerStorefrontStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => SocialLayerStorefrontStore.getGuildIdFromApplicationId(closure_0));
  const obj2 = require("useGetOrFetchApplications");
  const application = obj2.useGetOrFetchApplication(arg0);
  let guildId2 = stateFromStores;
  if (stateFromStores == null) {
    let guildId;
    if (application != null) {
      guildId = application.guildId;
    }
    guildId2 = guildId;
  }
  return { guildId: guildId2, application };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SocialLayerStorefrontStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return SocialLayerStorefrontStore.getApplicationIdFromGuildId(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function c() {
      return GuildStore.getGuild(closure_0);
    };
    const items2 = [arg0];
    cResult[4] = arg0;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp11 = items2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
    tmp11 = cResult[6];
  }
  const tmpResult2 = require("get initialized");
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10, tmp11);
  if (cResult[7] === stateFromStores) {
    let tmp13;
    if (cResult[8] === stateFromStores1) {
      tmp13 = cResult[9];
    }
    return tmp13;
  }
  let tmp14 = stateFromStores;
  if (stateFromStores == null) {
    let length;
    if (stateFromStores1 != null) {
      const gameApplicationIds = stateFromStores1.gameApplicationIds;
      if (gameApplicationIds != null) {
        length = gameApplicationIds.length;
      }
    }
    let first1;
    if (1 === length) {
      first1 = stateFromStores1.gameApplicationIds[0];
    }
    tmp14 = first1;
  }
  cResult[7] = stateFromStores;
  cResult[8] = stateFromStores1;
  cResult[9] = tmp14;
  tmp13 = tmp14;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [SocialLayerStorefrontStore];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => SocialLayerStorefrontStore.getApplicationIdFromGuildId(closure_0));
  const items1 = [GuildStore];
  const items2 = [arg0];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildStore.getGuild(closure_0), items2);
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
});
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
function isOnCollectiblesShopGameShopPage(arr, search, arg2, arg3) {
  let applicationId;
  let skuId;
  let tab;
  const obj = _mod5642;
  const parsed = obj.parse(search);
  ({ tab, applicationId, skuId } = parsed);
  let tmp2 = arr.indexOf(map1.COLLECTIBLES_SHOP) >= 0;
  if (tmp2) {
    let tmp4 = tab === CollectibleShopTab.GAME_SHOPS && applicationId === arg2;
    if (tmp4) {
      tmp4 = null == arg3 || skuId === arg3;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function getStorefrontEmbedShareURL(applicationId, join) {
  const guildId = SelectedGuildStore.getGuildId();
  if (null != guildId) {
    let GAME_SHOPResult;
    const _location = location;
    if (pathname.indexOf(React4(guildId)) >= 0) {
      GAME_SHOPResult = map1.GAME_SHOP(guildId);
    }
    const _URL = URL;
    const _location2 = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const str2 = new URL("" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + GAME_SHOPResult);
    const searchParams = str2.searchParams;
    const result = searchParams.set("skuIds", join.join(","));
    return str2.toString();
  }
  GAME_SHOPResult = map1.COLLECTIBLES_SHOP_GAME_SHOP(applicationId);
}
let size = size_mod;
let result = size.fileFinishedImporting("modules/slayer_storefront/SlayerStorefrontUtils.tsx");

export const LARGE_ASSET_FORMAT = str;
export const getOrderedStorefrontSkuIds = function getOrderedStorefrontSkuIds(arg0) {
  set = new Set();
  const items = [];
  const iter = arg0.pages[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let skuIds = nextResult.skuIds;
    let tmp2 = nextResult;
    for (const item10024 of skuIds) {
      if (!set.has(item10024)) {
        let addResult = set.add(item10024);
        let arr = items.push(item10024);
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
        if (!set.has(item10046)) {
          let addResult1 = set.add(item10046);
          let arr2 = items.push(item10046);
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
  return null != stateFromStores1 && stateFromStores1.productLine === constants2.SOCIAL_LAYER_GAME_ITEM;
};
export const getMarketingGuildId = function getMarketingGuildId() {
  const guild = GuildStore.getGuild(unpackModuleId);
  if (null != guild) {
    let id;
    const features = guild.features;
    if (features.has(constants.SOCIAL_LAYER_STOREFRONT)) {
      id = guild.id;
    }
    return id;
  }
  id = authStore;
};
export { hasSocialLayerStorefront };
export const transformStorefrontMetadataServer = function transformStorefrontMetadataServer(body) {
  let prop;
  let logo_asset_id = body.logo_asset_id;
  if (logo_asset_id == null) {
    logo_asset_id = null;
  }
  const obj = { logoAssetId: logo_asset_id, lightThemeLogoAssetId: prop };
  prop = body.light_theme_logo_asset_id;
  if (prop == null) {
    prop = null;
  }
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
    let obj;
    if (1 === planIds.length) {
      obj = { initialPlanId: planIds[0], shouldDisallowPlanSelection: true };
    }
    return obj;
  }
  obj = {};
};
export const transformSlayerApplicationStorefrontSummaryServer = function transformSlayerApplicationStorefrontSummaryServer(id) {
  let logo_asset_id;
  let prop;
  let tmp;
  const obj = { id: id.id, publishedAt: tmp, title: null, logoAssetId: logo_asset_id, lightThemeLogoAssetId: prop };
  const published_at = id.published_at;
  tmp = null;
  if (null != published_at) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(published_at);
    const _Number = Number;
    let tmp5 = null;
    if (!Number.isNaN(date.getTime())) {
      tmp5 = date;
    }
    tmp = tmp5;
  }
  ({ title: obj.title, logo_asset_id } = id);
  if (logo_asset_id == null) {
    logo_asset_id = null;
  }
  prop = id.light_theme_logo_asset_id;
  if (prop == null) {
    prop = null;
  }
  return obj;
};
export const transformSlayerApplicationStorefrontServer = function transformSlayerApplicationStorefrontServer(body) {
  let fromServer;
  let mapValues;
  let obj3;
  let pages;
  let promotions;
  let result;
  let tmp;
  let obj = {
    id: body.id,
    publishedAt: tmp,
    applicationId: null,
    title: null,
    logoAssetId: null,
    lightThemeLogoAssetId: null,
    pages: pages.map((title) => {
      let mapped;
      let tmp;
      const obj = { title: title.title, leaderboard: tmp, skuIds: title.sku_ids, sections: mapped };
      tmp = undefined;
      if (null != title.leaderboard) {
        tmp = { title: title.leaderboard.title, description: title.leaderboard.description, backgroundImageAssetId: title.leaderboard.background_image_asset_id };
        const obj2 = { title: title.leaderboard.title, description: title.leaderboard.description, backgroundImageAssetId: title.leaderboard.background_image_asset_id };
      }
      mapped = undefined;
      if (null != title.sections) {
        const sections = title.sections;
        mapped = sections.map((title) => ({ title: title.title, skuIds: title.sku_ids }));
      }
      return obj;
    }),
    assets: obj3.keyBy(body.assets, "id"),
    application: fromServer,
    storefrontPricing: result,
    promotions: mapValues(promotions, transformSlayerStorefrontPromotionServer)
  };
  const published_at = body.published_at;
  tmp = null;
  if (null != published_at) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(published_at);
    const _Number = Number;
    let tmp5 = null;
    if (!Number.isNaN(date.getTime())) {
      tmp5 = date;
    }
    tmp = tmp5;
  }
  ({ application_id: obj.applicationId, title: obj.title, logo_asset_id: obj.logoAssetId, light_theme_logo_asset_id: obj.lightThemeLogoAssetId, pages } = body);
  fromServer = undefined;
  obj3 = _modDef12;
  if (null != body.application) {
    fromServer = ApplicationRecord.createFromServer(body.application);
  }
  result = undefined;
  if (null != body.storefront_pricing) {
    const obj4 = StorefrontUtils;
    result = obj4.transformStorefrontPricesServer(body.storefront_pricing);
  }
  promotions = body.promotions;
  mapValues = _modDef12.mapValues;
  _modDef12;
  if (promotions == null) {
    promotions = {};
  }
  return obj;
};
export const getPrimaryCarouselItemInfo = function getPrimaryCarouselItemInfo(tenantMetadata, applicationId) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  size = obj.size;
  let num = 512;
  if (undefined !== size) {
    num = size;
  }
  if (null != applicationId) {
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
        let obj3;
        const first = tenantMetadata.tenantMetadata.socialLayer.carouselItems[0];
        if (null == first.labelIconAssetId) {
          obj3 = { primaryIconAsset: "start", primaryIconLabel: "unicodeVersion" };
        } else {
          const toURLSafe = URLUtilsDefault.toURLSafe;
          URLUtilsDefault;
          const obj2 = StoreUtils;
          obj3 = { primaryIconAsset: toURLSafe(obj2.getAssetURL(applicationId, first.labelIconAssetId, num, "webp")), primaryIconLabel: first.label };
          toURLSafe(obj2.getAssetURL(applicationId, first.labelIconAssetId, num, "webp"));
        }
        return obj3;
      }
    }
  }
  return { primaryIconAsset: "start", primaryIconLabel: "unicodeVersion" };
};
export const getGameItemThumbnailUrl = function getGameItemThumbnailUrl(value2) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  size = obj.size;
  let num = 512;
  if (undefined !== size) {
    num = size;
  }
  if (null != value2) {
    if (null != value2.thumbnailAssetId) {
      const toURLSafe = URLUtilsDefault.toURLSafe;
      URLUtilsDefault;
      const obj2 = StoreUtils;
      return toURLSafe(obj2.getAssetURL(value2.applicationId, value2.thumbnailAssetId, num, "webp"));
    }
  }
};
export const getCardImageURL = function getCardImageURL(sku, arg1) {
  let applicationId;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  size = obj.size;
  let num = 512;
  if (undefined !== size) {
    num = size;
  }
  if (sku != null) {
    applicationId = sku.applicationId;
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
      const toURLSafe = URLUtilsDefault.toURLSafe;
      URLUtilsDefault;
      const obj2 = StoreUtils;
      return toURLSafe(obj2.getAssetURL(applicationId, cardImageAssetId, num, "webp"));
    }
  }
};
export const getCardBackgroundImageURL = function getCardBackgroundImageURL(sku, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  size = obj.size;
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
      const toURLSafe = URLUtilsDefault.toURLSafe;
      URLUtilsDefault;
      const obj2 = StoreUtils;
      return toURLSafe(obj2.getAssetURL(sku.applicationId, sku.tenantMetadata.socialLayer.cardBackgroundImageAssetId, num, str));
    }
  }
};
export { isOnCollectiblesShopGameShopPage };
export { getSKUShareURL };
export const getForwardedSKUShareURL = function getForwardedSKUShareURL(guildId, applicationId) {
  return "" + getSKUShareURL(guildId, applicationId) + "\n\n";
};
export { getStorefrontEmbedShareURL };
export const getForwardedStorefrontEmbedShareURL = function getForwardedStorefrontEmbedShareURL(applicationId, join) {
  const guildId = SelectedGuildStore.getGuildId();
  if (null != guildId) {
    let GAME_SHOPResult;
    const _location = location;
    if (pathname.indexOf(React4(guildId)) >= 0) {
      GAME_SHOPResult = map1.GAME_SHOP(guildId);
    }
    const _URL = URL;
    const _location2 = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const str2 = new URL("" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + GAME_SHOPResult);
    const searchParams = str2.searchParams;
    const result = searchParams.set("skuIds", join.join(","));
    const _HermesInternal2 = HermesInternal;
    return "" + str2.toString() + "\n\n";
  }
  GAME_SHOPResult = map1.COLLECTIBLES_SHOP_GAME_SHOP(applicationId);
};
export const canSeeGameShop = function canSeeGameShop(id) {
  const guild = GuildStore.getGuild(id);
  const tmp2 = null != guild && hasSocialLayerStorefront(guild);
  return tmp2;
};
export const getHasWishlistOrPopularRecommendations = function getHasWishlistOrPopularRecommendations(arr, arg1, arg2) {
  let obj;
  let closure_0 = arg1;
  let closure_1 = arg2;
  if (0 === arr.length) {
    obj = { hasWishlist: false, hasPopular: false };
  } else {
    obj = {
      hasWishlist: arr.some((item) => {
          let obj = closure_0[item.id];
          if (obj == null) {
            obj = {};
          }
          const entries = Object.entries(obj);
          return entries.some((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            const hasItem = tmp2 === constants.WISHLIST && set.has(tmp);
            return hasItem;
          });
        }),
      hasPopular: arr.some((item) => {
          const tmp = closure_0[item.id];
          let everyResult = null == tmp;
          if (!everyResult) {
            const _Object = Object;
            const entries = Object.entries(tmp);
            everyResult = entries.every((item) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = item;
              const hasItem = tmp2 === constants.RECOMMENDATION && set.has(tmp) || !set.has(tmp);
              return hasItem;
            });
          }
          return everyResult;
        })
    };
  }
  return obj;
};
export const isOnSocialLayerStorefrontPage = function isOnSocialLayerStorefrontPage(arr, search, arg2, arg3) {
  let applicationId;
  let tab;
  const obj = _mod5642;
  const parsed = obj.parse(search);
  ({ tab, applicationId } = parsed);
  let tmp2 = arr.indexOf(map1.COLLECTIBLES_SHOP) >= 0;
  if (tmp2) {
    tmp2 = tab === CollectibleShopTab.GAME_SHOPS && applicationId === arg2 && true;
    const flag = tab === CollectibleShopTab.GAME_SHOPS && applicationId === arg2 && true;
  }
  if (!tmp2) {
    tmp2 = null != arg3 && arr.indexOf(React4(arg3)) >= 0;
    const tmp7 = null != arg3 && arr.indexOf(React4(arg3)) >= 0;
  }
  return tmp2;
};
export const isOnSocialLayerStorefrontSkuPage = function isOnSocialLayerStorefrontSkuPage(applicationId) {
  let applicationId2;
  let guildId;
  let pageIndex;
  let pathname;
  let skuId;
  let skuId2;
  let tab;
  ({ pathname, pageIndex } = applicationId);
  const search = applicationId.search;
  if (pageIndex === undefined) {
    pageIndex = 0;
  }
  ({ guildId, skuId } = applicationId);
  applicationId = applicationId.applicationId;
  const obj = _mod5642;
  const parsed = obj.parse(search);
  ({ tab, applicationId: applicationId2, skuId: skuId2 } = parsed);
  let tmp2 = pathname.indexOf(map1.COLLECTIBLES_SHOP) >= 0;
  if (tmp2) {
    let tmp4 = tab === CollectibleShopTab.GAME_SHOPS && applicationId2 === applicationId;
    if (tmp4) {
      tmp4 = null == skuId || skuId2 === skuId;
    }
    tmp2 = tmp4;
  }
  if (!tmp2) {
    const hasItem = null != guildId && pathname.includes(map1.CHANNELS_GAME_SHOP(guildId, pageIndex, skuId));
    tmp2 = hasItem;
  }
  return tmp2;
};
export const useGetSocialLayerStorefrontGuildIdAndApplication = tmp4;
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
export const useGetSocialLayerStorefrontApplicationId = tmp5;
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