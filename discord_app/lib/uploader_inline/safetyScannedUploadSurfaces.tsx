// === Module 7769: SafetyScannedUploadSurface ===

// Module 7769 (SafetyScannedUploadSurface)
import set from "set" /* 2 */;
import UploadTypes2 from "UploadTypes" /* 7770 */;

const UploadTypes = UploadTypes2.UploadTypes;
const obj = { USER_DEFAULT_PROFILE_AVATAR: "USER_DEFAULT_PROFILE_AVATAR", USER_DEFAULT_PROFILE_BANNER: "USER_DEFAULT_PROFILE_BANNER", USER_GUILD_PROFILE_AVATAR: "USER_GUILD_PROFILE_AVATAR", USER_GUILD_PROFILE_BANNER: "USER_GUILD_PROFILE_BANNER", GUILD_ICON: "GUILD_ICON", GUILD_BANNER: "GUILD_BANNER", GUILD_DISCOVERY_SPLASH: "GUILD_DISCOVERY_SPLASH", GUILD_INVITE_SPLASH: "GUILD_INVITE_SPLASH", EMOJI: "EMOJI", STICKER: "STICKER" };
const result = set.fileFinishedImporting("lib/uploader_inline/safetyScannedUploadSurfaces.tsx");

export const SafetyScannedUploadSurface = obj;
export const getSafetyScannedUploadSurfaceForProfileCustomization = function getSafetyScannedUploadSurfaceForProfileCustomization(arg0, arg1) {
  if (UploadTypes.AVATAR === arg0) {
    if (null != arg1) {
      let USER_DEFAULT_PROFILE_AVATAR = obj.USER_GUILD_PROFILE_AVATAR;
    } else {
      USER_DEFAULT_PROFILE_AVATAR = obj.USER_DEFAULT_PROFILE_AVATAR;
    }
    return USER_DEFAULT_PROFILE_AVATAR;
  } else if (tmp.BANNER === arg0) {
    if (null != arg1) {
      let USER_DEFAULT_PROFILE_BANNER = obj.USER_GUILD_PROFILE_BANNER;
    } else {
      USER_DEFAULT_PROFILE_BANNER = obj.USER_DEFAULT_PROFILE_BANNER;
    }
    return USER_DEFAULT_PROFILE_BANNER;
  } else {
    return null;
  }
};