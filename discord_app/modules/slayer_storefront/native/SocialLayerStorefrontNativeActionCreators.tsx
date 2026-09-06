// === Module 10797: SocialLayerStorefrontNativeActionCreators ===

// Module 10797 (SocialLayerStorefrontNativeActionCreators)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef3417 from "module_3417" /* 3417 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4231 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10798 */;
import redirectToSlayerStorefrontWebDefault from "redirectToSlayerStorefrontWeb" /* 10803 */;
import SKUStore from "SKUStore" /* 5510 */;

require = fn;
const jsx = fn(21).jsx;
let c5 = "social-layer-storefront-product-details-native-modal";
let c6 = "social-layer-storefront-native-gift-modal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export const openSocialLayerStorefrontUnsupportedOnMobileAlert = function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  const obj = { title: null, body: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3417.XjhkM5);
  const intl2 = util.intl;
  obj.body = intl2.string(_modDef3417.NBFa62);
  obj.show(obj);
};
export const openSocialLayerStorefrontProductDetailsModal = function openSocialLayerStorefrontProductDetailsModal(merged) {
  const socialLayerStorefrontConfig = SocialLayerStorefrontActionCreators.fetchSocialLayerStorefrontConfig();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10799, dependencyMap.paths), merged, c5, { presentation: "modal" });
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  ModalActionCreatorsDefault.popWithKey(c5);
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(skuId) {
  let obj = BillingPlatformUtils;
  if (obj.isSocialLayerStorefrontGiftingSupported()) {
    let tmp3Result = ModalActionCreatorsDefault;
    tmp3Result.pushLazy(asyncRequireImpl(10824, dependencyMap.paths), skuId, c6);
  } else {
    tmp3Result = redirectToSlayerStorefrontWebDefault;
    value = SKUStore.get(skuId.skuId);
    let applicationId;
    if (value != null) {
      applicationId = value.applicationId;
    }
    obj = { applicationId, skuId: skuId.skuId, source: "openSocialLayerStorefrontGiftModal" };
    tmp3Result(obj);
  }
};
export const closeSocialLayerStorefrontGiftModal = function closeSocialLayerStorefrontGiftModal() {
  ModalActionCreatorsDefault.popWithKey(c6);
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  closure_0 = arg0;
  const obj = {
    importer() {
      return asyncRequireImpl(11005, dependencyMap.paths).then((SocialLayerStorefrontProductSelfPurchaseSuccessModal) => {
        closure_0 = SocialLayerStorefrontProductSelfPurchaseSuccessModal.SocialLayerStorefrontProductSelfPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_2_0);
          const merged1 = Object.assign(arg0);
          return <closure_0 />;
        };
      });
    }
  };
  return obj.openLazy(obj);
};
export const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = function openSocialLayerStorefrontProductGiftPurchaseSuccessModal(arg0) {
  closure_0 = arg0;
  const obj = {
    importer() {
      return asyncRequireImpl(11005, dependencyMap.paths).then((SocialLayerStorefrontProductGiftPurchaseSuccessModal) => {
        closure_0 = SocialLayerStorefrontProductGiftPurchaseSuccessModal.SocialLayerStorefrontProductGiftPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_2_0);
          const merged1 = Object.assign(arg0);
          return <closure_0 />;
        };
      });
    }
  };
  return obj.openLazy(obj);
};