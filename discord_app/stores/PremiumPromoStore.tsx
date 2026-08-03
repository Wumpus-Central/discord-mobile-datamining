// === Module 12824: initialize ===

// Module 12824 (initialize)
import fetchFingerprint from "fetchFingerprint";
import upsertRelationship from "upsertRelationship";
import { Store } from "initialize";

let closure_4 = 180 * require("set").Millis.DAY;
let c5 = false;
class PremiumPromoStore extends Store {
}
const prototype = PremiumPromoStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(upsertRelationship, fetchFingerprint);
};
prototype["isEligible"] = function isEligible() {
  return c5;
};
PremiumPromoStore.displayName = "PremiumPromoStore";
const premiumPromoStore = new PremiumPromoStore(require("dispatcher"), {
  CONNECTION_OPEN: function updatePremiumPromoEligibility() {
    let tmp2 = friendIDs.getFriendIDs().length >= 10;
    if (tmp2) {
      const _Date = Date;
      const obj = importDefault(11);
      tmp2 = importDefault(11).extractTimestamp(id.getId()) < Date.now() - closure_4;
      const extractTimestampResult = importDefault(11).extractTimestamp(id.getId());
    }
    let c5 = tmp2;
    return c5 !== tmp2;
  }
});
const result = require("set").fileFinishedImporting("stores/PremiumPromoStore.tsx");

export default premiumPromoStore;