// discord_app/modules/premium/native/UserOfferManager.tsx
import UserStore from "../../../stores/UserStore.tsx";
import UserOfferStore from "../../../stores/billing/UserOfferStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
const PaymentGateways = fn(1085).PaymentGateways;
let prototype = function UserOfferManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    },
  };
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    currentUser = currentUser.getCurrentUser();
    const NitroACOMSubscriptionExperiment = applyArgumentsResult(dependencyMap[4]).NitroACOMSubscriptionExperiment;
    if (NitroACOMSubscriptionExperiment.getConfig({ location: "UserOfferManager.handlePostConnectionOpen" }).enabled) {
      const obj = { offerId: "Array", paymentGatewayOverride: constants.APPLE_ADVANCED_COMMERCE };
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
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/UserOfferManager.tsx");

export default prototype;
