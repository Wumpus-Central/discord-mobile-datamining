// discord_app/modules/wishlists/records/WishlistRecommendationRecord.tsx
import Record from "../../../lib/Record.tsx";
import SKURecord from "../../skus/SKURecord.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const f93147 = (item) => SKURecord.createFromServer(item);
const f93148 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const items = [tmp, tmp2];
  return items;
};
const f93149 = (item) => ApplicationRecord.createFromServer(item);
class WishlistRecommendationRecord extends Record {
  constructor(skus) {
    const tmp5 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
    skus = skus.skus;
    tmp5.skus = skus.map(f93147);
    const entries = Object.entries(skus.skus_to_user_and_reason);
    tmp5.skusToUserAndReason = fromEntries(entries.map(f93148));
    const applications = skus.applications;
    tmp5.applications = applications.map(f93149);
    return tmp5;
  }
  static fromServer(skus) {
    if (typeof WishlistRecommendationRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp7 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
      skus = skus.skus;
      tmp7.skus = skus.map(f93147);
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(skus.skus_to_user_and_reason);
      tmp7.skusToUserAndReason = fromEntries(entries.map(f93148));
      const applications = skus.applications;
      tmp7.applications = applications.map(f93149);
      return tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/WishlistRecommendationRecord.tsx");

export default WishlistRecommendationRecord;
export const WishlistRecommendationReason = { WISHLIST: "WISHLIST", RECOMMENDATION: "RECOMMENDATION" };
