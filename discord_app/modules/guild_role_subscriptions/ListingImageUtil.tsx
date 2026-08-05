// discord_app/modules/guild_role_subscriptions/ListingImageUtil.tsx
import { _httpGetWithCountryCodeQuery } from "../../utils/StoreUtils.tsx";
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/ListingImageUtil.tsx");

export const getSource = function getSource(image_asset) {
  if (null == image_asset.image_asset) {
    let obj = { uri: "" };
  } else {
    obj = _httpGetWithCountryCodeQuery /* _httpGetWithCountryCodeQuery */;
    let str = obj.getAssetURL(image_asset.application_id, image_asset.image_asset);
    if (str == null) {
      str = "";
    }
    obj = { uri: null };
    obj[0] = str;
  }
  return obj;
};