// === Module 10283: frozen ===

// Module 10283 (frozen)
import obj132 from "obj132" /* 2 */;

const frozen = Object.freeze({ VIDEO: "ALAssetTypeVideo", PHOTO: "ALAssetTypePhoto" });
const frozen1 = Object.freeze({ VIDEO: "video", IMAGE: "image" });
const result = obj132.fileFinishedImporting("modules/device/native/DeviceConstants.tsx");

export const ALAssetsType = frozen;
export const DeviceMediaType = frozen1;