// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx
import set from "../../../utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import isNullOrEmpty from "../../../utils/StringUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import _httpGetWithCountryCodeQuery from "../../../utils/StoreUtils.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import NativeCheckoutStoreProviderDefault from "../../checkout/native/stores/NativeCheckoutStoreProvider.tsx";
import VideoComponent from "../../../components_native/common/Video.tsx";
import NativePaymentContextProvider from "../../payments/native/NativePaymentContext.tsx";
import SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY from "SocialLayerStorefrontNativeActionCreators.tsx";
import useFormattedSKUPrice from "../../storefront/native/StorefrontNativeUtils.android.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { useNativeCheckoutStore } from "../../checkout/native/NativeCheckoutStore.tsx";
import closure_9 from "../../../stores/game_store/SKUStore.tsx";
import closure_10 from "../SocialLayerStorefrontStore.tsx";
import { SlayerShopPDPCTAType } from "../SocialLayerStorefrontAnalyticsConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../../../_runtime/00689_n.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import alphaResult1 from "../../../index.native.tsx";

require = arg1;
function HeroMedia(mediaItem) {
  mediaItem = mediaItem.mediaItem;
  const tmp = callback3();
  if ("video" === mediaItem.type) {
    let obj = { style: null, children: null };
    obj[0] = tmp.hero;
    obj = { source: null, poster: null, muted: true, resizeMode: "cover", style: null };
    obj1 = { uri: null };
    obj1[0] = mediaItem.src;
    obj[0] = obj1;
    obj[1] = mediaItem.videoThumbnailSrc;
    obj[4] = tmp.heroImage;
    obj[1] = callback(VideoComponent.VideoComponent, obj);
    let tmp6 = callback(closure_7, obj);
  } else if (null != mediaItem.backgroundSrc) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.hero;
    const obj3 = { source: null, style: null, resizeMode: "cover" };
    const obj4 = { uri: null };
    obj4[0] = mediaItem.backgroundSrc;
    obj3[0] = obj4;
    obj3[1] = absoluteFill.absoluteFill;
    const items = [callback(preloadDefault, obj3), ];
    const obj5 = { source: null, style: null, resizeMode: "cover" };
    const obj6 = { uri: null };
    obj6[0] = mediaItem.src;
    obj5[0] = obj6;
    obj5[1] = tmp.heroImage;
    items[1] = callback(preloadDefault, obj5);
    obj2[1] = items;
    tmp6 = callback2(closure_7, obj2);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.hero;
    const obj7 = { source: null, style: null, resizeMode: "cover" };
    const obj8 = { uri: null };
    obj8[0] = mediaItem.src;
    obj7[0] = obj8;
    obj7[1] = tmp.heroImage;
    obj[1] = callback(preloadDefault, obj7);
    tmp6 = callback(closure_7, obj);
  }
  return tmp6;
}
function InGameItemTag() {
  const obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.V91tvy);
  return callback(Text.Text, obj);
}
function ProductPriceSection(sku) {
  const tmp = callback3();
  let obj = useFormattedSKUPrice;
  obj = { sku: sku.sku, priceSetAssignmentPurchaseType: constants.DEFAULT };
  const userPrice = obj.useFormattedSKUPrice(obj).userPrice;
  let tmp4 = null;
  if (null != userPrice) {
    obj = { style: null, children: null };
    obj[0] = tmp.priceSection;
    const items = [callback(InGameItemTag, {}), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.priceRow;
    const obj2 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    obj2[2] = userPrice;
    obj1[1] = callback(Text.Text, obj2);
    items[1] = callback(closure_7, obj1);
    obj[1] = items;
    tmp4 = callback2(closure_7, obj);
  }
  return tmp4;
}
function BundleThumbnailRow(trackPDPClick) {
  ({ items: require, mediaItems, selectedIndex: importDefault, onSelectIndex } = trackPDPClick);
  trackPDPClick = trackPDPClick.trackPDPClick;
  let React;
  closure_5 = undefined;
  const tmp = callback3();
  React = tmp;
  let items = [onSelectIndex, trackPDPClick];
  closure_5 = React.useCallback((arg0) => {
    trackPDPClick(closure_1_11.CAROUSEL_ITEM);
    onSelectIndex(arg0);
  }, items);
  let obj = { style: tmp.section, children: null };
  obj = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = require(onSelectIndex[17]).intl;
  obj[2] = intl.string(require(onSelectIndex[17]).t.U7DAV9);
  let items1 = [callback(require(onSelectIndex[16]).Text, obj), ];
  obj = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: tmp.bundleThumbnailRow,
    children: mediaItems.map((thumbnailSrc) => {
      const table = arg1;
      let label;
      if (table[arg1] != null) {
        label = tmp.label;
      }
      if (label == null) {
        let title;
        if (tmp != null) {
          title = tmp.title;
        }
        label = title;
      }
      let thumbnailInnerSelected = arg1 === closure_1;
      let obj = {
        accessibilityRole: "button",
        accessibilityLabel: label,
        accessibilityState: { selected: thumbnailInnerSelected },
        onPress() {
          return closure_1_5(closure_0);
        },
        style: null,
        children: null
      };
      const items = [thumbnail.thumbnail, ];
      let thumbnailSelected = thumbnailInnerSelected;
      if (thumbnailInnerSelected) {
        thumbnailSelected = tmp8.thumbnailSelected;
      }
      items[1] = thumbnailSelected;
      obj[4] = items;
      const items1 = [thumbnail.thumbnailInner, ];
      if (thumbnailInnerSelected) {
        thumbnailInnerSelected = tmp8.thumbnailInnerSelected;
      }
      obj = { style: items1, children: null };
      items1[1] = thumbnailInnerSelected;
      obj = { source: null, style: null, resizeMode: "cover" };
      obj1 = { uri: null };
      const tmp10 = closure_1_1(onSelectIndex[15]);
      const tmp2 = closure_1;
      const tmp4 = closure_1_0;
      const tmp9 = closure_1_7;
      obj1[0] = closure_1_0(onSelectIndex[13]).getThumbnailSrc(thumbnailSrc);
      obj[0] = obj1;
      obj[1] = thumbnail.thumbnailImage;
      obj[1] = closure_1_15(tmp10, obj);
      obj[5] = closure_1_15(tmp9, obj);
      return closure_1_15(closure_1_0(onSelectIndex[19]).PressableOpacity, obj, arg1);
    })
  };
  items1[1] = callback(closure_5, obj);
  obj[1] = items1;
  return callback2(closure_7, obj);
}
function SKUNameAndDescriptionSection(sku) {
  sku = sku.sku;
  let obj = isNullOrEmpty;
  let tmp5Result = null;
  if (!obj.isNullOrEmpty(sku.name)) {
    obj = { style: null, children: null };
    obj[0] = tmp.section;
    obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    obj[2] = sku.name;
    const items = [callback(tmp2(4440).Heading, obj), ];
    const isNullOrEmptyResult = tmp2(1903).isNullOrEmpty(sku.description);
    let tmp7Result = !isNullOrEmptyResult;
    if (!isNullOrEmptyResult) {
      obj1 = { variant: "text-md/medium", color: "text-muted", children: null };
      obj1[2] = sku.description;
      tmp7Result = tmp7(tmp2(4440).Text, obj1);
    }
    items[1] = tmp7Result;
    obj[1] = items;
    tmp5Result = closure_16(closure_7, obj);
    const tmp2Result = tmp2(1903);
    const tmp5 = closure_16;
    const tmp6 = closure_7;
    tmp7 = callback;
  }
  return tmp5Result;
}
function ItemDetailsSection(selectedItem) {
  selectedItem = selectedItem.selectedItem;
  const tmp = callback3();
  let assetURL = null;
  if (null != selectedItem.labelIconAssetId) {
    let obj = _httpGetWithCountryCodeQuery;
    assetURL = obj.getAssetURL(selectedItem.applicationId, selectedItem.labelIconAssetId);
  }
  let trimmed;
  if (selectedItem.title != null) {
    trimmed = str.trim();
  }
  let trimmed1;
  if (selectedItem.label != null) {
    trimmed1 = str2.trim();
  }
  let trimmed2;
  if (selectedItem.description != null) {
    trimmed2 = str3.trim();
  }
  obj1 = isNullOrEmpty;
  if (obj1.isNullOrEmpty(trimmed)) {
    let tmp8Result = tmp8(1903);
    if (tmp8Result.isNullOrEmpty(trimmed1)) {
      tmp8Result = tmp8(1903);
      let tmp11Result = null;
    }
    return tmp11Result;
  }
  obj = { style: tmp.section, children: null };
  const isNullOrEmptyResult = isNullOrEmpty.isNullOrEmpty(trimmed);
  let tmp14 = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
    obj[2] = trimmed;
    tmp14 = callback(tmp8(4440).Heading, obj);
  }
  const items = [tmp14, , ];
  const tmp8Result1 = isNullOrEmpty;
  const isNullOrEmptyResult1 = isNullOrEmpty.isNullOrEmpty(trimmed1);
  tmp11Result = !isNullOrEmptyResult1;
  if (!isNullOrEmptyResult1) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.labelRow;
    let tmp18 = null != assetURL;
    if (tmp18) {
      const obj2 = { source: null, style: null };
      const obj3 = { uri: null };
      obj3[0] = assetURL;
      obj2[0] = obj3;
      obj2[1] = tmp.labelIcon;
      tmp18 = callback(preloadDefault, obj2);
    }
    const items1 = [tmp18, ];
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj4[2] = trimmed1;
    items1[1] = callback(tmp8(4440).Text, obj4);
    obj1[1] = items1;
    tmp11Result = tmp11(tmp12, obj1);
  }
  items[1] = tmp11Result;
  const tmp8Result2 = isNullOrEmpty;
  const isNullOrEmptyResult2 = isNullOrEmpty.isNullOrEmpty(trimmed2);
  let tmp23 = !isNullOrEmptyResult2;
  if (!isNullOrEmptyResult2) {
    const obj5 = { variant: "text-md/medium", color: "text-default", children: null };
    obj5[2] = trimmed2;
    tmp23 = callback(tmp8(4440).Text, obj5);
  }
  items[2] = tmp23;
  obj[1] = items;
  tmp11Result = tmp11(tmp12, obj);
}
function SocialLayerStorefrontProductDetailsModal(skuId) {
  skuId = skuId.skuId;
  const analyticsLocations = skuId.analyticsLocations;
  dependencyMap = undefined;
  let storeFront;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let memo1;
  useNativeCheckoutStore = undefined;
  let memo2;
  closure_10 = undefined;
  let callback;
  closure_12 = undefined;
  c13 = undefined;
  closure_14 = undefined;
  let callback1;
  closure_16 = undefined;
  const tmp = callback3();
  dependencyMap = tmp;
  const rect = analyticsLocations(1629)();
  let obj = analyticsLocations(7863);
  storeFront = obj.useNativeIAPPayments().storeFront;
  obj1 = skuId(589);
  let items = [memo2];
  stateFromStores = obj1.useStateFromStores(items, () => memo2.get(skuId));
  let obj2 = skuId(589);
  let items1 = [memo2];
  stateFromStores1 = obj2.useStateFromStores(items1, () => memo2.isFetching(skuId) || memo2.didFetchingSkuFail(skuId));
  let obj3 = skuId(5906);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = obj3.useGetOrFetchApplication(applicationId);
  let tmp10 = getOrFetchApplication;
  let tmp2Result = tmp2(5903);
  if (getOrFetchApplication == null) {
    tmp10 = null;
  }
  let tmp4Result = tmp4(589);
  const items2 = [closure_10];
  stateFromStores2 = tmp4Result.useStateFromStores(items2, () => ref.getSkuAssets());
  let obj5 = stateFromStores;
  const items3 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => skuId(closeButtonIcon[27]).getCardImageURL(stateFromStores), items3);
  const tmp14 = storeFront(stateFromStores.useState(0), 2);
  const first = tmp14[0];
  const items4 = [analyticsLocations];
  memo1 = stateFromStores.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, analyticsLocations(closeButtonIcon[28]).SLAYER_STOREFRONT_NATIVE_PDP];
    return items1;
  }, items4);
  const tmp17 = analyticsLocations(5888)(() => skuId(closeButtonIcon[30]).v4());
  useNativeCheckoutStore = tmp17;
  const items5 = [memo1, skuId, , , , ];
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  items5[2] = type;
  let productLine;
  if (stateFromStores != null) {
    productLine = stateFromStores.productLine;
  }
  items5[3] = productLine;
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  items5[4] = applicationId1;
  items5[5] = tmp17;
  memo2 = stateFromStores.useMemo(() => {
    const obj = { is_gift: false, location_stack: memo1, payment_type: "sku", sku_id: skuId, sku_type: null, sku_product_line: null, application_id: null, load_id: null };
    let type;
    if (stateFromStores != null) {
      type = tmp.type;
    }
    obj[4] = type;
    let productLine;
    if (stateFromStores != null) {
      productLine = tmp.productLine;
    }
    obj[5] = productLine;
    let applicationId;
    if (stateFromStores != null) {
      applicationId = tmp.applicationId;
    }
    obj[6] = applicationId;
    obj[7] = closure_8;
    return obj;
  }, items5);
  analyticsLocations(4896)(() => {
    let obj = analyticsLocations(closeButtonIcon[32]);
    obj = { location_stack: memo1, type: skuId(closeButtonIcon[33]).SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY, sku_id: skuId, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[3] = applicationId;
    obj.track(constants.OPEN_MODAL, obj);
  });
  closure_10 = obj5.useRef("not_started");
  tmp4Result = tmp4(4896);
  const unmountEffect = tmp4Result.useUnmountEffect(() => {
    if ("pending" === ref.current) {
      analyticsLocations(closeButtonIcon[32]).track(constants.PAYMENT_FLOW_CANCELED, memo2);
      const obj = analyticsLocations(closeButtonIcon[32]);
    }
  });
  const items6 = [skuId, , ];
  let applicationId2;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  items6[1] = applicationId2;
  items6[2] = memo1;
  callback = obj5.useCallback((arg0) => {
    let obj = analyticsLocations(closeButtonIcon[32]);
    obj = { slayer_storefront_session_id: "Array", sku_id: "a", guild_id: true, application_id: true, cta_type: null, location_stack: null };
    obj[1] = skuId;
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[3] = applicationId;
    obj[4] = arg0;
    obj[5] = memo1;
    obj.track(constants.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, obj);
  }, items6);
  const items7 = [stateFromStores, stateFromStores2];
  let tmp13Result = tmp13(obj5.useMemo(() => {
    let applicationId;
    if (stateFromStores != null) {
      applicationId = tmp.applicationId;
    }
    if (null == applicationId) {
      const items = [[], []];
      let result = items;
    } else {
      let obj = skuId(closeButtonIcon[13]);
      const tenantMetadata = tmp.tenantMetadata;
      let carouselItems;
      if (tenantMetadata != null) {
        const socialLayer = tenantMetadata.socialLayer;
        if (socialLayer != null) {
          carouselItems = socialLayer.carouselItems;
        }
      }
      if (carouselItems == null) {
        carouselItems = [];
      }
      obj = { heroWidth: null };
      obj[0] = skuId(closeButtonIcon[13]).MOBILE_HERO_WIDTH_PX;
      result = obj.convertCarouselItemsToMediaItems(carouselItems, tmp.applicationId, stateFromStores2, obj);
      const tmp3 = skuId;
      const tmp4 = closeButtonIcon;
    }
    return result;
  }, items7), 2);
  [arr9, arr10] = tmp13Result;
  let num = 0;
  if (first < arr10.length) {
    num = first;
  }
  let tmp28 = arr9[num];
  if (tmp28 == null) {
    tmp28 = null;
  }
  let tmp29 = arr10[num];
  if (tmp29 == null) {
    tmp29 = null;
  }
  let num2;
  if (stateFromStores != null) {
    let tenantMetadata = stateFromStores.tenantMetadata;
    if (tenantMetadata != null) {
      let socialLayer = tenantMetadata.socialLayer;
      if (socialLayer != null) {
        let carouselItems = socialLayer.carouselItems;
        if (carouselItems != null) {
          num2 = carouselItems.length;
        }
      }
    }
  }
  if (num2 == null) {
    num2 = 0;
  }
  closure_12 = tmp30;
  tmp13Result = tmp13(obj5.useState(false), 2);
  [tmp32, c13] = tmp13Result;
  closure_14 = obj5.useRef(false);
  const items8 = [stateFromStores, stateFromStores2, num2 === arr9.length, stateFromStores1, ];
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  items8[4] = country;
  const effect = obj5.useEffect(() => {
    if (tmp2) {
      let current = closure_12;
      if (!closure_12) {
        current = stateFromStores1;
      }
      if (!current) {
        current = ref2.current;
      }
      if (!current) {
        ref2.current = true;
        let obj = skuId(closeButtonIcon[34]);
        obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        ({ applicationId, id } = tmp);
        obj[0] = skuId(closeButtonIcon[35]).isAndroid();
        let country;
        if (storeFront != null) {
          country = storeFront.country;
        }
        obj[1] = country;
        const obj3 = skuId(closeButtonIcon[35]);
        const tmp5 = skuId;
        const tmp6 = closeButtonIcon;
        let APPLE;
        if (tmp5Result.isIOS()) {
          APPLE = _undefined.APPLE;
        }
        obj[2] = APPLE;
        const socialLayerStorefrontSkuForApplication = obj.fetchSocialLayerStorefrontSkuForApplication(applicationId, id, obj);
        tmp5Result = skuId(closeButtonIcon[35]);
      }
    }
  }, items8);
  const items9 = [memo2];
  callback1 = obj5.useCallback(() => {
    if ("pending" === ref.current) {
      tmp.current = "failed";
      analyticsLocations(closeButtonIcon[32]).track(constants.PAYMENT_FLOW_FAILED, memo2);
      const obj = analyticsLocations(closeButtonIcon[32]);
    }
    _undefined(false);
  }, items9);
  const tmp36 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  obj = { skuId, sku: stateFromStores, analyticsLoadId: tmp17, analyticsLocations: memo1, orderId: null, analyticsData: null, onPurchaseComplete: null, onPurchaseError: null, onPurchasePending: null };
  let id;
  tmp2Result = tmp2(10313);
  if (tmp36 != null) {
    id = tmp36.id;
  }
  obj[4] = id;
  obj[5] = memo2;
  obj[6] = function onPurchaseComplete() {
    closure_10.current = "succeeded";
    let obj = skuId(closeButtonIcon[35]);
    if (obj.isIOS()) {
      analyticsLocations(tmp2[32]).track(constants.PAYMENT_FLOW_SUCCEEDED, memo2);
      const obj2 = analyticsLocations(tmp2[32]);
    }
    _undefined(false);
    obj = { skuId, orbsReward: null, analyticsLocations: null };
    let orbsReward;
    if (stateFromStores != null) {
      orbsReward = stateFromStores.orbsReward;
    }
    obj[1] = orbsReward;
    obj[2] = memo1;
    const result = skuId(closeButtonIcon[33]).openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj);
    result.then(skuId(closeButtonIcon[33]).closeSocialLayerStorefrontProductDetailsModal);
  };
  obj[7] = function onPurchaseError() {
    callback1(null);
  };
  obj[8] = function onPurchasePending() {

  };
  const tmp2Result1Result = tmp2Result(obj);
  closure_16 = tmp2Result1Result;
  const items10 = [tmp2Result1Result, callback, memo2, callback1, , ];
  let applicationId3;
  if (stateFromStores != null) {
    applicationId3 = stateFromStores.applicationId;
  }
  items10[4] = applicationId3;
  items10[5] = skuId;
  const items11 = [skuId, memo1, callback];
  const callback2 = obj5.useCallback(() => {
    callback(callback.BUY_BUTTON);
    let obj = skuId(closeButtonIcon[37]);
    if (obj.isSocialLayerStorefrontPurchaseSupported()) {
      closure_10.current = "pending";
      analyticsLocations(tmp2[32]).track(constants.PAYMENT_FLOW_STARTED, memo2);
      _undefined(true);
      const obj3 = analyticsLocations(tmp2[32]);
      callback().catch((arg0) => {
        callback2(arg0);
      });
      const promise2 = callback();
    } else {
      let applicationId;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      obj = { applicationId: null, skuId: null, source: "SocialLayerStorefrontProductDetailsModal" };
      obj[0] = applicationId;
      obj[1] = skuId;
      const tmp4 = analyticsLocations(tmp2[38]);
      analyticsLocations(tmp2[38])(obj).then((arg0) => {
        if (arg0) {
          const result = callback(table[33]).closeSocialLayerStorefrontProductDetailsModal();
          const obj = callback(table[33]);
        }
      });
      const tmp4Result = analyticsLocations(tmp2[38])(obj);
    }
  }, items10);
  if (null == stateFromStores) {
    return null;
  } else {
    let result = tmp4(6025).isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = tmp4(1236).intl;
    const stringResult = intl4.string(tmp4(1236).t.boqtTA);
    const tmp4Result1 = tmp4(6025);
    let result1 = tmp4(4120).isSocialLayerStorefrontGiftingSupported();
    const items12 = [tmp.container, ];
    const tmp4Result2 = tmp4(4120);
    let num3 = 0;
    if (!tmp4Result3.isIOS()) {
      num3 = rect.top;
    }
    obj = { style: null, children: null };
    obj1 = { paddingTop: null };
    obj1[0] = num3;
    items12[1] = obj1;
    obj[0] = items12;
    obj2 = { style: null, children: null };
    obj2[0] = tmp.header;
    obj3 = { onPress: null, backImage: null, accessibilityLabel: null, displayMode: "minimal" };
    obj3[0] = tmp4(10308).closeSocialLayerStorefrontProductDetailsModal;
    obj3[1] = function backImage() {
      return callback1(skuId(closeButtonIcon[41]).XSmallIcon, { size: "md", style: closeButtonIcon.closeButtonIcon });
    };
    const intl = tmp4(1236).intl;
    obj3[2] = intl.string(tmp4(1236).t.cpT0Cq);
    const items13 = [callback1(tmp4(5449).HeaderBackButton, obj3), ];
    const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
    obj4[2] = tmp.headerTitle;
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj4[3] = name;
    items13[1] = callback1(tmp4(4440).Heading, obj4);
    obj2[1] = items13;
    const items14 = [closure_16(memo1, obj2), , ];
    obj5 = { style: null, children: null };
    obj5[0] = tmp.scrollContainer;
    let exclusive = stateFromStores.exclusive;
    if (exclusive) {
      const obj6 = { style: null, colors: null, pointerEvents: "none" };
      obj6[0] = stateFromStores2.absoluteFill;
      const items15 = [closure_18, closure_19];
      obj6[1] = items15;
      exclusive = tmp43(tmp2(4891), obj6);
    }
    const items16 = [exclusive, ];
    const obj7 = { contentContainerStyle: null, children: null };
    obj7[0] = tmp.scrollContent;
    if (null != tmp29) {
      const obj8 = { mediaItem: null };
      obj8[0] = tmp29;
      let tmp43Result = tmp43(HeroMedia, obj8);
    } else {
      tmp43Result = null != memo;
      if (tmp43Result) {
        const obj9 = { sku: null };
        obj9[0] = stateFromStores;
        tmp43Result = tmp43(tmp2(9612), obj9);
      }
    }
    const items17 = [tmp43Result, , ];
    let exclusive2 = stateFromStores.exclusive;
    if (exclusive2) {
      const obj10 = { style: null, children: null };
      obj10[0] = tmp.exclusiveBadgeContainer;
      obj10[1] = tmp43(tmp4(10316).ExclusiveBadge, {});
      exclusive2 = tmp43(tmp66, obj10);
    }
    items17[1] = exclusive2;
    if (tmp27) {
      const obj11 = { sku: null };
      obj11[0] = stateFromStores;
      const items18 = [tmp43(SKUNameAndDescriptionSection, obj11), , ];
      const obj12 = { items: null, mediaItems: null, selectedIndex: null, onSelectIndex: null, trackPDPClick: null };
      obj12[0] = arr9;
      obj12[1] = arr10;
      obj12[2] = num;
      obj12[3] = tmp14[1];
      obj12[4] = callback;
      items18[1] = tmp43(BundleThumbnailRow, obj12);
      tmp43Result = null != stateFromStores.applicationId && null != tmp28;
      if (tmp43Result) {
        const obj13 = { selectedItem: null, applicationId: null };
        obj13[0] = tmp28;
        obj13[1] = stateFromStores.applicationId;
        tmp43Result = tmp43(ItemDetailsSection, obj13);
      }
      const obj14 = { children: null };
      items18[2] = tmp43Result;
      obj14[0] = items18;
      let tmp43Result1 = tmp65(closure_17, obj14);
      const tmp53 = closure_17;
    } else {
      const obj15 = { sku: null };
      obj15[0] = stateFromStores;
      tmp43Result1 = tmp43(SKUNameAndDescriptionSection, obj15);
    }
    items17[2] = tmp43Result1;
    obj7[1] = items17;
    items16[1] = closure_16(stateFromStores1, obj7);
    obj5[1] = items16;
    items14[1] = closure_16(memo1, obj5);
    const obj16 = { style: null, children: null };
    const items19 = [tmp.footer, ];
    const obj17 = { paddingBottom: null };
    obj17[0] = rect.bottom + tmp2(712).space.PX_16;
    items19[1] = obj17;
    obj16[0] = items19;
    const obj18 = { sku: null };
    obj18[0] = stateFromStores;
    const items20 = [callback1(ProductPriceSection, obj18), , , ];
    let tmp43Result2 = !result;
    if (!result) {
      const obj19 = { variant: "text-xs/normal", color: "text-muted", style: null, children: null };
      obj19[2] = tmp.availabilityCopy;
      const intl2 = tmp4(1236).intl;
      obj19[3] = intl2.string(tmp2(3339).gndWN7);
      tmp43Result2 = tmp43(tmp4(4440).Text, obj19);
    }
    items20[1] = tmp43Result2;
    const obj20 = { style: null, children: null };
    obj20[0] = tmp.footerButtonRow;
    const obj21 = { style: null, children: null };
    obj21[0] = tmp.buyButton;
    const obj22 = { variant: "primary", size: "lg", text: null, loading: null, disabled: null, onPress: null };
    obj22[2] = stringResult;
    obj22[3] = tmp32;
    let tmp60 = tmp32;
    if (!tmp32) {
      tmp60 = !result;
    }
    obj22[4] = tmp60;
    obj22[5] = callback2;
    obj21[1] = callback1(tmp4(4879).Button, obj22);
    const items21 = [callback1(memo1, obj21), ];
    if (result1) {
      const obj23 = { icon: null, variant: "primary", size: "lg", disabled: null, accessibilityLabel: null, onPress: null };
      obj23[0] = tmp2(8403);
      obj23[3] = tmp32;
      const intl3 = tmp4(1236).intl;
      obj23[4] = intl3.string(tmp4(1236).t.QAZA5f);
      obj23[5] = tmp42;
      result1 = tmp43(tmp4(7963).IconButton, obj23);
    }
    items21[1] = result1;
    obj20[1] = items21;
    items20[2] = closure_16(memo1, obj20);
    if (result) {
      const obj24 = { style: null, children: null };
      obj24[0] = tmp.legalCopy;
      const obj25 = { shouldAppendDisclaimer: null };
      obj25[0] = false === tmp2Result(tmp10).hasAlreadyLinked;
      const mobileFinePrintMessageForApplication = tmp4(10317).getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, obj25);
      obj24[1] = mobileFinePrintMessageForApplication.map((children) => callback1(skuId(closeButtonIcon[16]).Text, { variant: "text-xs/normal", color: "text-muted", children }, arg1));
      result = tmp43(tmp66, obj24);
      const tmp4Result4 = tmp4(10317);
      const tmp62 = getOrFetchApplication;
    }
    items20[3] = result;
    obj16[1] = items20;
    items14[2] = closure_16(memo1, obj16);
    obj[1] = items14;
    return closure_16(memo1, obj);
  }
  tmp27 = arr10.length > 1;
}
function SocialLayerStorefrontProductDetailsModalWithOrderCTX(skuId) {
  let obj = set;
  if (obj.isIOS()) {
    let GOOGLE = tmp3.APPLE_ADVANCED_COMMERCE;
    let tmp4 = tmp3;
  } else {
    GOOGLE = tmp3.GOOGLE;
    tmp4 = tmp3;
  }
  const OTPACOMOrderExperiment = tmp(7621).OTPACOMOrderExperiment;
  let enabled = OTPACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontProductDetailsModal" }).enabled;
  obj = { paymentGateway: GOOGLE, orderRequired: null, skuIds: null, isGift: false, activeSubscription: null, onOrderRetryCancellation: null, children: null };
  if (enabled) {
    enabled = GOOGLE === tmp4.APPLE_ADVANCED_COMMERCE;
  }
  obj[1] = enabled;
  const items = [skuId.skuId];
  obj[2] = items;
  obj[5] = SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY.closeSocialLayerStorefrontProductDetailsModal;
  obj = {};
  const merged = Object.assign(skuId);
  obj[6] = closure_15(SocialLayerStorefrontProductDetailsModal, obj);
  return closure_15(NativeCheckoutStoreProviderDefault, obj, skuId.skuId);
}
({ ScrollView: c5, StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, PaymentGateways: map1, PriceSetAssignmentPurchaseTypes: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const importDefaultResultResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500);
let closure_18 = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const alphaResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500).alpha(0.25);
const importDefaultResult1 = importDefaultResult;
const importDefaultResult1Result = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500);
let closure_19 = require("../../../index.native.tsx").hex();
let obj = { container: { flex: 1 }, header: null, headerTitle: null, closeButtonIcon: null, scrollContent: null, scrollContainer: null, section: null, bundleThumbnailRow: null, thumbnail: null, thumbnailSelected: null, thumbnailInner: null, thumbnailInnerSelected: null, thumbnailImage: null, labelRow: null, labelIcon: null, priceRow: null, footer: null, footerButtonRow: null, buyButton: null, availabilityCopy: null, legalCopy: null, hero: null, priceSection: null, heroImage: null, exclusiveBadgeContainer: null };
obj = { height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[1] = obj;
obj[2] = { flexShrink: 1 };
obj[3] = { tintColor: ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT };
let obj1 = { tintColor: ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT };
obj[4] = { alignItems: "stretch", gap: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_16 };
obj[5] = { flex: 1 };
let obj2 = { alignItems: "stretch", gap: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_16 };
obj[6] = { width: "100%", paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
obj[7] = createCacheKey;
let obj3 = { width: "100%", paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
obj[8] = { width: 64, height: 64, borderRadius: ThemesDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
let obj5 = { width: 64, height: 64, borderRadius: ThemesDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
obj[9] = { borderColor: ThemesDefault.colors.BORDER_STRONG };
let obj6 = { borderColor: ThemesDefault.colors.BORDER_STRONG };
obj[10] = { flex: 1, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
let obj7 = { flex: 1, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
obj[11] = { margin: 2, borderRadius: ThemesDefault.radii.sm };
obj[12] = { width: "100%", height: "100%" };
let obj8 = { margin: 2, borderRadius: ThemesDefault.radii.sm };
obj[13] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
obj[14] = { width: ThemesDefault.space.PX_16, height: ThemesDefault.space.PX_16 };
let obj10 = { width: ThemesDefault.space.PX_16, height: ThemesDefault.space.PX_16 };
obj[15] = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: ThemesDefault.space.PX_8 };
let obj11 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: ThemesDefault.space.PX_8 };
obj[16] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_8, borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj12 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_8, borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[17] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
obj[18] = { flex: 1 };
obj[19] = { textAlign: "center" };
let obj13 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
obj[20] = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_4 };
let obj14 = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_4 };
obj[21] = { marginHorizontal: ThemesDefault.space.PX_16, height: require("WEB_HERO_WIDTH_PX").MOBILE_HERO_HEIGHT_PX, borderRadius: ThemesDefault.radii.md, overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj15 = { marginHorizontal: ThemesDefault.space.PX_16, height: require("WEB_HERO_WIDTH_PX").MOBILE_HERO_HEIGHT_PX, borderRadius: ThemesDefault.radii.md, overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[22] = { width: "100%", gap: ThemesDefault.space.PX_8 };
obj[23] = { width: "100%", height: "100%" };
let obj16 = { width: "100%", gap: ThemesDefault.space.PX_8 };
obj[24] = { paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_20 = createCacheKey.createStyles(obj);
let obj17 = { paddingHorizontal: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx");

export default function WrappedSocialLayerStorefrontProductDetailsModal(arg0) {
  let obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[2] = callback(SocialLayerStorefrontProductDetailsModalWithOrderCTX, obj);
  return callback(NativePaymentContextProvider.NativePaymentContextProvider, obj);
};