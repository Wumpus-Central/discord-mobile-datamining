// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/02123_asyncRequireImpl.js";
import BillingPlatformUtils from "../../device/BillingPlatformUtils.tsx";
import _modDef3865 from "../intl/SlayerStorefront.messages.js";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import WishlistActionCreatorsDefault from "../../wishlists/WishlistActionCreators.tsx";
import SocialLayerStorefrontActionCreators from "../SocialLayerStorefrontActionCreators.tsx";
import redirectToSlayerStorefrontWebDefault from "redirectToSlayerStorefrontWeb.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import WishlistStore from "../../wishlists/WishlistStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";

require = fn;
let closure_11 = async function _toggleSocialLayerStorefrontWishlist(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          id = id.getId();
          let firstWishlistId = null;
          if (null != id) {
            firstWishlistId = firstWishlistId.getFirstWishlistId(id);
          }
          if (null != firstWishlistId) {
            if (WishlistStore.hasSkuId(firstWishlistId, closure_0)) {
              c2 = 2;
              c1 = 1;
              const obj6 = {
                value: WishlistActionCreatorsDefault.removeSkuFromWishlist(firstWishlistId, closure_0),
                done: false,
              };
              return obj6;
            }
          }
          c2 = 1;
          c1 = 1;
          const obj7 = { value: WishlistActionCreatorsDefault.addSkuToWishlist(closure_0), done: false };
          return obj7;
        }
      } else {
        if (1 === tmp4) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp12) {
      c1 = tmp;
      throw tmp12;
    }
  }
};
const jsx = fn(21).jsx;
let c9 = "social-layer-storefront-product-details-native-modal";
let c10 = "social-layer-storefront-native-gift-modal";
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontNativeActionCreators.tsx",
);

export const SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY = "social-layer-storefront-product-details-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_MODAL_KEY = "social-layer-storefront-native-gift-modal";
export const SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY =
  "social-layer-storefront-self-purchase-success-native-modal";
export const SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY =
  "social-layer-storefront-gift-purchase-success-native-modal";
export function openSocialLayerStorefrontUnsupportedOnMobileAlert() {
  const obj2 = { title: null, body: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3865.XjhkM5);
  const intl2 = util.intl;
  obj2.body = intl2.string(_modDef3865.NBFa62);
  actions_AlertActionCreatorsDefault.show(obj2);
}
export function toggleSocialLayerStorefrontWishlist() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function openSocialLayerStorefrontProductDetailsModal(merged) {
  const socialLayerStorefrontConfig = SocialLayerStorefrontActionCreators.fetchSocialLayerStorefrontConfig();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10849, dependencyMap.paths), merged, c9, {
    presentation: "modal",
  });
}
export function closeSocialLayerStorefrontProductDetailsModal() {
  ModalActionCreatorsDefault.popWithKey(c9);
}
export function openSocialLayerStorefrontGiftModal(skuId) {
  if (obj.isSocialLayerStorefrontGiftingSupported()) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10869, dependencyMap.paths), skuId, c10);
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
}
export function closeSocialLayerStorefrontGiftModal() {
  ModalActionCreatorsDefault.popWithKey(c10);
}
export function openSocialLayerStorefrontProductSelfPurchaseSuccessModal(arg0) {
  closure_0 = arg0;
  return actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(14637, dependencyMap.paths).then(
        (SocialLayerStorefrontProductSelfPurchaseSuccessModal) => {
          closure_0 =
            SocialLayerStorefrontProductSelfPurchaseSuccessModal.SocialLayerStorefrontProductSelfPurchaseSuccessModal;
          return (arg0) => {
            const merged = Object.assign(closure_2_0);
            const merged1 = Object.assign(arg0);
            return <closure_0 />;
          };
        },
      );
    },
    isDismissable: false,
  });
}
export function openSocialLayerStorefrontProductGiftPurchaseSuccessModal(arg0) {
  closure_0 = arg0;
  return actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(14637, dependencyMap.paths).then(
        (SocialLayerStorefrontProductGiftPurchaseSuccessModal) => {
          closure_0 =
            SocialLayerStorefrontProductGiftPurchaseSuccessModal.SocialLayerStorefrontProductGiftPurchaseSuccessModal;
          return (arg0) => {
            const merged = Object.assign(closure_2_0);
            const merged1 = Object.assign(arg0);
            return <closure_0 />;
          };
        },
      );
    },
    isDismissable: false,
  });
}
