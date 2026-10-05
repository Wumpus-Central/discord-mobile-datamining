// discord_app/modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx
import common_AlertDefault from "../../../components_native/common/Alert.tsx";
import TextStylesDefault from "../../rebrand/native/TextStyles.tsx";
import _modDef13360 from "../../../../_runtime/metro/13360__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const usePremiumPlanSelectStore = fn(13348).usePremiumPlanSelectStore;
let closure_10 = fn(1379).PREMIUM_YEARLY_DISCOUNT_PERCENT;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { marginHorizontal: 26 },
  image: { alignSelf: "center", marginVertical: 32 },
  header: null,
  description: null,
  upsellButton: null,
  continueButton: null,
  cancelButton: null,
};
let obj3 = {};
const merged = Object.assign(TextStylesDefault(fn(1096).Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj3.alignSelf = "center";
obj3.textAlign = "center";
obj3.paddingBottom = 8;
obj3.color = fn(5620).DARK_WHITE_500_LIGHT_BLACK_500;
obj2.header = obj3;
obj2.description = {
  alignSelf: "center",
  textAlign: "center",
  paddingBottom: 32,
  color: fn(5620).DARK_WHITE_500_LIGHT_BLACK_500,
};
obj2.upsellButton = { marginBottom: 16 };
obj2.continueButton = { marginBottom: 4 };
obj2.cancelButton = { marginTop: 8, marginBottom: 4 };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  alignSelf: "center",
  textAlign: "center",
  paddingBottom: 32,
  color: fn(5620).DARK_WHITE_500_LIGHT_BLACK_500,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (continueWithDefault) => {
      const cResult = productId(continueWithDefault[13]).c(43);
      ({ onClose, productId } = continueWithDefault);
      ({ orderPriceString, continueWithUpsell } = continueWithDefault);
      continueWithDefault = continueWithDefault.continueWithDefault;
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function f(isPurchasing) {
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
      const premiumBundledItemsFromProductId = productId(continueWithDefault[14]).getPremiumBundledItemsFromProductId(
        productId,
      );
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [LocaleStore];
        const fn2 = function b() {
          return locale.locale;
        };
        cResult[1] = items;
        cResult[2] = fn2;
        let tmp11 = fn2;
        let tmp10 = items;
      } else {
        tmp10 = cResult[1];
        tmp11 = cResult[2];
      }
      const tmpResult = productId(continueWithDefault[14]);
      const stateFromStores = productId(continueWithDefault[15]).useStateFromStores(tmp10, tmp11);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [IAPStore];
        cResult[3] = items1;
        let tmp14 = items1;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] !== productId) {
        class N {
          constructor() {
            items = [,];
            items[0] = closure_8.getProduct(productId);
            items[1] = closure_8.isBusy();
            return items;
          }
        }
        cResult[4] = productId;
        cResult[5] = N;
      } else {
        class N {
          constructor() {
            items = [,];
            items[0] = closure_8.getProduct(productId);
            items[1] = closure_8.isBusy();
            return items;
          }
        }
      }
      const tmpResult3 = productId(continueWithDefault[15]);
      const tmpResult4 = productId(continueWithDefault[15]);
      if (!tmp6) {
        class N {
          constructor() {
            items = [,];
            items[0] = closure_8.getProduct(productId);
            items[1] = closure_8.isBusy();
            return items;
          }
        }
      }
      if (orderPriceString == null) {
        class N {
          constructor() {
            items = [,];
            items[0] = closure_8.getProduct(productId);
            items[1] = closure_8.isBusy();
            return items;
          }
        }
        if (tmp7Result[0] != null) {
          class N {
            constructor() {
              items = [,];
              items[0] = closure_8.getProduct(productId);
              items[1] = closure_8.isBusy();
              return items;
            }
          }
        }
        orderPriceString = tmp18;
      }
      noop = tmp19;
      if (cResult[6] === continueWithDefault) {
        class N {
          constructor() {
            items = [,];
            items[0] = closure_8.getProduct(productId);
            items[1] = closure_8.isBusy();
            return items;
          }
        }
        const effect = obj2.useEffect(V);
        if (tmp19) {
          class N {
            constructor() {
              items = [,];
              items[0] = closure_8.getProduct(productId);
              items[1] = closure_8.isBusy();
              return items;
            }
          }
        } else {
          class N {
            constructor() {
              items = [,];
              items[0] = closure_8.getProduct(productId);
              items[1] = closure_8.isBusy();
              return items;
            }
          }
          const container = tmp4.container;
          if (cResult[9] !== tmp4.image) {
            class N {
              constructor() {
                items = [,];
                items[0] = closure_8.getProduct(productId);
                items[1] = closure_8.isBusy();
                return items;
              }
            }
            const obj3 = { style: tmp4.image, source: continueWithUpsell(tmp2[17]) };
            const tmp26 = closure_11(closure_5, obj3);
            cResult[9] = tmp4.image;
            cResult[10] = tmp26;
          } else {
            class N {
              constructor() {
                items = [,];
                items[0] = closure_8.getProduct(productId);
                items[1] = closure_8.isBusy();
                return items;
              }
            }
          }
          const LegacyText = productId(tmp2[18]).LegacyText;
          const intl = productId(tmp2[19]).intl;
          const obj4 = { discountPercentage: obj6.formatPercent(stateFromStores, closure_10 / 100) };
          const formatResult = intl.format(productId(tmp2[19]).t["7chOVL"], obj4);
          if (cResult[11] === LegacyText) {
            class N {
              constructor() {
                items = [,];
                items[0] = closure_8.getProduct(productId);
                items[1] = closure_8.isBusy();
                return items;
              }
            }
          }
          const obj5 = { style: tmp4.description, children: formatResult };
          const tmp30 = closure_11(LegacyText, obj5);
          cResult[11] = LegacyText;
          cResult[12] = tmp4.description;
          cResult[13] = formatResult;
          cResult[14] = tmp30;
          const formatPercentResult = obj6.formatPercent(stateFromStores, closure_10 / 100);
        }
      }
      class V {
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
      cResult[8] = V;
      tmp7Result = _slicedToArray(productId(continueWithDefault[15]).useStateFromStoresArray(tmp14, N), 2);
    }
  : (arg0) => {
      ({ onClose, productId } = arg0);
      ({ orderPriceString, continueWithUpsell: importDefault, continueWithDefault: dependencyMap } = arg0);
      _slicedToArray = undefined;
      noop = undefined;
      const tmp = closure_13();
      const tmp2 = usePremiumPlanSelectStore((isPurchasing) => isPurchasing.isPurchasing);
      [tmp4, c3] = noop.useState(null);
      const obj = noop;
      const tmp3 = _slicedToArray(noop.useState(null), 2);
      const premiumBundledItemsFromProductId = productId(6915).getPremiumBundledItemsFromProductId(productId);
      const obj2 = productId(6915);
      let items = [LocaleStore];
      const stateFromStores = productId(504).useStateFromStores(items, () => locale.locale);
      const obj3 = productId(504);
      const items1 = [IAPStore];
      const tmp9 = _slicedToArray(
        productId(504).useStateFromStoresArray(items1, () => {
          const items = [IAPStore.getProduct(productId), IAPStore.isBusy()];
          return items;
        }),
        2,
      );
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
        const formatPercentResult = productId(1888).formatPercent(stateFromStores, closure_10 / 100);
        const obj5 = { onClose, noDefaultButtons: true, children: null };
        const obj6 = { style: tmp.container, children: null };
        const obj7 = { style: tmp.image, source: null };
        const tmp5Result = productId(1888);
        obj7.source = _modDef13360;
        const items2 = [closure_11(closure_5, obj7), , , , ,];
        const obj8 = { style: tmp.header, accessibilityRole: "header", children: null };
        const intl = productId(1126).intl;
        const obj9 = { discountPercentage: formatPercentResult, planName: null };
        const tmp19 = common_AlertDefault;
        obj9.planName = productId(4528).getPremiumTypeDisplayName(premiumTier);
        obj8.children = intl.format(productId(1126).t.LQCVfK, obj9);
        items2[1] = closure_11(productId(1188).LegacyText, obj8);
        const obj10 = { style: tmp.description, children: null };
        const intl2 = productId(1126).intl;
        const obj11 = { discountPercentage: formatPercentResult };
        obj10.children = intl2.format(productId(1126).t["7chOVL"], obj11);
        items2[2] = closure_11(productId(1188).LegacyText, obj10);
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
        obj12.children = closure_11(productId(5594).Button, obj13);
        items2[3] = closure_11(closure_6, obj12);
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
        obj15.children = closure_11(productId(5594).Button, obj16);
        items2[4] = closure_11(closure_6, obj15);
        const obj17 = { style: tmp.cancelButton, children: null };
        const obj18 = { variant: "tertiary", text: null, onPress: null };
        const intl5 = productId(1126).intl;
        obj18.text = intl5.string(productId(1126).t.cpT0Cq);
        obj18.onPress = onClose;
        obj17.children = closure_11(productId(5594).Button, obj18);
        items2[5] = closure_11(closure_6, obj17);
        obj6.children = items2;
        obj5.children = closure_12(closure_6, obj6);
        return closure_11(tmp19, obj5);
      }
      const obj4 = productId(504);
    };
