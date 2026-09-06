// discord_app/modules/collectibles/native/CollectiblesShopGiftModal.tsx
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import BadgeId from "../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import BadgeDirectoryActionCreators from "../../badges/BadgeDirectoryActionCreators.tsx";
import openGiftModal from "openGiftModal.tsx";
import CollectiblesShopCheckoutDetailsDefault from "CollectiblesShopCheckoutDetails.tsx";
import CollectiblesShopGiftPurchaseSectionDefault from "CollectiblesShopGiftPurchaseSection.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

require = fn;
function CollectiblesShopGiftModalContent(product) {
  product = product.product;
  require = product;
  ({ analyticsLocations, onGiftModalDismiss } = product);
  const giftingOrigin = product.giftingOrigin;
  ({ lockedRecipientUser, validateRecipient } = product);
  const GiftACOMOrderExperiment = require("ACOMExperiments").GiftACOMOrderExperiment;
  let obj = require("PlatformUtils");
  if (obj.isIOS()) {
    let GOOGLE = PaymentGateways.APPLE_ADVANCED_COMMERCE;
    let tmp4 = PaymentGateways;
  } else {
    GOOGLE = PaymentGateways.GOOGLE;
    tmp4 = PaymentGateways;
  }
  let tmp5 =
    GOOGLE === tmp4.APPLE_ADVANCED_COMMERCE &&
    GiftACOMOrderExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  if (!tmp5) {
    let result = GOOGLE === tmp4.GOOGLE;
    if (result) {
      result = tmp(tmp2[7]).isGooglePlayBillingSupported();
      const tmpResult = tmp(tmp2[7]);
    }
    tmp5 = result;
  }
  const items = [onGiftModalDismiss];
  const callback = noop.useCallback(() => {
    openGiftModal.closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {
    paymentGateway: GOOGLE,
    orderRequired: tmp5,
    skuIds: null,
    isGift: true,
    activeSubscription: null,
    initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[8])(product),
    onOrderRetryCancellation: callback,
    checkoutAnalyticsFields: {
      is_gift: true,
      location_stack: analyticsLocations,
      payment_type: "sku",
      sku_id: product.skuId,
      application_id,
    },
    analyticsInitialStep: "gift_customization",
    children: null,
  };
  const items1 = [product.skuId];
  obj.skuIds = items1;
  const obj1 = {
    is_gift: true,
    location_stack: analyticsLocations,
    payment_type: "sku",
    sku_id: product.skuId,
    application_id,
  };
  const tmp7 = onGiftModalDismiss(giftingOrigin[8])(product);
  obj.children = jsx(onGiftModalDismiss(giftingOrigin[12]), {
    skuId: product.skuId,
    analyticsLocations,
    lockedRecipientUser,
    onGiftModalDismiss,
    giftingOrigin,
    validateRecipient,
    renderProductDetails(arg0) {
      ({ recipientUser, isValidRecipient } = arg0);
      return jsx(CollectiblesShopCheckoutDetailsDefault, { product, recipientUser, isValidRecipient, isGift: true });
    },
    renderPurchaseSection(arg0) {
      ({ isPurchaseDisabled, giftOptions } = arg0);
      return jsx(CollectiblesShopGiftPurchaseSectionDefault, {
        product,
        isPurchaseDisabled,
        giftOptions,
        giftingOrigin,
      });
    },
  });
  obj.children = jsx(
    onGiftModalDismiss(giftingOrigin[11]),
    {
      paymentGateway: GOOGLE,
      orderRequired: tmp5,
      skuIds: null,
      isGift: true,
      activeSubscription: null,
      initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[8])(product),
      onOrderRetryCancellation: callback,
      checkoutAnalyticsFields: {
        is_gift: true,
        location_stack: analyticsLocations,
        payment_type: "sku",
        sku_id: product.skuId,
        application_id,
      },
      analyticsInitialStep: "gift_customization",
      children: null,
    },
    product.skuId,
  );
  return jsx(require("NativePaymentContext").NativePaymentContextProvider, {
    paymentGateway: GOOGLE,
    orderRequired: tmp5,
    skuIds: null,
    isGift: true,
    activeSubscription: null,
    initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[8])(product),
    onOrderRetryCancellation: callback,
    checkoutAnalyticsFields: {
      is_gift: true,
      location_stack: analyticsLocations,
      payment_type: "sku",
      sku_id: product.skuId,
      application_id,
    },
    analyticsInitialStep: "gift_customization",
    children: null,
  });
}
const application_id = fn(1074).COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = fn(1085).PaymentGateways;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default function CollectiblesShopGiftModal(skuId) {
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  skuId = undefined;
  ({ lockedRecipientUser, giftingOrigin } = skuId);
  const GiftingBadgeExperiment = skuId(skuId[15]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  const items = [enabled];
  const effect = noop.useEffect(() => {
    if (enabled) {
      const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items);
  let obj = skuId(skuId[18]);
  const items1 = [CollectiblesCategoryStore];
  const items2 = [skuId];
  const stateFromStores = obj.useStateFromStores(items1, () => CollectiblesCategoryStore.getProduct(skuId), items2);
  const items3 = [];
  const tmp5 = enabled;
  const tmp6 = enabled(skuId[19]);
  items3[HermesBuiltin.arraySpread(analyticsLocations, 0)] = enabled(skuId[20]).COLLECTIBLES_MOBILE_GIFT_MODAL;
  skuId = undefined;
  if (stateFromStores != null) {
    skuId = stateFromStores.skuId;
  }
  [][0] = skuId;
  if (null == stateFromStores) {
    return null;
  } else {
    if (tmpResult.isCollectibleGiftingSupported()) {
      obj = {
        product: stateFromStores,
        analyticsLocations: tmp6(items3).analyticsLocations,
        lockedRecipientUser,
        onGiftModalDismiss,
        giftingOrigin,
        validateRecipient: tmp9,
      };
      let tmp10Result = (
        <CollectiblesShopGiftModalContent
          product={stateFromStores}
          analyticsLocations={tmp6(items3).analyticsLocations}
          lockedRecipientUser={lockedRecipientUser}
          onGiftModalDismiss={onGiftModalDismiss}
          giftingOrigin={giftingOrigin}
          validateRecipient={tmp9}
        />
      );
    } else {
      obj = { onDismiss: onGiftModalDismiss, title: null };
      const intl = tmp(tmp2[24]).intl;
      obj.title = intl.string(tmp(tmp2[24]).t["JCFN/y"]);
      tmp10Result = jsx(tmp5(tmp2[23]), { onDismiss: onGiftModalDismiss, title: null });
      const tmp5Result = tmp5(tmp2[23]);
    }
    tmpResult = tmp(tmp2[7]);
  }
  const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
}
