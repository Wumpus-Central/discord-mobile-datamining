// === Module 6985: safetyScannedUploadSurfaces ===

// Module 6985 (safetyScannedUploadSurfaces)
import ImageCroppingConstants from "ImageCroppingConstants" /* 6986 */;
import size from "module_2" /* 2 */;

const UploadTypes = ImageCroppingConstants.UploadTypes;
const SafetyScannedUploadSurface = { USER_DEFAULT_PROFILE_AVATAR: "USER_DEFAULT_PROFILE_AVATAR", USER_DEFAULT_PROFILE_BANNER: "USER_DEFAULT_PROFILE_BANNER", USER_GUILD_PROFILE_AVATAR: "USER_GUILD_PROFILE_AVATAR", USER_GUILD_PROFILE_BANNER: "USER_GUILD_PROFILE_BANNER", GUILD_ICON: "GUILD_ICON", GUILD_BANNER: "GUILD_BANNER", GUILD_DISCOVERY_SPLASH: "GUILD_DISCOVERY_SPLASH", GUILD_INVITE_SPLASH: "GUILD_INVITE_SPLASH", EMOJI: "EMOJI", STICKER: "STICKER" };
const result = size.fileFinishedImporting("lib/uploader_inline/safetyScannedUploadSurfaces.tsx");

export { SafetyScannedUploadSurface };
export const getSafetyScannedUploadSurfaceForProfileCustomization = function getSafetyScannedUploadSurfaceForProfileCustomization(arg0, arg1) {
  if (UploadTypes.AVATAR === arg0) {
    if (null != arg1) {
      let USER_DEFAULT_PROFILE_AVATAR = obj.USER_GUILD_PROFILE_AVATAR;
    } else {
      USER_DEFAULT_PROFILE_AVATAR = obj.USER_DEFAULT_PROFILE_AVATAR;
    }
    return USER_DEFAULT_PROFILE_AVATAR;
  } else if (UploadTypes.BANNER === arg0) {
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