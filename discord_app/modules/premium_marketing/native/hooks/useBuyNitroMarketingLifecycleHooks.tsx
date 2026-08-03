import noop from "noop";
import usePremiumPlanPurchasedStore from "usePremiumPlanPurchasedStore";
import { ContentDismissActionType } from "ContentDismissActionType";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ reset: c4, usePremiumPlanPurchasedStore: c5 } = usePremiumPlanPurchasedStore);
createCacheKey = { navigator: null };
createCacheKey = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopWidth: 0 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("ContentDismissActionType").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroMarketingLifecycleHooks.tsx");

export const useBuyNitroMarketingLifecycleHooks = function useBuyNitroMarketingLifecycleHooks(nativeStackNavigation, initialLoadCompleted) {
  let _require = nativeStackNavigation;
  let promotionMarketingComponent = initialLoadCompleted;
  let tmp = createCacheKey();
  const dependencyMap = tmp;
  _require = initialLoadCompleted;
  promotionMarketingComponent = undefined;
  promotionMarketingComponent = _require(7552).usePromotionMarketingComponent(_require(7556).MarketingComponentType.PREMIUM_TAB);
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
      let obj = promotionMarketingComponent(tmp[7]);
      tmp = !obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(initialLoadCompleted(tmp[8]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId).isDismissed;
    }
    if (tmp) {
      obj = { dismissAction: null };
      obj[0] = outer1_6.AUTO_DISMISS;
      const result = promotionMarketingComponent(tmp[9]).markSnowflakeBoundDismissibleContentAsDismissed(initialLoadCompleted(tmp[8]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId, obj);
      const obj2 = promotionMarketingComponent(tmp[9]);
    }
  }, items);
  const effect1 = React.useEffect(() => {
    let BuyNitroPurchaseLock = initialLoadCompleted(tmp[10]).BuyNitroPurchaseLock;
    BuyNitroPurchaseLock.end();
    return () => {
      const BuyNitroPurchaseLock = callback(7557).BuyNitroPurchaseLock;
      BuyNitroPurchaseLock.end();
      const BuyNitroPurchaseLock2 = callback(7557).BuyNitroPurchaseLock;
      const result = BuyNitroPurchaseLock2.setInitialLoadComplete(false);
    };
  }, []);
  const items1 = [initialLoadCompleted];
  const effect2 = React.useEffect(() => {
    const BuyNitroPurchaseLock = initialLoadCompleted(tmp[10]).BuyNitroPurchaseLock;
    const result = BuyNitroPurchaseLock.setInitialLoadComplete(promotionMarketingComponent);
  }, items1);
  const items2 = [nativeStackNavigation, tmp.navigator];
  const layoutEffect = React.useLayoutEffect(() => {
    initialLoadCompleted.setOptions({ headerShown: false, contentStyle: tmp.navigator });
  }, items2);
  const effect3 = React.useEffect(() => () => {
    if (!state.getState().isPaymentSuccess) {
      callback();
    }
  }, []);
};