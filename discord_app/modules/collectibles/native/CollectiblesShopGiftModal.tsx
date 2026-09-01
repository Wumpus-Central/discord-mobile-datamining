// discord_app/modules/collectibles/native/CollectiblesShopGiftModal.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../CollectiblesCategoryStore.tsx";
import { COLLECTIBLES_APPLICATION_ID as closure_5 } from "../../../Constants.tsx";
import { PaymentGateways } from "../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

let require = arg1;
function CollectiblesShopGiftModalContent(product) {
  product = product.product;
  require = product;
  ({ analyticsLocations, onGiftModalDismiss } = product);
  const giftingOrigin = product.giftingOrigin;
  ({ lockedRecipientUser, validateRecipient } = product);
  const GiftACOMOrderExperiment = require(giftingOrigin[5]).GiftACOMOrderExperiment;
  let obj = require(giftingOrigin[6]);
  if (obj.isIOS()) {
    let GOOGLE = tmp3.APPLE_ADVANCED_COMMERCE;
    let tmp4 = tmp3;
  } else {
    GOOGLE = tmp3.GOOGLE;
    tmp4 = tmp3;
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
  const callback = React.useCallback(() => {
    product(giftingOrigin[9]).closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {
    paymentGateway: GOOGLE,
    orderRequired: tmp5,
    skuIds: items1,
    isGift: true,
    activeSubscription: null,
    initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[8])(product),
    onOrderRetryCancellation: callback,
    checkoutAnalyticsFields: obj1,
    analyticsInitialStep: "gift_customization",
    children: null,
  };
  items1 = [product.skuId];
  obj1 = {
    is_gift: true,
    location_stack: analyticsLocations,
    payment_type: "sku",
    sku_id: product.skuId,
    application_id: closure_5,
  };
  const tmp7 = onGiftModalDismiss(giftingOrigin[8])(product);
  obj[9] = jsx(onGiftModalDismiss(giftingOrigin[12]), {
    skuId: product.skuId,
    analyticsLocations,
    lockedRecipientUser,
    onGiftModalDismiss,
    giftingOrigin,
    validateRecipient,
    renderProductDetails(arg0) {
      ({ recipientUser, isValidRecipient } = arg0);
      return closure_1_7(onGiftModalDismiss(giftingOrigin[13]), {
        product: closure_0,
        recipientUser,
        isValidRecipient,
        isGift: true,
      });
    },
    renderPurchaseSection(arg0) {
      ({ isPurchaseDisabled, giftOptions } = arg0);
      return closure_1_7(onGiftModalDismiss(giftingOrigin[14]), {
        product: closure_0,
        isPurchaseDisabled,
        giftOptions,
        giftingOrigin,
      });
    },
  });
  obj[2] = jsx(
    onGiftModalDismiss(giftingOrigin[11]),
    {
      paymentGateway: GOOGLE,
      orderRequired: tmp5,
      skuIds: items1,
      isGift: true,
      activeSubscription: null,
      initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[8])(product),
      onOrderRetryCancellation: callback,
      checkoutAnalyticsFields: obj1,
      analyticsInitialStep: "gift_customization",
      children: null,
    },
    product.skuId,
  );
  return jsx(require(giftingOrigin[10]).NativePaymentContextProvider, {
    paymentGateway: GOOGLE,
    orderRequired: tmp5,
    skuIds: items1,
    isGift: true,
    activeSubscription: null,
    initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[8])(product),
    onOrderRetryCancellation: callback,
    checkoutAnalyticsFields: obj1,
    analyticsInitialStep: "gift_customization",
    children: null,
  });
}
let result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default function CollectiblesShopGiftModal(skuId) {
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  let enabled;
  skuId = undefined;
  ({ lockedRecipientUser, giftingOrigin } = skuId);
  const GiftingBadgeExperiment = skuId(skuId[15]).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  const items = [enabled];
  const effect = React.useEffect(() => {
    if (enabled) {
      const badge = skuId(skuId[16]).fetchBadge(skuId(skuId[17]).BadgeId.GIFTING);
      const obj = skuId(skuId[16]);
    }
  }, items);
  let obj = skuId(skuId[18]);
  const items1 = [closure_4];
  const items2 = [skuId];
  const stateFromStores = obj.useStateFromStores(items1, () => closure_1_4.getProduct(skuId), items2);
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
        product: null,
        analyticsLocations: null,
        lockedRecipientUser: null,
        onGiftModalDismiss: null,
        giftingOrigin: null,
        validateRecipient: null,
      };
      obj[0] = stateFromStores;
      obj[1] = tmp6(items3).analyticsLocations;
      obj[2] = lockedRecipientUser;
      obj[3] = onGiftModalDismiss;
      obj[4] = giftingOrigin;
      obj[5] = tmp9;
      let tmp10Result = tmp10(CollectiblesShopGiftModalContent, obj);
    } else {
      obj = { onDismiss: null, title: null };
      obj[0] = onGiftModalDismiss;
      const intl = tmp(tmp2[24]).intl;
      obj[1] = intl.string(tmp(tmp2[24]).t["JCFN/y"]);
      tmp10Result = tmp10(tmp5(tmp2[23]), obj);
      const tmp5Result = tmp5(tmp2[23]);
    }
    tmpResult = tmp(tmp2[7]);
  }
}
