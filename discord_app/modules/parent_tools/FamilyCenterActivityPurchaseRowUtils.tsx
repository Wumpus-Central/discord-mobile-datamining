// === Module 15174: FamilyCenterActivityPurchaseRowUtils ===

// Module 15174 (FamilyCenterActivityPurchaseRowUtils)
import util from "util" /* 1115 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import _modDef2482 from "module_2482" /* 2482 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7787 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7788 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

function getCollectibleTypeName(type) {
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl5 = util.intl;
    return intl5.string(_modDef2482.obi47v);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl4 = util.intl;
    return intl4.string(_modDef2482.RX8BMR);
  } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
    const intl3 = util.intl;
    return intl3.string(_modDef2482.nNGEHk);
  } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
    const intl2 = util.intl;
    return intl2.string(_modDef2482.VS1fKo);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = util.intl;
    return intl.string(_modDef2482.JiIY1l);
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
      const obj2 = { avatarDecoration: null, size: 40, canAnimate: true };
      const obj3 = { asset: first.asset };
      obj2.avatarDecoration = obj3;
      avatarDecorationURL = AvatarUtils.getAvatarDecorationURL(obj2);
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
      let name1;
      if (dependencyMap[subscriptionPlanId] != null) {
        name1 = tmp4.name;
      }
      displayName = name1;
    }
  }
  return { displayName, typeName, isSubscription };
};