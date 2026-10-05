// discord_app/modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import renderer_EmbedUtils from "../EmbedUtils.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/07722_AssetRegistry.js";
import ReferralTrialEmbedRedesign from "../row_data/embeds/ReferralTrialEmbedRedesign.tsx";
import ReferralTrialEmbed from "../row_data/embeds/ReferralTrialEmbed.tsx";
import ReferralTrialStore from "../../../../premium/ReferralTrialStore.tsx";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj = { iconTintColor: nativeDefault.colors.ICON_STRONG, iconDividerColor: nativeDefault.colors.ICON_STRONG };
let closure_5 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ReferralSystemMessage.tsx");

export const createReferralSystemMessage = function createReferralSystemMessage(message) {
  let theme;
  let tmp23Result;
  let tmp8Result;
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
        const obj2 = {
          referralTrialOfferInfo: referralTrialEmbedRedeemable,
          iconUrl: tmp8Result.getAssetUriForEmbed(AssetRegistryDefault),
        };
        const tmp17 = closure_5(theme);
        const merged = Object.assign(createCommonMessageDefault(message));
        ({ iconTintColor: obj4.iconTintColor, iconDividerColor: obj4.iconDividerColor } = tmp17);
        tmp8Result = renderer_EmbedUtils;
        return obj2;
      }
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
        const obj = {
          referralTrialOfferInfoRedesign: referralTrialEmbedRedesign,
          iconUrl: tmp23Result.getAssetUriForEmbed(AssetRegistryDefault),
          timestamp: undefined,
        };
        const tmp4 = closure_5(theme);
        const merged1 = Object.assign(createCommonMessageDefault(message));
        ({ iconTintColor: obj.iconTintColor, iconDividerColor: obj.iconDividerColor } = tmp4);
        tmp23Result = renderer_EmbedUtils;
        return obj;
      }
    }
  }
};
