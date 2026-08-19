// discord_app/modules/guild_role_subscriptions/ListingImageUtil.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import _httpGetWithCountryCodeQuery from "../../utils/StoreUtils.tsx";

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