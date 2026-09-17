// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
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
import n_mod from "../../../../_runtime/metro/00672__.js";

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
    const obj2 = { style: items, children: null };
    const obj3 = { source: null, poster: null, muted: true, resizeMode: "cover", style: null };
    const obj4 = { uri: mediaItem.src };
    obj3.source = obj4;
    obj3.poster = mediaItem.videoThumbnailSrc;
    obj3.style = tmp.heroImage;
    obj2.children = closure_1_14(common_Video.VideoComponent, obj3);
    let tmp6 = closure_1_14(React5, obj2);
  } else if (null != mediaItem.backgroundSrc) {
    const obj5 = { style: items, children: null };
    const obj6 = { source: null, style: null, resizeMode: "cover" };
    const obj7 = { uri: mediaItem.backgroundSrc };
    obj6.source = obj7;
    obj6.style = absoluteFill.absoluteFill;
    const items1 = [closure_1_14(FastImageDefault, obj6)];
    const obj8 = { source: null, style: null, resizeMode: "cover" };
    const obj9 = { uri: mediaItem.src };
    obj8.source = obj9;
    obj8.style = tmp.heroImage;
    items1[1] = closure_1_14(FastImageDefault, obj8);
    obj5.children = items1;
    tmp6 = __initData(React5, obj5);
  } else {
    const obj = { style: items, children: null };
    const obj10 = { source: null, style: null, resizeMode: "cover" };
    const obj11 = { uri: mediaItem.src };
    obj10.source = obj11;
    obj10.style = tmp.heroImage;
    obj.children = closure_1_14(FastImageDefault, obj10);
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
  const userPrice = StorefrontNativeUtils.useFormattedSKUPrice({
    sku: sku.sku,
    priceSetAssignmentPurchaseType: constants3.DEFAULT,
  }).userPrice;
  let tmp4 = null;
  if (null != userPrice) {
    const obj3 = { style: tmp.priceSection, children: null };
    const items = [closure_1_14(InGameItemTag, {})];
    const obj4 = { style: tmp.priceRow, children: null };
    const obj5 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: userPrice };
    obj4.children = closure_1_14(Text_Text.Text, obj5);
    items[1] = closure_1_14(React5, obj4);
    obj3.children = items;
    tmp4 = __initData(React5, obj3);
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
  let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = require("util").intl;
  obj2.children = intl.string(require("util").t.U7DAV9);
  let items1 = [
    closure_14(require("Text/Text").Text, obj2),
    closure_14(closure_5, {
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
        const obj = {
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
        const obj2 = { style: items1, children: null };
        items1[1] = thumbnailInnerSelected;
        const obj3 = { source: null, style: null, resizeMode: "cover" };
        const obj4 = { uri: null };
        const tmp10 = require("FastImage");
        obj4.uri = dependencyMap(onSelectIndex[12]).getThumbnailSrc(item);
        obj3.source = obj4;
        obj3.style = thumbnail.thumbnailImage;
        obj2.children = closure_1_14(tmp10, obj3);
        obj.children = closure_1_14(closure_1_7, obj2);
        return closure_1_14(dependencyMap(onSelectIndex[18]).PressableOpacity, obj, index);
      }),
    }),
  ];
  obj.children = items1;
  return closure_15(closure_7, obj);
}
function SKUNameAndDescriptionSection(sku) {
  sku = sku.sku;
  const tmp = closure_18();
  let tmp5Result = null;
  if (!obj.isNullOrEmpty(sku.name)) {
    const obj2 = { style: tmp.section, children: null };
    const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: sku.name };
    const items = [closure_1_14(Text_Text.Heading, obj3)];
    const isNullOrEmptyResult = StringUtils.isNullOrEmpty(sku.description);
    let tmp7Result = !isNullOrEmptyResult;
    if (!isNullOrEmptyResult) {
      const obj4 = { variant: "text-md/medium", color: "text-muted", children: sku.description };
      tmp7Result = closure_1_14(Text_Text.Text, obj4);
    }
    items[1] = tmp7Result;
    obj2.children = items;
    tmp5Result = __initData(React5, obj2);
    const tmp2Result = StringUtils;
  }
  return tmp5Result;
}
function ItemDetailsSection(selectedItem) {
  selectedItem = selectedItem.selectedItem;
  const tmp = closure_18();
  let assetURL = null;
  if (null != selectedItem.labelIconAssetId) {
    assetURL = StoreUtils.getAssetURL(selectedItem.applicationId, selectedItem.labelIconAssetId);
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
  if (obj2.isNullOrEmpty(trimmed)) {
    if (tmp8Result.isNullOrEmpty(trimmed1)) {
      StringUtils;
      let tmp11Result2 = null;
    }
    return tmp11Result2;
  }
  const obj3 = { style: tmp.section, children: null };
  obj2 = StringUtils;
  const isNullOrEmptyResult = StringUtils.isNullOrEmpty(trimmed);
  let tmp14 = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    const obj4 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: trimmed };
    tmp14 = closure_1_14(Text_Text.Heading, obj4);
  }
  const items = [tmp14, ,];
  const tmp8Result6 = StringUtils;
  const isNullOrEmptyResult1 = StringUtils.isNullOrEmpty(trimmed1);
  let tmp11Result = !isNullOrEmptyResult1;
  if (!isNullOrEmptyResult1) {
    const obj5 = { style: tmp.labelRow, children: null };
    let tmp18 = null != assetURL;
    if (tmp18) {
      const obj6 = { source: null, style: null };
      const obj7 = { uri: assetURL };
      obj6.source = obj7;
      obj6.style = tmp.labelIcon;
      tmp18 = closure_1_14(FastImageDefault, obj6);
    }
    const items1 = [tmp18];
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: trimmed1 };
    items1[1] = closure_1_14(Text_Text.Text, obj8);
    obj5.children = items1;
    tmp11Result = __initData(React5, obj5);
  }
  items[1] = tmp11Result;
  const tmp8Result7 = StringUtils;
  const isNullOrEmptyResult2 = StringUtils.isNullOrEmpty(trimmed2);
  let tmp23 = !isNullOrEmptyResult2;
  if (!isNullOrEmptyResult2) {
    const obj9 = { variant: "text-md/medium", color: "text-default", children: trimmed2 };
    tmp23 = closure_1_14(Text_Text.Text, obj9);
  }
  items[2] = tmp23;
  obj3.children = items;
  tmp11Result2 = __initData(React5, obj3);
  const tmp8Result8 = StringUtils;
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
  const rect = analyticsLocations(1612)();
  const isScreenLandscape = skuId(5213).useIsScreenLandscape();
  let obj = skuId(5213);
  const mobileStoreFront = analyticsLocations(9520).useMobileStoreFront();
  let obj2 = analyticsLocations(9520);
  let items = [trackPDPClick];
  const stateFromStores = skuId(504).useStateFromStores(items, () => SKUStore.get(skuId));
  let obj3 = skuId(504);
  let items1 = [trackPDPClick];
  const stateFromStores1 = skuId(504).useStateFromStores(
    items1,
    () => SKUStore.isFetching(skuId) || SKUStore.didFetchingSkuFail(skuId),
  );
  const obj4 = skuId(504);
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  const getOrFetchApplication = skuId(7282).useGetOrFetchApplication(applicationId1);
  let tmp12 = getOrFetchApplication;
  const obj5 = skuId(7282);
  if (getOrFetchApplication == null) {
    tmp12 = null;
  }
  const tmp2Result = analyticsLocations(7279);
  const items2 = [skuAssets];
  stateFromStores2 = skuId(504).useStateFromStores(items2, () => skuAssets.getSkuAssets());
  const items3 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => SlayerStorefrontUtils.getCardImageURL(stateFromStores), items3);
  const tmp16 = mobileStoreFront(stateFromStores.useState(0), 2);
  const first = tmp16[0];
  const items4 = [analyticsLocations];
  memo1 = stateFromStores.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PDP];
    return items1;
  }, items4);
  analyticsLocations(5079)(() => {
    const obj2 = {
      location_stack: memo1,
      type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY,
      sku_id: skuId,
      application_id: null,
    };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj2.application_id = applicationId;
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
  });
  const items5 = [skuId, ,];
  let applicationId2;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  items5[1] = applicationId2;
  items5[2] = memo1;
  trackPDPClick = stateFromStores.useCallback((cta_type) => {
    const obj2 = {
      slayer_storefront_session_id: "Array",
      sku_id: skuId,
      guild_id: true,
      application_id: true,
      cta_type: "LottieAnimationView",
      location_stack: null,
    };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj2.application_id = applicationId;
    obj2.cta_type = cta_type;
    obj2.location_stack = memo1;
    AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, obj2);
  }, items5);
  const items6 = [stateFromStores, stateFromStores2];
  let tmp4Result = skuId(504);
  [arr8, arr9] = mobileStoreFront(
    stateFromStores.useMemo(() => {
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
  let num = 0;
  if (first < arr9.length) {
    num = first;
  }
  let tmp24 = arr8[num];
  if (tmp24 == null) {
    tmp24 = null;
  }
  let tmp25 = arr9[num];
  if (tmp25 == null) {
    tmp25 = null;
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
  skuAssets = tmp26;
  const tmp15Result = mobileStoreFront(
    stateFromStores.useMemo(() => {
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
  [tmp28, c10] = mobileStoreFront(stateFromStores.useState(false), 2);
  const tmp15Result4 = mobileStoreFront(stateFromStores.useState(false), 2);
  [tmp30, c11] = mobileStoreFront(stateFromStores.useState(false), 2);
  const tmp15Result5 = mobileStoreFront(stateFromStores.useState(false), 2);
  [tmp32, c12] = mobileStoreFront(stateFromStores.useState(0), 2);
  stateFromStores.useRef(false);
  const items7 = [stateFromStores, stateFromStores2, num2 === arr8.length, stateFromStores1];
  let country;
  if (mobileStoreFront != null) {
    country = mobileStoreFront.country;
  }
  items7[4] = country;
  const effect = obj7.useEffect(() => {
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
        const obj2 = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        ({ applicationId, id } = stateFromStores);
        const obj = SocialLayerStorefrontActionCreators;
        obj2.withGoogleSkuIds = PlatformUtils.isAndroid();
        let country;
        if (mobileStoreFront != null) {
          country = mobileStoreFront.country;
        }
        obj2.countryCode = country;
        let APPLE;
        if (tmp5Result.isIOS()) {
          APPLE = constants2.APPLE;
        }
        obj2.paymentGateway = APPLE;
        const socialLayerStorefrontSkuForApplication = obj.fetchSocialLayerStorefrontSkuForApplication(
          applicationId,
          id,
          obj2,
        );
        tmp5Result = PlatformUtils;
      }
    }
    tmp2 = null != stateFromStores && null != stateFromStores.applicationId;
  }, items7);
  const items8 = [skuId, ,];
  let orbsReward;
  const callback1 = obj7.useCallback(() => {
    _undefined(false);
  }, []);
  if (stateFromStores != null) {
    orbsReward = stateFromStores.orbsReward;
  }
  items8[1] = orbsReward;
  items8[2] = memo1;
  const items9 = [trackPDPClick, ,];
  let applicationId3;
  const callback2 = obj7.useCallback(() => {
    _undefined(false);
    const obj2 = { skuId, orbsReward: null, analyticsLocations: null };
    let orbsReward;
    if (stateFromStores != null) {
      orbsReward = stateFromStores.orbsReward;
    }
    obj2.orbsReward = orbsReward;
    obj2.analyticsLocations = memo1;
    const result =
      SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj2);
    result.then(SocialLayerStorefrontNativeActionCreators.closeSocialLayerStorefrontProductDetailsModal);
  }, items8);
  if (stateFromStores != null) {
    applicationId3 = stateFromStores.applicationId;
  }
  items9[1] = applicationId3;
  items9[2] = skuId;
  const callback3 = obj7.useCallback(() => {
    callback(SlayerShopPDPCTAType.BUY_BUTTON);
    if (obj.isSocialLayerStorefrontPurchaseSupported()) {
      _undefined2(true);
      _undefined3((arg0) => arg0 + 1);
      _undefined(true);
    } else {
      let applicationId;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      const obj2 = { applicationId, skuId, source: "SocialLayerStorefrontProductDetailsModal" };
      redirectToSlayerStorefrontWebDefault(obj2).then((result) => {
        if (result) {
          result = skuId(closeButtonIcon[31]).closeSocialLayerStorefrontProductDetailsModal();
          const obj = skuId(closeButtonIcon[31]);
        }
      });
      const tmp4Result = redirectToSlayerStorefrontWebDefault(obj2);
    }
    obj = BillingPlatformUtils;
  }, items9);
  const OTPACOMOrderExperiment = tmp4(9519).OTPACOMOrderExperiment;
  let enabled = OTPACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontProductDetailsModal" }).enabled;
  const tmp15Result6 = mobileStoreFront(stateFromStores.useState(0), 2);
  if (tmp4Result6.isIOS()) {
    let GOOGLE = tmp40.APPLE_ADVANCED_COMMERCE;
    let tmp41 = tmp40;
  } else {
    GOOGLE = tmp40.GOOGLE;
    tmp41 = tmp40;
  }
  let tmp43Result = null;
  if (tmp30) {
    const obj6 = {
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
    if (enabled) {
      enabled = GOOGLE === tmp41.APPLE_ADVANCED_COMMERCE;
    }
    obj6.orderRequired = enabled;
    const items10 = [skuId];
    obj6.skuIds = items10;
    obj6.onOrderRetryCancellation = tmp4(10951).closeSocialLayerStorefrontProductDetailsModal;
    const obj8 = {
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
    obj8.sku_type = type;
    let productLine;
    if (stateFromStores != null) {
      productLine = stateFromStores.productLine;
    }
    obj8.sku_product_line = productLine;
    let applicationId4;
    if (stateFromStores != null) {
      applicationId4 = stateFromStores.applicationId;
    }
    obj8.application_id = applicationId4;
    obj6.checkoutAnalyticsFields = obj8;
    const obj9 = {
      attempt: tmp32,
      skuId,
      sku: stateFromStores,
      analyticsLocations: memo1,
      onPurchaseComplete: callback2,
      onPurchaseError: callback1,
    };
    obj6.children = closure_14(tmp4(10967).HeadlessSlayerStorefrontPurchaseRunner, obj9);
    tmp43Result = closure_14(tmp2(10958), obj6, skuId);
    const tmp2Result2 = tmp2(10958);
  }
  const items11 = [skuId, memo1, trackPDPClick];
  if (null == stateFromStores) {
    return null;
  } else {
    let result = tmp4(7345).isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = tmp4(1115).intl;
    const stringResult = intl4.string(tmp4(1115).t.boqtTA);
    const tmp4Result7 = tmp4(7345);
    let result1 = tmp4(4310).isSocialLayerStorefrontGiftingSupported();
    if (null != tmp25) {
      const obj10 = { mediaItem: tmp25, landscape: isScreenLandscape };
      let tmp49 = closure_14(HeroMedia, obj10);
    } else {
      tmp49 = null;
      if (null != memo) {
        const obj11 = { sku: stateFromStores };
        tmp49 = closure_14(tmp2(8982), obj11);
      }
    }
    let tmp53 = null;
    if (stateFromStores.exclusive) {
      const obj12 = { style: tmp.exclusiveBadgeContainer, children: closure_14(tmp4(10971).ExclusiveBadge, {}) };
      tmp53 = closure_14(memo1, obj12);
    }
    let tmp56 = null;
    if (tmp23) {
      const obj13 = { items: arr8, mediaItems: arr9, selectedIndex: num, onSelectIndex: tmp16[1], trackPDPClick };
      tmp56 = closure_14(BundleThumbnailRow, obj13);
    }
    let applicationId = stateFromStores.applicationId;
    let tmp59 = null;
    if (tmp23) {
      tmp59 = tmp24;
    }
    let tmp60 = null;
    if (null != tmp59) {
      tmp60 = null;
      if (null != applicationId) {
        const obj14 = { selectedItem: tmp59, applicationId };
        tmp60 = closure_14(ItemDetailsSection, obj14);
      }
    }
    const obj15 = { style: null, children: null };
    const items12 = [tmp.footer];
    const obj16 = { paddingBottom: rect.bottom + tmp2(576).space.PX_16 };
    items12[1] = obj16;
    obj15.style = items12;
    const obj17 = { sku: stateFromStores };
    const items13 = [closure_14(ProductPriceSection, obj17), , ,];
    let tmp65Result = !result;
    if (!result) {
      const obj18 = {
        variant: "text-xs/normal",
        color: "text-muted",
        style: tmp.availabilityCopy,
        includeFontPadding: true,
        children: null,
      };
      const intl = tmp4(1115).intl;
      obj18.children = intl.string(tmp2(3463).gndWN7);
      tmp65Result = closure_14(tmp4(4636).Text, obj18);
    }
    items13[1] = tmp65Result;
    const obj19 = { style: tmp.footerButtonRow, children: null };
    const obj20 = { style: tmp.buyButton, children: null };
    const obj21 = { variant: "primary", size: "lg", text: stringResult, loading: tmp28, disabled: null, onPress: null };
    let tmp68 = tmp28;
    if (!tmp28) {
      tmp68 = !result;
    }
    obj21.disabled = tmp68;
    obj21.onPress = callback3;
    obj20.children = closure_14(tmp4(5062).Button, obj21);
    const items14 = [closure_14(memo1, obj20)];
    if (result1) {
      const obj22 = {
        icon: tmp2(8220),
        variant: "primary",
        size: "lg",
        disabled: tmp28,
        accessibilityLabel: null,
        onPress: null,
      };
      const intl2 = tmp4(1115).intl;
      obj22.accessibilityLabel = intl2.string(tmp4(1115).t.QAZA5f);
      obj22.onPress = tmp48;
      result1 = closure_14(tmp4(8057).IconButton, obj22);
    }
    items14[1] = result1;
    obj19.children = items14;
    items13[2] = closure_15(memo1, obj19);
    if (result) {
      const obj23 = { style: tmp.legalCopy, children: null };
      const obj24 = { shouldAppendDisclaimer: false === tmp2Result(tmp12).hasAlreadyLinked };
      const mobileFinePrintMessageForApplication = tmp4(10974).getMobileFinePrintMessageForApplication(
        getOrFetchApplication,
        stringResult,
        obj24,
      );
      obj23.children = mobileFinePrintMessageForApplication.map((children, index) =>
        closure_1_14(
          skuId(closeButtonIcon[15]).Text,
          { variant: "text-xs/normal", color: "text-muted", includeFontPadding: true, children },
          index,
        ),
      );
      result = closure_14(tmp64, obj23);
      const tmp4Result9 = tmp4(10974);
    }
    items13[3] = result;
    obj15.children = items13;
    const tmp63Result = closure_15(memo1, obj15);
    const items15 = [tmp.container];
    const tmp4Result8 = tmp4(4310);
    let num3 = 0;
    if (!tmp4Result10.isIOS()) {
      num3 = rect.top;
    }
    const obj25 = { style: null, children: null };
    const obj26 = { paddingTop: num3 };
    items15[1] = obj26;
    obj25.style = items15;
    const items16 = [tmp43Result, , ,];
    const obj27 = { style: tmp.header, children: null };
    const obj28 = {
      onPress: tmp4(10951).closeSocialLayerStorefrontProductDetailsModal,
      backImage() {
        return closure_2_14(XSmallIcon.XSmallIcon, { size: "md", style: closeButtonIcon.closeButtonIcon });
      },
      accessibilityLabel: null,
      displayMode: "minimal",
    };
    const intl3 = tmp4(1115).intl;
    obj28.accessibilityLabel = intl3.string(tmp4(1115).t.cpT0Cq);
    const items17 = [closure_14(tmp4(5719).HeaderBackButton, obj28)];
    const obj29 = {
      variant: "heading-lg/bold",
      color: "mobile-text-heading-primary",
      style: tmp.headerTitle,
      children: null,
    };
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj29.children = name;
    items17[1] = closure_14(tmp4(4636).Heading, obj29);
    obj27.children = items17;
    items16[1] = closure_15(memo1, obj27);
    const obj30 = { style: tmp.scrollContainer, children: null };
    let exclusive = stateFromStores.exclusive;
    if (exclusive) {
      const obj31 = { style: stateFromStores2.absoluteFill, colors: null, pointerEvents: "none" };
      const items18 = [closure_16, closure_17];
      obj31.colors = items18;
      exclusive = closure_14(tmp2(5074), obj31);
    }
    const items19 = [exclusive];
    if (isScreenLandscape) {
      const obj32 = { style: tmp.columnsLandscape, children: null };
      const obj33 = { style: tmp.heroColumnLandscape, contentContainerStyle: null, children: null };
      const items20 = [tmp.heroColumnContentLandscape];
      const obj34 = { paddingBottom: rect.bottom + 8 };
      items20[1] = obj34;
      obj33.contentContainerStyle = items20;
      const items21 = [tmp49];
      const obj35 = { style: tmp.bundleGroupLandscape, children: null };
      const items22 = [tmp56, tmp60];
      obj35.children = items22;
      items21[1] = closure_15(tmp64, obj35);
      obj33.children = items21;
      const items23 = [closure_15(stateFromStores1, obj33)];
      const obj36 = { style: tmp.detailsScrollLandscape, contentContainerStyle: null, children: null };
      const items24 = [,];
      ({ scrollContent: arr30[0], detailsContentLandscape: arr30[1] } = tmp);
      obj36.contentContainerStyle = items24;
      const obj37 = { style: tmp.detailsGroupLandscape, children: null };
      const items25 = [tmp53];
      const obj38 = { sku: stateFromStores };
      items25[1] = closure_14(SKUNameAndDescriptionSection, obj38);
      obj37.children = items25;
      const items26 = [closure_15(tmp64, obj37), tmp63Result];
      obj36.children = items26;
      items23[1] = closure_15(stateFromStores1, obj36);
      obj32.children = items23;
      let tmp63Result2 = closure_15(tmp64, obj32);
    } else {
      const obj39 = { contentContainerStyle: tmp.scrollContent, children: null };
      const items27 = [tmp49, tmp53, , ,];
      const obj40 = { sku: stateFromStores };
      items27[2] = closure_14(SKUNameAndDescriptionSection, obj40);
      items27[3] = tmp56;
      items27[4] = tmp60;
      obj39.children = items27;
      tmp63Result2 = closure_15(stateFromStores1, obj39);
    }
    items19[1] = tmp63Result2;
    obj30.children = items19;
    items16[2] = closure_15(memo1, obj30);
    let tmp82 = !isScreenLandscape;
    if (!isScreenLandscape) {
      tmp82 = tmp63Result;
    }
    items16[3] = tmp82;
    obj25.children = items16;
    return closure_15(memo1, obj25);
  }
  tmp4Result6 = skuId(1364);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const SlayerShopPDPCTAType = fn(10954).SlayerShopPDPCTAType;
const Constants = fn(1074);
({ AnalyticEvents: closure_11, PaymentGateways: closure_12, PriceSetAssignmentPurchaseTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let n = n_mod;
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_16 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.25).hex();
let n = n_mod;
const alphaResult = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.25);
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_17 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0).hex();
const createStyles = fn(4640);
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
const alphaResult1 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0);
obj.header = {
  height: fn(5770).NAV_BAR_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.headerTitle = { flexShrink: 1 };
let obj2 = {
  height: fn(5770).NAV_BAR_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.closeButtonIcon = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
obj.scrollContent = {
  alignItems: "stretch",
  gap: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
};
obj.scrollContainer = { flex: 1 };
let obj4 = { alignItems: "stretch", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
obj.columnsLandscape = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj.heroColumnLandscape = { flex: 1 };
let obj6 = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj.heroColumnContentLandscape = {
  flexGrow: 1,
  gap: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_16,
};
let obj7 = {
  flexGrow: 1,
  gap: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_16,
};
obj.bundleGroupLandscape = { gap: nativeDefault.space.PX_4 };
obj.detailsScrollLandscape = { flex: 1 };
obj.detailsContentLandscape = { flexGrow: 1, justifyContent: "space-between", paddingBottom: 0 };
let obj8 = { gap: nativeDefault.space.PX_4 };
obj.detailsGroupLandscape = { gap: nativeDefault.space.PX_16 };
let obj9 = { gap: nativeDefault.space.PX_16 };
obj.section = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let obj10 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj.bundleThumbnailRow = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_4,
};
let size = { width: 64, height: 64, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
obj.thumbnail = size;
let obj11 = { flexDirection: "row", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj.thumbnailSelected = { borderColor: nativeDefault.colors.BORDER_STRONG };
let obj12 = { borderColor: nativeDefault.colors.BORDER_STRONG };
obj.thumbnailInner = { flex: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj13 = { flex: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.thumbnailInnerSelected = { margin: 2, borderRadius: nativeDefault.radii.sm };
obj.thumbnailImage = { width: "100%", height: "100%" };
let obj14 = { margin: 2, borderRadius: nativeDefault.radii.sm };
obj.labelRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj.labelIcon = size1;
let obj15 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.priceRow = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let obj16 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj.footer = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj17 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.footerButtonRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.buyButton = { flex: 1 };
obj.availabilityCopy = { textAlign: "center" };
let obj18 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.legalCopy = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
let obj19 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
obj.hero = {
  marginHorizontal: nativeDefault.space.PX_16,
  height: fn(10955).MOBILE_HERO_HEIGHT_PX,
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj.heroLandscape = { flex: 1, minHeight: 140, height: "padding" };
let obj20 = {
  marginHorizontal: nativeDefault.space.PX_16,
  height: fn(10955).MOBILE_HERO_HEIGHT_PX,
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj.priceSection = { width: "100%", gap: nativeDefault.space.PX_8 };
obj.heroImage = { width: "100%", height: "100%" };
let obj21 = { width: "100%", gap: nativeDefault.space.PX_8 };
obj.exclusiveBadgeContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_18 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx",
);

export default function WrappedSocialLayerStorefrontProductDetailsModal(arg0) {
  const obj = { skuIDs: [], activeSubscription: null, children: null };
  const merged = Object.assign(arg0);
  obj.children = closure_1_14(SocialLayerStorefrontProductDetailsModal, {});
  return closure_1_14(NativePaymentContext.NativePaymentContextProvider, obj);
}
