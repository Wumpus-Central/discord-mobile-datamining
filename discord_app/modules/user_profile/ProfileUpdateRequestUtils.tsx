// === Module 11086: ProfileUpdateRequestUtils ===

// Module 11086 (ProfileUpdateRequestUtils)
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6989 */;
import getCurrentUserProfileDefault from "getCurrentUserProfile" /* 11087 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/ProfileUpdateRequestUtils.tsx");

export const getProfileChangesForUpdateRequest = function getProfileChangesForUpdateRequest(pendingChanges, id) {
  let obj = {};
  if (undefined !== pendingChanges.pendingBanner) {
    const pendingBanner = pendingChanges.pendingBanner;
    let imageUri;
    if (pendingBanner != null) {
      imageUri = pendingBanner.imageUri;
    }
    if (imageUri == null) {
      imageUri = null;
    }
    obj.banner = imageUri;
    if (null !== pendingChanges.pendingBanner) {
      let originalMd5 = pendingChanges.pendingBanner.originalMd5;
      if (originalMd5 == null) {
        originalMd5 = null;
      }
      obj.bannerOriginalMd5 = originalMd5;
    }
  }
  if (null != pendingChanges.pendingBio) {
    obj.bio = pendingChanges.pendingBio;
  }
  if (null != pendingChanges.pendingPronouns) {
    obj.pronouns = pendingChanges.pendingPronouns;
  }
  if (undefined !== pendingChanges.pendingAccentColor) {
    obj.accent_color = pendingChanges.pendingAccentColor;
  }
  if (undefined !== pendingChanges.pendingThemeColors) {
    obj.theme_colors = pendingChanges.pendingThemeColors;
  }
  ({ pendingProfileEffect, pendingProfileFrame } = pendingChanges);
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
    const found = items.filter((type) => type.type !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
    let arr3 = found;
    if (null !== pendingProfileEffect) {
      obj = { skuId: pendingProfileEffect.skuId, type: CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT };
      found.push(obj);
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
  obj = { collectibles_sku_ids: arr5.map((skuId) => skuId.skuId) };
};
export const getAccountUpdateForUpdateRequest = function getAccountUpdateForUpdateRequest(pendingChanges) {
  const obj = {};
  if (undefined !== pendingChanges.pendingGlobalName) {
    obj.globalName = pendingChanges.pendingGlobalName;
  }
  if (undefined !== pendingChanges.pendingNameplate) {
    obj.nameplate = pendingChanges.pendingNameplate;
  }
  if (undefined !== pendingChanges.pendingAvatar) {
    const pendingAvatar = pendingChanges.pendingAvatar;
    if (null === pendingAvatar) {
      obj.avatar = null;
    } else if (pendingAvatar.assetOrigin === ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
      obj.avatarId = pendingAvatar.originalAsset.id;
    } else {
      ({ imageUri: obj.avatar, description: obj.avatarDescription, originalMd5: obj.avatarOriginalMd5 } = pendingAvatar);
    }
  }
  if (undefined !== pendingChanges.pendingAvatarDecoration) {
    obj.avatarDecoration = pendingChanges.pendingAvatarDecoration;
  }
  if (undefined !== pendingChanges.pendingDisplayNameStyles) {
    obj.displayNameStyles = pendingChanges.pendingDisplayNameStyles;
  }
  if (undefined !== pendingChanges.pendingCustomTypingIndicatorStyle) {
    obj.typingIndicatorStyle = pendingChanges.pendingCustomTypingIndicatorStyle;
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
export const getPrimaryGuildChangesForUpdateRequest = function getPrimaryGuildChangesForUpdateRequest(pendingChanges) {
  const obj = {};
  if (undefined !== pendingChanges.pendingPrimaryGuildId) {
    obj.primaryGuildId = pendingChanges.pendingPrimaryGuildId;
  }
  return obj;
};