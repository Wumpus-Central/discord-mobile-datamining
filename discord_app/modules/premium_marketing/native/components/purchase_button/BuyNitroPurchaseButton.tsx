import _slicedToArray from "_slicedToArray";
import BuyNitroPurchaseButtonLegalDisclaimer from "BuyNitroPurchaseButtonLegalDisclaimer";
import { View } from "module_4624";
import updateProduct from "updateProduct";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { width: "100%" }, buttonStack: { width: "100%" }, hiddenFlow: { position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButton.tsx");

export default function BuyNitroPurchaseButton(sourceAnalyticsLocations) {
  let _location;
  let applicationId;
  let c5;
  let onHostSheetClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planSelection;
  let tmp19;
  ({ planSelection, location: _location } = sourceAnalyticsLocations);
  ({ onPaymentSuccess, onPaymentDismiss } = sourceAnalyticsLocations);
  if (_location === undefined) {
    _location = priceStringByProductId(applyOrderPriceOverride[7]).PREMIUM_MARKETING_FOOTER;
  }
  let prop = sourceAnalyticsLocations.sourceAnalyticsLocations;
  let selection;
  priceStringByProductId = undefined;
  applyOrderPriceOverride = undefined;
  let first;
  let React;
  c5 = undefined;
  let updateProduct;
  let callback;
  ({ applicationId, onHostSheetClose } = sourceAnalyticsLocations);
  const tmp3 = callback2();
  selection = planSelection.selection;
  priceStringByProductId = planSelection.priceStringByProductId;
  applyOrderPriceOverride = planSelection.applyOrderPriceOverride;
  let obj = selection(applyOrderPriceOverride[8]);
  const result = obj.isMobileWebRedirectCheckoutEnabled();
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
  if (premiumTier === callback.TIER_0) {
    str = "experimental_premium-basic";
  }
  tmp4Result = tmp4(tmp5[11]);
  const buyNitroButtonCrossfade = tmp4Result.useBuyNitroButtonCrossfade(str, stringResult);
  const outgoing = buyNitroButtonCrossfade.outgoing;
  let obj4 = React;
  const tmp14 = priceStringByProductId(applyOrderPriceOverride[12])(() => selection(applyOrderPriceOverride[13]).getNewAnalyticsLoadId());
  const tmp16 = first(React.useState(null), 2);
  first = tmp16[0];
  React = tmp16[1];
  const ref = React.useRef(false);
  [tmp19, c5] = first(React.useState(null), 2);
  updateProduct = React.useRef(first);
  const items = [first];
  const effect = React.useEffect(() => {
    updateProduct.current = first;
  }, items);
  const effect1 = React.useEffect(() => () => {
    if (null != ref.current) {
      const BuyNitroPurchaseLock = outer1_0(outer1_2[14]).BuyNitroPurchaseLock;
      BuyNitroPurchaseLock.end();
    }
  }, []);
  const tmp18 = first(React.useState(null), 2);
  const items1 = [updateProduct];
  let stateFromStores = null != first;
  if (!stateFromStores) {
    stateFromStores = tmp4Result1.useStateFromStores(items1, () => busy.isBusy());
  }
  tmp4Result1 = selection(applyOrderPriceOverride[15]);
  let isBuyNitroPurchaseBlocked = stateFromStores;
  if (!stateFromStores) {
    isBuyNitroPurchaseBlocked = tmp4Result2.useIsBuyNitroPurchaseBlocked();
  }
  if (!isBuyNitroPurchaseBlocked) {
    let tmp24 = !result;
    if (!result) {
      tmp24 = null == selection.priceString;
    }
    isBuyNitroPurchaseBlocked = tmp24;
  }
  tmp4Result2 = selection(applyOrderPriceOverride[14]);
  if (prop == null) {
    prop = [];
  }
  callback = obj4.useCallback(() => {
    callback(null);
    _undefined(null);
    const BuyNitroPurchaseLock = selection(applyOrderPriceOverride[14]).BuyNitroPurchaseLock;
    BuyNitroPurchaseLock.end();
  }, []);
  const items2 = [selection.item, applyOrderPriceOverride, callback];
  const items3 = [selection.item, priceStringByProductId];
  const callback1 = obj4.useCallback((arg0) => {
    if (null != selection.item) {
      applyOrderPriceOverride(tmp.item.productId, arg0);
    }
    let obj = priceStringByProductId(applyOrderPriceOverride[17]);
    obj = { title: null, body: null, hideActionSheet: false };
    const intl = selection(applyOrderPriceOverride[9]).intl;
    obj[0] = intl.string(selection(applyOrderPriceOverride[9]).t["2DyOxw"]);
    const intl2 = selection(applyOrderPriceOverride[9]).intl;
    obj[1] = intl2.string(selection(applyOrderPriceOverride[9]).t["Xr94E+"]);
    obj.show(obj);
    callback();
  }, items2);
  obj = { style: tmp3.container, children: null };
  const obj1 = { style: tmp3.buttonStack, children: null };
  callback2 = obj4.useCallback(() => {
    let beginResult = null != selection.item;
    if (beginResult) {
      const BuyNitroPurchaseLock = selection(applyOrderPriceOverride[14]).BuyNitroPurchaseLock;
      beginResult = BuyNitroPurchaseLock.begin();
    }
    if (beginResult) {
      let value = priceStringByProductId.get(tmp.item.productId);
      if (value == null) {
        value = null;
      }
      c5(value);
      callback(tmp.item);
      const tmp5 = c5;
    }
  }, items3);
  const items4 = [callback(selection(applyOrderPriceOverride[18]).Button, { text: stringResult, variant: str, size: "lg", grow: true, onPress: callback2, loading: stateFromStores, disabled: isBuyNitroPurchaseBlocked }), ];
  let tmp31Result = null != outgoing;
  if (tmp31Result) {
    const obj2 = { snapshot: null, onDone: null };
    obj2[0] = outgoing.snapshot;
    obj2[1] = buyNitroButtonCrossfade.onOutgoingDone;
    tmp31Result = tmp31(tmp13(tmp5[11]), obj2, outgoing.key);
  }
  items4[1] = tmp31Result;
  obj1[1] = items4;
  const items5 = [closure_9(c5, obj1), , ];
  tmp31Result = !result;
  if (!result) {
    const obj3 = { item: null, ctaText: null, isTrial: null, isDiscounted: null };
    obj3[0] = selection.item;
    obj3[1] = stringResult;
    ({ isTrial: obj11[2], isDiscounted: obj11[3] } = selection);
    tmp31Result = tmp31(tmp13(tmp5[19]), obj3);
  }
  items5[1] = tmp31Result;
  let tmp31Result1 = null != first;
  if (tmp31Result1) {
    obj4 = { style: null, pointerEvents: "none", children: null };
    obj4[0] = tmp3.hiddenFlow;
    const obj5 = { item: null, analyticsLocations: null, analyticsLoadId: null, hasEmittedPaymentFlowStartedRef: null, applicationId: null, expectedPriceString: null, onExit: null, onOrderPriceMismatch: null, onHostSheetClose: null, onPaymentSuccess: null, onPaymentDismiss: null };
    obj5[0] = first;
    obj5[1] = tmp13Result(prop, _location, tmp13(tmp5[7]).PREMIUM_PAYMENT_ACTION_SHEET).analyticsLocations;
    obj5[2] = tmp14;
    obj5[3] = ref;
    obj5[4] = applicationId;
    obj5[5] = tmp19;
    obj5[6] = callback;
    obj5[7] = callback1;
    obj5[8] = onHostSheetClose;
    obj5[9] = onPaymentSuccess;
    obj5[10] = onPaymentDismiss;
    obj4[2] = tmp31(tmp13(tmp5[20]), obj5);
    tmp31Result1 = tmp31(tmp30, obj4);
  }
  items5[2] = tmp31Result1;
  obj[1] = items5;
  return closure_9(c5, obj);
};