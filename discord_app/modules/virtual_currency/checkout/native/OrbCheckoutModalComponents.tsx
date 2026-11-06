// === Module 15284: OrbCheckoutModalComponents ===

// Module 15284 (OrbCheckoutModalComponents)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import shared from "shared" /* 5177 */;
import useThemeDefault from "useTheme" /* 5399 */;
import Text_Text from "Text/Text" /* 5781 */;
import components_Button_Button from "components/Button/Button" /* 5788 */;
import Stack_Stack from "Stack/Stack" /* 6185 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7177 */;
import OrbCheckoutUtils from "OrbCheckoutUtils" /* 7503 */;
import SKUPreviewDefault from "SKUPreview" /* 9568 */;
import OrbsIcon from "OrbsIcon" /* 9634 */;
import CollectiblesShopCheckoutDetailsDefault from "CollectiblesShopCheckoutDetails" /* 14632 */;
import OrbCheckoutAmountTagDefault from "OrbCheckoutAmountTag" /* 14634 */;
import OrbCheckoutModalContext from "OrbCheckoutModalContext" /* 15282 */;
import useVirtualCurrencyBalance from "useVirtualCurrencyBalance" /* 15286 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7819 */;
import SKUStore from "SKUStore" /* 6976 */;

require = fn;
function GenericOrbCheckoutPurchaseItem(arg0) {
  ({ sku, orbPriceAmount } = arg0);
  const tmp = closure_12();
  const intl = util.intl;
  let str = orbPriceAmount;
  if (orbPriceAmount == null) {
    str = "";
  }
  const obj = { style: null, accessible: true, accessibilityLabel: "" + sku.name + ", " + intl.formatToPlainString(util.t.W4DfeF, { orbAmount: str }), children: null };
  items = [, ];
  ({ rowDetailsContainer: arr[0], skuDetailsContainer: arr[1] } = tmp);
  obj.style = items;
  const obj2 = { sku, size: nativeDefault.space.PX_64 };
  const items1 = [closure_1_10(SKUPreviewDefault, obj2), , ];
  const obj3 = { style: tmp.skuDetails, children: closure_1_10(Text_Text.Text, { variant: "body-md/semibold", children: sku.name }) };
  items1[1] = closure_1_10(React4, obj3);
  items1[2] = closure_1_10(OrbCheckoutAmountTagDefault, { orbAmount: orbPriceAmount });
  obj.children = items1;
  return closure_1_11(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const SKUProductLines = fn(1072).SKUProductLines;
const isFractionalPremiumSku = fn(1074).isFractionalPremiumSku;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5170);
let obj2 = { topRowWrapper: { width: "100%", marginBottom: 10 }, rowWrapper: { width: "100%", marginVertical: 10 }, rowDetailsContainer: { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, padding: nativeDefault.space.PX_16 }, orbPaymentSourceDetails: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, sectionTitle: null, spinner: null, skuDetailsContainer: null, skuDetails: null, disclaimer: null, errorCard: null };
let obj3 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, padding: nativeDefault.space.PX_16 };
obj2.sectionTitle = { marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj2.spinner = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
let obj5 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
obj2.skuDetailsContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.skuDetails = { flex: 1 };
obj2.disclaimer = { opacity: 0.5 };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.errorCard = { borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_CRITICAL };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx");

export function OrbCheckoutErrorCard(children) {
  const obj = { style: closure_12().errorCard, children: null };
  const obj2 = { direction: "horizontal", spacing: 8, align: "flex-start", children: null };
  items = [closure_1_10(CircleErrorIcon.CircleErrorIcon, { size: "sm", color: "mobile-text-heading-primary" }), closure_1_10(Text_Text.Text, { variant: "body-sm/medium", color: "mobile-text-heading-primary", children: children.error })];
  obj2.children = items;
  obj.children = closure_1_11(Stack_Stack.Stack, obj2);
  return closure_1_10(React4, obj);
}
export function OrbCheckoutOrderSummary(skuId) {
  skuId = skuId.skuId;
  const orbPriceAmount = skuId.orbPriceAmount;
  const tmp = closure_12();
  if (obj.useOrbCheckoutModalContext().isOrdersCheckout) {
    const tmp4 = orbPriceAmount;
  }
  obj = skuId(15282);
  items = [SKUStore];
  const items1 = [skuId];
  const stateFromStores = skuId(563).useStateFromStores(items, () => SKUStore.get(skuId), items1);
  const tmp2Result = skuId(563);
  const items2 = [CollectiblesCategoryStore];
  const items3 = [skuId];
  let productLine;
  const stateFromStores1 = skuId(563).useStateFromStores(items2, () => CollectiblesCategoryStore.getProduct(skuId), items3);
  if (stateFromStores != null) {
    productLine = stateFromStores.productLine;
  }
  let tmp8 = productLine === SKUProductLines.COLLECTIBLES;
  if (!tmp8) {
    tmp8 = isFractionalPremiumSku(skuId);
  }
  const tmp2Result3 = skuId(563);
  const mobileCheckoutFlow = skuId(15285).getMobileCheckoutFlow({ sku: stateFromStores, product: stateFromStores1, usesCollectiblesDetails: tmp8 });
  const obj2 = { style: tmp.topRowWrapper, children: null };
  const obj3 = { variant: "heading-xs/semibold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: null };
  const intl = tmp2(1113).intl;
  obj3.children = intl.string(skuId(1113).t.hws7bC);
  const items4 = [closure_10(skuId(5781).Text, obj3), ];
  const scenario = mobileCheckoutFlow.scenario;
  if ("collectibles" === scenario) {
    const obj4 = { product: mobileCheckoutFlow.product, useOrbPrice: true, orbPriceAmount: tmp4 };
    let tmp13Result = closure_10(CollectiblesShopCheckoutDetailsDefault, obj4);
  } else if ("commerce" === scenario) {
    const obj5 = { sku: mobileCheckoutFlow.sku, orbPriceAmount };
    tmp13Result = closure_10(GenericOrbCheckoutPurchaseItem, obj5);
  } else {
    tmp13Result = null;
    if ("loading" === scenario) {
      const obj6 = { style: null, children: null };
      const items5 = [, ];
      ({ rowDetailsContainer: arr6[0], spinner: arr6[1] } = tmp);
      obj6.style = items5;
      obj6.children = closure_10(closure_5, { size: "small" });
      tmp13Result = closure_10(closure_4, obj6);
    }
  }
  items4[1] = tmp13Result;
  obj2.children = items4;
  return closure_11(closure_4, obj2);
}
export function OrbCheckoutPaymentSourceDetails(orbAmount) {
  const tmp = closure_12();
  const obj = { style: tmp.rowWrapper, children: null };
  const obj2 = { variant: "heading-xs/semibold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["zLch/S"]);
  items = [closure_1_10(Text_Text.Text, obj2), ];
  const obj3 = { style: null, children: null };
  const items1 = [, ];
  ({ rowDetailsContainer: arr2[0], orbPaymentSourceDetails: arr2[1] } = tmp);
  obj3.style = items1;
  const obj4 = { variant: "body-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.y0WGqP);
  const items2 = [closure_1_10(Text_Text.Text, obj4), closure_1_10(OrbCheckoutAmountTagDefault, { orbAmount: orbAmount.orbBalance })];
  obj3.children = items2;
  items[1] = closure_1_11(React4, obj3);
  obj.children = items;
  return closure_1_11(React4, obj);
}
export function OrbCheckoutLegalFinePrint() {
  const tmp = closure_12();
  skuId = skuId(15282).useOrbCheckoutModalContext().skuId;
  items = [skuId];
  const memo = noop.useMemo(() => OrbCheckoutUtils.getOrbCheckoutDisclaimerMessage(skuId), items);
  return closure_10(skuId(5781).Text, { style: tmp.disclaimer, variant: "footnote/normal", color: "interactive-text-active", children: memo });
}
export function OrbCheckoutPurchaseButton(onPress) {
  const tmp2 = useThemeDefault();
  const orbCheckoutModalContext = OrbCheckoutModalContext.useOrbCheckoutModalContext();
  ({ isRedeeming, orbChargeAmount, isCreatingOrder } = orbCheckoutModalContext);
  const virtualCurrencyBalance = useVirtualCurrencyBalance.useVirtualCurrencyBalance();
  if (!isRedeeming) {
    isRedeeming = isCreatingOrder;
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
  obj3.icon = closure_1_10(OrbsIcon.OrbsIcon, { size: "md", color: str2 });
  obj3.loading = isRedeeming;
  obj3.onPress = onPress.onPress;
  if (!isRedeeming) {
    isRedeeming = null == orbChargeAmount;
  }
  if (!isRedeeming) {
    isRedeeming = null == virtualCurrencyBalance;
  }
  if (!isRedeeming) {
    isRedeeming = virtualCurrencyBalance < orbChargeAmount;
  }
  obj3.disabled = isRedeeming;
  return closure_1_10(components_Button_Button.Button, obj3);
}