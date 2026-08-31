// === Module 13373: initialize ===

// Module 13373 (initialize)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 589 */;
import setDefault from "set" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "markAllUserIdListsStale" /* 4100 */;

let closure_4 = 180 * setDefault.Millis.DAY;
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
      const obj = DISCORD_EPOCHDefault;
      tmp2 = DISCORD_EPOCHDefault.extractTimestamp(id.getId()) < Date.now() - closure_4;
      const extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(id.getId());
    }
    closure_5 = tmp2;
    return closure_5 !== tmp2;
  }
});
const result = require("set").fileFinishedImporting("stores/PremiumPromoStore.tsx");

export default premiumPromoStore;