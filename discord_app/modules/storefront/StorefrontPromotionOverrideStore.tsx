// discord_app/modules/storefront/StorefrontPromotionOverrideStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

let c0;
const Store = initializeDefault.Store;
class StorefrontPromotionOverrideStore extends Store {
}
StorefrontPromotionOverrideStore.prototype["getPromotionIdOverride"] = function getPromotionIdOverride() {
  return c0;
};
StorefrontPromotionOverrideStore.displayName = "StorefrontPromotionOverrideStore";
const storefrontPromotionOverrideStore = new StorefrontPromotionOverrideStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    c0 = undefined;
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function handleSet(promotionIdOverride) {
    promotionIdOverride = promotionIdOverride.promotionIdOverride;
  }
});
const result = require("set").fileFinishedImporting("modules/storefront/StorefrontPromotionOverrideStore.tsx");

export default storefrontPromotionOverrideStore;