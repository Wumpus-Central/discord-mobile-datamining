// discord_app/modules/user_profile/preloadUserBannerImage.tsx
const result = require("set").fileFinishedImporting("modules/user_profile/preloadUserBannerImage.tsx");

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
          let obj = require(1416) /* getAvatarURL */;
          obj = { id: null, guildId: null, banner: null, canAnimate: null, size: 600 };
          obj[0] = id;
          obj[1] = arg1;
          obj[2] = user.guild_member_profile.banner;
          const GifAutoPlay = require(3958) /* explicitContentFromProto */.GifAutoPlay;
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
          const GifAutoPlay2 = require(3958) /* explicitContentFromProto */.GifAutoPlay;
          obj[2] = GifAutoPlay2.getSetting();
          guildMemberBannerURL = require(1416) /* getAvatarURL */.getUserBannerURL(obj);
          const obj3 = require(1416) /* getAvatarURL */;
        }
        if (null != guildMemberBannerURL) {
          const image = new globalThis.Image();
          image.src = guildMemberBannerURL;
        }
      }
    }
  }
};