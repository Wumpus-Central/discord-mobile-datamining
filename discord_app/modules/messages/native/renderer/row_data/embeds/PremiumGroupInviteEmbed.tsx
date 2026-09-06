// === Module 8047: PremiumGroupInviteEmbed ===

// Module 8047 (PremiumGroupInviteEmbed)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef3063 from "module_3063" /* 3063 */;
import createStyles from "createStyles" /* 4560 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7946 */;
import _modDef8048 from "module_8048" /* 8048 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 8049 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4232 */;
import size from "module_2" /* 2 */;

({ HELP_CENTER_LINK: c3, PremiumGroupInviteState: closure_4 } = PremiumGroupConstants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx");

export const createPremiumGroupInviteEmbed = function createPremiumGroupInviteEmbed(message, theme, id, channel) {
  if (null != message.author) {
    let obj = { headerTextColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: nativeDefault.colors.TEXT_DEFAULT, linkTextColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, betaPillTextColor: nativeDefault.colors.BLACK, betaPillBackgroundColor: nativeDefault.colors.WHITE };
    ({ backgroundColor, headerTextColor, bodyTextColor, linkTextColor, betaPillTextColor, betaPillBackgroundColor } = createStyles.createNativeStyleProperties(obj)(theme));
    const tmp9 = createStyles.createNativeStyleProperties(obj)(theme);
    const author = message.author;
    const assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8048);
    obj = { sender: author, channel, isSender: id === author.id, inviteState: constants.UNKNOWN };
    const premiumGroupInviteEmbedText = PremiumGroupUtils.getPremiumGroupInviteEmbedText(obj);
    if (null != premiumGroupInviteEmbedText) {
      ({ header, body } = premiumGroupInviteEmbedText);
      const intl = util.intl;
      obj = { learnMoreLinkOnClick: null };
      const obj1 = { action: "bindOpenUrl", url, linkColor: linkTextColor };
      obj.learnMoreLinkOnClick = obj1;
      const obj2 = { headerText: header, headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor, headerImageUrl: assetUriForEmbed, betaPillText: null, betaPillTextColor: null, betaPillBackgroundColor: null, bodyText: null, bodyTextColor: null, learnMoreLink: null };
      const intl2 = util.intl;
      const formatToPartsResult = intl.formatToParts(_modDef3063["9VTnfI"], obj);
      obj2.betaPillText = intl2.string(util.t.oW0eUd).toUpperCase();
      obj2.betaPillTextColor = betaPillTextColor;
      obj2.betaPillBackgroundColor = betaPillBackgroundColor;
      obj2.bodyText = body;
      obj2.bodyTextColor = bodyTextColor;
      obj2.learnMoreLink = formatToPartsResult;
      return obj2;
    }
  }
};