// discord_app/modules/profile_customization/ProfilePendingImageUtils.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import ProfilePendingImageTypes from "ProfilePendingImageTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/profile_customization/ProfilePendingImageUtils.tsx");

export const createPendingImage = function createPendingImage(assetOrigin) {
  let NEW_ASSET = assetOrigin.assetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET;
  }
  ({ imageUri, staticImageUri, description, originalAsset, originalMd5 } = assetOrigin);
  if (ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET === NEW_ASSET) {
    let obj = { assetOrigin: NEW_ASSET, imageUri, staticImageUri, description, originalAsset: "Array", originalMd5 };
    return obj;
  } else if (ProfilePendingImageTypes.AssetOriginTypes.EDITED_ARCHIVED_ASSET === NEW_ASSET) {
    obj = { assetOrigin: NEW_ASSET, imageUri, staticImageUri, description, originalAsset, originalMd5 };
    return obj;
  } else if (ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET === NEW_ASSET) {
    const obj1 = { assetOrigin: NEW_ASSET, imageUri, description: "Array", originalAsset };
    return obj1;
  } else {
    GlobalUtils.assertNever(NEW_ASSET);
    const tmp3Result = GlobalUtils;
  }
};
