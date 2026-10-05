// === Module 10533: SocialLayerStorefrontProductDetailsModal ===

// Module 10533 (SocialLayerStorefrontProductDetailsModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import StringUtils from "StringUtils" /* 2018 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4541 */;
import Text_Text from "Text/Text" /* 4886 */;
import StoreUtils from "StoreUtils" /* 5322 */;
import FastImageDefault from "FastImage" /* 5974 */;
import XSmallIcon from "XSmallIcon" /* 6017 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6727 */;
import common_Video from "common/Video" /* 7983 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10531 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10532 */;
import SocialLayerStorefrontAnalyticsConstants from "SocialLayerStorefrontAnalyticsConstants" /* 10534 */;
import carouselMediaItems from "carouselMediaItems" /* 10535 */;
import StorefrontNativeUtils from "StorefrontNativeUtils" /* 10536 */;
import redirectToSlayerStorefrontWebDefault from "redirectToSlayerStorefrontWeb" /* 10537 */;
import NativePaymentContext from "NativePaymentContext" /* 10551 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SKUStore from "SKUStore" /* 5695 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6729 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import module_683_mod from "module_683" /* 683 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let applicationId, closure_0, dependencyMap, importDefault, location_stack, obj1, sku, skuId, tmp3, trackResult;

let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj19;
let obj2;
let obj20;
let obj21;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let unpackModuleId;
let react = react_mod;
({ ScrollView: hasOwnProperty, StyleSheet: metroRequire, View: metroImportDefault } = react_native);
const SlayerShopPDPCTAType = SocialLayerStorefrontAnalyticsConstants.SlayerShopPDPCTAType;
({ AnalyticEvents: unpackModuleId, PaymentGateways: closure_12, PriceSetAssignmentPurchaseTypes: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let module_683 = module_683_mod;
const importDefaultResultResult = module_683(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult = importDefaultResultResult.alpha(0.25);
let closure_16 = alphaResult.hex();
module_683 = module_683_mod;
const importDefaultResult1Result = module_683(nativeDefault.unsafe_rawColors.BRAND_500);
const alphaResult1 = importDefaultResult1Result.alpha(0);
let closure_17 = alphaResult1.hex();
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, header: obj2, headerTitle: { flexShrink: 1 }, closeButtonIcon: obj3, scrollContent: obj4, scrollContainer: { flex: 1 }, columnsLandscape: obj5, heroColumnLandscape: { flex: 1 }, heroColumnContentLandscape: obj6, bundleGroupLandscape: obj7, detailsScrollLandscape: { flex: 1 }, detailsContentLandscape: { flexGrow: 1, justifyContent: "space-between", paddingBottom: 0 }, detailsGroupLandscape: obj8, section: obj9, bundleThumbnailRow: obj10, thumbnail: size, thumbnailSelected: obj11, thumbnailInner: obj12, thumbnailInnerSelected: obj13, thumbnailImage: { width: "100%", height: "100%" }, labelRow: obj14, labelIcon: size1, priceRow: obj15, footer: obj16, footerButtonRow: obj17, buyButton: { flex: 1 }, availabilityCopy: { textAlign: "center" }, legalCopy: obj18, hero: obj19, heroLandscape: { flex: 1, minHeight: 140, height: "borderRadius" }, priceSection: obj20, heroImage: { width: "100%", height: "100%" }, exclusiveBadgeContainer: obj21 };
obj2 = { height: NavigatorConstants.NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
obj4 = { alignItems: "stretch", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
obj5 = { flex: 1, flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj6 = { flexGrow: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16 };
obj7 = { gap: nativeDefault.space.PX_4 };
obj8 = { gap: nativeDefault.space.PX_16 };
obj9 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj10 = { flexDirection: "row", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
size = { width: 64, height: 64, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
obj11 = { borderColor: nativeDefault.colors.BORDER_STRONG };
obj12 = { flex: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj13 = { margin: 2, borderRadius: nativeDefault.radii.sm };
obj14 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj15 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj16 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj17 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj18 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
obj19 = { marginHorizontal: nativeDefault.space.PX_16, height: carouselMediaItems.MOBILE_HERO_HEIGHT_PX, borderRadius: nativeDefault.radii.md, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj20 = { width: "100%", gap: nativeDefault.space.PX_8 };
obj21 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_18 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let landscape;
  let mediaItem;
  let obj6;
  const obj = react2;
  const cResult = obj.c(31);
  ({ mediaItem, landscape } = arg0);
  const tmp4 = closure_18();
  if (landscape) {
    landscape = tmp4.heroLandscape;
  }
  if (cResult[0] === tmp4.hero) {
    let tmp5;
    let tmp11;
    if (cResult[1] === landscape) {
      tmp5 = cResult[2];
    }
    if ("video" === mediaItem.type) {
      let tmp29;
      if (cResult[3] !== mediaItem.src) {
        const obj2 = { uri: mediaItem.src };
        cResult[3] = mediaItem.src;
        cResult[4] = obj2;
        tmp29 = obj2;
      } else {
        tmp29 = cResult[4];
      }
      if (cResult[5] === mediaItem.videoThumbnailSrc) {
        if (cResult[6] === tmp4.heroImage) {
          let tmp30;
          if (cResult[7] === tmp29) {
            tmp30 = cResult[8];
          }
          if (cResult[9] === tmp5) {
            let tmp33;
            if (cResult[10] === tmp30) {
              tmp33 = cResult[11];
            }
            tmp11 = tmp33;
          }
          const obj3 = { style: tmp5, children: tmp30 };
          const tmp36 = authStore2(metroImportDefault, obj3);
          cResult[9] = tmp5;
          cResult[10] = tmp30;
          cResult[11] = tmp36;
          tmp33 = tmp36;
        }
      }
      const obj4 = { source: tmp29, poster: mediaItem.videoThumbnailSrc, muted: true, resizeMode: "cover", style: tmp4.heroImage };
      const tmp32 = authStore2(common_Video.VideoComponent, obj4);
      cResult[5] = mediaItem.videoThumbnailSrc;
      cResult[6] = tmp4.heroImage;
      cResult[7] = tmp29;
      cResult[8] = tmp32;
      tmp30 = tmp32;
    } else if (null != mediaItem.backgroundSrc) {
      let tmp15;
      let tmp20;
      if (cResult[12] !== mediaItem.backgroundSrc) {
        const obj5 = { source: obj6, style: metroRequire.absoluteFill, resizeMode: "cover" };
        obj6 = { uri: mediaItem.backgroundSrc };
        const tmp19 = authStore2(FastImageDefault, obj5);
        cResult[12] = mediaItem.backgroundSrc;
        cResult[13] = tmp19;
        tmp15 = tmp19;
      } else {
        tmp15 = cResult[13];
      }
      if (cResult[14] !== mediaItem.src) {
        const obj7 = { uri: mediaItem.src };
        cResult[14] = mediaItem.src;
        cResult[15] = obj7;
        tmp20 = obj7;
      } else {
        tmp20 = cResult[15];
      }
      if (cResult[16] === tmp4.heroImage) {
        let tmp21;
        if (cResult[17] === tmp20) {
          tmp21 = cResult[18];
        }
        if (cResult[19] === tmp5) {
          if (cResult[20] === tmp15) {
            let tmp25;
            if (cResult[21] === tmp21) {
              tmp25 = cResult[22];
            }
            tmp11 = tmp25;
          }
        }
        const obj8 = { style: tmp5, children: items };
        items = [tmp15, tmp21];
        const tmp28 = closure_15(metroImportDefault, obj8);
        cResult[19] = tmp5;
        cResult[20] = tmp15;
        cResult[21] = tmp21;
        cResult[22] = tmp28;
        tmp25 = tmp28;
      }
      const obj9 = { source: tmp20, style: tmp4.heroImage, resizeMode: "cover" };
      const tmp24 = authStore2(FastImageDefault, obj9);
      cResult[16] = tmp4.heroImage;
      cResult[17] = tmp20;
      cResult[18] = tmp24;
      tmp21 = tmp24;
    } else {
      let tmp6;
      if (cResult[23] !== mediaItem.src) {
        const obj10 = { uri: mediaItem.src };
        cResult[23] = mediaItem.src;
        cResult[24] = obj10;
        tmp6 = obj10;
      } else {
        tmp6 = cResult[24];
      }
      if (cResult[25] === tmp4.heroImage) {
        let tmp7;
        if (cResult[26] === tmp6) {
          tmp7 = cResult[27];
        }
        if (cResult[28] === tmp5) {
          if (cResult[29] === tmp7) {
            tmp11 = cResult[30];
          }
        }
        const obj11 = { style: tmp5, children: tmp7 };
        const tmp14 = authStore2(metroImportDefault, obj11);
        cResult[28] = tmp5;
        cResult[29] = tmp7;
        cResult[30] = tmp14;
        tmp11 = tmp14;
      }
      const obj12 = { source: tmp6, style: tmp4.heroImage, resizeMode: "cover" };
      const tmp10 = authStore2(FastImageDefault, obj12);
      cResult[25] = tmp4.heroImage;
      cResult[26] = tmp6;
      cResult[27] = tmp10;
      tmp7 = tmp10;
    }
    return tmp11;
  }
  const items1 = [tmp4.hero, landscape];
  cResult[0] = tmp4.hero;
  cResult[1] = landscape;
  cResult[2] = items1;
  tmp5 = items1;
}) : ((arg0) => {
  let items1;
  let landscape;
  let mediaItem;
  let obj10;
  let obj11;
  let obj3;
  let obj4;
  let obj7;
  let obj9;
  let tmp6;
  ({ mediaItem, landscape } = arg0);
  const tmp = closure_18();
  const items = [tmp.hero, ];
  if (landscape) {
    landscape = tmp.heroLandscape;
  }
  items[1] = landscape;
  if ("video" === mediaItem.type) {
    const obj2 = { style: items, children: authStore2(common_Video.VideoComponent, obj3) };
    obj3 = { source: obj4, poster: mediaItem.videoThumbnailSrc, muted: true, resizeMode: "cover", style: tmp.heroImage };
    obj4 = { uri: mediaItem.src };
    tmp6 = authStore2(metroImportDefault, obj2);
  } else if (null != mediaItem.backgroundSrc) {
    const obj6 = { source: obj7, style: metroRequire.absoluteFill, resizeMode: "cover" };
    const obj5 = { style: items, children: items1 };
    obj7 = { uri: mediaItem.backgroundSrc };
    items1 = [authStore2(FastImageDefault, obj6), ];
    const obj8 = { source: obj9, style: tmp.heroImage, resizeMode: "cover" };
    obj9 = { uri: mediaItem.src };
    items1[1] = authStore2(FastImageDefault, obj8);
    tmp6 = closure_15(metroImportDefault, obj5);
  } else {
    const obj = { style: items, children: authStore2(FastImageDefault, obj10) };
    obj10 = { source: obj11, style: tmp.heroImage, resizeMode: "cover" };
    obj11 = { uri: mediaItem.src };
    tmp6 = authStore2(metroImportDefault, obj);
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/medium", color: "text-muted", children: intl.string(intl5.t.V91tvy) };
    const Text = Text_Text.Text;
    intl = intl5.intl;
    const tmp6 = authStore2(Text, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let intl;
  const obj = { variant: "text-sm/medium", color: "text-muted", children: intl.string(intl5.t.V91tvy) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  return authStore2(Text, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((sku) => {
  let items;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(11);
  sku = sku.sku;
  const tmp4 = closure_18();
  if (cResult[0] !== sku) {
    const obj2 = { sku, priceSetAssignmentPurchaseType: map1.DEFAULT };
    cResult[0] = sku;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = StorefrontNativeUtils;
  const userPrice = tmpResult.useFormattedSKUPrice(tmp5).userPrice;
  let tmp7 = null;
  if (null != userPrice) {
    let tmp9;
    let tmp13;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp12 = authStore2(closure_20, {});
      cResult[2] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[2];
    }
    if (cResult[3] !== userPrice) {
      const obj3 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: userPrice };
      const tmp15 = authStore2(Text_Text.Text, obj3);
      cResult[3] = userPrice;
      cResult[4] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] === tmp4.priceRow) {
      let tmp16;
      if (cResult[6] === tmp13) {
        tmp16 = cResult[7];
      }
      if (cResult[8] === tmp4.priceSection) {
        let tmp20;
        if (cResult[9] === tmp16) {
          tmp20 = cResult[10];
        }
        tmp7 = tmp20;
      }
      const obj4 = { style: tmp4.priceSection, children: items };
      items = [tmp9, tmp16];
      const tmp23 = closure_15(metroImportDefault, obj4);
      cResult[8] = tmp4.priceSection;
      cResult[9] = tmp16;
      cResult[10] = tmp23;
      tmp20 = tmp23;
    }
    const obj5 = { style: tmp4.priceRow, children: tmp13 };
    const tmp19 = authStore2(metroImportDefault, obj5);
    cResult[5] = tmp4.priceRow;
    cResult[6] = tmp13;
    cResult[7] = tmp19;
    tmp16 = tmp19;
  }
  return tmp7;
}) : ((sku) => {
  let items;
  let obj5;
  sku = sku.sku;
  const tmp = closure_18();
  const obj = StorefrontNativeUtils;
  const obj2 = { sku, priceSetAssignmentPurchaseType: map1.DEFAULT };
  const userPrice = obj.useFormattedSKUPrice(obj2).userPrice;
  let tmp4 = null;
  if (null != userPrice) {
    const obj3 = { style: tmp.priceSection, children: items };
    items = [authStore2(closure_20, {}), ];
    const obj4 = { style: tmp.priceRow, children: authStore2(Text_Text.Text, obj5) };
    obj5 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: userPrice };
    items[1] = authStore2(metroImportDefault, obj4);
    tmp4 = closure_15(metroImportDefault, obj3);
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((onSelectIndex) => {
  let intl;
  let items;
  let items1;
  let mediaItems;
  let selectedIndex;
  let thumbnail;
  let tmp10;
  const tmp = items;
  let obj = items(onSelectIndex[14]);
  const cResult = obj.c(29);
  items = onSelectIndex.items;
  ({ mediaItems, selectedIndex } = onSelectIndex);
  onSelectIndex = onSelectIndex.onSelectIndex;
  const trackPDPClick = onSelectIndex.trackPDPClick;
  let tmp4 = closure_18();
  react = tmp4;
  if (cResult[0] === onSelectIndex) {
    let tmp5;
    let tmp7;
    let tmp11;
    if (cResult[1] === trackPDPClick) {
      tmp5 = cResult[2];
    }
    let closure_5 = tmp5;
    const _Symbol = Symbol;
    const section = tmp4.section;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(tmp(tmp2[18]).t.U7DAV9) };
      const Text = tmp(tmp2[17]).Text;
      intl = tmp(tmp2[18]).intl;
      const tmp9 = closure_14(Text, obj2);
      cResult[3] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === tmp5) {
      if (cResult[5] === items) {
        if (cResult[6] === mediaItems) {
          if (cResult[7] === selectedIndex) {
            if (cResult[8] === tmp4.thumbnail) {
              if (cResult[9] === tmp4.thumbnailImage) {
                if (cResult[10] === tmp4.thumbnailInner) {
                  if (cResult[11] === tmp4.thumbnailInnerSelected) {
                    if (cResult[12] === tmp4.thumbnailSelected) {
                      tmp11 = cResult[13];
                    }
                    if (cResult[23] === tmp4.bundleThumbnailRow) {
                      let tmp14;
                      if (cResult[24] === tmp11) {
                        tmp14 = cResult[25];
                      }
                      if (cResult[26] === tmp4.section) {
                        let tmp18;
                        if (cResult[27] === tmp14) {
                          tmp18 = cResult[28];
                        }
                        return tmp18;
                      }
                      let obj3 = { style: section, children: items1 };
                      items1 = [tmp7, tmp14];
                      class P {
                        constructor(arg0, arg1) {
                          closure_0 = arg1;
                          tmp = closure_0[arg1];
                          tmp3 = closure_1_14;
                          tmp5 = onSelectIndex;
                          tmp2 = selectedIndex;
                          tmp4 = items;
                          label = undefined;
                          PressableOpacity = items(onSelectIndex[20]).PressableOpacity;
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
                          items[1] = thumbnailInnerSelected && tmp8.thumbnailSelected;
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
                          return tmp3(PressableOpacity, obj, arg1);
                        }
                      }
                      cResult[26] = tmp4.section;
                      cResult[27] = tmp14;
                      cResult[28] = tmp21;
                      tmp18 = tmp21;
                    }
                    let obj4 = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp10, children: tmp11 };
                    const tmp17 = closure_14(closure_5, obj4);
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
                        PressableOpacity = items(onSelectIndex[20]).PressableOpacity;
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
                        items[1] = thumbnailInnerSelected && tmp8.thumbnailSelected;
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
                        return tmp3(PressableOpacity, obj, arg1);
                      }
                    }
                    cResult[24] = tmp11;
                    cResult[25] = tmp17;
                    tmp14 = tmp17;
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
        if (cResult[16] === selectedIndex) {
          if (cResult[17] === tmp4.thumbnail) {
            if (cResult[18] === tmp4.thumbnailImage) {
              if (cResult[19] === tmp4.thumbnailInner) {
                if (cResult[20] === tmp4.thumbnailInnerSelected) {
                  let tmp12;
                  if (cResult[21] === tmp4.thumbnailSelected) {
                    tmp12 = cResult[22];
                  }
                  const mapped = mediaItems.map(tmp12);
                  cResult[4] = tmp5;
                  cResult[5] = items;
                  cResult[6] = mediaItems;
                  cResult[7] = selectedIndex;
                  class P {
                    constructor(arg0, arg1) {
                      closure_0 = arg1;
                      tmp = closure_0[arg1];
                      tmp3 = closure_1_14;
                      tmp5 = onSelectIndex;
                      tmp2 = selectedIndex;
                      tmp4 = items;
                      label = undefined;
                      PressableOpacity = items(onSelectIndex[20]).PressableOpacity;
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
                      items[1] = thumbnailInnerSelected && tmp8.thumbnailSelected;
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
                      return tmp3(PressableOpacity, obj, arg1);
                    }
                  }
                  cResult[8] = tmp4.thumbnail;
                  cResult[9] = tmp4.thumbnailImage;
                  cResult[10] = tmp4.thumbnailInner;
                  cResult[11] = tmp4.thumbnailInnerSelected;
                  cResult[12] = tmp4.thumbnailSelected;
                  cResult[13] = mapped;
                  tmp11 = mapped;
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
        PressableOpacity = items(onSelectIndex[20]).PressableOpacity;
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
        items[1] = thumbnailInnerSelected && tmp8.thumbnailSelected;
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
        return tmp3(PressableOpacity, obj, arg1);
      }
    }
    cResult[14] = tmp5;
    cResult[15] = items;
    cResult[16] = selectedIndex;
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
}) : ((trackPDPClick) => {
  let intl;
  let items1;
  let mediaItems;
  let onSelectIndex;
  let require;
  let thumbnail;
  ({ items: require, mediaItems, selectedIndex: importDefault, onSelectIndex } = trackPDPClick);
  trackPDPClick = trackPDPClick.trackPDPClick;
  const tmp = closure_18();
  react = tmp;
  let items = [onSelectIndex, trackPDPClick];
  let closure_5 = react.useCallback((arg0) => {
    trackPDPClick(SlayerShopPDPCTAType.CAROUSEL_ITEM);
    onSelectIndex(arg0);
  }, items);
  let obj = { style: tmp.section, children: items1 };
  let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: intl.string(require("intl").t.U7DAV9) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items1 = [closure_14(Text, obj2), ];
  let obj3 = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: tmp.bundleThumbnailRow,
    children: mediaItems.map((item, index) => {
      let items;
      let obj2;
      let obj3;
      let obj4;
      let tmp10;
      let tmp4Result;
      const require = index;
      let label;
      const PressableOpacity = require("native").PressableOpacity;
      if (require[index] != null) {
        label = tmp.label;
      }
      if (label == null) {
        let title;
        if (require[index] != null) {
          title = tmp.title;
        }
        label = title;
      }
      let thumbnailInnerSelected = index === importDefault;
      const obj = {
        accessibilityRole: "button",
        accessibilityLabel: label,
        accessibilityState: { selected: thumbnailInnerSelected },
        onPress() {
          return closure_5(index);
        },
        style: items,
        children: closure_1_14(closure_1_7, obj2)
      };
      items = [thumbnail.thumbnail, thumbnailInnerSelected && thumbnail.thumbnailSelected];
      const items1 = [thumbnail.thumbnailInner, ];
      if (thumbnailInnerSelected) {
        thumbnailInnerSelected = thumbnail.thumbnailInnerSelected;
      }
      items1[1] = thumbnailInnerSelected;
      obj2 = { style: items1, children: closure_1_14(tmp10, obj3) };
      obj3 = { source: obj4, style: thumbnail.thumbnailImage, resizeMode: "cover" };
      obj4 = { uri: tmp4Result.getThumbnailSrc(item) };
      tmp10 = require("FastImage");
      tmp4Result = require("carouselMediaItems");
      return closure_1_14(PressableOpacity, obj, index);
    })
  };
  items1[1] = closure_14(closure_5, obj3);
  return closure_15(closure_7, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((sku) => {
  let items;
  const obj = react2;
  const cResult = obj.c(8);
  sku = sku.sku;
  const tmp4 = closure_18();
  let tmp5 = null;
  const obj2 = StringUtils;
  if (!obj2.isNullOrEmpty(sku.name)) {
    let tmp6;
    let tmp9;
    if (cResult[0] !== sku.name) {
      const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: sku.name };
      const tmp8 = authStore2(Text_Text.Heading, obj3);
      cResult[0] = sku.name;
      cResult[1] = tmp8;
      tmp6 = tmp8;
    } else {
      tmp6 = cResult[1];
    }
    if (cResult[2] !== sku.description) {
      const tmpResult = StringUtils;
      let tmp11 = !tmpResult.isNullOrEmpty(sku.description);
      tmpResult.isNullOrEmpty(sku.description);
      if (tmp11) {
        const obj4 = { variant: "text-md/medium", color: "text-muted", children: sku.description };
        tmp11 = authStore2(Text_Text.Text, obj4);
      }
      cResult[2] = sku.description;
      cResult[3] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === tmp4.section) {
      if (cResult[5] === tmp6) {
        let tmp13;
        if (cResult[6] === tmp9) {
          tmp13 = cResult[7];
        }
        tmp5 = tmp13;
      }
    }
    const obj5 = { style: tmp4.section, children: items };
    items = [tmp6, tmp9];
    const tmp16 = closure_15(metroImportDefault, obj5);
    cResult[4] = tmp4.section;
    cResult[5] = tmp6;
    cResult[6] = tmp9;
    cResult[7] = tmp16;
    tmp13 = tmp16;
  }
  return tmp5;
}) : ((sku) => {
  let items;
  sku = sku.sku;
  let tmp5Result = null;
  const tmp = closure_18();
  const obj = StringUtils;
  if (!obj.isNullOrEmpty(sku.name)) {
    const obj2 = { style: tmp.section, children: items };
    const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: sku.name };
    items = [authStore2(Text_Text.Heading, obj3), ];
    const tmp2Result = StringUtils;
    let tmp7Result = !tmp2Result.isNullOrEmpty(sku.description);
    tmp2Result.isNullOrEmpty(sku.description);
    if (tmp7Result) {
      const obj4 = { variant: "text-md/medium", color: "text-muted", children: sku.description };
      tmp7Result = authStore2(Text_Text.Text, obj4);
    }
    items[1] = tmp7Result;
    tmp5Result = closure_15(metroImportDefault, obj2);
  }
  return tmp5Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let items1;
  let obj6;
  let selectedItem;
  const obj = react2;
  const cResult = obj.c(20);
  ({ selectedItem, applicationId } = arg0);
  const tmp4 = closure_18();
  if (cResult[0] === applicationId) {
    let tmp5;
    let tmp12;
    let tmp11;
    let tmp10;
    let tmp9;
    let tmp8;
    let tmp7;
    if (cResult[1] === selectedItem.labelIconAssetId) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === selectedItem.description) {
        if (cResult[5] === selectedItem.label) {
          if (cResult[6] === selectedItem.title) {
            if (cResult[7] === tmp4) {
              tmp7 = cResult[8];
              tmp8 = cResult[9];
              tmp9 = cResult[10];
              tmp10 = cResult[11];
              tmp11 = cResult[12];
              tmp12 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (tmp12 === Symbol.for("react.early_return_sentinel")) {
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp8) {
                  if (cResult[16] === tmp9) {
                    if (cResult[17] === tmp10) {
                      let tmp40;
                      if (cResult[18] === tmp11) {
                        tmp40 = cResult[19];
                      }
                      tmp12 = tmp40;
                    }
                  }
                }
              }
              const obj2 = { style: tmp8, children: items };
              items = [tmp9, tmp10, tmp11];
              const tmp42 = closure_15(tmp7, obj2);
              cResult[14] = tmp7;
              cResult[15] = tmp8;
              cResult[16] = tmp9;
              cResult[17] = tmp10;
              cResult[18] = tmp11;
              cResult[19] = tmp42;
              tmp40 = tmp42;
            }
            return tmp12;
          }
        }
      }
    }
    const _Symbol = Symbol;
    let trimmed;
    const forResult = Symbol.for("react.early_return_sentinel");
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
    const tmpResult = StringUtils;
    if (tmpResult.isNullOrEmpty(trimmed)) {
      let tmp19;
      const tmpResult7 = StringUtils;
      if (tmpResult7.isNullOrEmpty(trimmed1)) {
        StringUtils;
        tmp19 = null;
      }
      cResult[3] = tmp5;
      cResult[4] = selectedItem.description;
      cResult[5] = selectedItem.label;
      cResult[6] = selectedItem.title;
      cResult[7] = tmp4;
      cResult[8] = metroImportDefault;
      cResult[9] = tmp23;
      cResult[10] = tmp22;
      cResult[11] = tmp21;
      cResult[12] = tmp20;
      cResult[13] = tmp19;
      tmp12 = tmp19;
      tmp11 = tmp20;
      tmp10 = tmp21;
      tmp9 = tmp22;
      tmp8 = tmp23;
      tmp7 = metroImportDefault;
    }
    const section = tmp4.section;
    const tmpResult9 = StringUtils;
    let tmp27 = !tmpResult9.isNullOrEmpty(trimmed);
    tmpResult9.isNullOrEmpty(trimmed);
    if (tmp27) {
      const obj3 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: trimmed };
      tmp27 = authStore2(Text_Text.Heading, obj3);
    }
    const tmpResult10 = StringUtils;
    let tmp31Result = !tmpResult10.isNullOrEmpty(trimmed1);
    tmpResult10.isNullOrEmpty(trimmed1);
    if (tmp31Result) {
      let tmp32 = null != tmp5;
      const obj4 = { style: tmp4.labelRow, children: items1 };
      if (tmp32) {
        const obj5 = { source: obj6, style: tmp4.labelIcon };
        obj6 = { uri: tmp5 };
        tmp32 = authStore2(FastImageDefault, obj5);
      }
      items1 = [tmp32, ];
      const obj7 = { variant: "text-sm/medium", color: "text-muted", children: trimmed1 };
      items1[1] = authStore2(Text_Text.Text, obj7);
      tmp31Result = closure_15(metroImportDefault, obj4);
    }
    const tmpResult11 = StringUtils;
    let tmp37 = !tmpResult11.isNullOrEmpty(trimmed2);
    tmpResult11.isNullOrEmpty(trimmed2);
    if (tmp37) {
      const obj8 = { variant: "text-md/medium", color: "text-default", children: trimmed2 };
      tmp37 = authStore2(Text_Text.Text, obj8);
    }
    tmp19 = forResult;
  }
  let assetURL = null;
  if (null != selectedItem.labelIconAssetId) {
    const tmpResult12 = StoreUtils;
    assetURL = tmpResult12.getAssetURL(applicationId, selectedItem.labelIconAssetId);
  }
  cResult[0] = applicationId;
  cResult[1] = selectedItem.labelIconAssetId;
  cResult[2] = assetURL;
  tmp5 = assetURL;
}) : ((selectedItem) => {
  let items;
  let items1;
  let obj7;
  selectedItem = selectedItem.selectedItem;
  applicationId = selectedItem.applicationId;
  const tmp = closure_18();
  let assetURL = null;
  if (null != selectedItem.labelIconAssetId) {
    const obj = StoreUtils;
    assetURL = obj.getAssetURL(applicationId, selectedItem.labelIconAssetId);
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
  const obj2 = StringUtils;
  if (obj2.isNullOrEmpty(trimmed)) {
    let tmp11Result2;
    const tmp8Result = StringUtils;
    if (tmp8Result.isNullOrEmpty(trimmed1)) {
      StringUtils;
      tmp11Result2 = null;
    }
    return tmp11Result2;
  }
  const obj3 = { style: tmp.section, children: items };
  const tmp8Result6 = StringUtils;
  let tmp14 = !tmp8Result6.isNullOrEmpty(trimmed);
  tmp8Result6.isNullOrEmpty(trimmed);
  if (tmp14) {
    const obj4 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", children: trimmed };
    tmp14 = authStore2(Text_Text.Heading, obj4);
  }
  items = [tmp14, , ];
  const tmp8Result7 = StringUtils;
  let tmp11Result = !tmp8Result7.isNullOrEmpty(trimmed1);
  tmp8Result7.isNullOrEmpty(trimmed1);
  if (tmp11Result) {
    let tmp18 = null != assetURL;
    const obj5 = { style: tmp.labelRow, children: items1 };
    if (tmp18) {
      const obj6 = { source: obj7, style: tmp.labelIcon };
      obj7 = { uri: assetURL };
      tmp18 = authStore2(FastImageDefault, obj6);
    }
    items1 = [tmp18, ];
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: trimmed1 };
    items1[1] = authStore2(Text_Text.Text, obj8);
    tmp11Result = closure_15(metroImportDefault, obj5);
  }
  items[1] = tmp11Result;
  const tmp8Result8 = StringUtils;
  let tmp23 = !tmp8Result8.isNullOrEmpty(trimmed2);
  tmp8Result8.isNullOrEmpty(trimmed2);
  if (tmp23) {
    const obj9 = { variant: "text-md/medium", color: "text-default", children: trimmed2 };
    tmp23 = authStore2(Text_Text.Text, obj9);
  }
  items[2] = tmp23;
  tmp11Result2 = closure_15(metroImportDefault, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  let closeButtonIcon;
  let closure_5;
  let first;
  let mobileStoreFront;
  let ref;
  let skuAssets;
  let tmp14;
  let tmp20;
  let tmp21;
  let tmp2 = skuId;
  let obj = skuId(mobileStoreFront[14]);
  const cResult = obj.c(163);
  skuId = skuId.skuId;
  const analyticsLocations = skuId.analyticsLocations;
  importDefault = closure_18();
  const tmp5 = closure_18();
  const tmp7 = require("useSafeAreaInsets")();
  let obj2 = skuId(mobileStoreFront[24]);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  const obj3 = require("NativePaymentHooks");
  mobileStoreFront = obj3.useMobileStoreFront();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SKUStore];
    cResult[0] = items;
    first = items;
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
  const tmp2Result = tmp2(mobileStoreFront[26]);
  const stateFromStores = tmp2Result.useStateFromStores(first, S);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_8.get(skuId);
      }
    }
    const items1 = [SKUStore];
    cResult[3] = items1;
    tmp14 = items1;
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
  const tmp2Result5 = tmp2(mobileStoreFront[26]);
  const stateFromStores1 = tmp2Result5.useStateFromStores(tmp14, F);
  const useGetOrFetchApplication = tmp2(mobileStoreFront[27]).useGetOrFetchApplication;
  tmp2(mobileStoreFront[27]);
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
  const getOrFetchApplication = useGetOrFetchApplication(undefined);
  const tmp6Result = require("useStartAuthorize");
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
  const hasAlreadyLinked = tmp6Result(getOrFetchApplication).hasAlreadyLinked;
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
    tmp21 = X;
    tmp20 = items2;
  } else {
    class F {
      constructor() {
        obj = closure_8;
        tmp = skuId;
        tmp2 = closure_8.isFetching(skuId) || obj.didFetchingSkuFail(tmp);
        return tmp2;
      }
    }
    tmp21 = cResult[7];
  }
  const tmp2Result7 = tmp2(mobileStoreFront[26]);
  const stateFromStores2 = tmp2Result7.useStateFromStores(tmp20, tmp21);
  const tmp2Result8 = tmp2(mobileStoreFront[29]);
  const cardImageURL = tmp2Result8.getCardImageURL(stateFromStores);
  [r10099, r10100] = stateFromStores(stateFromStores1.useState(0), 2);
  stateFromStores(stateFromStores1.useState(0), 2);
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
    cResult[9] = tmp26;
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
  if (cResult[10] !== tmp26) {
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
    const arraySpreadResult = HermesBuiltin.arraySpread(tmp28, tmp26, 0);
    tmp28[arraySpreadResult] = require("AnalyticsLocation").SLAYER_STOREFRONT_NATIVE_PDP;
    cResult[10] = tmp26;
    cResult[11] = tmp28;
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
  location_stack = tmp28;
  if (cResult[12] === tmp28) {
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
  cResult[12] = tmp28;
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
      tmp = closure_1(closure_2[31]);
      obj = { location_stack: closure_5, type: closure_0(closure_2[32]).SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY, sku_id: skuId, application_id: null };
      track = tmp.track;
      OPEN_MODAL = AnalyticEvents.OPEN_MODAL;
      applicationId = undefined;
      if (closure_3 != null) {
        applicationId = closure_3.applicationId;
      }
      obj.application_id = applicationId;
      trackResult = track(OPEN_MODAL, obj);
      return;
    }
  }
  cResult[13] = undefined;
  cResult[14] = skuId;
  cResult[15] = J;
}) : ((skuId) => {
  let Button;
  let GOOGLE;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let applicationId4;
  let arr8;
  let arr9;
  let c10;
  let c11;
  let c12;
  let closeButtonIcon;
  let intl;
  let intl2;
  let intl3;
  let items10;
  let items12;
  let items13;
  let items14;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let items26;
  let items27;
  let mobileFinePrintMessageForApplication;
  let name;
  let obj20;
  let obj7;
  let obj8;
  let productLine;
  let tmp30;
  let tmp32;
  let tmp34;
  let tmp43;
  let tmp70;
  let type;
  const f104468 = () => {
    let result;
    let applicationId1;
    if (stateFromStores != null) {
      applicationId1 = stateFromStores.applicationId;
    }
    if (null == applicationId1) {
      const items = [[], []];
      result = items;
    } else {
      const tenantMetadata = stateFromStores.tenantMetadata;
      let carouselItems;
      const convertCarouselItemsToMediaItems = carouselMediaItems.convertCarouselItemsToMediaItems;
      if (tenantMetadata != null) {
        const socialLayer = tenantMetadata.socialLayer;
        if (socialLayer != null) {
          carouselItems = socialLayer.carouselItems;
        }
      }
      if (carouselItems == null) {
        carouselItems = [];
      }
      applicationId = stateFromStores.applicationId;
      const obj = { heroWidth: carouselMediaItems.MOBILE_HERO_WIDTH_PX };
      result = convertCarouselItemsToMediaItems(carouselItems, applicationId, stateFromStores2, obj);
    }
    return result;
  };
  skuId = skuId.skuId;
  const analyticsLocations = skuId.analyticsLocations;
  let stateFromStores2;
  let memo1;
  let trackPDPClick;
  let skuAssets;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  let ref;
  let tmp = closure_18();
  dependencyMap = tmp;
  let tmp2 = analyticsLocations;
  const rect = analyticsLocations(1618)();
  let tmp4 = skuId;
  let obj = skuId(5912);
  const isScreenLandscape = obj.useIsScreenLandscape();
  let obj2 = analyticsLocations(8871);
  const mobileStoreFront = obj2.useMobileStoreFront();
  let items = [trackPDPClick];
  const obj3 = skuId(504);
  const stateFromStores = obj3.useStateFromStores(items, () => SKUStore.get(skuId));
  let items1 = [trackPDPClick];
  const obj4 = skuId(504);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => {
    const tmp2 = SKUStore.isFetching(skuId) || SKUStore.didFetchingSkuFail(skuId);
    return tmp2;
  });
  let applicationId1;
  const useGetOrFetchApplication = skuId(6663).useGetOrFetchApplication;
  const tmp9 = skuId(6663);
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplication(applicationId1);
  let tmp13 = getOrFetchApplication;
  const tmp2Result = tmp2(6660);
  if (getOrFetchApplication == null) {
    tmp13 = null;
  }
  const hasAlreadyLinked = tmp2Result(tmp13).hasAlreadyLinked;
  let tmp4Result = tmp4(504);
  const items2 = [skuAssets];
  stateFromStores2 = tmp4Result.useStateFromStores(items2, () => skuAssets.getSkuAssets());
  const items3 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    const obj = SlayerStorefrontUtils;
    return obj.getCardImageURL(stateFromStores);
  }, items3);
  const tmp17 = mobileStoreFront(stateFromStores.useState(0), 2);
  const first = tmp17[0];
  const items4 = [analyticsLocations];
  const tmp19 = tmp17[1];
  memo1 = stateFromStores.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PDP];
    return items1;
  }, items4);
  tmp2(5590)(() => {
    const tmp = AnalyticsUtilsDefault;
    const track = tmp.track;
    const OPEN_MODAL = unpackModuleId.OPEN_MODAL;
    const obj = { location_stack: memo1, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY, sku_id: skuId, application_id: applicationId };
    applicationId = undefined;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    track(OPEN_MODAL, obj);
  });
  const items5 = [skuId, , ];
  let applicationId2;
  const useCallback = stateFromStores.useCallback;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  items5[1] = applicationId2;
  items5[2] = memo1;
  trackPDPClick = useCallback((cta_type) => {
    const obj = { slayer_storefront_session_id: "Array", sku_id: skuId, guild_id: true, application_id: applicationId, cta_type, location_stack: memo1 };
    applicationId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED = unpackModuleId.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED;
    AnalyticsUtilsDefault;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    track(SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, obj);
  }, items5);
  const items6 = [stateFromStores, stateFromStores2];
  [arr8, arr9] = mobileStoreFront(stateFromStores.useMemo(f104468, items6), 2);
  let num = 0;
  mobileStoreFront(stateFromStores.useMemo(f104468, items6), 2);
  if (first < arr9.length) {
    num = first;
  }
  let tmp26 = arr8[num];
  if (tmp26 == null) {
    tmp26 = null;
  }
  let tmp27 = arr9[num];
  if (tmp27 == null) {
    tmp27 = null;
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
  skuAssets = tmp28;
  [tmp30, c10] = mobileStoreFront(stateFromStores.useState(false), 2);
  mobileStoreFront(stateFromStores.useState(false), 2);
  [tmp32, c11] = mobileStoreFront(stateFromStores.useState(false), 2);
  mobileStoreFront(stateFromStores.useState(false), 2);
  [tmp34, c12] = mobileStoreFront(stateFromStores.useState(0), 2);
  mobileStoreFront(stateFromStores.useState(0), 2);
  ref = obj6.useRef(false);
  const items7 = [stateFromStores, stateFromStores2, num2 === arr8.length, stateFromStores1, ];
  let country;
  const useEffect = obj6.useEffect;
  if (mobileStoreFront != null) {
    country = mobileStoreFront.country;
  }
  items7[4] = country;
  const effect = useEffect(() => {
    let APPLE;
    let country;
    let id;
    let obj2;
    const tmp2 = null != stateFromStores && null != stateFromStores.applicationId;
    if (tmp2) {
      const current = skuAssets || stateFromStores1 || ref.current;
      if (!current) {
        ref.current = true;
        const obj = { withGoogleSkuIds: obj2.isAndroid(), countryCode: country, paymentGateway: APPLE };
        const fetchSocialLayerStorefrontSkuForApplication = SocialLayerStorefrontActionCreators.fetchSocialLayerStorefrontSkuForApplication;
        ({ applicationId, id } = stateFromStores);
        SocialLayerStorefrontActionCreators;
        country = undefined;
        obj2 = PlatformUtils;
        if (mobileStoreFront != null) {
          country = mobileStoreFront.country;
        }
        APPLE = undefined;
        const tmp5Result = PlatformUtils;
        if (tmp5Result.isIOS()) {
          APPLE = _undefined3.APPLE;
        }
        const socialLayerStorefrontSkuForApplication = fetchSocialLayerStorefrontSkuForApplication(applicationId, id, obj);
      }
    }
  }, items7);
  const items8 = [skuId, , ];
  let orbsReward;
  const callback1 = obj6.useCallback(() => {
    _undefined(false);
  }, []);
  const useCallback2 = stateFromStores.useCallback;
  if (stateFromStores != null) {
    orbsReward = stateFromStores.orbsReward;
  }
  items8[1] = orbsReward;
  items8[2] = memo1;
  const items9 = [trackPDPClick, , ];
  let applicationId3;
  const callback2 = useCallback2(() => {
    let orbsReward;
    _undefined(false);
    const obj = { skuId, orbsReward, analyticsLocations: memo1 };
    orbsReward = undefined;
    const openSocialLayerStorefrontProductSelfPurchaseSuccessModal = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductSelfPurchaseSuccessModal;
    SocialLayerStorefrontNativeActionCreators;
    if (stateFromStores != null) {
      orbsReward = stateFromStores.orbsReward;
    }
    const result = openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj);
    result.then(SocialLayerStorefrontNativeActionCreators.closeSocialLayerStorefrontProductDetailsModal);
  }, items8);
  const useCallback3 = stateFromStores.useCallback;
  if (stateFromStores != null) {
    applicationId3 = stateFromStores.applicationId;
  }
  items9[1] = applicationId3;
  items9[2] = skuId;
  const callback3 = useCallback3(() => {
    let tmp = callback(SlayerShopPDPCTAType.BUY_BUTTON);
    let obj = BillingPlatformUtils;
    if (obj.isSocialLayerStorefrontPurchaseSupported()) {
      _undefined2(true);
      _undefined3((arg0) => arg0 + 1);
      _undefined(true);
    } else {
      applicationId = undefined;
      const tmp4 = redirectToSlayerStorefrontWebDefault;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      const obj2 = { applicationId, skuId, source: "SocialLayerStorefrontProductDetailsModal" };
      const tmp4Result = tmp4(obj2);
      tmp4Result.then((result) => {
        const tmp = result;
        if (tmp) {
          const obj = skuId(closeButtonIcon[32]);
          result = obj.closeSocialLayerStorefrontProductDetailsModal();
        }
      });
    }
  }, items9);
  const OTPACOMOrderExperiment = tmp4(8870).OTPACOMOrderExperiment;
  let enabled = OTPACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontProductDetailsModal" }).enabled;
  const tmp4Result6 = tmp4(1369);
  if (tmp4Result6.isIOS()) {
    GOOGLE = tmp42.APPLE_ADVANCED_COMMERCE;
    tmp43 = tmp42;
  } else {
    GOOGLE = tmp42.GOOGLE;
    tmp43 = tmp42;
  }
  let tmp45Result = null;
  if (tmp32) {
    const obj5 = { headless: true, paymentGateway: GOOGLE, orderRequired: enabled, skuIds: items10, isGift: false, activeSubscription: null, onOrderRetryCancellation: tmp4(10531).closeSocialLayerStorefrontProductDetailsModal, checkoutAnalyticsFields: obj7, children: closure_14(tmp4(10542).HeadlessSlayerStorefrontPurchaseRunner, obj8) };
    const tmp2Result2 = tmp2(10538);
    if (enabled) {
      enabled = GOOGLE === tmp43.APPLE_ADVANCED_COMMERCE;
    }
    items10 = [skuId];
    obj7 = { is_gift: false, location_stack: memo1, payment_type: "sku", sku_id: skuId, sku_type: type, sku_product_line: productLine, application_id: applicationId4 };
    type = undefined;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    productLine = undefined;
    if (stateFromStores != null) {
      productLine = stateFromStores.productLine;
    }
    applicationId4 = undefined;
    if (stateFromStores != null) {
      applicationId4 = stateFromStores.applicationId;
    }
    obj8 = { attempt: tmp34, skuId, sku: stateFromStores, analyticsLocations: memo1, onPurchaseComplete: callback2, onPurchaseError: callback1 };
    tmp45Result = closure_14(tmp2Result2, obj5, skuId);
  }
  const items11 = [skuId, memo1, trackPDPClick];
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp51;
    let tmp65Result2;
    const tmp4Result7 = tmp4(6732);
    let result = tmp4Result7.isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = tmp4(1126).intl;
    const stringResult = intl4.string(tmp4(1126).t.boqtTA);
    const tmp4Result8 = tmp4(4541);
    let result1 = tmp4Result8.isSocialLayerStorefrontGiftingSupported();
    if (null != tmp27) {
      const obj9 = { mediaItem: tmp27, landscape: isScreenLandscape };
      tmp51 = closure_14(closure_19, obj9);
    } else {
      tmp51 = null;
      if (null != memo) {
        const obj10 = { sku: stateFromStores };
        tmp51 = closure_14(tmp2(8481), obj10);
      }
    }
    let tmp55 = null;
    if (stateFromStores.exclusive) {
      const obj11 = { style: tmp.exclusiveBadgeContainer, children: closure_14(tmp4(10546).ExclusiveBadge, {}) };
      tmp55 = closure_14(memo1, obj11);
    }
    let tmp58 = null;
    if (arr9.length > 1) {
      const obj12 = { items: arr8, mediaItems: arr9, selectedIndex: num, onSelectIndex: tmp19, trackPDPClick };
      tmp58 = closure_14(closure_22, obj12);
    }
    applicationId = stateFromStores.applicationId;
    let tmp61 = null;
    if (arr9.length > 1) {
      tmp61 = tmp26;
    }
    let tmp62 = null;
    if (null != tmp61) {
      tmp62 = null;
      if (null != applicationId) {
        const obj13 = { selectedItem: tmp61, applicationId };
        tmp62 = closure_14(closure_24, obj13);
      }
    }
    const obj14 = { style: items12, children: items13 };
    items12 = [tmp.footer, ];
    items12[1] = { paddingBottom: rect.bottom + tmp2(587).space.PX_16 };
    const obj15 = { paddingBottom: rect.bottom + tmp2(587).space.PX_16 };
    const obj16 = { sku: stateFromStores };
    items13 = [closure_14(closure_21, obj16), , , ];
    let tmp67Result = !result;
    if (tmp67Result) {
      const obj17 = { variant: "text-xs/normal", color: "text-muted", style: tmp.availabilityCopy, includeFontPadding: true, children: intl.string(tmp2(3593).gndWN7) };
      const Text = tmp4(4886).Text;
      intl = tmp4(1126).intl;
      tmp67Result = closure_14(Text, obj17);
    }
    items13[1] = tmp67Result;
    const obj18 = { style: tmp.footerButtonRow, children: items14 };
    const obj19 = { style: tmp.buyButton, children: closure_14(Button, obj20) };
    obj20 = { variant: "primary", size: "lg", text: stringResult, loading: tmp30, disabled: tmp70, onPress: callback3 };
    tmp70 = tmp30;
    Button = tmp4(5594).Button;
    if (!tmp30) {
      tmp70 = !result;
    }
    items14 = [closure_14(memo1, obj19), ];
    if (result1) {
      const obj21 = { icon: tmp2(7752), variant: "primary", size: "lg", disabled: tmp30, accessibilityLabel: intl2.string(tmp4(1126).t.QAZA5f), onPress: tmp50 };
      const IconButton = tmp4(7575).IconButton;
      intl2 = tmp4(1126).intl;
      result1 = closure_14(IconButton, obj21);
    }
    items14[1] = result1;
    items13[2] = closure_15(memo1, obj18);
    if (result) {
      const obj22 = {
        style: tmp.legalCopy,
        children: mobileFinePrintMessageForApplication.map((children, index) => {
              const obj = { variant: "text-xs/normal", color: "text-muted", includeFontPadding: true, children };
              return closure_1_14(skuId(closeButtonIcon[17]).Text, obj, index);
            })
      };
      const getMobileFinePrintMessageForApplication = tmp4(10549).getMobileFinePrintMessageForApplication;
      const obj23 = { shouldAppendDisclaimer: false === hasAlreadyLinked };
      tmp4(10549);
      mobileFinePrintMessageForApplication = getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, obj23);
      result = closure_14(tmp66, obj22);
    }
    items13[3] = result;
    const tmp65Result = closure_15(memo1, obj14);
    const items15 = [tmp.container, ];
    let num3 = 0;
    const tmp4Result10 = tmp4(1369);
    if (!tmp4Result10.isIOS()) {
      num3 = rect.top;
    }
    const obj24 = { style: items15, children: items16 };
    const obj25 = { paddingTop: num3 };
    items15[1] = obj25;
    items16 = [tmp45Result, , , ];
    const obj26 = { style: tmp.header, children: items17 };
    const obj27 = {
      onPress: tmp4(10531).closeSocialLayerStorefrontProductDetailsModal,
      backImage() {
          const obj = { size: "md", style: closeButtonIcon.closeButtonIcon };
          return authStore2(XSmallIcon.XSmallIcon, obj);
        },
      accessibilityLabel: intl3.string(tmp4(1126).t.cpT0Cq),
      displayMode: "minimal"
    };
    const HeaderBackButton = tmp4(6019).HeaderBackButton;
    intl3 = tmp4(1126).intl;
    items17 = [closure_14(HeaderBackButton, obj27), ];
    const obj28 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerTitle, children: name };
    name = undefined;
    const Heading = tmp4(4886).Heading;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    items17[1] = closure_14(Heading, obj28);
    items16[1] = closure_15(memo1, obj26);
    let exclusive = stateFromStores.exclusive;
    const obj29 = { style: tmp.scrollContainer, children: items19 };
    if (exclusive) {
      const obj30 = { style: stateFromStores2.absoluteFill, colors: items18, pointerEvents: "none" };
      items18 = [closure_16, closure_17];
      exclusive = closure_14(tmp2(5605), obj30);
    }
    items19 = [exclusive, ];
    if (isScreenLandscape) {
      const obj32 = { style: tmp.heroColumnLandscape, contentContainerStyle: items20, children: items21 };
      items20 = [tmp.heroColumnContentLandscape, ];
      const obj31 = { style: tmp.columnsLandscape, children: items23 };
      const obj33 = { paddingBottom: rect.bottom + 8 };
      items20[1] = obj33;
      items21 = [tmp51, ];
      const obj34 = { style: tmp.bundleGroupLandscape, children: items22 };
      items22 = [tmp58, tmp62];
      items21[1] = closure_15(memo1, obj34);
      items23 = [closure_15(stateFromStores1, obj32), ];
      const obj35 = { style: tmp.detailsScrollLandscape, contentContainerStyle: items24, children: items26 };
      items24 = [, ];
      ({ scrollContent: arr30[0], detailsContentLandscape: arr30[1] } = tmp);
      const obj36 = { style: tmp.detailsGroupLandscape, children: items25 };
      items25 = [tmp55, ];
      const obj37 = { sku: stateFromStores };
      items25[1] = closure_14(closure_23, obj37);
      items26 = [closure_15(memo1, obj36), tmp65Result];
      items23[1] = closure_15(stateFromStores1, obj35);
      tmp65Result2 = closure_15(tmp66, obj31);
    } else {
      const obj38 = { contentContainerStyle: tmp.scrollContent, children: items27 };
      items27 = [tmp51, tmp55, , , ];
      const obj39 = { sku: stateFromStores };
      items27[2] = closure_14(closure_23, obj39);
      items27[3] = tmp58;
      items27[4] = tmp62;
      tmp65Result2 = closure_15(stateFromStores1, obj38);
    }
    items19[1] = tmp65Result2;
    items16[2] = closure_15(memo1, obj29);
    items16[3] = !isScreenLandscape && tmp65Result;
    return closure_15(memo1, obj24);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let obj3;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const obj2 = { skuIDs: first, activeSubscription: null, children: authStore2(closure_25, obj3) };
    obj3 = {};
    const NativePaymentContextProvider = NativePaymentContext.NativePaymentContextProvider;
    const merged = Object.assign(arg0);
    const tmp11 = authStore2(NativePaymentContextProvider, obj2);
    cResult[1] = arg0;
    cResult[2] = tmp11;
    tmp5 = tmp11;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : ((arg0) => {
  let obj2;
  const obj = { skuIDs: [], activeSubscription: null, children: authStore2(closure_25, obj2) };
  obj2 = {};
  const NativePaymentContextProvider = NativePaymentContext.NativePaymentContextProvider;
  const merged = Object.assign(arg0);
  return authStore2(NativePaymentContextProvider, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx");

export default tmp8;