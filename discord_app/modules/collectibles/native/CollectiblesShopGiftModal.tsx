// === Module 10757: CollectiblesShopGiftModal ===

// Module 10757 (CollectiblesShopGiftModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import StringUtils from "StringUtils" /* 2018 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7065 */;
import BadgeId from "BadgeId" /* 7866 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7879 */;
import openGiftModal from "openGiftModal" /* 10756 */;
import CollectiblesShopCheckoutDetailsDefault from "CollectiblesShopCheckoutDetails" /* 10759 */;
import CollectiblesShopGiftPurchaseSectionDefault from "CollectiblesShopGiftPurchaseSection" /* 10762 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7066 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let product, skuId;

const application_id = Constants.COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = Constants2.PaymentGateways;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  let GOOGLE;
  let analyticsLocations;
  let first;
  let giftingOrigin;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  let require;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(33);
  product = product.product;
  require = product;
  ({ analyticsLocations, lockedRecipientUser, onGiftModalDismiss } = product);
  giftingOrigin = product.giftingOrigin;
  const validateRecipient = product.validateRecipient;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "CollectiblesShopGiftModal" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const GiftACOMOrderExperiment = tmp(tmp2[7]).GiftACOMOrderExperiment;
  const enabled = GiftACOMOrderExperiment.useConfig(first).enabled;
  const tmpResult = require("PlatformUtils");
  if (tmpResult.isIOS()) {
    GOOGLE = PaymentGateways.APPLE_ADVANCED_COMMERCE;
    tmp6 = PaymentGateways;
  } else {
    GOOGLE = PaymentGateways.GOOGLE;
    tmp6 = PaymentGateways;
  }
  if (cResult[1] !== enabled) {
    let tmp8 = GOOGLE === tmp6.APPLE_ADVANCED_COMMERCE && enabled;
    if (!tmp8) {
      let result = GOOGLE === tmp6.GOOGLE;
      if (result) {
        const tmpResult2 = require("BillingPlatformUtils");
        result = tmpResult2.isGooglePlayBillingSupported();
      }
      tmp8 = result;
    }
    cResult[1] = enabled;
    cResult[2] = tmp8;
  }
  onGiftModalDismiss(giftingOrigin[10])(product);
  if (cResult[3] !== onGiftModalDismiss) {
    const fn = function _() {
      const obj = openGiftModal;
      obj.closeShopGiftModal();
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
          let isValidRecipient;
          let recipientUser;
          ({ recipientUser, isValidRecipient } = arg0);
          return jsx(CollectiblesShopCheckoutDetailsDefault, { product: require, recipientUser, isValidRecipient, isGift: true });
        }
      }
      cResult[11] = product;
      class P {
        constructor(arg0) {
          let giftOptions;
          let isPurchaseDisabled;
          ({ isPurchaseDisabled, giftOptions } = arg0);
          return jsx(CollectiblesShopGiftPurchaseSectionDefault, { product: require, isPurchaseDisabled, giftOptions, giftingOrigin });
        }
      }
      cResult[12] = M;
    } else {
      class M {
        constructor(arg0) {
          let isValidRecipient;
          let recipientUser;
          ({ recipientUser, isValidRecipient } = arg0);
          return jsx(CollectiblesShopCheckoutDetailsDefault, { product: require, recipientUser, isValidRecipient, isGift: true });
        }
      }
    }
    if (cResult[13] === giftingOrigin) {
      class M {
        constructor(arg0) {
          let isValidRecipient;
          let recipientUser;
          ({ recipientUser, isValidRecipient } = arg0);
          return jsx(CollectiblesShopCheckoutDetailsDefault, { product: require, recipientUser, isValidRecipient, isGift: true });
        }
      }
      if (cResult[16] === analyticsLocations) {
        class M {
          constructor(arg0) {
            let isValidRecipient;
            let recipientUser;
            ({ recipientUser, isValidRecipient } = arg0);
            return jsx(CollectiblesShopCheckoutDetailsDefault, { product: require, recipientUser, isValidRecipient, isGift: true });
          }
        }
      }
      class P {
        constructor(arg0) {
          let giftOptions;
          let isPurchaseDisabled;
          ({ isPurchaseDisabled, giftOptions } = arg0);
          return jsx(CollectiblesShopGiftPurchaseSectionDefault, { product: require, isPurchaseDisabled, giftOptions, giftingOrigin });
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
      cResult[16] = analyticsLocations;
      cResult[17] = giftingOrigin;
      cResult[18] = lockedRecipientUser;
      cResult[19] = onGiftModalDismiss;
      cResult[20] = product.skuId;
      cResult[21] = M;
      cResult[22] = P;
      cResult[23] = validateRecipient;
      cResult[24] = jsx(onGiftModalDismiss(giftingOrigin[14]), tmp20);
      const tmp21 = jsx(onGiftModalDismiss(giftingOrigin[14]), tmp20);
    }
    class P {
      constructor(arg0) {
        let giftOptions;
        let isPurchaseDisabled;
        ({ isPurchaseDisabled, giftOptions } = arg0);
        return jsx(CollectiblesShopGiftPurchaseSectionDefault, { product: require, isPurchaseDisabled, giftOptions, giftingOrigin });
      }
    }
    cResult[13] = giftingOrigin;
    cResult[14] = product;
    cResult[15] = P;
  }
  const obj3 = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  cResult[8] = analyticsLocations;
  cResult[9] = product.skuId;
  cResult[10] = obj3;
}) : ((product) => {
  let GOOGLE;
  let analyticsLocations;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  let tmp4;
  let validateRecipient;
  product = product.product;
  const require = product;
  ({ analyticsLocations, onGiftModalDismiss } = product);
  const giftingOrigin = product.giftingOrigin;
  ({ lockedRecipientUser, validateRecipient } = product);
  const GiftACOMOrderExperiment = require("ACOMExperiments").GiftACOMOrderExperiment;
  const enabled = GiftACOMOrderExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  let obj = require("PlatformUtils");
  if (obj.isIOS()) {
    GOOGLE = PaymentGateways.APPLE_ADVANCED_COMMERCE;
    tmp4 = PaymentGateways;
  } else {
    GOOGLE = PaymentGateways.GOOGLE;
    tmp4 = PaymentGateways;
  }
  let tmp5 = GOOGLE === tmp4.APPLE_ADVANCED_COMMERCE && enabled;
  if (!tmp5) {
    let result = GOOGLE === tmp4.GOOGLE;
    if (result) {
      const tmpResult = require("BillingPlatformUtils");
      result = tmpResult.isGooglePlayBillingSupported();
    }
    tmp5 = result;
  }
  const items = [onGiftModalDismiss];
  const tmp7 = onGiftModalDismiss(giftingOrigin[10])(product);
  const callback = react.useCallback(() => {
    const obj = openGiftModal;
    obj.closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  const NativePaymentContextProvider = tmp(tmp2[15]).NativePaymentContextProvider;
  const items1 = [product.skuId];
  const obj4 = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  onGiftModalDismiss(giftingOrigin[16]);
  return <NativePaymentContextProvider skuIDs={[]} activeSubscription={null}>{null}</NativePaymentContextProvider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  let analyticsLocations;
  let first;
  let giftingOrigin;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  let skuId1;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = skuId(skuId1[6]);
  const cResult = obj.c(22);
  skuId = skuId.skuId;
  ({ analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = skuId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "CollectiblesShopGiftModal" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const GiftingBadgeExperiment = tmp2(tmp3[17]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig(first).enabled;
  if (cResult[1] !== enabled) {
    const fn = function k() {
      if (enabled) {
        const obj = BadgeDirectoryActionCreators;
        const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
      }
    };
    const items = [enabled];
    cResult[1] = enabled;
    cResult[2] = fn;
    cResult[3] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const effect = react.useEffect(tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesCategoryStore];
    cResult[4] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== skuId) {
    const fn2 = function _() {
      return CollectiblesCategoryStore.getProduct(skuId);
    };
    const items2 = [skuId];
    cResult[5] = skuId;
    cResult[6] = fn2;
    cResult[7] = items2;
    tmp12 = items2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[6];
    tmp12 = cResult[7];
  }
  const tmp2Result = skuId(skuId1[20]);
  const stateFromStores = tmp2Result.useStateFromStores(tmp9, tmp11, tmp12);
  if (cResult[8] !== analyticsLocations) {
    const items3 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items3, analyticsLocations, 0);
    items3[arraySpreadResult] = enabled(skuId1[21]).COLLECTIBLES_MOBILE_GIFT_MODAL;
    cResult[8] = analyticsLocations;
    cResult[9] = items3;
    tmp14 = items3;
  } else {
    tmp14 = cResult[9];
  }
  const analyticsLocations2 = enabled(tmp3[22])(tmp14).analyticsLocations;
  skuId1 = undefined;
  const tmp19 = enabled;
  if (stateFromStores != null) {
    skuId1 = stateFromStores.skuId;
  }
  if (cResult[10] !== skuId1) {
    class L {
      constructor(arg0) {
        let resolved;
        const obj = StringUtils;
        if (obj.isNullOrEmpty(skuId1)) {
          resolved = Promise.resolve(false);
        } else {
          const tmpResult = CollectiblesActionCreators;
          resolved = tmpResult.validateCollectiblesRecipient(arg0, skuId1);
        }
        return resolved;
      }
    }
    cResult[10] = skuId1;
    cResult[11] = L;
  } else {
    class L {
      constructor(arg0) {
        let resolved;
        const obj = StringUtils;
        if (obj.isNullOrEmpty(skuId1)) {
          resolved = Promise.resolve(false);
        } else {
          const tmpResult = CollectiblesActionCreators;
          resolved = tmpResult.validateCollectiblesRecipient(arg0, skuId1);
        }
        return resolved;
      }
    }
  }
  let tmp22 = null;
  if (null != stateFromStores) {
    let tmp25;
    class L {
      constructor(arg0) {
        let resolved;
        const obj = StringUtils;
        if (obj.isNullOrEmpty(skuId1)) {
          resolved = Promise.resolve(false);
        } else {
          const tmpResult = CollectiblesActionCreators;
          resolved = tmpResult.validateCollectiblesRecipient(arg0, skuId1);
        }
        return resolved;
      }
    }
    if (obj4.isCollectibleGiftingSupported()) {
      class L {
        constructor(arg0) {
          let resolved;
          const obj = StringUtils;
          if (obj.isNullOrEmpty(skuId1)) {
            resolved = Promise.resolve(false);
          } else {
            const tmpResult = CollectiblesActionCreators;
            resolved = tmpResult.validateCollectiblesRecipient(arg0, skuId1);
          }
          return resolved;
        }
      }
      const tmp30 = <closure_8 product={stateFromStores} analyticsLocations={analyticsLocations2} lockedRecipientUser={lockedRecipientUser} onGiftModalDismiss={onGiftModalDismiss} giftingOrigin={giftingOrigin} validateRecipient={L} />;
      cResult[15] = analyticsLocations2;
      cResult[16] = giftingOrigin;
      cResult[17] = lockedRecipientUser;
      cResult[18] = onGiftModalDismiss;
      cResult[19] = stateFromStores;
      cResult[20] = L;
      cResult[21] = tmp30;
    } else {
      let tmp23;
      class L {
        constructor(arg0) {
          let resolved;
          const obj = StringUtils;
          if (obj.isNullOrEmpty(skuId1)) {
            resolved = Promise.resolve(false);
          } else {
            const tmpResult = CollectiblesActionCreators;
            resolved = tmpResult.validateCollectiblesRecipient(arg0, skuId1);
          }
          return resolved;
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor(arg0) {
            let resolved;
            const obj = StringUtils;
            if (obj.isNullOrEmpty(skuId1)) {
              resolved = Promise.resolve(false);
            } else {
              const tmpResult = CollectiblesActionCreators;
              resolved = tmpResult.validateCollectiblesRecipient(arg0, skuId1);
            }
            return resolved;
          }
        }
        const stringResult = obj5.string(skuId(skuId1[25]).t["JCFN/y"]);
        cResult[12] = stringResult;
        tmp23 = stringResult;
      } else {
        class L {
          constructor(arg0) {
            let resolved;
            const obj = StringUtils;
            if (obj.isNullOrEmpty(skuId1)) {
              resolved = Promise.resolve(false);
            } else {
              const tmpResult = CollectiblesActionCreators;
              resolved = tmpResult.validateCollectiblesRecipient(arg0, skuId1);
            }
            return resolved;
          }
        }
      }
      if (cResult[13] !== onGiftModalDismiss) {
        class L {
          constructor(arg0) {
            let resolved;
            const obj = StringUtils;
            if (obj.isNullOrEmpty(skuId1)) {
              resolved = Promise.resolve(false);
            } else {
              const tmpResult = CollectiblesActionCreators;
              resolved = tmpResult.validateCollectiblesRecipient(arg0, skuId1);
            }
            return resolved;
          }
        }
        const tmp26 = jsx(tmp19(skuId1[26]), { onDismiss: onGiftModalDismiss, title: tmp23 });
        cResult[13] = onGiftModalDismiss;
        cResult[14] = tmp26;
        tmp25 = tmp26;
      } else {
        class L {
          constructor(arg0) {
            let resolved;
            const obj = StringUtils;
            if (obj.isNullOrEmpty(skuId1)) {
              resolved = Promise.resolve(false);
            } else {
              const tmpResult = CollectiblesActionCreators;
              resolved = tmpResult.validateCollectiblesRecipient(arg0, skuId1);
            }
            return resolved;
          }
        }
      }
    }
    tmp22 = tmp25;
  }
  return tmp22;
}) : ((skuId) => {
  let analyticsLocations;
  let giftingOrigin;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  let skuId1;
  ({ lockedRecipientUser, giftingOrigin } = skuId);
  const GiftingBadgeExperiment = skuId(skuId1[17]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  const items = [enabled];
  const effect = react.useEffect(() => {
    if (enabled) {
      const obj = BadgeDirectoryActionCreators;
      const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items);
  let obj = skuId(skuId1[20]);
  const items1 = [CollectiblesCategoryStore];
  const items2 = [skuId];
  const stateFromStores = obj.useStateFromStores(items1, () => CollectiblesCategoryStore.getProduct(skuId), items2);
  const items3 = [];
  const tmp7 = enabled(skuId1[22]);
  const arraySpreadResult = HermesBuiltin.arraySpread(items3, analyticsLocations, 0);
  items3[arraySpreadResult] = enabled(skuId1[21]).COLLECTIBLES_MOBILE_GIFT_MODAL;
  skuId1 = undefined;
  const analyticsLocations2 = tmp7(items3).analyticsLocations;
  const tmp6 = enabled;
  if (stateFromStores != null) {
    skuId1 = stateFromStores.skuId;
  }
  [][0] = skuId1;
  let tmp11 = null;
  if (null != stateFromStores) {
    let tmp12Result;
    const tmp2Result = skuId(skuId1[9]);
    if (tmp2Result.isCollectibleGiftingSupported()) {
      tmp12Result = <closure_8 product={stateFromStores} analyticsLocations={analyticsLocations2} lockedRecipientUser={lockedRecipientUser} onGiftModalDismiss={onGiftModalDismiss} giftingOrigin={giftingOrigin} validateRecipient={tmp10} />;
    } else {
      tmp6(skuId1[26]);
      const intl = tmp2(tmp3[25]).intl;
      tmp12Result = <tmp6Result onDismiss={onGiftModalDismiss} title={intl.string(skuId(skuId1[25]).t["JCFN/y"])} />;
    }
    tmp11 = tmp12Result;
  }
  return tmp11;
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default tmp2;