// discord_app/modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import _modDef8051 from "../../../../../../_runtime/metro/08051__.js";
import ReferralTrialEmbedRedesign from "../row_data/embeds/ReferralTrialEmbedRedesign.tsx";
import ReferralTrialEmbed from "../row_data/embeds/ReferralTrialEmbed.tsx";
import ReferralTrialStore from "../../../../premium/ReferralTrialStore.tsx";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";

require = fn;
fn(4560);
const createStyles = {
  iconTintColor: nativeDefault.colors.ICON_STRONG,
  iconDividerColor: nativeDefault.colors.ICON_STRONG,
};
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
      const referralTrialEmbedRedeemable = obj3.createReferralTrialEmbedRedeemable(
        message,
        theme,
        id,
        relevantUserTrialOffer,
      );
      if (null == referralTrialEmbedRedeemable) {
        return null;
      } else {
        let obj = {};
        const merged = Object.assign(createCommonMessageDefault(message));
        obj.referralTrialOfferInfo = referralTrialEmbedRedeemable;
        const tmp17 = closure_5(theme);
        obj.iconUrl = tmp8(7946).getAssetUriForEmbed(_modDef8051);
        ({ iconTintColor: obj4.iconTintColor, iconDividerColor: obj4.iconDividerColor } = tmp17);
        return obj;
      }
      tmp8 = require;
    } else {
      const obj6 = ReferralTrialEmbedRedesign;
      const referralTrialEmbedRedesign = obj6.createReferralTrialEmbedRedesign(
        message,
        theme,
        id,
        relevantUserTrialOffer,
      );
      if (null == referralTrialEmbedRedesign) {
        return null;
      } else {
        obj = {};
        const merged1 = Object.assign(createCommonMessageDefault(message));
        obj.referralTrialOfferInfoRedesign = referralTrialEmbedRedesign;
        const tmp4 = closure_5(theme);
        obj.iconUrl = tmp23(7946).getAssetUriForEmbed(_modDef8051);
        ({ iconTintColor: obj.iconTintColor, iconDividerColor: obj.iconDividerColor } = tmp4);
        obj.timestamp = undefined;
        return obj;
      }
      tmp23 = require;
    }
  }
};
