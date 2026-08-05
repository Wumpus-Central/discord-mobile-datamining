// discord_app/modules/game_profile/native/components/GameProfileReviews.tsx
import noop from "noop";
import get_ActivityIndicator from "SteamReleaseStatus";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { buildSteamStoreUrl } from "../../hooks/useSteamWebsiteUrl.tsx";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function SteamReviewRow(url) {
  let isRecentRating;
  let rating;
  let showBorderBottom;
  let title;
  let trackAction;
  url = url.url;
  ({ showBorderBottom, trackAction } = url);
  const ratingCount = url.ratingCount;
  let dependencyMap;
  ({ title, rating, isRecentRating } = url);
  const tmp = createCacheKey();
  const tmp4Result = trackAction(9197)(trackAction(3982).openURL);
  dependencyMap = tmp4Result;
  let obj = url(9236);
  const result = obj.calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
  let obj1 = url(9237);
  const items = [tmp4Result, url, trackAction];
  const steamReviewScoreDescriptionColor = obj1.getSteamReviewScoreDescriptionColor(result);
  obj = {
    onPress: React.useCallback(() => {
      trackAction(url(_undefined[9]).GameProfileTrackActionActions.SteamReviews);
      _undefined(url);
    }, items),
    accessibilityRole: "link",
    accessibilityLabel: null,
    style: null,
    children: null
  };
  const intl = url(1236).intl;
  obj[2] = intl.string(url(1236).t.YNC5Di);
  const items1 = [tmp.reviewRow, ];
  if (showBorderBottom) {
    showBorderBottom = tmp.reviewRowNotLast;
  }
  items1[1] = showBorderBottom;
  obj[3] = items1;
  obj = { style: tmp.steamNameContainer, children: null };
  obj1 = { size: "sm", color: null };
  obj1[1] = trackAction(712).colors.ICON_STRONG;
  const items2 = [callback(url(9209).SteamNeutralIcon, obj1), callback(url(4281).Text, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title })];
  obj[1] = items2;
  const items3 = [closure_8(closure_4, obj), ];
  const obj2 = { style: tmp.steamRatingContainer, children: null };
  const obj3 = { variant: "text-sm/medium", color: steamReviewScoreDescriptionColor, children: null };
  const tmp10 = closure_5;
  const tmp11 = closure_4;
  const tmp12 = callback;
  const tmp2 = trackAction;
  const tmp4 = trackAction(9197);
  obj3[2] = url(9237).getSteamReviewScoreDescriptionIntl(result);
  const items4 = [callback(url(4281).Text, obj3), ];
  let tmp12Result = null != ratingCount && result !== tmp6(4319).SteamReviewScoreDescription.NO_USER_REVIEWS;
  if (tmp12Result) {
    const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp6(1236).intl;
    const obj5 = { rating_count: null };
    obj5[0] = ratingCount.toLocaleString();
    obj4[2] = intl2.format(tmp6(1236).t.sgIoin, obj5).toString();
    tmp12Result = tmp12(tmp6(4281).Text, obj4);
    const str = intl2.format(tmp6(1236).t.sgIoin, obj5);
  }
  items4[1] = tmp12Result;
  obj2[1] = items4;
  items3[1] = closure_8(tmp11, obj2);
  obj[4] = items3;
  return closure_8(tmp10, obj);
}
function OpenCriticReview(url) {
  let backgroundColor;
  let foregroundColor;
  let tier;
  let topCriticRating;
  url = url.url;
  const trackAction = url.trackAction;
  let dependencyMap;
  const tmp = createCacheKey();
  const reviews = url.game.reviews;
  let opencritic;
  if (reviews != null) {
    opencritic = reviews.opencritic;
  }
  if (opencritic == null) {
    opencritic = { topCriticRating: "Array", topCriticRatingCount: "call", tier: "format" };
  }
  ({ tier, topCriticRating } = opencritic);
  if (topCriticRating == null) {
    topCriticRating = -1;
  }
  let num = opencritic.topCriticRatingCount;
  if (num == null) {
    num = -1;
  }
  const tmp4Result = trackAction(9197)(trackAction(3982).openURL);
  dependencyMap = tmp4Result;
  const items = [tmp4Result, url, trackAction];
  let str = "";
  const callback = React.useCallback(() => {
    trackAction(url(_undefined[9]).GameProfileTrackActionActions.OpenCriticReviews);
    _undefined(url);
  }, items);
  if (null != tier) {
    let obj1 = url(9238);
    str = obj1.getOpenCriticTierText(tier);
  }
  if (null != tier) {
    let obj3 = url(9238);
    let openCriticCircleRatingColor = obj3.getOpenCriticCircleRatingColor(tier);
  } else {
    openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
  }
  let obj = { onPress: callback, accessibilityRole: "link", accessibilityLabel: null, style: null, children: null };
  ({ foregroundColor, backgroundColor } = openCriticCircleRatingColor);
  const intl = url(1236).intl;
  obj[2] = intl.string(url(1236).t.aLNBAw);
  obj[3] = tmp.reviewRow;
  obj = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = url(1236).intl;
  obj[2] = intl2.string(url(1236).t["UxvER+"]);
  const items1 = [callback(url(4281).Text, obj), ];
  obj1 = { style: tmp.opencriticRightContainer, children: null };
  let tmp12Result = null;
  if (null != tier) {
    const obj2 = { style: null, accessibilityLabel: null, accessibilityRole: "image", children: null };
    obj2[0] = tmp.opencriticTopCriticContainer;
    obj2[1] = str;
    obj3 = { source: null, style: null, accessible: true, accessibilityLabel: null };
    const obj4 = { uri: null };
    let tmp11Result = tmp11(9238);
    obj4[0] = tmp11Result.getOpenCriticTierImage(tier);
    obj3[0] = obj4;
    obj3[1] = tmp.opencriticTopCriticImage;
    obj3[3] = str;
    obj2[3] = tmp12(closure_6, obj3);
    tmp12Result = tmp12(tmp13, obj2);
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
        const obj6 = { backgroundColor: null };
        obj6[0] = backgroundColor;
        items3[1] = obj6;
        obj5[0] = items3;
        const intl3 = tmp11(1236).intl;
        obj5[1] = intl3.string(tmp11(1236).t.Ub4YR1);
        const obj7 = { rating: null, strokeColor: null, size: 32 };
        obj7[0] = topCriticRating;
        obj7[1] = foregroundColor;
        const items4 = [tmp12(trackAction(9244), obj7), ];
        const obj8 = { style: null, children: null };
        obj8[0] = tmp.opencriticTopCriticRatingContainer;
        const obj9 = { variant: "text-xs/bold", color: "text-overlay-light", children: null };
        const _Math = Math;
        obj9[2] = Math.floor(topCriticRating);
        obj8[1] = tmp12(tmp11(4281).Text, obj9);
        items4[1] = tmp12(tmp13, obj8);
        obj5[3] = items4;
        tmp9Result = tmp9(tmp13, obj5);
      }
    }
  }
  items2[1] = tmp9Result;
  if (topCriticRating <= 0) {
    tmp12Result = null;
    if (null == tier) {
      const obj10 = { variant: "text-xs/medium", color: null, children: null };
      tmp11Result = tmp11(9237);
      obj10[1] = tmp11Result.getSteamReviewScoreDescriptionColor(tmp11(4319).SteamReviewScoreDescription.NO_USER_REVIEWS);
      const intl4 = tmp11(1236).intl;
      obj10[2] = intl4.string(tmp11(1236).t["0xYzpO"]);
      tmp12Result = tmp12(tmp11(4281).Text, obj10);
    }
  } else {
    tmp12Result = null;
  }
  items2[2] = tmp12Result;
  obj1[1] = items2;
  items1[1] = closure_8(closure_4, obj1);
  obj[4] = items1;
  return closure_8(closure_5, obj);
}
({ View: c4, Pressable: c5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, headerText: null, reviewContainer: null, reviewRow: null, reviewRowNotLast: null, steamNameContainer: null, steamRatingContainer: null, opencriticRightContainer: null, opencriticTopCriticContainer: null, opencriticTopCriticImage: null, opencriticTopCriticRatingContainer: null };
createCacheKey = { gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_8 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_8 };
createCacheKey[2] = { borderRadius: require("Themes").radii.lg, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, overflow: "hidden" };
let obj2 = { borderRadius: require("Themes").radii.lg, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, overflow: "hidden" };
createCacheKey[3] = { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: require("Themes").space.PX_12 };
let obj3 = { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: require("Themes").space.PX_12 };
createCacheKey[4] = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
let obj4 = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[6] = { flexDirection: "row", alignItems: "flex-end", flexShrink: 1, paddingLeft: require("Themes").space.PX_32, gap: require("Themes").space.PX_4 };
let obj6 = { flexDirection: "row", alignItems: "flex-end", flexShrink: 1, paddingLeft: require("Themes").space.PX_32, gap: require("Themes").space.PX_4 };
createCacheKey[7] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
let obj7 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
createCacheKey[8] = { width: 32, height: 32, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
createCacheKey[9] = { width: 32, height: 32 };
createCacheKey[10] = { position: "absolute", top: 0, left: 1, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj8 = { width: 32, height: 32, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
let result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileReviews.tsx");

export default function GameProfileReviews(arg0) {
  let game;
  let trackAction;
  ({ game, trackAction } = arg0);
  const tmp = createCacheKey();
  let obj = buildSteamStoreUrl /* buildSteamStoreUrl */;
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
    const tmp6 = game.steamReleaseStatus !== tmp2(9206).SteamReleaseStatus.RETIRED_ABANDONED && null != steamWebsiteUrl;
    const reviews = game.reviews;
    let steam;
    if (reviews != null) {
      steam = reviews.steam;
    }
    let tmp2Result = tmp2(9236);
    const calculateSteamReviewScoreDescription = tmp2Result.calculateSteamReviewScoreDescription;
    if (steam != null) {
      let recentRating = steam.recentRating;
    }
    if (steam != null) {
      let recentRatingCount = steam.recentRatingCount;
    }
    let tmp10 = tmp6;
    if (tmp6) {
      tmp10 = tmp9 !== tmp2(4319).SteamReviewScoreDescription.NO_USER_REVIEWS;
    }
    tmp2Result = tmp2(9237);
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
    const t = tmp2(1236).t;
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
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: null, children: null };
    obj[2] = tmp.headerText;
    const intl = tmp2(1236).intl;
    obj[3] = intl.string(tmp2(1236).t.GaAQXP);
    const items = [callback(tmp2(4281).Text, obj), ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.reviewContainer;
    let tmp22Result = null;
    if (tmp10) {
      tmp22Result = null;
      if (null != steamWebsiteUrl) {
        const obj2 = { url: null, showBorderBottom: null, trackAction: null, title: null, rating: null, ratingCount: null, isRecentRating: true };
        obj2[0] = steamWebsiteUrl;
        let tmp25 = tmp6;
        if (!tmp6) {
          tmp25 = tmp18;
        }
        obj2[1] = tmp25;
        obj2[2] = trackAction;
        const intl2 = tmp2(1236).intl;
        obj2[3] = intl2.string(tmp2(1236).t.MQGNsN);
        recentRating = undefined;
        if (steam != null) {
          recentRating = steam.recentRating;
        }
        obj2[4] = recentRating;
        recentRatingCount = undefined;
        if (steam != null) {
          recentRatingCount = steam.recentRatingCount;
        }
        obj2[5] = recentRatingCount;
        tmp22Result = tmp22(SteamReviewRow, obj2);
        const tmp24 = SteamReviewRow;
      }
    }
    const items1 = [tmp22Result, , ];
    tmp22Result = null;
    if (tmp6) {
      tmp22Result = null;
      if (null != steamWebsiteUrl) {
        const obj3 = { url: null, showBorderBottom: null, trackAction: null, title: null, rating: null, ratingCount: null, isRecentRating: false };
        obj3[0] = steamWebsiteUrl;
        obj3[1] = tmp18;
        obj3[2] = trackAction;
        const intl3 = tmp2(1236).intl;
        obj3[3] = intl3.string(tmp16);
        obj3[4] = rating;
        obj3[5] = ratingCount;
        tmp22Result = tmp22(SteamReviewRow, obj3);
      }
    }
    items1[1] = tmp22Result;
    let tmp22Result1 = null;
    if (null != opencritic && null != opencriticUrl) {
      tmp22Result1 = null;
      if (null != opencriticUrl) {
        const obj4 = { game: null, url: null, trackAction: null };
        obj4[0] = game;
        obj4[1] = opencriticUrl;
        obj4[2] = trackAction;
        tmp22Result1 = tmp22(OpenCriticReview, obj4);
      }
    }
    items1[2] = tmp22Result1;
    obj1[1] = items1;
    items[1] = closure_8(closure_4, obj1);
    obj[1] = items;
    tmp20Result = tmp20(tmp21, obj);
    tmp16 = result ? t["aWb+V4"] : t["8e4LiB"];
  }
};