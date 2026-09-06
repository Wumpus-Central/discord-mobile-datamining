// === Module 8786: StorefrontPromotionOverrideStore ===

// Module 8786 (StorefrontPromotionOverrideStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let promotionIdOverride;
const Store = initializeDefault.Store;
class StorefrontPromotionOverrideStore extends Store {
}
StorefrontPromotionOverrideStore.prototype["getPromotionIdOverride"] = function getPromotionIdOverride() {
  return promotionIdOverride;
};
StorefrontPromotionOverrideStore.displayName = "StorefrontPromotionOverrideStore";
const storefrontPromotionOverrideStore = new StorefrontPromotionOverrideStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    promotionIdOverride = undefined;
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function handleSet(promotionIdOverride) {
    promotionIdOverride = promotionIdOverride.promotionIdOverride;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/StorefrontPromotionOverrideStore.tsx");

export default storefrontPromotionOverrideStore;