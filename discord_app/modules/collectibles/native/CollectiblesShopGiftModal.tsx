// discord_app/modules/collectibles/native/CollectiblesShopGiftModal.tsx
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../../design/components/Navigator/native/Navigator.native.tsx";
import openGiftModal from "openGiftModal.tsx";
import CollectiblesShopCheckoutDetailsDefault from "CollectiblesShopCheckoutDetails.tsx";
import CollectiblesShopGiftPurchaseSectionDefault from "CollectiblesShopGiftPurchaseSection.tsx";
import generated_NoResults from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
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
      result = tmp(tmp2[8]).isGooglePlayBillingSupported();
      const tmpResult = tmp(tmp2[8]);
    }
    tmp5 = result;
  }
  items = [onGiftModalDismiss];
  obj = require("PlatformUtils");
  const callback = noop.useCallback(() => {
    openGiftModal.closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  const obj2 = { skuIDs: [], activeSubscription: null, children: null };
  const obj3 = {
    paymentGateway: GOOGLE,
    orderRequired: tmp5,
    skuIds: null,
    isGift: true,
    activeSubscription: null,
    initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[9])(product),
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
  obj3.skuIds = items1;
  const obj4 = {
    is_gift: true,
    location_stack: analyticsLocations,
    payment_type: "sku",
    sku_id: product.skuId,
    application_id,
  };
  const tmp7 = onGiftModalDismiss(giftingOrigin[9])(product);
  obj3.children = jsx(onGiftModalDismiss(giftingOrigin[13]), {
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
  obj2.children = jsx(
    onGiftModalDismiss(giftingOrigin[12]),
    {
      paymentGateway: GOOGLE,
      orderRequired: tmp5,
      skuIds: null,
      isGift: true,
      activeSubscription: null,
      initialExternalGatewayFacet: onGiftModalDismiss(giftingOrigin[9])(product),
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
    skuIDs: [],
    activeSubscription: null,
    children: null,
  });
}
function CollectiblesShopGiftModalPlaceholder(arg0) {
  ({ isError: require, onGiftModalDismiss } = arg0);
  items = [onGiftModalDismiss];
  const callback = noop.useCallback(() => {
    openGiftModal.closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  let obj = { initialRouteName: "Placeholder", screens: null };
  let obj2 = { Placeholder: null };
  const obj3 = { title: null, headerLeft: null, render: null };
  let intl = util.intl;
  obj3.title = intl.string(util.t["JCFN/y"]);
  obj3.headerLeft = NavigatorHeader.getHeaderCloseButton(callback);
  obj3.render = function render() {
    if (closure_1_0) {
      const obj2 = { Illustration: generated_NoResults.NoResults, body: null };
      const intl = util.intl;
      obj2.body = intl.string(util.t.eAn6z2);
      let tmpResult = jsx(native.EmptyState, { Illustration: generated_NoResults.NoResults, body: null });
    } else {
      const obj = {
        style: { flex: 1, alignItems: "center", justifyContent: "center" },
        children: <React4 size="large" />,
      };
      tmpResult = (
        <hasOwnProperty style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <React4 size="large" />
        </hasOwnProperty>
      );
    }
    return tmpResult;
  };
  obj2.Placeholder = obj3;
  obj.screens = obj2;
  return jsx(Navigator.Navigator, { initialRouteName: "Placeholder", screens: null });
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const application_id = fn(1071).COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = fn(1082).PaymentGateways;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default function CollectiblesShopGiftModal(skuId) {
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  let skuId1;
  ({ lockedRecipientUser, giftingOrigin } = skuId);
  const effect = noop.useEffect(() => {
    const badge = skuId(6357).fetchBadge(skuId(6107).BadgeId.GIFTING);
  }, []);
  items = [CollectiblesCategoryStore];
  const items1 = [skuId];
  const stateFromStores = skuId(504).useStateFromStores(
    items,
    () => CollectiblesCategoryStore.getProduct(skuId),
    items1,
  );
  const obj = skuId(504);
  const items2 = [];
  const obj2 = skuId(11552);
  const obj3 = { needsCategory: false, seedCategoryStore: true, shouldFetchProduct: null == stateFromStores };
  const tmp5 = skuId1;
  const tmp6 = skuId1(6348);
  items2[HermesBuiltin.arraySpread(analyticsLocations, 0)] = skuId1(6349).COLLECTIBLES_MOBILE_GIFT_MODAL;
  skuId1 = undefined;
  if (stateFromStores != null) {
    skuId1 = stateFromStores.skuId;
  }
  [][0] = skuId1;
  if (null == stateFromStores) {
    const obj4 = { isError: "error" === obj2.useCollectiblesShopProduct(skuId, obj3).state, onGiftModalDismiss };
    let tmp15Result = (
      <CollectiblesShopGiftModalPlaceholder
        isError={"error" === obj2.useCollectiblesShopProduct(skuId, obj3).state}
        onGiftModalDismiss={onGiftModalDismiss}
      />
    );
  } else {
    if (tmp2Result.isCollectibleGiftingSupported()) {
      const obj5 = {
        product: stateFromStores,
        analyticsLocations: tmp6(items2).analyticsLocations,
        lockedRecipientUser,
        onGiftModalDismiss,
        giftingOrigin,
        validateRecipient: tmp9,
      };
      tmp15Result = (
        <CollectiblesShopGiftModalContent
          product={stateFromStores}
          analyticsLocations={tmp6(items2).analyticsLocations}
          lockedRecipientUser={lockedRecipientUser}
          onGiftModalDismiss={onGiftModalDismiss}
          giftingOrigin={giftingOrigin}
          validateRecipient={tmp9}
        />
      );
    } else {
      const obj6 = { onDismiss: onGiftModalDismiss, title: null };
      const intl = tmp2(1112).intl;
      obj6.title = intl.string(tmp2(1112).t["JCFN/y"]);
      tmp15Result = jsx(tmp5(11559), { onDismiss: onGiftModalDismiss, title: null });
      const tmp5Result = tmp5(11559);
    }
    tmp2Result = tmp2(2185);
  }
  return tmp15Result;
}
