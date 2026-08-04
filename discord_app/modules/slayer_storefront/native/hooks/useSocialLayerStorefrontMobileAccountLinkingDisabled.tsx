// discord_app/modules/slayer_storefront/native/hooks/useSocialLayerStorefrontMobileAccountLinkingDisabled.tsx
import handleUserSettingsStoreUpdate from "handleUserSettingsStoreUpdate";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/slayer_storefront/native/hooks/useSocialLayerStorefrontMobileAccountLinkingDisabled.tsx");

export const useSocialLayerStorefrontMobileAccountLinkingDisabled = function useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId) {
  const _require = applicationId;
  const items = [handleUserSettingsStoreUpdate];
  const items1 = [applicationId];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const configForApplicationId = outer1_2.getConfigForApplicationId(tmp);
      let prop;
      if (configForApplicationId != null) {
        prop = configForApplicationId.disableMobileAccountLinking;
      }
      tmp2 = true === prop;
    }
    return tmp2;
  }, items1);
};