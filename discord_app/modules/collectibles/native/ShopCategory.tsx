// discord_app/modules/collectibles/native/ShopCategory.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import openProductDetailsActionSheet from "openProductDetailsActionSheet.tsx";
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_5 = fn(1087).CollectiblesMobileShopScreen;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const sum = 100 + fn(8967).COLLECTIBLES_SHOP_CARD_HEIGHT;
const createStyles = fn(5092);
let obj2 = { categoryContainer: { marginTop: nativeDefault.space.PX_16, marginBottom: 24, height: sum }, categoryHeader: null, categoryHeaderBorderDark: null, categoryHeaderBorderLight: null, imageBackground: null, categoryHeaderSkeleton: null, productSkeleton: null, productsSkeleton: null, viewAllIcon: null };
let obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: 24, height: sum };
obj2.categoryHeader = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
let obj4 = { display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 1, height: 84, padding: 20 };
obj2.categoryHeaderBorderDark = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
let obj5 = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
obj2.categoryHeaderBorderLight = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.imageBackground = { top: 0, bottom: 0, left: 0, right: 0, position: "absolute" };
let obj6 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.categoryHeaderSkeleton = { height: 84, marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let size = { width: fn(8967).COLLECTIBLES_SHOP_CARD_WIDTH, height: fn(8967).COLLECTIBLES_SHOP_CARD_HEIGHT, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.productSkeleton = size;
obj2.productsSkeleton = { flexDirection: "row", gap: 12, paddingHorizontal: 16 };
let obj7 = { height: 84, marginBottom: 16, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.viewAllIcon = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: nativeDefault.radii.round };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function Spacing() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: { width: 12 } };
    const tmp5 = React5(View, obj2);
    cResult[0] = tmp5;
    let first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function Spacing() {
  return React5(View, { style: { width: 12 } });
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderAndFooterSpacing() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: { width: 16 } };
    const tmp5 = React5(View, obj2);
    cResult[0] = tmp5;
    let first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function HeaderAndFooterSpacing() {
  return React5(View, { style: { width: 16 } });
});
const __initData = { code: "function ShopCategoryTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function ShopCategoryTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
fn(558);
let obj8 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: 6, borderRadius: nativeDefault.radii.round };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShopCategorySkeleton() {
  const cResult = require("c").c(20);
  const tmp4 = closure_9();
  _require = tmp4;
  let obj = require("c");
  const sharedValue = require("ReanimatedRexport").useSharedValue(0.3);
  if (cResult[0] !== sharedValue) {
    const fn = function n() {
      const obj = ReanimatedRexport;
      const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  const obj2 = require("ReanimatedRexport");
  const fn2 = function h() {
    return { opacity: sharedValue.get() };
  };
  fn2.__closure = { opacity: sharedValue };
  fn2.__workletHash = 1317875237641;
  fn2.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn2);
  if (cResult[3] === animatedStyle) {
    if (cResult[4] === tmp4.categoryContainer) {
      let tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.ZTNur7);
      const obj3 = { busy: true };
      cResult[6] = stringResult;
      cResult[7] = obj3;
      let tmp13 = obj3;
      let tmp12 = stringResult;
    } else {
      tmp12 = cResult[6];
      tmp13 = cResult[7];
    }
    if (cResult[8] !== tmp4.categoryHeaderSkeleton) {
      const obj4 = { style: tmp4.categoryHeaderSkeleton };
      const tmp18 = closure_7(View, obj4);
      cResult[8] = tmp4.categoryHeaderSkeleton;
      cResult[9] = tmp18;
      let tmp15 = tmp18;
    } else {
      tmp15 = cResult[9];
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const _Array = Array;
      const arr = Array.from({ length: 3 });
      cResult[10] = arr;
      let arr3 = arr;
    } else {
      arr3 = cResult[10];
    }
    if (cResult[11] !== tmp4.productSkeleton) {
      const mapped = arr3.map((item, index) => React5(View, { style: productSkeleton.productSkeleton }, index));
      cResult[11] = tmp4.productSkeleton;
      cResult[12] = mapped;
      let tmp20 = mapped;
    } else {
      tmp20 = cResult[12];
    }
    if (cResult[13] === tmp4.productsSkeleton) {
      if (cResult[14] === tmp20) {
        let tmp22 = cResult[15];
      }
      if (cResult[16] === tmp10) {
        if (cResult[17] === tmp15) {
          if (cResult[18] === tmp22) {
            let tmp26 = cResult[19];
          }
          return tmp26;
        }
      }
      const obj5 = { style: tmp10, accessibilityLabel: tmp12, accessibilityState: tmp13, accessible: true, children: null };
      const items1 = [tmp15, tmp22];
      obj5.children = items1;
      const tmp29 = closure_8(sharedValue(4850).View, obj5);
      cResult[16] = tmp10;
      cResult[17] = tmp15;
      cResult[18] = tmp22;
      cResult[19] = tmp29;
      tmp26 = tmp29;
    }
    const obj6 = { style: tmp4.productsSkeleton, children: tmp20 };
    const tmp25 = closure_7(View, obj6);
    cResult[13] = tmp4.productsSkeleton;
    cResult[14] = tmp20;
    cResult[15] = tmp25;
    tmp22 = tmp25;
  }
  const items2 = [tmp4.categoryContainer, animatedStyle];
  cResult[3] = animatedStyle;
  cResult[4] = tmp4.categoryContainer;
  cResult[5] = items2;
  tmp10 = items2;
  const tmpResult = require("ReanimatedRexport");
}) : (function ShopCategorySkeleton() {
  const tmp = closure_9();
  _require = tmp;
  const sharedValue = require("ReanimatedRexport").useSharedValue(0.3);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = require("ReanimatedRexport");
  const fn = function s() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 16889796144266;
  fn.__initData = __initData2;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const obj3 = { style: null, accessibilityLabel: null, accessibilityState: null, accessible: true, children: null };
  const items1 = [tmp.categoryContainer, animatedStyle];
  obj3.style = items1;
  const intl = require("util").intl;
  obj3.accessibilityLabel = intl.string(require("util").t.ZTNur7);
  obj3.accessibilityState = { busy: true };
  const items2 = [closure_7(View, { style: tmp.categoryHeaderSkeleton }), ];
  const obj5 = { style: tmp.productsSkeleton, children: null };
  const obj2 = require("ReanimatedRexport");
  const obj4 = { style: tmp.categoryHeaderSkeleton };
  obj5.children = Array.from({ length: 3 }).map((item, index) => React5(View, { style: productSkeleton.productSkeleton }, index));
  items2[1] = closure_7(View, obj5);
  obj3.children = items2;
  return closure_8(sharedValue(4850).View, obj3);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ShopCategory.tsx");

export const CATEGORY_CONTAINER_HEIGHT = sum;
export const CATEGORY_CONTAINER_BOTTOM_MARGIN = 24;
export const ShopCategorySkeleton = tmp4;
export const ShopCategory = ReactCompilerGating.isReactCompilerEnabled() ? (function ShopCategory(isDarkTheme) {
  const cResult = category(navigation[9]).c(64);
  ({ index, category } = isDarkTheme);
  analyticsLocations = analyticsLocations(navigation[13])().analyticsLocations;
  const tmp5 = isInImprovedMobileShopLoading();
  let obj = category(navigation[9]);
  navigation = category(navigation[14]).useNavigation();
  ({ products, unpublishedAt } = category);
  if (cResult[0] === category.isOrbsExclusive) {
    if (cResult[1] === products) {
      let tmp7 = cResult[2];
    }
    const filteredAndSortedProducts = category(tmp2[15]).useFilteredAndSortedProducts(tmp7);
    const mobileBannerUrl = category.mobileBannerUrl;
    if (cResult[3] !== filteredAndSortedProducts) {
      let obj3 = { products: filteredAndSortedProducts };
      cResult[3] = filteredAndSortedProducts;
      cResult[4] = obj3;
      let tmp9 = obj3;
    } else {
      tmp9 = cResult[4];
    }
    const tmpResult = category(tmp2[15]);
    const collectiblesShopDeepLinkProps = category(tmp2[16]).useCollectiblesShopDeepLinkProps(tmp9);
    ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
    const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
    const ref = unpublishedAt.useRef(null);
    if (cResult[5] !== category.storeListingId) {
      let items = [category.storeListingId];
      cResult[5] = category.storeListingId;
      cResult[6] = items;
      let tmp13 = items;
    } else {
      tmp13 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function k() {
        const current = ref.current;
        if (current != null) {
          current.scrollToOffset({ offset: 0, animated: false });
        }
      };
      cResult[7] = fn;
      let tmp15 = fn;
    } else {
      tmp15 = cResult[7];
    }
    const tmpResult6 = category(tmp2[16]);
    const recyclingState = category(tmp2[17]).useRecyclingState(null, tmp13, tmp15);
    let tmp17 = null != productIndex;
    if (tmp17) {
      tmp17 = productIndex > 0;
    }
    if (cResult[8] === category.storeListingId) {
      if (cResult[9] === productIndex) {
        if (cResult[10] === tmp17) {
          let tmp18 = cResult[11];
        }
        const scrollToInitialIndexOnce = category(tmp2[18]).useScrollToInitialIndexOnce(tmp18);
        const tmpResult8 = category(tmp2[18]);
        const collectiblesAnalyticsContext = category(tmp2[19]).useCollectiblesAnalyticsContext();
        const tmpResult9 = category(tmp2[19]);
        isInImprovedMobileShopLoading = category(tmp2[20]).useIsInImprovedMobileShopLoading();
        if (cResult[12] === collectiblesAnalyticsContext) {
          if (cResult[13] === analyticsLocations) {
            if (cResult[14] === initialProductSkuId) {
              if (cResult[15] === initialVariantIndex) {
                if (cResult[16] === isInImprovedMobileShopLoading) {
                  if (cResult[17] === filteredAndSortedProducts) {
                    let tmp22 = cResult[18];
                    let tmp23 = cResult[19];
                  }
                  const effect = unpublishedAt.useEffect(tmp22, tmp23);
                  if (cResult[20] !== unpublishedAt) {
                    const fn2 = function z(arg0) {
                      ({ item, index } = arg0);
                      const obj = { newValue: { tilePosition: index }, children: React5(CollectiblesShopCardV2Default, { product: item, unpublishedAt }) };
                      return React5(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
                    };
                    cResult[20] = unpublishedAt;
                    cResult[21] = fn2;
                    let tmp25 = fn2;
                  } else {
                    tmp25 = cResult[21];
                  }
                  if (cResult[22] === collectiblesAnalyticsContext) {
                    if (cResult[23] === navigation) {
                      let tmp26 = cResult[24];
                    }
                    ItemSeparatorComponent = tmp26;
                    if (cResult[25] !== index) {
                      const obj4 = { categoryPosition: index };
                      cResult[25] = index;
                      cResult[26] = obj4;
                      let tmp27 = obj4;
                    } else {
                      tmp27 = cResult[26];
                    }
                    const tmp30 = isDarkTheme.isDarkTheme ? tmp5.categoryHeaderBorderDark : tmp5.categoryHeaderBorderLight;
                    if (cResult[27] === tmp5.categoryHeader) {
                      if (cResult[28] === tmp30) {
                        let tmp31 = cResult[29];
                      }
                      if (cResult[30] !== category.name) {
                        const intl = category(tmp2[12]).intl;
                        const obj5 = { category: category.name };
                        cResult[30] = category.name;
                        cResult[31] = intl.formatToPlainString(category(tmp2[12]).t.FNtLb3, obj5);
                        class Q {
                          constructor() {
                            return closure_10(category);
                          }
                        }
                        const formatToPlainStringResult = intl.formatToPlainString(category(tmp2[12]).t.FNtLb3, obj5);
                      }
                      const _Symbol2 = Symbol;
                      if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl2 = category(tmp2[12]).intl;
                        const stringResult = intl2.string(category(tmp2[12]).t.F8ma9x);
                        cResult[32] = stringResult;
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj6 = { radius: tmp4(tmp2[7]).radii.lg };
                        cResult[33] = obj6;
                        let tmp36 = obj6;
                      } else {
                        tmp36 = cResult[33];
                      }
                      if (cResult[34] === category) {
                        if (cResult[35] === tmp26) {
                          let tmp37 = cResult[36];
                        }
                        if (cResult[37] === mobileBannerUrl) {
                          const _Symbol4 = Symbol;
                          if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                            const tmp43 = ref(category(tmp2[26]).ChevronSmallRightIcon, { size: "sm", color: "white" });
                            cResult[40] = tmp43;
                            let tmp41 = tmp43;
                          } else {
                            tmp41 = cResult[40];
                          }
                          if (cResult[41] !== tmp5.viewAllIcon) {
                            const obj8 = { style: tmp5.viewAllIcon, children: tmp41 };
                            ref(filteredAndSortedProducts, obj8);
                            cResult[41] = tmp5.viewAllIcon;
                            class Q {
                              constructor() {
                                return closure_10(category);
                              }
                            }
                            class V {
                              constructor() {
                                if (!closure_9) {
                                  tmp = initialProductSkuId;
                                  tmp2 = null;
                                  found = null;
                                  if (null != initialProductSkuId) {
                                    tmp4 = closure_4;
                                    found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                                  }
                                  if (null != found) {
                                    tmp5 = closure_1;
                                    tmp6 = closure_2;
                                    obj = closure_1(closure_2[21]);
                                    hideActionSheetResult = obj.hideActionSheet();
                                    tmp8 = closure_0;
                                    obj2 = closure_0(closure_2[22]);
                                    obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                                    obj1.product = found;
                                    tmp9 = initialVariantIndex;
                                    obj1.initialVariantIndex = initialVariantIndex;
                                    tmp10 = analyticsLocations;
                                    obj1.analyticsLocations = analyticsLocations;
                                    tmp11 = closure_8;
                                    obj1.shopAnalyticsContext = tmp11;
                                    result = obj2.openProductDetailsActionSheet(obj1);
                                  }
                                }
                                return;
                              }
                            }
                          }
                          if (cResult[43] === category.storeListingId) {
                            if (cResult[44] === tmp31) {
                              if (cResult[45] === tmp32) {
                                if (cResult[46] === tmp37) {
                                  if (cResult[47] === tmp38) {
                                    if (cResult[48] === tmp44) {
                                      let tmp48 = cResult[49];
                                    }
                                    if (cResult[50] !== category.name) {
                                      const intl3 = category(tmp2[12]).intl;
                                      const obj9 = { category: category.name };
                                      cResult[50] = category.name;
                                      cResult[51] = intl3.formatToPlainString(category(tmp2[12]).t.FNtLb3, obj9);
                                      class Q {
                                        constructor() {
                                          return closure_10(category);
                                        }
                                      }
                                      const formatToPlainStringResult1 = intl3.formatToPlainString(category(tmp2[12]).t.FNtLb3, obj9);
                                    }
                                    if (cResult[52] === productIndex) {
                                      if (cResult[53] === tmp25) {
                                        if (cResult[54] === filteredAndSortedProducts) {
                                          if (cResult[55] === tmp51) {
                                            let tmp53 = cResult[56];
                                          }
                                          if (cResult[57] === tmp5.categoryContainer) {
                                            if (cResult[58] === tmp48) {
                                              if (cResult[59] === tmp53) {
                                                let tmp59 = cResult[60];
                                              }
                                              if (cResult[61] === tmp27) {
                                                if (cResult[62] === tmp59) {
                                                  let tmp63 = cResult[63];
                                                }
                                                return tmp63;
                                              }
                                              const obj10 = { newValue: tmp27, children: tmp59 };
                                              const tmp65 = ref(category(tmp2[19]).CollectiblesAnalyticsProvider, obj10);
                                              cResult[61] = tmp27;
                                              class Q {
                                                constructor() {
                                                  return closure_10(category);
                                                }
                                              }
                                              class V {
                                                constructor() {
                                                  if (!closure_9) {
                                                    tmp = initialProductSkuId;
                                                    tmp2 = null;
                                                    found = null;
                                                    if (null != initialProductSkuId) {
                                                      tmp4 = closure_4;
                                                      found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                                                    }
                                                    if (null != found) {
                                                      tmp5 = closure_1;
                                                      tmp6 = closure_2;
                                                      obj = closure_1(closure_2[21]);
                                                      hideActionSheetResult = obj.hideActionSheet();
                                                      tmp8 = closure_0;
                                                      obj2 = closure_0(closure_2[22]);
                                                      obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                                                      obj1.product = found;
                                                      tmp9 = initialVariantIndex;
                                                      obj1.initialVariantIndex = initialVariantIndex;
                                                      tmp10 = analyticsLocations;
                                                      obj1.analyticsLocations = analyticsLocations;
                                                      tmp11 = closure_8;
                                                      obj1.shopAnalyticsContext = tmp11;
                                                      result = obj2.openProductDetailsActionSheet(obj1);
                                                    }
                                                  }
                                                  return;
                                                }
                                              }
                                              cResult[63] = tmp65;
                                              tmp63 = tmp65;
                                            }
                                          }
                                          { style: null, children: null }.style = tmp28;
                                          const items1 = [tmp48, tmp53];
                                          class Q {
                                            constructor() {
                                              return closure_10(category);
                                            }
                                          }
                                          class V {
                                            constructor() {
                                              if (!closure_9) {
                                                tmp = initialProductSkuId;
                                                tmp2 = null;
                                                found = null;
                                                if (null != initialProductSkuId) {
                                                  tmp4 = closure_4;
                                                  found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                                                }
                                                if (null != found) {
                                                  tmp5 = closure_1;
                                                  tmp6 = closure_2;
                                                  obj = closure_1(closure_2[21]);
                                                  hideActionSheetResult = obj.hideActionSheet();
                                                  tmp8 = closure_0;
                                                  obj2 = closure_0(closure_2[22]);
                                                  obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                                                  obj1.product = found;
                                                  tmp9 = initialVariantIndex;
                                                  obj1.initialVariantIndex = initialVariantIndex;
                                                  tmp10 = analyticsLocations;
                                                  obj1.analyticsLocations = analyticsLocations;
                                                  tmp11 = closure_8;
                                                  obj1.shopAnalyticsContext = tmp11;
                                                  result = obj2.openProductDetailsActionSheet(obj1);
                                                }
                                              }
                                              return;
                                            }
                                          }
                                          cResult[57] = tmp5.categoryContainer;
                                          cResult[58] = tmp48;
                                          cResult[59] = tmp53;
                                          cResult[60] = tmp62;
                                          tmp59 = tmp62;
                                          const obj11 = { style: null, children: null };
                                        }
                                      }
                                    }
                                    const obj12 = { ref, horizontal: true, accessibilityLabel: tmp51, accessibilityRole: "list", data: filteredAndSortedProducts, renderItem: tmp25, drawDistance: 150, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, initialScrollIndex: null };
                                    class Q {
                                      constructor() {
                                        return closure_10(category);
                                      }
                                    }
                                    class V {
                                      constructor() {
                                        if (!closure_9) {
                                          tmp = initialProductSkuId;
                                          tmp2 = null;
                                          found = null;
                                          if (null != initialProductSkuId) {
                                            tmp4 = closure_4;
                                            found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                                          }
                                          if (null != found) {
                                            tmp5 = closure_1;
                                            tmp6 = closure_2;
                                            obj = closure_1(closure_2[21]);
                                            hideActionSheetResult = obj.hideActionSheet();
                                            tmp8 = closure_0;
                                            obj2 = closure_0(closure_2[22]);
                                            obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                                            obj1.product = found;
                                            tmp9 = initialVariantIndex;
                                            obj1.initialVariantIndex = initialVariantIndex;
                                            tmp10 = analyticsLocations;
                                            obj1.analyticsLocations = analyticsLocations;
                                            tmp11 = closure_8;
                                            obj1.shopAnalyticsContext = tmp11;
                                            result = obj2.openProductDetailsActionSheet(obj1);
                                          }
                                        }
                                        return;
                                      }
                                    }
                                    obj12.snapToInterval = category(tmp2[5]).COLLECTIBLES_SHOP_CARD_WIDTH + 12;
                                    obj12.ListHeaderComponent = ListFooterComponent;
                                    obj12.ListFooterComponent = ListFooterComponent;
                                    obj12.ItemSeparatorComponent = ItemSeparatorComponent;
                                    obj12.initialScrollIndex = productIndex;
                                    const tmp58 = ref(tmp55, obj12);
                                    cResult[52] = productIndex;
                                    cResult[53] = tmp25;
                                    cResult[54] = filteredAndSortedProducts;
                                    cResult[55] = tmp51;
                                    cResult[56] = tmp58;
                                    tmp53 = tmp58;
                                  }
                                }
                              }
                            }
                          }
                          const obj13 = { style: tmp31, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.8, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
                          class Q {
                            constructor() {
                              return closure_10(category);
                            }
                          }
                          class V {
                            constructor() {
                              if (!closure_9) {
                                tmp = initialProductSkuId;
                                tmp2 = null;
                                found = null;
                                if (null != initialProductSkuId) {
                                  tmp4 = closure_4;
                                  found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                                }
                                if (null != found) {
                                  tmp5 = closure_1;
                                  tmp6 = closure_2;
                                  obj = closure_1(closure_2[21]);
                                  hideActionSheetResult = obj.hideActionSheet();
                                  tmp8 = closure_0;
                                  obj2 = closure_0(closure_2[22]);
                                  obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                                  obj1.product = found;
                                  tmp9 = initialVariantIndex;
                                  obj1.initialVariantIndex = initialVariantIndex;
                                  tmp10 = analyticsLocations;
                                  obj1.analyticsLocations = analyticsLocations;
                                  tmp11 = closure_8;
                                  obj1.shopAnalyticsContext = tmp11;
                                  result = obj2.openProductDetailsActionSheet(obj1);
                                }
                              }
                              return;
                            }
                          }
                          obj13.androidRippleConfig = tmp36;
                          obj13.onPress = tmp37;
                          const items2 = [tmp38, tmp44];
                          obj13.children = items2;
                          const tmp50 = collectiblesAnalyticsContext(category(tmp2[27]).PressableOpacity, obj13, tmp29);
                          cResult[43] = category.storeListingId;
                          cResult[44] = tmp31;
                          cResult[45] = tmp32;
                          cResult[46] = tmp37;
                          cResult[47] = tmp38;
                          cResult[48] = tmp44;
                          cResult[49] = tmp50;
                          tmp48 = tmp50;
                        }
                        let tmp39 = null != mobileBannerUrl;
                        if (tmp39) {
                          const obj14 = { source: null, resizeMode: "cover", style: null };
                          const obj15 = { uri: mobileBannerUrl };
                          obj14.source = obj15;
                          obj14.style = tmp5.imageBackground;
                          tmp39 = ref(tmp4(tmp2[25]), obj14);
                        }
                        cResult[37] = mobileBannerUrl;
                        cResult[38] = tmp5.imageBackground;
                        class Q {
                          constructor() {
                            return closure_10(category);
                          }
                        }
                        class V {
                          constructor() {
                            if (!closure_9) {
                              tmp = initialProductSkuId;
                              tmp2 = null;
                              found = null;
                              if (null != initialProductSkuId) {
                                tmp4 = closure_4;
                                found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                              }
                              if (null != found) {
                                tmp5 = closure_1;
                                tmp6 = closure_2;
                                obj = closure_1(closure_2[21]);
                                hideActionSheetResult = obj.hideActionSheet();
                                tmp8 = closure_0;
                                obj2 = closure_0(closure_2[22]);
                                obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                                obj1.product = found;
                                tmp9 = initialVariantIndex;
                                obj1.initialVariantIndex = initialVariantIndex;
                                tmp10 = analyticsLocations;
                                obj1.analyticsLocations = analyticsLocations;
                                tmp11 = closure_8;
                                obj1.shopAnalyticsContext = tmp11;
                                result = obj2.openProductDetailsActionSheet(obj1);
                              }
                            }
                            return;
                          }
                        }
                      }
                      class Q {
                        constructor() {
                          return closure_10(category);
                        }
                      }
                      class V {
                        constructor() {
                          if (!closure_9) {
                            tmp = initialProductSkuId;
                            tmp2 = null;
                            found = null;
                            if (null != initialProductSkuId) {
                              tmp4 = closure_4;
                              found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                            }
                            if (null != found) {
                              tmp5 = closure_1;
                              tmp6 = closure_2;
                              obj = closure_1(closure_2[21]);
                              hideActionSheetResult = obj.hideActionSheet();
                              tmp8 = closure_0;
                              obj2 = closure_0(closure_2[22]);
                              obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                              obj1.product = found;
                              tmp9 = initialVariantIndex;
                              obj1.initialVariantIndex = initialVariantIndex;
                              tmp10 = analyticsLocations;
                              obj1.analyticsLocations = analyticsLocations;
                              tmp11 = closure_8;
                              obj1.shopAnalyticsContext = tmp11;
                              result = obj2.openProductDetailsActionSheet(obj1);
                            }
                          }
                          return;
                        }
                      }
                      cResult[34] = category;
                      cResult[35] = tmp26;
                      cResult[36] = Q;
                      tmp37 = Q;
                    }
                    const items3 = [tmp5.categoryHeader, tmp30];
                    class V {
                      constructor() {
                        if (!closure_9) {
                          tmp = initialProductSkuId;
                          tmp2 = null;
                          found = null;
                          if (null != initialProductSkuId) {
                            tmp4 = closure_4;
                            found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                          }
                          if (null != found) {
                            tmp5 = closure_1;
                            tmp6 = closure_2;
                            obj = closure_1(closure_2[21]);
                            hideActionSheetResult = obj.hideActionSheet();
                            tmp8 = closure_0;
                            obj2 = closure_0(closure_2[22]);
                            obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                            obj1.product = found;
                            tmp9 = initialVariantIndex;
                            obj1.initialVariantIndex = initialVariantIndex;
                            tmp10 = analyticsLocations;
                            obj1.analyticsLocations = analyticsLocations;
                            tmp11 = closure_8;
                            obj1.shopAnalyticsContext = tmp11;
                            result = obj2.openProductDetailsActionSheet(obj1);
                          }
                        }
                        return;
                      }
                    }
                    cResult[28] = tmp30;
                    cResult[29] = items3;
                    tmp31 = items3;
                  }
                  function onTapViewAll(isOrbsExclusive) {
                    if (isOrbsExclusive.isOrbsExclusive) {
                      const obj3 = { analyticsLocations: null, analyticsSource: null, screen: null };
                      const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
                      obj3.analyticsLocations = items;
                      obj3.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
                      obj3.screen = initialProductSkuId.ORBS;
                      const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj3);
                    } else {
                      const obj = { category: isOrbsExclusive, analyticsContext: collectiblesAnalyticsContext };
                      navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
                    }
                  }
                  cResult[22] = collectiblesAnalyticsContext;
                  cResult[23] = navigation;
                  class V {
                    constructor() {
                      if (!closure_9) {
                        tmp = initialProductSkuId;
                        tmp2 = null;
                        found = null;
                        if (null != initialProductSkuId) {
                          tmp4 = closure_4;
                          found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
                        }
                        if (null != found) {
                          tmp5 = closure_1;
                          tmp6 = closure_2;
                          obj = closure_1(closure_2[21]);
                          hideActionSheetResult = obj.hideActionSheet();
                          tmp8 = closure_0;
                          obj2 = closure_0(closure_2[22]);
                          obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                          obj1.product = found;
                          tmp9 = initialVariantIndex;
                          obj1.initialVariantIndex = initialVariantIndex;
                          tmp10 = analyticsLocations;
                          obj1.analyticsLocations = analyticsLocations;
                          tmp11 = closure_8;
                          obj1.shopAnalyticsContext = tmp11;
                          result = obj2.openProductDetailsActionSheet(obj1);
                        }
                      }
                      return;
                    }
                  }
                  tmp26 = onTapViewAll;
                }
              }
            }
          }
        }
        class V {
          constructor() {
            if (!closure_9) {
              tmp = initialProductSkuId;
              tmp2 = null;
              found = null;
              if (null != initialProductSkuId) {
                tmp4 = closure_4;
                found = closure_4.find((skuId) => skuId.skuId === initialProductSkuId);
              }
              if (null != found) {
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj = closure_1(closure_2[21]);
                hideActionSheetResult = obj.hideActionSheet();
                tmp8 = closure_0;
                obj2 = closure_0(closure_2[22]);
                obj1 = { product: null, initialVariantIndex: null, analyticsLocations: null, shopAnalyticsContext: null };
                obj1.product = found;
                tmp9 = initialVariantIndex;
                obj1.initialVariantIndex = initialVariantIndex;
                tmp10 = analyticsLocations;
                obj1.analyticsLocations = analyticsLocations;
                tmp11 = closure_8;
                obj1.shopAnalyticsContext = tmp11;
                result = obj2.openProductDetailsActionSheet(obj1);
              }
            }
            return;
          }
        }
        const items4 = [isInImprovedMobileShopLoading, initialProductSkuId, initialVariantIndex, filteredAndSortedProducts, analyticsLocations, collectiblesAnalyticsContext];
        cResult[12] = collectiblesAnalyticsContext;
        cResult[13] = analyticsLocations;
        cResult[14] = initialProductSkuId;
        cResult[15] = initialVariantIndex;
        cResult[16] = isInImprovedMobileShopLoading;
        cResult[17] = filteredAndSortedProducts;
        cResult[18] = V;
        cResult[19] = items4;
        tmp23 = items4;
        tmp22 = V;
        const tmpResult10 = category(tmp2[20]);
      }
    }
    const obj16 = { shouldScroll: tmp17, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(tmp2[18]).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
    cResult[8] = category.storeListingId;
    cResult[9] = productIndex;
    cResult[10] = tmp17;
    cResult[11] = obj16;
    tmp18 = obj16;
    const tmpResult7 = category(tmp2[17]);
  }
  const obj17 = { products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  cResult[0] = category.isOrbsExclusive;
  cResult[1] = products;
  cResult[2] = obj17;
  tmp7 = obj17;
  let obj2 = category(navigation[14]);
}) : (function ShopCategory(category) {
  category = category.category;
  let analyticsLocations;
  initialProductSkuId = undefined;
  let collectiblesAnalyticsContext;
  let isInImprovedMobileShopLoading;
  ({ index, isDarkTheme } = category);
  analyticsLocations = analyticsLocations(6851)().analyticsLocations;
  const tmp3 = isInImprovedMobileShopLoading();
  dependencyMap = category(1503).useNavigation();
  const unpublishedAt = category.unpublishedAt;
  let obj = category(1503);
  const filteredAndSortedProducts = category(15328).useFilteredAndSortedProducts({ products: category.products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive });
  const mobileBannerUrl = category.mobileBannerUrl;
  let obj2 = category(15328);
  let obj3 = { products: category.products, bypassAndroidUnsyncedFilter: category.isOrbsExclusive };
  const collectiblesShopDeepLinkProps = category(16185).useCollectiblesShopDeepLinkProps({ products: filteredAndSortedProducts });
  ({ productIndex, initialProductSkuId } = collectiblesShopDeepLinkProps);
  const initialVariantIndex = collectiblesShopDeepLinkProps.initialVariantIndex;
  const ref = unpublishedAt.useRef(null);
  const obj4 = category(16185);
  let items = [category.storeListingId];
  const recyclingState = category(8624).useRecyclingState(null, items, () => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  });
  const obj6 = category(8624);
  let tmp9 = null != productIndex;
  if (tmp9) {
    tmp9 = productIndex > 0;
  }
  const obj7 = category(16189);
  const scrollToInitialIndexOnce = obj7.useScrollToInitialIndexOnce({ shouldScroll: tmp9, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(16189).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId });
  const obj8 = { shouldScroll: tmp9, initialScrollIndex: productIndex, flashListRef: ref, afterMs: category(16189).INITIAL_SCROLL_DELAY_MS, resetKey: category.storeListingId };
  collectiblesAnalyticsContext = category(8970).useCollectiblesAnalyticsContext();
  const tmp4Result = category(8970);
  isInImprovedMobileShopLoading = category(9078).useIsInImprovedMobileShopLoading();
  const items1 = [isInImprovedMobileShopLoading, initialProductSkuId, initialVariantIndex, filteredAndSortedProducts, analyticsLocations, collectiblesAnalyticsContext];
  const effect = obj5.useEffect(() => {
    if (!isInImprovedMobileShopLoading) {
      let found = null;
      if (null != initialProductSkuId) {
        found = filteredAndSortedProducts.find((skuId) => skuId.skuId === initialProductSkuId);
      }
      if (null != found) {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj3 = { product: found, initialVariantIndex, analyticsLocations, shopAnalyticsContext: collectiblesAnalyticsContext };
        const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj3);
      }
    }
  }, items1);
  const items2 = [unpublishedAt];
  const callback = obj5.useCallback((arg0) => {
    ({ item, index } = arg0);
    const obj = { newValue: { tilePosition: index }, children: React5(CollectiblesShopCardV2Default, { product: item, unpublishedAt }) };
    return React5(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
  }, items2);
  const obj9 = { newValue: { categoryPosition: index }, children: null };
  const obj10 = { style: tmp3.categoryContainer, children: null };
  const items3 = [tmp3.categoryHeader, ];
  const obj11 = { style: items3, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.8, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
  items3[1] = isDarkTheme ? tmp3.categoryHeaderBorderDark : tmp3.categoryHeaderBorderLight;
  const intl = tmp4(1126).intl;
  obj11.accessibilityLabel = intl.formatToPlainString(category(1126).t.FNtLb3, { category: category.name });
  const intl2 = tmp4(1126).intl;
  obj11.accessibilityHint = intl2.string(category(1126).t.F8ma9x);
  const obj12 = { category: category.name };
  const tmp4Result2 = category(9078);
  obj11.androidRippleConfig = { radius: analyticsLocations(587).radii.lg };
  obj11.onPress = function onPress() {
    if (category.isOrbsExclusive) {
      const obj3 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
      obj3.analyticsLocations = items;
      obj3.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
      obj3.screen = initialProductSkuId.ORBS;
      const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj3);
    } else {
      const obj = { category: tmp, analyticsContext: collectiblesAnalyticsContext };
      navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj);
    }
  };
  let tmp15Result = null != mobileBannerUrl;
  if (tmp15Result) {
    const obj14 = { source: null, resizeMode: "cover", style: null };
    const obj15 = { uri: mobileBannerUrl };
    obj14.source = obj15;
    obj14.style = tmp3.imageBackground;
    tmp15Result = tmp15(tmp(6156), obj14);
  }
  const items4 = [tmp15Result, ];
  const obj13 = { radius: analyticsLocations(587).radii.lg };
  items4[1] = ref(filteredAndSortedProducts, { style: tmp3.viewAllIcon, children: ref(category(6905).ChevronSmallRightIcon, { size: "sm", color: "white" }) });
  obj11.children = items4;
  const items5 = [collectiblesAnalyticsContext(category(6184).PressableOpacity, obj11, category.storeListingId), ];
  const obj17 = { ref, horizontal: true, accessibilityLabel: null, accessibilityRole: "list", data: null, renderItem: null, drawDistance: 150, decelerationRate: "fast", snapToInterval: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, ListFooterComponent: null, ItemSeparatorComponent: null, initialScrollIndex: null };
  const intl3 = tmp4(1126).intl;
  obj17.accessibilityLabel = intl3.formatToPlainString(category(1126).t.FNtLb3, { category: category.name });
  obj17.data = filteredAndSortedProducts;
  obj17.renderItem = callback;
  obj17.snapToInterval = category(8967).COLLECTIBLES_SHOP_CARD_WIDTH + 12;
  obj17.ListHeaderComponent = ListFooterComponent;
  obj17.ListFooterComponent = ListFooterComponent;
  obj17.ItemSeparatorComponent = ItemSeparatorComponent;
  obj17.initialScrollIndex = productIndex;
  items5[1] = ref(category(8624).FlashList, obj17);
  obj10.children = items5;
  obj9.children = collectiblesAnalyticsContext(filteredAndSortedProducts, obj10);
  return ref(category(8970).CollectiblesAnalyticsProvider, obj9);
});