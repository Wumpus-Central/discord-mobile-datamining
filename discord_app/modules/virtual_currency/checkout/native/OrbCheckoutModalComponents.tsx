// === Module 12036: OrbCheckoutErrorCard ===

// Module 12036 (OrbCheckoutErrorCard)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useThemeDefault from "useTheme" /* 4314 */;
import Stack from "Stack" /* 4738 */;
import Text from "Text" /* 4739 */;
import Button from "Button" /* 4750 */;
import CircleErrorIcon from "CircleErrorIcon" /* 8113 */;
import OrbsIcon from "OrbsIcon" /* 9275 */;
import ProfileEffectAssetPreviewDefault from "ProfileEffectAssetPreview" /* 12016 */;
import OrbCheckoutAmountTagDefault from "OrbCheckoutAmountTag" /* 12018 */;
import useOrbCheckoutModalContextProvider from "useOrbCheckoutModalContextProvider" /* 12035 */;
import useVirtualCurrencyBalance from "useVirtualCurrencyBalance" /* 12037 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
({ View: c4, ActivityIndicator: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { topRowWrapper: { width: "100%", marginBottom: 10 }, rowWrapper: { width: "100%", marginVertical: 10 }, rowDetailsContainer: null, orbPaymentSourceDetails: null, sectionTitle: null, spinner: null, disclaimer: null, errorCard: null };
createCacheKey = { borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, padding: ThemesDefault.space.PX_16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
createCacheKey[4] = { marginBottom: ThemesDefault.space.PX_8 };
let obj1 = { marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[5] = { paddingVertical: ThemesDefault.space.PX_16, alignItems: "center" };
createCacheKey[6] = { opacity: 0.5 };
const obj2 = { paddingVertical: ThemesDefault.space.PX_16, alignItems: "center" };
createCacheKey[7] = { borderRadius: ThemesDefault.radii.sm, padding: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const obj3 = { borderRadius: ThemesDefault.radii.sm, padding: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
const result = require("set").fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx");

export const OrbCheckoutErrorCard = function OrbCheckoutErrorCard(children) {
  let obj = { style: callback3().errorCard, children: null };
  obj = { direction: "horizontal", spacing: 8, align: "flex-start", children: null };
  const items = [callback(CircleErrorIcon.CircleErrorIcon, { size: "sm", color: "mobile-text-heading-primary" }), callback(Text.Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: children.error })];
  obj[3] = items;
  obj[1] = callback2(Stack.Stack, obj);
  return callback(closure_4, obj);
};
export const OrbCheckoutOrderSummary = function OrbCheckoutOrderSummary(product) {
  product = product.product;
  const tmp = callback3();
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
    tmp5 = callback(ProfileEffectAssetPreviewDefault, obj);
    tmp6 = callback;
  }
  obj = { style: tmp.topRowWrapper, children: null };
  obj1 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: null };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.string(getSystemLocale.t.hws7bC);
  const items1 = [tmp6(Text.Text, obj1), tmp5];
  obj[1] = items1;
  return callback2(closure_4, obj);
};
export const OrbCheckoutPaymentSourceDetails = function OrbCheckoutPaymentSourceDetails(orbAmount) {
  const tmp = callback3();
  let obj = { style: tmp.rowWrapper, children: null };
  obj = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["zLch/S"]);
  const items = [callback(Text.Text, obj), ];
  obj = { style: items1, children: null };
  items1 = [, ];
  ({ rowDetailsContainer: arr2[0], orbPaymentSourceDetails: arr2[1] } = tmp);
  obj1 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[2] = intl2.string(getSystemLocale.t.y0WGqP);
  const items2 = [callback(Text.Text, obj1), callback(OrbCheckoutAmountTagDefault, { orbAmount: orbAmount.orbBalance })];
  obj[1] = items2;
  items[1] = callback2(closure_4, obj);
  obj[1] = items;
  return callback2(closure_4, obj);
};
export const OrbCheckoutLegalFinePrint = function OrbCheckoutLegalFinePrint() {
  let obj = skuId(12035);
  skuId = obj.useOrbCheckoutModalContext().skuId;
  const items = [skuId];
  const memo = React.useMemo(() => skuId(closure_1_2[12]).getOrbCheckoutDisclaimerMessage(skuId), items);
  obj = { style: callback3().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: memo };
  return callback(skuId(4739).Text, obj);
};
export const OrbCheckoutPurchaseButton = function OrbCheckoutPurchaseButton(onPress) {
  const tmp2 = useThemeDefault();
  let obj = useOrbCheckoutModalContextProvider;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ isRedeeming, orbProductContext } = orbCheckoutModalContext);
  const virtualCurrencyBalance = useVirtualCurrencyBalance.useVirtualCurrencyBalance();
  if (orbProductContext != null) {
    const orbPriceAmount = orbProductContext.orbPriceAmount;
  }
  let tmp3Result = tmp3(1363);
  let str = "primary";
  if (tmp3Result.isThemeDark(tmp2)) {
    str = "primary-overlay";
  }
  obj = { variant: str, size: "lg", text: null, icon: null, iconPosition: "start", loading: null, onPress: null, disabled: null };
  const intl = tmp3(1236).intl;
  obj[2] = intl.string(getSystemLocale.t["zLch/S"]);
  tmp3Result = tmp3(1363);
  let str2 = "control-primary-text-default";
  if (tmp3Result.isThemeDark(tmp2)) {
    str2 = "control-overlay-primary-text-default";
  }
  obj[3] = closure_6(OrbsIcon.OrbsIcon, { size: "md", color: str2 });
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
  return closure_6(Button.Button, obj);
};