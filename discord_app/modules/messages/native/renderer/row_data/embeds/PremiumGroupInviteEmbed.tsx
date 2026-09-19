// discord_app/modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import _modDef3162 from "../../../../../premium/premium_group/PremiumGroup.messages.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import renderer_EmbedUtils from "../../EmbedUtils.tsx";
import _modDef8306 from "../../../../../../../_runtime/metro/08306__.js";
import PremiumGroupUtils from "../../../../../premium/premium_group/PremiumGroupUtils.native.tsx";
import PremiumGroupConstants from "../../../../../premium/premium_group/PremiumGroupConstants.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

({ HELP_CENTER_LINK: c3, PremiumGroupInviteState: closure_4 } = PremiumGroupConstants);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx",
);

export const createPremiumGroupInviteEmbed = function createPremiumGroupInviteEmbed(message, theme, id, channel) {
  if (null != message.author) {
    const obj2 = {
      headerTextColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
      bodyTextColor: nativeDefault.colors.TEXT_DEFAULT,
      linkTextColor: nativeDefault.colors.TEXT_LINK,
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
      betaPillTextColor: nativeDefault.colors.BLACK,
      betaPillBackgroundColor: nativeDefault.colors.WHITE,
    };
    ({ backgroundColor, headerTextColor, bodyTextColor, linkTextColor, betaPillTextColor, betaPillBackgroundColor } =
      createStyles.createNativeStyleProperties(obj2)(theme));
    const tmp9 = createStyles.createNativeStyleProperties(obj2)(theme);
    const author = message.author;
    const assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8306);
    const obj3 = { sender: author, channel, isSender: id === author.id, inviteState: constants.UNKNOWN };
    const premiumGroupInviteEmbedText = PremiumGroupUtils.getPremiumGroupInviteEmbedText(obj3);
    if (null != premiumGroupInviteEmbedText) {
      ({ header, body } = premiumGroupInviteEmbedText);
      const intl = util.intl;
      const obj = { learnMoreLinkOnClick: null };
      const obj5 = { action: "bindOpenUrl", url, linkColor: linkTextColor };
      obj.learnMoreLinkOnClick = obj5;
      const obj8 = {
        headerText: header,
        headerColor: headerTextColor,
        backgroundColor,
        borderColor: backgroundColor,
        headerImageUrl: assetUriForEmbed,
        betaPillText: null,
        betaPillTextColor: null,
        betaPillBackgroundColor: null,
        bodyText: null,
        bodyTextColor: null,
        learnMoreLink: null,
      };
      const intl2 = util.intl;
      const formatToPartsResult = intl.formatToParts(_modDef3162["9VTnfI"], obj);
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
