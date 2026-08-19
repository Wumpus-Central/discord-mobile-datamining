// discord_app/modules/premium/native/referrals/ReferralMessageManager.tsx
import DISCORD_EPOCHDefault from "../../../../utils/SnowflakeUtils.tsx";
import set from "../../../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";
import initializeDefault from "../../../../lib/AutomaticLifecycleManager.tsx";
import _fetchUserOffer from "../../UserOfferActionCreators.tsx";
import setupLoadFromMessageManagerHandlersDefault from "../../../messages/setupLoadFromMessageManagerHandlers.tsx";
import reset from "../../../../stores/billing/SubscriptionStore.tsx";
import emitChanges from "../../../../stores/billing/UserOfferStore.tsx";

require = fn;
function handleReferralMessages(type) {
  if (type.type === set.MessageTypes.PREMIUM_REFERRAL) {
    if (null != type.content) {
      if (obj3.isProbablyAValidSnowflake(type.content)) {
        premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
        const tmp9Result = DISCORD_EPOCHDefault;
        if (tmp6) {
          const userOffer = _fetchUserOffer.fetchUserOffer("ReferralMessageManager");
          const tmpResult = _fetchUserOffer;
        }
        tmp6 = null == premiumTypeSubscription && closure_4.shouldFetchReferralOffer(DISCORD_EPOCHDefault.extractTimestamp(type.content));
      }
      obj3 = DISCORD_EPOCHDefault;
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
const result = require("obj132").fileFinishedImporting("modules/premium/native/referrals/ReferralMessageManager.tsx");

export default tmp;