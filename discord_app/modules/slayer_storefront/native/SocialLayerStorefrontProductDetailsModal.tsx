// === Module 10546: SocialLayerStorefrontProductDetailsModal ===

// Module 10546 (SocialLayerStorefrontProductDetailsModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import StringUtils from "StringUtils" /* 2018 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4547 */;
import Text_Text from "Text/Text" /* 4892 */;
import StoreUtils from "StoreUtils" /* 5329 */;
import FastImageDefault from "FastImage" /* 5981 */;
import XSmallIcon from "XSmallIcon" /* 6024 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6741 */;
import common_Video from "common/Video" /* 7993 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10544 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10545 */;
import carouselMediaItems from "carouselMediaItems" /* 10548 */;
import StorefrontNativeUtils from "StorefrontNativeUtils" /* 10549 */;
import redirectToSlayerStorefrontWebDefault from "redirectToSlayerStorefrontWeb" /* 10550 */;
import NativePaymentContext from "NativePaymentContext" /* 10564 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SKUStore from "SKUStore" /* 5702 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6743 */;
import n_mod from "module_683" /* 683 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const SlayerShopPDPCTAType = fn(10547).SlayerShopPDPCTAType;
const Constants = fn(1085);
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
const createStyles = fn(4896);
let obj = { container: { flex: 1 }, header: null, headerTitle: null, closeButtonIcon: null, scrollContent: null, scrollContainer: null, columnsLandscape: null, heroColumnLandscape: null, heroColumnContentLandscape: null, bundleGroupLandscape: null, detailsScrollLandscape: null, detailsContentLandscape: null, detailsGroupLandscape: null, section: null, bundleThumbnailRow: null, thumbnail: null, thumbnailSelected: null, thumbnailInner: null, thumbnailInnerSelected: null, thumbnailImage: null, labelRow: null, labelIcon: null, priceRow: null, footer: null, footerButtonRow: null, buyButton: null, availabilityCopy: null, legalCopy: null, hero: null, heroLandscape: null, priceSection: null, heroImage: null, exclusiveBadgeContainer: null };
const alphaResult1 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0);
obj.header = { height: fn(6075).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj.headerTitle = { flexShrink: 1 };
let obj2 = { height: fn(6075).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj.closeButtonIcon = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
obj.scrollContent = { alignItems: "stretch", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
obj.scrollContainer = { flex: 1 };
let obj4 = { alignItems: "stretch", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
obj.columnsLandscape = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj.heroColumnLandscape = { flex: 1 };
let obj6 = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj.heroColumnContentLandscape = { flexGrow: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16 };
let obj7 = { flexGrow: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16 };
obj.bundleGroupLandscape = { gap: nativeDefault.space.PX_4 };
obj.detailsScrollLandscape = { flex: 1 };
obj.detailsContentLandscape = { flexGrow: 1, justifyContent: "space-between", paddingBottom: 0 };
let obj8 = { gap: nativeDefault.space.PX_4 };
obj.detailsGroupLandscape = { gap: nativeDefault.space.PX_16 };
let obj9 = { gap: nativeDefault.space.PX_16 };
obj.section = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let obj10 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj.bundleThumbnailRow = { flexDirection: "row", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
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
obj.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let obj17 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj.footerButtonRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.buyButton = { flex: 1 };
obj.availabilityCopy = { textAlign: "center" };
let obj18 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.legalCopy = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
let obj19 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
obj.hero = { marginHorizontal: nativeDefault.space.PX_16, height: fn(10548).MOBILE_HERO_HEIGHT_PX, borderRadius: nativeDefault.radii.md, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.heroLandscape = { flex: 1, minHeight: 140, height: "body" };
let obj20 = { marginHorizontal: nativeDefault.space.PX_16, height: fn(10548).MOBILE_HERO_HEIGHT_PX, borderRadius: nativeDefault.radii.md, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.priceSection = { width: "100%", gap: nativeDefault.space.PX_8 };
obj.heroImage = { width: "100%", height: "100%" };
let obj21 = { width: "100%", gap: nativeDefault.space.PX_8 };
obj.exclusiveBadgeContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_18 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(31);
  ({ mediaItem, landscape } = arg0);
  const tmp4 = closure_18();
  if (landscape) {
    landscape = tmp4.heroLandscape;
  }
  if (cResult[0] === tmp4.hero) {
    if (cResult[1] === landscape) {
      let tmp5 = cResult[2];
    }
    if ("video" === mediaItem.type) {
      if (cResult[3] !== mediaItem.src) {
        const obj2 = { uri: mediaItem.src };
        cResult[3] = mediaItem.src;
        cResult[4] = obj2;
        let tmp30 = obj2;
      } else {
        tmp30 = cResult[4];
      }
      if (cResult[5] === mediaItem.videoThumbnailSrc) {
        if (cResult[6] === tmp4.heroImage) {
          if (cResult[7] === tmp30) {
            let tmp31 = cResult[8];
          }
          if (cResult[9] === tmp5) {
          }
          const obj3 = { style: tmp5, children: tmp31 };
          const tmp37 = state(React5, obj3);
          cResult[9] = tmp5;
          cResult[10] = tmp31;
          cResult[11] = tmp37;
        }
      }
      const obj4 = { source: tmp30, poster: mediaItem.videoThumbnailSrc, muted: true, resizeMode: "cover", style: tmp4.heroImage };
      const tmp33 = state(common_Video.VideoComponent, obj4);
      cResult[5] = mediaItem.videoThumbnailSrc;
      cResult[6] = tmp4.heroImage;
      cResult[7] = tmp30;
      cResult[8] = tmp33;
      tmp31 = tmp33;
    } else if (null != mediaItem.backgroundSrc) {
      if (cResult[12] !== mediaItem.backgroundSrc) {
        const obj5 = { source: null, style: null, resizeMode: "cover" };
        const obj6 = { uri: mediaItem.backgroundSrc };
        obj5.source = obj6;
        obj5.style = timestampProducer.absoluteFill;
        const tmp19 = state(FastImageDefault, obj5);
        cResult[12] = mediaItem.backgroundSrc;
        cResult[13] = tmp19;
        let tmp15 = tmp19;
      } else {
        tmp15 = cResult[13];
      }
      if (cResult[14] !== mediaItem.src) {
        const obj7 = { uri: mediaItem.src };
        cResult[14] = mediaItem.src;
        cResult[15] = obj7;
        let tmp20 = obj7;
      } else {
        tmp20 = cResult[15];
      }
      if (cResult[16] === tmp4.heroImage) {
        if (cResult[17] === tmp20) {
          let tmp21 = cResult[18];
        }
        if (cResult[19] === tmp5) {
          if (cResult[20] === tmp15) {
          }
        }
        const obj8 = { style: tmp5, children: null };
        const items = [tmp15, tmp21];
        obj8.children = items;
        const tmp28 = closure_1_15(React5, obj8);
        cResult[19] = tmp5;
        cResult[20] = tmp15;
        cResult[21] = tmp21;
        cResult[22] = tmp28;
      }
      const obj9 = { source: tmp20, style: tmp4.heroImage, resizeMode: "cover" };
      const tmp24 = state(FastImageDefault, obj9);
      cResult[16] = tmp4.heroImage;
      cResult[17] = tmp20;
      cResult[18] = tmp24;
      tmp21 = tmp24;
    } else {
      if (cResult[23] !== mediaItem.src) {
        const obj10 = { uri: mediaItem.src };
        cResult[23] = mediaItem.src;
        cResult[24] = obj10;
        let tmp6 = obj10;
      } else {
        tmp6 = cResult[24];
      }
      if (cResult[25] === tmp4.heroImage) {
        if (cResult[26] === tmp6) {
          let tmp7 = cResult[27];
        }
        if (cResult[28] === tmp5) {
          if (cResult[29] === tmp7) {
            let tmp11 = cResult[30];
          }
          return tmp11;
        }
        const obj11 = { style: tmp5, children: tmp7 };
        const tmp14 = state(React5, obj11);
        cResult[28] = tmp5;
        cResult[29] = tmp7;
        cResult[30] = tmp14;
        tmp11 = tmp14;
      }
      const obj12 = { source: tmp6, style: tmp4.heroImage, resizeMode: "cover" };
      const tmp10 = state(FastImageDefault, obj12);
      cResult[25] = tmp4.heroImage;
      cResult[26] = tmp6;
      cResult[27] = tmp10;
      tmp7 = tmp10;
    }
  }
  const items1 = [tmp4.hero, landscape];
  cResult[0] = tmp4.hero;
  cResult[1] = landscape;
  cResult[2] = items1;
  tmp5 = items1;
}) : ((arg0) => {
  ({ mediaItem, landscape } = arg0);
  const tmp = closure_18();
  const items = [tmp.hero, ];
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
    obj2.children = state(common_Video.VideoComponent, obj3);
    let tmp6 = state(React5, obj2);
  } else if (null != mediaItem.backgroundSrc) {
    const obj5 = { style: items, children: null };
    const obj6 = { source: null, style: null, resizeMode: "cover" };
    const obj7 = { uri: mediaItem.backgroundSrc };
    obj6.source = obj7;
    obj6.style = timestampProducer.absoluteFill;
    const items1 = [state(FastImageDefault, obj6), ];
    const obj8 = { source: null, style: null, resizeMode: "cover" };
    const obj9 = { uri: mediaItem.src };
    obj8.source = obj9;
    obj8.style = tmp.heroImage;
    items1[1] = state(FastImageDefault, obj8);
    obj5.children = items1;
    tmp6 = closure_1_15(React5, obj5);
  } else {
    const obj = { style: items, children: null };
    const obj10 = { source: null, style: null, resizeMode: "cover" };
    const obj11 = { uri: mediaItem.src };
    obj10.source = obj11;
    obj10.style = tmp.heroImage;
    obj.children = state(FastImageDefault, obj10);
    tmp6 = state(React5, obj);
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.V91tvy);
    const tmp6 = state(Text_Text.Text, obj2);
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.V91tvy);
  return state(Text_Text.Text, obj);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((sku) => {
  const cResult = c.c(11);
  sku = sku.sku;
  let priceSection = closure_18();
  if (cResult[0] !== sku) {
    const obj2 = { sku, priceSetAssignmentPurchaseType: constants3.DEFAULT };
    cResult[0] = sku;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const userPrice = StorefrontNativeUtils.useFormattedSKUPrice(tmp4).userPrice;
  if (null == userPrice) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp10 = state(closure_20, {});
      cResult[2] = tmp10;
      let tmp7 = tmp10;
    } else {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== userPrice) {
      const obj3 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: userPrice };
      const tmp13 = state(Text_Text.Text, obj3);
      cResult[3] = userPrice;
      cResult[4] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === priceSection.priceRow) {
      if (cResult[6] === tmp11) {
        let tmp14 = cResult[7];
      }
      if (cResult[8] === priceSection.priceSection) {
      }
      const obj4 = { style: priceSection.priceSection, children: null };
      const items = [tmp7, tmp14];
      obj4.children = items;
      const tmp21 = closure_1_15(React5, obj4);
      priceSection = priceSection.priceSection;
      cResult[8] = priceSection;
      cResult[9] = tmp14;
      cResult[10] = tmp21;
    }
    const obj5 = { style: priceSection.priceRow, children: tmp11 };
    const tmp17 = state(React5, obj5);
    cResult[5] = priceSection.priceRow;
    cResult[6] = tmp11;
    cResult[7] = tmp17;
    tmp14 = tmp17;
  }
  const tmpResult = StorefrontNativeUtils;
}) : ((sku) => {
  const tmp = closure_18();
  const userPrice = StorefrontNativeUtils.useFormattedSKUPrice({ sku: sku.sku, priceSetAssignmentPurchaseType: constants3.DEFAULT }).userPrice;
  let tmp4 = null;
  if (null != userPrice) {
    const obj3 = { style: tmp.priceSection, children: null };
    const items = [state(closure_20, {}), ];
    const obj4 = { style: tmp.priceRow, children: null };
    const obj5 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: userPrice };
    obj4.children = state(Text_Text.Text, obj5);
    items[1] = state(React5, obj4);
    obj3.children = items;
    tmp4 = closure_1_15(React5, obj3);
  }
  return tmp4;
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((onSelectIndex) => {
  const cResult = items(onSelectIndex[14]).c(29);
  items = onSelectIndex.items;
  ({ mediaItems, selectedIndex: thumbnailSelected } = onSelectIndex);
  onSelectIndex = onSelectIndex.onSelectIndex;
  const trackPDPClick = onSelectIndex.trackPDPClick;
  let tmp4 = closure_18();
  noop = tmp4;
  if (cResult[0] === onSelectIndex) {
    if (cResult[1] === trackPDPClick) {
      let tmp5 = cResult[2];
    }
    closure_5 = tmp5;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
      const intl = tmp(tmp2[18]).intl;
      obj2.children = intl.string(tmp(tmp2[18]).t.U7DAV9);
      const tmp9 = closure_14(tmp(tmp2[17]).Text, obj2);
      cResult[3] = tmp9;
      let tmp7 = tmp9;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === tmp5) {
      if (cResult[5] === items) {
        if (cResult[6] === mediaItems) {
          if (cResult[7] === thumbnailSelected) {
            if (cResult[8] === tmp4.thumbnail) {
              if (cResult[9] === tmp4.thumbnailImage) {
                if (cResult[10] === tmp4.thumbnailInner) {
                  if (cResult[11] === tmp4.thumbnailInnerSelected) {
                    if (cResult[12] === tmp4.thumbnailSelected) {
                      if (cResult[23] === tmp4.bundleThumbnailRow) {
                        if (cResult[24] === tmp11) {
                          let tmp15 = cResult[25];
                        }
                        if (cResult[26] === tmp4.section) {
                          if (cResult[27] === tmp15) {
                            let tmp19 = cResult[28];
                          }
                          return tmp19;
                        }
                        let obj3 = { style: tmp4.section, children: null };
                        let items1 = [tmp7, tmp15];
                        obj3.children = items1;
                        class P {
                          constructor(arg0, arg1) {
                            closure_0 = arg1;
                            tmp = closure_0[arg1];
                            tmp3 = closure_1_14;
                            tmp5 = onSelectIndex;
                            tmp2 = selectedIndex;
                            tmp4 = items;
                            label = undefined;
                            if (tmp != null) {
                              label = tmp.label;
                            }
                            if (label == null) {
                              title = undefined;
                              if (tmp != null) {
                                title = tmp.title;
                              }
                              label = title;
                            }
                            thumbnailInnerSelected = arg1 === tmp2;
                            obj = {
                              accessibilityRole: "button",
                              accessibilityLabel: label,
                              accessibilityState: { selected: thumbnailInnerSelected },
                              onPress() {
                                                          return closure_5(closure_0);
                                                        },
                              style: null,
                              children: null
                            };
                            tmp8 = closure_4;
                            items = [, ];
                            items[0] = closure_4.thumbnail;
                            thumbnailSelected = thumbnailInnerSelected;
                            if (thumbnailInnerSelected) {
                              thumbnailSelected = tmp8.thumbnailSelected;
                            }
                            items[1] = thumbnailSelected;
                            obj.style = items;
                            items1 = [, ];
                            items1[0] = tmp8.thumbnailInner;
                            tmp9 = closure_1_7;
                            if (thumbnailInnerSelected) {
                              thumbnailInnerSelected = tmp8.thumbnailInnerSelected;
                            }
                            obj1 = { style: items1, children: null };
                            items1[1] = thumbnailInnerSelected;
                            obj6 = { source: null, style: null, resizeMode: "cover" };
                            obj7 = { uri: null };
                            tmp10 = selectedIndex(tmp5[16]);
                            tmp4Result = tmp4(tmp5[12]);
                            obj7.uri = tmp4Result.getThumbnailSrc(onSelectIndex);
                            obj6.source = obj7;
                            obj6.style = tmp8.thumbnailImage;
                            obj1.children = tmp3(tmp10, obj6);
                            obj.children = tmp3(tmp9, obj1);
                            return tmp3(items(onSelectIndex[20]).PressableOpacity, obj, arg1);
                          }
                        }
                        cResult[26] = tmp4.section;
                        cResult[27] = tmp15;
                        cResult[28] = tmp22;
                        tmp19 = tmp22;
                      }
                      let obj4 = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp10, children: cResult[13] };
                      const tmp18 = closure_14(closure_5, obj4);
                      cResult[23] = tmp4.bundleThumbnailRow;
                      class P {
                        constructor(arg0, arg1) {
                          closure_0 = arg1;
                          tmp = closure_0[arg1];
                          tmp3 = closure_1_14;
                          tmp5 = onSelectIndex;
                          tmp2 = selectedIndex;
                          tmp4 = items;
                          label = undefined;
                          if (tmp != null) {
                            label = tmp.label;
                          }
                          if (label == null) {
                            title = undefined;
                            if (tmp != null) {
                              title = tmp.title;
                            }
                            label = title;
                          }
                          thumbnailInnerSelected = arg1 === tmp2;
                          obj = {
                            accessibilityRole: "button",
                            accessibilityLabel: label,
                            accessibilityState: { selected: thumbnailInnerSelected },
                            onPress() {
                                                      return closure_5(closure_0);
                                                    },
                            style: null,
                            children: null
                          };
                          tmp8 = closure_4;
                          items = [, ];
                          items[0] = closure_4.thumbnail;
                          thumbnailSelected = thumbnailInnerSelected;
                          if (thumbnailInnerSelected) {
                            thumbnailSelected = tmp8.thumbnailSelected;
                          }
                          items[1] = thumbnailSelected;
                          obj.style = items;
                          items1 = [, ];
                          items1[0] = tmp8.thumbnailInner;
                          tmp9 = closure_1_7;
                          if (thumbnailInnerSelected) {
                            thumbnailInnerSelected = tmp8.thumbnailInnerSelected;
                          }
                          obj1 = { style: items1, children: null };
                          items1[1] = thumbnailInnerSelected;
                          obj6 = { source: null, style: null, resizeMode: "cover" };
                          obj7 = { uri: null };
                          tmp10 = selectedIndex(tmp5[16]);
                          tmp4Result = tmp4(tmp5[12]);
                          obj7.uri = tmp4Result.getThumbnailSrc(onSelectIndex);
                          obj6.source = obj7;
                          obj6.style = tmp8.thumbnailImage;
                          obj1.children = tmp3(tmp10, obj6);
                          obj.children = tmp3(tmp9, obj1);
                          return tmp3(items(onSelectIndex[20]).PressableOpacity, obj, arg1);
                        }
                      }
                      cResult[24] = cResult[13];
                      cResult[25] = tmp18;
                      tmp15 = tmp18;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (cResult[14] === tmp5) {
      if (cResult[15] === items) {
        if (cResult[16] === thumbnailSelected) {
          if (cResult[17] === tmp4.thumbnail) {
            if (cResult[18] === tmp4.thumbnailImage) {
              if (cResult[19] === tmp4.thumbnailInner) {
                if (cResult[20] === tmp4.thumbnailInnerSelected) {
                  if (cResult[21] === tmp4.thumbnailSelected) {
                    let tmp12 = cResult[22];
                  }
                  const mapped = mediaItems.map(tmp12);
                  cResult[4] = tmp5;
                  cResult[5] = items;
                  cResult[6] = mediaItems;
                  cResult[7] = thumbnailSelected;
                  class P {
                    constructor(arg0, arg1) {
                      closure_0 = arg1;
                      tmp = closure_0[arg1];
                      tmp3 = closure_1_14;
                      tmp5 = onSelectIndex;
                      tmp2 = selectedIndex;
                      tmp4 = items;
                      label = undefined;
                      if (tmp != null) {
                        label = tmp.label;
                      }
                      if (label == null) {
                        title = undefined;
                        if (tmp != null) {
                          title = tmp.title;
                        }
                        label = title;
                      }
                      thumbnailInnerSelected = arg1 === tmp2;
                      obj = {
                        accessibilityRole: "button",
                        accessibilityLabel: label,
                        accessibilityState: { selected: thumbnailInnerSelected },
                        onPress() {
                                              return closure_5(closure_0);
                                            },
                        style: null,
                        children: null
                      };
                      tmp8 = closure_4;
                      items = [, ];
                      items[0] = closure_4.thumbnail;
                      thumbnailSelected = thumbnailInnerSelected;
                      if (thumbnailInnerSelected) {
                        thumbnailSelected = tmp8.thumbnailSelected;
                      }
                      items[1] = thumbnailSelected;
                      obj.style = items;
                      items1 = [, ];
                      items1[0] = tmp8.thumbnailInner;
                      tmp9 = closure_1_7;
                      if (thumbnailInnerSelected) {
                        thumbnailInnerSelected = tmp8.thumbnailInnerSelected;
                      }
                      obj1 = { style: items1, children: null };
                      items1[1] = thumbnailInnerSelected;
                      obj6 = { source: null, style: null, resizeMode: "cover" };
                      obj7 = { uri: null };
                      tmp10 = selectedIndex(tmp5[16]);
                      tmp4Result = tmp4(tmp5[12]);
                      obj7.uri = tmp4Result.getThumbnailSrc(onSelectIndex);
                      obj6.source = obj7;
                      obj6.style = tmp8.thumbnailImage;
                      obj1.children = tmp3(tmp10, obj6);
                      obj.children = tmp3(tmp9, obj1);
                      return tmp3(items(onSelectIndex[20]).PressableOpacity, obj, arg1);
                    }
                  }
                  cResult[8] = tmp4.thumbnail;
                  cResult[9] = tmp4.thumbnailImage;
                  cResult[10] = tmp4.thumbnailInner;
                  ({ thumbnailInnerSelected: tmp3[11], thumbnailSelected } = tmp4);
                  cResult[12] = thumbnailSelected;
                  cResult[13] = mapped;
                }
              }
            }
          }
        }
      }
    }
    class P {
      constructor(arg0, arg1) {
        closure_0 = arg1;
        tmp = closure_0[arg1];
        tmp3 = closure_1_14;
        tmp5 = onSelectIndex;
        tmp2 = selectedIndex;
        tmp4 = items;
        label = undefined;
        if (tmp != null) {
          label = tmp.label;
        }
        if (label == null) {
          title = undefined;
          if (tmp != null) {
            title = tmp.title;
          }
          label = title;
        }
        thumbnailInnerSelected = arg1 === tmp2;
        obj = {
          accessibilityRole: "button",
          accessibilityLabel: label,
          accessibilityState: { selected: thumbnailInnerSelected },
          onPress() {
                  return closure_5(closure_0);
                },
          style: null,
          children: null
        };
        tmp8 = closure_4;
        items = [, ];
        items[0] = closure_4.thumbnail;
        thumbnailSelected = thumbnailInnerSelected;
        if (thumbnailInnerSelected) {
          thumbnailSelected = tmp8.thumbnailSelected;
        }
        items[1] = thumbnailSelected;
        obj.style = items;
        items1 = [, ];
        items1[0] = tmp8.thumbnailInner;
        tmp9 = closure_1_7;
        if (thumbnailInnerSelected) {
          thumbnailInnerSelected = tmp8.thumbnailInnerSelected;
        }
        obj1 = { style: items1, children: null };
        items1[1] = thumbnailInnerSelected;
        obj6 = { source: null, style: null, resizeMode: "cover" };
        obj7 = { uri: null };
        tmp10 = selectedIndex(tmp5[16]);
        tmp4Result = tmp4(tmp5[12]);
        obj7.uri = tmp4Result.getThumbnailSrc(onSelectIndex);
        obj6.source = obj7;
        obj6.style = tmp8.thumbnailImage;
        obj1.children = tmp3(tmp10, obj6);
        obj.children = tmp3(tmp9, obj1);
        return tmp3(items(onSelectIndex[20]).PressableOpacity, obj, arg1);
      }
    }
    cResult[14] = tmp5;
    cResult[15] = items;
    cResult[16] = thumbnailSelected;
    cResult[17] = tmp4.thumbnail;
    cResult[18] = tmp4.thumbnailImage;
    cResult[19] = tmp4.thumbnailInner;
    cResult[20] = tmp4.thumbnailInnerSelected;
    cResult[21] = tmp4.thumbnailSelected;
    cResult[22] = P;
    tmp12 = P;
  }
  const fn = function l(arg0) {
    trackPDPClick(SlayerShopPDPCTAType.CAROUSEL_ITEM);
    onSelectIndex(arg0);
  };
  cResult[0] = onSelectIndex;
  cResult[1] = trackPDPClick;
  cResult[2] = fn;
  tmp5 = fn;
  let obj = items(onSelectIndex[14]);
}) : ((trackPDPClick) => {
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
        return closure_1_14(dependencyMap(onSelectIndex[20]).PressableOpacity, obj, index);
      })
    })
  ];
  obj.children = items1;
  return closure_15(closure_7, obj);
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((sku) => {
  const cResult = c.c(8);
  sku = sku.sku;
  let section = closure_18();
  if (obj2.isNullOrEmpty(sku.name)) {
    return null;
  } else {
    if (cResult[0] !== sku.name) {
      const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: sku.name };
      const tmp6 = state(Text_Text.Heading, obj3);
      cResult[0] = sku.name;
      cResult[1] = tmp6;
      let tmp4 = tmp6;
    } else {
      tmp4 = cResult[1];
    }
    if (cResult[2] !== sku.description) {
      const isNullOrEmptyResult = StringUtils.isNullOrEmpty(sku.description);
      let tmp9 = !isNullOrEmptyResult;
      if (!isNullOrEmptyResult) {
        const obj4 = { variant: "text-md/medium", color: "text-muted", children: sku.description };
        tmp9 = state(Text_Text.Text, obj4);
      }
      cResult[2] = sku.description;
      cResult[3] = tmp9;
      let tmp7 = tmp9;
      const tmpResult = StringUtils;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === section.section) {
      if (cResult[5] === tmp4) {
      }
    }
    const obj5 = { style: section.section, children: null };
    const items = [tmp4, tmp7];
    obj5.children = items;
    const tmp14 = closure_1_15(React5, obj5);
    section = section.section;
    cResult[4] = section;
    cResult[5] = tmp4;
    cResult[6] = tmp7;
    cResult[7] = tmp14;
  }
  obj2 = StringUtils;
}) : ((sku) => {
  sku = sku.sku;
  const tmp = closure_18();
  let tmp5Result = null;
  if (!obj.isNullOrEmpty(sku.name)) {
    const obj2 = { style: tmp.section, children: null };
    const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: sku.name };
    const items = [state(Text_Text.Heading, obj3), ];
    const isNullOrEmptyResult = StringUtils.isNullOrEmpty(sku.description);
    let tmp7Result = !isNullOrEmptyResult;
    if (!isNullOrEmptyResult) {
      const obj4 = { variant: "text-md/medium", color: "text-muted", children: sku.description };
      tmp7Result = state(Text_Text.Text, obj4);
    }
    items[1] = tmp7Result;
    obj2.children = items;
    tmp5Result = closure_1_15(React5, obj2);
    const tmp2Result = StringUtils;
  }
  return tmp5Result;
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  ({ selectedItem, applicationId } = arg0);
  const tmp4 = closure_18();
  if (cResult[0] === applicationId) {
    if (cResult[1] === selectedItem.labelIconAssetId) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === selectedItem.description) {
        if (cResult[5] === selectedItem.label) {
          if (cResult[6] === selectedItem.title) {
            if (cResult[7] === tmp4) {
              let tmp7 = cResult[8];
              let tmp8 = cResult[9];
              let tmp9 = cResult[10];
              let tmp10 = cResult[11];
              let tmp11 = cResult[12];
              let tmp12 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (tmp12 !== Symbol.for("react.early_return_sentinel")) {
              return tmp12;
            } else {
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp8) {
                  if (cResult[16] === tmp9) {
                    if (cResult[17] === tmp10) {
                    }
                  }
                }
              }
              const obj2 = { style: tmp8, children: null };
              const items = [tmp9, tmp10, tmp11];
              obj2.children = items;
              const tmp41 = closure_1_15(tmp7, obj2);
              cResult[14] = tmp7;
              cResult[15] = tmp8;
              cResult[16] = tmp9;
              cResult[17] = tmp10;
              cResult[18] = tmp11;
              cResult[19] = tmp41;
            }
          }
        }
      }
    }
    const _Symbol = Symbol;
    let trimmed;
    if (selectedItem.title != null) {
      trimmed = str2.trim();
    }
    let trimmed1;
    if (selectedItem.label != null) {
      trimmed1 = str3.trim();
    }
    let trimmed2;
    if (selectedItem.description != null) {
      trimmed2 = str4.trim();
    }
    const forResult = Symbol.for("react.early_return_sentinel");
    if (tmpResult.isNullOrEmpty(trimmed)) {
      if (tmpResult7.isNullOrEmpty(trimmed1)) {
        StringUtils;
        let tmp19 = null;
      }
      cResult[3] = tmp5;
      cResult[4] = selectedItem.description;
      cResult[5] = selectedItem.label;
      cResult[6] = selectedItem.title;
      cResult[7] = tmp4;
      cResult[8] = React5;
      cResult[9] = section;
      cResult[10] = tmp22;
      cResult[11] = tmp21;
      cResult[12] = tmp20;
      cResult[13] = tmp19;
      tmp12 = tmp19;
      tmp11 = tmp20;
      tmp10 = tmp21;
      tmp9 = tmp22;
      tmp8 = section;
      tmp7 = React5;
      tmpResult7 = StringUtils;
    }
    tmpResult = StringUtils;
    const isNullOrEmptyResult = StringUtils.isNullOrEmpty(trimmed);
    let tmp26 = !isNullOrEmptyResult;
    if (!isNullOrEmptyResult) {
      const obj3 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: trimmed };
      tmp26 = state(Text_Text.Heading, obj3);
    }
    const tmpResult9 = StringUtils;
    const isNullOrEmptyResult1 = StringUtils.isNullOrEmpty(trimmed1);
    let tmp30Result = !isNullOrEmptyResult1;
    if (!isNullOrEmptyResult1) {
      const obj4 = { style: tmp4.labelRow, children: null };
      let tmp31 = null != tmp5;
      if (tmp31) {
        const obj5 = { source: null, style: null };
        const obj6 = { uri: tmp5 };
        obj5.source = obj6;
        obj5.style = tmp4.labelIcon;
        tmp31 = state(FastImageDefault, obj5);
      }
      const items1 = [tmp31, ];
      const obj7 = { variant: "text-sm/medium", color: "text-muted", children: trimmed1 };
      items1[1] = state(Text_Text.Text, obj7);
      obj4.children = items1;
      tmp30Result = closure_1_15(React5, obj4);
    }
    const tmpResult10 = StringUtils;
    const isNullOrEmptyResult2 = StringUtils.isNullOrEmpty(trimmed2);
    let tmp36 = !isNullOrEmptyResult2;
    if (!isNullOrEmptyResult2) {
      const obj8 = { variant: "text-md/medium", color: "text-default", children: trimmed2 };
      tmp36 = state(Text_Text.Text, obj8);
    }
    tmp19 = forResult;
    section = tmp4.section;
    const tmpResult11 = StringUtils;
  }
  let assetURL = null;
  if (null != selectedItem.labelIconAssetId) {
    assetURL = StoreUtils.getAssetURL(applicationId, selectedItem.labelIconAssetId);
    const tmpResult12 = StoreUtils;
  }
  cResult[0] = applicationId;
  cResult[1] = selectedItem.labelIconAssetId;
  cResult[2] = assetURL;
  tmp5 = assetURL;
}) : ((selectedItem) => {
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
    tmp14 = state(Text_Text.Heading, obj4);
  }
  const items = [tmp14, , ];
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
      tmp18 = state(FastImageDefault, obj6);
    }
    const items1 = [tmp18, ];
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: trimmed1 };
    items1[1] = state(Text_Text.Text, obj8);
    obj5.children = items1;
    tmp11Result = closure_1_15(React5, obj5);
  }
  items[1] = tmp11Result;
  const tmp8Result7 = StringUtils;
  const isNullOrEmptyResult2 = StringUtils.isNullOrEmpty(trimmed2);
  let tmp23 = !isNullOrEmptyResult2;
  if (!isNullOrEmptyResult2) {
    const obj9 = { variant: "text-md/medium", color: "text-default", children: trimmed2 };
    tmp23 = state(Text_Text.Text, obj9);
  }
  items[2] = tmp23;
  obj3.children = items;
  tmp11Result2 = closure_1_15(React5, obj3);
  const tmp8Result8 = StringUtils;
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  const cResult = skuId(mobileStoreFront[14]).c(163);
  skuId = skuId.skuId;
  const analyticsLocations = skuId.analyticsLocations;
  let obj = skuId(mobileStoreFront[14]);
  importDefault = closure_18();
  require("useSafeAreaInsets")();
  let tmp4 = closure_18();
  const isScreenLandscape = skuId(mobileStoreFront[24]).useIsScreenLandscape();
  let obj2 = skuId(mobileStoreFront[24]);
  mobileStoreFront = require("NativePaymentHooks").useMobileStoreFront();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SKUStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== skuId) {
    class S {
      constructor() {
        return closure_8.get(skuId);
      }
    }
    cResult[1] = skuId;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        return closure_8.get(skuId);
      }
    }
  }
  let obj3 = require("NativePaymentHooks");
  const stateFromStores = skuId(mobileStoreFront[26]).useStateFromStores(first, S);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_8.get(skuId);
      }
    }
    const items1 = [SKUStore];
    cResult[3] = items1;
    const tmp13 = items1;
  } else {
    class S {
      constructor() {
        return closure_8.get(skuId);
      }
    }
  }
  if (cResult[4] !== skuId) {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
    cResult[4] = skuId;
    cResult[5] = F;
  } else {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
  }
  const tmpResult = skuId(mobileStoreFront[26]);
  const stateFromStores1 = skuId(mobileStoreFront[26]).useStateFromStores(tmp13, F);
  const tmpResult5 = skuId(mobileStoreFront[26]);
  if (stateFromStores != null) {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
  }
  const getOrFetchApplication = skuId(mobileStoreFront[27]).useGetOrFetchApplication(undefined);
  const tmpResult6 = skuId(mobileStoreFront[27]);
  if (getOrFetchApplication == null) {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
  }
  const hasAlreadyLinked = require("useStartAuthorize")(getOrFetchApplication).hasAlreadyLinked;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
    const items2 = [SocialLayerStorefrontStore];
    class X {
      constructor() {
        return closure_9.getSkuAssets();
      }
    }
    cResult[6] = items2;
    cResult[7] = X;
    let tmp19 = X;
    const tmp18 = items2;
  } else {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
    tmp19 = cResult[7];
  }
  let tmp5Result = require("useStartAuthorize");
  const stateFromStores2 = skuId(mobileStoreFront[26]).useStateFromStores(tmp18, tmp19);
  const tmpResult7 = skuId(mobileStoreFront[26]);
  const cardImageURL = skuId(mobileStoreFront[29]).getCardImageURL(stateFromStores);
  const tmpResult8 = skuId(mobileStoreFront[29]);
  [r10099, r10100] = stateFromStores(stateFromStores1.useState(0), 2);
  if (cResult[8] !== analyticsLocations) {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
    if (analyticsLocations == null) {
      class F {
        constructor() {
          obj = closure_8;
          tmp = skuId;
          tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
          return tmp2;
        }
      }
    }
    class X {
      constructor() {
        return closure_9.getSkuAssets();
      }
    }
    cResult[9] = tmp24;
  } else {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
  }
  if (cResult[10] !== tmp24) {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
    class X {
      constructor() {
        return closure_9.getSkuAssets();
      }
    }
    tmp26[HermesBuiltin.arraySpread(tmp24, 0)] = tmp5(tmp2[30]).SLAYER_STOREFRONT_NATIVE_PDP;
    cResult[10] = tmp24;
    cResult[11] = tmp26;
    const arraySpreadResult = HermesBuiltin.arraySpread(tmp24, 0);
  } else {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
  }
  location_stack = tmp26;
  if (cResult[12] === tmp26) {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
    if (stateFromStores != null) {
      class F {
        constructor() {
          obj = closure_8;
          tmp = skuId;
          tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
          return tmp2;
        }
      }
    }
    class X {
      constructor() {
        return closure_9.getSkuAssets();
      }
    }
  }
  cResult[12] = tmp26;
  if (stateFromStores != null) {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
  }
  class J {
    constructor() {
      obj = closure_1(closure_2[31]);
      obj1 = { location_stack: closure_5, type: closure_0(closure_2[32]).SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY, sku_id: skuId, application_id: null };
      applicationId = undefined;
      if (closure_3 != null) {
        applicationId = closure_3.applicationId;
      }
      obj1.application_id = applicationId;
      trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
      return;
    }
  }
  cResult[13] = undefined;
  cResult[14] = skuId;
  cResult[15] = J;
  const tmp22 = stateFromStores(stateFromStores1.useState(0), 2);
}) : ((skuId) => {
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
  const rect = analyticsLocations(1618)();
  const isScreenLandscape = skuId(5919).useIsScreenLandscape();
  let obj = skuId(5919);
  const mobileStoreFront = analyticsLocations(8900).useMobileStoreFront();
  let obj2 = analyticsLocations(8900);
  let items = [trackPDPClick];
  const stateFromStores = skuId(504).useStateFromStores(items, () => SKUStore.get(skuId));
  let obj3 = skuId(504);
  let items1 = [trackPDPClick];
  const stateFromStores1 = skuId(504).useStateFromStores(items1, () => SKUStore.isFetching(skuId) || SKUStore.didFetchingSkuFail(skuId));
  const obj4 = skuId(504);
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  const getOrFetchApplication = skuId(6670).useGetOrFetchApplication(applicationId1);
  let tmp12 = getOrFetchApplication;
  const obj5 = skuId(6670);
  if (getOrFetchApplication == null) {
    tmp12 = null;
  }
  const tmp2Result = analyticsLocations(6667);
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
  analyticsLocations(5597)(() => {
    const obj2 = { location_stack: memo1, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY, sku_id: skuId, application_id: null };
    applicationId = undefined;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj2.application_id = applicationId;
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
  });
  const items5 = [skuId, , ];
  let applicationId2;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  items5[1] = applicationId2;
  items5[2] = memo1;
  trackPDPClick = stateFromStores.useCallback((cta_type) => {
    const obj2 = { slayer_storefront_session_id: "Array", sku_id: skuId, guild_id: true, application_id: true, cta_type: false, location_stack: false };
    applicationId = undefined;
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
  [arr8, arr9] = mobileStoreFront(stateFromStores.useMemo(() => {
    applicationId = undefined;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    if (null == applicationId) {
      const items = [[], []];
      let result = items;
    } else {
      const obj = carouselMediaItems;
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
      const obj2 = { heroWidth: carouselMediaItems.MOBILE_HERO_WIDTH_PX };
      result = obj.convertCarouselItemsToMediaItems(carouselItems, stateFromStores.applicationId, stateFromStores2, obj2);
    }
    return result;
  }, items6), 2);
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
  const tmp15Result = mobileStoreFront(stateFromStores.useMemo(() => {
    applicationId = undefined;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    if (null == applicationId) {
      const items = [[], []];
      let result = items;
    } else {
      const obj = carouselMediaItems;
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
      const obj2 = { heroWidth: carouselMediaItems.MOBILE_HERO_WIDTH_PX };
      result = obj.convertCarouselItemsToMediaItems(carouselItems, stateFromStores.applicationId, stateFromStores2, obj2);
    }
    return result;
  }, items6), 2);
  [tmp28, c10] = mobileStoreFront(stateFromStores.useState(false), 2);
  const tmp15Result4 = mobileStoreFront(stateFromStores.useState(false), 2);
  [tmp30, c11] = mobileStoreFront(stateFromStores.useState(false), 2);
  const tmp15Result5 = mobileStoreFront(stateFromStores.useState(false), 2);
  [tmp32, c12] = mobileStoreFront(stateFromStores.useState(0), 2);
  stateFromStores.useRef(false);
  const items7 = [stateFromStores, stateFromStores2, num2 === arr8.length, stateFromStores1, ];
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
        const socialLayerStorefrontSkuForApplication = obj.fetchSocialLayerStorefrontSkuForApplication(applicationId, id, obj2);
        tmp5Result = PlatformUtils;
      }
    }
    tmp2 = null != stateFromStores && null != stateFromStores.applicationId;
  }, items7);
  const items8 = [skuId, , ];
  let orbsReward;
  const callback1 = obj7.useCallback(() => {
    _undefined(false);
  }, []);
  if (stateFromStores != null) {
    orbsReward = stateFromStores.orbsReward;
  }
  items8[1] = orbsReward;
  items8[2] = memo1;
  const items9 = [trackPDPClick, , ];
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
    const result = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj2);
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
      applicationId = undefined;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      const obj2 = { applicationId, skuId, source: "SocialLayerStorefrontProductDetailsModal" };
      redirectToSlayerStorefrontWebDefault(obj2).then((result) => {
        if (result) {
          result = skuId(closeButtonIcon[32]).closeSocialLayerStorefrontProductDetailsModal();
          const obj = skuId(closeButtonIcon[32]);
        }
      });
      const tmp4Result = redirectToSlayerStorefrontWebDefault(obj2);
    }
    obj = BillingPlatformUtils;
  }, items9);
  const OTPACOMOrderExperiment = tmp4(8899).OTPACOMOrderExperiment;
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
    const obj6 = { headless: true, paymentGateway: GOOGLE, orderRequired: null, skuIds: null, isGift: false, activeSubscription: null, onOrderRetryCancellation: null, checkoutAnalyticsFields: null, children: null };
    if (enabled) {
      enabled = GOOGLE === tmp41.APPLE_ADVANCED_COMMERCE;
    }
    obj6.orderRequired = enabled;
    const items10 = [skuId];
    obj6.skuIds = items10;
    obj6.onOrderRetryCancellation = tmp4(10544).closeSocialLayerStorefrontProductDetailsModal;
    const obj8 = { is_gift: false, location_stack: memo1, payment_type: "sku", sku_id: skuId, sku_type: null, sku_product_line: null, application_id: null };
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
    const obj9 = { attempt: tmp32, skuId, sku: stateFromStores, analyticsLocations: memo1, onPurchaseComplete: callback2, onPurchaseError: callback1 };
    obj6.children = closure_14(tmp4(10555).HeadlessSlayerStorefrontPurchaseRunner, obj9);
    tmp43Result = closure_14(tmp2(10551), obj6, skuId);
    const tmp2Result2 = tmp2(10551);
  }
  const items11 = [skuId, memo1, trackPDPClick];
  if (null == stateFromStores) {
    return null;
  } else {
    let result = tmp4(6746).isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = tmp4(1126).intl;
    const stringResult = intl4.string(tmp4(1126).t.boqtTA);
    const tmp4Result7 = tmp4(6746);
    let result1 = tmp4(4547).isSocialLayerStorefrontGiftingSupported();
    if (null != tmp25) {
      const obj10 = { mediaItem: tmp25, landscape: isScreenLandscape };
      let tmp49 = closure_14(closure_19, obj10);
    } else {
      tmp49 = null;
      if (null != memo) {
        const obj11 = { sku: stateFromStores };
        tmp49 = closure_14(tmp2(8514), obj11);
      }
    }
    let tmp53 = null;
    if (stateFromStores.exclusive) {
      const obj12 = { style: tmp.exclusiveBadgeContainer, children: closure_14(tmp4(10559).ExclusiveBadge, {}) };
      tmp53 = closure_14(memo1, obj12);
    }
    let tmp56 = null;
    if (tmp23) {
      const obj13 = { items: arr8, mediaItems: arr9, selectedIndex: num, onSelectIndex: tmp16[1], trackPDPClick };
      tmp56 = closure_14(closure_22, obj13);
    }
    applicationId = stateFromStores.applicationId;
    let tmp59 = null;
    if (tmp23) {
      tmp59 = tmp24;
    }
    let tmp60 = null;
    if (null != tmp59) {
      tmp60 = null;
      if (null != applicationId) {
        const obj14 = { selectedItem: tmp59, applicationId };
        tmp60 = closure_14(closure_24, obj14);
      }
    }
    const obj15 = { style: null, children: null };
    const items12 = [tmp.footer, ];
    const obj16 = { paddingBottom: rect.bottom + tmp2(587).space.PX_16 };
    items12[1] = obj16;
    obj15.style = items12;
    const obj17 = { sku: stateFromStores };
    const items13 = [closure_14(closure_21, obj17), , , ];
    let tmp65Result = !result;
    if (!result) {
      const obj18 = { variant: "text-xs/normal", color: "text-muted", style: tmp.availabilityCopy, includeFontPadding: true, children: null };
      const intl = tmp4(1126).intl;
      obj18.children = intl.string(tmp2(3623).gndWN7);
      tmp65Result = closure_14(tmp4(4892).Text, obj18);
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
    obj20.children = closure_14(tmp4(5601).Button, obj21);
    const items14 = [closure_14(memo1, obj20), ];
    if (result1) {
      const obj22 = { icon: tmp2(7763), variant: "primary", size: "lg", disabled: tmp28, accessibilityLabel: null, onPress: null };
      const intl2 = tmp4(1126).intl;
      obj22.accessibilityLabel = intl2.string(tmp4(1126).t.QAZA5f);
      obj22.onPress = tmp48;
      result1 = closure_14(tmp4(7586).IconButton, obj22);
    }
    items14[1] = result1;
    obj19.children = items14;
    items13[2] = closure_15(memo1, obj19);
    if (result) {
      const obj23 = { style: tmp.legalCopy, children: null };
      const obj24 = { shouldAppendDisclaimer: false === tmp2Result(tmp12).hasAlreadyLinked };
      const mobileFinePrintMessageForApplication = tmp4(10562).getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, obj24);
      obj23.children = mobileFinePrintMessageForApplication.map((children, index) => closure_1_14(skuId(closeButtonIcon[17]).Text, { variant: "text-xs/normal", color: "text-muted", includeFontPadding: true, children }, index));
      result = closure_14(tmp64, obj23);
      const tmp4Result9 = tmp4(10562);
    }
    items13[3] = result;
    obj15.children = items13;
    const tmp63Result = closure_15(memo1, obj15);
    const items15 = [tmp.container, ];
    const tmp4Result8 = tmp4(4547);
    let num3 = 0;
    if (!tmp4Result10.isIOS()) {
      num3 = rect.top;
    }
    const obj25 = { style: null, children: null };
    const obj26 = { paddingTop: num3 };
    items15[1] = obj26;
    obj25.style = items15;
    const items16 = [tmp43Result, , , ];
    const obj27 = { style: tmp.header, children: null };
    const obj28 = {
      onPress: tmp4(10544).closeSocialLayerStorefrontProductDetailsModal,
      backImage() {
          return state(XSmallIcon.XSmallIcon, { size: "md", style: closeButtonIcon.closeButtonIcon });
        },
      accessibilityLabel: null,
      displayMode: "minimal"
    };
    const intl3 = tmp4(1126).intl;
    obj28.accessibilityLabel = intl3.string(tmp4(1126).t.cpT0Cq);
    const items17 = [closure_14(tmp4(6026).HeaderBackButton, obj28), ];
    const obj29 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerTitle, children: null };
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj29.children = name;
    items17[1] = closure_14(tmp4(4892).Heading, obj29);
    obj27.children = items17;
    items16[1] = closure_15(memo1, obj27);
    const obj30 = { style: tmp.scrollContainer, children: null };
    let exclusive = stateFromStores.exclusive;
    if (exclusive) {
      const obj31 = { style: stateFromStores2.absoluteFill, colors: null, pointerEvents: "none" };
      const items18 = [closure_16, closure_17];
      obj31.colors = items18;
      exclusive = closure_14(tmp2(5612), obj31);
    }
    const items19 = [exclusive, ];
    if (isScreenLandscape) {
      const obj32 = { style: tmp.columnsLandscape, children: null };
      const obj33 = { style: tmp.heroColumnLandscape, contentContainerStyle: null, children: null };
      const items20 = [tmp.heroColumnContentLandscape, ];
      const obj34 = { paddingBottom: rect.bottom + 8 };
      items20[1] = obj34;
      obj33.contentContainerStyle = items20;
      const items21 = [tmp49, ];
      const obj35 = { style: tmp.bundleGroupLandscape, children: null };
      const items22 = [tmp56, tmp60];
      obj35.children = items22;
      items21[1] = closure_15(tmp64, obj35);
      obj33.children = items21;
      const items23 = [closure_15(stateFromStores1, obj33), ];
      const obj36 = { style: tmp.detailsScrollLandscape, contentContainerStyle: null, children: null };
      const items24 = [, ];
      ({ scrollContent: arr30[0], detailsContentLandscape: arr30[1] } = tmp);
      obj36.contentContainerStyle = items24;
      const obj37 = { style: tmp.detailsGroupLandscape, children: null };
      const items25 = [tmp53, ];
      const obj38 = { sku: stateFromStores };
      items25[1] = closure_14(closure_23, obj38);
      obj37.children = items25;
      const items26 = [closure_15(tmp64, obj37), tmp63Result];
      obj36.children = items26;
      items23[1] = closure_15(stateFromStores1, obj36);
      obj32.children = items23;
      let tmp63Result2 = closure_15(tmp64, obj32);
    } else {
      const obj39 = { contentContainerStyle: tmp.scrollContent, children: null };
      const items27 = [tmp49, tmp53, , , ];
      const obj40 = { sku: stateFromStores };
      items27[2] = closure_14(closure_23, obj40);
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
  tmp4Result6 = skuId(1369);
});
ReactCompilerGating = fn(558);
let obj22 = { paddingHorizontal: nativeDefault.space.PX_16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const obj2 = { skuIDs: first, activeSubscription: null, children: null };
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj2.children = state(closure_25, obj3);
    const tmp11 = state(NativePaymentContext.NativePaymentContextProvider, obj2);
    cResult[1] = arg0;
    cResult[2] = tmp11;
    let tmp5 = tmp11;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : ((arg0) => {
  const obj = { skuIDs: [], activeSubscription: null, children: null };
  const merged = Object.assign(arg0);
  obj.children = state(closure_25, {});
  return state(NativePaymentContext.NativePaymentContextProvider, obj);
});