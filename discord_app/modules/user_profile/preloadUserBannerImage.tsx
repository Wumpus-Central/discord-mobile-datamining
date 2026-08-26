// === Module 8532: preloadUserBannerImage ===

// Module 8532 (preloadUserBannerImage)
import set from "set" /* 2 */;
import getAvatarURL from "getAvatarURL" /* 1435 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;

const result = set.fileFinishedImporting("modules/user_profile/preloadUserBannerImage.tsx");

export default function preloadUserBannerImage(user) {
  if (typeof globalThis.Image !== "undefined") {
    user = user.user;
    let id;
    if (user != null) {
      id = user.id;
    }
    if (null != id) {
      if ("" !== id) {
        let tmp3 = null != arg1;
        if (tmp3) {
          const guild_member_profile = user.guild_member_profile;
          let banner;
          if (guild_member_profile != null) {
            banner = guild_member_profile.banner;
          }
          tmp3 = null != banner;
        }
        let guildMemberBannerURL;
        if (tmp3) {
          let obj = getAvatarURL;
          obj = { id: null, guildId: null, banner: null, canAnimate: null, size: 600 };
          obj[0] = id;
          obj[1] = arg1;
          obj[2] = user.guild_member_profile.banner;
          const GifAutoPlay = explicitContentFromProto.GifAutoPlay;
          obj[3] = GifAutoPlay.getSetting();
          guildMemberBannerURL = obj.getGuildMemberBannerURL(obj);
        }
        let banner1;
        if (user != null) {
          const user_profile = user.user_profile;
          if (user_profile != null) {
            banner1 = user_profile.banner;
          }
        }
        if (null != banner1) {
          obj = { id: null, banner: null, canAnimate: null, size: 600 };
          obj[0] = id;
          obj[1] = user.user_profile.banner;
          const GifAutoPlay2 = explicitContentFromProto.GifAutoPlay;
          obj[2] = GifAutoPlay2.getSetting();
          guildMemberBannerURL = getAvatarURL.getUserBannerURL(obj);
          const obj3 = getAvatarURL;
        }
        if (null != guildMemberBannerURL) {
          const image = new globalThis.Image();
          image.src = guildMemberBannerURL;
        }
      }
    }
  }
};