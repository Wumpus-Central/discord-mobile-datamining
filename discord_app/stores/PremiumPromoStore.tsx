// discord_app/stores/PremiumPromoStore.tsx
import DISCORD_EPOCHDefault from "../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import setDefault from "../utils/Durations.tsx";
import closure_2 from "AuthenticationStore.tsx";
import closure_3 from "RelationshipStore.tsx";

let closure_4 = 180 * setDefault.Millis.DAY;
let c5 = false;
const Store = initializeDefault.Store;
class PremiumPromoStore extends Store {}
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
      const obj = DISCORD_EPOCHDefault;
      tmp2 = DISCORD_EPOCHDefault.extractTimestamp(id.getId()) < Date.now() - closure_4;
      const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(id.getId());
    }
    closure_5 = tmp2;
    return closure_5 !== tmp2;
  },
});
const result = require("set").fileFinishedImporting("stores/PremiumPromoStore.tsx");

export default premiumPromoStore;
