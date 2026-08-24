// === Module 10401: SocialLayerStorefrontGiftModal ===

// Module 10401 (SocialLayerStorefrontGiftModal)
import noopAll from "noop" /* 19 */;
import closure_3 from "addSku" /* 4526 */;
import ME from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ AnalyticEvents: c4, PaymentGateways: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx");

export default function SocialLayerStorefrontGiftModal(skuId) {
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss, giftingOrigin } = skuId);
  let applicationId;
  let analyticsLocations2;
  let tmp8Result = applicationId;
  let obj = skuId(applicationId[4]);
  const items = [analyticsLocations2];
  const items1 = [skuId];
  applicationId = obj.useStateFromStores(items, () => analyticsLocations2.get(skuId), items1);
  let tmp3 = giftingOrigin;
  const items2 = [];
  const tmp4 = giftingOrigin(applicationId[5]);
  items2[HermesBuiltin.arraySpread(analyticsLocations, 0)] = giftingOrigin(applicationId[6]).SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
  analyticsLocations2 = tmp4(items2).analyticsLocations;
  obj1 = skuId(applicationId[7]);
  if (obj1.isIOS()) {
    let GOOGLE = tmp6.APPLE_ADVANCED_COMMERCE;
    let APPLE_ADVANCED_COMMERCE = tmp6;
  } else {
    GOOGLE = tmp6.GOOGLE;
    APPLE_ADVANCED_COMMERCE = tmp6;
  }
  const GiftACOMOrderExperiment = tmp(tmp8Result[8]).GiftACOMOrderExperiment;
  let closeSocialLayerStorefrontGiftModal = GiftACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontGiftModal" }).enabled;
  tmp3(tmp8Result[9])(() => {
    let obj = giftingOrigin(applicationId[10]);
    obj = { location_stack: analyticsLocations2, type: skuId(applicationId[11]).SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY, sku_id: skuId, application_id: null };
    applicationId = undefined;
    if (applicationId != null) {
      applicationId = applicationId.applicationId;
    }
    obj[3] = applicationId;
    obj.track(closure_1_4.OPEN_MODAL, obj);
  });
  if (null == applicationId) {
    return null;
  } else {
    if (tmpResult.isSocialLayerStorefrontGiftingSupported()) {
      obj = { skuIDs: null, activeSubscription: null, children: null };
      obj[0] = [];
      obj = { paymentGateway: null, orderRequired: null, skuIds: null, isGift: true, activeSubscription: null, onOrderRetryCancellation: null, children: null };
      obj[0] = GOOGLE;
      let tmp3Result = tmp3(tmp8Result[16]);
      if (closeSocialLayerStorefrontGiftModal) {
        APPLE_ADVANCED_COMMERCE = APPLE_ADVANCED_COMMERCE.APPLE_ADVANCED_COMMERCE;
        closeSocialLayerStorefrontGiftModal = GOOGLE === APPLE_ADVANCED_COMMERCE;
      }
      obj[1] = closeSocialLayerStorefrontGiftModal;
      const items3 = [skuId];
      obj[2] = items3;
      closeSocialLayerStorefrontGiftModal = tmp(tmp8Result[11]).closeSocialLayerStorefrontGiftModal;
      obj[5] = closeSocialLayerStorefrontGiftModal;
      tmp3 = tmp3(tmp8Result[17]);
      obj1 = { skuId: null, applicationId: null, analyticsLocations: null, lockedRecipientUser: null, onGiftModalDismiss: null, giftingOrigin: null, validateRecipient: null, renderProductDetails: null, renderPurchaseSection: null };
      obj1[0] = skuId;
      applicationId = applicationId.applicationId;
      obj1[1] = applicationId;
      obj1[2] = analyticsLocations2;
      obj1[3] = skuId.lockedRecipientUser;
      obj1[4] = onGiftModalDismiss;
      obj1[5] = giftingOrigin;
      obj1[6] = function validateRecipient(navigation, arg1) {
        return Promise.resolve(true);
      };
      giftingOrigin = function renderProductDetails(arg0) {
        return closure_1_6(giftingOrigin(applicationId[18]), { sku: applicationId });
      };
      obj1[7] = giftingOrigin;
      obj1[8] = function renderPurchaseSection(arg0) {
        ({ isPurchaseDisabled, giftOptions } = arg0);
        return closure_1_6(giftingOrigin(applicationId[19]), { skuId, sku: applicationId, isPurchaseDisabled, giftOptions, giftingOrigin, analyticsLocations: analyticsLocations2 });
      };
      tmp8Result = tmp8(tmp3, obj1);
      obj[6] = tmp8Result;
      obj[2] = tmp8(tmp3Result, obj, skuId);
      tmp8Result = tmp8(tmp(tmp8Result[15]).NativePaymentContextProvider, obj);
    } else {
      const obj2 = { onDismiss: null, title: null };
      obj2[0] = onGiftModalDismiss;
      tmp3Result = tmp3(tmp8Result[13]);
      const intl = tmp(tmp8Result[14]).intl;
      obj2[1] = intl.string(tmp(tmp8Result[14]).t["JCFN/y"]);
      tmp8Result = tmp8(tmp3Result, obj2);
    }
    tmpResult = tmp(tmp8Result[12]);
  }
};