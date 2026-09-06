// === Module 7227: WishlistRecommendationRecord ===

// Module 7227 (WishlistRecommendationRecord)
import Record from "Record" /* 1386 */;
import SKURecord from "SKURecord" /* 5511 */;
import ApplicationRecord from "ApplicationRecord" /* 1918 */;

const prototype = function WishlistRecommendationRecord(skus) {
  const tmp5 = new prototype(tmp4, tmp3, tmp2, tmp);
  skus = skus.skus;
  tmp5.skus = skus.map((item) => SKURecord.createFromServer(item));
  const entries = Object.entries(skus.skus_to_user_and_reason);
  tmp5.skusToUserAndReason = Object.fromEntries(entries.map((item) => {
    [tmp, tmp2] = item;
    const items = [tmp, tmp2];
    return items;
  }));
  const applications = skus.applications;
  tmp5.applications = applications.map((item) => ApplicationRecord.createFromServer(item));
  return tmp5;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(skus) {
  if (typeof prototype === "function") {
    const tmp9 = new prototype(tmp4, tmp3, tmp2, tmp);
    skus = skus.skus;
    tmp9.skus = skus.map((item) => SKURecord.createFromServer(item));
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(skus.skus_to_user_and_reason);
    tmp9.skusToUserAndReason = Object.fromEntries(entries.map((item) => {
      [tmp, tmp2] = item;
      const items = [tmp, tmp2];
      return items;
    }));
    const applications = skus.applications;
    tmp9.applications = applications.map((item) => ApplicationRecord.createFromServer(item));
    return tmp9;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/records/WishlistRecommendationRecord.tsx");

export default prototype;
export const WishlistRecommendationReason = { WISHLIST: "WISHLIST", RECOMMENDATION: "RECOMMENDATION" };