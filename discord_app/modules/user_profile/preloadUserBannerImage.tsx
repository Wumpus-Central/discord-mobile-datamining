// discord_app/modules/user_profile/preloadUserBannerImage.tsx
import AvatarUtils from "../../utils/AvatarUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_profile/preloadUserBannerImage.tsx");

export default function preloadUserBannerImage(user, guildId) {
  if (typeof globalThis.Image !== "undefined") {
    user = user.user;
    let id;
    if (user != null) {
      id = user.id;
    }
    if (null != id) {
      if ("" !== id) {
        let tmp3 = null != guildId;
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
          let obj = { id, guildId, banner: user.guild_member_profile.banner, canAnimate: null, size: 600 };
          const GifAutoPlay = UserSettings.GifAutoPlay;
          obj.canAnimate = GifAutoPlay.getSetting();
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
          obj = { id, banner: user.user_profile.banner, canAnimate: null, size: 600 };
          const GifAutoPlay2 = UserSettings.GifAutoPlay;
          obj.canAnimate = GifAutoPlay2.getSetting();
          guildMemberBannerURL = AvatarUtils.getUserBannerURL(obj);
        }
        if (null != guildMemberBannerURL) {
          const image = new globalThis.Image();
          image.src = guildMemberBannerURL;
        }
      }
    }
  }
}
