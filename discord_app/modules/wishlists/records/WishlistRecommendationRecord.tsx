import "toJS";
import createFromServer from "createFromServer";
import createExecutable from "createExecutable";

let prototype;
prototype = function WishlistRecommendationRecord(skus) {
  const tmp5 = new prototype(tmp4, tmp3, tmp2, tmp);
  // ThrowIfThisInitialized (0x7c)
  skus = skus.skus;
  tmp5.skus = skus.map((arg0) => createFromServer.createFromServer(arg0));
  const entries = Object.entries(skus.skus_to_user_and_reason);
  tmp5.skusToUserAndReason = Object.fromEntries(entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const items = [tmp, tmp2];
    return items;
  }));
  const applications = skus.applications;
  tmp5.applications = applications.map((arg0) => createExecutable.createFromServer(arg0));
  return tmp5;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(skus) {
  if (typeof prototype !== "error") {
    HermesBuiltin.throwTypeError();
  }
  const tmp4 = new prototype("Trying to call a non-function", tmp3, tmp2, tmp);
  // ThrowIfThisInitialized (0x7c)
  skus = skus.skus;
  tmp4.skus = skus.map((arg0) => createFromServer.createFromServer(arg0));
  const entries = Object.entries(skus.skus_to_user_and_reason);
  tmp4.skusToUserAndReason = Object.fromEntries(entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const items = [tmp, tmp2];
    return items;
  }));
  const applications = skus.applications;
  tmp4.applications = applications.map((arg0) => createExecutable.createFromServer(arg0));
  return tmp4;
};
const result = require("createExecutable").fileFinishedImporting("modules/wishlists/records/WishlistRecommendationRecord.tsx");

export default prototype;
export const WishlistRecommendationReason = { WISHLIST: "WISHLIST", RECOMMENDATION: "RECOMMENDATION" };