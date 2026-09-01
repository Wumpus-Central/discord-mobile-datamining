// === Module 11102: AppStoreOverlayStatCardItem ===

// Module 11102 (AppStoreOverlayStatCardItem)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4474 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5652 */;
import formatAppStoreRatingValue from "formatAppStoreRatingValue" /* 11103 */;
import FractionalStarDefault from "FractionalStar" /* 11104 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function AppStoreOverlayStatCardItem(onRatingPress) {
  ({ stat, expanded } = onRatingPress);
  if (expanded === undefined) {
    expanded = false;
  }
  onRatingPress = onRatingPress.onRatingPress;
  const tmp = callback2();
  const type = stat.type;
  if ("rating" === type) {
    let num = stat.maxRating;
    if (num == null) {
      num = 5;
    }
    let obj2 = formatAppStoreRatingValue;
    const result = obj2.formatAppStoreRatingValue(stat.rating, getSystemLocale.intl.currentLocale);
    let result1;
    if (null != stat.ratingCount) {
      let tmp9Result = tmp9(11103);
      result1 = tmp9Result.formatAppStoreRatingCount(stat.ratingCount, tmp9(1236).intl.currentLocale);
    }
    tmp9Result = tmp9(11103);
    const appStoreStarFillAmounts = tmp9Result.getAppStoreStarFillAmounts(stat.rating, num);
    const intl = tmp9(1236).intl;
    let obj = { label: null, rating: null, maxRating: null, ratingCount: null };
    obj[0] = stat.label;
    obj[1] = result;
    obj[2] = num;
    let num2 = stat.ratingCount;
    if (num2 == null) {
      num2 = 0;
    }
    obj = { accessibilityLabel: null, primaryText: null, secondaryContent: null, ratingCount: null };
    obj[3] = num2;
    obj[0] = intl.formatToPlainString(getSystemLocale.t["/0p2sz"], obj);
    obj[1] = result;
    obj1 = { fillAmounts: null };
    obj1[0] = appStoreStarFillAmounts;
    obj[2] = callback(FractionalStarDefault, obj1);
    obj[3] = result1;
    let tmp6 = obj;
  } else if ("age" === type) {
    obj2 = { accessibilityLabel: null, primaryText: null, secondaryText: null };
    const _HermesInternal3 = HermesInternal;
    obj2[0] = "" + stat.label + ", " + stat.ageRating;
    ({ ageRating: obj2[1], ageRatingLabel: obj2[2] } = stat);
    tmp6 = obj2;
  } else if ("chart" === type) {
    const result2 = formatAppStoreRatingValue.formatAppStoreChartRank(stat.rank);
    if (null != stat.category) {
      const _HermesInternal2 = HermesInternal;
      let combined = "" + stat.label + ", " + result2 + ", " + stat.category;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stat.label + ", " + result2;
    }
    obj = { accessibilityLabel: null, primaryText: null, secondaryText: null };
    obj[0] = combined;
    obj[1] = result2;
    obj[2] = stat.category;
    tmp6 = obj;
    const obj14 = formatAppStoreRatingValue;
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
  const items2 = [closure_7(Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: items1 }), callback(Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 1, children: tmp6.primaryText }), ];
  let tmp23Result = null != secondaryContent || null != secondaryText;
  if (tmp23Result) {
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.secondaryRow;
    if (null == secondaryContent) {
      const obj4 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: null };
      obj4[3] = secondaryText;
      secondaryContent = tmp23(tmp20(4474).Text, obj4);
    }
    obj3[1] = secondaryContent;
    tmp23Result = tmp23(closure_5, obj3);
    const tmp25 = closure_5;
  }
  items2[2] = tmp23Result;
  const tmp18Result = closure_7(closure_8, { children: items2 });
  if (tmp16) {
    const obj5 = { style: null, onPress: null, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, children: null };
    obj5[0] = items;
    obj5[1] = onRatingPress;
    obj5[4] = accessibilityLabel;
    let stringResult;
    if (tmp20Result.isIOS()) {
      const intl2 = tmp20(1236).intl;
      stringResult = intl2.string(tmp20(1236).t.quJD0Y);
    }
    obj5[5] = stringResult;
    obj5[6] = tmp18Result;
    tmp23Result = tmp23(closure_3, obj5);
    tmp20Result = tmp20(500);
    const tmp29 = closure_3;
  } else {
    const obj6 = { style: null, accessible: true, accessibilityRole: "text", accessibilityLabel: null, children: null };
    obj6[0] = items;
    obj6[3] = accessibilityLabel;
    obj6[4] = tmp18Result;
    tmp23Result = tmp23(closure_5, obj6);
  }
  return tmp23Result;
}
noopAll;
({ Pressable: c3, ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
createCacheKey = { carousel: null, carouselContent: null, statCard: null, statCardExpanded: null, expandedCarouselContent: null, secondaryRow: null };
createCacheKey = { marginHorizontal: -ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: ThemesDefault.space.PX_16, paddingLeft: ThemesDefault.space.PX_16, paddingRight: ThemesDefault.space.PX_16 };
let obj1 = { gap: ThemesDefault.space.PX_16, paddingLeft: ThemesDefault.space.PX_16, paddingRight: ThemesDefault.space.PX_16 };
createCacheKey[2] = { width: 130, height: 92, borderRadius: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_8 };
createCacheKey[3] = { flex: 1, minWidth: 0 };
let obj2 = { width: 130, height: 92, borderRadius: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_8 };
createCacheKey[4] = { flexDirection: "row", gap: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
let obj3 = { flexDirection: "row", gap: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[5] = { height: ThemesDefault.space.PX_16, justifyContent: "center" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj4 = { height: ThemesDefault.space.PX_16, justifyContent: "center" };
let result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStatsCarousel.tsx");

export default function AppStoreOverlayStatsCarousel(arg0) {
  ({ stats, onRatingPress: require } = arg0);
  let map = callback2();
  LegacyBaseButton;
  if (0 === stats.length) {
    return null;
  } else if (tmp5) {
    let obj = { style: null, children: null };
    obj[0] = map.carousel;
    obj = { style: null, children: null };
    obj[0] = map.expandedCarouselContent;
    map = stats.map;
    obj[1] = map((stat) => {
      const obj = { stat, expanded: true, onRatingPress: null };
      let tmp3;
      if ("rating" === stat.type) {
        tmp3 = closure_0;
      }
      obj[2] = tmp3;
      return closure_1_6(closure_1_10, obj, stat.type);
    });
    obj[1] = tmp10(closure_5, obj);
    let tmp10Result = tmp10(closure_5, obj);
  } else {
    obj = { gesture: null, children: null };
    obj[0] = tmp4;
    obj1 = { horizontal: true, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, children: null };
    ({ carousel: obj2[3], carouselContent: obj2[4] } = map);
    obj1[5] = stats.map((stat) => {
      const obj = { stat, onRatingPress: null };
      let tmp3;
      if ("rating" === stat.type) {
        tmp3 = closure_0;
      }
      obj[1] = tmp3;
      return closure_1_6(closure_1_10, obj, stat.type);
    });
    obj[1] = tmp10(closure_4, obj1);
    tmp10Result = tmp10(LegacyBaseButton.GestureDetector, obj);
  }
};