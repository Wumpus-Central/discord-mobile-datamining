// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx
import { jsx } from "jsxProd";

let c4 = "social-layer-storefront-product-details-native-modal";
let c5 = "social-layer-storefront-native-gift-modal";
const result = require("getSystemLocale").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export const openSocialLayerStorefrontUnsupportedOnMobileAlert = function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  let obj = require("../../../actions/native/AlertActionCreators.tsx");
  obj = { title: null, body: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../intl/SlayerStorefront.messages.js").XjhkM5);
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../intl/SlayerStorefront.messages.js").NBFa62);
  obj.show(obj);
};
export const openSocialLayerStorefrontProductDetailsModal = function openSocialLayerStorefrontProductDetailsModal(closure_0) {
  let obj = require("../experiments/SocialLayerStorefrontMobilePurchasingExperiment.tsx") /* apexExperiment */;
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_product_details_modal" })) {
    const socialLayerStorefrontConfig = tmp(7678).fetchSocialLayerStorefrontConfig();
    const obj5 = require("../../../actions/ModalActionCreators.tsx");
    obj5.pushLazy(tmp(1959)(10005, dependencyMap.paths), closure_0, c4, { presentation: "modal" });
    const tmpResult = tmp(7678);
  } else {
    obj = { title: null, body: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(require("../intl/SlayerStorefront.messages.js").XjhkM5);
    const intl2 = tmp(1236).intl;
    obj[1] = intl2.string(require("../intl/SlayerStorefront.messages.js").NBFa62);
    require("../../../actions/native/AlertActionCreators.tsx").show(obj);
    const obj2 = require("../../../actions/native/AlertActionCreators.tsx");
  }
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  require("../../../actions/ModalActionCreators.tsx").popWithKey(c4);
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(closure_0) {
  if (obj.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "social_layer_storefront_gift_modal" })) {
    require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(10014, dependencyMap.paths), closure_0, c5);
    const obj2 = require("../../../actions/ModalActionCreators.tsx");
  }
};
export const closeSocialLayerStorefrontGiftModal = function closeSocialLayerStorefrontGiftModal() {
  require("../../../actions/ModalActionCreators.tsx").popWithKey(c5);
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  let closure_0 = arg0;
  let obj = require("../../../actions/native/AlertActionCreators.tsx");
  obj = {
    importer() {
      return callback(outer1_2[8])(outer1_2[10], outer1_2.paths).then((SocialLayerStorefrontProductSelfPurchaseSuccessModal) => {
        let closure_0 = SocialLayerStorefrontProductSelfPurchaseSuccessModal.SocialLayerStorefrontProductSelfPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_0);
          const merged1 = Object.assign(arg0);
          return outer2_3(closure_0, {});
        };
      });
    }
  };
  return obj.openLazy(obj);
};
export const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = function openSocialLayerStorefrontProductGiftPurchaseSuccessModal(arg0) {
  let closure_0 = arg0;
  let obj = require("../../../actions/native/AlertActionCreators.tsx");
  obj = {
    importer() {
      return callback(outer1_2[8])(outer1_2[10], outer1_2.paths).then((SocialLayerStorefrontProductGiftPurchaseSuccessModal) => {
        let closure_0 = SocialLayerStorefrontProductGiftPurchaseSuccessModal.SocialLayerStorefrontProductGiftPurchaseSuccessModal;
        return (arg0) => {
          const merged = Object.assign(closure_0);
          const merged1 = Object.assign(arg0);
          return outer2_3(closure_0, {});
        };
      });
    }
  };
  return obj.openLazy(obj);
};