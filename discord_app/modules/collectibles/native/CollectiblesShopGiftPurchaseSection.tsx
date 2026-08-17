// discord_app/modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import NativeCheckoutStoreProviderDefault from "../../checkout/native/stores/NativeCheckoutStoreProvider.tsx";
import useCollectiblesExternalGatewayFacetDefault from "hooks/useCollectiblesExternalGatewayFacet.android.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../badges/BadgeDirectoryStore.tsx";
import { useNativeCheckoutStore } from "../../checkout/native/NativeCheckoutStore.tsx";
import ME from "../../../Constants.tsx";
import GuildFeatures from "../../premium/PremiumConstants.tsx";
import { PaymentGateways } from "../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

let require = arg1;
function CollectiblesShopGiftPurchaseSection(disabled) {
  const product = disabled.product;
  require = product;
  const giftOptions = disabled.giftOptions;
  const baseAnalyticsFields = disabled.baseAnalyticsFields;
  const giftingOrigin = disabled.giftingOrigin;
  let callback;
  let first;
  closure_6 = undefined;
  let awaitSync;
  useNativeCheckoutStore = undefined;
  const tmp3 = callback3(giftOptions(baseAnalyticsFields[12])().insets.bottom);
  const GiftingBadgeExperiment = require(baseAnalyticsFields[13]).GiftingBadgeExperiment;
  let obj = require(baseAnalyticsFields[14]);
  const items = [awaitSync];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
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
  obj1 = first;
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
      tmp2 = giftingOrigin !== closure_1_11.USER_PROFILE_WISHLIST && tmp3 !== closure_1_11.DM_CHANNEL_WISHLIST;
      const tmp4 = giftingOrigin !== closure_1_11.USER_PROFILE_WISHLIST && tmp3 !== closure_1_11.DM_CHANNEL_WISHLIST;
    }
    if (!tmp2) {
      let obj = giftOptions(baseAnalyticsFields[19]);
      obj = { type: "WISHLIST_GIFT_SENT", skuId: null, recipientId: null };
      obj[1] = product.skuId;
      obj[2] = tmp.recipient_id;
      obj.dispatch(obj);
    }
    callback(closure_1_17.SUCCEEDED);
    let arr = giftOptions(baseAnalyticsFields[20]);
    arr = arr.pop();
    obj = {
      importer() {
        return closure_1_0(closure_1_2[23])(closure_1_2[22], closure_1_2.paths).then((arg0) => {
          closure_0 = arg0.default;
          return (arg0) => {
            let STANDARD_BOX = closure_1_1.gift_style;
            if (STANDARD_BOX == null) {
              STANDARD_BOX = closure_2_12.STANDARD_BOX;
            }
            const merged = Object.assign(arg0);
            return closure_2_14(closure_0, { giftStyle: STANDARD_BOX, giftBadgeProgress: closure_1_4 });
          };
        });
      }
    };
    giftOptions(baseAnalyticsFields[21]).openLazy(obj);
    const obj3 = giftOptions(baseAnalyticsFields[21]);
    tmp = giftOptions;
    if (obj5.isIOS()) {
      giftOptions(baseAnalyticsFields[25]).track(closure_1_9.PAYMENT_FLOW_SUCCEEDED, baseAnalyticsFields);
      const obj6 = giftOptions(baseAnalyticsFields[25]);
    }
  };
  obj[5] = function onPurchaseError() {
    callback(closure_1_17.FAILED);
    giftOptions(baseAnalyticsFields[25]).track(closure_1_9.PAYMENT_FLOW_FAILED, baseAnalyticsFields);
  };
  obj[6] = function onPurchasePending() {

  };
  obj[7] = { isGift: true, options: giftOptions };
  useNativeCheckoutStore = giftOptions(baseAnalyticsFields[18])(obj);
  const effect = obj1.useEffect(() => () => {
    if (closure_5 !== closure_1_17.SUCCEEDED) {
      closure_1_1(closure_1_2[25]).track(closure_1_9.PAYMENT_FLOW_CANCELED, closure_2);
      const obj = closure_1_1(closure_1_2[25]);
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
    closure_0 = tmp3;
    closure_1_6(closure_1_17.PURCHASING);
    yield closure_1_7();
    if (!arg1) {
      closure_1_6(closure_1_17.FAILED);
      obj1 = v0(table[25]);
      obj1.track(closure_1_9.PAYMENT_FLOW_FAILED, table);
    }
    table = 1;
    yield closure_1_8();
    if (2 === tmp7) {
      table = 0;
      callback(closure_1_17.FAILED);
      c3 = 3;
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
  obj = { paddingBottom: ThemesDefault.space.PX_12 + arg0, paddingTop: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_TOP_HIGH);
  obj[0] = obj;
  obj[1] = { includeFontPadding: true };
  return obj;
});
let closure_17 = { NOT_STARTED: "not_started", PURCHASING: "purchasing", SUCCEEDED: "succeeded", FAILED: "failed" };
let result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx");

export default function WrappedCollectiblesShopGiftPurchaseSection(arg0) {
  ({ product, onGiftModalDismiss } = arg0);
  ({ isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin } = arg0);
  const GiftACOMOrderExperiment = onGiftModalDismiss(7696).GiftACOMOrderExperiment;
  let obj = onGiftModalDismiss(9266);
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
      result = tmp(4052).isGooglePlayBillingSupported();
      const tmpResult = tmp(4052);
    }
    if (result) {
      result = androidShopOrdersEnabled;
    }
    tmp6 = result;
  }
  const items = [onGiftModalDismiss];
  obj2 = onGiftModalDismiss(500);
  const callback = React.useCallback(() => {
    onGiftModalDismiss(closure_1_2[34]).closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = { paymentGateway: GOOGLE, orderRequired: tmp6, skuIds: items1, isGift: true, activeSubscription: null, initialExternalGatewayFacet: useCollectiblesExternalGatewayFacetDefault(product), onOrderRetryCancellation: callback, children: null };
  items1 = [product.skuId];
  const tmp8 = useCollectiblesExternalGatewayFacetDefault(product);
  obj[7] = callback2(CollectiblesShopGiftPurchaseSection, { product, isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin });
  obj[2] = callback2(NativeCheckoutStoreProviderDefault, obj, product.skuId);
  return callback2(onGiftModalDismiss(9585).NativePaymentContextProvider, obj);
};