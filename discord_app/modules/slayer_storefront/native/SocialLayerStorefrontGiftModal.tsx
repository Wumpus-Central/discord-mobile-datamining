// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import closure_3 from "../../../stores/game_store/SKUStore.tsx";
import ME from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
({ AnalyticEvents: c4, PaymentGateways: c5 } = ME);
const result = require("set").fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx",
);

export default function SocialLayerStorefrontGiftModal(skuId) {
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss, giftingOrigin } = skuId);
  let applicationId;
  let analyticsLocations2;
  productLine = skuId;
  let tmp = applicationId;
  let obj = skuId(applicationId[4]);
  const items = [analyticsLocations2];
  const items1 = [skuId];
  applicationId = obj.useStateFromStores(items, () => analyticsLocations2.get(skuId), items1);
  let tmp2 = giftingOrigin;
  const items2 = [];
  const tmp3 = giftingOrigin(applicationId[5]);
  items2[HermesBuiltin.arraySpread(analyticsLocations, 0)] = giftingOrigin(
    applicationId[6],
  ).SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
  analyticsLocations2 = tmp3(items2).analyticsLocations;
  obj1 = skuId(applicationId[7]);
  if (obj1.isIOS()) {
    let GOOGLE = tmp5.APPLE_ADVANCED_COMMERCE;
    let APPLE_ADVANCED_COMMERCE = tmp5;
  } else {
    GOOGLE = tmp5.GOOGLE;
    APPLE_ADVANCED_COMMERCE = tmp5;
  }
  const GiftACOMOrderExperiment = productLine(tmp[8]).GiftACOMOrderExperiment;
  let enabled = GiftACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontGiftModal" }).enabled;
  tmp2(tmp[9])(() => {
    let obj = giftingOrigin(applicationId[10]);
    obj = {
      location_stack: analyticsLocations2,
      type: skuId(applicationId[11]).SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY,
      sku_id: skuId,
      application_id: null,
    };
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
    if (productLineResult.isSocialLayerStorefrontGiftingSupported()) {
      obj = { skuIDs: null, activeSubscription: null, children: null };
      obj[0] = [];
      obj = {
        paymentGateway: null,
        orderRequired: null,
        skuIds: null,
        isGift: true,
        activeSubscription: null,
        onOrderRetryCancellation: null,
        checkoutAnalyticsFields: null,
        analyticsInitialStep: "gift_customization",
        children: null,
      };
      obj[0] = GOOGLE;
      let tmp2Result = tmp2(tmp[16]);
      if (enabled) {
        APPLE_ADVANCED_COMMERCE = APPLE_ADVANCED_COMMERCE.APPLE_ADVANCED_COMMERCE;
        enabled = GOOGLE === APPLE_ADVANCED_COMMERCE;
      }
      obj[1] = enabled;
      const items3 = [skuId];
      obj[2] = items3;
      obj[5] = productLine(tmp[11]).closeSocialLayerStorefrontGiftModal;
      enabled = {
        is_gift: true,
        location_stack: null,
        payment_type: "sku",
        sku_id: null,
        sku_type: null,
        sku_product_line: null,
        application_id: null,
      };
      enabled[1] = analyticsLocations2;
      enabled[3] = skuId;
      ({ type: obj3[4], productLine } = applicationId);
      enabled[5] = productLine;
      applicationId = applicationId.applicationId;
      enabled[6] = applicationId;
      obj[6] = enabled;
      tmp2 = tmp2(tmp[17]);
      obj1 = {
        skuId: null,
        analyticsLocations: null,
        lockedRecipientUser: null,
        onGiftModalDismiss: null,
        giftingOrigin: null,
        validateRecipient: null,
        renderProductDetails: null,
        renderPurchaseSection: null,
      };
      obj1[0] = skuId;
      obj1[1] = analyticsLocations2;
      obj1[2] = skuId.lockedRecipientUser;
      obj1[3] = onGiftModalDismiss;
      obj1[4] = giftingOrigin;
      obj1[5] = function validateRecipient(id, arg1) {
        return Promise.resolve(true);
      };
      giftingOrigin = function renderProductDetails(arg0) {
        return closure_1_6(giftingOrigin(applicationId[18]), { sku: applicationId });
      };
      obj1[6] = giftingOrigin;
      obj1[7] = function renderPurchaseSection(arg0) {
        ({ isPurchaseDisabled, giftOptions } = arg0);
        return closure_1_6(giftingOrigin(applicationId[19]), {
          skuId,
          sku: applicationId,
          isPurchaseDisabled,
          giftOptions,
          giftingOrigin,
          analyticsLocations: analyticsLocations2,
        });
      };
      tmp = tmp7(tmp2, obj1);
      obj[8] = tmp;
      obj[2] = tmp7(tmp2Result, obj, skuId);
      let tmp7Result = tmp7(productLine(tmp[15]).NativePaymentContextProvider, obj);
    } else {
      const obj2 = { onDismiss: null, title: null };
      obj2[0] = onGiftModalDismiss;
      tmp2Result = tmp2(tmp[13]);
      const intl = productLine(tmp[14]).intl;
      obj2[1] = intl.string(productLine(tmp[14]).t["JCFN/y"]);
      tmp7Result = tmp7(tmp2Result, obj2);
    }
    productLineResult = productLine(tmp[12]);
  }
}
