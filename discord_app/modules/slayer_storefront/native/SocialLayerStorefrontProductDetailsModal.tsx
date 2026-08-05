// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx
import expandEventProperties from "expandEventProperties";
import Button from "Button";
import get_ActivityIndicator from "getSystemLocale";
import { useNativeCheckoutStore } from "context";
import addSku from "addSku";
import handleUserSettingsStoreUpdate from "handleUserSettingsStoreUpdate";
import { SlayerShopPDPCTAType } from "SlayerShopCardCTAType";
import ME from "ME";
import jsxProd from "_httpGetWithCountryCodeQuery";
import importDefaultResult from "n";
import importDefaultResult1 from "n";
import createCacheKey from "createCacheKey";
import alphaResult1 from "_slicedToArray";

let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
let error;
let map1;
const require = arg1;
function HeroMedia(mediaItem) {
  mediaItem = mediaItem.mediaItem;
  const tmp = callback3();
  if ("video" === mediaItem.type) {
    let obj = { style: null, children: null };
    obj[0] = tmp.hero;
    obj = { source: null, poster: null, muted: true, resizeMode: "cover", style: null };
    const obj1 = { uri: null };
    obj1[0] = mediaItem.src;
    obj[0] = obj1;
    obj[1] = mediaItem.videoThumbnailSrc;
    obj[4] = tmp.heroImage;
    obj[1] = callback(require(8792) /* VideoComponent */.VideoComponent, obj);
    let tmp6 = callback(closure_7, obj);
  } else if (null != mediaItem.backgroundSrc) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.hero;
    const obj3 = { source: null, style: null, resizeMode: "cover" };
    const obj4 = { uri: null };
    obj4[0] = mediaItem.backgroundSrc;
    obj3[0] = obj4;
    obj3[1] = absoluteFill.absoluteFill;
    const items = [callback(importDefault(5236), obj3), ];
    const obj5 = { source: null, style: null, resizeMode: "cover" };
    const obj6 = { uri: null };
    obj6[0] = mediaItem.src;
    obj5[0] = obj6;
    obj5[1] = tmp.heroImage;
    items[1] = callback(importDefault(5236), obj5);
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
    obj[1] = callback(importDefault(5236), obj7);
    tmp6 = callback(closure_7, obj);
  }
  return tmp6;
}
function InGameItemTag() {
  const obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.V91tvy);
  return callback(require(4281) /* Text */.Text, obj);
}
function ProductPriceSection(sku) {
  const tmp = callback3();
  let obj = require(10008) /* useFormattedSKUPrice */;
  obj = { sku: sku.sku, priceSetAssignmentPurchaseType: constants.DEFAULT };
  const userPrice = obj.useFormattedSKUPrice(obj).userPrice;
  let tmp4 = null;
  if (null != userPrice) {
    obj = { style: null, children: null };
    obj[0] = tmp.priceSection;
    const items = [callback(InGameItemTag, {}), ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.priceRow;
    const obj2 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: null };
    obj2[2] = userPrice;
    obj1[1] = callback(require(4281) /* Text */.Text, obj2);
    items[1] = callback(closure_7, obj1);
    obj[1] = items;
    tmp4 = callback2(closure_7, obj);
  }
  return tmp4;
}
function BundleThumbnailRow(trackPDPClick) {
  let importDefault;
  let mediaItems;
  let onSelectIndex;
  let require;
  ({ items: require, mediaItems, selectedIndex: importDefault, onSelectIndex } = trackPDPClick);
  trackPDPClick = trackPDPClick.trackPDPClick;
  let React;
  let closure_5;
  const tmp = callback3();
  React = tmp;
  let items = [onSelectIndex, trackPDPClick];
  closure_5 = React.useCallback((arg0) => {
    trackPDPClick(outer1_11.CAROUSEL_ITEM);
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
          return outer1_5(closure_0);
        },
        style: null,
        children: null
      };
      const items = [_undefined.thumbnail, ];
      let thumbnailSelected = thumbnailInnerSelected;
      if (thumbnailInnerSelected) {
        thumbnailSelected = tmp8.thumbnailSelected;
      }
      items[1] = thumbnailSelected;
      obj[4] = items;
      const items1 = [_undefined.thumbnailInner, ];
      if (thumbnailInnerSelected) {
        thumbnailInnerSelected = tmp8.thumbnailInnerSelected;
      }
      obj = { style: items1, children: null };
      items1[1] = thumbnailInnerSelected;
      obj = { source: null, style: null, resizeMode: "cover" };
      const obj1 = { uri: null };
      const tmp10 = outer1_1(onSelectIndex[15]);
      const tmp2 = closure_1;
      const tmp4 = outer1_0;
      const tmp9 = outer1_7;
      obj1[0] = outer1_0(onSelectIndex[13]).getThumbnailSrc(thumbnailSrc);
      obj[0] = obj1;
      obj[1] = _undefined.thumbnailImage;
      obj[1] = outer1_15(tmp10, obj);
      obj[5] = outer1_15(tmp9, obj);
      return outer1_15(outer1_0(onSelectIndex[19]).PressableOpacity, obj, arg1);
    })
  };
  items1[1] = callback(closure_5, obj);
  obj[1] = items1;
  return callback2(closure_7, obj);
}
function SKUNameAndDescriptionSection(sku) {
  sku = sku.sku;
  let obj = require(1856) /* isNullOrEmpty */;
  let tmp5Result = null;
  if (!obj.isNullOrEmpty(sku.name)) {
    obj = { style: null, children: null };
    obj[0] = tmp.section;
    obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
    obj[2] = sku.name;
    const items = [callback(tmp2(4281).Heading, obj), ];
    const isNullOrEmptyResult = tmp2(1856).isNullOrEmpty(sku.description);
    let tmp7Result = !isNullOrEmptyResult;
    if (!isNullOrEmptyResult) {
      const obj1 = { variant: "text-md/medium", color: "text-muted", children: null };
      obj1[2] = sku.description;
      tmp7Result = tmp7(tmp2(4281).Text, obj1);
    }
    items[1] = tmp7Result;
    obj[1] = items;
    tmp5Result = closure_16(closure_7, obj);
    const tmp2Result = tmp2(1856);
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
    let obj = require(4522) /* _httpGetWithCountryCodeQuery */;
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
  let obj1 = require(1856) /* isNullOrEmpty */;
  if (obj1.isNullOrEmpty(trimmed)) {
    let tmp8Result = tmp8(1856);
    if (tmp8Result.isNullOrEmpty(trimmed1)) {
      tmp8Result = tmp8(1856);
      let tmp11Result = null;
    }
    return tmp11Result;
  }
  obj = { style: tmp.section, children: null };
  const isNullOrEmptyResult = require(1856) /* isNullOrEmpty */.isNullOrEmpty(trimmed);
  let tmp14 = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
    obj[2] = trimmed;
    tmp14 = callback(tmp8(4281).Heading, obj);
  }
  const items = [tmp14, , ];
  const tmp8Result1 = require(1856) /* isNullOrEmpty */;
  const isNullOrEmptyResult1 = require(1856) /* isNullOrEmpty */.isNullOrEmpty(trimmed1);
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
      tmp18 = callback(importDefault(5236), obj2);
    }
    const items1 = [tmp18, ];
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj4[2] = trimmed1;
    items1[1] = callback(tmp8(4281).Text, obj4);
    obj1[1] = items1;
    tmp11Result = tmp11(tmp12, obj1);
  }
  items[1] = tmp11Result;
  const tmp8Result2 = require(1856) /* isNullOrEmpty */;
  const isNullOrEmptyResult2 = require(1856) /* isNullOrEmpty */.isNullOrEmpty(trimmed2);
  let tmp23 = !isNullOrEmptyResult2;
  if (!isNullOrEmptyResult2) {
    const obj5 = { variant: "text-md/medium", color: "text-default", children: null };
    obj5[2] = trimmed2;
    tmp23 = callback(tmp8(4281).Text, obj5);
  }
  items[2] = tmp23;
  obj[1] = items;
  tmp11Result = tmp11(tmp12, obj);
}
function SocialLayerStorefrontProductDetailsModal(skuId) {
  let arr10;
  let arr9;
  let c13;
  let tmp32;
  skuId = skuId.skuId;
  const analyticsLocations = skuId.analyticsLocations;
  let dependencyMap;
  let storeFront;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let memo1;
  let useNativeCheckoutStore;
  let memo2;
  let handleUserSettingsStoreUpdate;
  let callback;
  let c12;
  c13 = undefined;
  let closure_14;
  let callback1;
  let c16;
  const tmp = callback3();
  dependencyMap = tmp;
  const rect = analyticsLocations(1581)();
  let obj = analyticsLocations(7572);
  storeFront = obj.useNativeIAPPayments().storeFront;
  let obj1 = skuId(589);
  let items = [memo2];
  stateFromStores = obj1.useStateFromStores(items, () => memo2.get(skuId));
  let obj2 = skuId(589);
  let items1 = [memo2];
  stateFromStores1 = obj2.useStateFromStores(items1, () => memo2.isFetching(skuId) || memo2.didFetchingSkuFail(skuId));
  let obj3 = skuId(5616);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = obj3.useGetOrFetchApplication(applicationId);
  let tmp10 = getOrFetchApplication;
  let tmp2Result = tmp2(5613);
  if (getOrFetchApplication == null) {
    tmp10 = null;
  }
  let tmp4Result = tmp4(589);
  const items2 = [handleUserSettingsStoreUpdate];
  stateFromStores2 = tmp4Result.useStateFromStores(items2, () => ref.getSkuAssets());
  let obj5 = stateFromStores;
  const items3 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => skuId(_undefined[27]).getCardImageURL(stateFromStores), items3);
  const tmp14 = storeFront(stateFromStores.useState(0), 2);
  const first = tmp14[0];
  const items4 = [analyticsLocations];
  memo1 = stateFromStores.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, analyticsLocations(_undefined[28]).SLAYER_STOREFRONT_NATIVE_PDP];
    return items1;
  }, items4);
  const tmp17 = analyticsLocations(5598)(() => skuId(_undefined[30]).v4());
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
    obj[7] = c8;
    return obj;
  }, items5);
  analyticsLocations(4711)(() => {
    let obj = analyticsLocations(_undefined[32]);
    obj = { location_stack: memo1, type: skuId(_undefined[33]).SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY, sku_id: skuId, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[3] = applicationId;
    obj.track(_undefined2.OPEN_MODAL, obj);
  });
  handleUserSettingsStoreUpdate = obj5.useRef("not_started");
  tmp4Result = tmp4(4711);
  const unmountEffect = tmp4Result.useUnmountEffect(() => {
    if ("pending" === ref.current) {
      analyticsLocations(_undefined[32]).track(_undefined2.PAYMENT_FLOW_CANCELED, memo2);
      const obj = analyticsLocations(_undefined[32]);
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
    let obj = analyticsLocations(_undefined[32]);
    obj = { slayer_storefront_session_id: "Array", sku_id: "a", guild_id: true, application_id: true, cta_type: "SOURCE", location_stack: null };
    obj[1] = skuId;
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[3] = applicationId;
    obj[4] = arg0;
    obj[5] = memo1;
    obj.track(_undefined2.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, obj);
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
      const obj2 = skuId(_undefined[13]);
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
      obj[0] = skuId(_undefined[13]).MOBILE_HERO_WIDTH_PX;
      result = obj2.convertCarouselItemsToMediaItems(carouselItems, tmp.applicationId, stateFromStores2, obj);
      const tmp8 = skuId;
      const tmp9 = _undefined;
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
  c12 = tmp30;
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
    let applicationId;
    let id;
    if (tmp2) {
      let current = c12;
      if (!c12) {
        current = stateFromStores1;
      }
      if (!current) {
        current = ref2.current;
      }
      if (!current) {
        ref2.current = true;
        let obj = skuId(_undefined[34]);
        obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        ({ applicationId, id } = tmp);
        obj[0] = skuId(_undefined[35]).isAndroid();
        let country;
        if (storeFront != null) {
          country = storeFront.country;
        }
        obj[1] = country;
        const obj3 = skuId(_undefined[35]);
        const tmp5 = skuId;
        const tmp6 = _undefined;
        let APPLE;
        if (tmp5Result.isIOS()) {
          APPLE = _undefined3.APPLE;
        }
        obj[2] = APPLE;
        const socialLayerStorefrontSkuForApplication = obj.fetchSocialLayerStorefrontSkuForApplication(applicationId, id, obj);
        tmp5Result = skuId(_undefined[35]);
      }
    }
  }, items8);
  const items9 = [memo2];
  callback1 = obj5.useCallback(() => {
    if ("pending" === ref.current) {
      tmp.current = "failed";
      analyticsLocations(_undefined[32]).track(_undefined2.PAYMENT_FLOW_FAILED, memo2);
      const obj = analyticsLocations(_undefined[32]);
    }
    _undefined3(false);
  }, items9);
  const tmp36 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  obj = { skuId, sku: stateFromStores, analyticsLoadId: tmp17, analyticsLocations: memo1, orderId: null, analyticsData: null, onPurchaseComplete: null, onPurchaseError: null, onPurchasePending: null };
  let id;
  tmp2Result = tmp2(10009);
  if (tmp36 != null) {
    id = tmp36.id;
  }
  obj[4] = id;
  obj[5] = memo2;
  obj[6] = function onPurchaseComplete() {
    handleUserSettingsStoreUpdate.current = "succeeded";
    let obj = skuId(_undefined[35]);
    if (obj.isIOS()) {
      analyticsLocations(tmp2[32]).track(_undefined2.PAYMENT_FLOW_SUCCEEDED, memo2);
      const obj2 = analyticsLocations(tmp2[32]);
    }
    _undefined3(false);
    obj = { skuId, orbsReward: null, analyticsLocations: null };
    let orbsReward;
    if (stateFromStores != null) {
      orbsReward = stateFromStores.orbsReward;
    }
    obj[1] = orbsReward;
    obj[2] = memo1;
    const result = skuId(_undefined[33]).openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj);
    result.then(skuId(_undefined[33]).closeSocialLayerStorefrontProductDetailsModal);
  };
  obj[7] = function onPurchaseError() {
    callback1(null);
  };
  obj[8] = function onPurchasePending() {

  };
  const tmp2Result1Result = tmp2Result(obj);
  c16 = tmp2Result1Result;
  const items10 = [tmp2Result1Result, callback, memo2, callback1];
  const items11 = [skuId, memo1, callback];
  const callback2 = obj5.useCallback(() => {
    callback(callback.BUY_BUTTON);
    handleUserSettingsStoreUpdate.current = "pending";
    analyticsLocations(_undefined[32]).track(_undefined2.PAYMENT_FLOW_STARTED, memo2);
    _undefined3(true);
    const obj = analyticsLocations(_undefined[32]);
    _undefined4().catch((arg0) => {
      callback(arg0);
    });
  }, items10);
  if (null == stateFromStores) {
    return null;
  } else {
    let result = tmp4(5761).isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = tmp4(1236).intl;
    const stringResult = intl4.string(tmp4(1236).t.boqtTA);
    const items12 = [tmp.container, ];
    const tmp4Result1 = tmp4(5761);
    let num3 = 0;
    if (!tmp4Result2.isIOS()) {
      num3 = rect.top;
    }
    obj = { style: null, children: null };
    obj1 = { paddingTop: null };
    obj1[0] = num3;
    items12[1] = obj1;
    obj[0] = items12;
    obj2 = { style: null, children: null };
    obj2[0] = tmp.header;
    obj3 = { onPress: null, backImage: null, accessibilityLabel: null, labelVisible: false };
    obj3[0] = tmp4(10004).closeSocialLayerStorefrontProductDetailsModal;
    obj3[1] = function backImage() {
      return callback1(skuId(_undefined[39]).XSmallIcon, { size: "md", style: _undefined.closeButtonIcon });
    };
    const intl = tmp4(1236).intl;
    obj3[2] = intl.string(tmp4(1236).t.cpT0Cq);
    const items13 = [callback1(tmp4(5245).HeaderBackButton, obj3), ];
    const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
    obj4[2] = tmp.headerTitle;
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj4[3] = name;
    items13[1] = callback1(tmp4(4281).Heading, obj4);
    obj2[1] = items13;
    const items14 = [c16(memo1, obj2), , ];
    obj5 = { style: null, children: null };
    obj5[0] = tmp.scrollContainer;
    let exclusive = stateFromStores.exclusive;
    if (exclusive) {
      const obj6 = { style: null, colors: null, pointerEvents: "none" };
      obj6[0] = stateFromStores2.absoluteFill;
      const items15 = [closure_18, closure_19];
      obj6[1] = items15;
      exclusive = tmp42(tmp2(4706), obj6);
    }
    const items16 = [exclusive, ];
    const obj7 = { contentContainerStyle: null, children: null };
    obj7[0] = tmp.scrollContent;
    if (null != tmp29) {
      const obj8 = { mediaItem: null };
      obj8[0] = tmp29;
      let tmp42Result = tmp42(HeroMedia, obj8);
    } else {
      tmp42Result = null != memo;
      if (tmp42Result) {
        const obj9 = { sku: null };
        obj9[0] = stateFromStores;
        tmp42Result = tmp42(tmp2(9316), obj9);
      }
    }
    const items17 = [tmp42Result, , ];
    let exclusive2 = stateFromStores.exclusive;
    if (exclusive2) {
      const obj10 = { style: null, children: null };
      obj10[0] = tmp.exclusiveBadgeContainer;
      obj10[1] = tmp42(tmp4(10011).ExclusiveBadge, {});
      exclusive2 = tmp42(tmp64, obj10);
    }
    items17[1] = exclusive2;
    if (tmp27) {
      const obj11 = { sku: null };
      obj11[0] = stateFromStores;
      const items18 = [tmp42(SKUNameAndDescriptionSection, obj11), , ];
      const obj12 = { items: null, mediaItems: null, selectedIndex: null, onSelectIndex: null, trackPDPClick: null };
      obj12[0] = arr9;
      obj12[1] = arr10;
      obj12[2] = num;
      obj12[3] = tmp14[1];
      obj12[4] = callback;
      items18[1] = tmp42(BundleThumbnailRow, obj12);
      tmp42Result = null != stateFromStores.applicationId && null != tmp28;
      if (tmp42Result) {
        const obj13 = { selectedItem: null, applicationId: null };
        obj13[0] = tmp28;
        obj13[1] = stateFromStores.applicationId;
        tmp42Result = tmp42(ItemDetailsSection, obj13);
      }
      const obj14 = { children: null };
      items18[2] = tmp42Result;
      obj14[0] = items18;
      let tmp42Result1 = tmp63(closure_17, obj14);
      const tmp52 = closure_17;
    } else {
      const obj15 = { sku: null };
      obj15[0] = stateFromStores;
      tmp42Result1 = tmp42(SKUNameAndDescriptionSection, obj15);
    }
    items17[2] = tmp42Result1;
    obj7[1] = items17;
    items16[1] = c16(stateFromStores1, obj7);
    obj5[1] = items16;
    items14[1] = c16(memo1, obj5);
    const obj16 = { style: null, children: null };
    const items19 = [tmp.footer, ];
    const obj17 = { paddingBottom: null };
    obj17[0] = rect.bottom + tmp2(712).space.PX_16;
    items19[1] = obj17;
    obj16[0] = items19;
    const obj18 = { sku: null };
    obj18[0] = stateFromStores;
    const items20 = [callback1(ProductPriceSection, obj18), , , ];
    let tmp42Result2 = !result;
    if (!result) {
      const obj19 = { variant: "text-xs/normal", color: "text-muted", style: null, children: null };
      obj19[2] = tmp.availabilityCopy;
      const intl2 = tmp4(1236).intl;
      obj19[3] = intl2.string(tmp2(3223).gndWN7);
      tmp42Result2 = tmp42(tmp4(4281).Text, obj19);
    }
    items20[1] = tmp42Result2;
    const obj20 = { style: null, children: null };
    obj20[0] = tmp.footerButtonRow;
    const obj21 = { style: null, children: null };
    obj21[0] = tmp.buyButton;
    const obj22 = { variant: "primary", size: "lg", text: null, loading: null, disabled: null, onPress: null };
    obj22[2] = stringResult;
    obj22[3] = tmp32;
    let tmp59 = tmp32;
    if (!tmp32) {
      tmp59 = !result;
    }
    obj22[4] = tmp59;
    obj22[5] = callback2;
    obj21[1] = callback1(tmp4(4695).Button, obj22);
    const items21 = [callback1(memo1, obj21), ];
    const obj23 = { icon: null, variant: "primary", size: "lg", disabled: null, accessibilityLabel: null, onPress: null };
    obj23[0] = tmp2(7993);
    obj23[3] = tmp32;
    const intl3 = tmp4(1236).intl;
    obj23[4] = intl3.string(tmp4(1236).t.QAZA5f);
    obj23[5] = tmp41;
    items21[1] = callback1(tmp4(7672).IconButton, obj23);
    obj20[1] = items21;
    items20[2] = c16(memo1, obj20);
    if (result) {
      const obj24 = { style: null, children: null };
      obj24[0] = tmp.legalCopy;
      const obj25 = { shouldAppendDisclaimer: null };
      obj25[0] = false === tmp2Result(tmp10).hasAlreadyLinked;
      const mobileFinePrintMessageForApplication = tmp4(10012).getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, obj25);
      obj24[1] = mobileFinePrintMessageForApplication.map((children) => callback1(skuId(_undefined[16]).Text, { variant: "text-xs/normal", color: "text-muted", children }, arg1));
      result = tmp42(tmp64, obj24);
      const tmp4Result3 = tmp4(10012);
      const tmp60 = getOrFetchApplication;
    }
    items20[3] = result;
    obj16[1] = items20;
    items14[2] = c16(memo1, obj16);
    obj[1] = items14;
    return c16(memo1, obj);
  }
  tmp27 = arr10.length > 1;
}
function SocialLayerStorefrontProductDetailsModalWithOrderCTX(skuId) {
  let obj = require(500) /* set */;
  if (obj.isIOS()) {
    let GOOGLE = tmp3.APPLE_ADVANCED_COMMERCE;
    let tmp4 = tmp3;
  } else {
    GOOGLE = tmp3.GOOGLE;
    tmp4 = tmp3;
  }
  const OTPACOMOrderExperiment = tmp(7333).OTPACOMOrderExperiment;
  let enabled = OTPACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontProductDetailsModal" }).enabled;
  obj = { paymentGateway: GOOGLE, orderRequired: null, skuIds: null, isGift: false, activeSubscription: null, onOrderRetryCancellation: null, children: null };
  if (enabled) {
    enabled = GOOGLE === tmp4.APPLE_ADVANCED_COMMERCE;
  }
  obj[1] = enabled;
  const items = [skuId.skuId];
  obj[2] = items;
  obj[5] = require(10004) /* SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY */.closeSocialLayerStorefrontProductDetailsModal;
  obj = {};
  const merged = Object.assign(skuId);
  obj[6] = closure_15(SocialLayerStorefrontProductDetailsModal, obj);
  return closure_15(importDefault(7334), obj, skuId.skuId);
}
({ ScrollView: c5, StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, PaymentGateways: map1, PriceSetAssignmentPurchaseTypes: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const importDefaultResultResult = require("n")(require("Themes").unsafe_rawColors.BRAND_500);
let closure_18 = require("n")(require("Themes").unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const alphaResult = require("n")(require("Themes").unsafe_rawColors.BRAND_500).alpha(0.25);
const importDefaultResult1Result = require("n")(require("Themes").unsafe_rawColors.BRAND_500);
let closure_19 = require("_slicedToArray").hex();
let obj = { container: { flex: 1 }, header: null, headerTitle: null, closeButtonIcon: null, scrollContent: null, scrollContainer: null, section: null, bundleThumbnailRow: null, thumbnail: null, thumbnailSelected: null, thumbnailInner: null, thumbnailInnerSelected: null, thumbnailImage: null, labelRow: null, labelIcon: null, priceRow: null, footer: null, footerButtonRow: null, buyButton: null, availabilityCopy: null, legalCopy: null, hero: null, priceSection: null, heroImage: null, exclusiveBadgeContainer: null };
obj = { height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: require("Themes").space.PX_8, gap: require("Themes").space.PX_8, borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
obj[1] = obj;
obj[2] = { flexShrink: 1 };
obj[3] = { tintColor: require("Themes").colors.INTERACTIVE_ICON_DEFAULT };
let obj1 = { tintColor: require("Themes").colors.INTERACTIVE_ICON_DEFAULT };
obj[4] = { alignItems: "stretch", gap: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_16 };
obj[5] = { flex: 1 };
let obj2 = { alignItems: "stretch", gap: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_16 };
obj[6] = { width: "100%", paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
createCacheKey = { flexDirection: "row", gap: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_4 };
obj[7] = createCacheKey;
let obj3 = { width: "100%", paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_8 };
obj[8] = { width: 64, height: 64, borderRadius: require("Themes").radii.md, borderWidth: 2, borderColor: "transparent" };
let obj5 = { width: 64, height: 64, borderRadius: require("Themes").radii.md, borderWidth: 2, borderColor: "transparent" };
obj[9] = { borderColor: require("Themes").colors.BORDER_STRONG };
let obj6 = { borderColor: require("Themes").colors.BORDER_STRONG };
obj[10] = { flex: 1, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
let obj7 = { flex: 1, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
obj[11] = { margin: 2, borderRadius: require("Themes").radii.sm };
obj[12] = { width: "100%", height: "100%" };
let obj8 = { margin: 2, borderRadius: require("Themes").radii.sm };
obj[13] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
obj[14] = { width: require("Themes").space.PX_16, height: require("Themes").space.PX_16 };
let obj10 = { width: require("Themes").space.PX_16, height: require("Themes").space.PX_16 };
obj[15] = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: require("Themes").space.PX_8 };
let obj11 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: require("Themes").space.PX_8 };
obj[16] = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_12, gap: require("Themes").space.PX_8, borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
let obj12 = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_12, gap: require("Themes").space.PX_8, borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
obj[17] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
obj[18] = { flex: 1 };
obj[19] = { textAlign: "center" };
let obj13 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
obj[20] = { display: "flex", flexDirection: "column", gap: require("Themes").space.PX_4 };
let obj14 = { display: "flex", flexDirection: "column", gap: require("Themes").space.PX_4 };
obj[21] = { marginHorizontal: require("Themes").space.PX_16, height: require("WEB_HERO_WIDTH_PX").MOBILE_HERO_HEIGHT_PX, borderRadius: require("Themes").radii.md, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
let obj15 = { marginHorizontal: require("Themes").space.PX_16, height: require("WEB_HERO_WIDTH_PX").MOBILE_HERO_HEIGHT_PX, borderRadius: require("Themes").radii.md, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
obj[22] = { width: "100%", gap: require("Themes").space.PX_8 };
obj[23] = { width: "100%", height: "100%" };
let obj16 = { width: "100%", gap: require("Themes").space.PX_8 };
obj[24] = { paddingHorizontal: require("Themes").space.PX_16 };
let closure_20 = createCacheKey.createStyles(obj);
let obj17 = { paddingHorizontal: require("Themes").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx");

export default function WrappedSocialLayerStorefrontProductDetailsModal(arg0) {
  let obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[2] = callback(SocialLayerStorefrontProductDetailsModalWithOrderCTX, obj);
  return callback(require(9489) /* NativePaymentContextProvider */.NativePaymentContextProvider, obj);
};