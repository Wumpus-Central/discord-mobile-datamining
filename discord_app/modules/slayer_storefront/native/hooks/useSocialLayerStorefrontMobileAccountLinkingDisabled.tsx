// discord_app/modules/slayer_storefront/native/hooks/useSocialLayerStorefrontMobileAccountLinkingDisabled.tsx
import SocialLayerStorefrontStore from "../../SocialLayerStorefrontStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/hooks/useSocialLayerStorefrontMobileAccountLinkingDisabled.tsx",
);

export const useSocialLayerStorefrontMobileAccountLinkingDisabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSocialLayerStorefrontMobileAccountLinkingDisabled(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SocialLayerStorefrontStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
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
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6, tmp7);
    }
  : function useSocialLayerStorefrontMobileAccountLinkingDisabled(arg0) {
      _require = arg0;
      const items = [SocialLayerStorefrontStore];
      const items1 = [arg0];
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
