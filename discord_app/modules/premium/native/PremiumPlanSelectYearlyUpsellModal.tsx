// discord_app/modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx
import common_AlertDefault from "../../../components_native/common/Alert.tsx";
import TextStylesDefault from "../../rebrand/native/TextStyles.tsx";
import _modDef13756 from "../../../../_runtime/metro/13756__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const usePremiumPlanSelectStore = fn(13746).usePremiumPlanSelectStore;
let closure_10 = fn(1374).PREMIUM_YEARLY_DISCOUNT_PERCENT;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4722);
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
const merged = Object.assign(TextStylesDefault(fn(1085).Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj3.alignSelf = "center";
obj3.textAlign = "center";
obj3.paddingBottom = 8;
obj3.color = fn(5611).DARK_WHITE_500_LIGHT_BLACK_500;
obj2.header = obj3;
obj2.description = {
  alignSelf: "center",
  textAlign: "center",
  paddingBottom: 32,
  color: fn(5611).DARK_WHITE_500_LIGHT_BLACK_500,
};
obj2.upsellButton = { marginBottom: 16 };
obj2.continueButton = { marginBottom: 4 };
obj2.cancelButton = { marginTop: 8, marginBottom: 4 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx");

export default function PremiumPlanSelectYearlyUpsellModal(arg0) {
  ({ onClose, productId } = arg0);
  ({ orderPriceString, continueWithUpsell: importDefault, continueWithDefault: dependencyMap } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_13();
  const tmp2 = usePremiumPlanSelectStore((isPurchasing) => isPurchasing.isPurchasing);
  [tmp4, c3] = noop.useState(null);
  const obj = noop;
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  const premiumBundledItemsFromProductId = productId(7605).getPremiumBundledItemsFromProductId(productId);
  const obj2 = productId(7605);
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
    const formatPercentResult = productId(1881).formatPercent(stateFromStores, closure_10 / 100);
    const obj5 = { onClose, noDefaultButtons: true, children: null };
    const obj6 = { style: tmp.container, children: null };
    const obj7 = { style: tmp.image, source: null };
    const tmp5Result = productId(1881);
    obj7.source = _modDef13756;
    const items2 = [closure_11(closure_5, obj7), , , , ,];
    const obj8 = { style: tmp.header, accessibilityRole: "header", children: null };
    const intl = productId(1115).intl;
    const obj9 = { discountPercentage: formatPercentResult, planName: null };
    const tmp19 = common_AlertDefault;
    obj9.planName = productId(4380).getPremiumTypeDisplayName(premiumTier);
    obj8.children = intl.format(productId(1115).t.LQCVfK, obj9);
    items2[1] = closure_11(productId(1177).LegacyText, obj8);
    const obj10 = { style: tmp.description, children: null };
    const intl2 = productId(1115).intl;
    const obj11 = { discountPercentage: formatPercentResult };
    obj10.children = intl2.format(productId(1115).t["7chOVL"], obj11);
    items2[2] = closure_11(productId(1177).LegacyText, obj10);
    const obj12 = { style: tmp.upsellButton, children: null };
    const obj13 = { variant: "active", text: null, onPress: null, disabled: null, loading: null };
    const intl3 = productId(1115).intl;
    const obj14 = { price: orderPriceString };
    obj13.text = intl3.formatToPlainString(productId(1115).t.Qvq6GE, obj14);
    obj13.onPress = function onPress() {
      _undefined("upsell");
      importDefault();
    };
    obj13.disabled = tmp11;
    obj13.loading = "upsell" === tmp4 && tmp2;
    obj12.children = closure_11(productId(5144).Button, obj13);
    items2[3] = closure_11(closure_6, obj12);
    const obj15 = { style: tmp.continueButton, children: null };
    const obj16 = { variant: "secondary", text: null, onPress: null, disabled: null, loading: null };
    const intl4 = productId(1115).intl;
    obj16.text = intl4.string(productId(1115).t.YwEyQM);
    obj16.onPress = function onPress() {
      _undefined("default");
      dependencyMap();
    };
    obj16.disabled = tmp11;
    obj16.loading = "default" === tmp4 && tmp2;
    obj15.children = closure_11(productId(5144).Button, obj16);
    items2[4] = closure_11(closure_6, obj15);
    const obj17 = { style: tmp.cancelButton, children: null };
    const obj18 = { variant: "tertiary", text: null, onPress: null };
    const intl5 = productId(1115).intl;
    obj18.text = intl5.string(productId(1115).t.cpT0Cq);
    obj18.onPress = onClose;
    obj17.children = closure_11(productId(5144).Button, obj18);
    items2[5] = closure_11(closure_6, obj17);
    obj6.children = items2;
    obj5.children = closure_12(closure_6, obj6);
    return closure_11(tmp19, obj5);
  }
  const obj4 = productId(504);
}
