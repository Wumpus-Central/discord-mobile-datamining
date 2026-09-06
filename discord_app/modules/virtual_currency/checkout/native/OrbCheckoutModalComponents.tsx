// discord_app/modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import OrbCheckoutUtils from "../OrbCheckoutUtils.tsx";
import OrbsIcon from "../../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import CollectiblesShopCheckoutDetailsDefault from "../../../collectibles/native/CollectiblesShopCheckoutDetails.tsx";
import OrbCheckoutAmountTagDefault from "../../native/OrbCheckoutAmountTag.tsx";
import OrbCheckoutModalContext from "../OrbCheckoutModalContext.tsx";
import useVirtualCurrencyBalance from "../../hooks/useVirtualCurrencyBalance.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  topRowWrapper: { width: "100%", marginBottom: 10 },
  rowWrapper: { width: "100%", marginVertical: 10 },
  rowDetailsContainer: null,
  orbPaymentSourceDetails: null,
  sectionTitle: null,
  spinner: null,
  disclaimer: null,
  errorCard: null,
};
createStyles = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  padding: nativeDefault.space.PX_16,
};
createStyles.rowDetailsContainer = createStyles;
createStyles.orbPaymentSourceDetails = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
createStyles.sectionTitle = { marginBottom: nativeDefault.space.PX_8 };
let obj1 = { marginBottom: nativeDefault.space.PX_8 };
createStyles.spinner = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
createStyles.disclaimer = { opacity: 0.5 };
const obj2 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
createStyles.errorCard = {
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
};
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx");

export const OrbCheckoutErrorCard = function OrbCheckoutErrorCard(children) {
  let obj = { style: closure_8().errorCard, children: null };
  obj = { direction: "horizontal", spacing: 8, align: "flex-start", children: null };
  const items = [
    timestampProducer(CircleErrorIcon.CircleErrorIcon, { size: "sm", color: "mobile-text-heading-primary" }),
    timestampProducer(Text_Text.Text, {
      variant: "text-sm/medium",
      color: "mobile-text-heading-primary",
      children: children.error,
    }),
  ];
  obj.children = items;
  obj.children = React5(Stack_Stack.Stack, obj);
  return timestampProducer(React4, obj);
};
export const OrbCheckoutOrderSummary = function OrbCheckoutOrderSummary(product) {
  product = product.product;
  const tmp = closure_8();
  if (null == product) {
    let obj = { style: null, children: null };
    const items = [,];
    ({ rowDetailsContainer: arr[0], spinner: arr[1] } = tmp);
    obj.style = items;
    obj.children = timestampProducer(hasOwnProperty, { size: "small" });
    let tmp5 = timestampProducer(React4, obj);
    let tmp6 = timestampProducer;
  } else {
    obj = { product, useOrbPrice: true };
    tmp5 = timestampProducer(CollectiblesShopCheckoutDetailsDefault, obj);
    tmp6 = timestampProducer;
  }
  obj = { style: tmp.topRowWrapper, children: null };
  const obj1 = {
    variant: "heading-sm/bold",
    color: "mobile-text-heading-primary",
    style: tmp.sectionTitle,
    children: null,
  };
  const intl = util.intl;
  obj1.children = intl.string(util.t.hws7bC);
  const items1 = [tmp6(Text_Text.Text, obj1), tmp5];
  obj.children = items1;
  return React5(React4, obj);
};
export const OrbCheckoutPaymentSourceDetails = function OrbCheckoutPaymentSourceDetails(orbAmount) {
  const tmp = closure_8();
  let obj = { style: tmp.rowWrapper, children: null };
  obj = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["zLch/S"]);
  const items = [timestampProducer(Text_Text.Text, obj)];
  obj = { style: null, children: null };
  const items1 = [,];
  ({ rowDetailsContainer: arr2[0], orbPaymentSourceDetails: arr2[1] } = tmp);
  obj.style = items1;
  const obj1 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.y0WGqP);
  const items2 = [
    timestampProducer(Text_Text.Text, obj1),
    timestampProducer(OrbCheckoutAmountTagDefault, { orbAmount: orbAmount.orbBalance }),
  ];
  obj.children = items2;
  items[1] = React5(React4, obj);
  obj.children = items;
  return React5(React4, obj);
};
export const OrbCheckoutLegalFinePrint = function OrbCheckoutLegalFinePrint() {
  let obj = skuId(13153);
  skuId = obj.useOrbCheckoutModalContext().skuId;
  const items = [skuId];
  const memo = noop.useMemo(() => OrbCheckoutUtils.getOrbCheckoutDisclaimerMessage(skuId), items);
  obj = { style: closure_8().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: memo };
  return closure_6(skuId(4556).Text, obj);
};
export const OrbCheckoutPurchaseButton = function OrbCheckoutPurchaseButton(onPress) {
  const tmp2 = useThemeDefault();
  let obj = OrbCheckoutModalContext;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ isRedeeming, orbProductContext } = orbCheckoutModalContext);
  const virtualCurrencyBalance = useVirtualCurrencyBalance.useVirtualCurrencyBalance();
  if (orbProductContext != null) {
    const orbPriceAmount = orbProductContext.orbPriceAmount;
  }
  let tmp3Result = tmp3(4411);
  let str = "primary";
  if (tmp3Result.isThemeDark(tmp2)) {
    str = "primary-overlay";
  }
  obj = {
    variant: str,
    size: "lg",
    text: null,
    icon: null,
    iconPosition: "start",
    loading: null,
    onPress: null,
    disabled: null,
  };
  const intl = tmp3(1114).intl;
  obj.text = intl.string(util.t["zLch/S"]);
  tmp3Result = tmp3(4411);
  let str2 = "control-primary-text-default";
  if (tmp3Result.isThemeDark(tmp2)) {
    str2 = "control-overlay-primary-text-default";
  }
  obj.icon = timestampProducer(OrbsIcon.OrbsIcon, { size: "md", color: str2 });
  obj.loading = isRedeeming;
  obj.onPress = onPress.onPress;
  if (!isRedeeming) {
    isRedeeming = null == orbPriceAmount;
  }
  if (!isRedeeming) {
    isRedeeming = null == virtualCurrencyBalance;
  }
  if (!isRedeeming) {
    isRedeeming = virtualCurrencyBalance < orbPriceAmount;
  }
  obj.disabled = isRedeeming;
  return timestampProducer(components_Button_Button.Button, obj);
};
