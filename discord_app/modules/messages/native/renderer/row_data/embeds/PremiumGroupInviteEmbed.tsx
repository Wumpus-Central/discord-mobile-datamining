// discord_app/modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx
import SubscriptionStatusTypes from "SubscriptionStatusTypes";

let c3;
let c4;
({ HELP_CENTER_LINK: c3, PremiumGroupInviteState: c4 } = SubscriptionStatusTypes);
const result = require("Themes").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PremiumGroupInviteEmbed.tsx");

export const createPremiumGroupInviteEmbed = function createPremiumGroupInviteEmbed(message, theme, id, channel) {
  let backgroundColor;
  let betaPillBackgroundColor;
  let betaPillTextColor;
  let body;
  let bodyTextColor;
  let header;
  let headerTextColor;
  let linkTextColor;
  if (null != message.author) {
    let obj = { headerTextColor: null, bodyTextColor: null, linkTextColor: null, backgroundColor: null, betaPillTextColor: null, betaPillBackgroundColor: null };
    obj[0] = importDefault(712).colors.MOBILE_TEXT_HEADING_PRIMARY;
    obj[1] = importDefault(712).colors.TEXT_DEFAULT;
    obj[2] = importDefault(712).colors.TEXT_LINK;
    obj[3] = importDefault(712).colors.BACKGROUND_MOD_NORMAL;
    obj[4] = importDefault(712).colors.BLACK;
    obj[5] = importDefault(712).colors.WHITE;
    const obj4 = require(4285) /* createCacheKey */;
    const tmp8 = importDefault;
    ({ backgroundColor, headerTextColor, bodyTextColor, linkTextColor, betaPillTextColor, betaPillBackgroundColor } = require(4285) /* createCacheKey */.createNativeStyleProperties(obj)(theme));
    const tmp9 = require(4285) /* createCacheKey */.createNativeStyleProperties(obj)(theme);
    const author = message.author;
    const assetUriForEmbed = require(7865) /* frozen */.getAssetUriForEmbed(importDefault(7965));
    const obj6 = require(7865) /* frozen */;
    obj = { sender: null, channel: null, isSender: null, inviteState: null };
    obj[0] = author;
    obj[1] = channel;
    obj[2] = id === author.id;
    obj[3] = constants.UNKNOWN;
    const premiumGroupInviteEmbedText = require(7966) /* getPremiumGroupInviteEmbedText */.getPremiumGroupInviteEmbedText(obj);
    if (null != premiumGroupInviteEmbedText) {
      ({ header, body } = premiumGroupInviteEmbedText);
      const intl = tmp6(1236).intl;
      obj = { learnMoreLinkOnClick: null };
      const obj1 = { action: "bindOpenUrl", url: null, linkColor: null };
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
      const formatToPartsResult = intl.formatToParts(tmp8(2867)["9VTnfI"], obj);
      obj2[5] = intl2.string(tmp6(1236).t.oW0eUd).toUpperCase();
      obj2[6] = betaPillTextColor;
      obj2[7] = betaPillBackgroundColor;
      obj2[8] = body;
      obj2[9] = bodyTextColor;
      obj2[10] = formatToPartsResult;
      return obj2;
    }
    const obj7 = require(7966) /* getPremiumGroupInviteEmbedText */;
  }
};