// === Module 13282: BuyNitroPurchaseButton ===

// Module 13282 (BuyNitroPurchaseButton)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "updateProduct" /* 6093 */;
import { PremiumTypes } from "GuildFeatures" /* 1923 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { width: "100%" }, buttonStack: { width: "100%" }, hiddenFlow: { position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0 } });
let result = require("set").fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButton.tsx");

export default function BuyNitroPurchaseButton(sourceAnalyticsLocations) {
  ({ planSelection, location: _location } = sourceAnalyticsLocations);
  ({ onPaymentSuccess, onPaymentDismiss } = sourceAnalyticsLocations);
  if (_location === undefined) {
    _location = priceStringByProductId(trialId[7]).PREMIUM_MARKETING_FOOTER;
  }
  let prop = sourceAnalyticsLocations.sourceAnalyticsLocations;
  let selection;
  priceStringByProductId = undefined;
  trialId = undefined;
  let first;
  let React;
  c5 = undefined;
  c6 = undefined;
  PremiumTypes = undefined;
  let callback;
  ({ applicationId, onHostSheetClose } = sourceAnalyticsLocations);
  const tmp3 = callback();
  selection = planSelection.selection;
  priceStringByProductId = planSelection.priceStringByProductId;
  trialId = planSelection.trialId;
  let obj = selection(trialId[8]);
  let result = obj.isMobileWebRedirectCheckoutEnabled();
  if (result) {
    const intl4 = tmp4(tmp5[9]).intl;
    let stringResult = intl4.string(tmp4(tmp5[9]).t.rylrdY);
  } else if (selection.isTrial) {
    const intl3 = tmp4(tmp5[9]).intl;
    let tmp4Result = tmp4(tmp5[10]);
    const t = tmp4(tmp5[9]).t;
    intl3.string(tmp4Result.isAndroid() ? t.rKD72m : t.bboTul);
    const isAndroidResult = tmp4Result.isAndroid();
  } else if (null != selection.priceString) {
    let intl2 = tmp4(tmp5[9]).intl;
    obj = { rate: null };
    obj[0] = selection.priceString;
    stringResult = intl2.formatToPlainString(tmp4(tmp5[9]).t.i4T8vz, obj);
  } else {
    let intl = tmp4(tmp5[9]).intl;
    stringResult = intl.string(tmp4(tmp5[9]).t.uuzaAK);
  }
  const item = selection.item;
  let premiumTier;
  if (item != null) {
    premiumTier = item.premiumTier;
  }
  let str = "experimental_premium-primary";
  if (premiumTier === PremiumTypes.TIER_0) {
    str = "experimental_premium-basic";
  }
  tmp4Result = tmp4(tmp5[11]);
  const buyNitroButtonCrossfade = tmp4Result.useBuyNitroButtonCrossfade(str, stringResult);
  const outgoing = buyNitroButtonCrossfade.outgoing;
  let obj4 = React;
  const tmp14 = priceStringByProductId(trialId[12])(() => selection(trialId[13]).getNewAnalyticsLoadId());
  const tmp16 = first(React.useState(null), 2);
  first = tmp16[0];
  React = tmp16[1];
  const ref = React.useRef(false);
  [tmp19, c5] = first(React.useState(null), 2);
  const tmp18 = first(React.useState(null), 2);
  [tmp21, c6] = first(React.useState(undefined), 2);
  PremiumTypes = React.useRef(first);
  const items = [first];
  const effect = React.useEffect(() => {
    closure_7.current = first;
  }, items);
  const effect1 = React.useEffect(() => () => {
    if (null != ref.current) {
      const BuyNitroPurchaseLock = closure_1_0(closure_1_2[14]).BuyNitroPurchaseLock;
      BuyNitroPurchaseLock.end();
    }
  }, []);
  const tmp20 = first(React.useState(undefined), 2);
  const items1 = [c6];
  let stateFromStores = null != first;
  if (!stateFromStores) {
    stateFromStores = tmp4Result1.useStateFromStores(items1, () => _undefined2.isBusy());
  }
  tmp4Result1 = selection(trialId[15]);
  let isBuyNitroPurchaseBlocked = stateFromStores;
  if (!stateFromStores) {
    isBuyNitroPurchaseBlocked = tmp4Result2.useIsBuyNitroPurchaseBlocked();
  }
  if (!isBuyNitroPurchaseBlocked) {
    let tmp26 = !result;
    if (!result) {
      tmp26 = null == selection.priceString;
    }
    isBuyNitroPurchaseBlocked = tmp26;
  }
  tmp4Result2 = selection(trialId[14]);
  if (prop == null) {
    prop = [];
  }
  callback = obj4.useCallback(() => {
    callback(null);
    _undefined(null);
    _undefined2(undefined);
    const BuyNitroPurchaseLock = selection(trialId[14]).BuyNitroPurchaseLock;
    BuyNitroPurchaseLock.end();
  }, []);
  const items2 = [first, callback];
  const items3 = [first, callback];
  const callback1 = obj4.useCallback((arg0) => {
    if (null != first) {
      let obj = selection(trialId[17]);
      const result = obj.applyBuyNitroOrderPriceOverride(tmp.productId, arg0);
    }
    obj = { title: null, body: null, hideActionSheet: false };
    const intl = selection(trialId[9]).intl;
    obj[0] = intl.string(selection(trialId[9]).t["2DyOxw"]);
    const intl2 = selection(trialId[9]).intl;
    obj[1] = intl2.string(selection(trialId[9]).t["Xr94E+"]);
    priceStringByProductId(trialId[18]).show(obj);
    callback();
  }, items2);
  const items4 = [, , , ];
  ({ item: arr6[0], isTrial: arr6[1] } = selection);
  items4[2] = trialId;
  items4[3] = priceStringByProductId;
  const callback2 = obj4.useCallback(() => {
    let premiumTier;
    if (first != null) {
      premiumTier = tmp.premiumTier;
    }
    if (null != premiumTier) {
      let obj = selection(trialId[17]);
      const result = obj.markBuyNitroTrialUnavailable(tmp.premiumTier);
    }
    obj = { title: null, body: null, hideActionSheet: false };
    const intl = selection(trialId[9]).intl;
    obj[0] = intl.string(selection(trialId[9]).t.Ehhdym);
    const intl2 = selection(trialId[9]).intl;
    obj[1] = intl2.string(selection(trialId[9]).t.EaHwu3);
    priceStringByProductId(trialId[18]).show(obj);
    callback();
  }, items3);
  obj = { style: tmp3.container, children: null };
  obj1 = { style: tmp3.buttonStack, children: null };
  const callback3 = obj4.useCallback(() => {
    let beginResult = null != selection.item;
    if (beginResult) {
      const BuyNitroPurchaseLock = selection(trialId[14]).BuyNitroPurchaseLock;
      beginResult = BuyNitroPurchaseLock.begin();
    }
    if (beginResult) {
      let value = priceStringByProductId.get(tmp.item.productId);
      if (value == null) {
        value = null;
      }
      c5(value);
      let tmp10;
      if (tmp.isTrial) {
        tmp10 = trialId;
      }
      c6(tmp10);
      callback(tmp.item);
      const tmp5 = c5;
      const tmp9 = c6;
    }
  }, items4);
  const items5 = [callback(selection(trialId[19]).Button, { text: stringResult, variant: str, size: "lg", grow: true, onPress: callback3, loading: stateFromStores, disabled: isBuyNitroPurchaseBlocked }), ];
  let tmp34Result = null != outgoing;
  if (tmp34Result) {
    const obj2 = { snapshot: null, onDone: null };
    obj2[0] = outgoing.snapshot;
    obj2[1] = buyNitroButtonCrossfade.onOutgoingDone;
    tmp34Result = tmp34(tmp13(tmp5[11]), obj2, outgoing.key);
  }
  items5[1] = tmp34Result;
  obj1[1] = items5;
  const items6 = [closure_9(c5, obj1), , ];
  tmp34Result = !result;
  if (!result) {
    const obj3 = { item: null, ctaText: null, isTrial: null, isDiscounted: null };
    obj3[0] = selection.item;
    obj3[1] = stringResult;
    ({ isTrial: obj11[2], isDiscounted: obj11[3] } = selection);
    tmp34Result = tmp34(tmp13(tmp5[20]), obj3);
  }
  items6[1] = tmp34Result;
  let tmp34Result1 = null != first;
  if (tmp34Result1) {
    obj4 = { style: null, pointerEvents: "none", children: null };
    obj4[0] = tmp3.hiddenFlow;
    const obj5 = { item: null, analyticsLocations: null, analyticsLoadId: null, hasEmittedPaymentFlowStartedRef: null, applicationId: null, expectedPriceString: null, stagedTrialId: null, onExit: null, onOrderPriceMismatch: null, onOrderTrialUnavailable: null, onHostSheetClose: null, onPaymentSuccess: null, onPaymentDismiss: null };
    obj5[0] = first;
    obj5[1] = tmp13Result(prop, _location, tmp13(tmp5[7]).PREMIUM_PAYMENT_ACTION_SHEET).analyticsLocations;
    obj5[2] = tmp14;
    obj5[3] = ref;
    obj5[4] = applicationId;
    obj5[5] = tmp19;
    obj5[6] = tmp21;
    obj5[7] = callback;
    obj5[8] = callback1;
    obj5[9] = callback2;
    obj5[10] = onHostSheetClose;
    obj5[11] = onPaymentSuccess;
    obj5[12] = onPaymentDismiss;
    obj4[2] = tmp34(tmp13(tmp5[21]), obj5);
    tmp34Result1 = tmp34(tmp33, obj4);
  }
  items6[2] = tmp34Result1;
  obj[1] = items6;
  return closure_9(c5, obj);
};