// === Module 13552: PremiumPlanSelectYearlyUpsellModal ===

// Module 13552 (PremiumPlanSelectYearlyUpsellModal)
import common_AlertDefault from "common/Alert" /* 4994 */;
import TextStylesDefault from "TextStyles" /* 5524 */;
import _modDef13553 from "module_13553" /* 13553 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import IAPStore from "IAPStore" /* 7237 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const usePremiumPlanSelectStore = fn(13543).usePremiumPlanSelectStore;
let closure_10 = fn(1373).PREMIUM_YEARLY_DISCOUNT_PERCENT;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: { marginHorizontal: 26 }, image: { alignSelf: "center", marginVertical: 32 }, header: null, description: null, upsellButton: null, continueButton: null, cancelButton: null };
createStyles = {};
const merged = Object.assign(TextStylesDefault(fn(1085).Fonts.DISPLAY_EXTRABOLD, undefined, 24));
createStyles.alignSelf = "center";
createStyles.textAlign = "center";
createStyles.paddingBottom = 8;
createStyles.color = fn(5441).DARK_WHITE_500_LIGHT_BLACK_500;
createStyles.header = createStyles;
createStyles.description = { alignSelf: "center", textAlign: "center", paddingBottom: 32, color: fn(5441).DARK_WHITE_500_LIGHT_BLACK_500 };
createStyles.upsellButton = { marginBottom: 16 };
createStyles.continueButton = { marginBottom: 4 };
createStyles.cancelButton = { marginTop: 8, marginBottom: 4 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx");

export default function PremiumPlanSelectYearlyUpsellModal(arg0) {
  ({ onClose, productId } = arg0);
  ({ orderPriceString, continueWithUpsell: importDefault, continueWithDefault: dependencyMap } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_13();
  const tmp2 = usePremiumPlanSelectStore((isPurchasing) => isPurchasing.isPurchasing);
  let obj = noop;
  [tmp4, c3] = _slicedToArray(noop.useState(null), 2);
  let obj1 = productId(7409);
  const premiumBundledItemsFromProductId = obj1.getPremiumBundledItemsFromProductId(productId);
  let obj2 = productId(504);
  let items = [LocaleStore];
  const stateFromStores = obj2.useStateFromStores(items, () => locale.locale);
  let obj3 = productId(504);
  const items1 = [IAPStore];
  const tmp9 = _slicedToArray(obj3.useStateFromStoresArray(items1, () => {
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
    let tmp5Result = productId(1880);
    const formatPercentResult = tmp5Result.formatPercent(stateFromStores, closure_10 / 100);
    obj = { onClose, noDefaultButtons: true, children: null };
    obj = { style: tmp.container, children: null };
    obj1 = { style: tmp.image, source: _modDef13553 };
    const items2 = [closure_11(closure_5, obj1), , , , , ];
    obj2 = { style: tmp.header, accessibilityRole: "header", children: null };
    const intl = productId(1114).intl;
    obj3 = { discountPercentage: formatPercentResult, planName: null };
    tmp5Result = productId(4218);
    obj3.planName = tmp5Result.getPremiumTypeDisplayName(premiumTier);
    obj2.children = intl.format(productId(1114).t.LQCVfK, obj3);
    items2[1] = closure_11(productId(1178).LegacyText, obj2);
    const obj4 = { style: tmp.description, children: null };
    const intl2 = productId(1114).intl;
    const obj5 = { discountPercentage: formatPercentResult };
    obj4.children = intl2.format(productId(1114).t["7chOVL"], obj5);
    items2[2] = closure_11(productId(1178).LegacyText, obj4);
    const obj6 = { style: tmp.upsellButton, children: null };
    const obj7 = { variant: "active", text: null, onPress: null, disabled: null, loading: null };
    const intl3 = productId(1114).intl;
    const obj8 = { price: orderPriceString };
    obj7.text = intl3.formatToPlainString(productId(1114).t.Qvq6GE, obj8);
    obj7.onPress = function onPress() {
      _undefined("upsell");
      importDefault();
    };
    obj7.disabled = tmp11;
    obj7.loading = "upsell" === tmp4 && tmp2;
    obj6.children = closure_11(productId(4975).Button, obj7);
    items2[3] = closure_11(closure_6, obj6);
    const obj9 = { style: tmp.continueButton, children: null };
    const obj10 = { variant: "secondary", text: null, onPress: null, disabled: null, loading: null };
    const intl4 = productId(1114).intl;
    obj10.text = intl4.string(productId(1114).t.YwEyQM);
    obj10.onPress = function onPress() {
      _undefined("default");
      dependencyMap();
    };
    obj10.disabled = tmp11;
    obj10.loading = "default" === tmp4 && tmp2;
    obj9.children = closure_11(productId(4975).Button, obj10);
    items2[4] = closure_11(closure_6, obj9);
    const obj11 = { style: tmp.cancelButton, children: null };
    const obj12 = { variant: "tertiary", text: null, onPress: null };
    const intl5 = productId(1114).intl;
    obj12.text = intl5.string(productId(1114).t.cpT0Cq);
    obj12.onPress = onClose;
    obj11.children = closure_11(productId(4975).Button, obj12);
    items2[5] = closure_11(closure_6, obj11);
    obj.children = items2;
    obj.children = closure_12(closure_6, obj);
    return closure_11(common_AlertDefault, obj);
  }
  const tmp3 = _slicedToArray(noop.useState(null), 2);
};