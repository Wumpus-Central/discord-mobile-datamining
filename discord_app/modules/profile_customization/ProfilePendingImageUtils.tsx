// === Module 14593: ProfilePendingImageUtils ===

// Module 14593 (ProfilePendingImageUtils)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6989 */;
import size from "module_2" /* 2 */;

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