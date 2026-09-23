// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
let useNativeCheckoutStore = fn(7752).useNativeCheckoutStore;
const AnalyticEvents = fn(1074).AnalyticEvents;
const GiftingOrigin = fn(1374).GiftingOrigin;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4827);
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = { container: null, legalCopy: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.container = {
    paddingBottom: nativeDefault.space.PX_12 + arg0,
    paddingTop: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  };
  const obj2 = {
    paddingBottom: nativeDefault.space.PX_12 + arg0,
    paddingTop: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  };
  obj.legalCopy = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx",
);

export default function SocialLayerStorefrontGiftPurchaseSection(skuId) {
  skuId = skuId.skuId;
  const sku = skuId.sku;
  ({ isPurchaseDisabled, giftOptions } = skuId);
  ({ giftingOrigin: asyncGeneratorStep, analyticsLocations } = skuId);
  noop = undefined;
  closure_6 = undefined;
  useNativeCheckoutStore = undefined;
  c8 = undefined;
  let onPurchaseError;
  let awaitSync;
  closure_12 = undefined;
  const tmp3 = closure_13(sku(giftOptions[11])().insets.bottom);
  let applicationId;
  if (sku != null) {
    applicationId = sku.applicationId;
  }
  const getOrFetchApplication = skuId(giftOptions[12]).useGetOrFetchApplication(applicationId);
  let obj = skuId(giftOptions[12]);
  const items = [c8];
  noop = skuId(giftOptions[13]).useStateFromStores(items, () => UserStore.getUser(giftOptions.recipient_id));
  const tmp7 = useNativeCheckoutStore((analyticsFields) => analyticsFields.analyticsFields);
  closure_6 = tmp7;
  const tmp8 = useNativeCheckoutStore((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  useNativeCheckoutStore = tmp8;
  const tmp4Result = skuId(giftOptions[13]);
  let tmp9 = useNativeCheckoutStore(
    (isPatchOrderLoading) => isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading,
  );
  [tmp11, c8] = analyticsLocations(noop.useState(false), 2);
  noop.useRef(false);
  const items1 = [tmp7, tmp8];
  onPurchaseError = noop.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_FAILED, closure_6);
      closure_7();
    }
    _undefined(false);
  }, items1);
  const tmp13 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  awaitSync = tmp(tmp2[15])(tmp13, giftOptions).awaitSync;
  const items2 = [giftOptions];
  const memo = noop.useMemo(() => ({ isGift: true, options: giftOptions }), items2);
  let obj2 = {
    skuId,
    sku,
    giftParams: memo,
    analyticsLoadId: tmp7.load_id,
    analyticsLocations,
    orderId: null,
    analyticsData: null,
    onPurchaseComplete: null,
    onPurchaseError: null,
    onPurchasePending: null,
  };
  let id;
  const tmp10 = analyticsLocations(noop.useState(false), 2);
  if (tmp13 != null) {
    id = tmp13.id;
  }
  obj2.orderId = id;
  obj2.analyticsData = tmp7;
  obj2.onPurchaseComplete = function onPurchaseComplete() {
    closure_9.current = false;
    if (obj.isIOS()) {
      AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, closure_6);
    }
    _undefined(false);
    let tmp9 = null == giftOptions.recipient_id;
    if (!tmp9) {
      tmp9 = asyncGeneratorStep !== GiftingOrigin.USER_PROFILE_WISHLIST && tmp10 !== GiftingOrigin.DM_CHANNEL_WISHLIST;
      const tmp11 =
        asyncGeneratorStep !== GiftingOrigin.USER_PROFILE_WISHLIST && tmp10 !== GiftingOrigin.DM_CHANNEL_WISHLIST;
    }
    if (!tmp9) {
      const obj4 = { type: "WISHLIST_GIFT_SENT", skuId, recipientId: giftOptions.recipient_id };
      DispatcherDefault.dispatch(obj4);
    }
    obj = PlatformUtils;
    const obj5 = { skuId, orbsReward: null, recipient: null, analyticsLocations: null };
    let orbsReward;
    if (sku != null) {
      orbsReward = sku.orbsReward;
    }
    obj5.orbsReward = orbsReward;
    obj5.recipient = recipient;
    obj5.analyticsLocations = analyticsLocations;
    const result =
      SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj5);
    result.then(SocialLayerStorefrontNativeActionCreators.closeSocialLayerStorefrontGiftModal);
    const tmpResult = SocialLayerStorefrontNativeActionCreators;
  };
  obj2.onPurchaseError = onPurchaseError;
  obj2.onPurchasePending = function onPurchasePending() {};
  closure_12 = sku(giftOptions[16])(obj2);
  const intl = tmp4(tmp2[20]).intl;
  const stringResult = intl.string(skuId(giftOptions[20]).t.ouo4FK);
  let obj3 = { style: tmp3.container, children: null };
  let obj4 = { style: tmp3.legalCopy, children: null };
  const tmp18 = closure_12;
  let tmpResult = sku(giftOptions[16]);
  const mobileFinePrintMessageForApplication = skuId(giftOptions[21]).getMobileFinePrintMessageForApplication(
    getOrFetchApplication,
    stringResult,
    { shouldAppendDisclaimer: true },
  );
  obj4.children = mobileFinePrintMessageForApplication.map((children, index) =>
    awaitSync(skuId(giftOptions[22]).Text, { variant: "text-xs/normal", color: "text-muted", children }, index),
  );
  const items3 = [awaitSync(closure_6, obj4)];
  if (!isPurchaseDisabled) {
    isPurchaseDisabled = tmp11;
  }
  if (!isPurchaseDisabled) {
    isPurchaseDisabled = tmp9;
  }
  const tmp4Result2 = skuId(giftOptions[21]);
  items3[1] = awaitSync(skuId(giftOptions[23]).Button, {
    variant: "active",
    disabled: isPurchaseDisabled,
    loading: tmp11,
    text: stringResult,
    onPress: asyncGeneratorStep(async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp4;
              closure_9.current = true;
              _undefined(true);
              c1 = 1;
              c2 = 1;
              const obj4 = { value: awaitSync(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              closure_128_12().catch(closure_128_10);
              const promise = closure_128_12();
            } else {
              closure_128_10();
            }
            c2 = 3;
          }
        } catch (tmp15) {
          c2 = tmp;
          throw tmp15;
        }
      }
    }),
  });
  obj3.children = items3;
  return tmp18(closure_6, obj3);
}
