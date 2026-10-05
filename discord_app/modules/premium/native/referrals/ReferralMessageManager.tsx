// discord_app/modules/premium/native/referrals/ReferralMessageManager.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import MessageTypes from "../../../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";
import UserOfferActionCreators from "../../UserOfferActionCreators.tsx";
import setupLoadFromMessageManagerHandlersDefault from "../../../messages/setupLoadFromMessageManagerHandlers.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import UserOfferStore from "../../../../stores/billing/UserOfferStore.tsx";
import AutomaticLifecycleManager from "../../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let tmp3;
function handleReferralMessages(type) {
  if (type.type === MessageTypes.MessageTypes.PREMIUM_REFERRAL) {
    if (null != type.content) {
      const obj3 = SnowflakeUtilsDefault;
      if (obj3.isProbablyAValidSnowflake(type.content)) {
        const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
        const tmp9Result = SnowflakeUtilsDefault;
        const tmp6 =
          null == premiumTypeSubscription &&
          UserOfferStore.shouldFetchReferralOffer(tmp9Result.extractTimestamp(type.content));
        if (tmp6) {
          const tmpResult = UserOfferActionCreators;
          const userOffer = tmpResult.fetchUserOffer("ReferralMessageManager");
        }
      }
    }
  }
}
class ReferralMessageManager extends AutomaticLifecycleManager {
  constructor() {
    const tmp3 = new ReferralMessageManager(tmp2, tmp, new.target);
    setupLoadFromMessageManagerHandlersDefault(tmp3, handleReferralMessages);
    return tmp3;
  }
}
const tmp5 = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, ReferralMessageManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp5, handleReferralMessages);
const result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageManager.tsx");

export default tmp5;
