// === Module 8722: GameProfileReviews ===

// Module 8722 (GameProfileReviews)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import GameDetectionTypes from "GameDetectionTypes" /* 1934 */;
import Text_Text from "Text/Text" /* 4556 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8686 */;
import useSteamWebsiteUrl from "useSteamWebsiteUrl" /* 8690 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 8691 */;
import calculateSteamReviewScoreDescription2 from "calculateSteamReviewScoreDescription" /* 8723 */;
import GameProfileReviewUtils from "GameProfileReviewUtils" /* 8724 */;
import noop from "module_19" /* 19 */;

require = fn;
function SteamReviewRow(url) {
  url = url.url;
  ({ showBorderBottom, trackAction } = url);
  const ratingCount = url.ratingCount;
  ({ title, rating, isRecentRating } = url);
  const tmp = closure_9();
  const tmp4Result = trackAction(8683)(trackAction(4255).openURL);
  dependencyMap = tmp4Result;
  let obj = url(8723);
  const result = obj.calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
  let obj1 = url(8724);
  const items = [tmp4Result, url, trackAction];
  const steamReviewScoreDescriptionColor = obj1.getSteamReviewScoreDescriptionColor(result);
  obj = {
    onPress: noop.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamReviews);
      closure_2(url);
    }, items),
    accessibilityRole: "link",
    accessibilityLabel: null,
    style: null,
    children: null
  };
  const intl = url(1114).intl;
  obj.accessibilityLabel = intl.string(url(1114).t.YNC5Di);
  const items1 = [tmp.reviewRow, ];
  if (showBorderBottom) {
    showBorderBottom = tmp.reviewRowNotLast;
  }
  items1[1] = showBorderBottom;
  obj.style = items1;
  obj = { style: tmp.steamNameContainer, children: null };
  obj1 = { size: "sm", color: trackAction(576).colors.ICON_STRONG };
  const items2 = [closure_7(url(8694).SteamNeutralIcon, obj1), closure_7(url(4556).Text, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title })];
  obj.children = items2;
  const items3 = [closure_8(closure_4, obj), ];
  const obj2 = { style: tmp.steamRatingContainer, children: null };
  const obj3 = { variant: "text-sm/medium", color: steamReviewScoreDescriptionColor, children: null };
  const tmp4 = trackAction(8683);
  obj3.children = url(8724).getSteamReviewScoreDescriptionIntl(result);
  const items4 = [closure_7(url(4556).Text, obj3), ];
  let tmp12Result = null != ratingCount && result !== tmp6(1934).SteamReviewScoreDescription.NO_USER_REVIEWS;
  if (tmp12Result) {
    const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp6(1114).intl;
    const obj5 = { rating_count: ratingCount.toLocaleString() };
    obj4.children = intl2.format(tmp6(1114).t.sgIoin, obj5).toString();
    tmp12Result = closure_7(tmp6(4556).Text, obj4);
    const str = intl2.format(tmp6(1114).t.sgIoin, obj5);
  }
  items4[1] = tmp12Result;
  obj2.children = items4;
  items3[1] = closure_8(closure_4, obj2);
  obj.children = items3;
  return closure_8(closure_5, obj);
}
function OpenCriticReview(url) {
  url = url.url;
  const trackAction = url.trackAction;
  dependencyMap = undefined;
  const tmp = closure_9();
  const reviews = url.game.reviews;
  let opencritic;
  if (reviews != null) {
    opencritic = reviews.opencritic;
  }
  if (opencritic == null) {
    opencritic = { topCriticRating: "Array", topCriticRatingCount: "call", tier: "o" };
  }
  ({ tier, topCriticRating } = opencritic);
  if (topCriticRating == null) {
    topCriticRating = -1;
  }
  let num = opencritic.topCriticRatingCount;
  if (num == null) {
    num = -1;
  }
  const tmp4Result = trackAction(8683)(trackAction(4255).openURL);
  dependencyMap = tmp4Result;
  const items = [tmp4Result, url, trackAction];
  let str = "";
  const callback = noop.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
    closure_2(url);
  }, items);
  if (null != tier) {
    let obj1 = url(8725);
    str = obj1.getOpenCriticTierText(tier);
  }
  if (null != tier) {
    let obj3 = url(8725);
    let openCriticCircleRatingColor = obj3.getOpenCriticCircleRatingColor(tier);
  } else {
    openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
  }
  let obj = { onPress: callback, accessibilityRole: "link", accessibilityLabel: null, style: null, children: null };
  ({ foregroundColor, backgroundColor } = openCriticCircleRatingColor);
  const intl = url(1114).intl;
  obj.accessibilityLabel = intl.string(url(1114).t.aLNBAw);
  obj.style = tmp.reviewRow;
  obj = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = url(1114).intl;
  obj.children = intl2.string(url(1114).t["UxvER+"]);
  const items1 = [closure_7(url(4556).Text, obj), ];
  obj1 = { style: tmp.opencriticRightContainer, children: null };
  let tmp12Result = null;
  if (null != tier) {
    const obj2 = { style: tmp.opencriticTopCriticContainer, accessibilityLabel: str, accessibilityRole: "image", children: null };
    obj3 = { source: null, style: null, accessible: true, accessibilityLabel: null };
    const obj4 = { uri: null };
    let tmp11Result = tmp11(8725);
    obj4.uri = tmp11Result.getOpenCriticTierImage(tier);
    obj3.source = obj4;
    obj3.style = tmp.opencriticTopCriticImage;
    obj3.accessibilityLabel = str;
    obj2.children = closure_7(closure_6, obj3);
    tmp12Result = closure_7(closure_4, obj2);
  }
  const items2 = [tmp12Result, , ];
  let tmp9Result = null;
  if (null != tier) {
    tmp9Result = null;
    if (topCriticRating > 0) {
      tmp9Result = null;
      if (num > 0) {
        const obj5 = { style: null, accessibilityLabel: null, accessibilityRole: "image", children: null };
        const items3 = [tmp.opencriticTopCriticContainer, ];
        const obj6 = { backgroundColor };
        items3[1] = obj6;
        obj5.style = items3;
        const intl3 = tmp11(1114).intl;
        obj5.accessibilityLabel = intl3.string(tmp11(1114).t.Ub4YR1);
        const obj7 = { rating: topCriticRating, strokeColor: foregroundColor, size: 32 };
        const items4 = [closure_7(trackAction(8731), obj7), ];
        const obj8 = { style: tmp.opencriticTopCriticRatingContainer, children: null };
        const obj9 = { variant: "text-xs/bold", color: "text-overlay-light", children: null };
        const _Math = Math;
        obj9.children = Math.floor(topCriticRating);
        obj8.children = closure_7(tmp11(4556).Text, obj9);
        items4[1] = closure_7(closure_4, obj8);
        obj5.children = items4;
        tmp9Result = closure_8(closure_4, obj5);
      }
    }
  }
  items2[1] = tmp9Result;
  if (topCriticRating <= 0) {
    tmp12Result = null;
    if (null == tier) {
      const obj10 = { variant: "text-xs/medium", color: null, children: null };
      tmp11Result = tmp11(8724);
      obj10.color = tmp11Result.getSteamReviewScoreDescriptionColor(tmp11(1934).SteamReviewScoreDescription.NO_USER_REVIEWS);
      const intl4 = tmp11(1114).intl;
      obj10.children = intl4.string(tmp11(1114).t["0xYzpO"]);
      tmp12Result = closure_7(tmp11(4556).Text, obj10);
    }
  } else {
    tmp12Result = null;
  }
  items2[2] = tmp12Result;
  obj1.children = items2;
  items1[1] = closure_8(closure_4, obj1);
  obj.children = items1;
  return closure_8(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, headerText: null, reviewContainer: null, reviewRow: null, reviewRowNotLast: null, steamNameContainer: null, steamRatingContainer: null, opencriticRightContainer: null, opencriticTopCriticContainer: null, opencriticTopCriticImage: null, opencriticTopCriticRatingContainer: null };
createStyles = { gap: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.headerText = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_8 };
createStyles.reviewContainer = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
let obj2 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
createStyles.reviewRow = { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_12 };
let obj3 = { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_12 };
createStyles.reviewRowNotLast = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj4 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles.steamNameContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.steamRatingContainer = { flexDirection: "row", alignItems: "flex-end", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_4 };
let obj6 = { flexDirection: "row", alignItems: "flex-end", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_4 };
createStyles.opencriticRightContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
createStyles.opencriticTopCriticContainer = size;
createStyles.opencriticTopCriticImage = { width: 32, height: 32 };
createStyles.opencriticTopCriticRatingContainer = { position: "absolute", top: 0, left: 1, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" };
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReviews.tsx");

export default function GameProfileReviews(arg0) {
  ({ game, trackAction } = arg0);
  const tmp = closure_9();
  let obj = useSteamWebsiteUrl;
  let id;
  if (game != null) {
    id = game.id;
  }
  const steamWebsiteUrl = obj.useSteamWebsiteUrl(id);
  if (game != null) {
    const opencriticUrl = game.opencriticUrl;
  }
  if (null == game) {
    return null;
  } else {
    const tmp6 = game.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED && null != steamWebsiteUrl;
    const reviews = game.reviews;
    let steam;
    if (reviews != null) {
      steam = reviews.steam;
    }
    let tmp2Result = calculateSteamReviewScoreDescription2;
    const calculateSteamReviewScoreDescription = tmp2Result.calculateSteamReviewScoreDescription;
    if (steam != null) {
      let recentRating = steam.recentRating;
    }
    if (steam != null) {
      let recentRatingCount = steam.recentRatingCount;
    }
    let tmp10 = tmp6;
    if (tmp6) {
      tmp10 = tmp9 !== GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS;
    }
    tmp2Result = GameProfileReviewUtils;
    const result = tmp2Result.canShowLocalizedSteamReview(steam);
    if (result) {
      let localizedRating;
      if (!tmp12) {
        localizedRating = steam.localizedRating;
      }
      let rating = localizedRating;
    } else if (!tmp12) {
      rating = steam.rating;
    }
    if (result) {
      let localizedRatingCount;
      if (!tmp14) {
        localizedRatingCount = steam.localizedRatingCount;
      }
      let ratingCount = localizedRatingCount;
    } else if (!tmp14) {
      ratingCount = steam.ratingCount;
    }
    const t = util.t;
    const reviews2 = game.reviews;
    let opencritic;
    if (reviews2 != null) {
      opencritic = reviews2.opencritic;
    }
    if (!tmp6) {
      if (!tmp10) {
        let tmp20Result = null;
      }
      return tmp20Result;
    }
    obj = { style: tmp.container, children: null };
    obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t.GaAQXP);
    const items = [React5(Text_Text.Text, obj), ];
    const obj1 = { style: tmp.reviewContainer, children: null };
    let tmp22Result = null;
    if (tmp10) {
      tmp22Result = null;
      if (null != steamWebsiteUrl) {
        const obj2 = { url: steamWebsiteUrl, showBorderBottom: null, trackAction: null, title: null, rating: null, ratingCount: null, isRecentRating: true };
        let tmp25 = tmp6;
        if (!tmp6) {
          tmp25 = tmp18;
        }
        obj2.showBorderBottom = tmp25;
        obj2.trackAction = trackAction;
        const intl2 = util.intl;
        obj2.title = intl2.string(util.t.MQGNsN);
        recentRating = undefined;
        if (steam != null) {
          recentRating = steam.recentRating;
        }
        obj2.rating = recentRating;
        recentRatingCount = undefined;
        if (steam != null) {
          recentRatingCount = steam.recentRatingCount;
        }
        obj2.ratingCount = recentRatingCount;
        tmp22Result = React5(SteamReviewRow, obj2);
      }
    }
    const items1 = [tmp22Result, , ];
    tmp22Result = null;
    if (tmp6) {
      tmp22Result = null;
      if (null != steamWebsiteUrl) {
        const obj3 = { url: steamWebsiteUrl, showBorderBottom: tmp18, trackAction, title: null, rating: null, ratingCount: null, isRecentRating: false };
        const intl3 = util.intl;
        obj3.title = intl3.string(tmp16);
        obj3.rating = rating;
        obj3.ratingCount = ratingCount;
        tmp22Result = React5(SteamReviewRow, obj3);
      }
    }
    items1[1] = tmp22Result;
    let tmp22Result1 = null;
    if (null != opencritic && null != opencriticUrl) {
      tmp22Result1 = null;
      if (null != opencriticUrl) {
        const obj4 = { game, url: opencriticUrl, trackAction };
        tmp22Result1 = React5(OpenCriticReview, obj4);
      }
    }
    items1[2] = tmp22Result1;
    obj1.children = items1;
    items[1] = React6(React4, obj1);
    obj.children = items;
    tmp20Result = React6(React4, obj);
    tmp16 = result ? t["aWb+V4"] : t["8e4LiB"];
  }
};