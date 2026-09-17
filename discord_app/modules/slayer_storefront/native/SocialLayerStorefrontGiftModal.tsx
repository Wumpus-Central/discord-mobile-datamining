// === Module 10978: SocialLayerStorefrontGiftModal ===

// Module 10978 (SocialLayerStorefrontGiftModal)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10951 */;
import SocialLayerStorefrontGiftProductDetailsDefault from "SocialLayerStorefrontGiftProductDetails" /* 11163 */;
import SocialLayerStorefrontGiftPurchaseSectionDefault from "SocialLayerStorefrontGiftPurchaseSection" /* 11164 */;
import noop from "module_19" /* 19 */;
import SKUStore from "SKUStore" /* 5598 */;

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
  const items = [analyticsLocations2];
  const items1 = [skuId];
  applicationId = skuId(applicationId[4]).useStateFromStores(items, () => SKUStore.get(skuId), items1);
  let tmp2 = giftingOrigin;
  const items2 = [];
  const obj = skuId(applicationId[4]);
  const tmp3 = giftingOrigin(applicationId[5]);
  items2[HermesBuiltin.arraySpread(analyticsLocations, 0)] = giftingOrigin(applicationId[6]).SLAYER_STOREFRONT_NATIVE_GIFT_MODAL;
  analyticsLocations2 = tmp3(items2).analyticsLocations;
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  if (obj2.isIOS()) {
    let GOOGLE = constants.APPLE_ADVANCED_COMMERCE;
    let APPLE_ADVANCED_COMMERCE = constants;
  } else {
    GOOGLE = constants.GOOGLE;
    APPLE_ADVANCED_COMMERCE = constants;
  }
  const GiftACOMOrderExperiment = productLine(tmp[8]).GiftACOMOrderExperiment;
  let enabled = GiftACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontGiftModal" }).enabled;
  tmp2(tmp[9])(() => {
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
      obj5.onOrderRetryCancellation = productLine(tmp[11]).closeSocialLayerStorefrontGiftModal;
      enabled = { is_gift: true, location_stack: analyticsLocations2, payment_type: "sku", sku_id: skuId, sku_type: null, sku_product_line: null, application_id: null };
      ({ type: obj3.sku_type, productLine } = applicationId);
      enabled.sku_product_line = productLine;
      applicationId = applicationId.applicationId;
      enabled.application_id = applicationId;
      obj5.checkoutAnalyticsFields = enabled;
      tmp2 = tmp2(tmp[17]);
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
      obj4.children = jsx(tmp2(tmp[16]), { paymentGateway: GOOGLE, orderRequired: null, skuIds: null, isGift: true, activeSubscription: null, onOrderRetryCancellation: null, checkoutAnalyticsFields: null, analyticsInitialStep: "gift_customization", children: null }, skuId);
      let tmp7Result = jsx(productLine(tmp[15]).NativePaymentContextProvider, { skuIDs: [], activeSubscription: null, children: null });
      const tmp2Result = tmp2(tmp[16]);
    } else {
      const obj7 = { onDismiss: onGiftModalDismiss, title: null };
      const intl = productLine(tmp[14]).intl;
      obj7.title = intl.string(productLine(tmp[14]).t["JCFN/y"]);
      tmp7Result = jsx(tmp2(tmp[13]), { onDismiss: onGiftModalDismiss, title: null });
      const tmp2Result2 = tmp2(tmp[13]);
    }
    productLineResult = productLine(tmp[12]);
  }
  obj2 = skuId(applicationId[7]);
};