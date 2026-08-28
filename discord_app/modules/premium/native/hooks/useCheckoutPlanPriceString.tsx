// === Module 12893: useCheckoutPlanPriceString ===

// Module 12893 (useCheckoutPlanPriceString)
import closure_2 from "noop" /* 19 */;
import { useNativeCheckoutStore } from "context" /* 7116 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/native/hooks/useCheckoutPlanPriceString.tsx");

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
  dependencyMap = tmp3;
  const items = [tmp3, productId];
  const memo = React.useMemo(() => {
    if (null == table) {
      return null;
    } else {
      const availablePlanForItems = obj.getAvailablePlanForItems(productId(table[2]).getSubscriptionItemsForProduct(productId));
      let priceString = null;
      if (null != availablePlanForItems) {
        priceString = availablePlanForItems.getPriceString();
      }
      return priceString;
    }
    obj = table;
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