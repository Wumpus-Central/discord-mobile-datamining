// discord_app/modules/premium_marketing/native/hooks/useBuyNitroMarketingLifecycleHooks.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import usePremiumPlanPurchasedStore from "../../../premium/native/PremiumPlanPurchasedStore.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ reset: c4, usePremiumPlanPurchasedStore: c5 } = usePremiumPlanPurchasedStore);
createCacheKey = { navigator: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopWidth: 0 };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroMarketingLifecycleHooks.tsx");

export const useBuyNitroMarketingLifecycleHooks = function useBuyNitroMarketingLifecycleHooks(nativeStackNavigation, initialLoadCompleted) {
  let _require = nativeStackNavigation;
  let promotionMarketingComponent = initialLoadCompleted;
  let tmp = callback();
  dependencyMap = tmp;
  _require = initialLoadCompleted;
  promotionMarketingComponent = undefined;
  promotionMarketingComponent = require("../../../premium/hooks/usePromotionMarketingComponent.tsx").usePromotionMarketingComponent(require("../../../../../discord_common/js/shared/shared-constants/MarketingComponentType.tsx").MarketingComponentType.PREMIUM_TAB);
  const items = [initialLoadCompleted, promotionMarketingComponent];
  const effect = React.useEffect(() => {
    let tmp = initialLoadCompleted;
    if (initialLoadCompleted) {
      tmp = null != promotionMarketingComponent;
    }
    if (tmp) {
      tmp = "premiumTab" === promotionMarketingComponent.properties.properties.oneofKind;
    }
    if (tmp) {
      let obj = promotionMarketingComponent(_navigator[7]);
      tmp = !obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(initialLoadCompleted(_navigator[8]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId).isDismissed;
    }
    if (tmp) {
      obj = { dismissAction: null };
      obj[0] = closure_1_6.AUTO_DISMISS;
      const result = promotionMarketingComponent(_navigator[9]).markSnowflakeBoundDismissibleContentAsDismissed(initialLoadCompleted(_navigator[8]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId, obj);
      const obj2 = promotionMarketingComponent(_navigator[9]);
    }
  }, items);
  const effect1 = React.useEffect(() => {
    let BuyNitroPurchaseLock = initialLoadCompleted(_navigator[10]).BuyNitroPurchaseLock;
    BuyNitroPurchaseLock.end();
    let result = initialLoadCompleted(_navigator[11]).resetBuyNitroTrialAndPriceOverrides();
    return () => {
      const BuyNitroPurchaseLock = callback(12984).BuyNitroPurchaseLock;
      BuyNitroPurchaseLock.end();
      const BuyNitroPurchaseLock2 = callback(12984).BuyNitroPurchaseLock;
      const result = BuyNitroPurchaseLock2.setInitialLoadComplete(false);
      const result1 = callback(12985).resetBuyNitroTrialAndPriceOverrides();
    };
  }, []);
  const items1 = [initialLoadCompleted];
  const effect2 = React.useEffect(() => {
    const BuyNitroPurchaseLock = initialLoadCompleted(_navigator[10]).BuyNitroPurchaseLock;
    const result = BuyNitroPurchaseLock.setInitialLoadComplete(promotionMarketingComponent);
  }, items1);
  const items2 = [nativeStackNavigation, tmp.navigator];
  const layoutEffect = React.useLayoutEffect(() => {
    initialLoadCompleted.setOptions({ headerShown: false, contentStyle: _navigator.navigator });
  }, items2);
  const effect3 = React.useEffect(() => () => {
    if (!state.getState().isPaymentSuccess) {
      callback();
    }
  }, []);
};