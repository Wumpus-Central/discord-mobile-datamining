// === Module 6252: useCheckoutPlanPriceString ===

// Module 6252 (useCheckoutPlanPriceString)
import noop from "noop";
import { useNativeCheckoutStore } from "context";

const require = arg1;
const result = require("getPremiumBundledItemsFromProductId").fileFinishedImporting("modules/premium/native/hooks/useCheckoutPlanPriceString.tsx");

export const useCheckoutPlanPriceString = function useCheckoutPlanPriceString(productId, first) {
  const _require = productId;
  let priceString;
  if (first != null) {
    priceString = first.priceString;
  }
  if (priceString == null) {
    priceString = null;
  }
  const tmp3 = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  const dependencyMap = tmp3;
  const items = [tmp3, productId];
  const memo = React.useMemo(() => {
    if (null == tmp3) {
      return null;
    } else {
      const availablePlanForItems = obj.getAvailablePlanForItems(productId(tmp3[2]).getSubscriptionItemsForProduct(productId));
      let priceString = null;
      if (null != availablePlanForItems) {
        priceString = availablePlanForItems.getPriceString();
      }
      return priceString;
    }
    obj = tmp3;
  }, items);
  const tmp2 = useNativeCheckoutStore((orderRequired) => orderRequired.orderRequired);
  let tmp5 = priceString;
  if (obj.isIOS()) {
    tmp5 = priceString;
    if (false !== tmp2) {
      tmp5 = memo;
    }
  }
  return tmp5;
};