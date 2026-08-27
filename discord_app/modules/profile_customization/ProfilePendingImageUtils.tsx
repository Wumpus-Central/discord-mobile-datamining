// === Module 14210: createPendingImage ===

// Module 14210 (createPendingImage)
import set from "set" /* 2 */;
import AssetOriginTypes from "AssetOriginTypes" /* 7694 */;

const result = set.fileFinishedImporting("modules/profile_customization/ProfilePendingImageUtils.tsx");

export const createPendingImage = function createPendingImage(assetOrigin) {
  let NEW_ASSET = assetOrigin.assetOrigin;
  if (NEW_ASSET === undefined) {
    NEW_ASSET = AssetOriginTypes.AssetOriginTypes.NEW_ASSET;
  }
  ({ imageUri, staticImageUri, description, originalAsset, originalMd5 } = assetOrigin);
  if (AssetOriginTypes.AssetOriginTypes.NEW_ASSET === NEW_ASSET) {
    let obj = { assetOrigin: null, imageUri: null, staticImageUri: null, description: null, originalAsset: "Array", originalMd5: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003270907425797958 };
    obj[0] = NEW_ASSET;
    obj[1] = imageUri;
    obj[2] = staticImageUri;
    obj[3] = description;
    obj[5] = originalMd5;
    return obj;
  } else if (tmp3(7694).AssetOriginTypes.EDITED_ARCHIVED_ASSET === NEW_ASSET) {
    obj = { assetOrigin: null, imageUri: null, staticImageUri: null, description: null, originalAsset: null, originalMd5: null };
    obj[0] = NEW_ASSET;
    obj[1] = imageUri;
    obj[2] = staticImageUri;
    obj[3] = description;
    obj[4] = originalAsset;
    obj[5] = originalMd5;
    return obj;
  } else if (tmp3(7694).AssetOriginTypes.ARCHIVED_ASSET === NEW_ASSET) {
    obj1 = { assetOrigin: null, imageUri: null, description: "Array", originalAsset: true };
    obj1[0] = NEW_ASSET;
    obj1[1] = imageUri;
    obj1[3] = originalAsset;
    return obj1;
  } else {
    tmp3(1370).assertNever(NEW_ASSET);
  }
};