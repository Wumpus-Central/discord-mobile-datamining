// === Module 8081: ReferralSystemMessage ===

// Module 8081 (ReferralSystemMessage)
import nativeDefault from "native" /* 587 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7890 */;
import createCommonMessageDefault from "createCommonMessage" /* 7982 */;
import _modDef8080 from "module_8080" /* 8080 */;
import ReferralTrialEmbedRedesign from "ReferralTrialEmbedRedesign" /* 8082 */;
import ReferralTrialEmbed from "ReferralTrialEmbed" /* 8095 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7174 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const createStyles = fn(5092);
let closure_5 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.ICON_STRONG, iconDividerColor: nativeDefault.colors.ICON_STRONG });
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx");

export const createReferralSystemMessage = function createReferralSystemMessage(message) {
  ({ message, theme } = message);
  const id = AuthenticationStore.getId();
  const referralTrialOfferId = message.referralTrialOfferId;
  if (null == referralTrialOfferId) {
    return null;
  } else {
    const relevantUserTrialOffer = ReferralTrialStore.getRelevantUserTrialOffer(referralTrialOfferId);
    let referrerId;
    if (relevantUserTrialOffer != null) {
      referrerId = relevantUserTrialOffer.referrerId;
    }
    if (referrerId === id) {
      const obj3 = ReferralTrialEmbed;
      const referralTrialEmbedRedeemable = obj3.createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedeemable) {
        return null;
      } else {
        const obj2 = {};
        const merged = Object.assign(createCommonMessageDefault(message));
        obj2.referralTrialOfferInfo = referralTrialEmbedRedeemable;
        const tmp17 = closure_5(theme);
        obj2.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8080);
        ({ iconTintColor: obj4.iconTintColor, iconDividerColor: obj4.iconDividerColor } = tmp17);
        return obj2;
      }
    } else {
      const obj6 = ReferralTrialEmbedRedesign;
      const referralTrialEmbedRedesign = obj6.createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedesign) {
        return null;
      } else {
        const obj = {};
        const merged1 = Object.assign(createCommonMessageDefault(message));
        obj.referralTrialOfferInfoRedesign = referralTrialEmbedRedesign;
        const tmp4 = closure_5(theme);
        obj.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8080);
        ({ iconTintColor: obj.iconTintColor, iconDividerColor: obj.iconDividerColor } = tmp4);
        obj.timestamp = undefined;
        return obj;
      }
    }
  }
};