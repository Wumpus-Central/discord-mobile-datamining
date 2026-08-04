import "noop";
import { View } from "get ActivityIndicator";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function PremiumText(basePlanId) {
  let isCurrentPlan;
  let isGift;
  let product;
  let style;
  let text;
  ({ style, isCurrentPlan, isGift, product, text } = basePlanId);
  const tmp = createCacheKey();
  let obj = importDefault(3931);
  const intervalType = obj.getInterval(basePlanId.basePlanId).intervalType;
  let combined = null;
  if (intervalType === constants.YEAR) {
    combined = null;
    if (!isCurrentPlan) {
      const _HermesInternal = HermesInternal;
      combined = "-" + closure_4 + "%";
    }
  }
  if (text != null) {
    obj = { style: null, children: null };
    obj[0] = tmp.premiumText;
    obj = { style: null, numberOfLines: 1, accessibilityLabel: null, children: null };
    obj[0] = style;
    const intl3 = require(1236) /* getSystemLocale */.intl;
    let title;
    if (product != null) {
      title = product.title;
    }
    const obj1 = { product: null, description: null };
    obj1[0] = title;
    obj1[1] = text;
    obj[2] = intl3.formatToPlainString(require(1236) /* getSystemLocale */.t.E0lS2r, obj1);
    obj[3] = text;
    const items = [closure_7(require(1297) /* Button */.LegacyText, obj), ];
    let tmp16Result = null;
    if (null != combined) {
      const obj2 = { style: null, children: null };
      obj2[0] = tmp.discount;
      const obj3 = { style: null, numberOfLines: 1, children: null };
      obj3[0] = style;
      obj3[2] = combined;
      obj2[1] = tmp16(require(1297) /* Button */.LegacyText, obj3);
      tmp16Result = tmp16(tmp15, obj2);
    }
    items[1] = tmp16Result;
    obj[1] = items;
    return closure_8(View, obj);
  } else {
    let priceString;
    if (product != null) {
      priceString = product.priceString;
    }
    if (priceString == null) {
      priceString = closure_5;
    }
    if (intervalType !== constants.MONTH) {
      const intl = require(1236) /* getSystemLocale */.intl;
      const formatToPlainString = intl.formatToPlainString;
      let t = require(1236) /* getSystemLocale */.t;
      if (isGift) {
        const obj4 = { price: null };
        obj4[0] = priceString;
        let formatToPlainStringResult = formatToPlainString(t.rm53bV, obj4);
      } else {
        const obj5 = { price: null };
        obj5[0] = priceString;
        formatToPlainStringResult = formatToPlainString(isCurrentPlan ? t.dFbQCa : t["rS8FA+"], obj5);
      }
    }
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    t = require(1236) /* getSystemLocale */.t;
    if (isGift) {
      t = { price: null };
      t[0] = priceString;
      let formatToPlainString2Result = formatToPlainString2(t.FIjgMp, t);
    } else {
      const obj6 = { price: null };
      obj6[0] = priceString;
      formatToPlainString2Result = formatToPlainString2(isCurrentPlan ? t.V6iX43 : t.AbOLNu, obj6);
    }
  }
}
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: c4, PRICE_PLACEHOLDER: c5, SubscriptionIntervalTypes: closure_6 } = GuildFeatures);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { discount: null, premiumText: null };
createCacheKey = { borderWidth: 1, borderColor: null, borderRadius: 2, marginLeft: 4, paddingHorizontal: 2 };
createCacheKey[1] = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.WHITE, 0.3);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/renderPremiumButtonText.tsx");

export default function renderPremiumText(arg0) {
  const merged = Object.assign(arg0);
  return callback(PremiumText, {});
};