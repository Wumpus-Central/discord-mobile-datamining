// discord_app/modules/premium/PremiumSKUFeature.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/PremiumSKUFeature.tsx");

export default function PremiumSKUFeature(INCREASED_FILE_UPLOAD_SIZE, getUserMaxFileSize, description) {
  const obj2 = Object.create(new.target.prototype);
  obj2.name = INCREASED_FILE_UPLOAD_SIZE;
  obj2.description = description;
  obj2.getFeatureValue = getUserMaxFileSize;
  const obj = { value: getUserMaxFileSize, configurable: false, writable: false };
  Object.defineProperty(obj2, "getFeatureValue", obj);
  return obj2;
}
