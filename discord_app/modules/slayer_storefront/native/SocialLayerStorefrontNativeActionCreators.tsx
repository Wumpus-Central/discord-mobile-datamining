// === Module 10943: SocialLayerStorefrontNativeActionCreators ===

// Module 10943 (SocialLayerStorefrontNativeActionCreators)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import _modDef3461 from "module_3461" /* 3461 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4308 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4841 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4983 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10944 */;
import redirectToSlayerStorefrontWebDefault from "redirectToSlayerStorefrontWeb" /* 10949 */;
import SKUStore from "SKUStore" /* 5596 */;

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
  const obj2 = { title: null, body: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3461.XjhkM5);
  const intl2 = util.intl;
  obj2.body = intl2.string(_modDef3461.NBFa62);
  actions_AlertActionCreatorsDefault.show(obj2);
};
export const openSocialLayerStorefrontProductDetailsModal = function openSocialLayerStorefrontProductDetailsModal(merged) {
  const socialLayerStorefrontConfig = SocialLayerStorefrontActionCreators.fetchSocialLayerStorefrontConfig();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10945, dependencyMap.paths), merged, c5, { presentation: "modal" });
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  ModalActionCreatorsDefault.popWithKey(c5);
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(skuId) {
  if (obj.isSocialLayerStorefrontGiftingSupported()) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10970, dependencyMap.paths), skuId, c6);
    const tmp3Result = ModalActionCreatorsDefault;
  } else {
    value = SKUStore.get(skuId.skuId);
    let applicationId;
    if (value != null) {
      applicationId = value.applicationId;
    }
    const obj2 = { applicationId, skuId: skuId.skuId, source: "openSocialLayerStorefrontGiftModal" };
    redirectToSlayerStorefrontWebDefault(obj2);
    const tmp3Result2 = redirectToSlayerStorefrontWebDefault;
  }
  obj = BillingPlatformUtils;
};
export const closeSocialLayerStorefrontGiftModal = function closeSocialLayerStorefrontGiftModal() {
  ModalActionCreatorsDefault.popWithKey(c6);
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  closure_0 = arg0;
  return actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(11158, dependencyMap.paths).then((SocialLayerStorefrontProductSelfPurchaseSuccessModal) => {
        closure_0 = SocialLayerStorefrontProductSelfPurchaseSuccessModal.SocialLayerStorefrontProductSelfPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_2_0);
          const merged1 = Object.assign(arg0);
          return <closure_0 />;
        };
      });
    }
  });
};
export const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = function openSocialLayerStorefrontProductGiftPurchaseSuccessModal(arg0) {
  closure_0 = arg0;
  return actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(11158, dependencyMap.paths).then((SocialLayerStorefrontProductGiftPurchaseSuccessModal) => {
        closure_0 = SocialLayerStorefrontProductGiftPurchaseSuccessModal.SocialLayerStorefrontProductGiftPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_2_0);
          const merged1 = Object.assign(arg0);
          return <closure_0 />;
        };
      });
    }
  });
};