import { DISCORD_EPOCH } from "../utils/SnowflakeUtils.tsx";
// discord_app/stores/PremiumPromoStore.tsx
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
      const obj = DISCORD_EPOCH;
      tmp2 = DISCORD_EPOCH.extractTimestamp(id.getId()) < Date.now() - closure_4;
      const extractTimestampResult = DISCORD_EPOCH.extractTimestamp(id.getId());
    }
    let c5 = tmp2;
    return c5 !== tmp2;
  }
});
const result = require("set").fileFinishedImporting("stores/PremiumPromoStore.tsx");

export default premiumPromoStore;