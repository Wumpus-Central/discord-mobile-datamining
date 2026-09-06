// === Module 13981: PremiumSKUFeature ===

// Module 13981 (PremiumSKUFeature)
import size from "module_2" /* 2 */;

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