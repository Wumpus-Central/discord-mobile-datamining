// === Module 10287: getProfileChangesForUpdateRequest ===

// Module 10287 (getProfileChangesForUpdateRequest)
import set from "set" /* 2 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1950 */;
import AssetOriginTypes from "AssetOriginTypes" /* 8430 */;
import getCurrentUserProfileDefault from "getCurrentUserProfile" /* 10288 */;

const result = set.fileFinishedImporting("modules/user_profile/ProfileUpdateRequestUtils.tsx");

export const getProfileChangesForUpdateRequest = function getProfileChangesForUpdateRequest(closure_1_0, id) {
  let obj = {};
  if (undefined !== closure_1_0.pendingBanner) {
    const pendingBanner = closure_1_0.pendingBanner;
    let imageUri;
    if (pendingBanner != null) {
      imageUri = pendingBanner.imageUri;
    }
    if (imageUri == null) {
      imageUri = null;
    }
    obj.banner = imageUri;
    if (null !== closure_1_0.pendingBanner) {
      let originalMd5 = closure_1_0.pendingBanner.originalMd5;
      if (originalMd5 == null) {
        originalMd5 = null;
      }
      obj.bannerOriginalMd5 = originalMd5;
    }
  }
  if (null != closure_1_0.pendingBio) {
    obj.bio = closure_1_0.pendingBio;
  }
  if (null != closure_1_0.pendingPronouns) {
    obj.pronouns = closure_1_0.pendingPronouns;
  }
  if (undefined !== closure_1_0.pendingAccentColor) {
    obj.accent_color = closure_1_0.pendingAccentColor;
  }
  if (undefined !== closure_1_0.pendingThemeColors) {
    obj.theme_colors = closure_1_0.pendingThemeColors;
  }
  ({ pendingProfileEffect, pendingProfileFrame } = closure_1_0);
  if (undefined === pendingProfileEffect) {
    if (undefined === pendingProfileFrame) {
      obj = {};
    }
    if (undefined !== obj.collectibles_sku_ids) {
      obj.collectibles_sku_ids = obj.collectibles_sku_ids;
    }
    return obj;
  }
  const tmp5 = getCurrentUserProfileDefault(id);
  let collectibles;
  if (tmp5 != null) {
    collectibles = tmp5.collectibles;
  }
  if (collectibles == null) {
    collectibles = [];
  }
  const items = [...collectibles];
  if (undefined !== pendingProfileEffect) {
    const found = items.filter((type) => type.type !== callback(1950).CollectiblesItemType.PROFILE_EFFECT);
    let arr3 = found;
    if (null !== pendingProfileEffect) {
      obj = { skuId: null, type: null };
      obj[0] = pendingProfileEffect.skuId;
      obj[1] = CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT;
      found.push(obj);
      arr3 = found;
    }
  }
  let arr5 = arr3;
  if (undefined !== pendingProfileFrame) {
    const found1 = arr3.filter((type) => type.type !== callback(1950).CollectiblesItemType.PROFILE_FRAME);
    arr5 = found1;
    if (null !== pendingProfileFrame) {
      found1.push(pendingProfileFrame);
      arr5 = found1;
    }
  }
  obj = { collectibles_sku_ids: arr5.map((skuId) => skuId.skuId) };
};
export const getAccountUpdateForUpdateRequest = function getAccountUpdateForUpdateRequest(closure_1_0) {
  const obj = {};
  if (undefined !== closure_1_0.pendingGlobalName) {
    obj.globalName = closure_1_0.pendingGlobalName;
  }
  if (undefined !== closure_1_0.pendingNameplate) {
    obj.nameplate = closure_1_0.pendingNameplate;
  }
  if (undefined !== closure_1_0.pendingAvatar) {
    const pendingAvatar = closure_1_0.pendingAvatar;
    if (null === pendingAvatar) {
      obj.avatar = null;
    } else if (pendingAvatar.assetOrigin === AssetOriginTypes.AssetOriginTypes.ARCHIVED_ASSET) {
      obj.avatarId = pendingAvatar.originalAsset.id;
    } else {
      ({ imageUri: obj.avatar, description: obj.avatarDescription, originalMd5: obj.avatarOriginalMd5 } = pendingAvatar);
    }
  }
  if (undefined !== closure_1_0.pendingAvatarDecoration) {
    obj.avatarDecoration = closure_1_0.pendingAvatarDecoration;
  }
  if (undefined !== closure_1_0.pendingDisplayNameStyles) {
    obj.displayNameStyles = closure_1_0.pendingDisplayNameStyles;
  }
  if (undefined !== closure_1_0.pendingCustomTypingIndicatorStyle) {
    obj.typingIndicatorStyle = closure_1_0.pendingCustomTypingIndicatorStyle;
  }
  return obj;
};
export const getGuildMemberChangesForUpdateRequest = function getGuildMemberChangesForUpdateRequest(pendingAvatar) {
  const obj = {};
  if (undefined !== pendingAvatar.pendingAvatar) {
    pendingAvatar = pendingAvatar.pendingAvatar;
    if (null === pendingAvatar) {
      obj.avatar = null;
    } else if (pendingAvatar.assetOrigin === AssetOriginTypes.AssetOriginTypes.ARCHIVED_ASSET) {
      obj.avatarId = pendingAvatar.originalAsset.id;
    } else {
      ({ imageUri: obj.avatar, description: obj.avatarDescription, originalMd5: obj.avatarOriginalMd5 } = pendingAvatar);
    }
  }
  if (undefined !== pendingAvatar.pendingNickname) {
    let str = pendingAvatar.pendingNickname;
    if (str == null) {
      str = "";
    }
    obj.nick = str;
  }
  if (undefined !== pendingAvatar.pendingAvatarDecoration) {
    obj.avatarDecoration = pendingAvatar.pendingAvatarDecoration;
  }
  if (undefined !== pendingAvatar.pendingNameplate) {
    obj.nameplate = pendingAvatar.pendingNameplate;
  }
  if (undefined !== pendingAvatar.pendingDisplayNameStyles) {
    obj.displayNameStyles = pendingAvatar.pendingDisplayNameStyles;
  }
  return obj;
};
export const getPrimaryGuildChangesForUpdateRequest = function getPrimaryGuildChangesForUpdateRequest(closure_1_0) {
  const obj = {};
  if (undefined !== closure_1_0.pendingPrimaryGuildId) {
    obj.primaryGuildId = closure_1_0.pendingPrimaryGuildId;
  }
  return obj;
};