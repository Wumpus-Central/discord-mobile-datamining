// === Module 13595: PremiumFeaturesCarouselSection ===

// Module 13595 (PremiumFeaturesCarouselSection)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import Text_Text from "Text/Text" /* 5086 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5360 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import FastImageDefault from "FastImage" /* 6164 */;
import PaginationDefault from "Pagination" /* 10101 */;
import _modDef13596 from "module_13596" /* 13596 */;
import _modDef13597 from "module_13597" /* 13597 */;
import _modDef13598 from "module_13598" /* 13598 */;
import _modDef13599 from "module_13599" /* 13599 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1085).AnalyticEvents;
const Gradients = fn(7140).Gradients;
const PremiumTypes = fn(1391).PremiumTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = 0.85;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = fn(5090);
let obj2 = { container: { flex: 1 }, headerText: { textAlign: "center" }, carouselContainer: { flex: 1, marginTop: nativeDefault.space.PX_16 }, carousel: { flex: 1, minHeight: 262 }, indicators: null };
let obj3 = { flex: 1, marginTop: nativeDefault.space.PX_16 };
obj2.indicators = { marginBottom: -nativeDefault.space.PX_48 };
let closure_14 = createStyles.createStyles(obj2);
createStyles = fn(5090);
let obj6 = { cardContainer: { flex: 1 }, card: null, image: null, cardTitle: null };
let obj4 = { marginBottom: -nativeDefault.space.PX_48 };
obj6.card = { flex: 1, alignSelf: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj6.image = { alignSelf: "center" };
let obj7 = { flex: 1, alignSelf: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj6.cardTitle = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
let closure_15 = createStyles.createStyles(obj6);
createStyles = fn(5090);
let closure_16 = createStyles.createStyles({ emojiImage: { alignSelf: "flex-end" } });
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumFeaturesCardBackground(arg0) {
  const cResult = c.c(9);
  ({ style, children } = arg0);
  const tmp4 = closure_15();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.card) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp5) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === tmp4.cardContainer) {
        if (cResult[7] === tmp6) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj2 = { style: tmp4.cardContainer, children: tmp6 };
      const tmp15 = collapsed(timestampProducer, obj2);
      cResult[6] = tmp4.cardContainer;
      cResult[7] = tmp6;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
    const obj3 = { style: tmp5, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: Gradients.PREMIUM_TIER_0_PERK_CARD, children };
    const tmp11 = collapsed(LinearGradientDefault, obj3);
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
}) : (function PremiumFeaturesCardBackground(arg0) {
  ({ style, children } = arg0);
  const tmp = closure_15();
  const obj = { style: tmp.cardContainer, children: null };
  const obj2 = { style: null, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: Gradients.PREMIUM_TIER_0_PERK_CARD, children };
  const items = [tmp.card, style];
  obj2.style = items;
  obj.children = collapsed(LinearGradientDefault, obj2);
  return collapsed(timestampProducer, obj);
});
let closure_17 = tmp4;
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function CarouselCard(arg0) {
  const cResult = c.c(13);
  ({ style, title, imageSrc, imageStyle } = arg0);
  const tmp4 = closure_15();
  if (cResult[0] === tmp4.cardTitle) {
    if (cResult[1] === title) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === imageStyle) {
      if (cResult[4] === tmp4.image) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === imageSrc) {
        if (cResult[7] === tmp7) {
          let tmp8 = cResult[8];
        }
        if (cResult[9] === style) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp8) {
              let tmp12 = cResult[12];
            }
            return tmp12;
          }
        }
        const obj2 = { style, children: null };
        const items = [tmp5, tmp8];
        obj2.children = items;
        const tmp15 = closure_1_11(closure_17, obj2);
        cResult[9] = style;
        cResult[10] = tmp5;
        cResult[11] = tmp8;
        cResult[12] = tmp15;
        tmp12 = tmp15;
      }
      const obj3 = { source: imageSrc, style: tmp7, resizeMode: "contain" };
      const tmp11 = collapsed(FastImageDefault, obj3);
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
  const tmp6 = collapsed(Text_Text.Text, { variant: "heading-md/extrabold", color: "text-overlay-light", style: tmp4.cardTitle, children: title });
  cResult[0] = tmp4.cardTitle;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj4 = { variant: "heading-md/extrabold", color: "text-overlay-light", style: tmp4.cardTitle, children: title };
}) : (function CarouselCard(arg0) {
  ({ style, title, imageSrc, imageStyle } = arg0);
  const tmp = closure_15();
  const obj = { style, children: null };
  const items = [collapsed(Text_Text.Text, { variant: "heading-md/extrabold", color: "text-overlay-light", style: tmp.cardTitle, children: title }), ];
  const obj3 = { source: imageSrc, style: null, resizeMode: "contain" };
  const items1 = [tmp.image, imageStyle];
  obj3.style = items1;
  items[1] = collapsed(FastImageDefault, obj3);
  obj.children = items;
  return closure_1_11(closure_17, obj);
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumFeatureCardData(arg0) {
  _require = arg0;
  const cResult = require("c").c(15);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["3cyhe3"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const _Set = Set;
    const items = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
    const set = new Set(items);
    cResult[1] = set;
    let tmp7 = set;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp4.emojiImage) {
    const obj2 = { title: first, imageSrc: _modDef13596, imageStyle: tmp4.emojiImage, premiumTypes: tmp7 };
    cResult[2] = tmp4.emojiImage;
    cResult[3] = obj2;
    let tmp14 = obj2;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t["8AhJqy"]);
    cResult[4] = stringResult1;
    let tmp16 = stringResult1;
  } else {
    tmp16 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { title: tmp16, imageSrc: _modDef13597, premiumTypes: null };
    const _Set2 = Set;
    const items1 = [, ];
    ({ TIER_0: arr2[0], TIER_2: arr2[1] } = PremiumTypes);
    const set1 = new Set(items1);
    obj3.premiumTypes = set1;
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t["t/Mvdj"]);
    cResult[5] = obj3;
    cResult[6] = stringResult2;
    let tmp19 = stringResult2;
    let tmp18 = obj3;
  } else {
    tmp18 = cResult[5];
    tmp19 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { title: tmp19, imageSrc: _modDef13598, premiumTypes: null };
    const _Set3 = Set;
    const items2 = [PremiumTypes.TIER_2];
    const set2 = new Set(items2);
    obj4.premiumTypes = set2;
    const intl4 = tmp(1126).intl;
    const stringResult3 = intl4.string(tmp(1126).t["n+DGY/"]);
    cResult[7] = obj4;
    cResult[8] = stringResult3;
    let tmp29 = stringResult3;
    let tmp28 = obj4;
  } else {
    tmp28 = cResult[7];
    tmp29 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { title: tmp29, imageSrc: _modDef13599, premiumTypes: null };
    const _Set4 = Set;
    const items3 = [PremiumTypes.TIER_2];
    const set3 = new Set(items3);
    obj5.premiumTypes = set3;
    cResult[9] = obj5;
    let tmp38 = obj5;
  } else {
    tmp38 = cResult[9];
  }
  if (cResult[10] !== tmp14) {
    const items4 = [tmp14, tmp18, tmp28, tmp38];
    cResult[10] = tmp14;
    cResult[11] = items4;
    let arr5 = items4;
  } else {
    arr5 = cResult[11];
  }
  if (cResult[12] === arr5) {
    if (cResult[13] === arg0) {
      let tmp46 = cResult[14];
    }
    return tmp46;
  }
  const mapped = arr5.map((item, index) => {
    const obj = { style: { width: closure_0 * c12 } };
    const merged = Object.assign(item);
    return collapsed(closure_18, obj, index);
  });
  cResult[12] = arr5;
  cResult[13] = arg0;
  cResult[14] = mapped;
  tmp46 = mapped;
  let obj = require("c");
}) : (function usePremiumFeatureCardData(arg0) {
  closure_0 = arg0;
  const tmp = closure_16();
  const emojiImage = tmp;
  let items = [tmp];
  const memo = noop.useMemo(() => {
    const obj = { title: null, imageSrc: null, imageStyle: null, premiumTypes: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["3cyhe3"]);
    obj.imageSrc = _modDef13596;
    obj.imageStyle = emojiImage.emojiImage;
    const items = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
    obj.premiumTypes = new Set(items);
    const items1 = [obj, , , ];
    const obj2 = { title: null, imageSrc: null, premiumTypes: null };
    const intl2 = util.intl;
    obj2.title = intl2.string(util.t["8AhJqy"]);
    obj2.imageSrc = _modDef13597;
    const items2 = [, ];
    ({ TIER_0: arr3[0], TIER_2: arr3[1] } = PremiumTypes);
    const set = new Set(items);
    obj2.premiumTypes = new Set(items2);
    items1[1] = obj2;
    const obj3 = { title: null, imageSrc: null, premiumTypes: null };
    const intl3 = util.intl;
    obj3.title = intl3.string(util.t["t/Mvdj"]);
    obj3.imageSrc = _modDef13598;
    const items3 = [PremiumTypes.TIER_2];
    const set1 = new Set(items2);
    obj3.premiumTypes = new Set(items3);
    items1[2] = obj3;
    const obj4 = { title: null, imageSrc: null, premiumTypes: null };
    const intl4 = util.intl;
    obj4.title = intl4.string(util.t["n+DGY/"]);
    obj4.imageSrc = _modDef13599;
    const items4 = [PremiumTypes.TIER_2];
    const set2 = new Set(items3);
    obj4.premiumTypes = new Set(items4);
    items1[3] = obj4;
    return items1;
  }, items);
  return memo.map((item, index) => {
    const obj = { style: { width: closure_0 * c12 } };
    const merged = Object.assign(item);
    return collapsed(closure_18, obj, index);
  });
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumFeaturesCarousel(arg0) {
  const cResult = c.c(24);
  ({ width, onEndReached } = arg0);
  const tmp4 = closure_14();
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  [currentIndex] = noop.useState(0);
  dependencyMap = tmp8;
  const children = closure_19(width);
  if (cResult[0] === children.length) {
    if (cResult[1] === currentIndex) {
      if (cResult[2] === onEndReached) {
        let tmp9 = cResult[3];
        let tmp10 = cResult[4];
      }
      const effect = obj3.useEffect(tmp9, tmp10);
      const result = width * c12;
      const sum = result + PX_12;
      noop = sum;
      const _Math = Math;
      const bound = Math.max(0, (width - result) / 2);
      if (cResult[5] === children.length) {
        if (cResult[6] === sum) {
          let tmp18 = cResult[7];
        }
        if (cResult[8] === children) {
          if (cResult[9] === tmp18) {
            if (cResult[10] === isScreenReaderEnabled) {
              if (cResult[11] === sum) {
                if (cResult[12] === bound) {
                  if (cResult[13] === tmp4.carousel) {
                    if (cResult[14] === width) {
                      if (cResult[16] === children.length) {
                        if (cResult[17] === currentIndex) {
                          if (cResult[18] === tmp4.indicators) {
                            let tmp26 = cResult[19];
                          }
                          if (cResult[20] === tmp4.carouselContainer) {
                            if (cResult[21] === tmp19) {
                              if (cResult[22] === tmp26) {
                                let tmp29 = cResult[23];
                              }
                              return tmp29;
                            }
                          }
                          const obj4 = { style: tmp4.carouselContainer, children: null };
                          const items = [tmp19, tmp26];
                          obj4.children = items;
                          const tmp32 = closure_1_11(timestampProducer, obj4);
                          class P {
                            constructor(arg0) {
                              tmp = closure_2(Math.max(0, Math.min(closure_3.length - 1, Math.round(arg0.nativeEvent.contentOffset.x / closure_4))));
                              return;
                            }
                          }
                          cResult[20] = tmp4.carouselContainer;
                          cResult[21] = tmp19;
                          cResult[22] = tmp26;
                          cResult[23] = tmp32;
                          tmp29 = tmp32;
                        }
                      }
                      const obj5 = { containerStyle: tmp4.indicators, numberOfItems: children.length, currentIndex };
                      const tmp28 = collapsed(native.CarouselPagination, obj5);
                      cResult[16] = children.length;
                      class P {
                        constructor(arg0) {
                          tmp = closure_2(Math.max(0, Math.min(closure_3.length - 1, Math.round(arg0.nativeEvent.contentOffset.x / closure_4))));
                          return;
                        }
                      }
                      cResult[18] = tmp4.indicators;
                      cResult[19] = tmp28;
                      tmp26 = tmp28;
                    }
                  }
                }
              }
            }
          }
        }
        if (!MetaQuestUtils.isThumbstickScrollDevice) {
          if (!isScreenReaderEnabled) {
            const obj6 = {
              style: tmp4.carousel,
              data: children,
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
              onSnapToItem: tmp8
            };
            let tmp22 = collapsed(PaginationDefault, obj6);
          }
          cResult[8] = children;
          cResult[9] = tmp18;
          cResult[10] = isScreenReaderEnabled;
          cResult[11] = sum;
          cResult[12] = bound;
          class P {
            constructor(arg0) {
              tmp = closure_2(Math.max(0, Math.min(closure_3.length - 1, Math.round(arg0.nativeEvent.contentOffset.x / closure_4))));
              return;
            }
          }
          cResult[13] = bound;
          cResult[14] = width;
          cResult[15] = tmp22;
        }
        const obj7 = { style: tmp4.carousel, contentContainerStyle: null, horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: null, scrollEventThrottle: 100, onScroll: null, children: null };
        const obj8 = { paddingHorizontal: bound, gap: PX_12 };
        obj7.contentContainerStyle = obj8;
        class P {
          constructor(arg0) {
            tmp = closure_2(Math.max(0, Math.min(closure_3.length - 1, Math.round(arg0.nativeEvent.contentOffset.x / closure_4))));
            return;
          }
        }
        obj7.onScroll = tmp18;
        obj7.children = children;
        tmp22 = collapsed(hasOwnProperty, obj7);
      }
      class P {
        constructor(arg0) {
          tmp = closure_2(Math.max(0, Math.min(closure_3.length - 1, Math.round(arg0.nativeEvent.contentOffset.x / closure_4))));
          return;
        }
      }
      cResult[5] = children.length;
      cResult[6] = sum;
      cResult[7] = P;
      tmp18 = P;
    }
  }
  const fn = function o() {
    if (first === arr.length - 1) {
      if (onEndReached != null) {
        tmp();
      }
    }
  };
  const items1 = [currentIndex, children.length, onEndReached];
  cResult[0] = children.length;
  cResult[1] = currentIndex;
  cResult[2] = onEndReached;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp10 = items1;
  tmp9 = fn;
  obj3 = noop;
}) : (function PremiumFeaturesCarousel(arg0) {
  ({ width, onEndReached } = arg0);
  currentIndex = undefined;
  const tmp = closure_14();
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  [currentIndex] = noop.useState(0);
  closure_2 = tmp7;
  const children = closure_19(width);
  const items = [currentIndex, children.length, onEndReached];
  const effect = noop.useEffect(() => {
    if (first === arr.length - 1) {
      if (onEndReached != null) {
        tmp();
      }
    }
  }, items);
  const result = width * c12;
  const sum = result + PX_12;
  c4 = sum;
  const items1 = [sum, children.length];
  const bound = Math.max(0, (width - result) / 2);
  const obj2 = { style: tmp.carouselContainer, children: null };
  const callback = noop.useCallback((nativeEvent) => {
    closure_2(Math.max(0, Math.min(arr.length - 1, Math.round(nativeEvent.nativeEvent.contentOffset.x / c4))));
  }, items1);
  if (!MetaQuestUtils.isThumbstickScrollDevice) {
    if (!isScreenReaderEnabled) {
      let tmp16 = collapsed;
      const obj3 = {
        style: tmp.carousel,
        data: children,
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
        onSnapToItem: tmp7
      };
      let tmp18 = collapsed(PaginationDefault, obj3);
    }
    const items2 = [tmp18, ];
    const obj4 = { containerStyle: tmp.indicators, numberOfItems: children.length, currentIndex };
    items2[1] = tmp16(native.CarouselPagination, obj4);
    obj2.children = items2;
    return closure_1_11(timestampProducer, obj2);
  }
  tmp18 = collapsed(hasOwnProperty, { style: tmp.carousel, contentContainerStyle: { paddingHorizontal: bound, gap: PX_12 }, horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: children.map((item, index) => index * c4), scrollEventThrottle: 100, onScroll: callback, children });
  tmp16 = collapsed;
  const obj5 = { style: tmp.carousel, contentContainerStyle: { paddingHorizontal: bound, gap: PX_12 }, horizontal: true, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToOffsets: children.map((item, index) => index * c4), scrollEventThrottle: 100, onScroll: callback, children };
});
ReactCompilerGating = fn(558);
let obj8 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCarouselSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumFeaturesCarouselSection(style) {
  const cResult = analyticsLocations(576).c(18);
  style = style.style;
  const tmp4 = closure_14();
  analyticsLocations = first(6841)().analyticsLocations;
  [first, dependencyMap] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const windowDimensions = tmp(1496).getWindowDimensions();
    cResult[0] = windowDimensions;
    let first1 = windowDimensions;
    const tmpResult = tmp(1496);
  } else {
    first1 = cResult[0];
  }
  let obj = analyticsLocations(576);
  [tmp11, _slicedToArray] = noop.useState(first1.width);
  if (cResult[1] === analyticsLocations) {
    if (cResult[2] === first) {
      let tmp12 = cResult[3];
    }
    if (cResult[4] === style) {
      if (cResult[5] === tmp4.container) {
        let tmp13 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function w(nativeEvent) {
          return _slicedToArray(nativeEvent.nativeEvent.layout.width);
        };
        cResult[7] = fn;
        let tmp14 = fn;
      } else {
        tmp14 = cResult[7];
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.RGadQR);
        cResult[8] = stringResult;
        let tmp15 = stringResult;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] !== tmp4.headerText) {
        const obj3 = { style: tmp4.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: tmp15 };
        const tmp19 = closure_10(tmp(5086).Text, obj3);
        cResult[9] = tmp4.headerText;
        cResult[10] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] === tmp11) {
        if (cResult[12] === tmp12) {
          let tmp20 = cResult[13];
        }
        if (cResult[14] === tmp13) {
          if (cResult[15] === tmp17) {
            if (cResult[16] === tmp20) {
              let tmp24 = cResult[17];
            }
            return tmp24;
          }
        }
        const obj4 = { style: tmp13, onLayout: tmp14, children: null };
        const items = [tmp17, tmp20];
        obj4.children = items;
        const tmp27 = closure_11(closure_6, obj4);
        cResult[14] = tmp13;
        cResult[15] = tmp17;
        cResult[16] = tmp20;
        cResult[17] = tmp27;
        tmp24 = tmp27;
      }
      const obj5 = { width: tmp11, onEndReached: tmp12 };
      const tmp23 = closure_10(closure_20, obj5);
      cResult[11] = tmp11;
      cResult[12] = tmp12;
      cResult[13] = tmp23;
      tmp20 = tmp23;
    }
    const items1 = [tmp4.container, style];
    cResult[4] = style;
    cResult[5] = tmp4.container;
    cResult[6] = items1;
    tmp13 = items1;
  }
  class E {
    constructor() {
      if (!closure_1) {
        tmp = closure_1;
        tmp2 = closure_2;
        obj = closure_1(closure_2[26]);
        tmp3 = AnalyticEvents;
        obj1 = { location_stack: null };
        tmp4 = analyticsLocations;
        obj1.location_stack = analyticsLocations;
        trackResult = obj.track(AnalyticEvents.PREMIUM_MARKETING_SCROLLED_TO_LAST, obj1);
        tmp6 = closure_2;
        flag = true;
        tmp7 = closure_2(true);
      }
      return;
    }
  }
  cResult[1] = analyticsLocations;
  cResult[2] = first;
  cResult[3] = E;
  tmp12 = E;
  const tmp5Result = _slicedToArray(noop.useState(first1.width), 2);
}) : (function PremiumFeaturesCarouselSection(style) {
  first = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_14();
  const analyticsLocations = first(6841)().analyticsLocations;
  [first, dependencyMap] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(analyticsLocations(1496).getWindowDimensions().width), 2);
  _slicedToArray = tmp4[1];
  const items = [analyticsLocations, first];
  let obj2 = {
    style: null,
    onLayout(nativeEvent) {
      return closure_3(nativeEvent.nativeEvent.layout.width);
    },
    children: null
  };
  const items1 = [tmp.container, style.style];
  obj2.style = items1;
  const callback = noop.useCallback(() => {
    if (!first) {
      const obj2 = { location_stack: analyticsLocations };
      AnalyticsUtilsDefault.track(AnalyticEvents.PREMIUM_MARKETING_SCROLLED_TO_LAST, obj2);
      closure_2(true);
    }
  }, items);
  const obj3 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl = analyticsLocations(1126).intl;
  obj3.children = intl.string(analyticsLocations(1126).t.RGadQR);
  const items2 = [closure_10(analyticsLocations(5086).Text, obj3), closure_10(closure_20, { width: tmp4[0], onEndReached: callback })];
  obj2.children = items2;
  return closure_11(closure_6, obj2);
});
export const PREMIUM_FEATURES_PROPORTIONAL_CARD_WIDTH = 0.85;
export const PremiumFeaturesCardBackground = tmp4;