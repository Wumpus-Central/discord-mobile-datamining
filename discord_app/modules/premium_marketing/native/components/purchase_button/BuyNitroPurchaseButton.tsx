// === Module 13387: BuyNitroPurchaseButton ===

// Module 13387 (BuyNitroPurchaseButton)
import util from "util" /* 1114 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import useBuyNitroPurchaseLock from "useBuyNitroPurchaseLock" /* 13356 */;
import useBuyNitroTrialAndPriceOverrides from "useBuyNitroTrialAndPriceOverrides" /* 13357 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7237 */;

require = fn;
const View = fn(17).View;
let PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { width: "100%" }, buttonStack: { width: "100%" }, hiddenFlow: { position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButton.tsx");

export default function BuyNitroPurchaseButton(sourceAnalyticsLocations) {
  ({ planSelection, location: _location } = sourceAnalyticsLocations);
  ({ onPaymentSuccess, onPaymentDismiss } = sourceAnalyticsLocations);
  if (_location === undefined) {
    _location = priceStringByProductId(trialId[7]).PREMIUM_MARKETING_FOOTER;
  }
  let prop = sourceAnalyticsLocations.sourceAnalyticsLocations;
  let item;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  PremiumTypes = undefined;
  let onExit;
  ({ applicationId, onHostSheetClose } = sourceAnalyticsLocations);
  const tmp3 = closure_10();
  const selection = planSelection.selection;
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
    obj = { rate: selection.priceString };
    stringResult = intl2.formatToPlainString(tmp4(tmp5[9]).t.i4T8vz, obj);
  } else {
    let intl = tmp4(tmp5[9]).intl;
    stringResult = intl.string(tmp4(tmp5[9]).t.uuzaAK);
  }
  item = selection.item;
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
  let obj4 = noop;
  const tmp14 = priceStringByProductId(trialId[12])(() => selection(trialId[13]).getNewAnalyticsLoadId());
  const tmp16 = item(noop.useState(null), 2);
  item = tmp16[0];
  noop = tmp16[1];
  const ref = noop.useRef(false);
  [tmp19, c5] = item(noop.useState(null), 2);
  const tmp18 = item(noop.useState(null), 2);
  [tmp21, c6] = item(noop.useState(undefined), 2);
  PremiumTypes = noop.useRef(item);
  const items = [item];
  const effect = noop.useEffect(() => {
    closure_7.current = current;
  }, items);
  const effect1 = noop.useEffect(() => () => {
    if (null != ref.current) {
      const BuyNitroPurchaseLock = selection(trialId[14]).BuyNitroPurchaseLock;
      BuyNitroPurchaseLock.end();
    }
  }, []);
  const tmp20 = item(noop.useState(undefined), 2);
  const items1 = [c6];
  let stateFromStores = null != item;
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
  onExit = obj4.useCallback(() => {
    closure_4(null);
    _undefined(null);
    _undefined2(undefined);
    const BuyNitroPurchaseLock = useBuyNitroPurchaseLock.BuyNitroPurchaseLock;
    BuyNitroPurchaseLock.end();
  }, []);
  const items2 = [item, onExit];
  const items3 = [item, onExit];
  const callback1 = obj4.useCallback((arg0) => {
    if (null != first) {
      let obj = useBuyNitroTrialAndPriceOverrides;
      const result = obj.applyBuyNitroOrderPriceOverride(tmp.productId, arg0);
    }
    obj = { title: null, body: null, hideActionSheet: false };
    const intl = util.intl;
    obj.title = intl.string(util.t["2DyOxw"]);
    const intl2 = util.intl;
    obj.body = intl2.string(util.t["Xr94E+"]);
    actions_AlertActionCreatorsDefault.show(obj);
    callback();
  }, items2);
  const items4 = [, , , ];
  ({ item: arr6[0], isTrial: arr6[1] } = selection);
  items4[2] = trialId;
  items4[3] = priceStringByProductId;
  const callback2 = obj4.useCallback(() => {
    let premiumTier;
    if (first != null) {
      premiumTier = first.premiumTier;
    }
    if (null != premiumTier) {
      let obj = useBuyNitroTrialAndPriceOverrides;
      const result = obj.markBuyNitroTrialUnavailable(first.premiumTier);
    }
    obj = { title: null, body: null, hideActionSheet: false };
    const intl = util.intl;
    obj.title = intl.string(util.t.Ehhdym);
    const intl2 = util.intl;
    obj.body = intl2.string(util.t.EaHwu3);
    actions_AlertActionCreatorsDefault.show(obj);
    callback();
  }, items3);
  obj = { style: tmp3.container, children: null };
  const obj1 = { style: tmp3.buttonStack, children: null };
  const callback3 = obj4.useCallback(() => {
    let beginResult = null != selection.item;
    if (beginResult) {
      const BuyNitroPurchaseLock = useBuyNitroPurchaseLock.BuyNitroPurchaseLock;
      beginResult = BuyNitroPurchaseLock.begin();
    }
    if (beginResult) {
      value = priceStringByProductId.get(selection.item.productId);
      if (value == null) {
        value = null;
      }
      _undefined(value);
      let tmp10;
      if (selection.isTrial) {
        tmp10 = trialId;
      }
      _undefined2(tmp10);
      closure_4(selection.item);
    }
  }, items4);
  const items5 = [onExit(selection(trialId[19]).Button, { text: stringResult, variant: str, size: "lg", grow: true, onPress: callback3, loading: stateFromStores, disabled: isBuyNitroPurchaseBlocked }), ];
  let tmp34Result = null != outgoing;
  if (tmp34Result) {
    let obj2 = { snapshot: outgoing.snapshot, onDone: buyNitroButtonCrossfade.onOutgoingDone };
    tmp34Result = tmp34(tmp13(tmp5[11]), obj2, outgoing.key);
  }
  items5[1] = tmp34Result;
  obj1.children = items5;
  const items6 = [closure_9(c5, obj1), , ];
  tmp34Result = !result;
  if (!result) {
    const obj3 = { item: selection.item, ctaText: stringResult, isTrial: null, isDiscounted: null };
    ({ isTrial: obj11.isTrial, isDiscounted: obj11.isDiscounted } = selection);
    tmp34Result = tmp34(tmp13(tmp5[20]), obj3);
  }
  items6[1] = tmp34Result;
  let tmp34Result1 = null != item;
  if (tmp34Result1) {
    obj4 = { style: tmp3.hiddenFlow, pointerEvents: "none", children: null };
    const obj5 = { item, analyticsLocations: tmp13Result(prop, _location, tmp13(tmp5[7]).PREMIUM_PAYMENT_ACTION_SHEET).analyticsLocations, analyticsLoadId: tmp14, hasEmittedPaymentFlowStartedRef: ref, applicationId, expectedPriceString: tmp19, stagedTrialId: tmp21, onExit, onOrderPriceMismatch: callback1, onOrderTrialUnavailable: callback2, onHostSheetClose, onPaymentSuccess, onPaymentDismiss };
    obj4.children = tmp34(tmp13(tmp5[21]), obj5);
    tmp34Result1 = tmp34(tmp33, obj4);
  }
  items6[2] = tmp34Result1;
  obj.children = items6;
  return closure_9(c5, obj);
};