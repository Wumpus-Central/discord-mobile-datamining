// === Module 8052: ReferralSystemMessage ===

// Module 8052 (ReferralSystemMessage)
import nativeDefault from "native" /* 576 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7946 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import _modDef8051 from "module_8051" /* 8051 */;
import ReferralTrialEmbedRedesign from "ReferralTrialEmbedRedesign" /* 8053 */;
import ReferralTrialEmbed from "ReferralTrialEmbed" /* 8067 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7452 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
fn(4560);
const createStyles = { iconTintColor: nativeDefault.colors.ICON_STRONG, iconDividerColor: nativeDefault.colors.ICON_STRONG };
let closure_5 = createStyles.createNativeStyleProperties(createStyles);
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
        let obj = {};
        const merged = Object.assign(createCommonMessageDefault(message));
        obj.referralTrialOfferInfo = referralTrialEmbedRedeemable;
        const tmp17 = closure_5(theme);
        obj.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8051);
        ({ iconTintColor: obj4.iconTintColor, iconDividerColor: obj4.iconDividerColor } = tmp17);
        return obj;
      }
    } else {
      const obj6 = ReferralTrialEmbedRedesign;
      const referralTrialEmbedRedesign = obj6.createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedesign) {
        return null;
      } else {
        obj = {};
        const merged1 = Object.assign(createCommonMessageDefault(message));
        obj.referralTrialOfferInfoRedesign = referralTrialEmbedRedesign;
        const tmp4 = closure_5(theme);
        obj.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8051);
        ({ iconTintColor: obj.iconTintColor, iconDividerColor: obj.iconDividerColor } = tmp4);
        obj.timestamp = undefined;
        return obj;
      }
    }
  }
};