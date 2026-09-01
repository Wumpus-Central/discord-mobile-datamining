// === Module 14508: getCollectibleTypeName ===

// Module 14508 (getCollectibleTypeName)
import set from "set" /* 2 */;
import getAvatarURL from "getAvatarURL" /* 1431 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1950 */;
import messagesProxyDefault from "messagesProxy" /* 2369 */;
import fromServer from "fromServer" /* 7292 */;
import fromServer2 from "fromServer" /* 7293 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

function getCollectibleTypeName(type) {
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = tmp(1236).intl;
    return intl5.string(messagesProxyDefault.obi47v);
  } else if (tmp(1950).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl4 = tmp(1236).intl;
    return intl4.string(messagesProxyDefault.RX8BMR);
  } else if (tmp(1950).CollectiblesItemType.NAMEPLATE === type) {
    const intl3 = tmp(1236).intl;
    return intl3.string(messagesProxyDefault.nNGEHk);
  } else if (tmp(1950).CollectiblesItemType.BUNDLE === type) {
    const intl2 = tmp(1236).intl;
    return intl2.string(messagesProxyDefault.VS1fKo);
  } else if (tmp(1950).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = tmp(1236).intl;
    return intl.string(messagesProxyDefault.JiIY1l);
  } else {
    return "";
  }
}
const isAvatarDecorationRecord = fromServer.isAvatarDecorationRecord;
const isProfileEffectRecord = fromServer2.isProfileEffectRecord;
({ PremiumSubscriptionSKUs: c5, SubscriptionPlanInfo: closure_6 } = GuildFeatures);
const result = set.fileFinishedImporting("modules/parent_tools/FamilyCenterActivityPurchaseRowUtils.tsx");

export const PREVIEW_SIZE = 40;
export const NAMEPLATE_ASPECT_RATIO = 5.333333333333333;
export { getCollectibleTypeName };
export const getAvatarDecorationPreviewUrl = function getAvatarDecorationPreviewUrl(product) {
  if (0 === product.items.length) {
    return null;
  } else {
    const first = product.items[0];
    let avatarDecorationURL = null;
    if (isAvatarDecorationRecord(first)) {
      let obj = getAvatarURL;
      obj = { avatarDecoration: null, size: 40, canAnimate: true };
      obj = { asset: null };
      obj[0] = first.asset;
      obj[0] = obj;
      avatarDecorationURL = obj.getAvatarDecorationURL(obj);
    }
    return avatarDecorationURL;
  }
};
export const getProfileEffectPreviewUrl = function getProfileEffectPreviewUrl(product) {
  if (0 === product.items.length) {
    return null;
  } else {
    const first = product.items[0];
    let thumbnailPreviewSrc = null;
    if (isProfileEffectRecord(first)) {
      thumbnailPreviewSrc = first.thumbnailPreviewSrc;
    }
    return thumbnailPreviewSrc;
  }
};
export const isGuildBoostSubscription = function isGuildBoostSubscription(subscriptionPlanId) {
  if (null == subscriptionPlanId) {
    return false;
  } else {
    let skuId;
    if (dependencyMap[subscriptionPlanId] != null) {
      skuId = tmp2.skuId;
    }
    return skuId === constants.GUILD;
  }
};
export const getPurchaseDisplayInfo = function getPurchaseDisplayInfo(name, subscriptionPlanId) {
  const isSubscription = null != subscriptionPlanId;
  if (null != name) {
    let displayName = name.name;
    const typeName = getCollectibleTypeName(name.type);
  } else if (isSubscription) {
    if (null != subscriptionPlanId) {
      name = undefined;
      if (dependencyMap[subscriptionPlanId] != null) {
        name = tmp4.name;
      }
      displayName = name;
    }
  }
  return { displayName, typeName, isSubscription };
};