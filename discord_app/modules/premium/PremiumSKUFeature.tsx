// discord_app/modules/premium/PremiumSKUFeature.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/premium/PremiumSKUFeature.tsx");

export default function PremiumSKUFeature(name, getFeatureValue, description) {
  let obj = Object.create(new.target.prototype);
  obj.name = name;
  obj.description = description;
  obj.getFeatureValue = getFeatureValue;
  obj = { value: getFeatureValue, configurable: false, writable: false };
  Object.defineProperty(obj, "getFeatureValue", obj);
  return obj;
}.prototype;