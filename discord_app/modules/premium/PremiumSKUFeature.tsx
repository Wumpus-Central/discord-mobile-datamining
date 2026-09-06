// discord_app/modules/premium/PremiumSKUFeature.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/PremiumSKUFeature.tsx");

export default function PremiumSKUFeature(INCREASED_FILE_UPLOAD_SIZE, getUserMaxFileSize, description) {
  let obj = Object.create(new.target.prototype);
  obj.name = INCREASED_FILE_UPLOAD_SIZE;
  obj.description = description;
  obj.getFeatureValue = getUserMaxFileSize;
  obj = { value: getUserMaxFileSize, configurable: false, writable: false };
  Object.defineProperty(obj, "getFeatureValue", obj);
  return obj;
}.prototype;