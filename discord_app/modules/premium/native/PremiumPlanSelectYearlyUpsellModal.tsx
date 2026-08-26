// === Module 13100: PremiumPlanSelectYearlyUpsellModal ===

// Module 13100 (PremiumPlanSelectYearlyUpsellModal)
import componentDidMountDefault from "componentDidMount" /* 4898 */;
import createTextStyleDefault from "createTextStyle" /* 5408 */;
import registerAssetDefault from "registerAsset" /* 13101 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "_getSystemLocale" /* 1996 */;
import closure_8 from "updateProduct" /* 6031 */;
import { usePremiumPlanSelectStore } from "usePremiumPlanSelectStore" /* 13091 */;
import { PREMIUM_YEARLY_DISCOUNT_PERCENT as closure_10 } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ Image: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: { marginHorizontal: 26 }, image: { alignSelf: "center", marginVertical: 32 }, header: null, description: null, upsellButton: null, continueButton: null, cancelButton: null };
createCacheKey = {};
const merged = Object.assign(createTextStyleDefault(require("sum").Fonts.DISPLAY_EXTRABOLD, undefined, 24));
createCacheKey.alignSelf = "center";
createCacheKey.textAlign = "center";
createCacheKey.paddingBottom = 8;
createCacheKey.color = require("result").DARK_WHITE_500_LIGHT_BLACK_500;
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { alignSelf: "center", textAlign: "center", paddingBottom: 32, color: require("result").DARK_WHITE_500_LIGHT_BLACK_500 };
createCacheKey[4] = { marginBottom: 16 };
createCacheKey[5] = { marginBottom: 4 };
createCacheKey[6] = { marginTop: 8, marginBottom: 4 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj1 = { alignSelf: "center", textAlign: "center", paddingBottom: 32, color: require("result").DARK_WHITE_500_LIGHT_BLACK_500 };
const result = require("set").fileFinishedImporting("modules/premium/native/PremiumPlanSelectYearlyUpsellModal.tsx");

export default function PremiumPlanSelectYearlyUpsellModal(arg0) {
  ({ onClose, productId } = arg0);
  ({ orderPriceString, continueWithUpsell: importDefault, continueWithDefault: dependencyMap } = arg0);
  let callback;
  let React;
  const tmp = callback3();
  const tmp2 = usePremiumPlanSelectStore((isPurchasing) => isPurchasing.isPurchasing);
  let obj = React;
  [tmp4, c3] = callback(React.useState(null), 2);
  obj1 = productId(7080);
  const premiumBundledItemsFromProductId = obj1.getPremiumBundledItemsFromProductId(productId);
  let obj2 = productId(589);
  let items = [closure_7];
  const stateFromStores = obj2.useStateFromStores(items, () => locale.locale);
  let obj3 = productId(589);
  const items1 = [closure_8];
  const tmp9 = callback(obj3.useStateFromStoresArray(items1, () => {
    const items = [closure_1_8.getProduct(productId), closure_1_8.isBusy()];
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
  React = tmp13;
  const effect = obj.useEffect(() => {
    if (closure_4) {
      callback2();
    }
  });
  if (null == premiumTier || null == orderPriceString) {
    return null;
  } else {
    let tmp5Result = tmp5(1898);
    const formatPercentResult = tmp5Result.formatPercent(stateFromStores, closure_10 / 100);
    obj = { onClose: null, noDefaultButtons: true, children: null };
    obj[0] = onClose;
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, source: null };
    obj1[0] = tmp.image;
    obj1[1] = registerAssetDefault;
    const items2 = [callback2(closure_5, obj1), , , , , ];
    obj2 = { style: null, accessibilityRole: "header", children: null };
    obj2[0] = tmp.header;
    const intl = tmp5(1236).intl;
    obj3 = { discountPercentage: null, planName: null };
    obj3[0] = formatPercentResult;
    tmp5Result = tmp5(4107);
    obj3[1] = tmp5Result.getPremiumTypeDisplayName(premiumTier);
    obj2[2] = intl.format(tmp5(1236).t.LQCVfK, obj3);
    items2[1] = callback2(tmp5(1297).LegacyText, obj2);
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.description;
    const intl2 = tmp5(1236).intl;
    const obj5 = { discountPercentage: null };
    obj5[0] = formatPercentResult;
    obj4[1] = intl2.format(tmp5(1236).t["7chOVL"], obj5);
    items2[2] = callback2(tmp5(1297).LegacyText, obj4);
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.upsellButton;
    const obj7 = { variant: "active", text: null, onPress: null, disabled: null, loading: null };
    const intl3 = tmp5(1236).intl;
    const obj8 = { price: null };
    obj8[0] = orderPriceString;
    obj7[1] = intl3.formatToPlainString(tmp5(1236).t.Qvq6GE, obj8);
    obj7[2] = function onPress() {
      _undefined("upsell");
      callback();
    };
    obj7[3] = tmp11;
    obj7[4] = "upsell" === tmp4 && tmp2;
    obj6[1] = callback2(tmp5(4879).Button, obj7);
    items2[3] = callback2(closure_6, obj6);
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.continueButton;
    const obj10 = { variant: "secondary", text: null, onPress: null, disabled: null, loading: null };
    const intl4 = tmp5(1236).intl;
    obj10[1] = intl4.string(tmp5(1236).t.YwEyQM);
    obj10[2] = function onPress() {
      _undefined("default");
      callback2();
    };
    obj10[3] = tmp11;
    obj10[4] = "default" === tmp4 && tmp2;
    obj9[1] = callback2(tmp5(4879).Button, obj10);
    items2[4] = callback2(closure_6, obj9);
    const obj11 = { style: null, children: null };
    obj11[0] = tmp.cancelButton;
    const obj12 = { variant: "tertiary", text: null, onPress: null };
    const intl5 = tmp5(1236).intl;
    obj12[1] = intl5.string(tmp5(1236).t.cpT0Cq);
    obj12[2] = onClose;
    obj11[1] = callback2(tmp5(4879).Button, obj12);
    items2[5] = callback2(closure_6, obj11);
    obj[1] = items2;
    obj[2] = closure_12(closure_6, obj);
    return callback2(componentDidMountDefault, obj);
  }
  const tmp3 = callback(React.useState(null), 2);
};