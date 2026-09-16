// === Module 13303: OrbCheckoutModalComponents ===

// Module 13303 (OrbCheckoutModalComponents)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import shared from "shared" /* 4489 */;
import useThemeDefault from "useTheme" /* 4572 */;
import Text_Text from "Text/Text" /* 4634 */;
import Stack_Stack from "Stack/Stack" /* 5058 */;
import components_Button_Button from "components/Button/Button" /* 5060 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6718 */;
import OrbCheckoutUtils from "OrbCheckoutUtils" /* 7351 */;
import OrbsIcon from "OrbsIcon" /* 8976 */;
import CollectiblesShopCheckoutDetailsDefault from "CollectiblesShopCheckoutDetails" /* 11163 */;
import OrbCheckoutAmountTagDefault from "OrbCheckoutAmountTag" /* 11165 */;
import OrbCheckoutModalContext from "OrbCheckoutModalContext" /* 13302 */;
import useVirtualCurrencyBalance from "useVirtualCurrencyBalance" /* 13304 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { topRowWrapper: { width: "100%", marginBottom: 10 }, rowWrapper: { width: "100%", marginVertical: 10 }, rowDetailsContainer: { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, padding: nativeDefault.space.PX_16 }, orbPaymentSourceDetails: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, sectionTitle: null, spinner: null, disclaimer: null, errorCard: null };
let obj3 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, padding: nativeDefault.space.PX_16 };
obj2.sectionTitle = { marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj2.spinner = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
obj2.disclaimer = { opacity: 0.5 };
const obj5 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
obj2.errorCard = { borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx");

export const OrbCheckoutErrorCard = function OrbCheckoutErrorCard(children) {
  const obj = { style: closure_8().errorCard, children: null };
  const obj2 = { direction: "horizontal", spacing: 8, align: "flex-start", children: null };
  const items = [timestampProducer(CircleErrorIcon.CircleErrorIcon, { size: "sm", color: "mobile-text-heading-primary" }), timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: children.error })];
  obj2.children = items;
  obj.children = React5(Stack_Stack.Stack, obj2);
  return timestampProducer(React4, obj);
};
export const OrbCheckoutOrderSummary = function OrbCheckoutOrderSummary(product) {
  product = product.product;
  const tmp = closure_8();
  if (null == product) {
    const obj2 = { style: null, children: null };
    const items = [, ];
    ({ rowDetailsContainer: arr[0], spinner: arr[1] } = tmp);
    obj2.style = items;
    obj2.children = timestampProducer(hasOwnProperty, { size: "small" });
    let tmp5 = timestampProducer(React4, obj2);
    let tmp6 = timestampProducer;
  } else {
    const obj = { product, useOrbPrice: true };
    tmp5 = timestampProducer(CollectiblesShopCheckoutDetailsDefault, obj);
    tmp6 = timestampProducer;
  }
  const obj3 = { style: tmp.topRowWrapper, children: null };
  const obj4 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.hws7bC);
  const items1 = [tmp6(Text_Text.Text, obj4), tmp5];
  obj3.children = items1;
  return React5(React4, obj3);
};
export const OrbCheckoutPaymentSourceDetails = function OrbCheckoutPaymentSourceDetails(orbAmount) {
  const tmp = closure_8();
  const obj = { style: tmp.rowWrapper, children: null };
  const obj2 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["zLch/S"]);
  const items = [timestampProducer(Text_Text.Text, obj2), ];
  const obj3 = { style: null, children: null };
  const items1 = [, ];
  ({ rowDetailsContainer: arr2[0], orbPaymentSourceDetails: arr2[1] } = tmp);
  obj3.style = items1;
  const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.y0WGqP);
  const items2 = [timestampProducer(Text_Text.Text, obj4), timestampProducer(OrbCheckoutAmountTagDefault, { orbAmount: orbAmount.orbBalance })];
  obj3.children = items2;
  items[1] = React5(React4, obj3);
  obj.children = items;
  return React5(React4, obj);
};
export const OrbCheckoutLegalFinePrint = function OrbCheckoutLegalFinePrint() {
  const tmp = closure_8();
  skuId = skuId(13302).useOrbCheckoutModalContext().skuId;
  const items = [skuId];
  const memo = noop.useMemo(() => OrbCheckoutUtils.getOrbCheckoutDisclaimerMessage(skuId), items);
  return closure_6(skuId(4634).Text, { style: tmp.disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: memo });
};
export const OrbCheckoutPurchaseButton = function OrbCheckoutPurchaseButton(onPress) {
  const tmp2 = useThemeDefault();
  const orbCheckoutModalContext = OrbCheckoutModalContext.useOrbCheckoutModalContext();
  ({ isRedeeming, orbProductContext } = orbCheckoutModalContext);
  const virtualCurrencyBalance = useVirtualCurrencyBalance.useVirtualCurrencyBalance();
  if (orbProductContext != null) {
    const orbPriceAmount = orbProductContext.orbPriceAmount;
  }
  let str = "primary";
  if (tmp3Result.isThemeDark(tmp2)) {
    str = "primary-overlay";
  }
  const obj3 = { variant: str, size: "lg", text: null, icon: null, iconPosition: "start", loading: null, onPress: null, disabled: null };
  const intl = util.intl;
  obj3.text = intl.string(util.t["zLch/S"]);
  tmp3Result = shared;
  let str2 = "control-primary-text-default";
  if (tmp3Result2.isThemeDark(tmp2)) {
    str2 = "control-overlay-primary-text-default";
  }
  obj3.icon = timestampProducer(OrbsIcon.OrbsIcon, { size: "md", color: str2 });
  obj3.loading = isRedeeming;
  obj3.onPress = onPress.onPress;
  if (!isRedeeming) {
    isRedeeming = null == orbPriceAmount;
  }
  if (!isRedeeming) {
    isRedeeming = null == virtualCurrencyBalance;
  }
  if (!isRedeeming) {
    isRedeeming = virtualCurrencyBalance < orbPriceAmount;
  }
  obj3.disabled = isRedeeming;
  return timestampProducer(components_Button_Button.Button, obj3);
};