// === Module 14530: UserProfileEmbed ===

// Module 14530 (UserProfileEmbed)
import util from "util" /* 1112 */;
import Constants from "Constants" /* 5776 */;
import UserProfileEmbedCard from "UserProfileEmbedCard" /* 11981 */;
import UserProfileEmbedRenderingMobileExperiment from "UserProfileEmbedRenderingMobileExperiment" /* 11982 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 12393 */;
import size from "module_2" /* 2 */;

const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/UserProfileEmbed.tsx");

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
      const tmp23 = getEmbedThemeColorsDefault(theme);
      const obj2 = { headerText: null, resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
      const intl8 = util.intl;
      obj2.headerText = intl8.string(util.t.ZTNur7).toUpperCase();
      ({ resolvingGradientEnd: obj7.resolvingGradientEnd, resolvingGradientStart: obj7.resolvingGradientStart } = tmp23.colors);
      obj2.type = InviteTypes.GUILD;
      const merged = Object.assign(tmp23.baseColors);
      return obj2;
    } else if ("hidden" === type) {
      return null;
    } else if ("restricted" === type) {
      ({ speedBumpType, displayName, avatarUri: avatarUri2 } = userProfileEmbedCard);
      const tmp17 = getEmbedThemeColorsDefault(theme);
      const colors2 = tmp17.colors;
      const obj3 = {};
      const merged1 = Object.assign(tmp17.baseColors);
      obj3.thumbnailCornerRadius = 25;
      obj3.thumbnailUrl = avatarUri2;
      const intl4 = util.intl;
      obj3.headerText = intl4.string(util.t.JxM9jQ).toUpperCase();
      const intl5 = util.intl;
      obj3.titleText = intl5.string(util.t.b33pLD);
      obj3.titleColor = colors2.titleColor;
      const intl6 = util.intl;
      if ("block" === speedBumpType) {
        let prop = util.t["8F+WNz"];
      } else {
        prop = util.t["/cZp5s"];
      }
      const obj6 = { username: displayName };
      obj3.subtitle = intl6.formatToPlainString(prop, obj6);
      obj3.subtitleColor = colors2.subtitleColor;
      const intl7 = util.intl;
      obj3.acceptLabelText = intl7.string(util.t.iXAna6);
      ({ acceptLabelGreenColor: obj5.acceptLabelColor, acceptLabelGreenBackgroundColor: obj5.acceptLabelBackgroundColor } = colors2);
      obj3.canBeAccepted = true;
      obj3.embedCanBeTapped = true;
      obj3.type = InviteTypes.GUILD;
      return obj3;
    } else if ("card" === type) {
      ({ username, pronouns } = userProfileEmbedCard);
      ({ title, avatarUri, isPrivate } = userProfileEmbedCard);
      ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
      let formatToPlainStringResult = username;
      if ("" !== pronouns) {
        const intl = util.intl;
        const obj12 = { username, pronouns };
        formatToPlainStringResult = intl.formatToPlainString(util.t["lD2bO/"], obj12);
      }
      const obj13 = {};
      const merged2 = Object.assign(baseColors);
      obj13.thumbnailCornerRadius = 25;
      obj13.thumbnailUrl = avatarUri;
      const intl2 = util.intl;
      const t = util.t;
      const tmp10 = getEmbedThemeColorsDefault(theme);
      obj13.headerText = intl2.string(isPrivate ? t.KPnd2O : t.JxM9jQ).toUpperCase();
      obj13.titleText = title;
      obj13.titleColor = colors.titleColor;
      obj13.subtitle = formatToPlainStringResult;
      obj13.subtitleColor = colors.subtitleColor;
      const intl3 = util.intl;
      obj13.acceptLabelText = intl3.string(util.t.iXAna6);
      ({ acceptLabelGreenColor: obj4.acceptLabelColor, acceptLabelGreenBackgroundColor: obj4.acceptLabelBackgroundColor } = colors);
      obj13.canBeAccepted = true;
      obj13.embedCanBeTapped = true;
      obj13.type = InviteTypes.GUILD;
      return obj13;
    }
    const tmpResult = UserProfileEmbedCard;
  } else {
    return null;
  }
  obj = UserProfileEmbedRenderingMobileExperiment;
}