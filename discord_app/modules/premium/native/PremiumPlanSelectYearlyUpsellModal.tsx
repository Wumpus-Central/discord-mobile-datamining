// === Module 13771: PremiumPlanSelectYearlyUpsellModal ===

// Module 13771 (PremiumPlanSelectYearlyUpsellModal)
import common_AlertDefault from "common/Alert" /* 5395 */;
import TextStylesDefault from "TextStyles" /* 5903 */;
import FastImageDefault from "FastImage" /* 6163 */;
import _modDef13772 from "module_13772" /* 13772 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2128 */;
import IAPStore from "IAPStore" /* 7125 */;

const require = fn;
const View = fn(17).View;
const usePremiumPlanSelectStore = fn(13758).usePremiumPlanSelectStore;
let closure_9 = fn(1392).PREMIUM_YEARLY_DISCOUNT_PERCENT;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { marginHorizontal: 26 }, image: { alignSelf: "center", marginVertical: 32 }, header: null, description: null, upsellButton: null, continueButton: null, cancelButton: null };
let obj3 = {};
const merged = Object.assign(TextStylesDefault(fn(1096).Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj3.alignSelf = "center";
obj3.textAlign = "center";
obj3.paddingBottom = 8;
obj3.color = fn(5976).DARK_WHITE_500_LIGHT_BLACK_500;
obj2.header = obj3;
obj2.description = { alignSelf: "center", textAlign: "center", paddingBottom: 32, color: fn(5976).DARK_WHITE_500_LIGHT_BLACK_500 };
obj2.upsellButton = { marginBottom: 16 };
obj2.continueButton = { marginBottom: 4 };
obj2.cancelButton = { marginTop: 8, marginBottom: 4 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { alignSelf: "center", textAlign: "center", paddingBottom: 32, color: fn(5976).DARK_WHITE_500_LIGHT_BLACK_500 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumPlanSelectYearlyUpsellModal(continueWithDefault) {
  const cResult = productId(continueWithDefault[13]).c(43);
  ({ onClose, productId } = continueWithDefault);
  ({ orderPriceString, continueWithUpsell } = continueWithDefault);
  continueWithDefault = continueWithDefault.continueWithDefault;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p(isPurchasing) {
      return isPurchasing.isPurchasing;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const obj = productId(continueWithDefault[13]);
  const obj2 = noop;
  const tmp6 = usePremiumPlanSelectStore(first);
  [r10034, _slicedToArray] = noop.useState(null);
  const tmp8 = _slicedToArray(noop.useState(null), 2);
  const premiumBundledItemsFromProductId = productId(continueWithDefault[14]).getPremiumBundledItemsFromProductId(productId);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [LocaleStore];
    class I {
      constructor() {
        return closure_1_6.locale;
      }
    }
    cResult[1] = items;
    cResult[2] = I;
    let tmp11 = I;
    let tmp10 = items;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const tmpResult = productId(continueWithDefault[14]);
  const stateFromStores = productId(continueWithDefault[15]).useStateFromStores(tmp10, tmp11);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [IAPStore];
    class I {
      constructor() {
        return closure_1_6.locale;
      }
    }
    cResult[3] = items1;
    let tmp14 = items1;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== productId) {
    class Y {
      constructor() {
        items = [, ];
        items[0] = closure_7.getProduct(productId);
        items[1] = closure_7.isBusy();
        return items;
      }
    }
    cResult[4] = productId;
    class I {
      constructor() {
        return closure_1_6.locale;
      }
    }
    cResult[5] = Y;
  } else {
    class Y {
      constructor() {
        items = [, ];
        items[0] = closure_7.getProduct(productId);
        items[1] = closure_7.isBusy();
        return items;
      }
    }
  }
  const tmpResult3 = productId(continueWithDefault[15]);
  const tmpResult4 = productId(continueWithDefault[15]);
  if (!tmp6) {
    class Y {
      constructor() {
        items = [, ];
        items[0] = closure_7.getProduct(productId);
        items[1] = closure_7.isBusy();
        return items;
      }
    }
  }
  if (orderPriceString == null) {
    class Y {
      constructor() {
        items = [, ];
        items[0] = closure_7.getProduct(productId);
        items[1] = closure_7.isBusy();
        return items;
      }
    }
    if (tmp7Result[0] != null) {
      class Y {
        constructor() {
          items = [, ];
          items[0] = closure_7.getProduct(productId);
          items[1] = closure_7.isBusy();
          return items;
        }
      }
    }
    orderPriceString = tmp18;
  }
  noop = tmp19;
  if (cResult[6] === continueWithDefault) {
    class Y {
      constructor() {
        items = [, ];
        items[0] = closure_7.getProduct(productId);
        items[1] = closure_7.isBusy();
        return items;
      }
    }
    const effect = obj2.useEffect(K);
    if (tmp19) {
      class Y {
        constructor() {
          items = [, ];
          items[0] = closure_7.getProduct(productId);
          items[1] = closure_7.isBusy();
          return items;
        }
      }
    } else {
      class Y {
        constructor() {
          items = [, ];
          items[0] = closure_7.getProduct(productId);
          items[1] = closure_7.isBusy();
          return items;
        }
      }
      class I {
        constructor() {
          return closure_1_6.locale;
        }
      }
      const container = tmp4.container;
      if (cResult[9] !== tmp4.image) {
        class Y {
          constructor() {
            items = [, ];
            items[0] = closure_7.getProduct(productId);
            items[1] = closure_7.isBusy();
            return items;
          }
        }
        const obj3 = { style: null, source: null };
        class I {
          constructor() {
            return closure_1_6.locale;
          }
        }
        obj3.source = continueWithUpsell(tmp2[18]);
        const tmp26 = closure_10(continueWithUpsell(tmp2[17]), obj3);
        cResult[9] = tmp4.image;
        cResult[10] = tmp26;
        const tmp25 = continueWithUpsell(tmp2[17]);
      } else {
        class Y {
          constructor() {
            items = [, ];
            items[0] = closure_7.getProduct(productId);
            items[1] = closure_7.isBusy();
            return items;
          }
        }
      }
      const LegacyText = productId(tmp2[19]).LegacyText;
      const intl = productId(tmp2[20]).intl;
      const obj4 = { discountPercentage: tmp22 };
      const formatResult = intl.format(productId(tmp2[20]).t["7chOVL"], obj4);
      if (cResult[11] === LegacyText) {
        class Y {
          constructor() {
            items = [, ];
            items[0] = closure_7.getProduct(productId);
            items[1] = closure_7.isBusy();
            return items;
          }
        }
      }
      const obj5 = { style: tmp4.description, children: formatResult };
      const tmp30 = closure_10(LegacyText, obj5);
      cResult[11] = LegacyText;
      cResult[12] = tmp4.description;
      cResult[13] = formatResult;
      cResult[14] = tmp30;
    }
  }
  class K {
    constructor() {
      if (closure_4) {
        tmp = continueWithDefault;
        tmp2 = continueWithDefault();
      }
      return;
    }
  }
  cResult[6] = continueWithDefault;
  cResult[7] = null == premiumBundledItemsFromProductId.premiumTier || null == orderPriceString;
  cResult[8] = K;
  tmp7Result = _slicedToArray(productId(continueWithDefault[15]).useStateFromStoresArray(tmp14, Y), 2);
}) : (function PremiumPlanSelectYearlyUpsellModal(arg0) {
  ({ onClose, productId } = arg0);
  ({ orderPriceString, continueWithUpsell: importDefault, continueWithDefault: dependencyMap } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_12();
  const tmp2 = usePremiumPlanSelectStore((isPurchasing) => isPurchasing.isPurchasing);
  [tmp4, c3] = noop.useState(null);
  const obj = noop;
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  const premiumBundledItemsFromProductId = productId(7119).getPremiumBundledItemsFromProductId(productId);
  const obj2 = productId(7119);
  let items = [LocaleStore];
  const stateFromStores = productId(504).useStateFromStores(items, () => locale.locale);
  const obj3 = productId(504);
  const items1 = [IAPStore];
  const tmp9 = _slicedToArray(productId(504).useStateFromStoresArray(items1, () => {
    const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
    return items;
  }), 2);
  const first = tmp9[0];
  let tmp11 = tmp2;
  if (!tmp2) {
    tmp11 = tmp9[1];
  }
  const premiumTier = premiumBundledItemsFromProductId.premiumTier;
  if (orderPriceString == null) {
    let priceString;
    if (first != null) {
      priceString = first.priceString;
    }
    orderPriceString = priceString;
  }
  noop = tmp13;
  const effect = obj.useEffect(() => {
    if (closure_4) {
      dependencyMap();
    }
  });
  if (null == premiumTier || null == orderPriceString) {
    return null;
  } else {
    const formatPercentResult = productId(1901).formatPercent(stateFromStores, closure_9 / 100);
    const obj5 = { onClose, noDefaultButtons: true, children: null };
    const obj6 = { style: tmp.container, children: null };
    const tmp5Result = productId(1901);
    const obj7 = { style: tmp.image, source: null };
    const tmp19 = common_AlertDefault;
    obj7.source = _modDef13772;
    const items2 = [closure_10(FastImageDefault, obj7), , , , , ];
    const obj8 = { style: tmp.header, accessibilityRole: "header", children: null };
    const intl = productId(1126).intl;
    const obj9 = { discountPercentage: formatPercentResult, planName: null };
    obj9.planName = productId(4728).getPremiumTypeDisplayName(premiumTier);
    obj8.children = intl.format(productId(1126).t.LQCVfK, obj9);
    items2[1] = closure_10(productId(1200).LegacyText, obj8);
    const obj10 = { style: tmp.description, children: null };
    const intl2 = productId(1126).intl;
    const obj11 = { discountPercentage: formatPercentResult };
    obj10.children = intl2.format(productId(1126).t["7chOVL"], obj11);
    items2[2] = closure_10(productId(1200).LegacyText, obj10);
    const obj12 = { style: tmp.upsellButton, children: null };
    const obj13 = { variant: "active", text: null, onPress: null, disabled: null, loading: null };
    const intl3 = productId(1126).intl;
    const obj14 = { price: orderPriceString };
    obj13.text = intl3.formatToPlainString(productId(1126).t.Qvq6GE, obj14);
    obj13.onPress = function onPress() {
      _undefined("upsell");
      importDefault();
    };
    obj13.disabled = tmp11;
    obj13.loading = "upsell" === tmp4 && tmp2;
    obj12.children = closure_10(productId(5376).Button, obj13);
    items2[3] = closure_10(View, obj12);
    const obj15 = { style: tmp.continueButton, children: null };
    const obj16 = { variant: "secondary", text: null, onPress: null, disabled: null, loading: null };
    const intl4 = productId(1126).intl;
    obj16.text = intl4.string(productId(1126).t.YwEyQM);
    obj16.onPress = function onPress() {
      _undefined("default");
      dependencyMap();
    };
    obj16.disabled = tmp11;
    obj16.loading = "default" === tmp4 && tmp2;
    obj15.children = closure_10(productId(5376).Button, obj16);
    items2[4] = closure_10(View, obj15);
    const obj17 = { style: tmp.cancelButton, children: null };
    const obj18 = { variant: "tertiary", text: null, onPress: null };
    const intl5 = productId(1126).intl;
    obj18.text = intl5.string(productId(1126).t.cpT0Cq);
    obj18.onPress = onClose;
    obj17.children = closure_10(productId(5376).Button, obj18);
    items2[5] = closure_10(View, obj17);
    obj6.children = items2;
    obj5.children = closure_11(View, obj6);
    return closure_10(tmp19, obj5);
  }
  const obj4 = productId(504);
});