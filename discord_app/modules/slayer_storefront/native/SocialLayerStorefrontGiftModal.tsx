// === Module 10148: SocialLayerStorefrontGiftModal ===

// Module 10148 (SocialLayerStorefrontGiftModal)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10126 */;
import SocialLayerStorefrontGiftProductDetailsDefault from "SocialLayerStorefrontGiftProductDetails" /* 10150 */;
import SocialLayerStorefrontGiftPurchaseSectionDefault from "SocialLayerStorefrontGiftPurchaseSection" /* 10151 */;
import noop from "module_19" /* 19 */;
import SKUStore from "SKUStore" /* 6094 */;

require = fn;
const Constants = fn(1085);
({ AnalyticEvents: closure_4, PaymentGateways: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SocialLayerStorefrontGiftModal(skuId) {
  const cResult = skuId(stateFromStores[5]).c(45);
  skuId = skuId.skuId;
  ({ analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = skuId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsLocations2];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== skuId) {
    const fn = function u() {
      return SKUStore.get(skuId);
    };
    const items1 = [skuId];
    cResult[1] = skuId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = skuId(stateFromStores[5]);
  stateFromStores = skuId(stateFromStores[6]).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== analyticsLocations) {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(analyticsLocations, 0)] = giftingOrigin(tmp2[7]).SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
    cResult[4] = analyticsLocations;
    cResult[5] = items2;
    let tmp9 = items2;
    const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  } else {
    tmp9 = cResult[5];
  }
  analyticsLocations2 = giftingOrigin(tmp2[8])(tmp9).analyticsLocations;
  const tmpResult = skuId(stateFromStores[6]);
  if (tmpResult3.isIOS()) {
    let GOOGLE = constants.APPLE_ADVANCED_COMMERCE;
    let tmp16 = constants;
  } else {
    GOOGLE = constants.GOOGLE;
    tmp16 = constants;
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "SocialLayerStorefrontGiftModal" };
    cResult[6] = obj2;
    let tmp17 = obj2;
  } else {
    tmp17 = cResult[6];
  }
  const GiftACOMOrderExperiment = tmp(tmp2[10]).GiftACOMOrderExperiment;
  let enabled = GiftACOMOrderExperiment.useConfig(tmp17).enabled;
  if (cResult[7] === analyticsLocations2) {
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    if (cResult[8] === applicationId) {
      if (cResult[9] === skuId) {
        let tmp20 = cResult[10];
      }
      giftingOrigin(tmp2[13])(tmp20);
      if (null == stateFromStores) {
        return null;
      } else {
        if (tmpResult4.isSocialLayerStorefrontGiftingSupported()) {
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const items3 = [];
            cResult[14] = items3;
          }
          if (enabled) {
            enabled = GOOGLE === tmp16.APPLE_ADVANCED_COMMERCE;
          }
          if (cResult[15] !== skuId) {
            const items4 = [skuId];
            cResult[15] = skuId;
            cResult[16] = items4;
          }
          if (cResult[17] === analyticsLocations2) {
            if (cResult[18] === stateFromStores.applicationId) {
              if (cResult[19] === stateFromStores.productLine) {
                if (cResult[20] === stateFromStores.type) {
                  const _Symbol2 = Symbol;
                  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                    const fn2 = function b() {
                      return Promise.resolve(true);
                    };
                    cResult[23] = fn2;
                  }
                  if (cResult[24] !== stateFromStores) {
                    class N {
                      constructor() {
                        obj = { sku: closure_2 };
                        return jsx(closure_1(closure_2[17]), obj);
                      }
                    }
                    cResult[24] = stateFromStores;
                    cResult[25] = N;
                  } else {
                    class N {
                      constructor() {
                        obj = { sku: closure_2 };
                        return jsx(closure_1(closure_2[17]), obj);
                      }
                    }
                  }
                  if (cResult[26] === analyticsLocations2) {
                    class N {
                      constructor() {
                        obj = { sku: closure_2 };
                        return jsx(closure_1(closure_2[17]), obj);
                      }
                    }
                  }
                  class F {
                    constructor(arg0) {
                      ({ isPurchaseDisabled, giftOptions } = skuId);
                      obj = { skuId, sku: closure_2, isPurchaseDisabled, giftOptions, giftingOrigin, analyticsLocations };
                      return jsx(closure_1(closure_2[18]), obj);
                    }
                  }
                  cResult[26] = analyticsLocations2;
                  cResult[27] = giftingOrigin;
                  cResult[28] = stateFromStores;
                  cResult[29] = skuId;
                  cResult[30] = F;
                }
              }
            }
          }
          tmp30[1] = analyticsLocations2;
          tmp30[3] = skuId;
          ({ type: tmp30[4], productLine: tmp30[5], applicationId: tmp30[6] } = stateFromStores);
          cResult[17] = analyticsLocations2;
          cResult[18] = stateFromStores.applicationId;
          cResult[19] = stateFromStores.productLine;
          cResult[20] = stateFromStores.type;
          cResult[21] = skuId;
          cResult[22] = tmp30;
        } else {
          class N {
            constructor() {
              obj = { sku: closure_2 };
              return jsx(closure_1(closure_2[17]), obj);
            }
          }
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class N {
              constructor() {
                obj = { sku: closure_2 };
                return jsx(closure_1(closure_2[17]), obj);
              }
            }
            const stringResult = obj5.string(tmp(tmp2[15]).t["JCFN/y"]);
            cResult[11] = stringResult;
            const tmp23 = stringResult;
          } else {
            class N {
              constructor() {
                obj = { sku: closure_2 };
                return jsx(closure_1(closure_2[17]), obj);
              }
            }
          }
          if (cResult[12] !== onGiftModalDismiss) {
            class N {
              constructor() {
                obj = { sku: closure_2 };
                return jsx(closure_1(closure_2[17]), obj);
              }
            }
            const obj3 = { onDismiss: onGiftModalDismiss, title: tmp23 };
            const tmp26 = jsx(giftingOrigin(tmp2[16]), { onDismiss: onGiftModalDismiss, title: tmp23 });
            class F {
              constructor(arg0) {
                ({ isPurchaseDisabled, giftOptions } = skuId);
                obj = { skuId, sku: closure_2, isPurchaseDisabled, giftOptions, giftingOrigin, analyticsLocations };
                return jsx(closure_1(closure_2[18]), obj);
              }
            }
            cResult[13] = tmp26;
            const tmp25 = tmp26;
          } else {
            class N {
              constructor() {
                obj = { sku: closure_2 };
                return jsx(closure_1(closure_2[17]), obj);
              }
            }
          }
          return tmp25;
        }
        tmpResult4 = tmp(tmp2[14]);
      }
    }
  }
  cResult[7] = analyticsLocations2;
  if (stateFromStores != null) {
    class N {
      constructor() {
        obj = { sku: closure_2 };
        return jsx(closure_1(closure_2[17]), obj);
      }
    }
  }
  class G {
    constructor() {
      obj = closure_1(closure_2[11]);
      obj1 = { location_stack: analyticsLocations, type: closure_0(closure_2[12]).SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY, sku_id: skuId, application_id: null };
      applicationId = undefined;
      if (closure_2 != null) {
        applicationId = closure_2.applicationId;
      }
      obj1.application_id = applicationId;
      trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
      return;
    }
  }
  cResult[8] = undefined;
  cResult[9] = skuId;
  cResult[10] = G;
  tmp20 = G;
  tmpResult3 = skuId(stateFromStores[9]);
}) : (function SocialLayerStorefrontGiftModal(skuId) {
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss, giftingOrigin } = skuId);
  let applicationId;
  let analyticsLocations2;
  productLine = skuId;
  let tmp = applicationId;
  const items = [analyticsLocations2];
  const items1 = [skuId];
  applicationId = skuId(applicationId[6]).useStateFromStores(items, () => SKUStore.get(skuId), items1);
  let tmp2 = giftingOrigin;
  const items2 = [];
  const obj = skuId(applicationId[6]);
  const tmp3 = giftingOrigin(applicationId[8]);
  items2[HermesBuiltin.arraySpread(analyticsLocations, 0)] = giftingOrigin(applicationId[7]).SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
  analyticsLocations2 = tmp3(items2).analyticsLocations;
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  if (obj2.isIOS()) {
    let GOOGLE = constants.APPLE_ADVANCED_COMMERCE;
    let APPLE_ADVANCED_COMMERCE = constants;
  } else {
    GOOGLE = constants.GOOGLE;
    APPLE_ADVANCED_COMMERCE = constants;
  }
  const GiftACOMOrderExperiment = productLine(tmp[10]).GiftACOMOrderExperiment;
  let enabled = GiftACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontGiftModal" }).enabled;
  tmp2(tmp[13])(() => {
    const obj2 = { location_stack: analyticsLocations2, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY, sku_id: skuId, application_id: null };
    applicationId = undefined;
    if (applicationId != null) {
      applicationId = applicationId.applicationId;
    }
    obj2.application_id = applicationId;
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
  });
  if (null == applicationId) {
    return null;
  } else {
    if (productLineResult.isSocialLayerStorefrontGiftingSupported()) {
      const obj4 = { skuIDs: [], activeSubscription: null, children: null };
      const obj5 = { paymentGateway: GOOGLE, orderRequired: null, skuIds: null, isGift: true, activeSubscription: null, onOrderRetryCancellation: null, checkoutAnalyticsFields: null, analyticsInitialStep: "gift_customization", children: null };
      if (enabled) {
        APPLE_ADVANCED_COMMERCE = APPLE_ADVANCED_COMMERCE.APPLE_ADVANCED_COMMERCE;
        enabled = GOOGLE === APPLE_ADVANCED_COMMERCE;
      }
      obj5.orderRequired = enabled;
      const items3 = [skuId];
      obj5.skuIds = items3;
      obj5.onOrderRetryCancellation = productLine(tmp[12]).closeSocialLayerStorefrontGiftModal;
      enabled = { is_gift: true, location_stack: analyticsLocations2, payment_type: "sku", sku_id: skuId, sku_type: null, sku_product_line: null, application_id: null };
      ({ type: obj3.sku_type, productLine } = applicationId);
      enabled.sku_product_line = productLine;
      applicationId = applicationId.applicationId;
      enabled.application_id = applicationId;
      obj5.checkoutAnalyticsFields = enabled;
      tmp2 = tmp2(tmp[19]);
      const obj6 = {
        skuId,
        analyticsLocations: analyticsLocations2,
        lockedRecipientUser: skuId.lockedRecipientUser,
        onGiftModalDismiss,
        giftingOrigin,
        validateRecipient() {
              return Promise.resolve(true);
            },
        renderProductDetails: null,
        renderPurchaseSection: null
      };
      giftingOrigin = function renderProductDetails() {
        return jsx(SocialLayerStorefrontGiftProductDetailsDefault, { sku: applicationId });
      };
      obj6.renderProductDetails = giftingOrigin;
      obj6.renderPurchaseSection = function renderPurchaseSection(arg0) {
        ({ isPurchaseDisabled, giftOptions } = arg0);
        return jsx(SocialLayerStorefrontGiftPurchaseSectionDefault, { skuId, sku: applicationId, isPurchaseDisabled, giftOptions, giftingOrigin, analyticsLocations: analyticsLocations2 });
      };
      tmp = <tmp2 skuId={skuId} analyticsLocations={analyticsLocations2} lockedRecipientUser={skuId.lockedRecipientUser} onGiftModalDismiss={onGiftModalDismiss} giftingOrigin={giftingOrigin} validateRecipient={function validateRecipient() {
        return Promise.resolve(true);
      }} renderProductDetails={null} renderPurchaseSection={null} />;
      obj5.children = tmp;
      obj4.children = jsx(tmp2(tmp[21]), { paymentGateway: GOOGLE, orderRequired: null, skuIds: null, isGift: true, activeSubscription: null, onOrderRetryCancellation: null, checkoutAnalyticsFields: null, analyticsInitialStep: "gift_customization", children: null }, skuId);
      let tmp7Result = jsx(productLine(tmp[20]).NativePaymentContextProvider, { skuIDs: [], activeSubscription: null, children: null });
      const tmp2Result = tmp2(tmp[21]);
    } else {
      const obj7 = { onDismiss: onGiftModalDismiss, title: null };
      const intl = productLine(tmp[15]).intl;
      obj7.title = intl.string(productLine(tmp[15]).t["JCFN/y"]);
      tmp7Result = jsx(tmp2(tmp[16]), { onDismiss: onGiftModalDismiss, title: null });
      const tmp2Result2 = tmp2(tmp[16]);
    }
    productLineResult = productLine(tmp[14]);
  }
  obj2 = skuId(applicationId[9]);
});