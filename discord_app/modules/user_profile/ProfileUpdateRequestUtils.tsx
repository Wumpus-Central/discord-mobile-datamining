// === Module 11186: ProfileUpdateRequestUtils ===

// Module 11186 (ProfileUpdateRequestUtils)
import CollectiblesItemType from "CollectiblesItemType" /* 1995 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7086 */;
import getCurrentUserProfileDefault from "getCurrentUserProfile" /* 11187 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/ProfileUpdateRequestUtils.tsx");

export const getProfileChangesForUpdateRequest = function getProfileChangesForUpdateRequest(pendingBanner, id) {
  const obj = {};
  if (undefined !== pendingBanner.pendingBanner) {
    pendingBanner = pendingBanner.pendingBanner;
    let imageUri;
    if (pendingBanner != null) {
      imageUri = pendingBanner.imageUri;
    }
    if (imageUri == null) {
      imageUri = null;
    }
    obj.banner = imageUri;
    if (null !== pendingBanner.pendingBanner) {
      let originalMd5 = pendingBanner.pendingBanner.originalMd5;
      if (originalMd5 == null) {
        originalMd5 = null;
      }
      obj.bannerOriginalMd5 = originalMd5;
    }
  }
  if (null != pendingBanner.pendingBio) {
    obj.bio = pendingBanner.pendingBio;
  }
  if (null != pendingBanner.pendingPronouns) {
    obj.pronouns = pendingBanner.pendingPronouns;
  }
  if (undefined !== pendingBanner.pendingAccentColor) {
    obj.accent_color = pendingBanner.pendingAccentColor;
  }
  if (undefined !== pendingBanner.pendingThemeColors) {
    obj.theme_colors = pendingBanner.pendingThemeColors;
  }
  ({ pendingProfileEffect, pendingProfileFrame } = pendingBanner);
  if (undefined === pendingProfileEffect) {
    if (undefined === pendingProfileFrame) {
      let obj2 = {};
    }
    if (undefined !== obj2.collectibles_sku_ids) {
      obj.collectibles_sku_ids = obj2.collectibles_sku_ids;
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
    const found = items.filter((type) => type.type !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
    let arr3 = found;
    if (null !== pendingProfileEffect) {
      const obj3 = { skuId: pendingProfileEffect.skuId, type: CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT };
      found.push(obj3);
      arr3 = found;
    }
  }
  let arr5 = arr3;
  if (undefined !== pendingProfileFrame) {
    const found1 = arr3.filter((type) => type.type !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME);
    arr5 = found1;
    if (null !== pendingProfileFrame) {
      found1.push(pendingProfileFrame);
      arr5 = found1;
    }
  }
  obj2 = { collectibles_sku_ids: arr5.map((skuId) => skuId.skuId) };
};
export const getAccountUpdateForUpdateRequest = function getAccountUpdateForUpdateRequest(pendingGlobalName) {
  const obj = {};
  if (undefined !== pendingGlobalName.pendingGlobalName) {
    obj.globalName = pendingGlobalName.pendingGlobalName;
  }
  if (undefined !== pendingGlobalName.pendingNameplate) {
    obj.nameplate = pendingGlobalName.pendingNameplate;
  }
  if (undefined !== pendingGlobalName.pendingAvatar) {
    const pendingAvatar = pendingGlobalName.pendingAvatar;
    if (null === pendingAvatar) {
      obj.avatar = null;
    } else if (pendingAvatar.assetOrigin === ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
      obj.avatarId = pendingAvatar.originalAsset.id;
    } else {
      ({ imageUri: obj.avatar, description: obj.avatarDescription, originalMd5: obj.avatarOriginalMd5 } = pendingAvatar);
    }
  }
  if (undefined !== pendingGlobalName.pendingAvatarDecoration) {
    obj.avatarDecoration = pendingGlobalName.pendingAvatarDecoration;
  }
  if (undefined !== pendingGlobalName.pendingDisplayNameStyles) {
    obj.displayNameStyles = pendingGlobalName.pendingDisplayNameStyles;
  }
  if (undefined !== pendingGlobalName.pendingCustomTypingIndicatorStyle) {
    obj.typingIndicatorStyle = pendingGlobalName.pendingCustomTypingIndicatorStyle;
  }
  return obj;
};
export const getGuildMemberChangesForUpdateRequest = function getGuildMemberChangesForUpdateRequest(pendingAvatar) {
  const obj = {};
  if (undefined !== pendingAvatar.pendingAvatar) {
    pendingAvatar = pendingAvatar.pendingAvatar;
    if (null === pendingAvatar) {
      obj.avatar = null;
    } else if (pendingAvatar.assetOrigin === ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
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
export const getPrimaryGuildChangesForUpdateRequest = function getPrimaryGuildChangesForUpdateRequest(pendingPrimaryGuildId) {
  const obj = {};
  if (undefined !== pendingPrimaryGuildId.pendingPrimaryGuildId) {
    obj.primaryGuildId = pendingPrimaryGuildId.pendingPrimaryGuildId;
  }
  return obj;
};