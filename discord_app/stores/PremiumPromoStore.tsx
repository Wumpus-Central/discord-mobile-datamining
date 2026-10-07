// discord_app/stores/PremiumPromoStore.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import DurationsDefault from "../utils/Durations.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import RelationshipStore from "RelationshipStore.tsx";

let closure_4 = 180 * DurationsDefault.Millis.DAY;
let closure_5 = false;
const Store = initializeDefault.Store;
class PremiumPromoStore extends Store {}
const prototype = PremiumPromoStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(RelationshipStore, AuthenticationStore);
};
prototype["isEligible"] = function isEligible() {
  return closure_5;
};
PremiumPromoStore.displayName = "PremiumPromoStore";
const premiumPromoStore = new PremiumPromoStore(DispatcherDefault, {
  CONNECTION_OPEN: function updatePremiumPromoEligibility() {
    let tmp2 = RelationshipStore.getFriendIDs().length >= 10;
    if (tmp2) {
      const _Date = Date;
      tmp2 = SnowflakeUtilsDefault.extractTimestamp(AuthenticationStore.getId()) < Date.now() - closure_4;
      const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(AuthenticationStore.getId());
    }
    closure_5 = tmp2;
    return closure_5 !== tmp2;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/PremiumPromoStore.tsx");

export default premiumPromoStore;
