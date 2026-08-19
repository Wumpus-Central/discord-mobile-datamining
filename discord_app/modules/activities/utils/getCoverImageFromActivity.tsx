// === Module 12785: getCoverImageFromActivity ===

// Module 12785 (getCoverImageFromActivity)
import obj132 from "obj132" /* 2 */;
import items3 from "items3" /* 4481 */;
import updateAssets from "updateAssets" /* 7247 */;

let closure_2 = items3.ACTIVITY_INVITE_COVER_IMAGE_SIZE;
const result = obj132.fileFinishedImporting("modules/activities/utils/getCoverImageFromActivity.tsx");

export default function getCoverImageFromActivity(assets, application_id) {
  let assetImage = null;
  if (null != assets) {
    assetImage = null;
    if (null != assets.assets) {
      assetImage = null;
      if (null != assets.assets.large_image) {
        const items = [closure_2, closure_2];
        assetImage = updateAssets.getAssetImage(application_id, assets.assets.large_image, items);
      }
    }
  }
  return assetImage;
};