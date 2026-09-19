// === Module 14244: PremiumSKUFeature ===

// Module 14244 (PremiumSKUFeature)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/PremiumSKUFeature.tsx");

export default function PremiumSKUFeature(INCREASED_FILE_UPLOAD_SIZE, getUserMaxFileSize, description) {
  const obj2 = Object.create(new.target.prototype);
  obj2.name = INCREASED_FILE_UPLOAD_SIZE;
  obj2.description = description;
  obj2.getFeatureValue = getUserMaxFileSize;
  Object.defineProperty(obj2, "getFeatureValue", { value: getUserMaxFileSize, configurable: false, writable: false });
  return obj2;
}.prototype;