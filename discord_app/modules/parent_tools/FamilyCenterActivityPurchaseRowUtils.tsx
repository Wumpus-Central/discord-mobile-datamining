// discord_app/modules/parent_tools/FamilyCenterActivityPurchaseRowUtils.tsx
import AvatarUtils from "../../utils/AvatarUtils.tsx";
import CollectiblesItemType from "../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import _modDef2396 from "FamilyCenter.messages.js";
import AvatarDecorationRecord from "../collectibles/records/AvatarDecorationRecord.tsx";
import ProfileEffectRecord from "../collectibles/records/ProfileEffectRecord.tsx";
import PremiumConstants from "../premium/PremiumConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
