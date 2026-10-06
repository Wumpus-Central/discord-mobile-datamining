// === Module 13295: PremiumFeaturesCarouselSection ===

// Module 13295 (PremiumFeaturesCarouselSection)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import Text_Text from "Text/Text" /* 4892 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5777 */;
import FastImageDefault from "FastImage" /* 5981 */;
import ColorConstants from "ColorConstants" /* 6951 */;
import PaginationDefault from "Pagination" /* 10504 */;
import AssetRegistryDefault from "AssetRegistry" /* 13296 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13297 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13298 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13299 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, flag, obj1, set, set2, set3, tmp3, trackResult;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj5;
let obj6;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const Gradients = ColorConstants.Gradients;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let c12 = 0.85;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, headerText: { textAlign: "center" }, carouselContainer: obj2, carousel: { flex: 1, minHeight: 262 }, indicators: obj3 };
obj2 = { flex: 1, marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: -nativeDefault.space.PX_48 };
let closure_14 = createStyles(obj);
createStyles = createStyles_mod;
let obj4 = { cardContainer: { flex: 1 }, card: obj5, image: { alignSelf: "center" }, cardTitle: obj6 };
obj5 = { flex: 1, alignSelf: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
const createStyles2 = createStyles.createStyles;
obj6 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
let closure_15 = createStyles2(obj4);
createStyles = createStyles_mod;
let closure_16 = createStyles.createStyles({ emojiImage: { alignSelf: "flex-end" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let style;
  const obj = react2;
  const cResult = obj.c(9);
  ({ style, children } = arg0);
  const tmp4 = closure_15();
  if (cResult[0] === style) {
    let tmp5;
    if (cResult[1] === tmp4.card) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp4.cardContainer) {
        let tmp12;
        if (cResult[7] === tmp6) {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj2 = { style: tmp4.cardContainer, children: tmp6 };
      const tmp15 = authStore(metroRequire, obj2);
      cResult[6] = tmp4.cardContainer;
      cResult[7] = tmp6;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
    const obj3 = { style: tmp5, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: Gradients.PREMIUM_TIER_0_PERK_CARD, children };
    const tmp9 = LinearGradientDefault;
    const tmp11 = authStore(tmp9, obj3);
    cResult[3] = children;
    cResult[4] = tmp5;
    cResult[5] = tmp11;
    tmp6 = tmp11;
  }
  const items = [tmp4.card, style];
  cResult[0] = style;
  cResult[1] = tmp4.card;
  cResult[2] = items;
  tmp5 = items;
}) : ((arg0) => {
  let children;
  let items;
  let obj2;
  let style;
  let tmp2;
  ({ style, children } = arg0);
  const tmp = closure_15();
  const obj = { style: tmp.cardContainer, children: authStore(tmp2, obj2) };
  obj2 = { style: items, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: Gradients.PREMIUM_TIER_0_PERK_CARD, children };
  items = [tmp.card, style];
  tmp2 = LinearGradientDefault;
  return authStore(metroRequire, obj);
});
let closure_17 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let imageSrc;
  let imageStyle;
  let items;
  let style;
  let title;
  const obj = react2;
  const cResult = obj.c(13);
  ({ style, title, imageSrc, imageStyle } = arg0);
  const tmp4 = closure_15();
  if (cResult[0] === tmp4.cardTitle) {
    let tmp5;
    if (cResult[1] === title) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === imageStyle) {
      let tmp7;
      if (cResult[4] === tmp4.image) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === imageSrc) {
        let tmp8;
        if (cResult[7] === tmp7) {
          tmp8 = cResult[8];
        }
        if (cResult[9] === style) {
          if (cResult[10] === tmp5) {
            let tmp12;
            if (cResult[11] === tmp8) {
              tmp12 = cResult[12];
            }
            return tmp12;
          }
        }
        const obj2 = { style, children: items };
        items = [tmp5, tmp8];
        const tmp15 = unpackModuleId(closure_17, obj2);
        cResult[9] = style;
        cResult[10] = tmp5;
        cResult[11] = tmp8;
        cResult[12] = tmp15;
        tmp12 = tmp15;
      }
      const obj3 = { source: imageSrc, style: tmp7, resizeMode: "contain" };
      const tmp11 = authStore(FastImageDefault, obj3);
      cResult[6] = imageSrc;
      cResult[7] = tmp7;
      cResult[8] = tmp11;
      tmp8 = tmp11;
    }
    const items1 = [tmp4.image, imageStyle];
    cResult[3] = imageStyle;
    cResult[4] = tmp4.image;
    cResult[5] = items1;
    tmp7 = items1;
  }
  const obj4 = { variant: "heading-md/extrabold", color: "text-overlay-light", style: tmp4.cardTitle, children: title };
  const tmp6 = authStore(Text_Text.Text, obj4);
  cResult[0] = tmp4.cardTitle;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  let imageSrc;
  let imageStyle;
  let items;
  let items1;
  let style;
  let title;
  ({ style, title, imageSrc, imageStyle } = arg0);
  const tmp = closure_15();
  const obj = { style, children: items };
  items = [, ];
  const obj2 = { variant: "heading-md/extrabold", color: "text-overlay-light", style: tmp.cardTitle, children: title };
  items[0] = authStore(Text_Text.Text, obj2);
  const obj3 = { source: imageSrc, style: items1, resizeMode: "contain" };
  items1 = [tmp.image, imageStyle];
  items[1] = authStore(FastImageDefault, obj3);
  return unpackModuleId(closure_17, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let arr5;
  let closure_0;
  let first;
  let set1;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp24;
  let tmp25;
  let tmp32;
  let tmp7;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(15);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t["3cyhe3"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const _Set = Set;
    const items = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
    const self = this;
    const self2 = this;
    set = new Set(items);
    cResult[1] = set;
    tmp7 = set;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp4.emojiImage) {
    let obj2 = { title: first, imageSrc: AssetRegistryDefault, imageStyle: tmp4.emojiImage, premiumTypes: tmp7 };
    cResult[2] = tmp4.emojiImage;
    cResult[3] = obj2;
    tmp12 = obj2;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(require("intl").t["8AhJqy"]);
    cResult[4] = stringResult1;
    tmp14 = stringResult1;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { title: tmp14, imageSrc: AssetRegistryDefault2, premiumTypes: set1 };
    const _Set2 = Set;
    const items1 = [, ];
    ({ TIER_0: arr2[0], TIER_2: arr2[1] } = PremiumTypes);
    const self3 = this;
    const self4 = this;
    set1 = new Set(items1);
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(require("intl").t["t/Mvdj"]);
    cResult[5] = obj3;
    cResult[6] = stringResult2;
    tmp17 = stringResult2;
    tmp16 = obj3;
  } else {
    tmp16 = cResult[5];
    tmp17 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { title: tmp17, imageSrc: AssetRegistryDefault3, premiumTypes: set2 };
    const _Set3 = Set;
    const items2 = [PremiumTypes.TIER_2];
    const self5 = this;
    const self6 = this;
    set2 = new Set(items2);
    const intl4 = tmp(1126).intl;
    const stringResult3 = intl4.string(require("intl").t["n+DGY/"]);
    cResult[7] = obj4;
    cResult[8] = stringResult3;
    tmp25 = stringResult3;
    tmp24 = obj4;
  } else {
    tmp24 = cResult[7];
    tmp25 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { title: tmp25, imageSrc: AssetRegistryDefault4, premiumTypes: set3 };
    const _Set4 = Set;
    const items3 = [PremiumTypes.TIER_2];
    const self7 = this;
    const self8 = this;
    cResult[9] = obj5;
    tmp32 = obj5;
    set3 = new Set(items3);
  } else {
    tmp32 = cResult[9];
  }
  if (cResult[10] !== tmp12) {
    const items4 = [tmp12, tmp16, tmp24, tmp32];
    cResult[10] = tmp12;
    cResult[11] = items4;
    arr5 = items4;
  } else {
    arr5 = cResult[11];
  }
  if (cResult[12] === arr5) {
    let tmp38;
    if (cResult[13] === arg0) {
      tmp38 = cResult[14];
    }
    return tmp38;
  }
  const mapped = arr5.map((item, index) => {
    let obj2;
    const obj = { style: obj2 };
    obj2 = { width: closure_0 * c12 };
    const merged = Object.assign(item);
    return authStore(closure_18, obj, index);
  });
  cResult[12] = arr5;
  cResult[13] = arg0;
  cResult[14] = mapped;
  tmp38 = mapped;
}) : ((arg0) => {
  let closure_0 = arg0;
  const tmp = closure_16();
  const emojiImage = tmp;
  let items = [tmp];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let items2;
    let items3;
    let items4;
    const obj = { title: intl.string(intl5.t["3cyhe3"]), imageSrc: AssetRegistryDefault, imageStyle: emojiImage.emojiImage, premiumTypes: new Set(items) };
    intl = intl5.intl;
    items = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
    const items1 = [obj, , , ];
    const obj2 = { title: intl2.string(intl5.t["8AhJqy"]), imageSrc: AssetRegistryDefault2, premiumTypes: new Set(items2) };
    new Set(items);
    intl2 = intl5.intl;
    items2 = [, ];
    ({ TIER_0: arr3[0], TIER_2: arr3[1] } = PremiumTypes);
    items1[1] = obj2;
    const obj3 = { title: intl3.string(intl5.t["t/Mvdj"]), imageSrc: AssetRegistryDefault3, premiumTypes: new Set(items3) };
    new Set(items2);
    intl3 = intl5.intl;
    items3 = [PremiumTypes.TIER_2];
    items1[2] = obj3;
    const obj4 = { title: intl4.string(intl5.t["n+DGY/"]), imageSrc: AssetRegistryDefault4, premiumTypes: new Set(items4) };
    new Set(items3);
    intl4 = intl5.intl;
    items4 = [PremiumTypes.TIER_2];
    items1[3] = obj4;
    new Set(items4);
    return items1;
  }, items);
  return memo.map((item, index) => {
    let obj2;
    const obj = { style: obj2 };
    obj2 = { width: closure_0 * c12 };
    const merged = Object.assign(item);
    return authStore(closure_18, obj, index);
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let obj8;
  let onEndReached;
  let width;
  const obj = react2;
  const cResult = obj.c(24);
  ({ width, onEndReached } = arg0);
  const tmp4 = closure_14();
  const obj2 = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const tmp6 = _slicedToArray(react.useState(0), 2);
  const first = tmp6[0];
  let closure_2 = tmp8;
  const arr = closure_19(width);
  if (cResult[0] === arr.length) {
    if (cResult[1] === first) {
      let tmp9;
      let tmp10;
      if (cResult[2] === onEndReached) {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const effect = react.useEffect(tmp9, tmp10);
      const result = width * c12;
      const sum = result + PX_12;
      const _Math = Math;
      const bound = Math.max(0, (width - result) / 2);
      if (cResult[5] === arr.length) {
        let tmp18;
        let tmp19;
        if (cResult[6] === sum) {
          tmp18 = cResult[7];
        }
        if (cResult[8] === arr) {
          if (cResult[9] === tmp18) {
            if (cResult[10] === isScreenReaderEnabled) {
              if (cResult[11] === sum) {
                if (cResult[12] === bound) {
                  if (cResult[13] === tmp4.carousel) {
                    if (cResult[14] === width) {
                      tmp19 = cResult[15];
                    }
                    if (cResult[16] === arr.length) {
                      if (cResult[17] === first) {
                        let tmp25;
                        if (cResult[18] === tmp4.indicators) {
                          tmp25 = cResult[19];
                        }
                        if (cResult[20] === tmp4.carouselContainer) {
                          if (cResult[21] === tmp19) {
                            let tmp28;
                            if (cResult[22] === tmp25) {
                              tmp28 = cResult[23];
                            }
                            return tmp28;
                          }
                        }
                        const obj4 = { style: tmp4.carouselContainer, children: items };
                        items = [tmp19, tmp25];
                        const tmp31 = unpackModuleId(metroRequire, obj4);
                        cResult[20] = tmp4.carouselContainer;
                        cResult[21] = tmp19;
                        cResult[22] = tmp25;
                        cResult[23] = tmp31;
                        tmp28 = tmp31;
                      }
                    }
                    const obj5 = { containerStyle: tmp4.indicators, numberOfItems: arr.length, currentIndex: first };
                    const tmp27 = authStore(native.CarouselPagination, obj5);
                    cResult[16] = arr.length;
                    cResult[17] = first;
                    cResult[18] = tmp4.indicators;
                    cResult[19] = tmp27;
                    tmp25 = tmp27;
                  }
                }
              }
            }
          }
        }
        if (!MetaQuestUtils.isThumbstickScrollDevice) {
          let tmp22;
          if (!isScreenReaderEnabled) {
            const obj6 = {
              style: tmp4.carousel,
              data: arr,
              renderItem(item) {
                          return item.item;
                        },
              width,
              loop: false,
              onConfigurePanGesture(activeOffsetX) {
                          activeOffsetX.activeOffsetX([-10, 10]);
                        },
              scrollAnimationDuration: 200,
              mode: "parallax",
              modeConfig: { parallaxScrollingScale: 1, parallaxScrollingOffset: 45 },
              onSnapToItem: tmp6[1]
            };
            tmp22 = authStore(PaginationDefault, obj6);
          }
          cResult[8] = arr;
          cResult[9] = tmp18;
          cResult[10] = isScreenReaderEnabled;
          cResult[11] = sum;
          cResult[12] = bound;
          cResult[13] = tmp4.carousel;
          cResult[14] = width;
          cResult[15] = tmp22;
          tmp19 = tmp22;
        }
        const obj7 = { style: tmp4.carousel, contentContainerStyle: obj8, horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: arr.map((item, index) => index * sum), scrollEventThrottle: 100, onScroll: tmp18, children: arr };
        obj8 = { paddingHorizontal: bound, gap: PX_12 };
        tmp22 = authStore(hasOwnProperty, obj7);
      }
      const fn2 = function w(nativeEvent) {
        closure_2(Math.max(0, Math.min(arr.length - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / sum))));
      };
      cResult[5] = arr.length;
      cResult[6] = sum;
      cResult[7] = fn2;
      tmp18 = fn2;
    }
  }
  const fn = function o() {
    if (first === arr.length - 1) {
      if (onEndReached != null) {
        tmp();
      }
    }
  };
  const items1 = [first, arr.length, onEndReached];
  cResult[0] = arr.length;
  cResult[1] = first;
  cResult[2] = onEndReached;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : ((arg0) => {
  let onEndReached;
  let width;
  ({ width, onEndReached } = arg0);
  const tmp = closure_14();
  const obj = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp5 = _slicedToArray(react.useState(0), 2);
  const first = tmp5[0];
  let closure_2 = tmp7;
  const arr = closure_19(width);
  const items = [first, arr.length, onEndReached];
  const effect = react.useEffect(() => {
    if (first === arr.length - 1) {
      if (onEndReached != null) {
        tmp();
      }
    }
  }, items);
  const result = width * c12;
  const sum = result + PX_12;
  let c4 = sum;
  const items1 = [sum, arr.length];
  const bound = Math.max(0, (width - result) / 2);
  const obj2 = { style: tmp.carouselContainer, children: null };
  const callback = react.useCallback((nativeEvent) => {
    closure_2(Math.max(0, Math.min(arr.length - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / c4))));
  }, items1);
  if (!MetaQuestUtils.isThumbstickScrollDevice) {
    let tmp16;
    let tmp18;
    if (!isScreenReaderEnabled) {
      tmp16 = authStore;
      const obj3 = {
        style: tmp.carousel,
        data: arr,
        renderItem(item) {
              return item.item;
            },
        width,
        loop: false,
        onConfigurePanGesture(activeOffsetX) {
              activeOffsetX.activeOffsetX([-10, 10]);
            },
        scrollAnimationDuration: 200,
        mode: "parallax",
        modeConfig: { parallaxScrollingScale: 1, parallaxScrollingOffset: 45 },
        onSnapToItem: tmp5[1]
      };
      tmp18 = authStore(PaginationDefault, obj3);
    }
    const items2 = [tmp18, ];
    const obj4 = { containerStyle: tmp.indicators, numberOfItems: arr.length, currentIndex: first };
    items2[1] = tmp16(native.CarouselPagination, obj4);
    obj2.children = items2;
    return unpackModuleId(metroRequire, obj2);
  }
  const obj5 = { style: tmp.carousel, contentContainerStyle: { paddingHorizontal: bound, gap: PX_12 }, horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: arr.map((item, index) => index * c4), scrollEventThrottle: 100, onScroll: callback, children: arr };
  tmp18 = authStore(hasOwnProperty, obj5);
  tmp16 = authStore;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let analyticsLocations;
  let closure_2;
  let first;
  let first1;
  let items;
  let tmp11;
  let obj = analyticsLocations(576);
  const cResult = obj.c(18);
  style = style.style;
  const tmp4 = closure_14();
  analyticsLocations = first(6664)().analyticsLocations;
  [first, dependencyMap] = react.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = analyticsLocations(1484);
    const windowDimensions = tmpResult.getWindowDimensions();
    cResult[0] = windowDimensions;
    first1 = windowDimensions;
  } else {
    first1 = cResult[0];
  }
  const tmp5Result = _slicedToArray(react.useState(first1.width), 2);
  [tmp11, _slicedToArray] = tmp5Result;
  if (cResult[1] === analyticsLocations) {
    let tmp12;
    if (cResult[2] === first) {
      tmp12 = cResult[3];
    }
    if (cResult[4] === style) {
      let tmp13;
      let tmp15;
      if (cResult[5] === tmp4.container) {
        tmp13 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0) {
            return closure_3(style.nativeEvent.layout.width);
          }
        }
        cResult[7] = M;
      } else {
        class M {
          constructor(arg0) {
            return closure_3(style.nativeEvent.layout.width);
          }
        }
      }
      const _Symbol2 = Symbol;
      const headerText = tmp4.headerText;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0) {
            return closure_3(style.nativeEvent.layout.width);
          }
        }
        const stringResult = obj4.string(analyticsLocations(1126).t.RGadQR);
        cResult[8] = stringResult;
        tmp15 = stringResult;
      } else {
        class M {
          constructor(arg0) {
            return closure_3(style.nativeEvent.layout.width);
          }
        }
      }
      if (cResult[9] !== tmp4.headerText) {
        class M {
          constructor(arg0) {
            return closure_3(style.nativeEvent.layout.width);
          }
        }
        const obj3 = { style: headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: tmp15 };
        cResult[9] = tmp4.headerText;
        cResult[10] = closure_10(analyticsLocations(4892).Text, obj3);
        const tmp18 = closure_10(analyticsLocations(4892).Text, obj3);
      } else {
        class M {
          constructor(arg0) {
            return closure_3(style.nativeEvent.layout.width);
          }
        }
      }
      if (cResult[11] === tmp11) {
        class M {
          constructor(arg0) {
            return closure_3(style.nativeEvent.layout.width);
          }
        }
        if (cResult[14] === tmp13) {
          class M {
            constructor(arg0) {
              return closure_3(style.nativeEvent.layout.width);
            }
          }
        }
        const obj5 = { style: tmp13, onLayout: M, children: items };
        items = [tmp17, tmp19];
        cResult[14] = tmp13;
        cResult[15] = tmp17;
        cResult[16] = tmp19;
        cResult[17] = closure_11(closure_6, obj5);
        const tmp26 = closure_11(closure_6, obj5);
      }
      const obj6 = { width: tmp11, onEndReached: tmp12 };
      cResult[11] = tmp11;
      cResult[12] = tmp12;
      cResult[13] = closure_10(closure_20, obj6);
      const tmp22 = closure_10(closure_20, obj6);
    }
    const items1 = [tmp4.container, style];
    cResult[4] = style;
    cResult[5] = tmp4.container;
    cResult[6] = items1;
    tmp13 = items1;
  }
  class E {
    constructor() {
      tmp = closure_1;
      if (!tmp) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        obj = closure_1(closure_2[26]);
        tmp4 = AnalyticEvents;
        obj1 = { location_stack: null };
        tmp5 = analyticsLocations;
        obj1.location_stack = analyticsLocations;
        trackResult = obj.track(AnalyticEvents.PREMIUM_MARKETING_SCROLLED_TO_LAST, obj1);
        tmp7 = closure_2;
        flag = true;
        tmp8 = closure_2(true);
      }
      return;
    }
  }
  cResult[1] = analyticsLocations;
  cResult[2] = first;
  cResult[3] = E;
  tmp12 = E;
}) : ((style) => {
  let closure_2;
  let closure_3;
  let first;
  let first1;
  let intl;
  let items1;
  let items2;
  first = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  style = style.style;
  const tmp = closure_14();
  const analyticsLocations = first(6664)().analyticsLocations;
  [first, dependencyMap] = react.useState(false);
  const useState = react.useState;
  let obj = analyticsLocations(1484);
  [first1, _slicedToArray] = useState(obj.getWindowDimensions().width);
  const items = [analyticsLocations, first];
  let obj2 = {
    style: items1,
    onLayout(nativeEvent) {
      return closure_3(nativeEvent.nativeEvent.layout.width);
    },
    children: items2
  };
  items1 = [tmp.container, style];
  const callback = react.useCallback(() => {
    if (!first) {
      const obj2 = { location_stack: analyticsLocations };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.PREMIUM_MARKETING_SCROLLED_TO_LAST, obj2);
      closure_2(true);
    }
  }, items);
  const obj3 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: intl.string(analyticsLocations(1126).t.RGadQR) };
  const Text = analyticsLocations(4892).Text;
  intl = analyticsLocations(1126).intl;
  items2 = [closure_10(Text, obj3), closure_10(closure_20, { width: first1, onEndReached: callback })];
  return closure_11(closure_6, obj2);
});
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCarouselSection.tsx");

export default tmp7;
export const PREMIUM_FEATURES_PROPORTIONAL_CARD_WIDTH = 0.85;
export const PremiumFeaturesCardBackground = tmp6;