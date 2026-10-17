// === Module 8346: PremiumGroupInviteEmbed ===

// Module 8346 (PremiumGroupInviteEmbed)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3303 from "module_3303" /* 3303 */;
import createStyles from "createStyles" /* 5191 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8158 */;
import _modDef8347 from "module_8347" /* 8347 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 8348 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4878 */;
import size from "module_2" /* 2 */;

({ HELP_CENTER_LINK: c3, PremiumGroupInviteState: closure_4 } = PremiumGroupConstants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx");

export const createPremiumGroupInviteEmbed = function createPremiumGroupInviteEmbed(message, theme, id, channel) {
  if (null != message.author) {
    const obj2 = { headerTextColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, bodyTextColor: nativeDefault.colors.TEXT_DEFAULT, linkTextColor: nativeDefault.colors.TEXT_LINK, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, betaPillTextColor: nativeDefault.colors.BLACK, betaPillBackgroundColor: nativeDefault.colors.WHITE };
    ({ backgroundColor, headerTextColor, bodyTextColor, linkTextColor, betaPillTextColor, betaPillBackgroundColor } = createStyles.createNativeStyleProperties(obj2)(theme));
    const tmp9 = createStyles.createNativeStyleProperties(obj2)(theme);
    const author = message.author;
    const assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8347);
    const obj3 = { sender: author, channel, isSender: id === author.id, inviteState: constants.UNKNOWN };
    const premiumGroupInviteEmbedText = PremiumGroupUtils.getPremiumGroupInviteEmbedText(obj3);
    if (null != premiumGroupInviteEmbedText) {
      ({ header, body } = premiumGroupInviteEmbedText);
      const intl = util.intl;
      const obj = { learnMoreLinkOnClick: null };
      const obj5 = { action: "bindOpenUrl", url, linkColor: linkTextColor };
      obj.learnMoreLinkOnClick = obj5;
      const obj8 = { headerText: header, headerColor: headerTextColor, backgroundColor, borderColor: backgroundColor, headerImageUrl: assetUriForEmbed, betaPillText: null, betaPillTextColor: null, betaPillBackgroundColor: null, bodyText: null, bodyTextColor: null, learnMoreLink: null };
      const intl2 = util.intl;
      const formatToPartsResult = intl.formatToParts(_modDef3303["9VTnfI"], obj);
      obj8.betaPillText = intl2.string(util.t.oW0eUd).toUpperCase();
      obj8.betaPillTextColor = betaPillTextColor;
      obj8.betaPillBackgroundColor = betaPillBackgroundColor;
      obj8.bodyText = body;
      obj8.bodyTextColor = bodyTextColor;
      obj8.learnMoreLink = formatToPartsResult;
      return obj8;
    }
  }
};