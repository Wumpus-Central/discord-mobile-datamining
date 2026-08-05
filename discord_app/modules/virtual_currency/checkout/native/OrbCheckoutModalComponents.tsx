// discord_app/modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx
import noop from "noop";
import get_ActivityIndicator from "OrbsIcon";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { CircleErrorIcon } from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import { OrbsIcon } from "../../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { useTheme } from "../../../../hooks/useTheme.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ProfileEffectAssetPreview } from "../../../collectibles/native/CollectiblesShopCheckoutDetails.tsx";
import { useVirtualCurrencyBalance } from "../../hooks/useVirtualCurrencyBalance.tsx";
import { OrbCheckoutAmountTag } from "../../native/OrbCheckoutAmountTag.tsx";
import { useOrbCheckoutModalContextProvider } from "../OrbCheckoutModalContext.tsx";

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
  const items = [callback(CircleErrorIcon /* CircleErrorIcon */.CircleErrorIcon, { size: "sm", color: "mobile-text-heading-primary" }), callback(Text /* Text */.Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: children.error })];
  obj[3] = items;
  obj[1] = callback2(Stack /* Stack */.Stack, obj);
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
    tmp5 = callback(ProfileEffectAssetPreview, obj);
    tmp6 = callback;
  }
  obj = { style: tmp.topRowWrapper, children: null };
  const obj1 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj1[3] = intl.string(getSystemLocale /* getSystemLocale */.t.hws7bC);
  const items1 = [tmp6(Text /* Text */.Text, obj1), tmp5];
  obj[1] = items1;
  return callback2(closure_4, obj);
};
export const OrbCheckoutPaymentSourceDetails = function OrbCheckoutPaymentSourceDetails(orbAmount) {
  const tmp = createCacheKey();
  let obj = { style: tmp.rowWrapper, children: null };
  obj = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[3] = intl.string(getSystemLocale /* getSystemLocale */.t["zLch/S"]);
  const items = [callback(Text /* Text */.Text, obj), ];
  obj = { style: items1, children: null };
  items1 = [, ];
  ({ rowDetailsContainer: arr2[0], orbPaymentSourceDetails: arr2[1] } = tmp);
  const obj1 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj1[2] = intl2.string(getSystemLocale /* getSystemLocale */.t.y0WGqP);
  const items2 = [callback(Text /* Text */.Text, obj1), callback(OrbCheckoutAmountTag, { orbAmount: orbAmount.orbBalance })];
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
  const tmp2 = useTheme();
  let obj = useOrbCheckoutModalContextProvider /* useOrbCheckoutModalContextProvider */;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ isRedeeming, orbProductContext } = orbCheckoutModalContext);
  const virtualCurrencyBalance = useVirtualCurrencyBalance /* useVirtualCurrencyBalance */.useVirtualCurrencyBalance();
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
  obj[2] = intl.string(getSystemLocale /* getSystemLocale */.t["zLch/S"]);
  tmp3Result = tmp3(4131);
  let str2 = "control-primary-text-default";
  if (tmp3Result.isThemeDark(tmp2)) {
    str2 = "control-overlay-primary-text-default";
  }
  obj[3] = closure_6(OrbsIcon /* OrbsIcon */.OrbsIcon, { size: "md", color: str2 });
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
  return closure_6(Button /* Button */.Button, obj);
};