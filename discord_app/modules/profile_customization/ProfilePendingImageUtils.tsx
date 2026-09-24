// === Module 14964: ProfilePendingImageUtils ===

// Module 14964 (ProfilePendingImageUtils)
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7322 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/profile_customization/ProfilePendingImageUtils.tsx");

export const createPendingImage = function createPendingImage(assetOrigin) {
  let NEW_ASSET = assetOrigin.assetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET;
  }
  ({ imageUri, staticImageUri, description, originalAsset, originalMd5 } = assetOrigin);
  if (ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET === NEW_ASSET) {
    const obj = { assetOrigin: NEW_ASSET, imageUri, staticImageUri, description, originalAsset: "Array", originalMd5 };
    return obj;
  } else if (ProfilePendingImageTypes.AssetOriginTypes.EDITED_ARCHIVED_ASSET === NEW_ASSET) {
    const obj2 = { assetOrigin: NEW_ASSET, imageUri, staticImageUri, description, originalAsset, originalMd5 };
    return obj2;
  } else if (ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET === NEW_ASSET) {
    const obj3 = { assetOrigin: NEW_ASSET, imageUri, description: "Array", originalAsset };
    return obj3;
  } else {
    GlobalUtils.assertNever(NEW_ASSET);
    const tmp3Result = GlobalUtils;
  }
};