// === Module 13752: PremiumPromoStore ===

// Module 13752 (PremiumPromoStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

let closure_4 = 180 * DurationsDefault.Millis.DAY;
let closure_5 = false;
const Store = initializeDefault.Store;
class PremiumPromoStore extends Store {
}
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
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/PremiumPromoStore.tsx");

export default premiumPromoStore;