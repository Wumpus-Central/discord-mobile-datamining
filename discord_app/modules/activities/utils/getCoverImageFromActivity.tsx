import { ACTIVITY_INVITE_COVER_IMAGE_SIZE as closure_2 } from "items3";

const result = require("set").fileFinishedImporting("modules/activities/utils/getCoverImageFromActivity.tsx");

export default function getCoverImageFromActivity(assets, application_id) {
  let assetImage = null;
  if (null != assets) {
    assetImage = null;
    if (null != assets.assets) {
      assetImage = null;
      if (null != assets.assets.large_image) {
        const items = [closure_2, closure_2];
        assetImage = require(8039) /* updateAssets */.getAssetImage(application_id, assets.assets.large_image, items);
        const obj = require(8039) /* updateAssets */;
      }
    }
  }
  return assetImage;
};