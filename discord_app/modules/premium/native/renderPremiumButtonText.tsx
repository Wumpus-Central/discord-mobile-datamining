// discord_app/modules/premium/native/renderPremiumButtonText.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function PremiumText(basePlanId) {
  ({ style, isCurrentPlan, isGift, product, text } = basePlanId);
  const tmp = closure_9();
  let obj = PremiumUtilsDefault;
  const intervalType = obj.getInterval(basePlanId.basePlanId).intervalType;
  let combined = null;
  if (intervalType === constants.YEAR) {
    combined = null;
    if (!isCurrentPlan) {
      const _HermesInternal = HermesInternal;
      combined = "-" + React4 + "%";
    }
  }
  if (text != null) {
    obj = { style: tmp.premiumText, children: null };
    obj = { style, numberOfLines: 1, accessibilityLabel: null, children: null };
    const intl3 = util.intl;
    let title;
    if (product != null) {
      title = product.title;
    }
    const obj1 = { product: title, description: text };
    obj.accessibilityLabel = intl3.formatToPlainString(util.t.E0lS2r, obj1);
    obj.children = text;
    const items = [React5(native.LegacyText, obj)];
    let tmp16Result = null;
    if (null != combined) {
      const obj2 = { style: tmp.discount, children: null };
      const obj3 = { style, numberOfLines: 1, children: combined };
      obj2.children = tmp16(native.LegacyText, obj3);
      tmp16Result = tmp16(tmp15, obj2);
    }
    items[1] = tmp16Result;
    obj.children = items;
    return React6(View, obj);
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
      let t = util.t;
      if (isGift) {
        const obj4 = { price: priceString };
        let formatToPlainStringResult = formatToPlainString(t.rm53bV, obj4);
      } else {
        const obj5 = { price: priceString };
        formatToPlainStringResult = formatToPlainString(isCurrentPlan ? t.dFbQCa : t["rS8FA+"], obj5);
      }
    }
    const intl2 = util.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    t = util.t;
    if (isGift) {
      t = { price: priceString };
      let formatToPlainString2Result = formatToPlainString2(t.FIjgMp, t);
    } else {
      const obj6 = { price: priceString };
      formatToPlainString2Result = formatToPlainString2(isCurrentPlan ? t.V6iX43 : t.AbOLNu, obj6);
    }
  }
}
const View = fn(17).View;
const PremiumConstants = fn(1373);
({
  PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_4,
  PRICE_PLACEHOLDER: hasOwnProperty,
  SubscriptionIntervalTypes: metroRequire,
} = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { discount: null, premiumText: null };
createStyles = { borderWidth: 1, borderColor: null, borderRadius: 2, marginLeft: 4, paddingHorizontal: 2 };
const ColorUtils = fn(4409);
createStyles.borderColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.3);
createStyles.discount = createStyles;
createStyles.premiumText = { flexDirection: "row" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/renderPremiumButtonText.tsx");

export default function renderPremiumText(arg0) {
  const merged = Object.assign(arg0);
  return React5(PremiumText, {});
}
