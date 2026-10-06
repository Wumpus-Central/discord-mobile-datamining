// === Module 10938: AppStoreOverlayStatsCarousel ===

// Module 10938 (AppStoreOverlayStatsCarousel)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Text_Text from "Text/Text" /* 4892 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6147 */;
import AnalyticsActions from "AnalyticsActions" /* 7215 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import AppStoreOverlayStatCardUtils from "AppStoreOverlayStatCardUtils" /* 10939 */;
import AppStoreOverlayStarRatingDefault from "AppStoreOverlayStarRating" /* 10940 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, tmp6, velocity;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
function getStatCardContent(stat) {
  let num2;
  const type = stat.type;
  if ("rating" === type) {
    let num = stat.maxRating;
    if (num == null) {
      num = 5;
    }
    const obj4 = AppStoreOverlayStatCardUtils;
    const result = obj4.formatAppStoreRatingValue(stat.rating, intl2.intl.currentLocale);
    let result1;
    if (null != stat.ratingCount) {
      const tmp11Result = AppStoreOverlayStatCardUtils;
      result1 = tmp11Result.formatAppStoreRatingCount(stat.ratingCount, intl2.intl.currentLocale);
    }
    const tmp11Result2 = AppStoreOverlayStatCardUtils;
    const appStoreStarFillAmounts = tmp11Result2.getAppStoreStarFillAmounts(stat.rating, num);
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj2 = { label: stat.label, rating: result, maxRating: num, ratingCount: num2 };
    num2 = stat.ratingCount;
    const prop = intl2.t["/0p2sz"];
    if (num2 == null) {
      num2 = 0;
    }
    const obj5 = { accessibilityLabel: formatToPlainString(prop, obj2), primaryText: result, secondaryContent: metroImportDefault(AppStoreOverlayStarRatingDefault, obj6), ratingCount: result1 };
    return obj5;
  } else if ("age" === type) {
    const _HermesInternal3 = HermesInternal;
    ({ ageRating: obj3.primaryText, ageRatingLabel: obj3.secondaryText } = stat);
    const obj7 = { accessibilityLabel: "" + stat.label + ", " + stat.ageRating, primaryText: null, secondaryText: null };
    return obj7;
  } else if ("chart" === type) {
    let combined;
    const obj = AppStoreOverlayStatCardUtils;
    const result2 = obj.formatAppStoreChartRank(stat.rank);
    if (null != stat.category) {
      const _HermesInternal2 = HermesInternal;
      combined = "" + stat.label + ", " + result2 + ", " + stat.category;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stat.label + ", " + result2;
    }
    return { accessibilityLabel: combined, primaryText: result2, secondaryText: stat.category };
  }
}
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = 130 + nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj = { carousel: obj2, carouselContent: obj3, statCard: size, statCardExpanded: { flex: 1, minWidth: 0 }, expandedCarouselContent: obj4, secondaryRow: obj5 };
obj2 = { marginHorizontal: -nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
size = { width: 130, height: 92, borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { height: nativeDefault.space.PX_16, justifyContent: "center" };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let expanded;
  let items;
  let items1;
  let onRatingPress;
  let primaryText;
  let ratingCount;
  let secondaryContent;
  let secondaryText;
  let stat;
  let tmp21Result;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(28);
  ({ stat, expanded, onRatingPress } = arg0);
  let statCardExpanded = undefined !== expanded && expanded;
  const tmp4 = closure_11();
  if (cResult[0] !== stat) {
    const tmp7 = getStatCardContent(stat);
    cResult[0] = stat;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  ({ accessibilityLabel, primaryText, secondaryText, secondaryContent, ratingCount } = tmp5);
  const tmp8 = "rating" === stat.type && null != onRatingPress;
  if (statCardExpanded) {
    statCardExpanded = tmp4.statCardExpanded;
  }
  if (cResult[2] === tmp4.statCard) {
    let tmp10;
    if (cResult[3] === statCardExpanded) {
      tmp10 = cResult[4];
    }
    let str = "";
    if (null != ratingCount) {
      const _HermesInternal = HermesInternal;
      str = "(" + ratingCount + ")";
    }
    if (cResult[5] === stat.label) {
      let tmp13;
      let tmp16;
      if (cResult[6] === str) {
        tmp13 = cResult[7];
      }
      if (cResult[8] !== primaryText) {
        const obj2 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, children: primaryText };
        const tmp18 = metroImportDefault(Text_Text.Text, obj2);
        cResult[8] = primaryText;
        cResult[9] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[9];
      }
      if (cResult[10] === secondaryContent) {
        if (cResult[11] === secondaryText) {
          let tmp19;
          if (cResult[12] === tmp4.secondaryRow) {
            tmp19 = cResult[13];
          }
          if (cResult[14] === tmp13) {
            if (cResult[15] === tmp16) {
              let tmp24;
              let tmp28;
              if (cResult[16] === tmp19) {
                tmp24 = cResult[17];
              }
              if (tmp8) {
                let tmp33;
                const _Symbol = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  let stringResult;
                  const tmpResult = PlatformUtils;
                  if (tmpResult.isIOS()) {
                    const intl = intl2.intl;
                    stringResult = intl.string(intl2.t.quJD0Y);
                  }
                  cResult[18] = stringResult;
                  tmp33 = stringResult;
                } else {
                  tmp33 = cResult[18];
                }
                if (cResult[19] === accessibilityLabel) {
                  if (cResult[20] === tmp24) {
                    if (cResult[21] === tmp10) {
                      let tmp35;
                      if (cResult[22] === onRatingPress) {
                        tmp35 = cResult[23];
                      }
                      tmp28 = tmp35;
                    }
                  }
                }
                const obj3 = { style: tmp10, onPress: onRatingPress, accessible: true, accessibilityRole: "button", accessibilityLabel, accessibilityHint: tmp33, children: tmp24 };
                const tmp38 = metroImportDefault(React3, obj3);
                cResult[19] = accessibilityLabel;
                cResult[20] = tmp24;
                cResult[21] = tmp10;
                cResult[22] = onRatingPress;
                cResult[23] = tmp38;
                tmp35 = tmp38;
              } else {
                if (cResult[24] === accessibilityLabel) {
                  if (cResult[25] === tmp24) {
                    if (cResult[26] === tmp10) {
                      tmp28 = cResult[27];
                    }
                  }
                }
                const obj4 = { style: tmp10, accessible: true, accessibilityRole: "text", accessibilityLabel, children: tmp24 };
                const tmp31 = metroImportDefault(metroRequire, obj4);
                cResult[24] = accessibilityLabel;
                cResult[25] = tmp24;
                cResult[26] = tmp10;
                cResult[27] = tmp31;
                tmp28 = tmp31;
              }
              return tmp28;
            }
          }
          const obj5 = { children: items };
          items = [tmp13, tmp16, tmp19];
          const tmp27 = metroImportAll(React4, obj5);
          cResult[14] = tmp13;
          cResult[15] = tmp16;
          cResult[16] = tmp19;
          cResult[17] = tmp27;
          tmp24 = tmp27;
        }
      }
      let tmp21Result2 = null != secondaryContent || null != secondaryText;
      if (tmp21Result2) {
        const obj6 = { style: tmp4.secondaryRow, children: tmp21Result };
        tmp21Result = secondaryContent;
        if (null == secondaryContent) {
          const obj7 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: secondaryText };
          tmp21Result = metroImportDefault(Text_Text.Text, obj7);
        }
        tmp21Result2 = metroImportDefault(metroRequire, obj6);
      }
      cResult[10] = secondaryContent;
      cResult[11] = secondaryText;
      cResult[12] = tmp4.secondaryRow;
      cResult[13] = tmp21Result2;
      tmp19 = tmp21Result2;
    }
    const obj8 = { variant: "text-xs/semibold", color: "text-subtle", children: items1 };
    items1 = [stat.label, " ", str];
    const tmp15 = metroImportAll(Text_Text.Text, obj8);
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
}) : ((onRatingPress) => {
  let accessibilityLabel;
  let expanded;
  let ratingCount;
  let secondaryContent;
  let secondaryText;
  let stat;
  let stringResult;
  let tmp10Result2;
  ({ stat, expanded } = onRatingPress);
  if (expanded === undefined) {
    expanded = false;
  }
  onRatingPress = onRatingPress.onRatingPress;
  const tmp = closure_11();
  const tmp2 = getStatCardContent(stat);
  ({ accessibilityLabel, secondaryText, secondaryContent, ratingCount } = tmp2);
  let tmp3 = "rating" === stat.type;
  const primaryText = tmp2.primaryText;
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
  const Text = Text_Text.Text;
  if (null != ratingCount) {
    const _HermesInternal = HermesInternal;
    str = "(" + ratingCount + ")";
  }
  items1[2] = str;
  const items2 = [metroImportAll(Text, { variant: "text-xs/semibold", color: "text-subtle", children: items1 }), metroImportDefault(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 1, children: primaryText }), ];
  let tmp10Result = null != secondaryContent || null != secondaryText;
  if (tmp10Result) {
    const obj = { style: tmp.secondaryRow, children: secondaryContent };
    if (null == secondaryContent) {
      const obj2 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: secondaryText };
      secondaryContent = metroImportDefault(Text_Text.Text, obj2);
    }
    tmp10Result = metroImportDefault(metroRequire, obj);
  }
  items2[2] = tmp10Result;
  const tmp5Result = metroImportAll(React4, { children: items2 });
  if (tmp3) {
    const obj3 = { style: items, onPress: onRatingPress, accessible: true, accessibilityRole: "button", accessibilityLabel, accessibilityHint: stringResult, children: tmp5Result };
    stringResult = undefined;
    const tmp7Result = PlatformUtils;
    if (tmp7Result.isIOS()) {
      const intl = intl2.intl;
      stringResult = intl.string(intl2.t.quJD0Y);
    }
    tmp10Result2 = metroImportDefault(React3, obj3);
  } else {
    const obj4 = { style: items, accessible: true, accessibilityRole: "text", accessibilityLabel, children: tmp5Result };
    tmp10Result2 = metroImportDefault(metroRequire, obj4);
  }
  return tmp10Result2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onCarouselScroll) => {
  let closure_4;
  let first;
  let length;
  let onRatingPress;
  let ref;
  let stats;
  let obj = onRatingPress(576);
  const cResult = obj.c(34);
  ({ stats, onRatingPress } = onCarouselScroll);
  onCarouselScroll = onCarouselScroll.onCarouselScroll;
  closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disallowInterruption: true };
    let num = 0;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = onRatingPress(6147);
  const nativeGesture = tmpResult.useNativeGesture(first);
  const tmp7 = stats.length <= 2;
  dependencyMap = length.useRef(0);
  const obj4 = length;
  length = stats.length;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        closure_2.current = 0;
        return;
      }
    }
    cResult[1] = S;
  } else {
    class S {
      constructor() {
        closure_2.current = 0;
        return;
      }
    }
  }
  if (cResult[2] !== length) {
    class S {
      constructor() {
        closure_2.current = 0;
        return;
      }
    }
    tmp10[0] = length;
    cResult[2] = length;
    cResult[3] = tmp10;
  } else {
    class S {
      constructor() {
        closure_2.current = 0;
        return;
      }
    }
  }
  const effect = obj4.useEffect(S, tmp10);
  if (cResult[4] === length) {
    class S {
      constructor() {
        closure_2.current = 0;
        return;
      }
    }
    if (cResult[7] !== R) {
      class A {
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
      cResult[7] = R;
      cResult[8] = A;
    } else {
      class A {
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
      class A {
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
      class A {
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
        class A {
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
          class A {
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
          cResult[13] = tmp19;
        } else {
          class A {
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
        const mapped = stats.map(tmp19);
        cResult[9] = onRatingPress;
        cResult[10] = stats;
        cResult[11] = mapped;
      } else {
        class A {
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
              tmp2 = f56362;
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
              tmp2 = f56362;
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
        tmp5 = length;
        num = 1;
        if (length > 1) {
          tmp6 = onCarouselScroll;
          tmp7 = closure_10;
          tmp9 = globalThis;
          _Math = Math;
          diff = tmp5 - 1;
          _Math2 = Math;
          _Math3 = Math;
          num2 = 0;
          bound = Math.min(diff, Math.max(0, Math.round(onCarouselScroll.nativeEvent.contentOffset.x / closure_10)));
          current = closure_2.current;
          if (bound !== current) {
            obj = { carouselType: null, scrollingDirection: null, carouselPosition: null, carouselSize: null };
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj.carouselType = closure_0(closure_2[13]).AppStoreOverlayCarouselTypes.STATS;
            if (bound > current) {
              LEFT = tmp2(tmp3[14]).HorizontalScrollingDirection.RIGHT;
            } else {
              LEFT = tmp2(tmp3[14]).HorizontalScrollingDirection.LEFT;
            }
            obj.scrollingDirection = LEFT;
            obj.carouselPosition = bound;
            obj.carouselSize = tmp5;
            tmpResult = tmp(obj);
            tmp11.current = bound;
          }
        }
      }
      return;
    }
  }
  cResult[4] = length;
  cResult[5] = onCarouselScroll;
  cResult[6] = R;
}) : ((arg0) => {
  let obj4;
  let obj9;
  let onCarouselScroll;
  let ref;
  let require;
  let stats;
  ({ stats, onRatingPress: require, onCarouselScroll } = arg0);
  dependencyMap = undefined;
  let length;
  const tmp = closure_11();
  let tmp3 = dependencyMap;
  let obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  const tmp5 = stats.length <= 2;
  dependencyMap = length.useRef(0);
  length = stats.length;
  const items = [length];
  const effect = length.useEffect(() => {
    ref.current = 0;
  }, items);
  const items1 = [length, onCarouselScroll];
  const onMomentumScrollEnd = length.useCallback((nativeEvent) => {
    let LEFT;
    if (null != onCarouselScroll) {
      if (length > 1) {
        const _Math = Math;
        const diff = length - 1;
        const _Math2 = Math;
        const _Math3 = Math;
        const bound = Math.min(diff, Math.max(0, Math.round(nativeEvent.nativeEvent.contentOffset.x / closure_10)));
        const current = ref.current;
        if (bound !== current) {
          const obj = { carouselType: AnalyticsActions.AppStoreOverlayCarouselTypes.STATS, scrollingDirection: LEFT, carouselPosition: bound, carouselSize: length };
          if (bound > current) {
            LEFT = AnalyticsTypes.HorizontalScrollingDirection.RIGHT;
          } else {
            LEFT = AnalyticsTypes.HorizontalScrollingDirection.LEFT;
          }
          tmp(obj);
          tmp11.current = bound;
        }
      }
    }
  }, items1);
  [][0] = onMomentumScrollEnd;
  let tmp9 = null;
  if (0 !== stats.length) {
    let tmp13Result;
    if (tmp5) {
      const obj2 = { style: tmp.carousel, children: closure_7(closure_6, obj4) };
      obj4 = {
        style: tmp.expandedCarouselContent,
        children: stats.map((stat) => {
              let tmp3;
              const obj = { stat, expanded: true, onRatingPress: tmp3 };
              tmp3 = undefined;
              if ("rating" === stat.type) {
                tmp3 = _require;
              }
              return metroImportDefault(closure_13, obj, stat.type);
            })
      };
      tmp13Result = closure_7(closure_6, obj2);
    } else {
      const obj5 = { gesture: nativeGesture, children: closure_7(closure_5, obj9) };
      ({ carousel: obj3.style, carouselContent: obj3.contentContainerStyle } = tmp);
      obj9 = {
        horizontal: true,
        nestedScrollEnabled: true,
        showsHorizontalScrollIndicator: false,
        style: null,
        contentContainerStyle: null,
        onScrollEndDrag: tmp8,
        onMomentumScrollEnd,
        children: stats.map((stat) => {
              let tmp3;
              const obj = { stat, onRatingPress: tmp3 };
              tmp3 = undefined;
              if ("rating" === stat.type) {
                tmp3 = _require;
              }
              return metroImportDefault(closure_13, obj, stat.type);
            })
      };
      const GestureDetector = LegacyBaseButton.GestureDetector;
      tmp13Result = closure_7(GestureDetector, obj5);
    }
    tmp9 = tmp13Result;
  }
  return tmp9;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStatsCarousel.tsx");

export default tmp5;