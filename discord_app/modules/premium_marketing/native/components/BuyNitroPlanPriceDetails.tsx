// === Module 13386: BuyNitroPlanPriceDetails ===

// Module 13386 (BuyNitroPlanPriceDetails)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7237 */;

const require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1373);
({ SubscriptionIntervalTypes: closure_4, SubscriptionPlanInfo: hasOwnProperty } = PremiumConstants);
const CurrencyCodes = fn(1085).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, centeredText: null };
createStyles = { gap: nativeDefault.space.PX_4 };
createStyles.container = createStyles;
createStyles.centeredText = { textAlign: "center" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPlanPriceDetails.tsx");

export default function BuyNitroPlanPriceDetails(centered) {
  ({ planSelection, item } = centered);
  let flag = centered.centered;
  if (flag === undefined) {
    flag = false;
  }
  ({ priceStringByProductId, trialTier, discounted } = planSelection);
  const tmp = closure_9();
  if (flag) {
    const centeredText = tmp.centeredText;
  }
  let formatToPlainStringResult = dependencyMap;
  let obj = item(504);
  const items = [IAPStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const product = IAPStore.getProduct(item.productId);
    let formatted;
    if (product != null) {
      formatted = product.currencyCode.toLowerCase();
    }
    if (null == formatted) {
      formatted = CurrencyCodes.USD;
    }
    return formatted;
  });
  value = priceStringByProductId.get(item.productId);
  if (null != trialTier) {
    if (item.premiumTier === trialTier) {
      let tmp2Result = tmp2(7234);
      obj = { style: tmp.container, children: null };
      obj = { variant: "text-xs/semibold", color: "text-default", style: centeredText, children: null };
      const intl3 = tmp2(1114).intl;
      const obj1 = { price: tmp2Result.formatPrice(0, stateFromStores, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) };
      obj.children = intl3.formatToPlainString(tmp2(1114).t.hXcaLT, obj1);
      const items1 = [closure_7(tmp2(4556).Text, obj), ];
      if (null == value) {
        items1[1] = tmp17;
        obj.children = items1;
        return tmp14(tmp15, obj);
      } else {
        const obj2 = { variant: "text-xs/medium", color: "text-subtle", style: centeredText, children: null };
        const intl4 = tmp2(1114).intl;
        if (item.interval === constants.YEAR) {
          let v9QeON = tmp2(1114).t.ECT4A5;
        } else {
          v9QeON = tmp2(1114).t.v9QeON;
        }
        const obj3 = { price: value };
        formatToPlainStringResult = intl4.formatToPlainString(v9QeON, obj3);
        obj2.children = formatToPlainStringResult;
        tmp16(tmp2(4556).Text, obj2);
      }
      const formatPriceResult = tmp2Result.formatPrice(0, stateFromStores, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      tmp14 = closure_8;
      tmp15 = View;
      tmp16 = closure_7;
    }
  }
  if (item.productId === discounted.id) {
    if (null != discounted.priceString) {
      let num;
      if (closure_5[item.basePlanId] != null) {
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
      const obj4 = { style: tmp.container, children: null };
      const obj5 = { variant: "text-xs/semibold", color: "text-default", style: centeredText, children: null };
      const intl = tmp2(1114).intl;
      const obj6 = { discountedPrice: tmp2Result.formatRate(discounted.priceString, item.interval, num), numMonths: discounted.numMonths };
      obj5.children = intl.formatToPlainString(tmp2(1114).t["02Gmgm"], obj6);
      const items2 = [closure_7(tmp2(4556).Text, obj5), ];
      let tmp11Result = null != formatRateResult1;
      if (tmp11Result) {
        const obj7 = { variant: "text-xs/medium", color: "text-subtle", style: centeredText, children: null };
        const intl2 = tmp2(1114).intl;
        const obj8 = { regularPrice: formatRateResult1, numMonths: discounted.numMonths };
        obj7.children = intl2.formatToPlainString(tmp2(1114).t["vZk+c/"], obj8);
        tmp11Result = closure_7(tmp2(4556).Text, obj7);
      }
      items2[1] = tmp11Result;
      obj4.children = items2;
      return closure_8(View, obj4);
    }
  }
  return null;
};