// === Module 13827: renderPremiumButtonText ===

// Module 13827 (renderPremiumButtonText)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4414 */;
import noop from "module_19" /* 19 */;

require = fn;
function PremiumText(basePlanId) {
  ({ style, isCurrentPlan, isGift, product, text } = basePlanId);
  const tmp = closure_9();
  const intervalType = PremiumUtilsDefault.getInterval(basePlanId.basePlanId).intervalType;
  let combined = null;
  if (intervalType === constants.YEAR) {
    combined = null;
    if (!isCurrentPlan) {
      const _HermesInternal = HermesInternal;
      combined = "-" + React4 + "%";
    }
  }
  if (text != null) {
    const obj2 = { style: tmp.premiumText, children: null };
    const obj3 = { style, numberOfLines: 1, accessibilityLabel: null, children: null };
    const intl3 = util.intl;
    let title;
    if (product != null) {
      title = product.title;
    }
    const obj4 = { product: title, description: text };
    obj3.accessibilityLabel = intl3.formatToPlainString(util.t.E0lS2r, obj4);
    obj3.children = text;
    const items = [React5(native.LegacyText, obj3), ];
    let tmp16Result = null;
    if (null != combined) {
      const obj5 = { style: tmp.discount, children: null };
      const obj6 = { style, numberOfLines: 1, children: combined };
      obj5.children = React5(native.LegacyText, obj6);
      tmp16Result = React5(View, obj5);
    }
    items[1] = tmp16Result;
    obj2.children = items;
    return React6(View, obj2);
  } else {
    let priceString;
    if (product != null) {
      priceString = product.priceString;
    }
    if (priceString == null) {
      priceString = hasOwnProperty;
    }
    if (intervalType !== constants.MONTH) {
      const intl = util.intl;
      const formatToPlainString = intl.formatToPlainString;
      const t = util.t;
      if (isGift) {
        const obj7 = { price: priceString };
        let formatToPlainStringResult = formatToPlainString(t.rm53bV, obj7);
      } else {
        const obj8 = { price: priceString };
        formatToPlainStringResult = formatToPlainString(isCurrentPlan ? t.dFbQCa : t["rS8FA+"], obj8);
      }
    }
    const intl2 = util.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    let t1 = util.t;
    if (isGift) {
      t1 = { price: priceString };
      let formatToPlainString2Result = formatToPlainString2(t1.FIjgMp, t1);
    } else {
      const obj9 = { price: priceString };
      formatToPlainString2Result = formatToPlainString2(isCurrentPlan ? t1.V6iX43 : t1.AbOLNu, obj9);
    }
  }
}
const View = fn(17).View;
const PremiumConstants = fn(1374);
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_4, PRICE_PLACEHOLDER: hasOwnProperty, SubscriptionIntervalTypes: metroRequire } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { discount: null, premiumText: null };
let obj3 = { borderWidth: 1, borderColor: null, borderRadius: 2, marginLeft: 4, paddingHorizontal: 2 };
const ColorUtils = fn(4605);
obj3.borderColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.3);
obj2.discount = obj3;
obj2.premiumText = { flexDirection: "row" };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/renderPremiumButtonText.tsx");

export default function renderPremiumText(arg0) {
  const merged = Object.assign(arg0);
  return React5(PremiumText, {});
};