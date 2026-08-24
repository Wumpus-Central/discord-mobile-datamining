// discord_app/modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import registerAssetDefault from "../../../../../../_runtime/08028_registerAsset.js";
import createCommonMessageDefault from "createCommonMessage.tsx";
import createReferralTrialEmbedRedesign from "../row_data/embeds/ReferralTrialEmbedRedesign.tsx";
import createReferralTrialEmbedRedeemable from "../row_data/embeds/ReferralTrialEmbed.tsx";
import closure_3 from "../../../../premium/ReferralTrialStore.tsx";
import closure_4 from "../../../../../stores/AuthenticationStore.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
createCacheKey = { iconTintColor: ThemesDefault.colors.ICON_STRONG, iconDividerColor: ThemesDefault.colors.ICON_STRONG };
let closure_5 = createCacheKey.createNativeStyleProperties(createCacheKey);
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx");

export const createReferralSystemMessage = function createReferralSystemMessage(message) {
  ({ message, theme } = message);
  id = id.getId();
  const referralTrialOfferId = message.referralTrialOfferId;
  if (null == referralTrialOfferId) {
    return null;
  } else {
    relevantUserTrialOffer = relevantUserTrialOffer.getRelevantUserTrialOffer(referralTrialOfferId);
    let referrerId;
    if (relevantUserTrialOffer != null) {
      referrerId = relevantUserTrialOffer.referrerId;
    }
    if (referrerId === id) {
      const obj3 = createReferralTrialEmbedRedeemable;
      const referralTrialEmbedRedeemable = obj3.createReferralTrialEmbedRedeemable(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedeemable) {
        return null;
      } else {
        let obj = {};
        const merged = Object.assign(createCommonMessageDefault(message));
        obj.referralTrialOfferInfo = referralTrialEmbedRedeemable;
        const tmp17 = callback(theme);
        obj.iconUrl = tmp8(8210).getAssetUriForEmbed(registerAssetDefault);
        ({ iconTintColor: obj4.iconTintColor, iconDividerColor: obj4.iconDividerColor } = tmp17);
        return obj;
      }
      tmp8 = require;
    } else {
      const obj6 = createReferralTrialEmbedRedesign;
      const referralTrialEmbedRedesign = obj6.createReferralTrialEmbedRedesign(message, theme, id, relevantUserTrialOffer);
      if (null == referralTrialEmbedRedesign) {
        return null;
      } else {
        obj = {};
        const merged1 = Object.assign(createCommonMessageDefault(message));
        obj.referralTrialOfferInfoRedesign = referralTrialEmbedRedesign;
        const tmp4 = callback(theme);
        obj.iconUrl = tmp23(8210).getAssetUriForEmbed(registerAssetDefault);
        ({ iconTintColor: obj.iconTintColor, iconDividerColor: obj.iconDividerColor } = tmp4);
        obj.timestamp = undefined;
        return obj;
      }
      tmp23 = require;
    }
  }
};