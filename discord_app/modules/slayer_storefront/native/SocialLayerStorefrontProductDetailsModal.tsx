// === Module 10799: SocialLayerStorefrontProductDetailsModal ===

// Module 10799 (SocialLayerStorefrontProductDetailsModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import StringUtils from "StringUtils" /* 1925 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4231 */;
import Text_Text from "Text/Text" /* 4556 */;
import StoreUtils from "StoreUtils" /* 4802 */;
import FastImageDefault from "FastImage" /* 5587 */;
import XSmallIcon from "XSmallIcon" /* 5680 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7226 */;
import common_Video from "common/Video" /* 8307 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10797 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10798 */;
import carouselMediaItems from "carouselMediaItems" /* 10801 */;
import StorefrontNativeUtils from "StorefrontNativeUtils" /* 10802 */;
import redirectToSlayerStorefrontWebDefault from "redirectToSlayerStorefrontWeb" /* 10803 */;
import NativePaymentContext from "NativePaymentContext" /* 10822 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SKUStore from "SKUStore" /* 5510 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7228 */;
import n from "module_672" /* 672 */;

require = fn;
function HeroMedia(mediaItem) {
  mediaItem = mediaItem.mediaItem;
  const tmp = closure_19();
  if ("video" === mediaItem.type) {
    let obj = { style: tmp.hero, children: null };
    obj = { source: null, poster: null, muted: true, resizeMode: "cover", style: null };
    const obj1 = { uri: mediaItem.src };
    obj.source = obj1;
    obj.poster = mediaItem.videoThumbnailSrc;
    obj.style = tmp.heroImage;
    obj.children = closure_1_14(common_Video.VideoComponent, obj);
    let tmp6 = closure_1_14(React5, obj);
  } else if (null != mediaItem.backgroundSrc) {
    const obj2 = { style: tmp.hero, children: null };
    const obj3 = { source: null, style: null, resizeMode: "cover" };
    const obj4 = { uri: mediaItem.backgroundSrc };
    obj3.source = obj4;
    obj3.style = absoluteFill.absoluteFill;
    const items = [closure_1_14(FastImageDefault, obj3), ];
    const obj5 = { source: null, style: null, resizeMode: "cover" };
    const obj6 = { uri: mediaItem.src };
    obj5.source = obj6;
    obj5.style = tmp.heroImage;
    items[1] = closure_1_14(FastImageDefault, obj5);
    obj2.children = items;
    tmp6 = __initData(React5, obj2);
  } else {
    obj = { style: tmp.hero, children: null };
    const obj7 = { source: null, style: null, resizeMode: "cover" };
    const obj8 = { uri: mediaItem.src };
    obj7.source = obj8;
    obj7.style = tmp.heroImage;
    obj.children = closure_1_14(FastImageDefault, obj7);
    tmp6 = closure_1_14(React5, obj);
  }
  return tmp6;
}
function InGameItemTag() {
  const obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.V91tvy);
  return closure_1_14(Text_Text.Text, obj);
}
function ProductPriceSection(sku) {
  const tmp = closure_19();
  let obj = { sku: sku.sku, priceSetAssignmentPurchaseType: constants3.DEFAULT };
  const userPrice = obj.useFormattedSKUPrice(obj).userPrice;
  let tmp4 = null;
  if (null != userPrice) {
    obj = { style: tmp.priceSection, children: null };
    const items = [closure_1_14(InGameItemTag, {}), ];
    const obj1 = { style: tmp.priceRow, children: null };
    const obj2 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: userPrice };
    obj1.children = closure_1_14(Text_Text.Text, obj2);
    items[1] = closure_1_14(React5, obj1);
    obj.children = items;
    tmp4 = __initData(React5, obj);
  }
  return tmp4;
}
function BundleThumbnailRow(trackPDPClick) {
  ({ items: require, mediaItems, selectedIndex: importDefault, onSelectIndex } = trackPDPClick);
  trackPDPClick = trackPDPClick.trackPDPClick;
  const tmp = closure_19();
  noop = tmp;
  let items = [onSelectIndex, trackPDPClick];
  closure_5 = noop.useCallback((arg0) => {
    trackPDPClick(SlayerShopPDPCTAType.CAROUSEL_ITEM);
    onSelectIndex(arg0);
  }, items);
  let obj = { style: tmp.section, children: null };
  obj = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = require("util").intl;
  obj.children = intl.string(require("util").t.U7DAV9);
  let items1 = [closure_14(require("Text/Text").Text, obj), ];
  obj = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: tmp.bundleThumbnailRow,
    children: mediaItems.map((item, index) => {
      dependencyMap = index;
      let label;
      if (dependencyMap[index] != null) {
        label = tmp.label;
      }
      if (label == null) {
        let title;
        if (tmp != null) {
          title = tmp.title;
        }
        label = title;
      }
      let thumbnailInnerSelected = index === closure_1;
      let obj = {
        accessibilityRole: "button",
        accessibilityLabel: label,
        accessibilityState: { selected: thumbnailInnerSelected },
        onPress() {
          return closure_5(closure_0);
        },
        style: null,
        children: null
      };
      const items = [thumbnail.thumbnail, ];
      let thumbnailSelected = thumbnailInnerSelected;
      if (thumbnailInnerSelected) {
        thumbnailSelected = thumbnail.thumbnailSelected;
      }
      items[1] = thumbnailSelected;
      obj.style = items;
      const items1 = [thumbnail.thumbnailInner, ];
      if (thumbnailInnerSelected) {
        thumbnailInnerSelected = thumbnail.thumbnailInnerSelected;
      }
      obj = { style: items1, children: null };
      items1[1] = thumbnailInnerSelected;
      obj = { source: null, style: null, resizeMode: "cover" };
      const obj1 = { uri: null };
      const tmp10 = require("FastImage");
      obj1.uri = dependencyMap(onSelectIndex[12]).getThumbnailSrc(item);
      obj.source = obj1;
      obj.style = thumbnail.thumbnailImage;
      obj.children = closure_1_14(tmp10, obj);
      obj.children = closure_1_14(closure_1_7, obj);
      return closure_1_14(dependencyMap(onSelectIndex[18]).PressableOpacity, obj, index);
    })
  };
  items1[1] = closure_14(closure_5, obj);
  obj.children = items1;
  return closure_15(closure_7, obj);
}
function SKUNameAndDescriptionSection(sku) {
  sku = sku.sku;
  let obj = StringUtils;
  let tmp5Result = null;
  if (!obj.isNullOrEmpty(sku.name)) {
    obj = { style: tmp.section, children: null };
    obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: sku.name };
    const items = [closure_1_14(Text_Text.Heading, obj), ];
    const isNullOrEmptyResult = StringUtils.isNullOrEmpty(sku.description);
    let tmp7Result = !isNullOrEmptyResult;
    if (!isNullOrEmptyResult) {
      const obj1 = { variant: "text-md/medium", color: "text-muted", children: sku.description };
      tmp7Result = closure_1_14(Text_Text.Text, obj1);
    }
    items[1] = tmp7Result;
    obj.children = items;
    tmp5Result = __initData(React5, obj);
    const tmp2Result = StringUtils;
  }
  return tmp5Result;
}
function ItemDetailsSection(selectedItem) {
  selectedItem = selectedItem.selectedItem;
  const tmp = closure_19();
  let assetURL = null;
  if (null != selectedItem.labelIconAssetId) {
    let obj = StoreUtils;
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
  let obj1 = StringUtils;
  if (obj1.isNullOrEmpty(trimmed)) {
    let tmp8Result = StringUtils;
    if (tmp8Result.isNullOrEmpty(trimmed1)) {
      tmp8Result = StringUtils;
      let tmp11Result = null;
    }
    return tmp11Result;
  }
  obj = { style: tmp.section, children: null };
  const isNullOrEmptyResult = StringUtils.isNullOrEmpty(trimmed);
  let tmp14 = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: trimmed };
    tmp14 = closure_1_14(Text_Text.Heading, obj);
  }
  const items = [tmp14, , ];
  const tmp8Result1 = StringUtils;
  const isNullOrEmptyResult1 = StringUtils.isNullOrEmpty(trimmed1);
  tmp11Result = !isNullOrEmptyResult1;
  if (!isNullOrEmptyResult1) {
    obj1 = { style: tmp.labelRow, children: null };
    let tmp18 = null != assetURL;
    if (tmp18) {
      const obj2 = { source: null, style: null };
      const obj3 = { uri: assetURL };
      obj2.source = obj3;
      obj2.style = tmp.labelIcon;
      tmp18 = closure_1_14(FastImageDefault, obj2);
    }
    const items1 = [tmp18, ];
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: trimmed1 };
    items1[1] = closure_1_14(Text_Text.Text, obj4);
    obj1.children = items1;
    tmp11Result = __initData(React5, obj1);
  }
  items[1] = tmp11Result;
  const tmp8Result2 = StringUtils;
  const isNullOrEmptyResult2 = StringUtils.isNullOrEmpty(trimmed2);
  let tmp23 = !isNullOrEmptyResult2;
  if (!isNullOrEmptyResult2) {
    const obj5 = { variant: "text-md/medium", color: "text-default", children: trimmed2 };
    tmp23 = closure_1_14(Text_Text.Text, obj5);
  }
  items[2] = tmp23;
  obj.children = items;
  tmp11Result = __initData(React5, obj);
  const tmp8Result3 = StringUtils;
}
function SocialLayerStorefrontProductDetailsModal(skuId) {
  skuId = skuId.skuId;
  const analyticsLocations = skuId.analyticsLocations;
  let stateFromStores2;
  let memo1;
  let trackPDPClick;
  let skuAssets;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  const tmp = closure_19();
  dependencyMap = tmp;
  const rect = analyticsLocations(1611)();
  let obj = analyticsLocations(9366);
  const storeFront = obj.useNativeIAPPayments().storeFront;
  let obj1 = skuId(504);
  let items = [trackPDPClick];
  const stateFromStores = obj1.useStateFromStores(items, () => SKUStore.get(skuId));
  let obj2 = skuId(504);
  let items1 = [trackPDPClick];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => SKUStore.isFetching(skuId) || SKUStore.didFetchingSkuFail(skuId));
  let obj3 = skuId(7168);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = obj3.useGetOrFetchApplication(applicationId);
  let tmp10 = getOrFetchApplication;
  let tmp2Result = tmp2(7165);
  if (getOrFetchApplication == null) {
    tmp10 = null;
  }
  let tmp4Result = tmp4(504);
  const items2 = [skuAssets];
  stateFromStores2 = tmp4Result.useStateFromStores(items2, () => skuAssets.getSkuAssets());
  let obj5 = stateFromStores;
  const items3 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => SlayerStorefrontUtils.getCardImageURL(stateFromStores), items3);
  const tmp14 = storeFront(stateFromStores.useState(0), 2);
  const first = tmp14[0];
  const items4 = [analyticsLocations];
  memo1 = stateFromStores.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PDP];
    return items1;
  }, items4);
  analyticsLocations(4992)(() => {
    const obj = { location_stack: memo1, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY, sku_id: skuId, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(constants.OPEN_MODAL, obj);
  });
  const items5 = [skuId, , ];
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  items5[1] = applicationId1;
  items5[2] = memo1;
  trackPDPClick = stateFromStores.useCallback((cta_type) => {
    const obj = { slayer_storefront_session_id: "Array", sku_id: skuId, guild_id: true, application_id: true, cta_type: "unmarkNodeAsRemovable", location_stack: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.cta_type = cta_type;
    obj.location_stack = memo1;
    obj.track(constants.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, obj);
  }, items5);
  const items6 = [stateFromStores, stateFromStores2];
  let tmp13Result = tmp13(obj5.useMemo(() => {
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    if (null == applicationId) {
      const items = [[], []];
      let result = items;
    } else {
      const obj2 = carouselMediaItems;
      const tenantMetadata = stateFromStores.tenantMetadata;
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
      const obj = { heroWidth: carouselMediaItems.MOBILE_HERO_WIDTH_PX };
      result = obj2.convertCarouselItemsToMediaItems(carouselItems, stateFromStores.applicationId, stateFromStores2, obj);
    }
    return result;
  }, items6), 2);
  [arr8, arr9] = tmp13Result;
  let num = 0;
  if (first < arr9.length) {
    num = first;
  }
  let tmp22 = arr8[num];
  if (tmp22 == null) {
    tmp22 = null;
  }
  let tmp23 = arr9[num];
  if (tmp23 == null) {
    tmp23 = null;
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
  skuAssets = tmp24;
  tmp13Result = tmp13(obj5.useState(false), 2);
  [tmp26, c10] = tmp13Result;
  [tmp28, c11] = storeFront(obj5.useState(false), 2);
  const tmp13Result1 = storeFront(obj5.useState(false), 2);
  const tmp21 = arr9.length > 1;
  [tmp30, c12] = storeFront(obj5.useState(0), 2);
  obj5.useRef(false);
  const items7 = [stateFromStores, stateFromStores2, num2 === arr8.length, stateFromStores1, ];
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  items7[4] = country;
  const effect = obj5.useEffect(() => {
    if (tmp2) {
      let current = closure_9;
      if (!closure_9) {
        current = stateFromStores1;
      }
      if (!current) {
        current = ref.current;
      }
      if (!current) {
        ref.current = true;
        const obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        ({ applicationId, id } = stateFromStores);
        obj.withGoogleSkuIds = PlatformUtils.isAndroid();
        let country;
        if (storeFront != null) {
          country = storeFront.country;
        }
        obj.countryCode = country;
        let APPLE;
        if (tmp5Result.isIOS()) {
          APPLE = constants2.APPLE;
        }
        obj.paymentGateway = APPLE;
        const socialLayerStorefrontSkuForApplication = obj.fetchSocialLayerStorefrontSkuForApplication(applicationId, id, obj);
        tmp5Result = PlatformUtils;
      }
    }
    tmp2 = null != stateFromStores && null != stateFromStores.applicationId;
  }, items7);
  const items8 = [skuId, , ];
  let orbsReward;
  const callback1 = obj5.useCallback(() => {
    _undefined(false);
  }, []);
  if (stateFromStores != null) {
    orbsReward = stateFromStores.orbsReward;
  }
  items8[1] = orbsReward;
  items8[2] = memo1;
  const items9 = [trackPDPClick, , ];
  let applicationId2;
  const callback2 = obj5.useCallback(() => {
    _undefined(false);
    const obj = { skuId, orbsReward: null, analyticsLocations: null };
    let orbsReward;
    if (stateFromStores != null) {
      orbsReward = stateFromStores.orbsReward;
    }
    obj.orbsReward = orbsReward;
    obj.analyticsLocations = memo1;
    const result = obj.openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj);
    result.then(SocialLayerStorefrontNativeActionCreators.closeSocialLayerStorefrontProductDetailsModal);
  }, items8);
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  items9[1] = applicationId2;
  items9[2] = skuId;
  const callback3 = obj5.useCallback(() => {
    callback(SlayerShopPDPCTAType.BUY_BUTTON);
    let obj = BillingPlatformUtils;
    if (obj.isSocialLayerStorefrontPurchaseSupported()) {
      _undefined2(true);
      _undefined3((arg0) => arg0 + 1);
      _undefined(true);
    } else {
      let applicationId;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      obj = { applicationId, skuId, source: "SocialLayerStorefrontProductDetailsModal" };
      redirectToSlayerStorefrontWebDefault(obj).then((result) => {
        if (result) {
          result = skuId(closeButtonIcon[30]).closeSocialLayerStorefrontProductDetailsModal();
          const obj = skuId(closeButtonIcon[30]);
        }
      });
      const tmp4Result = redirectToSlayerStorefrontWebDefault(obj);
    }
  }, items9);
  const OTPACOMOrderExperiment = tmp4(9365).OTPACOMOrderExperiment;
  let enabled = OTPACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontProductDetailsModal" }).enabled;
  tmp4Result = tmp4(1115);
  if (tmp4Result.isIOS()) {
    let GOOGLE = tmp38.APPLE_ADVANCED_COMMERCE;
    let tmp39 = tmp38;
  } else {
    GOOGLE = tmp38.GOOGLE;
    tmp39 = tmp38;
  }
  let tmp41Result = null;
  if (tmp28) {
    obj = { headless: true, paymentGateway: GOOGLE, orderRequired: null, skuIds: null, isGift: false, activeSubscription: null, onOrderRetryCancellation: null, checkoutAnalyticsFields: null, children: null };
    tmp2Result = tmp2(10804);
    if (enabled) {
      enabled = GOOGLE === tmp39.APPLE_ADVANCED_COMMERCE;
    }
    obj.orderRequired = enabled;
    const items10 = [skuId];
    obj.skuIds = items10;
    obj.onOrderRetryCancellation = tmp4(10797).closeSocialLayerStorefrontProductDetailsModal;
    obj = { is_gift: false, location_stack: memo1, payment_type: "sku", sku_id: skuId, sku_type: null, sku_product_line: null, application_id: null };
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    obj.sku_type = type;
    let productLine;
    if (stateFromStores != null) {
      productLine = stateFromStores.productLine;
    }
    obj.sku_product_line = productLine;
    let applicationId3;
    if (stateFromStores != null) {
      applicationId3 = stateFromStores.applicationId;
    }
    obj.application_id = applicationId3;
    obj.checkoutAnalyticsFields = obj;
    obj1 = { attempt: tmp30, skuId, sku: stateFromStores, analyticsLocations: memo1, onPurchaseComplete: callback2, onPurchaseError: callback1 };
    obj.children = closure_14(tmp4(10813).HeadlessSlayerStorefrontPurchaseRunner, obj1);
    tmp41Result = closure_14(tmp2Result, obj, skuId);
  }
  const items11 = [skuId, memo1, trackPDPClick];
  if (null == stateFromStores) {
    return null;
  } else {
    let result = tmp4(7231).isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = tmp4(1114).intl;
    const stringResult = intl4.string(tmp4(1114).t.boqtTA);
    const tmp4Result1 = tmp4(7231);
    let result1 = tmp4(4231).isSocialLayerStorefrontGiftingSupported();
    const items12 = [tmp.container, ];
    const tmp4Result2 = tmp4(4231);
    let num3 = 0;
    if (!tmp4Result3.isIOS()) {
      num3 = rect.top;
    }
    obj2 = { style: null, children: null };
    obj3 = { paddingTop: num3 };
    items12[1] = obj3;
    obj2.style = items12;
    const items13 = [tmp41Result, , , ];
    const obj4 = { style: tmp.header, children: null };
    obj5 = {
      onPress: tmp4(10797).closeSocialLayerStorefrontProductDetailsModal,
      backImage() {
          return closure_2_14(XSmallIcon.XSmallIcon, { size: "md", style: closeButtonIcon.closeButtonIcon });
        },
      accessibilityLabel: null,
      displayMode: "minimal"
    };
    const intl = tmp4(1114).intl;
    obj5.accessibilityLabel = intl.string(tmp4(1114).t.cpT0Cq);
    const items14 = [closure_14(tmp4(5631).HeaderBackButton, obj5), ];
    const obj6 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerTitle, children: null };
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj6.children = name;
    items14[1] = closure_14(tmp4(4556).Heading, obj6);
    obj4.children = items14;
    items13[1] = closure_15(memo1, obj4);
    const obj7 = { style: tmp.scrollContainer, children: null };
    let exclusive = stateFromStores.exclusive;
    if (exclusive) {
      const obj8 = { style: stateFromStores2.absoluteFill, colors: null, pointerEvents: "none" };
      const items15 = [closure_17, closure_18];
      obj8.colors = items15;
      exclusive = closure_14(tmp2(4987), obj8);
    }
    const items16 = [exclusive, ];
    const obj9 = { contentContainerStyle: tmp.scrollContent, children: null };
    if (null != tmp23) {
      const obj10 = { mediaItem: tmp23 };
      let tmp47Result = closure_14(HeroMedia, obj10);
    } else {
      tmp47Result = null != memo;
      if (tmp47Result) {
        const obj11 = { sku: stateFromStores };
        tmp47Result = closure_14(tmp2(8825), obj11);
      }
    }
    const items17 = [tmp47Result, , ];
    let exclusive2 = stateFromStores.exclusive;
    if (exclusive2) {
      const obj12 = { style: tmp.exclusiveBadgeContainer, children: closure_14(tmp4(10817).ExclusiveBadge, {}) };
      exclusive2 = closure_14(tmp70, obj12);
    }
    items17[1] = exclusive2;
    if (tmp21) {
      const obj13 = { sku: stateFromStores };
      const items18 = [closure_14(SKUNameAndDescriptionSection, obj13), , ];
      const obj14 = { items: arr8, mediaItems: arr9, selectedIndex: num, onSelectIndex: tmp14[1], trackPDPClick };
      items18[1] = closure_14(BundleThumbnailRow, obj14);
      tmp47Result = null != stateFromStores.applicationId && null != tmp22;
      if (tmp47Result) {
        const obj15 = { selectedItem: tmp22, applicationId: stateFromStores.applicationId };
        tmp47Result = closure_14(ItemDetailsSection, obj15);
      }
      const obj16 = { children: null };
      items18[2] = tmp47Result;
      obj16.children = items18;
      let tmp47Result1 = closure_15(closure_16, obj16);
    } else {
      const obj17 = { sku: stateFromStores };
      tmp47Result1 = closure_14(SKUNameAndDescriptionSection, obj17);
    }
    items17[2] = tmp47Result1;
    obj9.children = items17;
    items16[1] = closure_15(stateFromStores1, obj9);
    obj7.children = items16;
    items13[2] = closure_15(memo1, obj7);
    const obj18 = { style: null, children: null };
    const items19 = [tmp.footer, ];
    const obj19 = { paddingBottom: rect.bottom + tmp2(576).space.PX_16 };
    items19[1] = obj19;
    obj18.style = items19;
    const obj20 = { sku: stateFromStores };
    const items20 = [closure_14(ProductPriceSection, obj20), , , ];
    let tmp47Result2 = !result;
    if (!result) {
      const obj21 = { variant: "text-xs/normal", color: "text-muted", style: tmp.availabilityCopy, children: null };
      const intl2 = tmp4(1114).intl;
      obj21.children = intl2.string(tmp2(3417).gndWN7);
      tmp47Result2 = closure_14(tmp4(4556).Text, obj21);
    }
    items20[1] = tmp47Result2;
    const obj22 = { style: tmp.footerButtonRow, children: null };
    const obj23 = { style: tmp.buyButton, children: null };
    const obj24 = { variant: "primary", size: "lg", text: stringResult, loading: tmp26, disabled: null, onPress: null };
    let tmp64 = tmp26;
    if (!tmp26) {
      tmp64 = !result;
    }
    obj24.disabled = tmp64;
    obj24.onPress = callback3;
    obj23.children = closure_14(tmp4(4975).Button, obj24);
    const items21 = [closure_14(memo1, obj23), ];
    if (result1) {
      const obj25 = { icon: tmp2(8083), variant: "primary", size: "lg", disabled: tmp26, accessibilityLabel: null, onPress: null };
      const intl3 = tmp4(1114).intl;
      obj25.accessibilityLabel = intl3.string(tmp4(1114).t.QAZA5f);
      obj25.onPress = tmp46;
      result1 = closure_14(tmp4(8097).IconButton, obj25);
    }
    items21[1] = result1;
    obj22.children = items21;
    items20[2] = closure_15(memo1, obj22);
    if (result) {
      const obj26 = { style: tmp.legalCopy, children: null };
      const obj27 = { shouldAppendDisclaimer: false === tmp2Result(tmp10).hasAlreadyLinked };
      const mobileFinePrintMessageForApplication = tmp4(10820).getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, obj27);
      obj26.children = mobileFinePrintMessageForApplication.map((children, index) => closure_1_14(skuId(closeButtonIcon[15]).Text, { variant: "text-xs/normal", color: "text-muted", children }, index));
      result = closure_14(tmp70, obj26);
      const tmp4Result4 = tmp4(10820);
    }
    items20[3] = result;
    obj18.children = items20;
    items13[3] = closure_15(memo1, obj18);
    obj2.children = items13;
    return closure_15(memo1, obj2);
  }
  const tmp13Result2 = storeFront(obj5.useState(0), 2);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const SlayerShopPDPCTAType = fn(10800).SlayerShopPDPCTAType;
const Constants = fn(1074);
({ AnalyticEvents: closure_11, PaymentGateways: closure_12, PriceSetAssignmentPurchaseTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_17 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const alphaResult = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.25);
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_18 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0).hex();
fn(4560);
let obj = { container: { flex: 1 }, header: null, headerTitle: null, closeButtonIcon: null, scrollContent: null, scrollContainer: null, section: null, bundleThumbnailRow: null, thumbnail: null, thumbnailSelected: null, thumbnailInner: null, thumbnailInnerSelected: null, thumbnailImage: null, labelRow: null, labelIcon: null, priceRow: null, footer: null, footerButtonRow: null, buyButton: null, availabilityCopy: null, legalCopy: null, hero: null, priceSection: null, heroImage: null, exclusiveBadgeContainer: null };
obj = { height: fn(5682).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj.header = obj;
obj.headerTitle = { flexShrink: 1 };
const alphaResult1 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0);
obj.closeButtonIcon = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
let obj1 = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
obj.scrollContent = { alignItems: "stretch", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
obj.scrollContainer = { flex: 1 };
let obj2 = { alignItems: "stretch", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
obj.section = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
const createStyles = { flexDirection: "row", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj.bundleThumbnailRow = createStyles;
let size = { width: 64, height: 64, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
obj.thumbnail = size;
let obj3 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj.thumbnailSelected = { borderColor: nativeDefault.colors.BORDER_STRONG };
let obj5 = { borderColor: nativeDefault.colors.BORDER_STRONG };
obj.thumbnailInner = { flex: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj6 = { flex: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.thumbnailInnerSelected = { margin: 2, borderRadius: nativeDefault.radii.sm };
obj.thumbnailImage = { width: "100%", height: "100%" };
let obj7 = { margin: 2, borderRadius: nativeDefault.radii.sm };
obj.labelRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj.labelIcon = size1;
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.priceRow = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let obj9 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let obj10 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj.footerButtonRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.buyButton = { flex: 1 };
obj.availabilityCopy = { textAlign: "center" };
let obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.legalCopy = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
let obj12 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
obj.hero = { marginHorizontal: nativeDefault.space.PX_16, height: fn(10801).MOBILE_HERO_HEIGHT_PX, borderRadius: nativeDefault.radii.md, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj13 = { marginHorizontal: nativeDefault.space.PX_16, height: fn(10801).MOBILE_HERO_HEIGHT_PX, borderRadius: nativeDefault.radii.md, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.priceSection = { width: "100%", gap: nativeDefault.space.PX_8 };
obj.heroImage = { width: "100%", height: "100%" };
let obj14 = { width: "100%", gap: nativeDefault.space.PX_8 };
obj.exclusiveBadgeContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_19 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx");

export default function WrappedSocialLayerStorefrontProductDetailsModal(arg0) {
  let obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = closure_1_14(SocialLayerStorefrontProductDetailsModal, obj);
  return closure_1_14(NativePaymentContext.NativePaymentContextProvider, obj);
};