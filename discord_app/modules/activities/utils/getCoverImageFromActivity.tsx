// discord_app/modules/activities/utils/getCoverImageFromActivity.tsx
import set from "../../../../_runtime/00002_set.js";
import items3 from "../Constants.tsx";
import updateAssets from "../../../utils/ApplicationAssetUtils.tsx";

let closure_2 = items3.ACTIVITY_INVITE_COVER_IMAGE_SIZE;
const result = set.fileFinishedImporting("modules/activities/utils/getCoverImageFromActivity.tsx");

export default function getCoverImageFromActivity(assets, application_id) {
  let assetImage = null;
  if (null != assets) {
    assetImage = null;
    if (null != assets.assets) {
      assetImage = null;
      if (null != assets.assets.large_image) {
        const items = [closure_2, closure_2];
        assetImage = updateAssets.getAssetImage(application_id, assets.assets.large_image, items);
        const obj = updateAssets;
      }
    }
  }
  return assetImage;
};