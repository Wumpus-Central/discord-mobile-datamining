// discord_app/modules/slayer_storefront/native/hooks/useSocialLayerStorefrontMobileAccountLinkingDisabled.tsx
import SocialLayerStorefrontStore from "../../SocialLayerStorefrontStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/hooks/useSocialLayerStorefrontMobileAccountLinkingDisabled.tsx",
);

export const useSocialLayerStorefrontMobileAccountLinkingDisabled =
  function useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId) {
    _require = applicationId;
    const items = [SocialLayerStorefrontStore];
    const items1 = [applicationId];
    return require("initialize").useStateFromStores(
      items,
      () => {
        let tmp2 = null != closure_0;
        if (tmp2) {
          const configForApplicationId = SocialLayerStorefrontStore.getConfigForApplicationId(tmp);
          let prop;
          if (configForApplicationId != null) {
            prop = configForApplicationId.disableMobileAccountLinking;
          }
          tmp2 = true === prop;
        }
        return tmp2;
      },
      items1,
    );
  };
