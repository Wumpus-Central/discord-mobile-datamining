// discord_app/modules/premium/native/referrals/ReferralMessageManager.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import MessageTypes from "../../../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";
import UserOfferActionCreators from "../../UserOfferActionCreators.tsx";
import setupLoadFromMessageManagerHandlersDefault from "../../../messages/setupLoadFromMessageManagerHandlers.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import UserOfferStore from "../../../../stores/billing/UserOfferStore.tsx";
import AutomaticLifecycleManager from "../../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function handleReferralMessages(type) {
  if (type.type === MessageTypes.MessageTypes.PREMIUM_REFERRAL) {
    if (null != type.content) {
      if (obj3.isProbablyAValidSnowflake(type.content)) {
        const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
        const tmp9Result = tmp9(11);
        if (tmp6) {
          const userOffer = UserOfferActionCreators.fetchUserOffer("ReferralMessageManager");
          const tmpResult = UserOfferActionCreators;
        }
        tmp6 =
          null == premiumTypeSubscription &&
          UserOfferStore.shouldFetchReferralOffer(tmp9(11).extractTimestamp(type.content));
      }
      obj3 = SnowflakeUtilsDefault;
      tmp9 = importDefault;
    }
  }
}
class ReferralMessageManager extends tmp6 {
  constructor() {
    tmp3 = new ReferralMessageManager(tmp2, tmp, new.target);
    tmp4 = closure_1(closure_2[6])(tmp3, handleReferralMessages);
    return tmp3;
  }
}
tmp = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, ReferralMessageManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp, handleReferralMessages);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageManager.tsx");

export default tmp;
