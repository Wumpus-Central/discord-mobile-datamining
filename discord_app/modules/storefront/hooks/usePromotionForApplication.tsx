// === Module 9378: usePromotionForApplication ===

// Module 9378 (usePromotionForApplication)
import StorefrontPromotionStore from "StorefrontPromotionStore" /* 9349 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/hooks/usePromotionForApplication.tsx");

export default function usePromotionForApplication(arg0) {
  _require = arg0;
  items = [StorefrontPromotionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => StorefrontPromotionStore.getPromotionsForApplication(closure_0));
  let first;
  if (stateFromStores != null) {
    first = stateFromStores[0];
  }
  if (first == null) {
    first = null;
  }
  return first;
};