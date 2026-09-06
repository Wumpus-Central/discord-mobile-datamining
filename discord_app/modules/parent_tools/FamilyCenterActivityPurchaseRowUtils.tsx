// === Module 14902: FamilyCenterActivityPurchaseRowUtils ===

// Module 14902 (FamilyCenterActivityPurchaseRowUtils)
import AvatarUtils from "AvatarUtils" /* 1396 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import _modDef2396 from "module_2396" /* 2396 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7547 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7548 */;
import PremiumConstants from "PremiumConstants" /* 1373 */;
import size from "module_2" /* 2 */;

function getCollectibleTypeName(type) {
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = tmp(1114).intl;
    return intl5.string(_modDef2396.obi47v);
  } else if (tmp(1889).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl4 = tmp(1114).intl;
    return intl4.string(_modDef2396.RX8BMR);
  } else if (tmp(1889).CollectiblesItemType.NAMEPLATE === type) {
    const intl3 = tmp(1114).intl;
    return intl3.string(_modDef2396.nNGEHk);
  } else if (tmp(1889).CollectiblesItemType.BUNDLE === type) {
    const intl2 = tmp(1114).intl;
    return intl2.string(_modDef2396.VS1fKo);
  } else if (tmp(1889).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = tmp(1114).intl;
    return intl.string(_modDef2396.JiIY1l);
  } else {
    return "";
  }
}
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
({ PremiumSubscriptionSKUs: hasOwnProperty, SubscriptionPlanInfo: metroRequire } = PremiumConstants);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterActivityPurchaseRowUtils.tsx");

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
      let obj = { avatarDecoration: null, size: 40, canAnimate: true };
      obj = { asset: first.asset };
      obj.avatarDecoration = obj;
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