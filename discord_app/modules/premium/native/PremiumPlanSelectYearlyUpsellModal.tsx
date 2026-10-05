// === Module 13359: PremiumPlanSelectYearlyUpsellModal ===

// Module 13359 (PremiumPlanSelectYearlyUpsellModal)
import Constants from "Constants" /* 1096 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import LegacyTokens from "LegacyTokens" /* 5620 */;
import AlertDefault from "Alert" /* 5783 */;
import TextStylesDefault from "TextStyles" /* 5915 */;
import PremiumPlanSelectStore from "PremiumPlanSelectStore" /* 13348 */;
import AssetRegistryDefault from "AssetRegistry" /* 13360 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import IAPStore from "IAPStore" /* 6739 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let continueWithDefault;

let closure_12;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ Image: hasOwnProperty, View: metroRequire } = react_native);
const usePremiumPlanSelectStore = PremiumPlanSelectStore.usePremiumPlanSelectStore;
let closure_10 = PremiumConstants.PREMIUM_YEARLY_DISCOUNT_PERCENT;
const Fonts = Constants.Fonts;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginHorizontal: 26 }, image: { alignSelf: "center", marginVertical: 32 }, header: obj2, description: obj3, upsellButton: { marginBottom: 16 }, continueButton: { marginBottom: 4 }, cancelButton: { marginTop: 8, marginBottom: 4 } };
obj2 = { alignSelf: "center", textAlign: "center", paddingBottom: 8, color: LegacyTokens.DARK_WHITE_500_LIGHT_BLACK_500 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStylesDefault(Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj3 = { alignSelf: "center", textAlign: "center", paddingBottom: 32, color: LegacyTokens.DARK_WHITE_500_LIGHT_BLACK_500 };
let closure_13 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((continueWithDefault) => {
  let closure_4;
  let continueWithUpsell;
  let first;
  let locale;
  let onClose;
  let orderPriceString;
  let productId;
  let tmp10;
  let tmp11;
  let tmp14;
  const obj = productId(continueWithDefault[13]);
  const cResult = obj.c(43);
  ({ onClose, productId } = continueWithDefault);
  ({ orderPriceString, continueWithUpsell } = continueWithDefault);
  continueWithDefault = continueWithDefault.continueWithDefault;
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f(isPurchasing) {
      return isPurchasing.isPurchasing;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  usePremiumPlanSelectStore(first);
  const tmp8 = _slicedToArray(react.useState(null), 2);
  [r10034, _slicedToArray] = tmp8;
  const tmpResult = productId(continueWithDefault[14]);
  const premiumBundledItemsFromProductId = tmpResult.getPremiumBundledItemsFromProductId(productId);
  const obj2 = react;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [LocaleStore];
    const fn2 = function b() {
      return locale.locale;
    };
    cResult[1] = items;
    cResult[2] = fn2;
    tmp11 = fn2;
    tmp10 = items;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const tmpResult3 = productId(continueWithDefault[15]);
  const stateFromStores = tmpResult3.useStateFromStores(tmp10, tmp11);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [IAPStore];
    cResult[3] = items1;
    tmp14 = items1;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== productId) {
    class N {
      constructor() {
        const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
        return items;
      }
    }
    cResult[4] = productId;
    cResult[5] = N;
  } else {
    class N {
      constructor() {
        const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
        return items;
      }
    }
  }
  const tmpResult4 = productId(continueWithDefault[15]);
  const first1 = _slicedToArray(tmpResult4.useStateFromStoresArray(tmp14, N), 2)[0];
  const premiumTier = premiumBundledItemsFromProductId.premiumTier;
  _slicedToArray(tmpResult4.useStateFromStoresArray(tmp14, N), 2);
  if (orderPriceString == null) {
    class N {
      constructor() {
        const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
        return items;
      }
    }
    if (first1 != null) {
      class N {
        constructor() {
          const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
          return items;
        }
      }
    }
    orderPriceString = tmp19;
  }
  react = tmp20;
  if (cResult[6] === continueWithDefault) {
    class N {
      constructor() {
        const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
        return items;
      }
    }
    const effect = obj2.useEffect(V);
    if (null == premiumTier || null == orderPriceString) {
      class N {
        constructor() {
          const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
          return items;
        }
      }
    } else {
      class N {
        constructor() {
          const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
          return items;
        }
      }
      const container = tmp4.container;
      const formatPercentResult = obj6.formatPercent(stateFromStores, closure_10 / 100);
      if (cResult[9] !== tmp4.image) {
        class N {
          constructor() {
            const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
            return items;
          }
        }
        const obj3 = { style: tmp4.image, source: continueWithUpsell(continueWithDefault[17]) };
        cResult[9] = tmp4.image;
        cResult[10] = closure_11(closure_5, obj3);
        const tmp27 = closure_11(closure_5, obj3);
      } else {
        class N {
          constructor() {
            const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
            return items;
          }
        }
      }
      const LegacyText = productId(tmp2[18]).LegacyText;
      const description = tmp4.description;
      const intl = productId(tmp2[19]).intl;
      const obj4 = { discountPercentage: formatPercentResult };
      const formatResult = intl.format(productId(continueWithDefault[19]).t["7chOVL"], obj4);
      if (cResult[11] === LegacyText) {
        class N {
          constructor() {
            const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
            return items;
          }
        }
      }
      const obj5 = { style: description, children: formatResult };
      cResult[11] = LegacyText;
      cResult[12] = tmp4.description;
      cResult[13] = formatResult;
      cResult[14] = closure_11(LegacyText, obj5);
      const tmp31 = closure_11(LegacyText, obj5);
    }
  }
  class V {
    constructor() {
      if (closure_4) {
        continueWithDefault();
      }
    }
  }
  cResult[6] = continueWithDefault;
  cResult[7] = null == premiumTier || null == orderPriceString;
  cResult[8] = V;
}) : ((arg0) => {
  let Button;
  let Button2;
  let Button3;
  let LQCVfK;
  let _undefined;
  let c3;
  let closure_4;
  let format;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items2;
  let locale;
  let obj11;
  let obj13;
  let obj14;
  let obj16;
  let obj18;
  let obj6;
  let obj9;
  let onClose;
  let orderPriceString;
  let productId;
  let tmp4;
  let tmp5Result2;
  ({ onClose, productId } = arg0);
  ({ orderPriceString, continueWithUpsell: importDefault, continueWithDefault: dependencyMap } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  const tmp = closure_13();
  const tmp2 = usePremiumPlanSelectStore((isPurchasing) => isPurchasing.isPurchasing);
  [tmp4, c3] = _slicedToArray(react.useState(null), 2);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  const obj2 = productId(6915);
  const premiumBundledItemsFromProductId = obj2.getPremiumBundledItemsFromProductId(productId);
  let items = [LocaleStore];
  const obj3 = productId(504);
  const stateFromStores = obj3.useStateFromStores(items, () => locale.locale);
  const items1 = [IAPStore];
  const obj4 = productId(504);
  const tmp9 = _slicedToArray(obj4.useStateFromStoresArray(items1, () => {
    const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
    return items;
  }), 2);
  const first = tmp9[0];
  const premiumTier = premiumBundledItemsFromProductId.premiumTier;
  const obj = react;
  if (orderPriceString == null) {
    let priceString;
    if (first != null) {
      priceString = first.priceString;
    }
    orderPriceString = priceString;
  }
  react = tmp13;
  const effect = obj.useEffect(() => {
    if (closure_4) {
      dependencyMap();
    }
  });
  if (null == premiumTier || null == orderPriceString) {
    return null;
  } else {
    const tmp5Result = productId(1888);
    const formatPercentResult = tmp5Result.formatPercent(stateFromStores, closure_10 / 100);
    const obj5 = { onClose, noDefaultButtons: true, children: closure_12(closure_6, obj6) };
    obj6 = { style: tmp.container, children: items2 };
    const obj7 = { style: tmp.image, source: AssetRegistryDefault };
    const tmp19 = AlertDefault;
    items2 = [closure_11(closure_5, obj7), , , , , ];
    const obj8 = { style: tmp.header, accessibilityRole: "header", children: format(LQCVfK, obj9) };
    const LegacyText = productId(1188).LegacyText;
    const intl = productId(1126).intl;
    format = intl.format;
    obj9 = { discountPercentage: formatPercentResult, planName: tmp5Result2.getPremiumTypeDisplayName(premiumTier) };
    LQCVfK = productId(1126).t.LQCVfK;
    tmp5Result2 = productId(4528);
    items2[1] = closure_11(LegacyText, obj8);
    const obj10 = { style: tmp.description, children: intl2.format(productId(1126).t["7chOVL"], obj11) };
    const LegacyText2 = productId(1188).LegacyText;
    intl2 = productId(1126).intl;
    obj11 = { discountPercentage: formatPercentResult };
    items2[2] = closure_11(LegacyText2, obj10);
    const obj12 = { style: tmp.upsellButton, children: closure_11(Button, obj13) };
    obj13 = {
      variant: "active",
      text: intl3.formatToPlainString(productId(1126).t.Qvq6GE, obj14),
      onPress() {
          _undefined("upsell");
          importDefault();
        },
      disabled: tmp2 || tmp9[1],
      loading: "upsell" === tmp4 && tmp2
    };
    Button = productId(5594).Button;
    intl3 = productId(1126).intl;
    obj14 = { price: orderPriceString };
    items2[3] = closure_11(closure_6, obj12);
    const obj15 = { style: tmp.continueButton, children: closure_11(Button2, obj16) };
    obj16 = {
      variant: "secondary",
      text: intl4.string(productId(1126).t.YwEyQM),
      onPress() {
          _undefined("default");
          dependencyMap();
        },
      disabled: tmp2 || tmp9[1],
      loading: "default" === tmp4 && tmp2
    };
    Button2 = productId(5594).Button;
    intl4 = productId(1126).intl;
    items2[4] = closure_11(closure_6, obj15);
    const obj17 = { style: tmp.cancelButton, children: closure_11(Button3, obj18) };
    obj18 = { variant: "tertiary", text: intl5.string(productId(1126).t.cpT0Cq), onPress: onClose };
    Button3 = productId(5594).Button;
    intl5 = productId(1126).intl;
    items2[5] = closure_11(closure_6, obj17);
    return closure_11(tmp19, obj5);
  }
});
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx");

export default tmp6;