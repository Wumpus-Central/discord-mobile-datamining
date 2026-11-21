// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/UserProfileEmbed.tsx
import util from "../../../../../../../intl/index.native.tsx";
import NicknameUtilsDefault from "../../../../../../../utils/NicknameUtils.tsx";
import useDisplayProfile from "../../../../../../user_profile/hooks/useDisplayProfile.tsx";
import renderer_EmbedUtils from "../../../EmbedUtils.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import UserProfileEmbedRenderingMobileExperiment from "../../../../../../user_profile/experiments/UserProfileEmbedRenderingMobileExperiment.tsx";
import UserProfileStore from "../../../../../../user_profile/UserProfileStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";

require = fn;
const InviteTypes = fn(8438).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/UserProfileEmbed.tsx",
);

export function createUserProfileEmbed(code, guild_id, theme) {
  if (obj.getIsUserProfileEmbedRenderingMobileEnabled("UserProfileEmbed")) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    const user = UserStore.getUser(code);
    if (null == user) {
      const isFetchingProfileResult = UserProfileStore.isFetchingProfile(code, guild_id);
      let tmp17 = !isFetchingProfileResult;
      if (!isFetchingProfileResult) {
        const userProfile = UserProfileStore.getUserProfile(code);
        let num2;
        if (userProfile != null) {
          num2 = userProfile.fetchEndedAt;
        }
        if (num2 == null) {
          num2 = 0;
        }
        tmp17 = num2 > 0;
      }
      let tmp19 = null;
      if (!tmp17) {
        const tmp21 = getEmbedThemeColorsDefault(theme);
        const obj2 = { headerText: null, resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
        const intl4 = util.intl;
        obj2.headerText = intl4.string(util.t.ZTNur7).toUpperCase();
        ({ resolvingGradientEnd: obj9.resolvingGradientEnd, resolvingGradientStart: obj9.resolvingGradientStart } =
          tmp21.colors);
        obj2.type = InviteTypes.GUILD;
        const merged = Object.assign(tmp21.baseColors);
        tmp19 = obj2;
        const str4 = intl4.string(util.t.ZTNur7);
      }
      let obj4 = tmp19;
    } else {
      let id;
      if (guild_id != null) {
        id = guild_id.id;
      }
      ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
      const tmp10 = getEmbedThemeColorsDefault(theme);
      const displayProfile = useDisplayProfile.getDisplayProfile(user.id, guild_id);
      let guildId = guild_id;
      if (null != displayProfile) {
        guildId = displayProfile.guildId;
      }
      let str;
      if (displayProfile != null) {
        str = displayProfile.pronouns;
      }
      if (str == null) {
        str = "";
      }
      if ("" !== str) {
        const intl = util.intl;
        const obj3 = { username: user.username, pronouns: str };
        let username = intl.formatToPlainString(util.t["lD2bO/"], obj3);
      } else {
        username = user.username;
      }
      obj4 = {};
      const merged1 = Object.assign(baseColors);
      obj4.thumbnailCornerRadius = 25;
      const tmpResult = useDisplayProfile;
      obj4.thumbnailUrl = renderer_EmbedUtils.getAssetUriForEmbed(user.getAvatarSource(guildId));
      const intl2 = util.intl;
      const tmpResult2 = renderer_EmbedUtils;
      obj4.headerText = intl2.string(util.t.JxM9jQ).toUpperCase();
      const str3 = intl2.string(util.t.JxM9jQ);
      obj4.titleText = NicknameUtilsDefault.getName(guildId, id, user);
      obj4.titleColor = colors.titleColor;
      obj4.subtitle = username;
      obj4.subtitleColor = colors.subtitleColor;
      const intl3 = util.intl;
      obj4.acceptLabelText = intl3.string(util.t.iXAna6);
      ({
        acceptLabelGreenColor: obj5.acceptLabelColor,
        acceptLabelGreenBackgroundColor: obj5.acceptLabelBackgroundColor,
      } = colors);
      obj4.canBeAccepted = true;
      obj4.embedCanBeTapped = true;
      obj4.type = InviteTypes.GUILD;
      const tmp9Result = NicknameUtilsDefault;
    }
    return obj4;
  } else {
    return null;
  }
  obj = UserProfileEmbedRenderingMobileExperiment;
}
