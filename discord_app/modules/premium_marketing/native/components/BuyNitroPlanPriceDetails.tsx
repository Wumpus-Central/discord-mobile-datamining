// === Module 8020: BuyNitroPlanPriceDetails ===

// Module 8020 (BuyNitroPlanPriceDetails)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import updateProduct from "updateProduct" /* 5319 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import { CurrencyCodes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
({ SubscriptionIntervalTypes: c4, SubscriptionPlanInfo: c5 } = GuildFeatures);
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { gap: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPlanPriceDetails.tsx");

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
  let obj = item(589);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const product = closure_1_3.getProduct(item.productId);
    let formatted;
    if (product != null) {
      formatted = product.currencyCode.toLowerCase();
    }
    if (null == formatted) {
      formatted = CurrencyCodes.USD;
    }
    return formatted;
  });
  const value = priceStringByProductId.get(item.productId);
  if (null != trialTier) {
    if (item.premiumTier === trialTier) {
      let tmp2Result = item(5316);
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { variant: "text-xs/semibold", color: "text-default", style: null, children: null };
      obj[2] = centeredText;
      const intl3 = item(1236).intl;
      obj1 = { price: null };
      obj1[0] = tmp2Result.formatPrice(0, stateFromStores, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      obj[3] = intl3.formatToPlainString(item(1236).t.hXcaLT, obj1);
      const items1 = [callback(item(4734).Text, obj), ];
      if (null == value) {
        items1[1] = tmp17;
        obj[1] = items1;
        return callback(View, obj);
      } else {
        const obj2 = { variant: "text-xs/medium", color: "text-subtle", style: null, children: null };
        obj2[2] = centeredText;
        const intl4 = item(1236).intl;
        if (item.interval === constants.YEAR) {
          let v9QeON = item(1236).t.ECT4A5;
        } else {
          v9QeON = item(1236).t.v9QeON;
        }
        const obj3 = { price: null };
        obj3[0] = value;
        formatToPlainStringResult = intl4.formatToPlainString(v9QeON, obj3);
        obj2[3] = formatToPlainStringResult;
        callback(item(4734).Text, obj2);
      }
      const formatPriceResult = tmp2Result.formatPrice(0, stateFromStores, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
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
      tmp2Result = item(5316);
      let formatRateResult1 = null;
      if (null != value) {
        formatRateResult1 = item(5316).formatRate(value, item.interval, num);
        const tmp2Result1 = item(5316);
      }
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.container;
      const obj5 = { variant: "text-xs/semibold", color: "text-default", style: null, children: null };
      obj5[2] = centeredText;
      const intl = item(1236).intl;
      const obj6 = { discountedPrice: null, numMonths: null };
      obj6[0] = tmp2Result.formatRate(discounted.priceString, item.interval, num);
      obj6[1] = discounted.numMonths;
      obj5[3] = intl.formatToPlainString(item(1236).t["02Gmgm"], obj6);
      const items2 = [callback(item(4734).Text, obj5), ];
      let tmp11Result = null != formatRateResult1;
      if (tmp11Result) {
        const obj7 = { variant: "text-xs/medium", color: "text-subtle", style: null, children: null };
        obj7[2] = centeredText;
        const intl2 = item(1236).intl;
        const obj8 = { regularPrice: null, numMonths: null };
        obj8[0] = formatRateResult1;
        obj8[1] = discounted.numMonths;
        obj7[3] = intl2.formatToPlainString(item(1236).t["vZk+c/"], obj8);
        tmp11Result = callback(item(4734).Text, obj7);
      }
      items2[1] = tmp11Result;
      obj4[1] = items2;
      return callback(View, obj4);
    }
  }
  return null;
};