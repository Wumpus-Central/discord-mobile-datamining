// discord_app/stores/PremiumPromoStore.tsx
import DISCORD_EPOCHDefault from "../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import obj132Default from "../utils/Durations.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import fetchFingerprint from "AuthenticationStore.tsx";
import markAllUserIdListsStale from "RelationshipStore.tsx";

let closure_4 = 180 * obj132Default.Millis.DAY;
let c5 = false;
const Store = initializeDefault.Store;
class PremiumPromoStore extends Store {
}
const prototype = PremiumPromoStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_2);
};
prototype["isEligible"] = function isEligible() {
  return c5;
};
PremiumPromoStore.displayName = "PremiumPromoStore";
const premiumPromoStore = new PremiumPromoStore(dispatcherDefault, {
  CONNECTION_OPEN: function updatePremiumPromoEligibility() {
    let tmp2 = friendIDs.getFriendIDs().length >= 10;
    if (tmp2) {
      const _Date = Date;
      tmp2 = DISCORD_EPOCHDefault.extractTimestamp(id.getId()) < Date.now() - closure_4;
      const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(id.getId());
    }
    closure_5 = tmp2;
    return closure_5 !== tmp2;
  }
});
const result = require("obj132").fileFinishedImporting("stores/PremiumPromoStore.tsx");

export default premiumPromoStore;