// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import BillingPlatformUtils from "../../device/BillingPlatformUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import StoreUtils from "../../../utils/StoreUtils.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import SlayerStorefrontUtils from "../SlayerStorefrontUtils.tsx";
import common_Video from "../../../components_native/common/Video.tsx";
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators.tsx";
import SocialLayerStorefrontActionCreators from "../SocialLayerStorefrontActionCreators.tsx";
import carouselMediaItems from "../utils/carouselMediaItems.tsx";
import StorefrontNativeUtils from "../../storefront/native/StorefrontNativeUtils.android.tsx";
import redirectToSlayerStorefrontWebDefault from "redirectToSlayerStorefrontWeb.tsx";
import NativePaymentContext from "../../payments/native/NativePaymentContext.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";
import SocialLayerStorefrontStore from "../SocialLayerStorefrontStore.tsx";
import n from "../../../../_runtime/metro/00672__.js";

require = fn;
function HeroMedia(arg0) {
  ({ mediaItem, landscape } = arg0);
  const tmp = closure_18();
  const items = [tmp.hero];
  if (landscape) {
    landscape = tmp.heroLandscape;
  }
  items[1] = landscape;
  if ("video" === mediaItem.type) {
    let obj = { style: items, children: null };
    obj = { source: null, poster: null, muted: true, resizeMode: "cover", style: null };
    const obj1 = { uri: mediaItem.src };
    obj.source = obj1;
    obj.poster = mediaItem.videoThumbnailSrc;
    obj.style = tmp.heroImage;
    obj.children = closure_1_14(common_Video.VideoComponent, obj);
    let tmp6 = closure_1_14(React5, obj);
  } else if (null != mediaItem.backgroundSrc) {
    const obj2 = { style: items, children: null };
    const obj3 = { source: null, style: null, resizeMode: "cover" };
    const obj4 = { uri: mediaItem.backgroundSrc };
    obj3.source = obj4;
    obj3.style = absoluteFill.absoluteFill;
    const items1 = [closure_1_14(FastImageDefault, obj3)];
    const obj5 = { source: null, style: null, resizeMode: "cover" };
    const obj6 = { uri: mediaItem.src };
    obj5.source = obj6;
    obj5.style = tmp.heroImage;
    items1[1] = closure_1_14(FastImageDefault, obj5);
    obj2.children = items1;
    tmp6 = __initData(React5, obj2);
  } else {
    obj = { style: items, children: null };
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
  const tmp = closure_18();
  let obj = { sku: sku.sku, priceSetAssignmentPurchaseType: constants3.DEFAULT };
  const userPrice = obj.useFormattedSKUPrice(obj).userPrice;
  let tmp4 = null;
  if (null != userPrice) {
    obj = { style: tmp.priceSection, children: null };
    const items = [closure_1_14(InGameItemTag, {})];
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
  const tmp = closure_18();
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
  let items1 = [closure_14(require("Text/Text").Text, obj)];
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
        children: null,
      };
      const items = [thumbnail.thumbnail];
      let thumbnailSelected = thumbnailInnerSelected;
      if (thumbnailInnerSelected) {
        thumbnailSelected = thumbnail.thumbnailSelected;
      }
      items[1] = thumbnailSelected;
      obj.style = items;
      const items1 = [thumbnail.thumbnailInner];
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
    }),
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
    const items = [closure_1_14(Text_Text.Heading, obj)];
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
  const tmp = closure_18();
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
    obj = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: trimmed };
    tmp14 = closure_1_14(Text_Text.Heading, obj);
  }
  const items = [tmp14, ,];
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
    const items1 = [tmp18];
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
  const tmp = closure_18();
  dependencyMap = tmp;
  const rect = analyticsLocations(1611)();
  let obj = skuId(5176);
  const isScreenLandscape = obj.useIsScreenLandscape();
  let obj1 = analyticsLocations(9436);
  const storeFront = obj1.useNativeIAPPayments().storeFront;
  let obj2 = skuId(504);
  let items = [trackPDPClick];
  const stateFromStores = obj2.useStateFromStores(items, () => SKUStore.get(skuId));
  let obj3 = skuId(504);
  let items1 = [trackPDPClick];
  const stateFromStores1 = obj3.useStateFromStores(
    items1,
    () => SKUStore.isFetching(skuId) || SKUStore.didFetchingSkuFail(skuId),
  );
  let obj4 = skuId(7220);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = obj4.useGetOrFetchApplication(applicationId);
  let tmp11 = getOrFetchApplication;
  let tmp2Result = tmp2(7217);
  if (getOrFetchApplication == null) {
    tmp11 = null;
  }
  let tmp4Result = tmp4(504);
  const items2 = [skuAssets];
  stateFromStores2 = tmp4Result.useStateFromStores(items2, () => skuAssets.getSkuAssets());
  let obj6 = stateFromStores;
  const items3 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => SlayerStorefrontUtils.getCardImageURL(stateFromStores), items3);
  const tmp15 = storeFront(stateFromStores.useState(0), 2);
  const first = tmp15[0];
  const items4 = [analyticsLocations];
  memo1 = stateFromStores.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PDP];
    return items1;
  }, items4);
  analyticsLocations(5042)(() => {
    const obj = {
      location_stack: memo1,
      type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY,
      sku_id: skuId,
      application_id: null,
    };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(constants.OPEN_MODAL, obj);
  });
  const items5 = [skuId, ,];
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  items5[1] = applicationId1;
  items5[2] = memo1;
  trackPDPClick = stateFromStores.useCallback((cta_type) => {
    const obj = {
      slayer_storefront_session_id: "Array",
      sku_id: skuId,
      guild_id: true,
      application_id: true,
      cta_type: "scheduleLocalNotification",
      location_stack: null,
    };
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
  let tmp14Result = tmp14(
    obj6.useMemo(() => {
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
        result = obj2.convertCarouselItemsToMediaItems(
          carouselItems,
          stateFromStores.applicationId,
          stateFromStores2,
          obj,
        );
      }
      return result;
    }, items6),
    2,
  );
  [arr8, arr9] = tmp14Result;
  let num = 0;
  if (first < arr9.length) {
    num = first;
  }
  let tmp23 = arr8[num];
  if (tmp23 == null) {
    tmp23 = null;
  }
  let tmp24 = arr9[num];
  if (tmp24 == null) {
    tmp24 = null;
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
  skuAssets = tmp25;
  tmp14Result = tmp14(obj6.useState(false), 2);
  [tmp27, c10] = tmp14Result;
  [tmp29, c11] = storeFront(obj6.useState(false), 2);
  const tmp14Result1 = storeFront(obj6.useState(false), 2);
  [tmp31, c12] = storeFront(obj6.useState(0), 2);
  obj6.useRef(false);
  const items7 = [stateFromStores, stateFromStores2, num2 === arr8.length, stateFromStores1];
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  items7[4] = country;
  const effect = obj6.useEffect(() => {
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
        const socialLayerStorefrontSkuForApplication = obj.fetchSocialLayerStorefrontSkuForApplication(
          applicationId,
          id,
          obj,
        );
        tmp5Result = PlatformUtils;
      }
    }
    tmp2 = null != stateFromStores && null != stateFromStores.applicationId;
  }, items7);
  const items8 = [skuId, ,];
  let orbsReward;
  const callback1 = obj6.useCallback(() => {
    _undefined(false);
  }, []);
  if (stateFromStores != null) {
    orbsReward = stateFromStores.orbsReward;
  }
  items8[1] = orbsReward;
  items8[2] = memo1;
  const items9 = [trackPDPClick, ,];
  let applicationId2;
  const callback2 = obj6.useCallback(() => {
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
  const callback3 = obj6.useCallback(() => {
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
          result = skuId(closeButtonIcon[31]).closeSocialLayerStorefrontProductDetailsModal();
          const obj = skuId(closeButtonIcon[31]);
        }
      });
      const tmp4Result = redirectToSlayerStorefrontWebDefault(obj);
    }
  }, items9);
  const OTPACOMOrderExperiment = tmp4(9435).OTPACOMOrderExperiment;
  let enabled = OTPACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontProductDetailsModal" }).enabled;
  tmp4Result = tmp4(1115);
  if (tmp4Result.isIOS()) {
    let GOOGLE = tmp39.APPLE_ADVANCED_COMMERCE;
    let tmp40 = tmp39;
  } else {
    GOOGLE = tmp39.GOOGLE;
    tmp40 = tmp39;
  }
  let tmp42Result = null;
  if (tmp29) {
    obj = {
      headless: true,
      paymentGateway: GOOGLE,
      orderRequired: null,
      skuIds: null,
      isGift: false,
      activeSubscription: null,
      onOrderRetryCancellation: null,
      checkoutAnalyticsFields: null,
      children: null,
    };
    tmp2Result = tmp2(10874);
    if (enabled) {
      enabled = GOOGLE === tmp40.APPLE_ADVANCED_COMMERCE;
    }
    obj.orderRequired = enabled;
    const items10 = [skuId];
    obj.skuIds = items10;
    obj.onOrderRetryCancellation = tmp4(10867).closeSocialLayerStorefrontProductDetailsModal;
    obj = {
      is_gift: false,
      location_stack: memo1,
      payment_type: "sku",
      sku_id: skuId,
      sku_type: null,
      sku_product_line: null,
      application_id: null,
    };
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
    obj1 = {
      attempt: tmp31,
      skuId,
      sku: stateFromStores,
      analyticsLocations: memo1,
      onPurchaseComplete: callback2,
      onPurchaseError: callback1,
    };
    obj.children = closure_14(tmp4(10883).HeadlessSlayerStorefrontPurchaseRunner, obj1);
    tmp42Result = closure_14(tmp2Result, obj, skuId);
  }
  const items11 = [skuId, memo1, trackPDPClick];
  if (null == stateFromStores) {
    return null;
  } else {
    let result = tmp4(7283).isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = tmp4(1114).intl;
    const stringResult = intl4.string(tmp4(1114).t.boqtTA);
    const tmp4Result1 = tmp4(7283);
    let result1 = tmp4(4275).isSocialLayerStorefrontGiftingSupported();
    if (null != tmp24) {
      obj2 = { mediaItem: tmp24, landscape: isScreenLandscape };
      let tmp48 = closure_14(HeroMedia, obj2);
    } else {
      tmp48 = null;
      if (null != memo) {
        obj3 = { sku: stateFromStores };
        tmp48 = closure_14(tmp2(8896), obj3);
      }
    }
    let tmp52 = null;
    if (stateFromStores.exclusive) {
      obj4 = { style: tmp.exclusiveBadgeContainer, children: closure_14(tmp4(10887).ExclusiveBadge, {}) };
      tmp52 = closure_14(memo1, obj4);
    }
    let tmp55 = null;
    if (tmp22) {
      const obj5 = { items: arr8, mediaItems: arr9, selectedIndex: num, onSelectIndex: tmp15[1], trackPDPClick };
      tmp55 = closure_14(BundleThumbnailRow, obj5);
    }
    applicationId = stateFromStores.applicationId;
    let tmp58 = null;
    if (tmp22) {
      tmp58 = tmp23;
    }
    let tmp59 = null;
    if (null != tmp58) {
      tmp59 = null;
      if (null != applicationId) {
        obj6 = { selectedItem: tmp58, applicationId };
        tmp59 = closure_14(ItemDetailsSection, obj6);
      }
    }
    const obj7 = { style: null, children: null };
    const items12 = [tmp.footer];
    const obj8 = { paddingBottom: rect.bottom + tmp2(576).space.PX_16 };
    items12[1] = obj8;
    obj7.style = items12;
    const obj9 = { sku: stateFromStores };
    const items13 = [closure_14(ProductPriceSection, obj9), , ,];
    let tmp64Result = !result;
    if (!result) {
      const obj10 = {
        variant: "text-xs/normal",
        color: "text-muted",
        style: tmp.availabilityCopy,
        includeFontPadding: true,
        children: null,
      };
      const intl = tmp4(1114).intl;
      obj10.children = intl.string(tmp2(3460).gndWN7);
      tmp64Result = closure_14(tmp4(4601).Text, obj10);
    }
    items13[1] = tmp64Result;
    const obj11 = { style: tmp.footerButtonRow, children: null };
    const obj12 = { style: tmp.buyButton, children: null };
    const obj13 = { variant: "primary", size: "lg", text: stringResult, loading: tmp27, disabled: null, onPress: null };
    let tmp67 = tmp27;
    if (!tmp27) {
      tmp67 = !result;
    }
    obj13.disabled = tmp67;
    obj13.onPress = callback3;
    obj12.children = closure_14(tmp4(5025).Button, obj13);
    const items14 = [closure_14(memo1, obj12)];
    if (result1) {
      const obj14 = {
        icon: tmp2(8136),
        variant: "primary",
        size: "lg",
        disabled: tmp27,
        accessibilityLabel: null,
        onPress: null,
      };
      const intl2 = tmp4(1114).intl;
      obj14.accessibilityLabel = intl2.string(tmp4(1114).t.QAZA5f);
      obj14.onPress = tmp47;
      result1 = closure_14(tmp4(8150).IconButton, obj14);
    }
    items14[1] = result1;
    obj11.children = items14;
    items13[2] = closure_15(memo1, obj11);
    if (result) {
      const obj15 = { style: tmp.legalCopy, children: null };
      const obj16 = { shouldAppendDisclaimer: false === tmp2Result(tmp11).hasAlreadyLinked };
      const mobileFinePrintMessageForApplication = tmp4(10890).getMobileFinePrintMessageForApplication(
        getOrFetchApplication,
        stringResult,
        obj16,
      );
      obj15.children = mobileFinePrintMessageForApplication.map((children, index) =>
        closure_1_14(
          skuId(closeButtonIcon[15]).Text,
          { variant: "text-xs/normal", color: "text-muted", includeFontPadding: true, children },
          index,
        ),
      );
      result = closure_14(tmp63, obj15);
      const tmp4Result3 = tmp4(10890);
    }
    items13[3] = result;
    obj7.children = items13;
    let tmp62Result = closure_15(tmp63, obj7);
    const items15 = [tmp.container];
    const tmp4Result2 = tmp4(4275);
    let num3 = 0;
    if (!tmp4Result4.isIOS()) {
      num3 = rect.top;
    }
    const obj17 = { style: null, children: null };
    const obj18 = { paddingTop: num3 };
    items15[1] = obj18;
    obj17.style = items15;
    const items16 = [tmp42Result, , ,];
    const obj19 = { style: tmp.header, children: null };
    const obj20 = {
      onPress: tmp4(10867).closeSocialLayerStorefrontProductDetailsModal,
      backImage() {
        return closure_2_14(XSmallIcon.XSmallIcon, { size: "md", style: closeButtonIcon.closeButtonIcon });
      },
      accessibilityLabel: null,
      displayMode: "minimal",
    };
    const intl3 = tmp4(1114).intl;
    obj20.accessibilityLabel = intl3.string(tmp4(1114).t.cpT0Cq);
    const items17 = [closure_14(tmp4(5681).HeaderBackButton, obj20)];
    const obj21 = {
      variant: "heading-lg/bold",
      color: "mobile-text-heading-primary",
      style: tmp.headerTitle,
      children: null,
    };
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj21.children = name;
    items17[1] = closure_14(tmp4(4601).Heading, obj21);
    obj19.children = items17;
    items16[1] = closure_15(memo1, obj19);
    const obj22 = { style: tmp.scrollContainer, children: null };
    let exclusive = stateFromStores.exclusive;
    if (exclusive) {
      const obj23 = { style: stateFromStores2.absoluteFill, colors: null, pointerEvents: "none" };
      const items18 = [closure_16, closure_17];
      obj23.colors = items18;
      exclusive = closure_14(tmp2(5037), obj23);
    }
    const items19 = [exclusive];
    if (isScreenLandscape) {
      const obj24 = { style: tmp.columnsLandscape, children: null };
      const obj25 = { style: tmp.heroColumnLandscape, contentContainerStyle: null, children: null };
      const items20 = [tmp.heroColumnContentLandscape];
      const obj26 = { paddingBottom: rect.bottom + 8 };
      items20[1] = obj26;
      obj25.contentContainerStyle = items20;
      const items21 = [tmp48];
      const obj27 = { style: tmp.bundleGroupLandscape, children: null };
      const items22 = [tmp55, tmp59];
      obj27.children = items22;
      items21[1] = closure_15(tmp63, obj27);
      obj25.children = items21;
      const items23 = [closure_15(stateFromStores1, obj25)];
      const obj28 = { style: tmp.detailsScrollLandscape, contentContainerStyle: null, children: null };
      const items24 = [,];
      ({ scrollContent: arr30[0], detailsContentLandscape: arr30[1] } = tmp);
      obj28.contentContainerStyle = items24;
      const obj29 = { style: tmp.detailsGroupLandscape, children: null };
      const items25 = [tmp52];
      const obj30 = { sku: stateFromStores };
      items25[1] = closure_14(SKUNameAndDescriptionSection, obj30);
      obj29.children = items25;
      const items26 = [closure_15(tmp63, obj29), tmp62Result];
      obj28.children = items26;
      items23[1] = closure_15(stateFromStores1, obj28);
      obj24.children = items23;
      tmp62Result = closure_15(tmp63, obj24);
    } else {
      const obj31 = { contentContainerStyle: tmp.scrollContent, children: null };
      const items27 = [tmp48, tmp52, , ,];
      const obj32 = { sku: stateFromStores };
      items27[2] = closure_14(SKUNameAndDescriptionSection, obj32);
      items27[3] = tmp55;
      items27[4] = tmp59;
      obj31.children = items27;
      tmp62Result = closure_15(stateFromStores1, obj31);
    }
    items19[1] = tmp62Result;
    obj22.children = items19;
    items16[2] = closure_15(memo1, obj22);
    let tmp81 = !isScreenLandscape;
    if (!isScreenLandscape) {
      tmp81 = tmp62Result;
    }
    items16[3] = tmp81;
    obj17.children = items16;
    return closure_15(memo1, obj17);
  }
  const tmp14Result2 = storeFront(obj6.useState(0), 2);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const SlayerShopPDPCTAType = fn(10870).SlayerShopPDPCTAType;
const Constants = fn(1074);
({ AnalyticEvents: closure_11, PaymentGateways: closure_12, PriceSetAssignmentPurchaseTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_16 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const alphaResult = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.25);
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_17 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0).hex();
fn(4605);
let obj = {
  container: { flex: 1 },
  header: null,
  headerTitle: null,
  closeButtonIcon: null,
  scrollContent: null,
  scrollContainer: null,
  columnsLandscape: null,
  heroColumnLandscape: null,
  heroColumnContentLandscape: null,
  bundleGroupLandscape: null,
  detailsScrollLandscape: null,
  detailsContentLandscape: null,
  detailsGroupLandscape: null,
  section: null,
  bundleThumbnailRow: null,
  thumbnail: null,
  thumbnailSelected: null,
  thumbnailInner: null,
  thumbnailInnerSelected: null,
  thumbnailImage: null,
  labelRow: null,
  labelIcon: null,
  priceRow: null,
  footer: null,
  footerButtonRow: null,
  buyButton: null,
  availabilityCopy: null,
  legalCopy: null,
  hero: null,
  heroLandscape: null,
  priceSection: null,
  heroImage: null,
  exclusiveBadgeContainer: null,
};
obj = {
  height: fn(5732).NAV_BAR_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.header = obj;
obj.headerTitle = { flexShrink: 1 };
const alphaResult1 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0);
obj.closeButtonIcon = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
let obj1 = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
obj.scrollContent = {
  alignItems: "stretch",
  gap: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
};
obj.scrollContainer = { flex: 1 };
let obj2 = { alignItems: "stretch", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
obj.columnsLandscape = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj.heroColumnLandscape = { flex: 1 };
const createStyles = {
  flexGrow: 1,
  gap: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_16,
};
obj.heroColumnContentLandscape = createStyles;
let obj3 = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj.bundleGroupLandscape = { gap: nativeDefault.space.PX_4 };
obj.detailsScrollLandscape = { flex: 1 };
obj.detailsContentLandscape = { flexGrow: 1, justifyContent: "space-between", paddingBottom: 0 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj.detailsGroupLandscape = { gap: nativeDefault.space.PX_16 };
let obj6 = { gap: nativeDefault.space.PX_16 };
obj.section = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let obj7 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj.bundleThumbnailRow = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
let size = { width: 64, height: 64, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
obj.thumbnail = size;
let obj8 = { flexDirection: "row", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj.thumbnailSelected = { borderColor: nativeDefault.colors.BORDER_STRONG };
let obj9 = { borderColor: nativeDefault.colors.BORDER_STRONG };
obj.thumbnailInner = { flex: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj10 = { flex: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.thumbnailInnerSelected = { margin: 2, borderRadius: nativeDefault.radii.sm };
obj.thumbnailImage = { width: "100%", height: "100%" };
let obj11 = { margin: 2, borderRadius: nativeDefault.radii.sm };
obj.labelRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj.labelIcon = size1;
let obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.priceRow = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let obj13 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj.footer = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj14 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.footerButtonRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.buyButton = { flex: 1 };
obj.availabilityCopy = { textAlign: "center" };
let obj15 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.legalCopy = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
let obj16 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
obj.hero = {
  marginHorizontal: nativeDefault.space.PX_16,
  height: fn(10871).MOBILE_HERO_HEIGHT_PX,
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj.heroLandscape = { flex: 1, minHeight: 140, height: "add" };
let obj17 = {
  marginHorizontal: nativeDefault.space.PX_16,
  height: fn(10871).MOBILE_HERO_HEIGHT_PX,
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj.priceSection = { width: "100%", gap: nativeDefault.space.PX_8 };
obj.heroImage = { width: "100%", height: "100%" };
let obj18 = { width: "100%", gap: nativeDefault.space.PX_8 };
obj.exclusiveBadgeContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_18 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx",
);

export default function WrappedSocialLayerStorefrontProductDetailsModal(arg0) {
  let obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = closure_1_14(SocialLayerStorefrontProductDetailsModal, obj);
  return closure_1_14(NativePaymentContext.NativePaymentContextProvider, obj);
}
