// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import messagesProxyDefault from "../intl/SlayerStorefront.messages.js";
import isPremiumGiftingSupported from "../../device/BillingPlatformUtils.tsx";
import _modDef4611 from "../../../actions/ModalActionCreators.tsx";
import _modDef4745 from "../../../actions/native/AlertActionCreators.tsx";
import _fetchSocialLayerStorefront from "../SocialLayerStorefrontActionCreators.tsx";
import closure_3 from "../../../stores/game_store/SKUStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let c5 = "social-layer-storefront-product-details-native-modal";
let c6 = "social-layer-storefront-native-gift-modal";
const result = require("set").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx");

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY = "social-layer-storefront-gift-purchase-success-native-modal";
export const openSocialLayerStorefrontUnsupportedOnMobileAlert = function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  let obj = _modDef4745;
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
  _modDef4611.pushLazy(asyncRequireImpl(10242, dependencyMap.paths), closure_0, c5, { presentation: "modal" });
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  _modDef4611.popWithKey(c5);
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(skuId) {
  let obj = isPremiumGiftingSupported;
  if (obj.isSocialLayerStorefrontGiftingSupported()) {
    let tmp3Result = tmp3(4611);
    tmp3Result.pushLazy(asyncRequireImpl(10252, dependencyMap.paths), skuId, c6);
  } else {
    tmp3Result = tmp3(10248);
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
  _modDef4611.popWithKey(c6);
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  closure_0 = arg0;
  let obj = _modDef4745;
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
  let obj = _modDef4745;
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