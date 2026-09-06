// discord_app/modules/guild_role_subscriptions/ListingImageUtil.tsx
import StoreUtils from "../../utils/StoreUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
