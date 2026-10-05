// discord_app/modules/collectibles/hooks/useCanGiftProduct.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import BillingPlatformUtils from "../../device/BillingPlatformUtils.tsx";
import CollectiblesProductUtils from "../utils/CollectiblesProductUtils.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import useCurrentUser from "useCurrentUser.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (type) => {
      const obj = useCurrentUser;
      const currentUser = obj.useCurrentUser();
      const obj2 = CollectiblesUtils;
      let result = obj2.isPremiumCollectiblesProduct(type);
      const obj3 = CollectiblesUtils;
      const result1 = obj3.isFreeCollectiblesProduct(type);
      const obj4 = CollectiblesProductUtils;
      const result2 = obj4.isOrbsExclusiveProduct(type);
      const obj5 = PremiumUtilsDefault;
      const canUseShopDiscountsResult = obj5.canUseShopDiscounts(currentUser);
      const obj6 = CollectiblesUtils;
      const defaultPriceSetAssignmentPurchaseType =
        obj6.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
      const obj7 = CollectiblesUtils;
      const result3 = obj7.extractPriceByPurchaseTypes(type, defaultPriceSetAssignmentPurchaseType);
      if (!result) {
        result = result1;
      }
      if (!result) {
        result = result2;
      }
      if (!result) {
        result = type.type === CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
      }
      if (!result) {
        let currency;
        const shouldHideGiftingForCurrency = CollectiblesUtils.shouldHideGiftingForCurrency;
        CollectiblesUtils;
        if (result3 != null) {
          currency = result3.currency;
        }
        result = shouldHideGiftingForCurrency(currency);
      }
      if (!result) {
        const tmpResult2 = BillingPlatformUtils;
        result = !tmpResult2.isCollectibleGiftingSupported();
      }
      return !result;
    }
  : (type) => {
      const obj = useCurrentUser;
      const currentUser = obj.useCurrentUser();
      const obj2 = CollectiblesUtils;
      let result = obj2.isPremiumCollectiblesProduct(type);
      const obj3 = CollectiblesUtils;
      const result1 = obj3.isFreeCollectiblesProduct(type);
      const obj4 = CollectiblesProductUtils;
      const result2 = obj4.isOrbsExclusiveProduct(type);
      const obj5 = PremiumUtilsDefault;
      const canUseShopDiscountsResult = obj5.canUseShopDiscounts(currentUser);
      const obj6 = CollectiblesUtils;
      const defaultPriceSetAssignmentPurchaseType =
        obj6.getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult);
      const obj7 = CollectiblesUtils;
      const result3 = obj7.extractPriceByPurchaseTypes(type, defaultPriceSetAssignmentPurchaseType);
      if (!result) {
        result = result1;
      }
      if (!result) {
        result = result2;
      }
      if (!result) {
        result = type.type === CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
      }
      if (!result) {
        let currency;
        const shouldHideGiftingForCurrency = CollectiblesUtils.shouldHideGiftingForCurrency;
        CollectiblesUtils;
        if (result3 != null) {
          currency = result3.currency;
        }
        result = shouldHideGiftingForCurrency(currency);
      }
      if (!result) {
        const tmpResult2 = BillingPlatformUtils;
        result = !tmpResult2.isCollectibleGiftingSupported();
      }
      return !result;
    };
let result = size.fileFinishedImporting("modules/collectibles/hooks/useCanGiftProduct.tsx");

export const useCanGiftProduct = tmp2;
