// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import intl3 from "../../../intl/index.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import _modDef3593 from "../intl/SlayerStorefront.messages.js";
import BillingPlatformUtils from "../../device/BillingPlatformUtils.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import SocialLayerStorefrontActionCreators from "../SocialLayerStorefrontActionCreators.tsx";
import redirectToSlayerStorefrontWebDefault from "redirectToSlayerStorefrontWeb.tsx";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let c5 = "social-layer-storefront-product-details-native-modal";
let c6 = "social-layer-storefront-native-gift-modal";
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx",
);

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY =
  "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY =
  "social-layer-storefront-gift-purchase-success-native-modal";
export const openSocialLayerStorefrontUnsupportedOnMobileAlert =
  function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
    let intl;
    let intl2;
    const obj = { title: intl.string(_modDef3593.XjhkM5), body: intl2.string(_modDef3593.NBFa62) };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl3.intl;
    intl2 = intl3.intl;
    show(obj);
  };
export const openSocialLayerStorefrontProductDetailsModal = function openSocialLayerStorefrontProductDetailsModal(
  merged,
) {
  const obj = SocialLayerStorefrontActionCreators;
  const socialLayerStorefrontConfig = obj.fetchSocialLayerStorefrontConfig();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10533, dependencyMap.paths), merged, c5, { presentation: "modal" });
};
export const closeSocialLayerStorefrontProductDetailsModal = function closeSocialLayerStorefrontProductDetailsModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c5);
};
export const openSocialLayerStorefrontGiftModal = function openSocialLayerStorefrontGiftModal(skuId) {
  const obj = BillingPlatformUtils;
  if (obj.isSocialLayerStorefrontGiftingSupported()) {
    const tmp3Result = ModalActionCreatorsDefault;
    tmp3Result.pushLazy(asyncRequire(10553, dependencyMap.paths), skuId, c6);
  } else {
    const tmp3Result2 = redirectToSlayerStorefrontWebDefault;
    const value = SKUStore.get(skuId.skuId);
    let applicationId;
    if (value != null) {
      applicationId = value.applicationId;
    }
    const obj2 = { applicationId, skuId: skuId.skuId, source: "openSocialLayerStorefrontGiftModal" };
    tmp3Result2(obj2);
  }
};
export const closeSocialLayerStorefrontGiftModal = function closeSocialLayerStorefrontGiftModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c6);
};
export const openSocialLayerStorefrontProductSelfPurchaseSuccessModal =
  function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
    let closure_0 = arg0;
    const obj = actions_AlertActionCreatorsDefault;
    const obj2 = {
      importer() {
        const promise = asyncRequire(10741, dependencyMap.paths);
        return promise.then((SocialLayerStorefrontProductSelfPurchaseSuccessModal) => {
          closure_0 =
            SocialLayerStorefrontProductSelfPurchaseSuccessModal.SocialLayerStorefrontProductSelfPurchaseSuccessModal;
          return (arg0) => {
            const merged = Object.assign(closure_2_0);
            const merged1 = Object.assign(arg0);
            return <closure_0 />;
          };
        });
      },
      isDismissable: false,
    };
    return obj.openLazy(obj2);
  };
export const openSocialLayerStorefrontProductGiftPurchaseSuccessModal =
  function openSocialLayerStorefrontProductGiftPurchaseSuccessModal(arg0) {
    let closure_0 = arg0;
    const obj = actions_AlertActionCreatorsDefault;
    const obj2 = {
      importer() {
        const promise = asyncRequire(10741, dependencyMap.paths);
        return promise.then((SocialLayerStorefrontProductGiftPurchaseSuccessModal) => {
          closure_0 =
            SocialLayerStorefrontProductGiftPurchaseSuccessModal.SocialLayerStorefrontProductGiftPurchaseSuccessModal;
          return (arg0) => {
            const merged = Object.assign(closure_2_0);
            const merged1 = Object.assign(arg0);
            return <closure_0 />;
          };
        });
      },
      isDismissable: false,
    };
    return obj.openLazy(obj2);
  };
