// === Module 10662: CollectiblesShopGiftModalContent ===

// Module 10662 (CollectiblesShopGiftModalContent)
import closure_3 from "noop" /* 19 */;
import closure_4 from "updateCategoriesAndProducts" /* 7220 */;
import { COLLECTIBLES_APPLICATION_ID as closure_5 } from "ME" /* 676 */;
import { PaymentGateways } from "sum" /* 505 */;
import { jsx } from "jsxProd" /* 21 */;

let require = arg1;
function CollectiblesShopGiftModalContent(product) {
  product = product.product;
  require = product;
  const onGiftModalDismiss = product.onGiftModalDismiss;
  const giftingOrigin = product.giftingOrigin;
  ({ analyticsLocations, lockedRecipientUser, validateRecipient } = product);
  const GiftACOMOrderExperiment = require(giftingOrigin[5]).GiftACOMOrderExperiment;
  let obj = require(giftingOrigin[6]);
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled({ location: "CollectiblesShopGiftModal" });
  obj1 = require(giftingOrigin[7]);
  if (obj1.isIOS()) {
    let GOOGLE = tmp4.APPLE_ADVANCED_COMMERCE;
    let tmp5 = tmp4;
  } else {
    GOOGLE = tmp4.GOOGLE;
    tmp5 = tmp4;
  }
  let tmp6 = GOOGLE === tmp5.APPLE_ADVANCED_COMMERCE && GiftACOMOrderExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  if (!tmp6) {
    let result = GOOGLE === tmp5.GOOGLE;
    if (result) {
      result = tmp(tmp2[8]).isGooglePlayBillingSupported();
      const tmpResult = tmp(tmp2[8]);
    }
    if (result) {
      result = androidShopOrdersEnabled;
    }
    tmp6 = result;
  }
  const items = [onGiftModalDismiss];
  const callback = React.useCallback(() => {
    product(giftingOrigin[10]).closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = { paymentGateway: GOOGLE, orderRequired: tmp6, skuIds: items1, isGift: true, activeSubscription: null, initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[9])(product), onOrderRetryCancellation: callback, children: null };
  items1 = [product.skuId];
  const tmp8 = onGiftModalDismiss(giftingOrigin[9])(product);
  obj1 = {
    skuId: product.skuId,
    applicationId: closure_5,
    analyticsLocations,
    lockedRecipientUser,
    onGiftModalDismiss,
    giftingOrigin,
    validateRecipient,
    renderProductDetails(arg0) {
      ({ recipientUser, isValidRecipient } = arg0);
      return closure_1_7(onGiftModalDismiss(giftingOrigin[14]), { product: closure_0, recipientUser, isValidRecipient, isGift: true });
    },
    renderPurchaseSection(arg0) {
      ({ isPurchaseDisabled, giftOptions, baseAnalyticsFields } = arg0);
      return closure_1_7(onGiftModalDismiss(giftingOrigin[15]), { product: closure_0, isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin });
    }
  };
  obj[7] = jsx(onGiftModalDismiss(giftingOrigin[13]), {
    skuId: product.skuId,
    applicationId: closure_5,
    analyticsLocations,
    lockedRecipientUser,
    onGiftModalDismiss,
    giftingOrigin,
    validateRecipient,
    renderProductDetails(arg0) {
      ({ recipientUser, isValidRecipient } = arg0);
      return closure_1_7(onGiftModalDismiss(giftingOrigin[14]), { product: closure_0, recipientUser, isValidRecipient, isGift: true });
    },
    renderPurchaseSection(arg0) {
      ({ isPurchaseDisabled, giftOptions, baseAnalyticsFields } = arg0);
      return closure_1_7(onGiftModalDismiss(giftingOrigin[15]), { product: closure_0, isPurchaseDisabled, giftOptions, baseAnalyticsFields, giftingOrigin });
    }
  });
  obj[2] = jsx(onGiftModalDismiss(giftingOrigin[12]), { paymentGateway: GOOGLE, orderRequired: tmp6, skuIds: items1, isGift: true, activeSubscription: null, initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[9])(product), onOrderRetryCancellation: callback, children: null }, product.skuId);
  return jsx(require(giftingOrigin[11]).NativePaymentContextProvider, { paymentGateway: GOOGLE, orderRequired: tmp6, skuIds: items1, isGift: true, activeSubscription: null, initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[9])(product), onOrderRetryCancellation: callback, children: null });
}
let result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default function CollectiblesShopGiftModal(skuId) {
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  let enabled;
  skuId = undefined;
  ({ lockedRecipientUser, giftingOrigin } = skuId);
  const GiftingBadgeExperiment = skuId(skuId[16]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  const items = [enabled];
  const effect = React.useEffect(() => {
    if (enabled) {
      const badge = skuId(skuId[17]).fetchBadge(skuId(skuId[18]).BadgeId.GIFTING);
      const obj = skuId(skuId[17]);
    }
  }, items);
  let obj = skuId(skuId[19]);
  const items1 = [closure_4];
  const items2 = [skuId];
  const stateFromStores = obj.useStateFromStores(items1, () => closure_1_4.getProduct(skuId), items2);
  const items3 = [];
  const tmp5 = enabled;
  const tmp6 = enabled(skuId[20]);
  items3[HermesBuiltin.arraySpread(analyticsLocations, 0)] = enabled(skuId[21]).COLLECTIBLES_MOBILE_GIFT_MODAL;
  skuId = undefined;
  if (stateFromStores != null) {
    skuId = stateFromStores.skuId;
  }
  [][0] = skuId;
  if (null == stateFromStores) {
    return null;
  } else {
    if (tmpResult.isCollectibleGiftingSupported()) {
      obj = { product: null, analyticsLocations: null, lockedRecipientUser: null, onGiftModalDismiss: null, giftingOrigin: null, validateRecipient: null };
      obj[0] = stateFromStores;
      obj[1] = tmp6(items3).analyticsLocations;
      obj[2] = lockedRecipientUser;
      obj[3] = onGiftModalDismiss;
      obj[4] = giftingOrigin;
      obj[5] = tmp9;
      let tmp10Result = tmp10(CollectiblesShopGiftModalContent, obj);
    } else {
      obj = { onDismiss: null, title: null };
      obj[0] = onGiftModalDismiss;
      const intl = tmp(tmp2[25]).intl;
      obj[1] = intl.string(tmp(tmp2[25]).t["JCFN/y"]);
      tmp10Result = tmp10(tmp5(tmp2[24]), obj);
      const tmp5Result = tmp5(tmp2[24]);
    }
    tmpResult = tmp(tmp2[8]);
  }
};