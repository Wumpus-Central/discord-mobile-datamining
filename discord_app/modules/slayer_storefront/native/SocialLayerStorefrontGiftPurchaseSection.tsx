// === Module 10569: SocialLayerStorefrontGiftPurchaseSection ===

// Module 10569 (SocialLayerStorefrontGiftPurchaseSection)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6943 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10544 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2, recipient, skuId;

let closure_12;
let unpackModuleId;
const View = react_native.View;
let useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
let AnalyticEvents = Constants.AnalyticEvents;
const GiftingOrigin = PremiumConstants.GiftingOrigin;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles((arg0) => {
  let obj2;
  const obj = { container: obj2, legalCopy: { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 } };
  obj2 = { paddingBottom: nativeDefault.space.PX_12 + arg0, paddingTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  ({ display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 });
  return obj;
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  let closure_7;
  let first;
  let giftOptions;
  let isPurchaseDisabled;
  let ref;
  let tmp11;
  const tmp = skuId;
  let obj = skuId(giftOptions[12]);
  const cResult = obj.c(58);
  skuId = skuId.skuId;
  const sku = skuId.sku;
  ({ isPurchaseDisabled, giftOptions } = skuId);
  const giftingOrigin = skuId.giftingOrigin;
  const analyticsLocations = skuId.analyticsLocations;
  closure_13(sku(giftOptions[13])().insets.bottom);
  let applicationId;
  const useGetOrFetchApplication = skuId(giftOptions[14]).useGetOrFetchApplication;
  skuId(giftOptions[14]);
  const tmp4 = sku;
  if (sku != null) {
    applicationId = sku.applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplication(applicationId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== giftOptions.recipient_id) {
    const fn = function f() {
      return UserStore.getUser(giftOptions.recipient_id);
    };
    cResult[1] = giftOptions.recipient_id;
    cResult[2] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  const tmpResult = tmp(giftOptions[15]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp11);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(analyticsFields) {
        return analyticsFields.analyticsFields;
      }
    }
    cResult[3] = A;
  } else {
    class A {
      constructor(analyticsFields) {
        return analyticsFields.analyticsFields;
      }
    }
  }
  const tmp15 = useNativeCheckoutStore(A);
  let closure_6 = tmp15;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor(setCheckoutFailed) {
        return setCheckoutFailed.setCheckoutFailed;
      }
    }
    cResult[4] = D;
  } else {
    class D {
      constructor(setCheckoutFailed) {
        return setCheckoutFailed.setCheckoutFailed;
      }
    }
  }
  const tmp14Result = useNativeCheckoutStore(D);
  useNativeCheckoutStore = tmp14Result;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor(isPatchOrderLoading) {
        return isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading;
      }
    }
    cResult[5] = R;
  } else {
    class R {
      constructor(isPatchOrderLoading) {
        return isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading;
      }
    }
  }
  useNativeCheckoutStore(R);
  [r10083, UserStore] = analyticsLocations(stateFromStores.useState(false), 2);
  analyticsLocations(stateFromStores.useState(false), 2);
  AnalyticEvents = stateFromStores.useRef(false);
  if (cResult[6] === tmp15) {
    class R {
      constructor(isPatchOrderLoading) {
        return isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading;
      }
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(orderRecord) {
          return orderRecord.orderRecord;
        }
      }
      cResult[9] = X;
    } else {
      class X {
        constructor(orderRecord) {
          return orderRecord.orderRecord;
        }
      }
    }
    const tmp14Result4 = useNativeCheckoutStore(X);
    const awaitSync = tmp4(giftOptions[17])(tmp14Result4, giftOptions).awaitSync;
    if (cResult[10] !== giftOptions) {
      class X {
        constructor(orderRecord) {
          return orderRecord.orderRecord;
        }
      }
      tmp24[1] = giftOptions;
      cResult[10] = giftOptions;
      cResult[11] = tmp24;
    } else {
      class X {
        constructor(orderRecord) {
          return orderRecord.orderRecord;
        }
      }
    }
    if (tmp14Result4 != null) {
      class X {
        constructor(orderRecord) {
          return orderRecord.orderRecord;
        }
      }
    }
    if (cResult[12] === analyticsLocations) {
      class X {
        constructor(orderRecord) {
          return orderRecord.orderRecord;
        }
      }
    }
    cResult[12] = analyticsLocations;
    cResult[13] = tmp15;
    cResult[14] = giftOptions.recipient_id;
    cResult[15] = giftingOrigin;
    cResult[16] = stateFromStores;
    if (sku != null) {
      class X {
        constructor(orderRecord) {
          return orderRecord.orderRecord;
        }
      }
    }
    class V {
      constructor() {
        let orbsReward;
        ref.current = false;
        const obj = PlatformUtils;
        if (obj.isIOS()) {
          const obj2 = AnalyticsUtilsDefault;
          obj2.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, closure_6);
        }
        UserStore(false);
        let tmp9 = null == giftOptions.recipient_id;
        if (!tmp9) {
          tmp9 = giftingOrigin !== GiftingOrigin.USER_PROFILE_WISHLIST && tmp10 !== GiftingOrigin.DM_CHANNEL_WISHLIST;
        }
        if (!tmp9) {
          const obj4 = { type: "WISHLIST_GIFT_SENT", skuId, recipientId: giftOptions.recipient_id };
          const obj3 = DispatcherDefault;
          obj3.dispatch(obj4);
        }
        const obj5 = { skuId, orbsReward, recipient: stateFromStores, analyticsLocations };
        orbsReward = undefined;
        const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductGiftPurchaseSuccessModal;
        SocialLayerStorefrontNativeActionCreators;
        if (sku != null) {
          orbsReward = sku.orbsReward;
        }
        const result = openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj5);
        result.then(SocialLayerStorefrontNativeActionCreators.closeSocialLayerStorefrontGiftModal);
      }
    }
    cResult[17] = undefined;
    cResult[18] = skuId;
    cResult[19] = V;
  }
  class G {
    constructor() {
      if (ref.current) {
        tmp.current = false;
        const obj = AnalyticsUtilsDefault;
        obj.track(AnalyticEvents.PAYMENT_FLOW_FAILED, closure_6);
        closure_7();
      }
      UserStore(false);
    }
  }
  cResult[6] = tmp15;
  cResult[7] = tmp14Result;
  cResult[8] = G;
}) : ((skuId) => {
  let _undefined;
  let analyticsLocations;
  let c8;
  let closure_7;
  let giftOptions;
  let id;
  let isPurchaseDisabled;
  let items3;
  let mobileFinePrintMessageForApplication;
  let tmp12;
  skuId = skuId.skuId;
  const sku = skuId.sku;
  ({ isPurchaseDisabled, giftOptions } = skuId);
  ({ giftingOrigin: _asyncToGenerator, analyticsLocations } = skuId);
  recipient = undefined;
  let closure_6;
  useNativeCheckoutStore = undefined;
  c8 = undefined;
  let ref;
  let onPurchaseError;
  let awaitSync;
  closure_12 = undefined;
  const tmp = sku;
  const tmp2 = giftOptions;
  const tmp3 = closure_13(sku(giftOptions[13])().insets.bottom);
  let applicationId;
  const useGetOrFetchApplication = skuId(giftOptions[14]).useGetOrFetchApplication;
  skuId(giftOptions[14]);
  if (sku != null) {
    applicationId = sku.applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplication(applicationId);
  const items = [c8];
  const tmp4Result = skuId(tmp2[15]);
  recipient = tmp4Result.useStateFromStores(items, () => UserStore.getUser(giftOptions.recipient_id));
  const tmp8 = useNativeCheckoutStore((analyticsFields) => analyticsFields.analyticsFields);
  closure_6 = tmp8;
  let tmp9 = useNativeCheckoutStore((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  useNativeCheckoutStore = tmp9;
  const tmp10 = useNativeCheckoutStore((isPatchOrderLoading) => isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading);
  const tmp11 = analyticsLocations(recipient.useState(false), 2);
  [tmp12, c8] = tmp11;
  ref = recipient.useRef(false);
  const items1 = [tmp8, tmp9];
  onPurchaseError = recipient.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.PAYMENT_FLOW_FAILED, closure_6);
      closure_7();
    }
    _undefined(false);
  }, items1);
  const tmp14 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  awaitSync = tmp(tmp2[17])(tmp14, giftOptions).awaitSync;
  const items2 = [giftOptions];
  const memo = recipient.useMemo(() => ({ isGift: true, options: giftOptions }), items2);
  let obj = {
    skuId,
    sku,
    giftParams: memo,
    analyticsLoadId: tmp8.load_id,
    analyticsLocations,
    orderId: id,
    analyticsData: tmp8,
    onPurchaseComplete() {
      let orbsReward;
      ref.current = false;
      const obj = PlatformUtils;
      if (obj.isIOS()) {
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, closure_6);
      }
      _undefined(false);
      let tmp9 = null == giftOptions.recipient_id;
      if (!tmp9) {
        tmp9 = _asyncToGenerator !== GiftingOrigin.USER_PROFILE_WISHLIST && tmp10 !== GiftingOrigin.DM_CHANNEL_WISHLIST;
      }
      if (!tmp9) {
        const obj4 = { type: "WISHLIST_GIFT_SENT", skuId, recipientId: giftOptions.recipient_id };
        const obj3 = DispatcherDefault;
        obj3.dispatch(obj4);
      }
      const obj5 = { skuId, orbsReward, recipient, analyticsLocations };
      orbsReward = undefined;
      const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductGiftPurchaseSuccessModal;
      SocialLayerStorefrontNativeActionCreators;
      if (sku != null) {
        orbsReward = sku.orbsReward;
      }
      const result = openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj5);
      result.then(SocialLayerStorefrontNativeActionCreators.closeSocialLayerStorefrontGiftModal);
    },
    onPurchaseError,
    onPurchasePending() {

    }
  };
  id = undefined;
  const tmpResult = tmp(tmp2[21]);
  if (tmp14 != null) {
    id = tmp14.id;
  }
  closure_12 = tmpResult(obj);
  const intl = tmp4(tmp2[22]).intl;
  const stringResult = intl.string(skuId(tmp2[22]).t.ouo4FK);
  let obj2 = { style: tmp3.container, children: items3 };
  let obj3 = {
    style: tmp3.legalCopy,
    children: mobileFinePrintMessageForApplication.map((children, index) => {
      const obj = { variant: "text-xs/normal", color: "text-muted", children };
      return awaitSync(skuId(giftOptions[23]).Text, obj, index);
    })
  };
  const getMobileFinePrintMessageForApplication = tmp4(tmp2[24]).getMobileFinePrintMessageForApplication;
  skuId(tmp2[24]);
  mobileFinePrintMessageForApplication = getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, { shouldAppendDisclaimer: true });
  items3 = [awaitSync(closure_6, obj3), ];
  const Button = tmp4(tmp2[25]).Button;
  const tmp19 = closure_12;
  if (!isPurchaseDisabled) {
    isPurchaseDisabled = tmp12;
  }
  if (!isPurchaseDisabled) {
    isPurchaseDisabled = tmp10;
  }
  let obj4 = {
    variant: "active",
    disabled: isPurchaseDisabled,
    loading: tmp12,
    text: stringResult,
    onPress: _asyncToGenerator(async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              let closure_0 = tmp3;
              ref.current = true;
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
              const promise = closure_128_12();
              promise.catch(closure_128_10);
            } else {
              closure_128_10();
            }
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c2 = 3;
          throw tmp14;
        }
      }
    })
  };
  items3[1] = awaitSync(Button, obj4);
  return tmp19(closure_6, obj2);
});
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx");

export default tmp3;