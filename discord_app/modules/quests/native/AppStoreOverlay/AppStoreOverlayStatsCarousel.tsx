// === Module 11503: AppStoreOverlayStatsCarousel ===

// Module 11503 (AppStoreOverlayStatsCarousel)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import AppStoreOverlayStatCardUtils from "AppStoreOverlayStatCardUtils" /* 11504 */;
import AppStoreOverlayStarRatingDefault from "AppStoreOverlayStarRating" /* 11505 */;
import noop from "module_19" /* 19 */;

require = fn;
function AppStoreOverlayStatCardItem(onRatingPress) {
  ({ stat, expanded } = onRatingPress);
  if (expanded === undefined) {
    expanded = false;
  }
  onRatingPress = onRatingPress.onRatingPress;
  const tmp = closure_9();
  const type = stat.type;
  if ("rating" === type) {
    let num = stat.maxRating;
    if (num == null) {
      num = 5;
    }
    let obj2 = AppStoreOverlayStatCardUtils;
    const result = obj2.formatAppStoreRatingValue(stat.rating, util.intl.currentLocale);
    let result1;
    if (null != stat.ratingCount) {
      let tmp9Result = tmp9(11504);
      result1 = tmp9Result.formatAppStoreRatingCount(stat.ratingCount, tmp9(1114).intl.currentLocale);
    }
    tmp9Result = tmp9(11504);
    const appStoreStarFillAmounts = tmp9Result.getAppStoreStarFillAmounts(stat.rating, num);
    const intl = tmp9(1114).intl;
    let obj = { label: stat.label, rating: result, maxRating: num, ratingCount: null };
    let num2 = stat.ratingCount;
    if (num2 == null) {
      num2 = 0;
    }
    obj = { accessibilityLabel: null, primaryText: null, secondaryContent: null, ratingCount: num2 };
    obj.accessibilityLabel = intl.formatToPlainString(util.t["/0p2sz"], obj);
    obj.primaryText = result;
    const obj1 = { fillAmounts: appStoreStarFillAmounts };
    obj.secondaryContent = timestampProducer(AppStoreOverlayStarRatingDefault, obj1);
    obj.ratingCount = result1;
    let tmp6 = obj;
  } else if ("age" === type) {
    obj2 = { accessibilityLabel: null, primaryText: null, secondaryText: null };
    const _HermesInternal3 = HermesInternal;
    obj2.accessibilityLabel = "" + stat.label + ", " + stat.ageRating;
    ({ ageRating: obj2.primaryText, ageRatingLabel: obj2.secondaryText } = stat);
    tmp6 = obj2;
  } else if ("chart" === type) {
    const result2 = AppStoreOverlayStatCardUtils.formatAppStoreChartRank(stat.rank);
    if (null != stat.category) {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + stat.label + ", " + result2 + ", " + stat.category;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stat.label + ", " + result2;
    }
    obj = { accessibilityLabel: combined, primaryText: result2, secondaryText: stat.category };
    tmp6 = obj;
  }
  ({ accessibilityLabel, secondaryText, secondaryContent, ratingCount } = tmp6);
  let tmp16 = "rating" === stat.type;
  if (tmp16) {
    tmp16 = null != onRatingPress;
  }
  const items = [tmp.statCard, ];
  if (expanded) {
    expanded = tmp.statCardExpanded;
  }
  items[1] = expanded;
  const items1 = [stat.label, " ", ];
  let str9 = "";
  if (null != ratingCount) {
    const _HermesInternal4 = HermesInternal;
    str9 = "(" + ratingCount + ")";
  }
  items1[2] = str9;
  const items2 = [React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: items1 }), timestampProducer(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 1, children: tmp6.primaryText }), ];
  let tmp23Result = null != secondaryContent || null != secondaryText;
  if (tmp23Result) {
    const obj3 = { style: tmp.secondaryRow, children: null };
    if (null == secondaryContent) {
      const obj4 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: secondaryText };
      secondaryContent = tmp23(tmp20(4556).Text, obj4);
    }
    obj3.children = secondaryContent;
    tmp23Result = tmp23(hasOwnProperty, obj3);
  }
  items2[2] = tmp23Result;
  const tmp18Result = React5(React6, { children: items2 });
  if (tmp16) {
    const obj5 = { style: items, onPress: onRatingPress, accessible: true, accessibilityRole: "button", accessibilityLabel, accessibilityHint: null, children: null };
    let stringResult;
    if (tmp20Result.isIOS()) {
      const intl2 = tmp20(1114).intl;
      stringResult = intl2.string(tmp20(1114).t.quJD0Y);
    }
    obj5.accessibilityHint = stringResult;
    obj5.children = tmp18Result;
    tmp23Result = tmp23(React3, obj5);
    tmp20Result = tmp20(1115);
  } else {
    const obj6 = { style: items, accessible: true, accessibilityRole: "text", accessibilityLabel, children: tmp18Result };
    tmp23Result = tmp23(hasOwnProperty, obj6);
  }
  return tmp23Result;
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
fn(4560);
let createStyles = { carousel: null, carouselContent: null, statCard: null, statCardExpanded: null, expandedCarouselContent: null, secondaryRow: null };
createStyles = { marginHorizontal: -nativeDefault.space.PX_16 };
createStyles.carousel = createStyles;
createStyles.carouselContent = { gap: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
let size = { width: 130, height: 92, borderRadius: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
createStyles.statCard = size;
createStyles.statCardExpanded = { flex: 1, minWidth: 0 };
let obj1 = { gap: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_16, paddingRight: nativeDefault.space.PX_16 };
createStyles.expandedCarouselContent = { flexDirection: "row", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
let obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.secondaryRow = { height: nativeDefault.space.PX_16, justifyContent: "center" };
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStatsCarousel.tsx");

export default function AppStoreOverlayStatsCarousel(arg0) {
  ({ stats, onRatingPress: require } = arg0);
  let map = closure_9();
  LegacyBaseButton;
  if (0 === stats.length) {
    return null;
  } else if (tmp5) {
    let obj = { style: map.carousel, children: null };
    obj = { style: map.expandedCarouselContent, children: null };
    map = stats.map;
    obj.children = map((stat) => {
      const obj = { stat, expanded: true, onRatingPress: null };
      let tmp3;
      if ("rating" === stat.type) {
        tmp3 = require;
      }
      obj.onRatingPress = tmp3;
      return timestampProducer(AppStoreOverlayStatCardItem, obj, stat.type);
    });
    obj.children = tmp10(closure_5, obj);
    let tmp10Result = tmp10(closure_5, obj);
  } else {
    obj = { gesture: tmp4, children: null };
    const obj1 = { horizontal: true, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, children: null };
    ({ carousel: obj2.style, carouselContent: obj2.contentContainerStyle } = map);
    obj1.children = stats.map((stat) => {
      const obj = { stat, onRatingPress: null };
      let tmp3;
      if ("rating" === stat.type) {
        tmp3 = require;
      }
      obj.onRatingPress = tmp3;
      return timestampProducer(AppStoreOverlayStatCardItem, obj, stat.type);
    });
    obj.children = tmp10(closure_4, obj1);
    tmp10Result = tmp10(LegacyBaseButton.GestureDetector, obj);
  }
};