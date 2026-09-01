// === Module 17414: handleReferralMessages ===

// Module 17414 (handleReferralMessages)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import set from "set" /* 686 */;
import initializeDefault from "initialize" /* 5486 */;
import getPaymentGateway from "getPaymentGateway" /* 7971 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 17001 */;
import closure_3 from "reset" /* 4145 */;
import closure_4 from "emitChanges" /* 7195 */;

require = arg1;
function handleReferralMessages(type) {
  if (type.type === set.MessageTypes.PREMIUM_REFERRAL) {
    if (null != type.content) {
      if (obj3.isProbablyAValidSnowflake(type.content)) {
        premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
        const tmp9Result = tmp9(11);
        if (tmp6) {
          const userOffer = getPaymentGateway.fetchUserOffer("ReferralMessageManager");
          const tmpResult = getPaymentGateway;
        }
        tmp6 = null == premiumTypeSubscription && closure_4.shouldFetchReferralOffer(tmp9(11).extractTimestamp(type.content));
      }
      obj3 = DISCORD_EPOCHDefault;
      tmp9 = importDefault;
    }
  }
}
initializeDefault;
class ReferralMessageManager extends tmp6 {
  constructor() {
    tmp3 = new ReferralMessageManager(tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp4 = require("setupLoadFromMessageManagerHandlers")(tmp3, handleReferralMessages);
    return tmp3;
  }
}
tmp = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, ReferralMessageManager, importDefault);
// ThrowIfThisInitialized (0x7c)
setupLoadFromMessageManagerHandlersDefault(tmp, handleReferralMessages);
const result = require("set").fileFinishedImporting("modules/premium/native/referrals/ReferralMessageManager.tsx");

export default tmp;