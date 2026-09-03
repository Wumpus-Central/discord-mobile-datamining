// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import isNullOrEmpty from "../../../utils/StringUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import _httpGetWithCountryCodeQuery from "../../../utils/StoreUtils.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import VideoComponent from "../../../components_native/common/Video.tsx";
import useFormattedSKUPrice from "../../storefront/native/StorefrontNativeUtils.android.tsx";
import NativePaymentContextProvider from "../../payments/native/NativePaymentContext.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../stores/game_store/SKUStore.tsx";
import closure_9 from "../SocialLayerStorefrontStore.tsx";
import { SlayerShopPDPCTAType } from "../SocialLayerStorefrontAnalyticsConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../../../_runtime/00686_n.js";
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
    const items = [callback(preloadDefault, obj3)];
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
    const items = [callback(InGameItemTag, {})];
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
  let items1 = [callback(require(onSelectIndex[15]).Text, obj)];
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
        children: null,
      };
      const items = [thumbnail.thumbnail];
      let thumbnailSelected = thumbnailInnerSelected;
      if (thumbnailInnerSelected) {
        thumbnailSelected = tmp8.thumbnailSelected;
      }
      items[1] = thumbnailSelected;
      obj[4] = items;
      const items1 = [thumbnail.thumbnailInner];
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
    }),
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
    const items = [callback(tmp2(4474).Heading, obj)];
    const isNullOrEmptyResult = tmp2(1901).isNullOrEmpty(sku.description);
    let tmp7Result = !isNullOrEmptyResult;
    if (!isNullOrEmptyResult) {
      obj1 = { variant: "text-md/medium", color: "text-muted", children: null };
      obj1[2] = sku.description;
      tmp7Result = tmp7(tmp2(4474).Text, obj1);
    }
    items[1] = tmp7Result;
    obj[1] = items;
    tmp5Result = closure_15(closure_7, obj);
    const tmp2Result = tmp2(1901);
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
    let tmp8Result = tmp8(1901);
    if (tmp8Result.isNullOrEmpty(trimmed1)) {
      tmp8Result = tmp8(1901);
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
    tmp14 = callback(tmp8(4474).Heading, obj);
  }
  const items = [tmp14, ,];
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
    const items1 = [tmp18];
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj4[2] = trimmed1;
    items1[1] = callback(tmp8(4474).Text, obj4);
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
    tmp23 = callback(tmp8(4474).Text, obj5);
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
  let callback;
  closure_9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  closure_13 = undefined;
  const tmp = callback3();
  dependencyMap = tmp;
  const rect = analyticsLocations(1627)();
  let obj = analyticsLocations(8234);
  storeFront = obj.useNativeIAPPayments().storeFront;
  obj1 = skuId(586);
  let items = [callback];
  stateFromStores = obj1.useStateFromStores(items, () => callback.get(skuId));
  let obj2 = skuId(586);
  let items1 = [callback];
  stateFromStores1 = obj2.useStateFromStores(
    items1,
    () => callback.isFetching(skuId) || callback.didFetchingSkuFail(skuId),
  );
  let obj3 = skuId(5968);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = obj3.useGetOrFetchApplication(applicationId);
  let tmp10 = getOrFetchApplication;
  let tmp2Result = tmp2(5965);
  if (getOrFetchApplication == null) {
    tmp10 = null;
  }
  let tmp4Result = tmp4(586);
  const items2 = [closure_9];
  stateFromStores2 = tmp4Result.useStateFromStores(items2, () => skuAssets.getSkuAssets());
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
  analyticsLocations(4946)(() => {
    let obj = analyticsLocations(closeButtonIcon[29]);
    obj = {
      location_stack: memo1,
      type: skuId(closeButtonIcon[30]).SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY,
      sku_id: skuId,
      application_id: null,
    };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[3] = applicationId;
    obj.track(_undefined2.OPEN_MODAL, obj);
  });
  const items5 = [skuId, ,];
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  items5[1] = applicationId1;
  items5[2] = memo1;
  callback = stateFromStores.useCallback((arg0) => {
    let obj = analyticsLocations(closeButtonIcon[29]);
    obj = {
      slayer_storefront_session_id: "Array",
      sku_id: "a",
      guild_id: true,
      application_id: true,
      cta_type: "onAnimationFailureCapture",
      location_stack: "onAnimationFailure",
    };
    obj[1] = skuId;
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[3] = applicationId;
    obj[4] = arg0;
    obj[5] = memo1;
    obj.track(_undefined2.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, obj);
  }, items5);
  const items6 = [stateFromStores, stateFromStores2];
  let tmp13Result = tmp13(
    obj5.useMemo(() => {
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
    }, items6),
    2,
  );
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
  closure_9 = tmp24;
  tmp13Result = tmp13(obj5.useState(false), 2);
  [tmp26, c10] = tmp13Result;
  [tmp28, c11] = storeFront(obj5.useState(false), 2);
  const tmp13Result1 = storeFront(obj5.useState(false), 2);
  const tmp21 = arr9.length > 1;
  [tmp30, c12] = storeFront(obj5.useState(0), 2);
  closure_13 = obj5.useRef(false);
  const items7 = [stateFromStores, stateFromStores2, num2 === arr8.length, stateFromStores1];
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
        let obj = skuId(closeButtonIcon[31]);
        obj = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        ({ applicationId, id } = tmp);
        obj[0] = skuId(closeButtonIcon[32]).isAndroid();
        let country;
        if (storeFront != null) {
          country = storeFront.country;
        }
        obj[1] = country;
        const obj3 = skuId(closeButtonIcon[32]);
        const tmp5 = skuId;
        const tmp6 = closeButtonIcon;
        let APPLE;
        if (tmp5Result.isIOS()) {
          APPLE = _undefined3.APPLE;
        }
        obj[2] = APPLE;
        const socialLayerStorefrontSkuForApplication = obj.fetchSocialLayerStorefrontSkuForApplication(
          applicationId,
          id,
          obj,
        );
        tmp5Result = skuId(closeButtonIcon[32]);
      }
    }
  }, items7);
  const items8 = [skuId, ,];
  let orbsReward;
  const callback1 = obj5.useCallback(() => {
    _undefined(false);
  }, []);
  if (stateFromStores != null) {
    orbsReward = stateFromStores.orbsReward;
  }
  items8[1] = orbsReward;
  items8[2] = memo1;
  const items9 = [callback, ,];
  let applicationId2;
  const callback2 = obj5.useCallback(() => {
    _undefined(false);
    let obj = skuId(closeButtonIcon[30]);
    obj = { skuId, orbsReward: null, analyticsLocations: null };
    let orbsReward;
    if (stateFromStores != null) {
      orbsReward = stateFromStores.orbsReward;
    }
    obj[1] = orbsReward;
    obj[2] = memo1;
    const result = obj.openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj);
    result.then(skuId(closeButtonIcon[30]).closeSocialLayerStorefrontProductDetailsModal);
  }, items8);
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  items9[1] = applicationId2;
  items9[2] = skuId;
  callback3 = obj5.useCallback(() => {
    callback(_undefined.BUY_BUTTON);
    let obj = skuId(closeButtonIcon[33]);
    if (obj.isSocialLayerStorefrontPurchaseSupported()) {
      _undefined2(true);
      _undefined3((arg0) => arg0 + 1);
      _undefined(true);
    } else {
      let applicationId;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      obj = { applicationId: null, skuId: null, source: "SocialLayerStorefrontProductDetailsModal" };
      obj[0] = applicationId;
      obj[1] = skuId;
      const tmp4 = analyticsLocations(closeButtonIcon[34]);
      analyticsLocations(closeButtonIcon[34])(obj).then((arg0) => {
        if (arg0) {
          const result = callback(table[30]).closeSocialLayerStorefrontProductDetailsModal();
          const obj = callback(table[30]);
        }
      });
      const tmp4Result = analyticsLocations(closeButtonIcon[34])(obj);
    }
  }, items9);
  const OTPACOMOrderExperiment = tmp4(8233).OTPACOMOrderExperiment;
  let enabled = OTPACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontProductDetailsModal" }).enabled;
  tmp4Result = tmp4(1234);
  if (tmp4Result.isIOS()) {
    let GOOGLE = tmp38.APPLE_ADVANCED_COMMERCE;
    let tmp39 = tmp38;
  } else {
    GOOGLE = tmp38.GOOGLE;
    tmp39 = tmp38;
  }
  let tmp41Result = null;
  if (tmp28) {
    obj = {
      headless: true,
      paymentGateway: null,
      orderRequired: null,
      skuIds: null,
      isGift: false,
      activeSubscription: null,
      onOrderRetryCancellation: null,
      checkoutAnalyticsFields: null,
      children: null,
    };
    obj[1] = GOOGLE;
    tmp2Result = tmp2(10803);
    if (enabled) {
      enabled = GOOGLE === tmp39.APPLE_ADVANCED_COMMERCE;
    }
    obj[2] = enabled;
    const items10 = [skuId];
    obj[3] = items10;
    obj[6] = tmp4(10797).closeSocialLayerStorefrontProductDetailsModal;
    obj = {
      is_gift: false,
      location_stack: null,
      payment_type: "sku",
      sku_id: null,
      sku_type: null,
      sku_product_line: null,
      application_id: null,
    };
    obj[1] = memo1;
    obj[3] = skuId;
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    obj[4] = type;
    let productLine;
    if (stateFromStores != null) {
      productLine = stateFromStores.productLine;
    }
    obj[5] = productLine;
    let applicationId3;
    if (stateFromStores != null) {
      applicationId3 = stateFromStores.applicationId;
    }
    obj[6] = applicationId3;
    obj[7] = obj;
    obj1 = {
      attempt: null,
      skuId: null,
      sku: null,
      analyticsLocations: null,
      onPurchaseComplete: null,
      onPurchaseError: null,
    };
    obj1[0] = tmp30;
    obj1[1] = skuId;
    obj1[2] = stateFromStores;
    obj1[3] = memo1;
    obj1[4] = callback2;
    obj1[5] = callback1;
    obj[8] = callback(tmp4(10812).HeadlessSlayerStorefrontPurchaseRunner, obj1);
    tmp41Result = tmp41(tmp2Result, obj, skuId);
  }
  const items11 = [skuId, memo1, callback];
  if (null == stateFromStores) {
    return null;
  } else {
    let result = tmp4(6087).isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = tmp4(1233).intl;
    const stringResult = intl4.string(tmp4(1233).t.boqtTA);
    const tmp4Result1 = tmp4(6087);
    let result1 = tmp4(4152).isSocialLayerStorefrontGiftingSupported();
    const items12 = [tmp.container];
    const tmp4Result2 = tmp4(4152);
    let num3 = 0;
    if (!tmp4Result3.isIOS()) {
      num3 = rect.top;
    }
    obj2 = { style: null, children: null };
    obj3 = { paddingTop: null };
    obj3[0] = num3;
    items12[1] = obj3;
    obj2[0] = items12;
    const items13 = [tmp41Result, , ,];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.header;
    obj5 = { onPress: null, backImage: null, accessibilityLabel: null, displayMode: "minimal" };
    obj5[0] = tmp4(10797).closeSocialLayerStorefrontProductDetailsModal;
    obj5[1] = function backImage() {
      return closure_1_14(skuId(closeButtonIcon[40]).XSmallIcon, {
        size: "md",
        style: closeButtonIcon.closeButtonIcon,
      });
    };
    const intl = tmp4(1233).intl;
    obj5[2] = intl.string(tmp4(1233).t.cpT0Cq);
    const items14 = [callback(tmp4(5511).HeaderBackButton, obj5)];
    const obj6 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
    obj6[2] = tmp.headerTitle;
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj6[3] = name;
    items14[1] = callback(tmp4(4474).Heading, obj6);
    obj4[1] = items14;
    items13[1] = closure_15(memo1, obj4);
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.scrollContainer;
    let exclusive = stateFromStores.exclusive;
    if (exclusive) {
      const obj8 = { style: null, colors: null, pointerEvents: "none" };
      obj8[0] = stateFromStores2.absoluteFill;
      const items15 = [closure_17, closure_18];
      obj8[1] = items15;
      exclusive = tmp47(tmp2(4941), obj8);
    }
    const items16 = [exclusive];
    const obj9 = { contentContainerStyle: null, children: null };
    obj9[0] = tmp.scrollContent;
    if (null != tmp23) {
      const obj10 = { mediaItem: null };
      obj10[0] = tmp23;
      let tmp47Result = tmp47(HeroMedia, obj10);
    } else {
      tmp47Result = null != memo;
      if (tmp47Result) {
        const obj11 = { sku: null };
        obj11[0] = stateFromStores;
        tmp47Result = tmp47(tmp2(8520), obj11);
      }
    }
    const items17 = [tmp47Result, ,];
    let exclusive2 = stateFromStores.exclusive;
    if (exclusive2) {
      const obj12 = { style: null, children: null };
      obj12[0] = tmp.exclusiveBadgeContainer;
      obj12[1] = tmp47(tmp4(10816).ExclusiveBadge, {});
      exclusive2 = tmp47(tmp70, obj12);
    }
    items17[1] = exclusive2;
    if (tmp21) {
      const obj13 = { sku: null };
      obj13[0] = stateFromStores;
      const items18 = [tmp47(SKUNameAndDescriptionSection, obj13), ,];
      const obj14 = { items: null, mediaItems: null, selectedIndex: null, onSelectIndex: null, trackPDPClick: null };
      obj14[0] = arr8;
      obj14[1] = arr9;
      obj14[2] = num;
      obj14[3] = tmp14[1];
      obj14[4] = callback;
      items18[1] = tmp47(BundleThumbnailRow, obj14);
      tmp47Result = null != stateFromStores.applicationId && null != tmp22;
      if (tmp47Result) {
        const obj15 = { selectedItem: null, applicationId: null };
        obj15[0] = tmp22;
        obj15[1] = stateFromStores.applicationId;
        tmp47Result = tmp47(ItemDetailsSection, obj15);
      }
      const obj16 = { children: null };
      items18[2] = tmp47Result;
      obj16[0] = items18;
      let tmp47Result1 = tmp69(closure_16, obj16);
      const tmp57 = closure_16;
    } else {
      const obj17 = { sku: null };
      obj17[0] = stateFromStores;
      tmp47Result1 = tmp47(SKUNameAndDescriptionSection, obj17);
    }
    items17[2] = tmp47Result1;
    obj9[1] = items17;
    items16[1] = closure_15(stateFromStores1, obj9);
    obj7[1] = items16;
    items13[2] = closure_15(memo1, obj7);
    const obj18 = { style: null, children: null };
    const items19 = [tmp.footer];
    const obj19 = { paddingBottom: null };
    obj19[0] = rect.bottom + tmp2(709).space.PX_16;
    items19[1] = obj19;
    obj18[0] = items19;
    const obj20 = { sku: null };
    obj20[0] = stateFromStores;
    const items20 = [callback(ProductPriceSection, obj20), , ,];
    let tmp47Result2 = !result;
    if (!result) {
      const obj21 = { variant: "text-xs/normal", color: "text-muted", style: null, children: null };
      obj21[2] = tmp.availabilityCopy;
      const intl2 = tmp4(1233).intl;
      obj21[3] = intl2.string(tmp2(3370).gndWN7);
      tmp47Result2 = tmp47(tmp4(4474).Text, obj21);
    }
    items20[1] = tmp47Result2;
    const obj22 = { style: null, children: null };
    obj22[0] = tmp.footerButtonRow;
    const obj23 = { style: null, children: null };
    obj23[0] = tmp.buyButton;
    const obj24 = { variant: "primary", size: "lg", text: null, loading: null, disabled: null, onPress: null };
    obj24[2] = stringResult;
    obj24[3] = tmp26;
    let tmp64 = tmp26;
    if (!tmp26) {
      tmp64 = !result;
    }
    obj24[4] = tmp64;
    obj24[5] = callback3;
    obj23[1] = callback(tmp4(4929).Button, obj24);
    const items21 = [callback(memo1, obj23)];
    if (result1) {
      const obj25 = {
        icon: null,
        variant: "primary",
        size: "lg",
        disabled: null,
        accessibilityLabel: null,
        onPress: null,
      };
      obj25[0] = tmp2(8004);
      obj25[3] = tmp26;
      const intl3 = tmp4(1233).intl;
      obj25[4] = intl3.string(tmp4(1233).t.QAZA5f);
      obj25[5] = tmp46;
      result1 = tmp47(tmp4(8018).IconButton, obj25);
    }
    items21[1] = result1;
    obj22[1] = items21;
    items20[2] = closure_15(memo1, obj22);
    if (result) {
      const obj26 = { style: null, children: null };
      obj26[0] = tmp.legalCopy;
      const obj27 = { shouldAppendDisclaimer: null };
      obj27[0] = false === tmp2Result(tmp10).hasAlreadyLinked;
      const mobileFinePrintMessageForApplication = tmp4(10817).getMobileFinePrintMessageForApplication(
        getOrFetchApplication,
        stringResult,
        obj27,
      );
      obj26[1] = mobileFinePrintMessageForApplication.map((children) =>
        callback(skuId(closeButtonIcon[15]).Text, { variant: "text-xs/normal", color: "text-muted", children }, arg1),
      );
      result = tmp47(tmp70, obj26);
      const tmp4Result4 = tmp4(10817);
      const tmp66 = getOrFetchApplication;
    }
    items20[3] = result;
    obj18[1] = items20;
    items13[3] = closure_15(memo1, obj18);
    obj2[1] = items13;
    return closure_15(memo1, obj2);
  }
  const tmp13Result2 = storeFront(obj5.useState(0), 2);
}
({ ScrollView: c5, StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticEvents: unpackModuleId, PaymentGateways: closure_12, PriceSetAssignmentPurchaseTypes: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const importDefaultResultResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500);
let closure_17 = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500).alpha(0.25).hex();
const alphaResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500).alpha(0.25);
const importDefaultResult1 = importDefaultResult;
const importDefaultResult1Result = importDefaultResult(ThemesDefault.unsafe_rawColors.BRAND_500);
let closure_18 = require("../../../index.native.tsx").hex();
let obj = {
  container: { flex: 1 },
  header: null,
  headerTitle: null,
  closeButtonIcon: null,
  scrollContent: null,
  scrollContainer: null,
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
  priceSection: null,
  heroImage: null,
  exclusiveBadgeContainer: null,
};
obj = {
  height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: ThemesDefault.space.PX_8,
  gap: ThemesDefault.space.PX_8,
  borderBottomWidth: 1,
  borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE,
};
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
obj[16] = {
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingTop: ThemesDefault.space.PX_12,
  gap: ThemesDefault.space.PX_8,
  borderTopWidth: 1,
  borderTopColor: ThemesDefault.colors.BORDER_SUBTLE,
};
let obj12 = {
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingTop: ThemesDefault.space.PX_12,
  gap: ThemesDefault.space.PX_8,
  borderTopWidth: 1,
  borderTopColor: ThemesDefault.colors.BORDER_SUBTLE,
};
obj[17] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
obj[18] = { flex: 1 };
obj[19] = { textAlign: "center" };
let obj13 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
obj[20] = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_4 };
let obj14 = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_4 };
obj[21] = {
  marginHorizontal: ThemesDefault.space.PX_16,
  height: require("WEB_HERO_WIDTH_PX").MOBILE_HERO_HEIGHT_PX,
  borderRadius: ThemesDefault.radii.md,
  overflow: "hidden",
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let obj15 = {
  marginHorizontal: ThemesDefault.space.PX_16,
  height: require("WEB_HERO_WIDTH_PX").MOBILE_HERO_HEIGHT_PX,
  borderRadius: ThemesDefault.radii.md,
  overflow: "hidden",
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj[22] = { width: "100%", gap: ThemesDefault.space.PX_8 };
obj[23] = { width: "100%", height: "100%" };
let obj16 = { width: "100%", gap: ThemesDefault.space.PX_8 };
obj[24] = { paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_19 = createCacheKey.createStyles(obj);
let obj17 = { paddingHorizontal: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx",
);

export default function WrappedSocialLayerStorefrontProductDetailsModal(arg0) {
  let obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[2] = callback(SocialLayerStorefrontProductDetailsModal, obj);
  return callback(NativePaymentContextProvider.NativePaymentContextProvider, obj);
}
