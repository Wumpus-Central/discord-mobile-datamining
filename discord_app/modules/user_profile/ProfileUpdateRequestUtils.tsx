// === Module 10638: ProfileUpdateRequestUtils ===

// Module 10638 (ProfileUpdateRequestUtils)
import CollectiblesItemType from "CollectiblesItemType" /* 1993 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6678 */;
import getCurrentUserProfileDefault from "getCurrentUserProfile" /* 10639 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/ProfileUpdateRequestUtils.tsx");

export const getProfileChangesForUpdateRequest = function getProfileChangesForUpdateRequest(c0, id) {
  const obj = {};
  if (undefined !== _require.pendingBanner) {
    const pendingBanner = _require.pendingBanner;
    let imageUri;
    if (pendingBanner != null) {
      imageUri = pendingBanner.imageUri;
    }
    if (imageUri == null) {
      imageUri = null;
    }
    obj.banner = imageUri;
    if (null !== _require.pendingBanner) {
      let originalMd5 = _require.pendingBanner.originalMd5;
      if (originalMd5 == null) {
        originalMd5 = null;
      }
      obj.bannerOriginalMd5 = originalMd5;
    }
  }
  if (null != _require.pendingBio) {
    obj.bio = _require.pendingBio;
  }
  if (null != _require.pendingPronouns) {
    obj.pronouns = _require.pendingPronouns;
  }
  if (undefined !== _require.pendingAccentColor) {
    obj.accent_color = _require.pendingAccentColor;
  }
  if (undefined !== _require.pendingThemeColors) {
    obj.theme_colors = _require.pendingThemeColors;
  }
  ({ pendingProfileEffect, pendingProfileFrame } = _require);
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
export const getAccountUpdateForUpdateRequest = function getAccountUpdateForUpdateRequest(c0) {
  const obj = {};
  if (undefined !== _require.pendingGlobalName) {
    obj.globalName = _require.pendingGlobalName;
  }
  if (undefined !== _require.pendingNameplate) {
    obj.nameplate = _require.pendingNameplate;
  }
  if (undefined !== _require.pendingAvatar) {
    const pendingAvatar = _require.pendingAvatar;
    if (null === pendingAvatar) {
      obj.avatar = null;
    } else if (pendingAvatar.assetOrigin === ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
      obj.avatarId = pendingAvatar.originalAsset.id;
    } else {
      ({ imageUri: obj.avatar, description: obj.avatarDescription, originalMd5: obj.avatarOriginalMd5 } = pendingAvatar);
    }
  }
  if (undefined !== _require.pendingAvatarDecoration) {
    obj.avatarDecoration = _require.pendingAvatarDecoration;
  }
  if (undefined !== _require.pendingDisplayNameStyles) {
    obj.displayNameStyles = _require.pendingDisplayNameStyles;
  }
  if (undefined !== _require.pendingCustomTypingIndicatorStyle) {
    obj.typingIndicatorStyle = _require.pendingCustomTypingIndicatorStyle;
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
export const getPrimaryGuildChangesForUpdateRequest = function getPrimaryGuildChangesForUpdateRequest(c0) {
  const obj = {};
  if (undefined !== _require.pendingPrimaryGuildId) {
    obj.primaryGuildId = _require.pendingPrimaryGuildId;
  }
  return obj;
};