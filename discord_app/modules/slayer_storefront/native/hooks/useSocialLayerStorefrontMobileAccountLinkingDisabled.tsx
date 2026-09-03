// === Module 8511: useSocialLayerStorefrontMobileAccountLinkingDisabled ===

// Module 8511 (useSocialLayerStorefrontMobileAccountLinkingDisabled)
import closure_2 from "handleUserSettingsStoreUpdate" /* 6084 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/slayer_storefront/native/hooks/useSocialLayerStorefrontMobileAccountLinkingDisabled.tsx");

export const useSocialLayerStorefrontMobileAccountLinkingDisabled = function useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId) {
  const _require = applicationId;
  const items = [closure_2];
  const items1 = [applicationId];
  return _require(586).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const configForApplicationId = closure_1_2.getConfigForApplicationId(tmp);
      let prop;
      if (configForApplicationId != null) {
        prop = configForApplicationId.disableMobileAccountLinking;
      }
      tmp2 = true === prop;
    }
    return tmp2;
  }, items1);
};