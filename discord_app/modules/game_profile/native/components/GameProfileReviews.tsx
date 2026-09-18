// discord_app/modules/game_profile/native/components/GameProfileReviews.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import GameDetectionTypes from "../../../game_detection/GameDetectionTypes.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import useSteamWebsiteUrl from "../../hooks/useSteamWebsiteUrl.tsx";
import SteamReleaseStatus from "../../../../../discord_common/js/shared/shared-constants/SteamReleaseStatus.tsx";
import calculateSteamReviewScoreDescription2 from "../../../game_detection/calculateSteamReviewScoreDescription.tsx";
import GameProfileReviewUtils from "../../GameProfileReviewUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function SteamReviewRow(url) {
  url = url.url;
  ({ showBorderBottom, trackAction } = url);
  const ratingCount = url.ratingCount;
  ({ title, rating, isRecentRating } = url);
  const tmp = closure_9();
  const tmp5Result = trackAction(8914)(trackAction(4417).openURL);
  dependencyMap = tmp5Result;
  const tmp5 = trackAction(8914);
  const result = url(8961).calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
  const obj = url(8961);
  const items = [tmp5Result, url, trackAction];
  const steamReviewScoreDescriptionColor = url(8962).getSteamReviewScoreDescriptionColor(result);
  const obj3 = {
    onPress: noop.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamReviews);
      closure_2(url);
    }, items),
    accessibilityRole: "link",
    accessibilityLabel: null,
    style: null,
    children: null,
  };
  const intl = url(1115).intl;
  obj3.accessibilityLabel = intl.string(url(1115).t.YNC5Di);
  const items1 = [tmp.reviewRow];
  if (showBorderBottom) {
    showBorderBottom = tmp.reviewRowNotLast;
  }
  items1[1] = showBorderBottom;
  obj3.style = items1;
  const obj4 = { style: tmp.steamNameContainer, children: null };
  const obj2 = url(8962);
  const items2 = [
    closure_7(url(8925).SteamNeutralIcon, { size: "sm", color: trackAction(576).colors.ICON_STRONG }),
    closure_7(url(4718).Text, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title }),
  ];
  obj4.children = items2;
  const items3 = [closure_8(closure_4, obj4)];
  const obj6 = { style: tmp.steamRatingContainer, children: null };
  const obj7 = { variant: "text-sm/medium", color: steamReviewScoreDescriptionColor, style: null, children: null };
  let linkText;
  if (noop.useContext(url(4442).AccessibilityPreferencesContext).alwaysShowLinkDecorations) {
    linkText = tmp.linkText;
  }
  obj7.style = linkText;
  const obj5 = { size: "sm", color: trackAction(576).colors.ICON_STRONG };
  obj7.children = url(8962).getSteamReviewScoreDescriptionIntl(result);
  const items4 = [closure_7(url(4718).Text, obj7)];
  let tmp12Result = null != ratingCount && result !== tmp2(1935).SteamReviewScoreDescription.NO_USER_REVIEWS;
  if (tmp12Result) {
    const obj8 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp2(1115).intl;
    const obj9 = { rating_count: ratingCount.toLocaleString() };
    obj8.children = intl2.format(tmp2(1115).t.sgIoin, obj9).toString();
    tmp12Result = closure_7(tmp2(4718).Text, obj8);
    const str = intl2.format(tmp2(1115).t.sgIoin, obj9);
  }
  items4[1] = tmp12Result;
  obj6.children = items4;
  items3[1] = closure_8(closure_4, obj6);
  obj3.children = items3;
  return closure_8(closure_5, obj3);
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
    opencritic = { topCriticRating: "isArray", topCriticRatingCount: "accessible", tier: "ty" };
  }
  ({ tier, topCriticRating } = opencritic);
  if (topCriticRating == null) {
    topCriticRating = -1;
  }
  let num = opencritic.topCriticRatingCount;
  if (num == null) {
    num = -1;
  }
  const tmp4Result = trackAction(8914)(trackAction(4417).openURL);
  dependencyMap = tmp4Result;
  const items = [tmp4Result, url, trackAction];
  let str = "";
  const callback = noop.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
    closure_2(url);
  }, items);
  if (null != tier) {
    str = url(8963).getOpenCriticTierText(tier);
    const obj2 = url(8963);
  }
  if (null != tier) {
    let openCriticCircleRatingColor = url(8963).getOpenCriticCircleRatingColor(tier);
    const obj4 = url(8963);
  } else {
    openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
  }
  const obj = { onPress: callback, accessibilityRole: "link", accessibilityLabel: null, style: null, children: null };
  ({ foregroundColor, backgroundColor } = openCriticCircleRatingColor);
  const intl = url(1115).intl;
  obj.accessibilityLabel = intl.string(url(1115).t.aLNBAw);
  obj.style = tmp.reviewRow;
  const obj3 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = url(1115).intl;
  obj3.children = intl2.string(url(1115).t["UxvER+"]);
  const items1 = [closure_7(url(4718).Text, obj3)];
  const obj5 = { style: tmp.opencriticRightContainer, children: null };
  let tmp12Result = null;
  if (null != tier) {
    const obj6 = {
      style: tmp.opencriticTopCriticContainer,
      accessibilityLabel: str,
      accessibilityRole: "image",
      children: null,
    };
    const obj7 = { source: null, style: null, accessible: true, accessibilityLabel: null };
    const obj8 = { uri: tmp11(8963).getOpenCriticTierImage(tier) };
    obj7.source = obj8;
    obj7.style = tmp.opencriticTopCriticImage;
    obj7.accessibilityLabel = str;
    obj6.children = closure_7(closure_6, obj7);
    tmp12Result = closure_7(closure_4, obj6);
    const tmp11Result = tmp11(8963);
  }
  const items2 = [tmp12Result, ,];
  let tmp9Result = null;
  if (null != tier) {
    tmp9Result = null;
    if (topCriticRating > 0) {
      tmp9Result = null;
      if (num > 0) {
        const obj9 = { style: null, accessibilityLabel: null, accessibilityRole: "image", children: null };
        const items3 = [tmp.opencriticTopCriticContainer];
        const obj10 = { backgroundColor };
        items3[1] = obj10;
        obj9.style = items3;
        const intl3 = tmp11(1115).intl;
        obj9.accessibilityLabel = intl3.string(tmp11(1115).t.Ub4YR1);
        const obj11 = { rating: topCriticRating, strokeColor: foregroundColor, size: 32 };
        const items4 = [closure_7(trackAction(8969), obj11)];
        const obj12 = { style: tmp.opencriticTopCriticRatingContainer, children: null };
        const obj13 = { variant: "text-xs/bold", color: "text-overlay-light", children: null };
        const _Math = Math;
        obj13.children = Math.floor(topCriticRating);
        obj12.children = closure_7(tmp11(4718).Text, obj13);
        items4[1] = closure_7(closure_4, obj12);
        obj9.children = items4;
        tmp9Result = closure_8(closure_4, obj9);
      }
    }
  }
  items2[1] = tmp9Result;
  if (topCriticRating <= 0) {
    let tmp12Result2 = null;
    if (null == tier) {
      const obj14 = {
        variant: "text-xs/medium",
        color: tmp11(8962).getSteamReviewScoreDescriptionColor(tmp11(1935).SteamReviewScoreDescription.NO_USER_REVIEWS),
        children: null,
      };
      const intl4 = tmp11(1115).intl;
      obj14.children = intl4.string(tmp11(1115).t["0xYzpO"]);
      tmp12Result2 = closure_7(tmp11(4718).Text, obj14);
      const tmp11Result2 = tmp11(8962);
    }
  } else {
    tmp12Result2 = null;
  }
  items2[2] = tmp12Result2;
  obj5.children = items2;
  items1[1] = closure_8(closure_4, obj5);
  obj.children = items1;
  return closure_8(closure_5, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  container: { gap: nativeDefault.space.PX_8 },
  headerText: null,
  reviewContainer: null,
  reviewRow: null,
  reviewRowNotLast: null,
  steamNameContainer: null,
  steamRatingContainer: null,
  opencriticRightContainer: null,
  opencriticTopCriticContainer: null,
  opencriticTopCriticImage: null,
  opencriticTopCriticRatingContainer: null,
  linkText: null,
};
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.headerText = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj2.reviewContainer = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
};
let obj5 = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
};
obj2.reviewRow = {
  height: 56,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: nativeDefault.space.PX_12,
};
let obj6 = {
  height: 56,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: nativeDefault.space.PX_12,
};
obj2.reviewRowNotLast = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj7 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.steamNameContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.steamRatingContainer = {
  flexDirection: "row",
  alignItems: "flex-end",
  flexShrink: 1,
  paddingLeft: nativeDefault.space.PX_32,
  gap: nativeDefault.space.PX_4,
};
let obj9 = {
  flexDirection: "row",
  alignItems: "flex-end",
  flexShrink: 1,
  paddingLeft: nativeDefault.space.PX_32,
  gap: nativeDefault.space.PX_4,
};
obj2.opencriticRightContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignItems: "center",
  justifyContent: "center",
};
obj2.opencriticTopCriticContainer = size;
obj2.opencriticTopCriticImage = { width: 32, height: 32 };
obj2.opencriticTopCriticRatingContainer = {
  position: "absolute",
  top: 0,
  left: 1,
  right: 0,
  bottom: 0,
  alignItems: "center",
  justifyContent: "center",
};
obj2.linkText = { textDecorationLine: "underline" };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReviews.tsx");

export default function GameProfileReviews(arg0) {
  ({ game, trackAction } = arg0);
  const tmp = closure_9();
  let id;
  if (game != null) {
    id = game.id;
  }
  const steamWebsiteUrl = useSteamWebsiteUrl.useSteamWebsiteUrl(id);
  if (game != null) {
    const opencriticUrl = game.opencriticUrl;
  }
  if (null == game) {
    return null;
  } else {
    const tmp6 =
      game.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED && null != steamWebsiteUrl;
    const reviews = game.reviews;
    let steam;
    if (reviews != null) {
      steam = reviews.steam;
    }
    const calculateSteamReviewScoreDescription =
      calculateSteamReviewScoreDescription2.calculateSteamReviewScoreDescription;
    if (steam != null) {
      const recentRating = steam.recentRating;
    }
    if (steam != null) {
      const recentRatingCount = steam.recentRatingCount;
    }
    let tmp10 = tmp6;
    if (tmp6) {
      tmp10 = tmp9 !== GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS;
    }
    const tmp2Result = calculateSteamReviewScoreDescription2;
    const result = GameProfileReviewUtils.canShowLocalizedSteamReview(steam);
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
    const obj2 = { style: tmp.container, children: null };
    const obj3 = {
      variant: "heading-sm/semibold",
      color: "mobile-text-heading-primary",
      style: tmp.headerText,
      children: null,
    };
    const intl = util.intl;
    obj3.children = intl.string(util.t.GaAQXP);
    const items = [React5(Text_Text.Text, obj3)];
    const obj4 = { style: tmp.reviewContainer, children: null };
    let tmp22Result = null;
    if (tmp10) {
      tmp22Result = null;
      if (null != steamWebsiteUrl) {
        const obj5 = {
          url: steamWebsiteUrl,
          showBorderBottom: null,
          trackAction: null,
          title: null,
          rating: null,
          ratingCount: null,
          isRecentRating: true,
        };
        let tmp25 = tmp6;
        if (!tmp6) {
          tmp25 = tmp18;
        }
        obj5.showBorderBottom = tmp25;
        obj5.trackAction = trackAction;
        const intl2 = util.intl;
        obj5.title = intl2.string(util.t.MQGNsN);
        let recentRating1;
        if (steam != null) {
          recentRating1 = steam.recentRating;
        }
        obj5.rating = recentRating1;
        let recentRatingCount1;
        if (steam != null) {
          recentRatingCount1 = steam.recentRatingCount;
        }
        obj5.ratingCount = recentRatingCount1;
        tmp22Result = React5(SteamReviewRow, obj5);
      }
    }
    const items1 = [tmp22Result, ,];
    let tmp22Result3 = null;
    if (tmp6) {
      tmp22Result3 = null;
      if (null != steamWebsiteUrl) {
        const obj6 = {
          url: steamWebsiteUrl,
          showBorderBottom: tmp18,
          trackAction,
          title: null,
          rating: null,
          ratingCount: null,
          isRecentRating: false,
        };
        const intl3 = util.intl;
        obj6.title = intl3.string(tmp16);
        obj6.rating = rating;
        obj6.ratingCount = ratingCount;
        tmp22Result3 = React5(SteamReviewRow, obj6);
      }
    }
    items1[1] = tmp22Result3;
    let tmp22Result4 = null;
    if (null != opencritic && null != opencriticUrl) {
      tmp22Result4 = null;
      if (null != opencriticUrl) {
        const obj7 = { game, url: opencriticUrl, trackAction };
        tmp22Result4 = React5(OpenCriticReview, obj7);
      }
    }
    items1[2] = tmp22Result4;
    obj4.children = items1;
    items[1] = React6(React4, obj4);
    obj2.children = items;
    tmp20Result = React6(React4, obj2);
    tmp16 = result ? t["aWb+V4"] : t["8e4LiB"];
    const tmp2Result2 = GameProfileReviewUtils;
  }
}
