// === Module 10166: SocialLayerStorefrontGiftPurchaseSection ===

// Module 10166 (SocialLayerStorefrontGiftPurchaseSection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10141 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const View = fn(17).View;
let useNativeCheckoutStore = fn(7132).useNativeCheckoutStore;
const AnalyticEvents = fn(1085).AnalyticEvents;
const GiftingOrigin = fn(1391).GiftingOrigin;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5090);
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = { container: null, legalCopy: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.container = { paddingBottom: nativeDefault.space.PX_12 + arg0, paddingTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const obj2 = { paddingBottom: nativeDefault.space.PX_12 + arg0, paddingTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.legalCopy = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SocialLayerStorefrontGiftPurchaseSection(skuId) {
  const cResult = skuId(giftOptions[12]).c(58);
  skuId = skuId.skuId;
  const sku = skuId.sku;
  ({ isPurchaseDisabled, giftOptions } = skuId);
  const giftingOrigin = skuId.giftingOrigin;
  const analyticsLocations = skuId.analyticsLocations;
  closure_13(sku(giftOptions[13])().insets.bottom);
  let obj = skuId(giftOptions[12]);
  const tmp = skuId;
  const tmp4 = sku;
  let applicationId;
  if (sku != null) {
    applicationId = sku.applicationId;
  }
  const getOrFetchApplication = skuId(giftOptions[14]).useGetOrFetchApplication(applicationId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== giftOptions.recipient_id) {
    const fn = function h() {
      return UserStore.getUser(giftOptions.recipient_id);
    };
    cResult[1] = giftOptions.recipient_id;
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  let obj2 = skuId(giftOptions[14]);
  const stateFromStores = tmp(giftOptions[15]).useStateFromStores(first, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(arg0) {
        return skuId.analyticsFields;
      }
    }
    cResult[3] = A;
  } else {
    class A {
      constructor(arg0) {
        return skuId.analyticsFields;
      }
    }
  }
  const tmp14 = useNativeCheckoutStore(A);
  closure_6 = tmp14;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor(arg0) {
        return skuId.setCheckoutFailed;
      }
    }
    cResult[4] = D;
  } else {
    class D {
      constructor(arg0) {
        return skuId.setCheckoutFailed;
      }
    }
  }
  const tmp13Result = useNativeCheckoutStore(D);
  useNativeCheckoutStore = tmp13Result;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0) {
        tmp = skuId.isPatchOrderLoading || skuId.isCreateOrderLoading;
        return tmp;
      }
    }
    cResult[5] = M;
  } else {
    class M {
      constructor(arg0) {
        tmp = skuId.isPatchOrderLoading || skuId.isCreateOrderLoading;
        return tmp;
      }
    }
  }
  useNativeCheckoutStore(M);
  let tmpResult = tmp(giftOptions[15]);
  [r10083, UserStore] = analyticsLocations(stateFromStores.useState(false), 2);
  stateFromStores.useRef(false);
  if (cResult[6] === tmp14) {
    class M {
      constructor(arg0) {
        tmp = skuId.isPatchOrderLoading || skuId.isCreateOrderLoading;
        return tmp;
      }
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(arg0) {
          return skuId.orderRecord;
        }
      }
      cResult[9] = X;
    } else {
      class X {
        constructor(arg0) {
          return skuId.orderRecord;
        }
      }
    }
    const tmp13Result4 = tmp13(X);
    const awaitSync = tmp4(giftOptions[17])(tmp13Result4, giftOptions).awaitSync;
    if (cResult[10] !== giftOptions) {
      class X {
        constructor(arg0) {
          return skuId.orderRecord;
        }
      }
      tmp23[1] = giftOptions;
      cResult[10] = giftOptions;
      cResult[11] = tmp23;
    } else {
      class X {
        constructor(arg0) {
          return skuId.orderRecord;
        }
      }
    }
    if (tmp13Result4 != null) {
      class X {
        constructor(arg0) {
          return skuId.orderRecord;
        }
      }
    }
    if (cResult[12] === analyticsLocations) {
      class X {
        constructor(arg0) {
          return skuId.orderRecord;
        }
      }
    }
    cResult[12] = analyticsLocations;
    cResult[13] = tmp14;
    cResult[14] = giftOptions.recipient_id;
    cResult[15] = giftingOrigin;
    cResult[16] = stateFromStores;
    if (sku != null) {
      class X {
        constructor(arg0) {
          return skuId.orderRecord;
        }
      }
    }
    class V {
      constructor() {
        closure_9.current = false;
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[18]);
        if (obj.isIOS()) {
          tmp3 = closure_1;
          obj2 = closure_1(tmp2[16]);
          tmp4 = AnalyticEvents;
          tmp5 = closure_6;
          trackResult = obj2.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, closure_6);
        }
        tmp7 = closure_8(false);
        tmp9 = null == giftOptions.recipient_id;
        tmp8 = giftOptions;
        if (!tmp9) {
          tmp11 = giftingOrigin !== GiftingOrigin.USER_PROFILE_WISHLIST && tmp10 !== GiftingOrigin.DM_CHANNEL_WISHLIST;
          tmp9 = tmp11;
        }
        if (!tmp9) {
          tmp12 = closure_1;
          obj3 = closure_1(tmp2[19]);
          obj1 = { type: "WISHLIST_GIFT_SENT", skuId: null, recipientId: null };
          tmp13 = closure_0;
          obj1.skuId = closure_0;
          obj1.recipientId = tmp8.recipient_id;
          dispatchResult = obj3.dispatch(obj1);
        }
        tmpResult = tmp(tmp2[20]);
        obj7 = { skuId: closure_0, orbsReward: null, recipient: null, analyticsLocations: null };
        orbsReward = undefined;
        if (sku != null) {
          orbsReward = sku.orbsReward;
        }
        obj7.orbsReward = orbsReward;
        obj7.recipient = closure_5;
        obj7.analyticsLocations = analyticsLocations;
        result = tmpResult.openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj7);
        nextPromise = result.then(tmp(tmp2[20]).closeSocialLayerStorefrontGiftModal);
        return;
      }
    }
    cResult[17] = undefined;
    cResult[18] = skuId;
    cResult[19] = V;
  }
  const fn2 = function x() {
    if (ref.current) {
      tmp.current = false;
      AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_FAILED, closure_6);
      closure_7();
    }
    UserStore(false);
  };
  cResult[6] = tmp14;
  cResult[7] = tmp13Result;
  cResult[8] = fn2;
  const tmp19 = analyticsLocations(stateFromStores.useState(false), 2);
}) : (function SocialLayerStorefrontGiftPurchaseSection(skuId) {
  skuId = skuId.skuId;
  const sku = skuId.sku;
  ({ isPurchaseDisabled, giftOptions } = skuId);
  ({ giftingOrigin: asyncGeneratorStep, analyticsLocations } = skuId);
  recipient = undefined;
  closure_6 = undefined;
  useNativeCheckoutStore = undefined;
  c8 = undefined;
  let onPurchaseError;
  let awaitSync;
  closure_12 = undefined;
  const tmp3 = closure_13(sku(giftOptions[13])().insets.bottom);
  let applicationId;
  if (sku != null) {
    applicationId = sku.applicationId;
  }
  const getOrFetchApplication = skuId(giftOptions[14]).useGetOrFetchApplication(applicationId);
  let obj = skuId(giftOptions[14]);
  const items = [c8];
  recipient = skuId(giftOptions[15]).useStateFromStores(items, () => UserStore.getUser(giftOptions.recipient_id));
  const tmp7 = useNativeCheckoutStore((analyticsFields) => analyticsFields.analyticsFields);
  closure_6 = tmp7;
  const tmp8 = useNativeCheckoutStore((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  useNativeCheckoutStore = tmp8;
  const tmp4Result = skuId(giftOptions[15]);
  let tmp9 = useNativeCheckoutStore((isPatchOrderLoading) => isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading);
  [tmp11, c8] = analyticsLocations(recipient.useState(false), 2);
  recipient.useRef(false);
  const items1 = [tmp7, tmp8];
  onPurchaseError = recipient.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_FAILED, closure_6);
      closure_7();
    }
    _undefined(false);
  }, items1);
  const tmp13 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  awaitSync = tmp(tmp2[17])(tmp13, giftOptions).awaitSync;
  const items2 = [giftOptions];
  const memo = recipient.useMemo(() => ({ isGift: true, options: giftOptions }), items2);
  let obj2 = { skuId, sku, giftParams: memo, analyticsLoadId: tmp7.load_id, analyticsLocations, orderId: null, analyticsData: null, onPurchaseComplete: null, onPurchaseError: null, onPurchasePending: null };
  let id;
  const tmp10 = analyticsLocations(recipient.useState(false), 2);
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
      const tmp11 = asyncGeneratorStep !== GiftingOrigin.USER_PROFILE_WISHLIST && tmp10 !== GiftingOrigin.DM_CHANNEL_WISHLIST;
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
    const result = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj5);
    result.then(SocialLayerStorefrontNativeActionCreators.closeSocialLayerStorefrontGiftModal);
    const tmpResult = SocialLayerStorefrontNativeActionCreators;
  };
  obj2.onPurchaseError = onPurchaseError;
  obj2.onPurchasePending = function onPurchasePending() {

  };
  closure_12 = sku(giftOptions[21])(obj2);
  const intl = tmp4(tmp2[22]).intl;
  const stringResult = intl.string(skuId(giftOptions[22]).t.ouo4FK);
  let obj3 = { style: tmp3.container, children: null };
  let obj4 = { style: tmp3.legalCopy, children: null };
  const tmp18 = closure_12;
  let tmpResult = sku(giftOptions[21]);
  const mobileFinePrintMessageForApplication = skuId(giftOptions[24]).getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, { shouldAppendDisclaimer: true });
  obj4.children = mobileFinePrintMessageForApplication.map((children, index) => awaitSync(skuId(giftOptions[23]).Text, { variant: "text-xs/normal", color: "text-muted", children }, index));
  const items3 = [awaitSync(closure_6, obj4), ];
  if (!isPurchaseDisabled) {
    isPurchaseDisabled = tmp11;
  }
  if (!isPurchaseDisabled) {
    isPurchaseDisabled = tmp9;
  }
  const tmp4Result2 = skuId(giftOptions[24]);
  items3[1] = awaitSync(skuId(giftOptions[25]).Button, {
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
    })
  });
  obj3.children = items3;
  return tmp18(closure_6, obj3);
});