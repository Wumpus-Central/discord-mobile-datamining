// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/UserProfileEmbed.tsx
import util from "../../../../../../../intl/index.native.tsx";
import Constants from "../../../../../../instant_invite/Constants.tsx";
import UserProfileEmbedCard from "../../../../../../user_profile/native/UserProfileEmbedCard.tsx";
import UserProfileEmbedRenderingMobileExperiment from "../../../../../../user_profile/experiments/UserProfileEmbedRenderingMobileExperiment.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/UserProfileEmbed.tsx",
);

export function createUserProfileEmbed(code, guild_id, theme) {
  if (obj.getIsUserProfileEmbedRenderingMobileEnabled("UserProfileEmbed")) {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    let id;
    if (guild_id != null) {
      id = guild_id.id;
    }
    const userProfileEmbedCard = UserProfileEmbedCard.readUserProfileEmbedCard(code, guild_id, id);
    const type = userProfileEmbedCard.type;
    if ("loading" === type) {
      const tmp17 = getEmbedThemeColorsDefault(theme);
      const obj2 = { headerText: null, resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
      const intl4 = util.intl;
      obj2.headerText = intl4.string(util.t.ZTNur7).toUpperCase();
      ({ resolvingGradientEnd: obj5.resolvingGradientEnd, resolvingGradientStart: obj5.resolvingGradientStart } =
        tmp17.colors);
      obj2.type = InviteTypes.GUILD;
      const merged = Object.assign(tmp17.baseColors);
      return obj2;
    } else if ("hidden" === type) {
      return null;
    } else if ("card" === type) {
      ({ username, pronouns } = userProfileEmbedCard);
      ({ title, avatarUri } = userProfileEmbedCard);
      ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
      let formatToPlainStringResult = username;
      if ("" !== pronouns) {
        const intl = util.intl;
        const obj3 = { username, pronouns };
        formatToPlainStringResult = intl.formatToPlainString(util.t["lD2bO/"], obj3);
      }
      const obj8 = {};
      const merged1 = Object.assign(baseColors);
      obj8.thumbnailCornerRadius = 25;
      obj8.thumbnailUrl = avatarUri;
      const intl2 = util.intl;
      const tmp10 = getEmbedThemeColorsDefault(theme);
      obj8.headerText = intl2.string(util.t.JxM9jQ).toUpperCase();
      obj8.titleText = title;
      obj8.titleColor = colors.titleColor;
      obj8.subtitle = formatToPlainStringResult;
      obj8.subtitleColor = colors.subtitleColor;
      const intl3 = util.intl;
      obj8.acceptLabelText = intl3.string(util.t.iXAna6);
      ({
        acceptLabelGreenColor: obj4.acceptLabelColor,
        acceptLabelGreenBackgroundColor: obj4.acceptLabelBackgroundColor,
      } = colors);
      obj8.canBeAccepted = true;
      obj8.embedCanBeTapped = true;
      obj8.type = InviteTypes.GUILD;
      return obj8;
    }
    const tmpResult = UserProfileEmbedCard;
  } else {
    return null;
  }
  obj = UserProfileEmbedRenderingMobileExperiment;
}
