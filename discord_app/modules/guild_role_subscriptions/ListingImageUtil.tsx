// === Module 17153: getSource ===

// Module 17153 (getSource)
import set from "set" /* 2 */;
import _httpGetWithCountryCodeQuery from "_httpGetWithCountryCodeQuery" /* 4707 */;

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/ListingImageUtil.tsx");

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