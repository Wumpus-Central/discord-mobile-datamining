// === Module 10495: HeroMedia ===

// Module 10495 (HeroMedia)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isNullOrEmpty from "isNullOrEmpty" /* 1903 */;
import Text from "Text" /* 4441 */;
import _httpGetWithCountryCodeQuery from "_httpGetWithCountryCodeQuery" /* 4708 */;
import preloadDefault from "preload" /* 5445 */;
import VideoComponent from "VideoComponent" /* 8533 */;
import useFormattedSKUPrice from "useFormattedSKUPrice" /* 10498 */;
import NativePaymentContextProvider from "NativePaymentContextProvider" /* 10514 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "addSku" /* 4494 */;
import closure_9 from "handleUserSettingsStoreUpdate" /* 6027 */;
import { SlayerShopPDPCTAType } from "SlayerShopCardCTAType" /* 10496 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import importDefaultResult from "n" /* 689 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import alphaResult1 from "module_0" /* 0 */;

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
    trackPDPClick(closure_1_10.CAROUSEL_ITEM);
    onSelectIndex(arg0);
  }, items);
  let obj = { style: tmp.section, children: null };
  obj = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = require(onSelectIndex[16]).intl;
  obj[2] = intl.string(require(onSelectIndex[16]).t.U7DAV9);
  let items1 = [callback(require(onSelectIndex[15]).Text, obj), ];
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
      const tmp10 = closure_1_1(onSelectIndex[14]);
      const tmp2 = closure_1;
      const tmp4 = closure_1_0;
      const tmp9 = closure_1_7;
      obj1[0] = closure_1_0(onSelectIndex[12]).getThumbnailSrc(thumbnailSrc);
      obj[0] = obj1;
      obj[1] = thumbnail.thumbnailImage;
      obj[1] = closure_1_14(tmp10, obj);
      obj[5] = closure_1_14(tmp9, obj);
      return closure_1_14(closure_1_0(onSelectIndex[18]).PressableOpacity, obj, arg1);
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
    const items = [callback(tmp2(4441).Heading, obj), ];
    const isNullOrEmptyResult = tmp2(1903).isNullOrEmpty(sku.description);
    let tmp7Result = !isNullOrEmptyResult;
    if (!isNullOrEmptyResult) {
      obj1 = { variant: "text-md/medium", color: "text-muted", children: null };
      obj1[2] = sku.description;
      tmp7Result = tmp7(tmp2(4441).Text, obj1);
    }
    items[1] = tmp7Result;
    obj[1] = items;
    tmp5Result = closure_15(closure_7, obj);
    const tmp2Result = tmp2(1903);
    const tmp5 = closure_15;
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
    tmp14 = callback(tmp8(4441).Heading, obj);
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
    items1[1] = callback(tmp8(4441).Text, obj4);
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
    tmp23 = callback(tmp8(4441).Text, obj5);
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
  closure_8 = undefined;
  let memo2;
  closure_10 = undefined;
  let callback;
  closure_12 = undefined;
  c13 = undefined;
  callback = undefined;
  c15 = undefined;
  closure_16 = undefined;
  const tmp = callback3();
  dependencyMap = tmp;
  const rect = analyticsLocations(1629)();
  let obj = analyticsLocations(8153);
  storeFront = obj.useNativeIAPPayments().storeFront;
  obj1 = skuId(589);
  let items = [closure_8];
  stateFromStores = obj1.useStateFromStores(items, () => closure_8.get(skuId));
  let obj2 = skuId(589);
  let items1 = [closure_8];
  stateFromStores1 = obj2.useStateFromStores(items1, () => closure_8.isFetching(skuId) || closure_8.didFetchingSkuFail(skuId));
  let obj3 = skuId(5911);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = obj3.useGetOrFetchApplication(applicationId);
  let tmp10 = getOrFetchApplication;
  let tmp2Result = tmp2(5908);
  if (getOrFetchApplication == null) {
    tmp10 = null;
  }
  let tmp4Result = tmp4(589);
  const items2 = [memo2];
  stateFromStores2 = tmp4Result.useStateFromStores(items2, () => memo2.getSkuAssets());
  let obj5 = stateFromStores;
  const items3 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => skuId(closeButtonIcon[26]).getCardImageURL(stateFromStores), items3);
  const tmp14 = storeFront(stateFromStores.useState(0), 2);
  const first = tmp14[0];
  const items4 = [analyticsLocations];
  memo1 = stateFromStores.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, analyticsLocations(closeButtonIcon[27]).SLAYER_STOREFRONT_NATIVE_PDP];
    return items1;
  }, items4);
  const tmp17 = analyticsLocations(5893)(() => skuId(closeButtonIcon[29]).v4());
  closure_8 = tmp17;
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
  analyticsLocations(4897)(() => {
    let obj = analyticsLocations(closeButtonIcon[31]);
    obj = { location_stack: memo1, type: skuId(closeButtonIcon[32]).SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY, sku_id: skuId, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[3] = applicationId;
    obj.track(callback.OPEN_MODAL, obj);
  });
  closure_10 = obj5.useRef("not_started");
  tmp4Result = tmp4(4897);
  const unmountEffect = tmp4Result.useUnmountEffect(() => {
    if ("pending" === closure_10.current) {
      analyticsLocations(closeButtonIcon[31]).track(callback.PAYMENT_FLOW_CANCELED, memo2);
      const obj = analyticsLocations(closeButtonIcon[31]);
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
    let obj = analyticsLocations(closeButtonIcon[31]);
    obj = { slayer_storefront_session_id: "Array", sku_id: "a", guild_id: true, application_id: true, cta_type: false, location_stack: false };
    obj[1] = skuId;
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[3] = applicationId;
    obj[4] = arg0;
    obj[5] = memo1;
    obj.track(callback.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, obj);
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
      const obj2 = skuId(closeButtonIcon[12]);
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
      const obj = { heroWidth: null };
      obj[0] = skuId(closeButtonIcon[12]).MOBILE_HERO_WIDTH_PX;
      result = obj2.convertCarouselItemsToMediaItems(carouselItems, tmp.applicationId, stateFromStores2, obj);
      const tmp8 = skuId;
      const tmp9 = closeButtonIcon;
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
  [tmp34, c14] = storeFront(obj5.useState(false), 2);
  const tmp13Result1 = storeFront(obj5.useState(false), 2);
  const tmp27 = arr10.length > 1;
  [tmp36, c15] = storeFront(obj5.useState(0), 2);
  closure_16 = obj5.useRef(false);
  const items8 = [stateFromStores, stateFromStores2, num2 === arr9.length, stateFromStores1, ];
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  items8[4] = country;
  const effect = obj5.useEffect(() => {
    if (tmp2) {
      let current = constants;
      if (!constants) {
        current = stateFromStores1;
      }
      if (!current) {
        current = ref.current;
      }
      if (!current) {
        ref.current = true;
        let obj = skuId(closeButtonIcon[33]);
        obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        ({ applicationId, id } = tmp);
        obj[0] = skuId(closeButtonIcon[34]).isAndroid();
        let country;
        if (storeFront != null) {
          country = storeFront.country;
        }
        obj[1] = country;
        const obj3 = skuId(closeButtonIcon[34]);
        const tmp5 = skuId;
        const tmp6 = closeButtonIcon;
        let APPLE;
        if (tmp5Result.isIOS()) {
          APPLE = constants.APPLE;
        }
        obj[2] = APPLE;
        const socialLayerStorefrontSkuForApplication = obj.fetchSocialLayerStorefrontSkuForApplication(applicationId, id, obj);
        tmp5Result = skuId(closeButtonIcon[34]);
      }
    }
  }, items8);
  const items9 = [memo2];
  const items10 = [skuId, , , ];
  let orbsReward;
  const callback1 = obj5.useCallback(() => {
    if ("pending" === closure_10.current) {
      tmp.current = "failed";
      analyticsLocations(closeButtonIcon[31]).track(callback.PAYMENT_FLOW_FAILED, memo2);
      const obj = analyticsLocations(closeButtonIcon[31]);
    }
    _undefined(false);
  }, items9);
  if (stateFromStores != null) {
    orbsReward = stateFromStores.orbsReward;
  }
  items10[1] = orbsReward;
  items10[2] = memo1;
  items10[3] = memo2;
  const items11 = [callback, memo2, , ];
  let applicationId3;
  const callback2 = obj5.useCallback(() => {
    closure_10.current = "succeeded";
    let obj = skuId(closeButtonIcon[34]);
    if (obj.isIOS()) {
      analyticsLocations(tmp2[31]).track(callback.PAYMENT_FLOW_SUCCEEDED, memo2);
      const obj2 = analyticsLocations(tmp2[31]);
    }
    _undefined(false);
    obj = { skuId, orbsReward: null, analyticsLocations: null };
    let orbsReward;
    if (stateFromStores != null) {
      orbsReward = stateFromStores.orbsReward;
    }
    obj[1] = orbsReward;
    obj[2] = memo1;
    const result = skuId(closeButtonIcon[32]).openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj);
    result.then(skuId(closeButtonIcon[32]).closeSocialLayerStorefrontProductDetailsModal);
  }, items10);
  if (stateFromStores != null) {
    applicationId3 = stateFromStores.applicationId;
  }
  items11[2] = applicationId3;
  items11[3] = skuId;
  callback3 = obj5.useCallback(() => {
    callback(closure_10.BUY_BUTTON);
    let obj = skuId(closeButtonIcon[35]);
    if (obj.isSocialLayerStorefrontPurchaseSupported()) {
      closure_10.current = "pending";
      analyticsLocations(tmp2[31]).track(callback.PAYMENT_FLOW_STARTED, memo2);
      _undefined2(true);
      _undefined3((arg0) => arg0 + 1);
      _undefined(true);
      const obj3 = analyticsLocations(tmp2[31]);
    } else {
      let applicationId;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      obj = { applicationId: null, skuId: null, source: "SocialLayerStorefrontProductDetailsModal" };
      obj[0] = applicationId;
      obj[1] = skuId;
      const tmp4 = analyticsLocations(tmp2[36]);
      analyticsLocations(tmp2[36])(obj).then((arg0) => {
        if (arg0) {
          const result = callback(table[32]).closeSocialLayerStorefrontProductDetailsModal();
          const obj = callback(table[32]);
        }
      });
      const tmp4Result = analyticsLocations(tmp2[36])(obj);
    }
  }, items11);
  const OTPACOMOrderExperiment = tmp4(8152).OTPACOMOrderExperiment;
  let enabled = OTPACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontProductDetailsModal" }).enabled;
  const tmp13Result2 = storeFront(obj5.useState(0), 2);
  if (tmp4Result1.isIOS()) {
    let GOOGLE = tmp44.APPLE_ADVANCED_COMMERCE;
    let tmp45 = tmp44;
  } else {
    GOOGLE = tmp44.GOOGLE;
    tmp45 = tmp44;
  }
  let tmp47Result = null;
  if (tmp34) {
    obj = { headless: true, paymentGateway: null, orderRequired: null, skuIds: null, isGift: false, activeSubscription: null, onOrderRetryCancellation: null, children: null };
    obj[1] = GOOGLE;
    tmp2Result = tmp2(10500);
    if (enabled) {
      enabled = GOOGLE === tmp45.APPLE_ADVANCED_COMMERCE;
    }
    obj[2] = enabled;
    const items12 = [skuId];
    obj[3] = items12;
    obj[6] = tmp4(10494).closeSocialLayerStorefrontProductDetailsModal;
    obj = { attempt: null, skuId: null, sku: null, analyticsLoadId: null, analyticsLocations: null, analyticsData: null, onPurchaseComplete: null, onPurchaseError: null };
    obj[0] = tmp36;
    obj[1] = skuId;
    obj[2] = stateFromStores;
    obj[3] = tmp17;
    obj[4] = memo1;
    obj[5] = memo2;
    obj[6] = callback2;
    obj[7] = callback1;
    obj[7] = callback(tmp4(10507).HeadlessSlayerStorefrontPurchaseRunner, obj);
    tmp47Result = tmp47(tmp2Result, obj, skuId);
  }
  const items13 = [skuId, memo1, callback];
  if (null == stateFromStores) {
    return null;
  } else {
    let result = tmp4(6030).isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = tmp4(1236).intl;
    const stringResult = intl4.string(tmp4(1236).t.boqtTA);
    const tmp4Result2 = tmp4(6030);
    let result1 = tmp4(4120).isSocialLayerStorefrontGiftingSupported();
    const items14 = [tmp.container, ];
    const tmp4Result3 = tmp4(4120);
    let num3 = 0;
    if (!tmp4Result4.isIOS()) {
      num3 = rect.top;
    }
    obj1 = { style: null, children: null };
    obj2 = { paddingTop: null };
    obj2[0] = num3;
    items14[1] = obj2;
    obj1[0] = items14;
    const items15 = [tmp47Result, , , ];
    obj3 = { style: null, children: null };
    obj3[0] = tmp.header;
    const obj4 = { onPress: null, backImage: null, accessibilityLabel: null, displayMode: "minimal" };
    obj4[0] = tmp4(10494).closeSocialLayerStorefrontProductDetailsModal;
    obj4[1] = function backImage() {
      return _undefined2(skuId(closeButtonIcon[42]).XSmallIcon, { size: "md", style: closeButtonIcon.closeButtonIcon });
    };
    const intl = tmp4(1236).intl;
    obj4[2] = intl.string(tmp4(1236).t.cpT0Cq);
    const items16 = [callback(tmp4(5454).HeaderBackButton, obj4), ];
    obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
    obj5[2] = tmp.headerTitle;
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj5[3] = name;
    items16[1] = callback(tmp4(4441).Heading, obj5);
    obj3[1] = items16;
    items15[1] = c15(memo1, obj3);
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.scrollContainer;
    let exclusive = stateFromStores.exclusive;
    if (exclusive) {
      const obj7 = { style: null, colors: null, pointerEvents: "none" };
      obj7[0] = stateFromStores2.absoluteFill;
      const items17 = [closure_17, closure_18];
      obj7[1] = items17;
      exclusive = tmp50(tmp2(4892), obj7);
    }
    const items18 = [exclusive, ];
    const obj8 = { contentContainerStyle: null, children: null };
    obj8[0] = tmp.scrollContent;
    if (null != tmp29) {
      const obj9 = { mediaItem: null };
      obj9[0] = tmp29;
      let tmp50Result = tmp50(HeroMedia, obj9);
    } else {
      tmp50Result = null != memo;
      if (tmp50Result) {
        const obj10 = { sku: null };
        obj10[0] = stateFromStores;
        tmp50Result = tmp50(tmp2(8435), obj10);
      }
    }
    const items19 = [tmp50Result, , ];
    let exclusive2 = stateFromStores.exclusive;
    if (exclusive2) {
      const obj11 = { style: null, children: null };
      obj11[0] = tmp.exclusiveBadgeContainer;
      obj11[1] = tmp50(tmp4(10511).ExclusiveBadge, {});
      exclusive2 = tmp50(tmp73, obj11);
    }
    items19[1] = exclusive2;
    if (tmp27) {
      const obj12 = { sku: null };
      obj12[0] = stateFromStores;
      const items20 = [tmp50(SKUNameAndDescriptionSection, obj12), , ];
      const obj13 = { items: null, mediaItems: null, selectedIndex: null, onSelectIndex: null, trackPDPClick: null };
      obj13[0] = arr9;
      obj13[1] = arr10;
      obj13[2] = num;
      obj13[3] = tmp14[1];
      obj13[4] = callback;
      items20[1] = tmp50(BundleThumbnailRow, obj13);
      tmp50Result = null != stateFromStores.applicationId && null != tmp28;
      if (tmp50Result) {
        const obj14 = { selectedItem: null, applicationId: null };
        obj14[0] = tmp28;
        obj14[1] = stateFromStores.applicationId;
        tmp50Result = tmp50(ItemDetailsSection, obj14);
      }
      const obj15 = { children: null };
      items20[2] = tmp50Result;
      obj15[0] = items20;
      let tmp50Result1 = tmp72(closure_16, obj15);
      const tmp60 = closure_16;
    } else {
      const obj16 = { sku: null };
      obj16[0] = stateFromStores;
      tmp50Result1 = tmp50(SKUNameAndDescriptionSection, obj16);
    }
    items19[2] = tmp50Result1;
    obj8[1] = items19;
    items18[1] = c15(stateFromStores1, obj8);
    obj6[1] = items18;
    items15[2] = c15(memo1, obj6);
    const obj17 = { style: null, children: null };
    const items21 = [tmp.footer, ];
    const obj18 = { paddingBottom: null };
    obj18[0] = rect.bottom + tmp2(712).space.PX_16;
    items21[1] = obj18;
    obj17[0] = items21;
    const obj19 = { sku: null };
    obj19[0] = stateFromStores;
    const items22 = [callback(ProductPriceSection, obj19), , , ];
    let tmp50Result2 = !result;
    if (!result) {
      const obj20 = { variant: "text-xs/normal", color: "text-muted", style: null, children: null };
      obj20[2] = tmp.availabilityCopy;
      const intl2 = tmp4(1236).intl;
      obj20[3] = intl2.string(tmp2(3339).gndWN7);
      tmp50Result2 = tmp50(tmp4(4441).Text, obj20);
    }
    items22[1] = tmp50Result2;
    const obj21 = { style: null, children: null };
    obj21[0] = tmp.footerButtonRow;
    const obj22 = { style: null, children: null };
    obj22[0] = tmp.buyButton;
    const obj23 = { variant: "primary", size: "lg", text: null, loading: null, disabled: null, onPress: null };
    obj23[2] = stringResult;
    obj23[3] = tmp32;
    let tmp67 = tmp32;
    if (!tmp32) {
      tmp67 = !result;
    }
    obj23[4] = tmp67;
    obj23[5] = callback3;
    obj22[1] = callback(tmp4(4880).Button, obj23);
    const items23 = [callback(memo1, obj22), ];
    if (result1) {
      const obj24 = { icon: null, variant: "primary", size: "lg", disabled: null, accessibilityLabel: null, onPress: null };
      obj24[0] = tmp2(7924);
      obj24[3] = tmp32;
      const intl3 = tmp4(1236).intl;
      obj24[4] = intl3.string(tmp4(1236).t.QAZA5f);
      obj24[5] = tmp49;
      result1 = tmp50(tmp4(7938).IconButton, obj24);
    }
    items23[1] = result1;
    obj21[1] = items23;
    items22[2] = c15(memo1, obj21);
    if (result) {
      const obj25 = { style: null, children: null };
      obj25[0] = tmp.legalCopy;
      const obj26 = { shouldAppendDisclaimer: null };
      obj26[0] = false === tmp2Result(tmp10).hasAlreadyLinked;
      const mobileFinePrintMessageForApplication = tmp4(10512).getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, obj26);
      obj25[1] = mobileFinePrintMessageForApplication.map((children) => _undefined2(skuId(closeButtonIcon[15]).Text, { variant: "text-xs/normal", color: "text-muted", children }, arg1));
      result = tmp50(tmp73, obj25);
      const tmp4Result5 = tmp4(10512);
      const tmp69 = getOrFetchApplication;
    }
    items22[3] = result;
    obj17[1] = items22;
    items15[3] = c15(memo1, obj17);
    obj1[1] = items15;
    return c15(memo1, obj1);
  }
  tmp4Result1 = skuId(500);
}
({ ScrollView: c5, StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticEvents: unpackModuleId, PaymentGateways: closure_12, PriceSetAssignmentPurchaseTypes: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const importDefaultResultResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500);
let closure_17 = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const alphaResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500).alpha(0.25);
const importDefaultResult1 = importDefaultResult;
const importDefaultResult1Result = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500);
let closure_18 = require("module_0").hex();
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
let closure_19 = createCacheKey.createStyles(obj);
let obj17 = { paddingHorizontal: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx");

export default function WrappedSocialLayerStorefrontProductDetailsModal(arg0) {
  let obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[2] = callback(SocialLayerStorefrontProductDetailsModal, obj);
  return callback(NativePaymentContextProvider.NativePaymentContextProvider, obj);
};