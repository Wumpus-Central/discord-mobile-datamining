import noop from "noop";
import get_ActivityIndicator from "OrbsIcon";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c4, ActivityIndicator: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { topRowWrapper: { width: "100%", marginBottom: 10 }, rowWrapper: { width: "100%", marginVertical: 10 }, rowDetailsContainer: null, orbPaymentSourceDetails: null, sectionTitle: null, spinner: null, disclaimer: null, errorCard: null };
createCacheKey = { borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, padding: require("Themes").space.PX_16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
createCacheKey[4] = { marginBottom: require("Themes").space.PX_8 };
let obj1 = { marginBottom: require("Themes").space.PX_8 };
createCacheKey[5] = { paddingVertical: require("Themes").space.PX_16, alignItems: "center" };
createCacheKey[6] = { opacity: 0.5 };
const obj2 = { paddingVertical: require("Themes").space.PX_16, alignItems: "center" };
createCacheKey[7] = { borderRadius: require("Themes").radii.sm, padding: require("Themes").space.PX_12, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_CRITICAL };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj3 = { borderRadius: require("Themes").radii.sm, padding: require("Themes").space.PX_12, backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_CRITICAL };
const result = require("jsxProd").fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx");

export const OrbCheckoutErrorCard = function OrbCheckoutErrorCard(children) {
  let obj = { style: createCacheKey().errorCard, children: null };
  obj = { direction: "horizontal", spacing: 8, align: "flex-start", children: null };
  const items = [callback(require(7716) /* CircleErrorIcon */.CircleErrorIcon, { size: "sm", color: "mobile-text-heading-primary" }), callback(require(4281) /* Text */.Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: children.error })];
  obj[3] = items;
  obj[1] = callback2(require(4693) /* Stack */.Stack, obj);
  return callback(closure_4, obj);
};
export const OrbCheckoutOrderSummary = function OrbCheckoutOrderSummary(product) {
  product = product.product;
  const tmp = createCacheKey();
  if (null == product) {
    let obj = { style: null, children: null };
    const items = [, ];
    ({ rowDetailsContainer: arr[0], spinner: arr[1] } = tmp);
    obj[0] = items;
    obj[1] = callback(closure_5, { size: "small" });
    let tmp5 = callback(closure_4, obj);
    let tmp6 = callback;
  } else {
    obj = { product: null, useOrbPrice: true };
    obj[0] = product;
    tmp5 = callback(importDefault(12050), obj);
    tmp6 = callback;
  }
  obj = { style: tmp.topRowWrapper, children: null };
  const obj1 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[3] = intl.string(require(1236) /* getSystemLocale */.t.hws7bC);
  const items1 = [tmp6(require(4281) /* Text */.Text, obj1), tmp5];
  obj[1] = items1;
  return callback2(closure_4, obj);
};
export const OrbCheckoutPaymentSourceDetails = function OrbCheckoutPaymentSourceDetails(orbAmount) {
  const tmp = createCacheKey();
  let obj = { style: tmp.rowWrapper, children: null };
  obj = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["zLch/S"]);
  const items = [callback(require(4281) /* Text */.Text, obj), ];
  obj = { style: items1, children: null };
  items1 = [, ];
  ({ rowDetailsContainer: arr2[0], orbPaymentSourceDetails: arr2[1] } = tmp);
  const obj1 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj1[2] = intl2.string(require(1236) /* getSystemLocale */.t.y0WGqP);
  const items2 = [callback(require(4281) /* Text */.Text, obj1), callback(importDefault(12052), { orbAmount: orbAmount.orbBalance })];
  obj[1] = items2;
  items[1] = callback2(closure_4, obj);
  obj[1] = items;
  return callback2(closure_4, obj);
};
export const OrbCheckoutLegalFinePrint = function OrbCheckoutLegalFinePrint() {
  let obj = skuId(12069);
  skuId = obj.useOrbCheckoutModalContext().skuId;
  const items = [skuId];
  const memo = React.useMemo(() => skuId(outer1_2[12]).getOrbCheckoutDisclaimerMessage(skuId), items);
  obj = { style: createCacheKey().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: memo };
  return callback(skuId(4281).Text, obj);
};
export const OrbCheckoutPurchaseButton = function OrbCheckoutPurchaseButton(onPress) {
  let isRedeeming;
  let orbProductContext;
  const tmp2 = importDefault(4221)();
  let obj = require(12069) /* useOrbCheckoutModalContextProvider */;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ isRedeeming, orbProductContext } = orbCheckoutModalContext);
  const virtualCurrencyBalance = require(12071) /* useVirtualCurrencyBalance */.useVirtualCurrencyBalance();
  if (orbProductContext != null) {
    const orbPriceAmount = orbProductContext.orbPriceAmount;
  }
  let tmp3Result = tmp3(4131);
  let str = "primary";
  if (tmp3Result.isThemeDark(tmp2)) {
    str = "primary-overlay";
  }
  obj = { variant: str, size: "lg", text: null, icon: null, iconPosition: "start", loading: null, onPress: null, disabled: null };
  const intl = tmp3(1236).intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["zLch/S"]);
  tmp3Result = tmp3(4131);
  let str2 = "control-primary-text-default";
  if (tmp3Result.isThemeDark(tmp2)) {
    str2 = "control-overlay-primary-text-default";
  }
  obj[3] = closure_6(require(9326) /* OrbsIcon */.OrbsIcon, { size: "md", color: str2 });
  obj[5] = isRedeeming;
  obj[6] = onPress.onPress;
  if (!isRedeeming) {
    isRedeeming = null == orbPriceAmount;
  }
  if (!isRedeeming) {
    isRedeeming = null == virtualCurrencyBalance;
  }
  if (!isRedeeming) {
    isRedeeming = virtualCurrencyBalance < orbPriceAmount;
  }
  obj[7] = isRedeeming;
  return closure_6(require(4695) /* Button */.Button, obj);
};