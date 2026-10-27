// === Module 19432: ReferralMessageManager ===

// Module 19432 (ReferralMessageManager)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MessageTypes from "MessageTypes" /* 1100 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8432 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 18919 */;
import SubscriptionStore from "SubscriptionStore" /* 2055 */;
import UserOfferStore from "UserOfferStore" /* 7561 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7216 */;

require = fn;
function handleReferralMessages(type) {
  if (type.type === MessageTypes.MessageTypes.PREMIUM_REFERRAL) {
    if (null != type.content) {
      if (obj3.isProbablyAValidSnowflake(type.content)) {
        const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
        const tmp9Result = SnowflakeUtilsDefault;
        if (tmp6) {
          const userOffer = UserOfferActionCreators.fetchUserOffer("ReferralMessageManager");
          const tmpResult = UserOfferActionCreators;
        }
        tmp6 = null == premiumTypeSubscription && UserOfferStore.shouldFetchReferralOffer(SnowflakeUtilsDefault.extractTimestamp(type.content));
      }
      obj3 = SnowflakeUtilsDefault;
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
const tmp5 = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, ReferralMessageManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp5, handleReferralMessages);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageManager.tsx");

export default tmp5;