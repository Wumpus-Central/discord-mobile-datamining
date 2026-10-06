// discord_app/modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../../../intl/index.native.tsx";
import _modDef3233 from "../../../../../premium/premium_group/PremiumGroup.messages.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import renderer_EmbedUtils from "../../EmbedUtils.tsx";
import AssetRegistryDefault from "../../../../../../../_runtime/07730_AssetRegistry.js";
import PremiumGroupUtils from "../../../../../premium/premium_group/PremiumGroupUtils.native.tsx";
import PremiumGroupConstants from "../../../../../premium/premium_group/PremiumGroupConstants.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ HELP_CENTER_LINK: c3, PremiumGroupInviteState: closure_4 } = PremiumGroupConstants);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx",
);

export const createPremiumGroupInviteEmbed = function createPremiumGroupInviteEmbed(message, theme, id, channel) {
  let backgroundColor;
  let betaPillBackgroundColor;
  let betaPillTextColor;
  let body;
  let bodyTextColor;
  let formatToPartsResult;
  let header;
  let headerTextColor;
  let linkTextColor;
  let obj4;
  let str;
  if (null != message.author) {
    const obj2 = {
      headerTextColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
      bodyTextColor: nativeDefault.colors.TEXT_DEFAULT,
      linkTextColor: nativeDefault.colors.TEXT_LINK,
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
      betaPillTextColor: nativeDefault.colors.BLACK,
      betaPillBackgroundColor: nativeDefault.colors.WHITE,
    };
    const createNativeStyleProperties = createStyles.createNativeStyleProperties;
    createStyles;
    ({ backgroundColor, headerTextColor, bodyTextColor, linkTextColor, betaPillTextColor, betaPillBackgroundColor } =
      createNativeStyleProperties(obj2)(theme));
    createNativeStyleProperties(obj2)(theme);
    const author = message.author;
    const obj5 = renderer_EmbedUtils;
    const assetUriForEmbed = obj5.getAssetUriForEmbed(AssetRegistryDefault);
    id = author.id;
    const obj3 = { sender: author, channel, isSender: id === id, inviteState: constants.UNKNOWN };
    const obj6 = PremiumGroupUtils;
    const premiumGroupInviteEmbedText = obj6.getPremiumGroupInviteEmbedText(obj3);
    if (null != premiumGroupInviteEmbedText) {
      ({ header, body } = premiumGroupInviteEmbedText);
      const intl = intl3.intl;
      const obj = { learnMoreLinkOnClick: obj4 };
      obj4 = { action: "bindOpenUrl", url, linkColor: linkTextColor };
      const obj7 = {
        headerText: header,
        headerColor: headerTextColor,
        backgroundColor,
        borderColor: backgroundColor,
        headerImageUrl: assetUriForEmbed,
        betaPillText: str.toUpperCase(),
        betaPillTextColor,
        betaPillBackgroundColor,
        bodyText: body,
        bodyTextColor,
        learnMoreLink: formatToPartsResult,
      };
      formatToPartsResult = intl.formatToParts(_modDef3233["9VTnfI"], obj);
      const intl2 = intl3.intl;
      str = intl2.string(intl3.t.oW0eUd);
      return obj7;
    }
  }
};
