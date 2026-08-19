// === Module 16943: getSource ===

// Module 16943 (getSource)
import obj132 from "obj132" /* 2 */;
import _httpGetWithCountryCodeQuery from "_httpGetWithCountryCodeQuery" /* 4384 */;

const result = obj132.fileFinishedImporting("modules/guild_role_subscriptions/ListingImageUtil.tsx");

export const getSource = function getSource(image_asset) {
  if (null == image_asset.image_asset) {
    let obj = { uri: "" };
  } else {
    obj = _httpGetWithCountryCodeQuery;
    let str = obj.getAssetURL(image_asset.application_id, image_asset.image_asset);
    if (str == null) {
      str = "";
    }
    obj = { uri: null };
    obj[0] = str;
  }
  return obj;
};