// discord_app/modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx
import context from "context";
import isPremiumGiftingSupported from "isPremiumGiftingSupported";
import dispatcher from "dispatcher";
import { View } from "useSyncGiftOptionsToOrder";
import map from "map";
import { useNativeCheckoutStore } from "context";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import { PaymentGateways } from "sum";
import jsxProd from "module_4624";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { NativeCheckoutStoreProvider } from "../../checkout/native/stores/NativeCheckoutStoreProvider.tsx";
import { useCollectiblesExternalGatewayFacet } from "hooks/useCollectiblesExternalGatewayFacet.android.tsx";

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let unpackModuleId;
let require = arg1;
function CollectiblesShopGiftPurchaseSection(disabled) {
  let c4;
  let nextTier;
  const product = disabled.product;
  const require = product;
  const giftOptions = disabled.giftOptions;
  const baseAnalyticsFields = disabled.baseAnalyticsFields;
  const giftingOrigin = disabled.giftingOrigin;
  let callback;
  let first;
  let closure_6;
  let awaitSync;
  let useNativeCheckoutStore;
  const tmp3 = callback3(giftOptions(baseAnalyticsFields[12])().insets.bottom);
  const GiftingBadgeExperiment = require(baseAnalyticsFields[13]).GiftingBadgeExperiment;
  let obj = require(baseAnalyticsFields[14]);
  const items = [awaitSync];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let getNextTier;
    let getRemainingToNextTier;
    let getSingleRequirementProgress;
    const obj = { nextTier: getNextTier(product(baseAnalyticsFields[15]).BadgeId.GIFTING), giftsToNextTier: getRemainingToNextTier(product(baseAnalyticsFields[15]).BadgeId.GIFTING), badgeProgress: null };
    ({ getNextTier, getRemainingToNextTier, getSingleRequirementProgress } = awaitSync);
    const singleRequirementProgress = getSingleRequirementProgress(product(baseAnalyticsFields[15]).BadgeId.GIFTING);
    let current;
    if (singleRequirementProgress != null) {
      current = singleRequirementProgress.current;
    }
    obj[2] = current;
    return obj;
  });
  ({ nextTier, badgeProgress: c4 } = stateFromStoresObject);
  let obj1 = first;
  const tmp7 = callback(first.useState(constants.NOT_STARTED), 2);
  first = tmp7[0];
  closure_6 = tmp7[1];
  const tmp9 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  awaitSync = giftOptions(baseAnalyticsFields[17])(tmp9, giftOptions).awaitSync;
  obj = { product, analyticsLocations: giftOptions(baseAnalyticsFields[16])().analyticsLocations, orderId: null, analyticsData: null, onPurchaseComplete: null, onPurchaseError: null, onPurchasePending: null, giftParams: null };
  let id;
  if (tmp9 != null) {
    id = tmp9.id;
  }
  obj[2] = id;
  obj[3] = baseAnalyticsFields;
  obj[4] = function onPurchaseComplete() {
    let tmp2 = null == giftOptions.recipient_id;
    if (!tmp2) {
      tmp2 = giftingOrigin !== outer1_11.USER_PROFILE_WISHLIST && tmp3 !== outer1_11.DM_CHANNEL_WISHLIST;
      const tmp4 = giftingOrigin !== outer1_11.USER_PROFILE_WISHLIST && tmp3 !== outer1_11.DM_CHANNEL_WISHLIST;
    }
    if (!tmp2) {
      let obj = giftOptions(baseAnalyticsFields[19]);
      obj = { type: "WISHLIST_GIFT_SENT", skuId: null, recipientId: null };
      obj[1] = product.skuId;
      obj[2] = tmp.recipient_id;
      obj.dispatch(obj);
    }
    callback(outer1_17.SUCCEEDED);
    let arr = giftOptions(baseAnalyticsFields[20]);
    arr = arr.pop();
    obj = {
      importer() {
        return outer1_0(outer1_2[23])(outer1_2[22], outer1_2.paths).then((arg0) => {
          let closure_0 = arg0.default;
          return (arg0) => {
            let STANDARD_BOX = outer1_1.gift_style;
            if (STANDARD_BOX == null) {
              STANDARD_BOX = outer2_12.STANDARD_BOX;
            }
            const merged = Object.assign(arg0);
            return outer2_14(closure_0, { giftStyle: STANDARD_BOX, giftBadgeProgress: outer1_4 });
          };
        });
      }
    };
    giftOptions(baseAnalyticsFields[21]).openLazy(obj);
    const obj3 = giftOptions(baseAnalyticsFields[21]);
    tmp = giftOptions;
    if (obj5.isIOS()) {
      giftOptions(baseAnalyticsFields[25]).track(outer1_9.PAYMENT_FLOW_SUCCEEDED, baseAnalyticsFields);
      const obj6 = giftOptions(baseAnalyticsFields[25]);
    }
  };
  obj[5] = function onPurchaseError() {
    callback(outer1_17.FAILED);
    giftOptions(baseAnalyticsFields[25]).track(outer1_9.PAYMENT_FLOW_FAILED, baseAnalyticsFields);
  };
  obj[6] = function onPurchasePending() {

  };
  obj[7] = { isGift: true, options: giftOptions };
  useNativeCheckoutStore = giftOptions(baseAnalyticsFields[18])(obj);
  const effect = obj1.useEffect(() => () => {
    if (dispatcher !== outer1_17.SUCCEEDED) {
      outer1_1(outer1_2[25]).track(outer1_9.PAYMENT_FLOW_CANCELED, closure_2);
      const obj = outer1_1(outer1_2[25]);
    }
  }, []);
  obj = { style: tmp3.container, children: null };
  let tmp16Result = null;
  if (GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftPurchaseSection" }).enabled) {
    tmp16Result = null;
    if (null != nextTier) {
      obj1 = { giftsToNextTier: null, nextTierName: null, nextTierIcon: null };
      obj1[0] = stateFromStoresObject.giftsToNextTier;
      let str = nextTier.name;
      if (str == null) {
        str = "";
      }
      obj1[1] = str;
      obj1[2] = nextTier.simple_icon_url;
      tmp16Result = callback2(giftOptions(tmp2[26]), obj1);
      const tmp16 = callback2;
      const tmpResult = giftOptions(tmp2[26]);
    }
  }
  const items1 = [tmp16Result, , ];
  const obj2 = { variant: "text-xs/normal", style: tmp3.disclaimer, children: null };
  const intl = tmp4(tmp2[28]).intl;
  let obj3 = { buyButtonLabel: null, paidServiceTermURL: null, virtualGoodsURL: null };
  const intl2 = tmp4(tmp2[28]).intl;
  obj3[0] = intl2.string(require(baseAnalyticsFields[28]).t.ouo4FK);
  ({ PAID_TERMS: obj7[1], PAID_TERMS_VIRTUAL_GOODS: obj7[2] } = closure_10);
  obj2[2] = intl.format(require(baseAnalyticsFields[28]).t.rsEdd2, obj3);
  items1[1] = callback2(require(baseAnalyticsFields[27]).Text, obj2);
  const obj4 = { disabled: disabled.isPurchaseDisabled, loading: first === constants.PURCHASING, variant: "active", text: null, onPress: null };
  const intl3 = tmp4(tmp2[28]).intl;
  obj4[3] = intl3.string(require(baseAnalyticsFields[28]).t.ouo4FK);
  obj4[4] = giftingOrigin(function*() {
    let closure_0 = tmp3;
    outer1_6(outer1_17.PURCHASING);
    yield outer1_7();
    if (!arg1) {
      outer1_6(outer1_17.FAILED);
      const obj1 = v0(table[25]);
      obj1.track(outer1_9.PAYMENT_FLOW_FAILED, table);
    }
    table = 1;
    yield outer1_8();
    if (2 === tmp7) {
      table = 0;
      callback(outer1_17.FAILED);
      let c3 = 3;
    } else if (arg0 === 1) {
      c3 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      table = 0;
    }
    table = 0;
    return arg1;
  });
  items1[2] = callback2(require(baseAnalyticsFields[29]).Button, obj4);
  obj[1] = items1;
  return closure_15(closure_6, obj);
}
({ AnalyticEvents: c9, MarketingURLs: c10 } = ME);
({ GiftingOrigin: unpackModuleId, PremiumGiftStyles: closure_12 } = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, disclaimer: null };
  obj = { paddingBottom: Themes.space.PX_12 + arg0, paddingTop: Themes.space.PX_12, paddingHorizontal: Themes.space.PX_16, gap: Themes.space.PX_8, backgroundColor: Themes.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(Themes.shadows.SHADOW_TOP_HIGH);
  obj[0] = obj;
  obj[1] = { includeFontPadding: true };
  return obj;
});
let closure_17 = { NOT_STARTED: "not_started", PURCHASING: "purchasing", SUCCEEDED: "succeeded", FAILED: "failed" };
let result = require("noop").fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx");

export default function WrappedCollectiblesShopGiftPurchaseSection(arg0) {
  let baseAnalyticsFields;
  let giftOptions;
  let giftingOrigin;
  let isPurchaseDisabled;
  let onGiftModalDismiss;
  let product;
  ({ product, onGiftModalDismiss } = arg0);
  ({ isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin } = arg0);
  const GiftACOMOrderExperiment = onGiftModalDismiss(7333).GiftACOMOrderExperiment;
  let obj = onGiftModalDismiss(9354);
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled({ location: "WrappedCollectiblesShopGiftPurchaseSection" });
  if (obj2.isIOS()) {
    let GOOGLE = tmp4.APPLE_ADVANCED_COMMERCE;
    let tmp5 = tmp4;
  } else {
    GOOGLE = tmp4.GOOGLE;
    tmp5 = tmp4;
  }
  let tmp6 = GOOGLE === tmp5.APPLE_ADVANCED_COMMERCE && GiftACOMOrderExperiment.useConfig({ location: "WrappedCollectiblesShopGiftPurchaseSection" }).enabled;
  if (!tmp6) {
    let result = GOOGLE === tmp5.GOOGLE;
    if (result) {
      result = tmp(3943).isGooglePlayBillingSupported();
      const tmpResult = tmp(3943);
    }
    if (result) {
      result = androidShopOrdersEnabled;
    }
    tmp6 = result;
  }
  const items = [onGiftModalDismiss];
  obj2 = onGiftModalDismiss(500);
  const callback = React.useCallback(() => {
    onGiftModalDismiss(outer1_2[34]).closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = { paymentGateway: GOOGLE, orderRequired: tmp6, skuIds: items1, isGift: true, activeSubscription: null, initialExternalGatewayFacet: useCollectiblesExternalGatewayFacet(product), onOrderRetryCancellation: callback, children: null };
  items1 = [product.skuId];
  const tmp8 = useCollectiblesExternalGatewayFacet(product);
  obj[7] = callback2(CollectiblesShopGiftPurchaseSection, { product, isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin });
  obj[2] = callback2(NativeCheckoutStoreProvider, obj, product.skuId);
  return callback2(onGiftModalDismiss(9489).NativePaymentContextProvider, obj);
};