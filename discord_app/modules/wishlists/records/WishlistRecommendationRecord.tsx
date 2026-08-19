// discord_app/modules/wishlists/records/WishlistRecommendationRecord.tsx
import toJSDefault from "../../../lib/Record.tsx";
import createFromServer from "../../skus/SKURecord.tsx";
import createExecutable from "../../../records/ApplicationRecord.tsx";

toJSDefault;
const prototype = function WishlistRecommendationRecord(skus) {
  const tmp5 = new prototype(tmp4, tmp3, tmp2, tmp);
  // ThrowIfThisInitialized (0x7c)
  skus = skus.skus;
  tmp5.skus = skus.map((item, index) => closure_0.createFromServer(item));
  const entries = Object.entries(skus.skus_to_user_and_reason);
  tmp5.skusToUserAndReason = Object.fromEntries(entries.map((item, index) => {
    [tmp, tmp2] = item;
    const items = [tmp, tmp2];
    return items;
  }));
  const applications = skus.applications;
  tmp5.applications = applications.map((item, index) => closure_1.createFromServer(item));
  return tmp5;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(skus) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp4 = new prototype("Trying to call a non-function", tmp3, tmp2, tmp);
  // ThrowIfThisInitialized (0x7c)
  skus = skus.skus;
  tmp4.skus = skus.map((item, index) => closure_0.createFromServer(item));
  const entries = Object.entries(skus.skus_to_user_and_reason);
  tmp4.skusToUserAndReason = Object.fromEntries(entries.map((item, index) => {
    [tmp, tmp2] = item;
    const items = [tmp, tmp2];
    return items;
  }));
  const applications = skus.applications;
  tmp4.applications = applications.map((item, index) => closure_1.createFromServer(item));
  return tmp4;
};
const result = require("obj132").fileFinishedImporting("modules/wishlists/records/WishlistRecommendationRecord.tsx");

export default prototype;
export const WishlistRecommendationReason = { WISHLIST: "WISHLIST", RECOMMENDATION: "RECOMMENDATION" };