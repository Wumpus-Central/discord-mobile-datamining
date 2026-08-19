// === Module 10351: SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY ===

// Module 10351 (SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import messagesProxyDefault from "messagesProxy" /* 3271 */;
import _modDef4656 from "module_4656" /* 4656 */;
import _modDef5260 from "module_5260" /* 5260 */;
import _fetchSocialLayerStorefront from "_fetchSocialLayerStorefront" /* 8041 */;
import apexExperiment from "apexExperiment" /* 8323 */;

const jsx = jsxProd.jsx;
let c4 = "social-layer-storefront-product-details-native-modal";
let c5 = "social-layer-storefront-native-gift-modal";
const result = obj132.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export const openSocialLayerStorefrontUnsupportedOnMobileAlert = function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  const obj = { title: null, body: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(messagesProxyDefault.XjhkM5);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(messagesProxyDefault.NBFa62);
  obj.show(obj);
};
export const openSocialLayerStorefrontProductDetailsModal = function openSocialLayerStorefrontProductDetailsModal(closure_0) {
  let obj = apexExperiment;
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_product_details_modal" })) {
    const socialLayerStorefrontConfig = _fetchSocialLayerStorefront.fetchSocialLayerStorefrontConfig();
    const obj5 = _modDef5260;
    obj5.pushLazy(asyncRequireImpl(10352, dependencyMap.paths), closure_0, c4, { presentation: "modal" });
    const tmpResult = _fetchSocialLayerStorefront;
  } else {
    obj = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(messagesProxyDefault.XjhkM5);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(messagesProxyDefault.NBFa62);
    _modDef4656.show(obj);
  }
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  _modDef5260.popWithKey(c4);
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(closure_0) {
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_gift_modal" })) {
    _modDef5260.pushLazy(asyncRequireImpl(10361, dependencyMap.paths), closure_0, c5);
  }
  obj = apexExperiment;
};
export const closeSocialLayerStorefrontGiftModal = function closeSocialLayerStorefrontGiftModal() {
  _modDef5260.popWithKey(c5);
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  closure_0 = arg0;
  const obj = {
    importer() {
      return callback(dependencyMap[8])(dependencyMap[10], dependencyMap.paths).then((result) => {
        closure_0 = result.SocialLayerStorefrontProductSelfPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_0);
          const merged1 = Object.assign(arg0);
          return closure_2_3(closure_0, {});
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
      return callback(dependencyMap[8])(dependencyMap[10], dependencyMap.paths).then((result) => {
        closure_0 = result.SocialLayerStorefrontProductGiftPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_0);
          const merged1 = Object.assign(arg0);
          return closure_2_3(closure_0, {});
        };
      });
    }
  };
  return obj.openLazy(obj);
};