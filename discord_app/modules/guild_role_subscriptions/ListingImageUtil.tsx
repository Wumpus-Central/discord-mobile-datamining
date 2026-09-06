// === Module 17722: ListingImageUtil ===

// Module 17722 (ListingImageUtil)
import StoreUtils from "StoreUtils" /* 4802 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/ListingImageUtil.tsx");

export const getSource = function getSource(image_asset) {
  if (null == image_asset.image_asset) {
    let obj = { uri: "" };
  } else {
    obj = StoreUtils;
    let str = obj.getAssetURL(image_asset.application_id, image_asset.image_asset);
    if (str == null) {
      str = "";
    }
    obj = { uri: str };
  }
  return obj;
};