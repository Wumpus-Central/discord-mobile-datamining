// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/UserProfileEmbed.tsx
import util from "../../../../../../../intl/index.native.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import UserProfileStore from "../../../../../../user_profile/UserProfileStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";

require = fn;
const InviteTypes = fn(8842).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/UserProfileEmbed.tsx",
);

export function createUserProfileEmbed(code, guild_id, theme) {
  let tmp3 = null;
  if (obj.getIsUserProfileEmbedRenderingMobileEnabled("UserProfileEmbed")) {
    if (null != UserStore.getUser(code)) {
      const tmp13 = getEmbedThemeColorsDefault(theme);
      const obj4 = { headerText: null, resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
      const intl = util.intl;
      obj4.headerText = intl.string(util.t.ZTNur7).toUpperCase();
      ({ resolvingGradientEnd: obj3.resolvingGradientEnd, resolvingGradientStart: obj3.resolvingGradientStart } =
        tmp13.colors);
      obj4.type = InviteTypes.GUILD;
      const merged = Object.assign(tmp13.baseColors);
      let tmp10 = obj4;
      const str = intl.string(util.t.ZTNur7);
    } else {
      const isFetchingProfileResult = UserProfileStore.isFetchingProfile(code, guild_id);
      if (!isFetchingProfileResult) {
        const userProfile = UserProfileStore.getUserProfile(code);
        let num;
        if (userProfile != null) {
          num = userProfile.fetchEndedAt;
        }
        if (num == null) {
          num = 0;
        }
      }
      tmp10 = null;
    }
    tmp3 = tmp10;
  }
  return tmp3;
}
