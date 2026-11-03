// discord_app/modules/storefront/hooks/usePromotionForApplication.tsx
import StorefrontPromotionStore from "../StorefrontPromotionStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/hooks/usePromotionForApplication.tsx");

export default function usePromotionForApplication(arg0) {
  _require = arg0;
  items = [StorefrontPromotionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    StorefrontPromotionStore.getPromotionsForApplication(closure_0),
  );
  let first;
  if (stateFromStores != null) {
    first = stateFromStores[0];
  }
  if (first == null) {
    first = null;
  }
  return first;
}
