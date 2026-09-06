// discord_app/modules/premium_marketing/native/components/BuyNitroPlanPriceDetails.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_3 from "../../../../stores/native/IAPStore.android.tsx";
import GuildFeatures from "../../../premium/PremiumConstants.tsx";
import { CurrencyCodes } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ SubscriptionIntervalTypes: c4, SubscriptionPlanInfo: c5 } = GuildFeatures);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, centeredText: null };
createCacheKey = { gap: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/premium_marketing/native/components/BuyNitroPlanPriceDetails.tsx",
);

export default function BuyNitroPlanPriceDetails(centered) {
  ({ planSelection, item } = centered);
  let flag = centered.centered;
  if (flag === undefined) {
    flag = false;
  }
  ({ priceStringByProductId, trialTier, discounted } = planSelection);
  const tmp = callback2();
  if (flag) {
    const centeredText = tmp.centeredText;
  }
  let formatToPlainStringResult = dependencyMap;
  let obj = item(504);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const product = closure_1_3.getProduct(item.productId);
    let formatted;
    if (product != null) {
      formatted = product.currencyCode.toLowerCase();
      const str = product.currencyCode;
    }
    if (null == formatted) {
      formatted = closure_1_6.USD;
    }
    return formatted;
  });
  const value = priceStringByProductId.get(item.productId);
  if (null != trialTier) {
    if (item.premiumTier === trialTier) {
      let tmp2Result = tmp2(7234);
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { variant: "text-xs/semibold", color: "text-default", style: null, children: null };
      obj[2] = centeredText;
      const intl3 = tmp2(1114).intl;
      obj1 = { price: null };
      obj1[0] = tmp2Result.formatPrice(0, stateFromStores, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      obj[3] = intl3.formatToPlainString(tmp2(1114).t.hXcaLT, obj1);
      const items1 = [callback(tmp2(4556).Text, obj)];
      if (null == value) {
        items1[1] = tmp17;
        obj[1] = items1;
        return tmp14(tmp15, obj);
      } else {
        const obj2 = { variant: "text-xs/medium", color: "text-subtle", style: null, children: null };
        obj2[2] = centeredText;
        const intl4 = tmp2(1114).intl;
        if (item.interval === constants.YEAR) {
          let v9QeON = tmp2(1114).t.ECT4A5;
        } else {
          v9QeON = tmp2(1114).t.v9QeON;
        }
        const obj3 = { price: null };
        obj3[0] = value;
        formatToPlainStringResult = intl4.formatToPlainString(v9QeON, obj3);
        obj2[3] = formatToPlainStringResult;
        tmp16(tmp2(4556).Text, obj2);
      }
      const formatPriceResult = tmp2Result.formatPrice(0, stateFromStores, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      tmp14 = closure_8;
      tmp15 = View;
      tmp16 = callback;
    }
  }
  if (item.productId === discounted.id) {
    if (null != discounted.priceString) {
      let num;
      if (table[item.basePlanId] != null) {
        num = tmp21.intervalCount;
      }
      if (num == null) {
        num = 1;
      }
      tmp2Result = tmp2(7234);
      let formatRateResult1 = null;
      if (null != value) {
        formatRateResult1 = tmp2(7234).formatRate(value, item.interval, num);
        const tmp2Result1 = tmp2(7234);
      }
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.container;
      const obj5 = { variant: "text-xs/semibold", color: "text-default", style: null, children: null };
      obj5[2] = centeredText;
      const intl = tmp2(1114).intl;
      const obj6 = { discountedPrice: null, numMonths: null };
      obj6[0] = tmp2Result.formatRate(discounted.priceString, item.interval, num);
      obj6[1] = discounted.numMonths;
      obj5[3] = intl.formatToPlainString(tmp2(1114).t["02Gmgm"], obj6);
      const items2 = [callback(tmp2(4556).Text, obj5)];
      let tmp11Result = null != formatRateResult1;
      if (tmp11Result) {
        const obj7 = { variant: "text-xs/medium", color: "text-subtle", style: null, children: null };
        obj7[2] = centeredText;
        const intl2 = tmp2(1114).intl;
        const obj8 = { regularPrice: null, numMonths: null };
        obj8[0] = formatRateResult1;
        obj8[1] = discounted.numMonths;
        obj7[3] = intl2.formatToPlainString(tmp2(1114).t["vZk+c/"], obj8);
        tmp11Result = callback(tmp2(4556).Text, obj7);
      }
      items2[1] = tmp11Result;
      obj4[1] = items2;
      return closure_8(View, obj4);
    }
  }
  return null;
}
