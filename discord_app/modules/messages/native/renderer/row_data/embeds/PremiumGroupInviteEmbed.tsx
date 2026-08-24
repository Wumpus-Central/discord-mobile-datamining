// === Module 8266: createPremiumGroupInviteEmbed ===

// Module 8266 (createPremiumGroupInviteEmbed)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import frozen from "frozen" /* 8171 */;
import registerAssetDefault from "registerAsset" /* 8267 */;
import getPremiumGroupInviteEmbedText from "getPremiumGroupInviteEmbedText" /* 8268 */;
import SubscriptionStatusTypes from "SubscriptionStatusTypes" /* 4053 */;

({ HELP_CENTER_LINK: c3, PremiumGroupInviteState: c4 } = SubscriptionStatusTypes);
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx");

export const createPremiumGroupInviteEmbed = function createPremiumGroupInviteEmbed(message, theme, id, channel) {
  if (null != message.author) {
    let obj = { headerTextColor: null, bodyTextColor: null, linkTextColor: null, backgroundColor: null, betaPillTextColor: null, betaPillBackgroundColor: null };
    obj[0] = ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
    obj[1] = ThemesDefault.colors.TEXT_DEFAULT;
    obj[2] = ThemesDefault.colors.TEXT_LINK;
    obj[3] = ThemesDefault.colors.BACKGROUND_MOD_NORMAL;
    obj[4] = ThemesDefault.colors.BLACK;
    obj[5] = ThemesDefault.colors.WHITE;
    const obj4 = createCacheKey;
    const tmp8 = importDefault;
    ({ backgroundColor, headerTextColor, bodyTextColor, linkTextColor, betaPillTextColor, betaPillBackgroundColor } = createCacheKey.createNativeStyleProperties(obj)(theme));
    const tmp9 = createCacheKey.createNativeStyleProperties(obj)(theme);
    const author = message.author;
    const assetUriForEmbed = frozen.getAssetUriForEmbed(registerAssetDefault);
    const obj6 = frozen;
    obj = { sender: null, channel: null, isSender: null, inviteState: null };
    obj[0] = author;
    obj[1] = channel;
    obj[2] = id === author.id;
    obj[3] = constants.UNKNOWN;
    const premiumGroupInviteEmbedText = getPremiumGroupInviteEmbedText.getPremiumGroupInviteEmbedText(obj);
    if (null != premiumGroupInviteEmbedText) {
      ({ header, body } = premiumGroupInviteEmbedText);
      const intl = tmp6(1236).intl;
      obj = { learnMoreLinkOnClick: null };
      obj1 = { action: "bindOpenUrl", url: null, linkColor: null };
      obj1[1] = closure_3;
      obj1[2] = linkTextColor;
      obj[0] = obj1;
      const obj2 = { headerText: null, headerColor: null, backgroundColor: null, borderColor: null, headerImageUrl: null, betaPillText: null, betaPillTextColor: null, betaPillBackgroundColor: null, bodyText: null, bodyTextColor: null, learnMoreLink: null };
      obj2[0] = header;
      obj2[1] = headerTextColor;
      obj2[2] = backgroundColor;
      obj2[3] = backgroundColor;
      obj2[4] = assetUriForEmbed;
      const intl2 = tmp6(1236).intl;
      const formatToPartsResult = intl.formatToParts(tmp8(2917)["9VTnfI"], obj);
      obj2[5] = intl2.string(tmp6(1236).t.oW0eUd).toUpperCase();
      obj2[6] = betaPillTextColor;
      obj2[7] = betaPillBackgroundColor;
      obj2[8] = body;
      obj2[9] = bodyTextColor;
      obj2[10] = formatToPartsResult;
      return obj2;
    }
    const obj7 = getPremiumGroupInviteEmbedText;
  }
};