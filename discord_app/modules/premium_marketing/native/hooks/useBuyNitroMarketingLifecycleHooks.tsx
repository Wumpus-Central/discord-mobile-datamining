// discord_app/modules/premium_marketing/native/hooks/useBuyNitroMarketingLifecycleHooks.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtilsAll from "../../../dismissible_content/DismissibleContentUtils.tsx";
import DismissibleContentUnsafeUtilsAll from "../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import useBuyNitroPurchaseLock from "useBuyNitroPurchaseLock.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const PremiumPlanPurchasedStore = fn(7421);
({ reset: closure_4, usePremiumPlanPurchasedStore: hasOwnProperty } = PremiumPlanPurchasedStore);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
fn(4560);
let createStyles = { navigator: null };
createStyles = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopWidth: 0 };
createStyles.navigator = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/premium_marketing/native/hooks/useBuyNitroMarketingLifecycleHooks.tsx",
);

export const useBuyNitroMarketingLifecycleHooks = function useBuyNitroMarketingLifecycleHooks(
  nativeStackNavigation,
  initialLoadCompleted,
) {
  _require = nativeStackNavigation;
  let tmp = closure_7();
  dependencyMap = tmp;
  closure_129_0 = initialLoadCompleted;
  const promotionMarketingComponent = require("usePromotionMarketingComponent").usePromotionMarketingComponent(
    require("MarketingComponentType").MarketingComponentType.PREMIUM_TAB,
  );
  closure_129_1 = promotionMarketingComponent;
  const items = [initialLoadCompleted, promotionMarketingComponent];
  const effect = noop.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = null != initialLoadCompleted;
    }
    if (tmp) {
      tmp = "premiumTab" === initialLoadCompleted.properties.properties.oneofKind;
    }
    if (tmp) {
      let obj = DismissibleContentUnsafeUtilsAll;
      tmp = !obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
        dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        initialLoadCompleted.promotionId,
      ).isDismissed;
    }
    if (tmp) {
      obj = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result = DismissibleContentUtilsAll.markSnowflakeBoundDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        initialLoadCompleted.promotionId,
        obj,
      );
    }
  }, items);
  const effect1 = noop.useEffect(() => {
    let BuyNitroPurchaseLock = nativeStackNavigation(_navigator[10]).BuyNitroPurchaseLock;
    BuyNitroPurchaseLock.end();
    let result = nativeStackNavigation(_navigator[11]).resetBuyNitroTrialAndPriceOverrides();
    return () => {
      const BuyNitroPurchaseLock = nativeStackNavigation(13356).BuyNitroPurchaseLock;
      BuyNitroPurchaseLock.end();
      const BuyNitroPurchaseLock2 = nativeStackNavigation(13356).BuyNitroPurchaseLock;
      const result = BuyNitroPurchaseLock2.setInitialLoadComplete(false);
      const result1 = nativeStackNavigation(13357).resetBuyNitroTrialAndPriceOverrides();
    };
  }, []);
  const items1 = [initialLoadCompleted];
  const effect2 = noop.useEffect(() => {
    const BuyNitroPurchaseLock = useBuyNitroPurchaseLock.BuyNitroPurchaseLock;
    const result = BuyNitroPurchaseLock.setInitialLoadComplete(closure_1);
  }, items1);
  const items2 = [nativeStackNavigation, tmp.navigator];
  const layoutEffect = noop.useLayoutEffect(() => {
    nativeStackNavigation.setOptions({ headerShown: false, contentStyle: _navigator.navigator });
  }, items2);
  const effect3 = noop.useEffect(
    () => () => {
      if (!state.getState().isPaymentSuccess) {
        closure_1_4();
      }
    },
    [],
  );
};
