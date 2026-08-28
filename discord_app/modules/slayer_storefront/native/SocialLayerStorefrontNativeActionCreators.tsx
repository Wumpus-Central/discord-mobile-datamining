// === Module 10510: SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY ===

// Module 10510 (SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import messagesProxyDefault from "messagesProxy" /* 3340 */;
import isPremiumGiftingSupported from "isPremiumGiftingSupported" /* 4121 */;
import _modDef4689 from "module_4689" /* 4689 */;
import _modDef4823 from "module_4823" /* 4823 */;
import _fetchSocialLayerStorefront from "_fetchSocialLayerStorefront" /* 8441 */;
import closure_3 from "addSku" /* 4495 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let c5 = "social-layer-storefront-product-details-native-modal";
let c6 = "social-layer-storefront-native-gift-modal";
const result = require("set").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export const openSocialLayerStorefrontUnsupportedOnMobileAlert = function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  let obj = _modDef4823;
  obj = { title: null, body: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(messagesProxyDefault.XjhkM5);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(messagesProxyDefault.NBFa62);
  obj.show(obj);
};
export const openSocialLayerStorefrontProductDetailsModal = function openSocialLayerStorefrontProductDetailsModal(closure_0) {
  const socialLayerStorefrontConfig = _fetchSocialLayerStorefront.fetchSocialLayerStorefrontConfig();
  const obj = _fetchSocialLayerStorefront;
  _modDef4689.pushLazy(asyncRequireImpl(10511, dependencyMap.paths), closure_0, c5, { presentation: "modal" });
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  _modDef4689.popWithKey(c5);
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(skuId) {
  let obj = isPremiumGiftingSupported;
  if (obj.isSocialLayerStorefrontGiftingSupported()) {
    let tmp3Result = tmp3(4689);
    tmp3Result.pushLazy(asyncRequireImpl(10534, dependencyMap.paths), skuId, c6);
  } else {
    tmp3Result = tmp3(10515);
    const value = closure_3.get(skuId.skuId);
    let applicationId;
    if (value != null) {
      applicationId = value.applicationId;
    }
    obj = { applicationId: null, skuId: null, source: "openSocialLayerStorefrontGiftModal" };
    obj[0] = applicationId;
    obj[1] = skuId.skuId;
    tmp3Result(obj);
  }
};
export const closeSocialLayerStorefrontGiftModal = function closeSocialLayerStorefrontGiftModal() {
  _modDef4689.popWithKey(c6);
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  closure_0 = arg0;
  let obj = _modDef4823;
  obj = {
    importer() {
      return callback(closure_1_2[8])(closure_1_2[12], closure_1_2.paths).then((SocialLayerStorefrontProductSelfPurchaseSuccessModal) => {
        closure_0 = SocialLayerStorefrontProductSelfPurchaseSuccessModal.SocialLayerStorefrontProductSelfPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_0);
          const merged1 = Object.assign(arg0);
          return closure_2_4(closure_0, {});
        };
      });
    }
  };
  return obj.openLazy(obj);
};
export const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = function openSocialLayerStorefrontProductGiftPurchaseSuccessModal(arg0) {
  closure_0 = arg0;
  let obj = _modDef4823;
  obj = {
    importer() {
      return callback(closure_1_2[8])(closure_1_2[12], closure_1_2.paths).then((SocialLayerStorefrontProductGiftPurchaseSuccessModal) => {
        closure_0 = SocialLayerStorefrontProductGiftPurchaseSuccessModal.SocialLayerStorefrontProductGiftPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_0);
          const merged1 = Object.assign(arg0);
          return closure_2_4(closure_0, {});
        };
      });
    }
  };
  return obj.openLazy(obj);
};