// discord_app/modules/premium/native/hooks/useCheckoutPlanPriceString.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import { useNativeCheckoutStore } from "../../../checkout/native/NativeCheckoutStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/native/hooks/useCheckoutPlanPriceString.tsx");

export const useCheckoutPlanPriceString = function useCheckoutPlanPriceString(productId, stateFromStores) {
  const _require = productId;
  let priceString;
  if (stateFromStores != null) {
    priceString = stateFromStores.priceString;
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
      const availablePlanForItems = table.getAvailablePlanForItems(productId(table[2]).getSubscriptionItemsForProduct(productId));
      let priceString = null;
      if (null != availablePlanForItems) {
        priceString = availablePlanForItems.getPriceString();
      }
      return priceString;
    }
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