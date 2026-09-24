// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayStatsCarousel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LegacyBaseButton from "../../../../../_runtime/06985_LegacyBaseButton.js";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import AppStoreOverlayStatCardUtils from "AppStoreOverlayStatCardUtils.tsx";
import AppStoreOverlayStarRatingDefault from "AppStoreOverlayStarRating.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function AppStoreOverlayStatCardItem(onRatingPress) {
  ({ stat, expanded } = onRatingPress);
  if (expanded === undefined) {
    expanded = false;
  }
  onRatingPress = onRatingPress.onRatingPress;
  const tmp = closure_11();
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
      const tmp9Result = AppStoreOverlayStatCardUtils;
    }
    const appStoreStarFillAmounts = AppStoreOverlayStatCardUtils.getAppStoreStarFillAmounts(stat.rating, num);
    const intl = util.intl;
    const obj4 = { label: stat.label, rating: result, maxRating: num, ratingCount: null };
    let num2 = stat.ratingCount;
    if (num2 == null) {
      num2 = 0;
    }
    const obj5 = { accessibilityLabel: null, primaryText: null, secondaryContent: null, ratingCount: null };
    obj4.ratingCount = num2;
    obj5.accessibilityLabel = intl.formatToPlainString(util.t["/0p2sz"], obj4);
    obj5.primaryText = result;
    const obj6 = { fillAmounts: appStoreStarFillAmounts };
    obj5.secondaryContent = React5(AppStoreOverlayStarRatingDefault, obj6);
    obj5.ratingCount = result1;
    let tmp6 = obj5;
    const tmp9Result2 = AppStoreOverlayStatCardUtils;
  } else if ("age" === type) {
    const obj7 = { accessibilityLabel: null, primaryText: null, secondaryText: null };
    const _HermesInternal3 = HermesInternal;
    obj7.accessibilityLabel = "" + stat.label + ", " + stat.ageRating;
    ({ ageRating: obj2.primaryText, ageRatingLabel: obj2.secondaryText } = stat);
    tmp6 = obj7;
  } else if ("chart" === type) {
    const result2 = AppStoreOverlayStatCardUtils.formatAppStoreChartRank(stat.rank);
    if (null != stat.category) {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + stat.label + ", " + result2 + ", " + stat.category;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stat.label + ", " + result2;
    }
    const obj = { accessibilityLabel: combined, primaryText: result2, secondaryText: stat.category };
    tmp6 = obj;
  }
  ({ accessibilityLabel, secondaryText, secondaryContent, ratingCount } = tmp6);
  let tmp16 = "rating" === stat.type;
  if (tmp16) {
    tmp16 = null != onRatingPress;
  }
  const items = [tmp.statCard];
  if (expanded) {
    expanded = tmp.statCardExpanded;
  }
  items[1] = expanded;
  const items1 = [stat.label, " "];
  let str9 = "";
  if (null != ratingCount) {
    const _HermesInternal4 = HermesInternal;
    str9 = "(" + ratingCount + ")";
  }
  items1[2] = str9;
  const items2 = [
    React6(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: items1 }),
    React5(Text_Text.Text, {
      variant: "text-md/semibold",
      color: "text-default",
      lineClamp: 1,
      children: tmp6.primaryText,
    }),
  ];
  let tmp23Result = null != secondaryContent || null != secondaryText;
  if (tmp23Result) {
    const obj8 = { style: tmp.secondaryRow, children: null };
    if (null == secondaryContent) {
      const obj9 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: secondaryText };
      secondaryContent = React5(Text_Text.Text, obj9);
    }
    obj8.children = secondaryContent;
    tmp23Result = React5(timestampProducer, obj8);
  }
  items2[2] = tmp23Result;
  const tmp18Result = React6(React7, { children: items2 });
  if (tmp16) {
    const obj10 = {
      style: items,
      onPress: onRatingPress,
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel,
      accessibilityHint: null,
      children: null,
    };
    let stringResult;
    if (tmp20Result.isIOS()) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.quJD0Y);
    }
    obj10.accessibilityHint = stringResult;
    obj10.children = tmp18Result;
    let tmp23Result2 = React5(React4, obj10);
    tmp20Result = PlatformUtils;
  } else {
    const obj11 = {
      style: items,
      accessible: true,
      accessibilityRole: "text",
      accessibilityLabel,
      children: tmp18Result,
    };
    tmp23Result2 = React5(timestampProducer, obj11);
  }
  return tmp23Result2;
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let closure_10 = 130 + nativeDefault.space.PX_16;
const createStyles = fn(4829);
let obj2 = {
  carousel: { marginHorizontal: -nativeDefault.space.PX_16 },
  carouselContent: null,
  statCard: null,
  statCardExpanded: null,
  expandedCarouselContent: null,
  secondaryRow: null,
};
let obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj2.carouselContent = {
  gap: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_16,
  paddingRight: nativeDefault.space.PX_16,
};
let size = {
  width: 130,
  height: 92,
  borderRadius: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
};
obj2.statCard = size;
obj2.statCardExpanded = { flex: 1, minWidth: 0 };
let obj4 = {
  gap: nativeDefault.space.PX_16,
  paddingLeft: nativeDefault.space.PX_16,
  paddingRight: nativeDefault.space.PX_16,
};
obj2.expandedCarouselContent = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
};
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.secondaryRow = { height: nativeDefault.space.PX_16, justifyContent: "center" };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStatsCarousel.tsx");

export default function AppStoreOverlayStatsCarousel(arg0) {
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
        tmp3 = require;
      }
      obj.onRatingPress = tmp3;
      return React5(AppStoreOverlayStatCardItem, obj, stat.type);
    });
    obj2.children = closure_7(closure_6, obj4);
    let tmp12Result = closure_7(closure_6, obj2);
  } else {
    const obj5 = { gesture: nativeGesture, children: null };
    const obj9 = {
      horizontal: true,
      nestedScrollEnabled: true,
      showsHorizontalScrollIndicator: false,
      style: null,
      contentContainerStyle: null,
      onScrollEndDrag: null,
      onMomentumScrollEnd: null,
      children: null,
    };
    ({ carousel: obj3.style, carouselContent: obj3.contentContainerStyle } = map);
    obj9.onScrollEndDrag = tmp7;
    obj9.onMomentumScrollEnd = onMomentumScrollEnd;
    obj9.children = stats.map((stat) => {
      const obj = { stat, onRatingPress: null };
      let tmp3;
      if ("rating" === stat.type) {
        tmp3 = require;
      }
      obj.onRatingPress = tmp3;
      return React5(AppStoreOverlayStatCardItem, obj, stat.type);
    });
    obj5.children = closure_7(closure_5, obj9);
    tmp12Result = closure_7(LegacyBaseButton.GestureDetector, obj5);
  }
  tmp4 = stats.length <= 2;
}
