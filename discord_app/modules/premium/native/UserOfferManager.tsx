// === Module 17016: prototype ===

// Module 17016 (prototype)
import initializeDefault from "initialize" /* 5451 */;
import closure_2 from "mergeGuildAvatar" /* 1923 */;
import closure_3 from "emitChanges" /* 7142 */;
import { PaymentGateways } from "sum" /* 505 */;

let require = arg1;
initializeDefault;
let prototype = function UserOfferManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    }
  };
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    currentUser = currentUser.getCurrentUser();
    const NitroACOMSubscriptionExperiment = applyArgumentsResult(table[4]).NitroACOMSubscriptionExperiment;
    if (NitroACOMSubscriptionExperiment.getConfig({ location: "UserOfferManager.handlePostConnectionOpen" }).enabled) {
      const obj = { offerId: "Array", paymentGatewayOverride: 0 };
      obj[1] = constants.APPLE_ADVANCED_COMMERCE;
      const tmp4 = obj;
    }
    let isPremiumResult = null == currentUser || !currentUser.verified;
    if (!isPremiumResult) {
      let tmp2Result = tmp2(tmp3[5]);
      isPremiumResult = tmp2Result.isPremium(currentUser);
    }
    if (!isPremiumResult) {
      isPremiumResult = fetchingOffer.isFetchingOffer();
    }
    if (!isPremiumResult) {
      tmp2Result = tmp2(tmp3[6]);
      const userOffer = tmp2Result.fetchUserOffer("MobilePremiumOfferManager", true, tmp4);
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/premium/native/UserOfferManager.tsx");

export default prototype;