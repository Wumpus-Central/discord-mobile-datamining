// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayStatsCarousel.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { FractionalStar } from "AppStoreOverlayStarRating.tsx";
import { formatAppStoreRatingValue } from "AppStoreOverlayStatCardUtils.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
function AppStoreOverlayStatCardItem(stat) {
  let ratingCount;
  let secondaryContent;
  let secondaryText;
  stat = stat.stat;
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
      let tmp9Result = tmp9(10554);
      result1 = tmp9Result.formatAppStoreRatingCount(stat.ratingCount, tmp9(1236).intl.currentLocale);
    }
    tmp9Result = tmp9(10554);
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
    const obj1 = { fillAmounts: null };
    obj1[0] = appStoreStarFillAmounts;
    obj[2] = callback(FractionalStar, obj1);
    obj[3] = result1;
    let tmp6 = obj;
  } else if ("age" === type) {
    obj2 = { accessibilityLabel: null, primaryText: null };
    const _HermesInternal3 = HermesInternal;
    obj2[0] = "" + stat.label + ", " + stat.ageRating;
    obj2[1] = stat.ageRating;
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
    const obj11 = formatAppStoreRatingValue;
  }
  ({ secondaryText, secondaryContent, ratingCount } = tmp6);
  const obj3 = { style: createCacheKey().statCard, accessible: true, accessibilityRole: "text", accessibilityLabel: tmp6.accessibilityLabel, children: null };
  const items = [stat.label, " ", ];
  let str9 = "";
  if (null != ratingCount) {
    const _HermesInternal4 = HermesInternal;
    str9 = "(" + ratingCount + ")";
  }
  items[2] = str9;
  const items1 = [closure_6(Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: items }), callback(Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 1, children: tmp6.primaryText }), ];
  if (null == secondaryContent) {
    let tmp21Result = null != secondaryText;
    if (tmp21Result) {
      const obj4 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: null };
      obj4[3] = secondaryText;
      tmp21Result = callback(tmp18(4338).Text, obj4);
    }
    secondaryContent = tmp21Result;
  }
  items1[2] = secondaryContent;
  obj3[4] = items1;
  return closure_6(closure_4, obj3);
}
({ ScrollView: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { carousel: null, carouselContent: null, statCard: null };
createCacheKey = { marginHorizontal: -require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: require("Themes").space.PX_16, paddingLeft: require("Themes").space.PX_16, paddingRight: require("Themes").space.PX_16 };
let obj1 = { gap: require("Themes").space.PX_16, paddingLeft: require("Themes").space.PX_16, paddingRight: require("Themes").space.PX_16 };
createCacheKey[2] = { width: 130, height: 87, borderRadius: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.CARD_SECONDARY_BACKGROUND_DEFAULT, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_12, gap: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { width: 130, height: 87, borderRadius: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.CARD_SECONDARY_BACKGROUND_DEFAULT, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_12, gap: require("Themes").space.PX_8 };
let result = require("jsxProd").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStatsCarousel.tsx");

export default function AppStoreOverlayStatsCarousel(stats) {
  stats = stats.stats;
  let tmp2 = null;
  if (0 !== stats.length) {
    const obj = { horizontal: true, nestedScrollEnabled: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, children: null };
    ({ carousel: obj[3], carouselContent: obj[4] } = tmp);
    obj[5] = stats.map((stat) => callback(closure_8, { stat }, stat.type));
    tmp2 = callback(closure_3, obj);
  }
  return tmp2;
};