// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayStatsCarousel.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import formatAppStoreRatingValue from "AppStoreOverlayStatCardUtils.tsx";
import FractionalStarDefault from "AppStoreOverlayStarRating.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function AppStoreOverlayStatCardItem(stat) {
  stat = stat.stat;
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
      let tmp9Result = tmp9(10733);
      result1 = tmp9Result.formatAppStoreRatingCount(stat.ratingCount, tmp9(1236).intl.currentLocale);
    }
    tmp9Result = tmp9(10733);
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
    const obj12 = formatAppStoreRatingValue;
  }
  ({ secondaryText, secondaryContent, ratingCount } = tmp6);
  const obj3 = { style: tmp.statCard, accessible: true, accessibilityRole: "text", accessibilityLabel: tmp6.accessibilityLabel, children: null };
  const items = [stat.label, " ", ];
  let str9 = "";
  if (null != ratingCount) {
    const _HermesInternal4 = HermesInternal;
    str9 = "(" + ratingCount + ")";
  }
  items[2] = str9;
  const items1 = [closure_6(Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: items }), callback(Text.Text, { variant: "text-md/semibold", color: "text-default", lineClamp: 1, children: tmp6.primaryText }), ];
  let tmp21Result = null != secondaryContent || null != secondaryText;
  if (tmp21Result) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.secondaryRow;
    if (null == secondaryContent) {
      const obj5 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: null };
      obj5[3] = secondaryText;
      secondaryContent = tmp21(tmp18(4440).Text, obj5);
    }
    obj4[1] = secondaryContent;
    tmp21Result = tmp21(tmp17, obj4);
  }
  items1[2] = tmp21Result;
  obj3[4] = items1;
  return closure_6(closure_4, obj3);
}
noopAll;
({ ScrollView: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { carousel: null, carouselContent: null, statCard: null, secondaryRow: null };
createCacheKey = { marginHorizontal: -ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { gap: ThemesDefault.space.PX_16, paddingLeft: ThemesDefault.space.PX_16, paddingRight: ThemesDefault.space.PX_16 };
let obj1 = { gap: ThemesDefault.space.PX_16, paddingLeft: ThemesDefault.space.PX_16, paddingRight: ThemesDefault.space.PX_16 };
createCacheKey[2] = { width: 130, height: 92, borderRadius: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_8 };
let obj2 = { width: 130, height: 92, borderRadius: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.CARD_SECONDARY_BACKGROUND_DEFAULT, paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_8 };
createCacheKey[3] = { height: ThemesDefault.space.PX_16, justifyContent: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj3 = { height: ThemesDefault.space.PX_16, justifyContent: "center" };
let result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStatsCarousel.tsx");

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