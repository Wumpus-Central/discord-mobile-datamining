// === Module 13301: initialize ===

// Module 13301 (initialize)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initializeDefault from "initialize" /* 589 */;
import obj132Default from "obj132" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;

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