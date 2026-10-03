// === Module 10744: CollectiblesShopGiftModal ===

// Module 10744 (CollectiblesShopGiftModal)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import BadgeId from "BadgeId" /* 7855 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7868 */;
import openGiftModal from "openGiftModal" /* 10743 */;
import CollectiblesShopCheckoutDetailsDefault from "CollectiblesShopCheckoutDetails" /* 10746 */;
import CollectiblesShopGiftPurchaseSectionDefault from "CollectiblesShopGiftPurchaseSection" /* 10749 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;

require = fn;
const application_id = fn(1085).COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = fn(1096).PaymentGateways;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  const cResult = require("c").c(33);
  product = product.product;
  require = product;
  ({ analyticsLocations, lockedRecipientUser, onGiftModalDismiss } = product);
  giftingOrigin = product.giftingOrigin;
  const validateRecipient = product.validateRecipient;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "CollectiblesShopGiftModal" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const GiftACOMOrderExperiment = tmp(tmp2[7]).GiftACOMOrderExperiment;
  const enabled = GiftACOMOrderExperiment.useConfig(first).enabled;
  const obj = require("c");
  if (tmpResult.isIOS()) {
    let GOOGLE = PaymentGateways.APPLE_ADVANCED_COMMERCE;
    let tmp6 = PaymentGateways;
  } else {
    GOOGLE = PaymentGateways.GOOGLE;
    tmp6 = PaymentGateways;
  }
  if (cResult[1] !== enabled) {
    let tmp8 = GOOGLE === tmp6.APPLE_ADVANCED_COMMERCE && enabled;
    if (!tmp8) {
      let result = GOOGLE === tmp6.GOOGLE;
      if (result) {
        result = tmp(tmp2[9]).isGooglePlayBillingSupported();
        const tmpResult2 = tmp(tmp2[9]);
      }
      tmp8 = result;
    }
    cResult[1] = enabled;
    cResult[2] = tmp8;
  }
  onGiftModalDismiss(giftingOrigin[10])(product);
  if (cResult[3] !== onGiftModalDismiss) {
    const fn = function _() {
      openGiftModal.closeShopGiftModal();
      if (onGiftModalDismiss != null) {
        onGiftModalDismiss();
      }
    };
    cResult[3] = onGiftModalDismiss;
    cResult[4] = fn;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[5] = items;
  }
  if (cResult[6] !== product.skuId) {
    const items1 = [product.skuId];
    cResult[6] = product.skuId;
    cResult[7] = items1;
  }
  if (cResult[8] === analyticsLocations) {
    if (cResult[11] !== product) {
      class M {
        constructor(arg0) {
          ({ recipientUser, isValidRecipient } = product);
          obj = { product, recipientUser, isValidRecipient, isGift: true };
          return jsx(closure_1(closure_2[12]), obj);
        }
      }
      cResult[11] = product;
      class P {
        constructor(arg0) {
          ({ isPurchaseDisabled, giftOptions } = product);
          obj = { product, isPurchaseDisabled, giftOptions, giftingOrigin };
          return jsx(closure_1(closure_2[13]), obj);
        }
      }
      cResult[12] = M;
    } else {
      class M {
        constructor(arg0) {
          ({ recipientUser, isValidRecipient } = product);
          obj = { product, recipientUser, isValidRecipient, isGift: true };
          return jsx(closure_1(closure_2[12]), obj);
        }
      }
    }
    if (cResult[13] === giftingOrigin) {
      class M {
        constructor(arg0) {
          ({ recipientUser, isValidRecipient } = product);
          obj = { product, recipientUser, isValidRecipient, isGift: true };
          return jsx(closure_1(closure_2[12]), obj);
        }
      }
      if (cResult[16] === analyticsLocations) {
        class M {
          constructor(arg0) {
            ({ recipientUser, isValidRecipient } = product);
            obj = { product, recipientUser, isValidRecipient, isGift: true };
            return jsx(closure_1(closure_2[12]), obj);
          }
        }
      }
      class P {
        constructor(arg0) {
          ({ isPurchaseDisabled, giftOptions } = product);
          obj = { product, isPurchaseDisabled, giftOptions, giftingOrigin };
          return jsx(closure_1(closure_2[13]), obj);
        }
      }
      tmp20[0] = product.skuId;
      tmp20[1] = analyticsLocations;
      tmp20[2] = lockedRecipientUser;
      tmp20[3] = onGiftModalDismiss;
      tmp20[4] = giftingOrigin;
      tmp20[5] = validateRecipient;
      tmp20[6] = M;
      tmp20[7] = P;
      const tmp21 = jsx(onGiftModalDismiss(tmp2[14]), tmp20);
      cResult[16] = analyticsLocations;
      cResult[17] = giftingOrigin;
      cResult[18] = lockedRecipientUser;
      cResult[19] = onGiftModalDismiss;
      cResult[20] = product.skuId;
      cResult[21] = M;
      cResult[22] = P;
      cResult[23] = validateRecipient;
      cResult[24] = tmp21;
    }
    class P {
      constructor(arg0) {
        ({ isPurchaseDisabled, giftOptions } = product);
        obj = { product, isPurchaseDisabled, giftOptions, giftingOrigin };
        return jsx(closure_1(closure_2[13]), obj);
      }
    }
    cResult[13] = giftingOrigin;
    cResult[14] = product;
    cResult[15] = P;
  }
  cResult[8] = analyticsLocations;
  cResult[9] = product.skuId;
  cResult[10] = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  const obj3 = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  tmpResult = require("PlatformUtils");
}) : ((product) => {
  product = product.product;
  const require = product;
  ({ analyticsLocations, onGiftModalDismiss } = product);
  const giftingOrigin = product.giftingOrigin;
  ({ lockedRecipientUser, validateRecipient } = product);
  const GiftACOMOrderExperiment = require("ACOMExperiments").GiftACOMOrderExperiment;
  if (obj.isIOS()) {
    let GOOGLE = PaymentGateways.APPLE_ADVANCED_COMMERCE;
    let tmp4 = PaymentGateways;
  } else {
    GOOGLE = PaymentGateways.GOOGLE;
    tmp4 = PaymentGateways;
  }
  let tmp5 = GOOGLE === tmp4.APPLE_ADVANCED_COMMERCE && GiftACOMOrderExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  if (!tmp5) {
    let result = GOOGLE === tmp4.GOOGLE;
    if (result) {
      result = tmp(tmp2[9]).isGooglePlayBillingSupported();
      const tmpResult = tmp(tmp2[9]);
    }
    tmp5 = result;
  }
  const items = [onGiftModalDismiss];
  obj = require("PlatformUtils");
  const callback = noop.useCallback(() => {
    openGiftModal.closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  const obj2 = { skuIDs: [], activeSubscription: null, children: null };
  const obj3 = { paymentGateway: GOOGLE, orderRequired: tmp5, skuIds: null, isGift: true, activeSubscription: null, initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[10])(product), onOrderRetryCancellation: callback, checkoutAnalyticsFields: { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id }, analyticsInitialStep: "gift_customization", children: null };
  const items1 = [product.skuId];
  obj3.skuIds = items1;
  const obj4 = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  const tmp7 = onGiftModalDismiss(giftingOrigin[10])(product);
  obj3.children = jsx(onGiftModalDismiss(giftingOrigin[14]), {
    skuId: product.skuId,
    analyticsLocations,
    lockedRecipientUser,
    onGiftModalDismiss,
    giftingOrigin,
    validateRecipient,
    renderProductDetails(arg0) {
      ({ recipientUser, isValidRecipient } = arg0);
      return jsx(CollectiblesShopCheckoutDetailsDefault, { product, recipientUser, isValidRecipient, isGift: true });
    },
    renderPurchaseSection(arg0) {
      ({ isPurchaseDisabled, giftOptions } = arg0);
      return jsx(CollectiblesShopGiftPurchaseSectionDefault, { product, isPurchaseDisabled, giftOptions, giftingOrigin });
    }
  });
  obj2.children = jsx(onGiftModalDismiss(giftingOrigin[16]), { paymentGateway: GOOGLE, orderRequired: tmp5, skuIds: null, isGift: true, activeSubscription: null, initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[10])(product), onOrderRetryCancellation: callback, checkoutAnalyticsFields: { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id }, analyticsInitialStep: "gift_customization", children: null }, product.skuId);
  return jsx(require("NativePaymentContext").NativePaymentContextProvider, { skuIDs: [], activeSubscription: null, children: null });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  const cResult = skuId(skuId1[6]).c(22);
  skuId = skuId.skuId;
  ({ analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = skuId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "CollectiblesShopGiftModal" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const GiftingBadgeExperiment = tmp(tmp2[17]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig(first).enabled;
  if (cResult[1] !== enabled) {
    const fn = function k() {
      if (enabled) {
        const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
      }
    };
    const items = [enabled];
    cResult[1] = enabled;
    cResult[2] = fn;
    cResult[3] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesCategoryStore];
    cResult[4] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] !== skuId) {
    const fn2 = function _() {
      return CollectiblesCategoryStore.getProduct(skuId);
    };
    const items2 = [skuId];
    cResult[5] = skuId;
    cResult[6] = fn2;
    cResult[7] = items2;
    let tmp11 = items2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[6];
    tmp11 = cResult[7];
  }
  let obj = skuId(skuId1[6]);
  const stateFromStores = skuId(skuId1[20]).useStateFromStores(tmp8, tmp10, tmp11);
  if (cResult[8] !== analyticsLocations) {
    const items3 = [];
    items3[HermesBuiltin.arraySpread(analyticsLocations, 0)] = enabled(tmp2[21]).COLLECTIBLES_MOBILE_GIFT_MODAL;
    cResult[8] = analyticsLocations;
    cResult[9] = items3;
    let tmp13 = items3;
    const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  } else {
    tmp13 = cResult[9];
  }
  const analyticsLocations2 = enabled(tmp2[22])(tmp13).analyticsLocations;
  skuId1 = undefined;
  if (stateFromStores != null) {
    skuId1 = stateFromStores.skuId;
  }
  if (cResult[10] !== skuId1) {
    class L {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[23]);
        tmp3 = skuId;
        if (obj.isNullOrEmpty(skuId)) {
          tmp6 = globalThis;
          _Promise = Promise;
          flag = false;
          resolved = Promise.resolve(false);
        } else {
          tmp4 = skuId;
          tmpResult = tmp(tmp2[24]);
          resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
        }
        return resolved;
      }
    }
    cResult[10] = skuId1;
    cResult[11] = L;
  } else {
    class L {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[23]);
        tmp3 = skuId;
        if (obj.isNullOrEmpty(skuId)) {
          tmp6 = globalThis;
          _Promise = Promise;
          flag = false;
          resolved = Promise.resolve(false);
        } else {
          tmp4 = skuId;
          tmpResult = tmp(tmp2[24]);
          resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
        }
        return resolved;
      }
    }
  }
  if (null == stateFromStores) {
    class L {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[23]);
        tmp3 = skuId;
        if (obj.isNullOrEmpty(skuId)) {
          tmp6 = globalThis;
          _Promise = Promise;
          flag = false;
          resolved = Promise.resolve(false);
        } else {
          tmp4 = skuId;
          tmpResult = tmp(tmp2[24]);
          resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
        }
        return resolved;
      }
    }
  } else {
    class L {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[23]);
        tmp3 = skuId;
        if (obj.isNullOrEmpty(skuId)) {
          tmp6 = globalThis;
          _Promise = Promise;
          flag = false;
          resolved = Promise.resolve(false);
        } else {
          tmp4 = skuId;
          tmpResult = tmp(tmp2[24]);
          resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
        }
        return resolved;
      }
    }
    if (!obj4.isCollectibleGiftingSupported()) {
      class L {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[23]);
          tmp3 = skuId;
          if (obj.isNullOrEmpty(skuId)) {
            tmp6 = globalThis;
            _Promise = Promise;
            flag = false;
            resolved = Promise.resolve(false);
          } else {
            tmp4 = skuId;
            tmpResult = tmp(tmp2[24]);
            resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
          }
          return resolved;
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[23]);
            tmp3 = skuId;
            if (obj.isNullOrEmpty(skuId)) {
              tmp6 = globalThis;
              _Promise = Promise;
              flag = false;
              resolved = Promise.resolve(false);
            } else {
              tmp4 = skuId;
              tmpResult = tmp(tmp2[24]);
              resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
            }
            return resolved;
          }
        }
        const stringResult = obj5.string(tmp(tmp2[25]).t["JCFN/y"]);
        cResult[12] = stringResult;
        const tmp21 = stringResult;
      } else {
        class L {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[23]);
            tmp3 = skuId;
            if (obj.isNullOrEmpty(skuId)) {
              tmp6 = globalThis;
              _Promise = Promise;
              flag = false;
              resolved = Promise.resolve(false);
            } else {
              tmp4 = skuId;
              tmpResult = tmp(tmp2[24]);
              resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
            }
            return resolved;
          }
        }
      }
      if (cResult[13] !== onGiftModalDismiss) {
        class L {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[23]);
            tmp3 = skuId;
            if (obj.isNullOrEmpty(skuId)) {
              tmp6 = globalThis;
              _Promise = Promise;
              flag = false;
              resolved = Promise.resolve(false);
            } else {
              tmp4 = skuId;
              tmpResult = tmp(tmp2[24]);
              resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
            }
            return resolved;
          }
        }
        const obj3 = { onDismiss: onGiftModalDismiss, title: tmp21 };
        const tmp24 = jsx(tmp18(tmp2[26]), { onDismiss: onGiftModalDismiss, title: tmp21 });
        cResult[13] = onGiftModalDismiss;
        cResult[14] = tmp24;
      } else {
        class L {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[23]);
            tmp3 = skuId;
            if (obj.isNullOrEmpty(skuId)) {
              tmp6 = globalThis;
              _Promise = Promise;
              flag = false;
              resolved = Promise.resolve(false);
            } else {
              tmp4 = skuId;
              tmpResult = tmp(tmp2[24]);
              resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
            }
            return resolved;
          }
        }
      }
    }
    if (cResult[15] === analyticsLocations2) {
      class L {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[23]);
          tmp3 = skuId;
          if (obj.isNullOrEmpty(skuId)) {
            tmp6 = globalThis;
            _Promise = Promise;
            flag = false;
            resolved = Promise.resolve(false);
          } else {
            tmp4 = skuId;
            tmpResult = tmp(tmp2[24]);
            resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
          }
          return resolved;
        }
      }
    }
    const obj6 = { product: stateFromStores, analyticsLocations: analyticsLocations2, lockedRecipientUser, onGiftModalDismiss, giftingOrigin, validateRecipient: L };
    const tmp28 = <closure_8 product={stateFromStores} analyticsLocations={analyticsLocations2} lockedRecipientUser={lockedRecipientUser} onGiftModalDismiss={onGiftModalDismiss} giftingOrigin={giftingOrigin} validateRecipient={L} />;
    cResult[15] = analyticsLocations2;
    cResult[16] = giftingOrigin;
    cResult[17] = lockedRecipientUser;
    cResult[18] = onGiftModalDismiss;
    cResult[19] = stateFromStores;
    cResult[20] = L;
    cResult[21] = tmp28;
  }
  tmp18 = enabled;
  let tmpResult = skuId(skuId1[20]);
}) : ((skuId) => {
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  let skuId1;
  ({ lockedRecipientUser, giftingOrigin } = skuId);
  const GiftingBadgeExperiment = skuId(skuId1[17]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  const items = [enabled];
  const effect = noop.useEffect(() => {
    if (enabled) {
      const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items);
  const items1 = [CollectiblesCategoryStore];
  const items2 = [skuId];
  const stateFromStores = skuId(skuId1[20]).useStateFromStores(items1, () => CollectiblesCategoryStore.getProduct(skuId), items2);
  const items3 = [];
  let obj = skuId(skuId1[20]);
  const tmp5 = enabled;
  const tmp6 = enabled(skuId1[22]);
  items3[HermesBuiltin.arraySpread(analyticsLocations, 0)] = enabled(skuId1[21]).COLLECTIBLES_MOBILE_GIFT_MODAL;
  skuId1 = undefined;
  if (stateFromStores != null) {
    skuId1 = stateFromStores.skuId;
  }
  [][0] = skuId1;
  if (null == stateFromStores) {
    return null;
  } else {
    if (tmpResult.isCollectibleGiftingSupported()) {
      const obj2 = { product: stateFromStores, analyticsLocations: tmp6(items3).analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin, validateRecipient: tmp9 };
      let tmp10Result = <closure_8 product={stateFromStores} analyticsLocations={tmp6(items3).analyticsLocations} lockedRecipientUser={lockedRecipientUser} onGiftModalDismiss={onGiftModalDismiss} giftingOrigin={giftingOrigin} validateRecipient={tmp9} />;
    } else {
      const obj3 = { onDismiss: onGiftModalDismiss, title: null };
      const intl = tmp(tmp2[25]).intl;
      obj3.title = intl.string(tmp(tmp2[25]).t["JCFN/y"]);
      tmp10Result = jsx(tmp5(tmp2[26]), { onDismiss: onGiftModalDismiss, title: null });
      const tmp5Result = tmp5(tmp2[26]);
    }
    tmpResult = tmp(tmp2[9]);
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
});