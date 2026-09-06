// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators.tsx";
import SocialLayerStorefrontGiftProductDetailsDefault from "SocialLayerStorefrontGiftProductDetails.tsx";
import SocialLayerStorefrontGiftPurchaseSectionDefault from "SocialLayerStorefrontGiftPurchaseSection.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, PaymentGateways: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftModal.tsx");

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
  applicationId = obj.useStateFromStores(items, () => SKUStore.get(skuId), items1);
  let tmp2 = giftingOrigin;
  const items2 = [];
  const tmp3 = giftingOrigin(applicationId[5]);
  items2[HermesBuiltin.arraySpread(analyticsLocations, 0)] = giftingOrigin(
    applicationId[6],
  ).SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
  analyticsLocations2 = tmp3(items2).analyticsLocations;
  let obj1 = skuId(applicationId[7]);
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
    const obj = {
      location_stack: analyticsLocations2,
      type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY,
      sku_id: skuId,
      application_id: null,
    };
    applicationId = undefined;
    if (applicationId != null) {
      applicationId = applicationId.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(constants.OPEN_MODAL, obj);
  });
  if (null == applicationId) {
    return null;
  } else {
    if (productLineResult.isSocialLayerStorefrontGiftingSupported()) {
      obj = { skuIDs: [], activeSubscription: null, children: null };
      obj = {
        paymentGateway: GOOGLE,
        orderRequired: null,
        skuIds: null,
        isGift: true,
        activeSubscription: null,
        onOrderRetryCancellation: null,
        checkoutAnalyticsFields: null,
        analyticsInitialStep: "gift_customization",
        children: null,
      };
      let tmp2Result = tmp2(tmp[16]);
      if (enabled) {
        APPLE_ADVANCED_COMMERCE = APPLE_ADVANCED_COMMERCE.APPLE_ADVANCED_COMMERCE;
        enabled = GOOGLE === APPLE_ADVANCED_COMMERCE;
      }
      obj.orderRequired = enabled;
      const items3 = [skuId];
      obj.skuIds = items3;
      obj.onOrderRetryCancellation = productLine(tmp[11]).closeSocialLayerStorefrontGiftModal;
      enabled = {
        is_gift: true,
        location_stack: analyticsLocations2,
        payment_type: "sku",
        sku_id: skuId,
        sku_type: null,
        sku_product_line: null,
        application_id: null,
      };
      ({ type: obj3.sku_type, productLine } = applicationId);
      enabled.sku_product_line = productLine;
      applicationId = applicationId.applicationId;
      enabled.application_id = applicationId;
      obj.checkoutAnalyticsFields = enabled;
      tmp2 = tmp2(tmp[17]);
      obj1 = {
        skuId,
        analyticsLocations: analyticsLocations2,
        lockedRecipientUser: skuId.lockedRecipientUser,
        onGiftModalDismiss,
        giftingOrigin,
        validateRecipient() {
          return Promise.resolve(true);
        },
        renderProductDetails: null,
        renderPurchaseSection: null,
      };
      giftingOrigin = function renderProductDetails() {
        return jsx(SocialLayerStorefrontGiftProductDetailsDefault, { sku: applicationId });
      };
      obj1.renderProductDetails = giftingOrigin;
      obj1.renderPurchaseSection = function renderPurchaseSection(arg0) {
        ({ isPurchaseDisabled, giftOptions } = arg0);
        return jsx(SocialLayerStorefrontGiftPurchaseSectionDefault, {
          skuId,
          sku: applicationId,
          isPurchaseDisabled,
          giftOptions,
          giftingOrigin,
          analyticsLocations: analyticsLocations2,
        });
      };
      tmp = tmp7(tmp2, obj1);
      obj.children = tmp;
      obj.children = tmp7(tmp2Result, obj, skuId);
      let tmp7Result = tmp7(productLine(tmp[15]).NativePaymentContextProvider, obj);
    } else {
      const obj2 = { onDismiss: onGiftModalDismiss, title: null };
      tmp2Result = tmp2(tmp[13]);
      const intl = productLine(tmp[14]).intl;
      obj2.title = intl.string(productLine(tmp[14]).t["JCFN/y"]);
      tmp7Result = tmp7(tmp2Result, obj2);
    }
    productLineResult = productLine(tmp[12]);
  }
}
