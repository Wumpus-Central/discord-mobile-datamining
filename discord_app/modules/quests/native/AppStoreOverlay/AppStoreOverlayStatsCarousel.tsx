// === Module 10589: AppStoreOverlayStatsCarousel ===

// Module 10589 (AppStoreOverlayStatsCarousel)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import Text_Text from "Text/Text" /* 5086 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6326 */;
import AnalyticsActions from "AnalyticsActions" /* 7395 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7404 */;
import AppStoreOverlayStatCardUtils from "AppStoreOverlayStatCardUtils" /* 10590 */;
import AppStoreOverlayStarRatingDefault from "AppStoreOverlayStarRating" /* 10591 */;
import noop from "module_19" /* 19 */;

require = fn;
function getStatCardContent(stat) {
  const type = stat.type;
  if ("rating" === type) {
    let num = stat.maxRating;
    if (num == null) {
      num = 5;
    }
    const result = AppStoreOverlayStatCardUtils.formatAppStoreRatingValue(stat.rating, util.intl.currentLocale);
    let result1;
    if (null != stat.ratingCount) {
      result1 = AppStoreOverlayStatCardUtils.formatAppStoreRatingCount(stat.ratingCount, util.intl.currentLocale);
      const tmp11Result = AppStoreOverlayStatCardUtils;
    }
    const appStoreStarFillAmounts = AppStoreOverlayStatCardUtils.getAppStoreStarFillAmounts(stat.rating, num);
    const intl = util.intl;
    const obj2 = { label: stat.label, rating: result, maxRating: num, ratingCount: null };
    let num2 = stat.ratingCount;
    if (num2 == null) {
      num2 = 0;
    }
    const obj5 = { accessibilityLabel: null, primaryText: null, secondaryContent: null, ratingCount: null };
    obj2.ratingCount = num2;
    obj5.accessibilityLabel = intl.formatToPlainString(util.t["/0p2sz"], obj2);
    obj5.primaryText = result;
    const obj6 = { fillAmounts: appStoreStarFillAmounts };
    obj5.secondaryContent = React5(AppStoreOverlayStarRatingDefault, obj6);
    obj5.ratingCount = result1;
    return obj5;
  } else if ("age" === type) {
    const obj7 = { accessibilityLabel: null, primaryText: null, secondaryText: null };
    const _HermesInternal3 = HermesInternal;
    obj7.accessibilityLabel = "" + stat.label + ", " + stat.ageRating;
    ({ ageRating: obj3.primaryText, ageRatingLabel: obj3.secondaryText } = stat);
    return obj7;
  } else if ("chart" === type) {
    const result2 = AppStoreOverlayStatCardUtils.formatAppStoreChartRank(stat.rank);
    if (null != stat.category) {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + stat.label + ", " + result2 + ", " + stat.category;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stat.label + ", " + result2;
    }
    const obj8 = { accessibilityLabel: combined, primaryText: result2, secondaryText: stat.category };
    return obj8;
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let closure_10 = 130 + nativeDefault.space.PX_16;
const createStyles = fn(5090);
let obj2 = { carousel: { marginHorizontal: -nativeDefault.space.PX_16 }, carouselContent: null, statCard: null, statCardExpanded: null, expandedCarouselContent: null, secondaryRow: null };
let obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj2.carouselContent = { gap: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
let size = { width: 130, height: 92, borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj2.statCard = size;
obj2.statCardExpanded = { flex: 1, minWidth: 0 };
let obj4 = { gap: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
obj2.expandedCarouselContent = { flexDirection: "row", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.secondaryRow = { height: nativeDefault.space.PX_16, justifyContent: "center" };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppStoreOverlayStatCardItem(arg0) {
  const cResult = c.c(28);
  ({ stat, expanded, onRatingPress } = arg0);
  let statCardExpanded = undefined !== expanded && expanded;
  const tmp4 = closure_11();
  if (cResult[0] !== stat) {
    const tmp7 = getStatCardContent(stat);
    cResult[0] = stat;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  ({ accessibilityLabel, primaryText, secondaryText, secondaryContent, ratingCount } = tmp5);
  let tmp8 = "rating" === stat.type;
  if (tmp8) {
    tmp8 = null != onRatingPress;
  }
  if (statCardExpanded) {
    statCardExpanded = tmp4.statCardExpanded;
  }
  if (cResult[2] === tmp4.statCard) {
    if (cResult[3] === statCardExpanded) {
      let tmp10 = cResult[4];
    }
    let str = "";
    if (null != ratingCount) {
      const _HermesInternal = HermesInternal;
      str = "(" + ratingCount + ")";
    }
    if (cResult[5] === stat.label) {
      if (cResult[6] === str) {
        let tmp13 = cResult[7];
      }
      if (cResult[8] !== primaryText) {
        const obj2 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, children: primaryText };
        const tmp18 = React5(Text_Text.Text, obj2);
        cResult[8] = primaryText;
        cResult[9] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] === secondaryContent) {
        if (cResult[11] === secondaryText) {
          if (cResult[12] === tmp4.secondaryRow) {
            let tmp19 = cResult[13];
          }
          if (cResult[14] === tmp13) {
            if (cResult[15] === tmp16) {
              if (cResult[16] === tmp19) {
                let tmp24 = cResult[17];
              }
              if (tmp8) {
                const _Symbol = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  let stringResult;
                  if (tmpResult.isIOS()) {
                    const intl = util.intl;
                    stringResult = intl.string(util.t.quJD0Y);
                  }
                  cResult[18] = stringResult;
                  let tmp33 = stringResult;
                  tmpResult = PlatformUtils;
                } else {
                  tmp33 = cResult[18];
                }
                if (cResult[19] === accessibilityLabel) {
                  if (cResult[20] === tmp24) {
                    if (cResult[21] === tmp10) {
                    }
                  }
                }
                const obj3 = { style: tmp10, onPress: onRatingPress, accessible: true, accessibilityRole: "button", accessibilityLabel, accessibilityHint: tmp33, children: tmp24 };
                const tmp38 = React5(React4, obj3);
                cResult[19] = accessibilityLabel;
                cResult[20] = tmp24;
                cResult[21] = tmp10;
                cResult[22] = onRatingPress;
                cResult[23] = tmp38;
              } else {
                if (cResult[24] === accessibilityLabel) {
                  if (cResult[25] === tmp24) {
                    if (cResult[26] === tmp10) {
                      let tmp28 = cResult[27];
                    }
                    return tmp28;
                  }
                }
                const obj4 = { style: tmp10, accessible: true, accessibilityRole: "text", accessibilityLabel, children: tmp24 };
                const tmp31 = React5(timestampProducer, obj4);
                cResult[24] = accessibilityLabel;
                cResult[25] = tmp24;
                cResult[26] = tmp10;
                cResult[27] = tmp31;
                tmp28 = tmp31;
              }
            }
          }
          const obj5 = { children: null };
          const items = [tmp13, tmp16, tmp19];
          obj5.children = items;
          const tmp27 = closure_1_8(options, obj5);
          cResult[14] = tmp13;
          cResult[15] = tmp16;
          cResult[16] = tmp19;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
      }
      let tmp21Result2 = null != secondaryContent || null != secondaryText;
      if (tmp21Result2) {
        const obj6 = { style: tmp4.secondaryRow, children: null };
        let tmp21Result = secondaryContent;
        if (null == secondaryContent) {
          const obj7 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: secondaryText };
          tmp21Result = React5(Text_Text.Text, obj7);
        }
        obj6.children = tmp21Result;
        tmp21Result2 = React5(timestampProducer, obj6);
      }
      cResult[10] = secondaryContent;
      cResult[11] = secondaryText;
      cResult[12] = tmp4.secondaryRow;
      cResult[13] = tmp21Result2;
      tmp19 = tmp21Result2;
    }
    const obj8 = { variant: "text-xs/semibold", color: "text-subtle", children: null };
    const items1 = [stat.label, " ", str];
    obj8.children = items1;
    const tmp15 = closure_1_8(Text_Text.Text, obj8);
    cResult[5] = stat.label;
    cResult[6] = str;
    cResult[7] = tmp15;
    tmp13 = tmp15;
  }
  const items2 = [tmp4.statCard, statCardExpanded];
  cResult[2] = tmp4.statCard;
  cResult[3] = statCardExpanded;
  cResult[4] = items2;
  tmp10 = items2;
}) : (function AppStoreOverlayStatCardItem(onRatingPress) {
  ({ stat, expanded } = onRatingPress);
  if (expanded === undefined) {
    expanded = false;
  }
  onRatingPress = onRatingPress.onRatingPress;
  const tmp = closure_11();
  const tmp2 = getStatCardContent(stat);
  ({ accessibilityLabel, secondaryText, secondaryContent, ratingCount } = tmp2);
  let tmp3 = "rating" === stat.type;
  if (tmp3) {
    tmp3 = null != onRatingPress;
  }
  const items = [tmp.statCard, ];
  if (expanded) {
    expanded = tmp.statCardExpanded;
  }
  items[1] = expanded;
  const items1 = [stat.label, " ", ];
  let str = "";
  if (null != ratingCount) {
    const _HermesInternal = HermesInternal;
    str = "(" + ratingCount + ")";
  }
  items1[2] = str;
  const items2 = [closure_1_8(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: items1 }), React5(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 1, children: tmp2.primaryText }), ];
  let tmp10Result = null != secondaryContent || null != secondaryText;
  if (tmp10Result) {
    const obj = { style: tmp.secondaryRow, children: null };
    if (null == secondaryContent) {
      const obj2 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: secondaryText };
      secondaryContent = React5(Text_Text.Text, obj2);
    }
    obj.children = secondaryContent;
    tmp10Result = React5(timestampProducer, obj);
  }
  items2[2] = tmp10Result;
  const tmp5Result = closure_1_8(options, { children: items2 });
  if (tmp3) {
    const obj3 = { style: items, onPress: onRatingPress, accessible: true, accessibilityRole: "button", accessibilityLabel, accessibilityHint: null, children: null };
    let stringResult;
    if (tmp7Result.isIOS()) {
      const intl = util.intl;
      stringResult = intl.string(util.t.quJD0Y);
    }
    obj3.accessibilityHint = stringResult;
    obj3.children = tmp5Result;
    let tmp10Result2 = React5(React4, obj3);
    tmp7Result = PlatformUtils;
  } else {
    const obj4 = { style: items, accessible: true, accessibilityRole: "text", accessibilityLabel, children: tmp5Result };
    tmp10Result2 = React5(timestampProducer, obj4);
  }
  return tmp10Result2;
});
ReactCompilerGating = fn(558);
let obj6 = { height: nativeDefault.space.PX_16, justifyContent: "center" };
size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStatsCarousel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppStoreOverlayStatsCarousel(onCarouselScroll) {
  const cResult = onRatingPress(576).c(34);
  ({ stats, onRatingPress } = onCarouselScroll);
  onCarouselScroll = onCarouselScroll.onCarouselScroll;
  closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disallowInterruption: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = onRatingPress(576);
  const nativeGesture = onRatingPress(6326).useNativeGesture(first);
  dependencyMap = length.useRef(0);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h() {
      closure_2.current = 0;
    };
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== stats.length) {
    const items = [length];
    cResult[2] = length;
    cResult[3] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[3];
  }
  const effect = length.useEffect(tmp8, tmp9);
  if (cResult[4] === stats.length) {
    if (cResult[5] === onCarouselScroll) {
      let tmp11 = cResult[6];
    }
    closure_4 = tmp11;
    if (cResult[7] !== tmp11) {
      class E {
        constructor(arg0) {
          velocity = onCarouselScroll.nativeEvent.velocity;
          num = undefined;
          if (velocity != null) {
            num = velocity.x;
          }
          if (num == null) {
            num = 0;
          }
          if (0 === num) {
            tmp = closure_4;
            tmp2 = closure_4(onCarouselScroll);
          }
          return;
        }
      }
      cResult[7] = tmp11;
      cResult[8] = E;
    } else {
      class E {
        constructor(arg0) {
          velocity = onCarouselScroll.nativeEvent.velocity;
          num = undefined;
          if (velocity != null) {
            num = velocity.x;
          }
          if (num == null) {
            num = 0;
          }
          if (0 === num) {
            tmp = closure_4;
            tmp2 = closure_4(onCarouselScroll);
          }
          return;
        }
      }
    }
    if (0 === stats.length) {
      class E {
        constructor(arg0) {
          velocity = onCarouselScroll.nativeEvent.velocity;
          num = undefined;
          if (velocity != null) {
            num = velocity.x;
          }
          if (num == null) {
            num = 0;
          }
          if (0 === num) {
            tmp = closure_4;
            tmp2 = closure_4(onCarouselScroll);
          }
          return;
        }
      }
      return null;
    } else {
      class E {
        constructor(arg0) {
          velocity = onCarouselScroll.nativeEvent.velocity;
          num = undefined;
          if (velocity != null) {
            num = velocity.x;
          }
          if (num == null) {
            num = 0;
          }
          if (0 === num) {
            tmp = closure_4;
            tmp2 = closure_4(onCarouselScroll);
          }
          return;
        }
      }
      if (tmp7) {
        class E {
          constructor(arg0) {
            velocity = onCarouselScroll.nativeEvent.velocity;
            num = undefined;
            if (velocity != null) {
              num = velocity.x;
            }
            if (num == null) {
              num = 0;
            }
            if (0 === num) {
              tmp = closure_4;
              tmp2 = closure_4(onCarouselScroll);
            }
            return;
          }
        }
        if (cResult[12] !== onRatingPress) {
          class E {
            constructor(arg0) {
              velocity = onCarouselScroll.nativeEvent.velocity;
              num = undefined;
              if (velocity != null) {
                num = velocity.x;
              }
              if (num == null) {
                num = 0;
              }
              if (0 === num) {
                tmp = closure_4;
                tmp2 = closure_4(onCarouselScroll);
              }
              return;
            }
          }
          cResult[12] = onRatingPress;
          cResult[13] = tmp17;
        } else {
          class E {
            constructor(arg0) {
              velocity = onCarouselScroll.nativeEvent.velocity;
              num = undefined;
              if (velocity != null) {
                num = velocity.x;
              }
              if (num == null) {
                num = 0;
              }
              if (0 === num) {
                tmp = closure_4;
                tmp2 = closure_4(onCarouselScroll);
              }
              return;
            }
          }
        }
        const mapped = stats.map(tmp17);
        cResult[9] = onRatingPress;
        cResult[10] = stats;
        cResult[11] = mapped;
      } else {
        class E {
          constructor(arg0) {
            velocity = onCarouselScroll.nativeEvent.velocity;
            num = undefined;
            if (velocity != null) {
              num = velocity.x;
            }
            if (num == null) {
              num = 0;
            }
            if (0 === num) {
              tmp = closure_4;
              tmp2 = closure_4(onCarouselScroll);
            }
            return;
          }
        }
        if (cResult[23] !== onRatingPress) {
          class G {
            constructor(arg0) {
              obj = { stat: onCarouselScroll, onRatingPress: null };
              tmp3 = undefined;
              tmp = jsx;
              tmp2 = AppStoreOverlayStatCardItem;
              if ("rating" === onCarouselScroll.type) {
                tmp3 = onRatingPress;
              }
              obj.onRatingPress = tmp3;
              return tmp(tmp2, obj, onCarouselScroll.type);
            }
          }
          cResult[23] = onRatingPress;
          cResult[24] = G;
        } else {
          class G {
            constructor(arg0) {
              obj = { stat: onCarouselScroll, onRatingPress: null };
              tmp3 = undefined;
              tmp = jsx;
              tmp2 = AppStoreOverlayStatCardItem;
              if ("rating" === onCarouselScroll.type) {
                tmp3 = onRatingPress;
              }
              obj.onRatingPress = tmp3;
              return tmp(tmp2, obj, onCarouselScroll.type);
            }
          }
        }
        const mapped1 = stats.map(G);
        cResult[20] = onRatingPress;
        cResult[21] = stats;
        cResult[22] = mapped1;
      }
    }
  }
  class R {
    constructor(arg0) {
      if (null != onCarouselScroll) {
        tmp3 = length;
        num = 1;
        if (length > 1) {
          tmp4 = onCarouselScroll;
          tmp5 = closure_10;
          tmp7 = globalThis;
          _Math = Math;
          diff = tmp3 - 1;
          _Math2 = Math;
          _Math3 = Math;
          num2 = 0;
          bound = Math.min(diff, Math.max(0, Math.round(onCarouselScroll.nativeEvent.contentOffset.x / closure_10)));
          current = closure_2.current;
          if (bound !== current) {
            tmpResult = { carouselType: null, scrollingDirection: null, carouselPosition: null, carouselSize: null };
            tmp2 = closure_0;
            HorizontalScrollingDirection = closure_2;
            tmpResult.carouselType = closure_0(closure_2[13]).AppStoreOverlayCarouselTypes.STATS;
            if (bound > current) {
              HorizontalScrollingDirection = tmp2(HorizontalScrollingDirection[14]).HorizontalScrollingDirection;
              LEFT = HorizontalScrollingDirection.RIGHT;
            } else {
              LEFT = tmp2(HorizontalScrollingDirection[14]).HorizontalScrollingDirection.LEFT;
            }
            tmpResult.scrollingDirection = LEFT;
            tmpResult.carouselPosition = bound;
            tmpResult.carouselSize = tmp3;
            tmpResult = tmp(tmpResult);
            tmp9.current = bound;
          }
        }
      }
      return;
    }
  }
  cResult[4] = stats.length;
  cResult[5] = onCarouselScroll;
  cResult[6] = R;
  tmp11 = R;
  tmp7 = stats.length <= 2;
  const tmpResult = onRatingPress(6326);
}) : (function AppStoreOverlayStatsCarousel(arg0) {
  ({ stats, onRatingPress: require, onCarouselScroll } = arg0);
  let length;
  let map = closure_11();
  const nativeGesture = LegacyBaseButton.useNativeGesture({ disallowInterruption: true });
  dependencyMap = length.useRef(0);
  length = stats.length;
  const items = [length];
  const effect = length.useEffect(() => {
    closure_2.current = 0;
  }, items);
  const items1 = [length, onCarouselScroll];
  const onMomentumScrollEnd = length.useCallback((nativeEvent) => {
    if (null != onCarouselScroll) {
      if (length > 1) {
        const _Math = Math;
        const diff = length - 1;
        const _Math2 = Math;
        const _Math3 = Math;
        const bound = Math.min(diff, Math.max(0, Math.round(nativeEvent.nativeEvent.contentOffset.x / closure_10)));
        const current = ref.current;
        if (bound !== current) {
          let obj = { carouselType: null, scrollingDirection: null, carouselPosition: null, carouselSize: null };
          let HorizontalScrollingDirection = dependencyMap;
          obj.carouselType = AnalyticsActions.AppStoreOverlayCarouselTypes.STATS;
          if (bound > current) {
            HorizontalScrollingDirection = AnalyticsTypes.HorizontalScrollingDirection;
            let LEFT = HorizontalScrollingDirection.RIGHT;
          } else {
            LEFT = AnalyticsTypes.HorizontalScrollingDirection.LEFT;
          }
          obj.scrollingDirection = LEFT;
          obj.carouselPosition = bound;
          obj.carouselSize = length;
          obj = tmp(obj);
          tmp9.current = bound;
        }
      }
    }
  }, items1);
  [][0] = onMomentumScrollEnd;
  if (0 === stats.length) {
    return null;
  } else if (tmp4) {
    const obj2 = { style: map.carousel, children: null };
    const obj4 = { style: map.expandedCarouselContent, children: null };
    map = stats.map;
    obj4.children = map((stat) => {
      const obj = { stat, expanded: true, onRatingPress: null };
      let tmp3;
      if ("rating" === stat.type) {
        tmp3 = _require;
      }
      obj.onRatingPress = tmp3;
      return React5(closure_13, obj, stat.type);
    });
    obj2.children = closure_7(closure_6, obj4);
    let tmp12Result = closure_7(closure_6, obj2);
  } else {
    const obj5 = { gesture: nativeGesture, children: null };
    const obj9 = { horizontal: true, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, onScrollEndDrag: null, onMomentumScrollEnd: null, children: null };
    ({ carousel: obj3.style, carouselContent: obj3.contentContainerStyle } = map);
    obj9.onScrollEndDrag = tmp7;
    obj9.onMomentumScrollEnd = onMomentumScrollEnd;
    obj9.children = stats.map((stat) => {
      const obj = { stat, onRatingPress: null };
      let tmp3;
      if ("rating" === stat.type) {
        tmp3 = _require;
      }
      obj.onRatingPress = tmp3;
      return React5(closure_13, obj, stat.type);
    });
    obj5.children = closure_7(closure_5, obj9);
    tmp12Result = closure_7(LegacyBaseButton.GestureDetector, obj5);
  }
  tmp4 = stats.length <= 2;
});