// === Module 9388: GameProfileReviews ===

// Module 9388 (GameProfileReviews)
import nativeDefault from "native" /* 575 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 5028 */;
import Text_Text from "Text/Text" /* 5624 */;
import LinkingDefault from "Linking" /* 5709 */;
import useOpenExternalUrlFromGameProfileDefault from "useOpenExternalUrlFromGameProfile" /* 9323 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9340 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function SteamReviewRow(url) {
  url = url.url;
  const trackAction = url.trackAction;
  const ratingCount = url.ratingCount;
  ({ title, rating, isRecentRating } = url);
  const tmp = closure_8();
  const tmp4Result = trackAction(9323)(trackAction(5709).openURL);
  dependencyMap = tmp4Result;
  const tmp4 = trackAction(9323);
  const result = url(9391).calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
  const obj = url(9391);
  const items = [tmp4Result, url, trackAction];
  const steamReviewScoreDescriptionColor = url(9392).getSteamReviewScoreDescriptionColor(result);
  const obj3 = {
    onPress: noop.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamReviews);
      closure_2(url);
    }, items),
    accessibilityRole: "link",
    accessibilityLabel: null,
    style: null,
    children: null
  };
  const intl = url(1113).intl;
  obj3.accessibilityLabel = intl.string(url(1113).t.YNC5Di);
  obj3.style = tmp.reviewRow;
  const obj4 = { style: tmp.reviewNameContainer, children: null };
  const obj2 = url(9392);
  const items1 = [closure_6(url(9348).SteamNeutralIcon, { size: "sm", color: trackAction(575).colors.ICON_STRONG }), closure_6(url(5624).Text, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title })];
  obj4.children = items1;
  const items2 = [closure_7(closure_4, obj4), ];
  const obj6 = { style: tmp.ratingContainer, children: null };
  const obj7 = { variant: "text-sm/medium", color: steamReviewScoreDescriptionColor, lineClamp: 1, style: null, children: null };
  const items3 = [tmp.ratingDescription, ];
  let linkText;
  if (noop.useContext(url(5028).AccessibilityPreferencesContext).alwaysShowLinkDecorations) {
    linkText = tmp.linkText;
  }
  items3[1] = linkText;
  obj7.style = items3;
  const obj5 = { size: "sm", color: trackAction(575).colors.ICON_STRONG };
  obj7.children = url(9392).getSteamReviewScoreDescriptionIntl(result);
  const items4 = [closure_6(url(5624).Text, obj7), ];
  let tmp11Result = null != ratingCount && result !== tmp2(2035).SteamReviewScoreDescription.NO_USER_REVIEWS;
  if (tmp11Result) {
    const obj8 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp2(1113).intl;
    const obj9 = { rating_count: ratingCount.toLocaleString() };
    obj8.children = intl2.format(tmp2(1113).t.sgIoin, obj9).toString();
    tmp11Result = closure_6(tmp2(5624).Text, obj8);
    const str = intl2.format(tmp2(1113).t.sgIoin, obj9);
  }
  items4[1] = tmp11Result;
  obj6.children = items4;
  items2[1] = closure_7(closure_4, obj6);
  obj3.children = items2;
  return closure_7(closure_5, obj3);
}
function OpenCriticReview(url) {
  url = url.url;
  const trackAction = url.trackAction;
  dependencyMap = undefined;
  const tmp = closure_8();
  const reviews = url.game.reviews;
  let opencritic;
  if (reviews != null) {
    opencritic = reviews.opencritic;
  }
  if (opencritic == null) {
    opencritic = { topCriticRating: "dispatch", topCriticRatingCount: "isArray", tier: "isArray" };
  }
  ({ tier, topCriticRating } = opencritic);
  if (topCriticRating == null) {
    topCriticRating = -1;
  }
  let num = opencritic.topCriticRatingCount;
  if (num == null) {
    num = -1;
  }
  const tmp4Result = trackAction(9323)(trackAction(5709).openURL);
  dependencyMap = tmp4Result;
  const items = [tmp4Result, url, trackAction];
  let str = "";
  const callback = noop.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
    closure_2(url);
  }, items);
  if (null != tier) {
    str = url(9394).getOpenCriticTierText(tier);
    const obj2 = url(9394);
  }
  if (null != tier) {
    let openCriticCircleRatingColor = url(9394).getOpenCriticCircleRatingColor(tier);
    const obj4 = url(9394);
  } else {
    openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
  }
  const obj = { onPress: callback, accessibilityRole: "link", accessibilityLabel: null, style: null, children: null };
  ({ foregroundColor, backgroundColor } = openCriticCircleRatingColor);
  const intl = url(1113).intl;
  obj.accessibilityLabel = intl.string(url(1113).t.aLNBAw);
  obj.style = tmp.reviewRow;
  const obj3 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = url(1113).intl;
  obj3.children = intl2.string(url(1113).t["UxvER+"]);
  const items1 = [closure_6(url(5624).Text, obj3), ];
  const obj5 = { style: tmp.opencriticRightContainer, children: null };
  let tmp12Result = null;
  if (null != tier) {
    const obj6 = { style: tmp.opencriticTopCriticContainer, accessibilityLabel: str, accessibilityRole: "image", children: null };
    const obj7 = { source: null, style: null, accessible: true, accessibilityLabel: null };
    const obj8 = { uri: null };
    const tmp2Result = tmp2(5717);
    obj8.uri = tmp11(9394).getOpenCriticTierImage(tier);
    obj7.source = obj8;
    obj7.style = tmp.opencriticTopCriticImage;
    obj7.accessibilityLabel = str;
    obj6.children = closure_6(tmp2Result, obj7);
    tmp12Result = closure_6(closure_4, obj6);
    const tmp11Result = tmp11(9394);
  }
  const items2 = [tmp12Result, , ];
  let tmp9Result = null;
  if (null != tier) {
    tmp9Result = null;
    if (topCriticRating > 0) {
      tmp9Result = null;
      if (num > 0) {
        const obj9 = { style: null, accessibilityLabel: null, accessibilityRole: "image", children: null };
        const items3 = [tmp.opencriticTopCriticContainer, ];
        const obj10 = { backgroundColor };
        items3[1] = obj10;
        obj9.style = items3;
        const intl3 = tmp11(1113).intl;
        obj9.accessibilityLabel = intl3.string(tmp11(1113).t.Ub4YR1);
        obj11 = { rating: topCriticRating, strokeColor: foregroundColor, size: 32 };
        const items4 = [closure_6(tmp2(9400), obj11), ];
        const obj12 = { style: tmp.opencriticTopCriticRatingContainer, children: null };
        const obj13 = { variant: "text-xs/bold", color: "text-overlay-light", children: null };
        const _Math = Math;
        obj13.children = Math.floor(topCriticRating);
        obj12.children = closure_6(tmp11(5624).Text, obj13);
        items4[1] = closure_6(closure_4, obj12);
        obj9.children = items4;
        tmp9Result = closure_7(closure_4, obj9);
      }
    }
  }
  items2[1] = tmp9Result;
  if (topCriticRating <= 0) {
    let tmp12Result2 = null;
    if (null == tier) {
      const obj14 = { variant: "text-xs/medium", color: tmp11(9392).getSteamReviewScoreDescriptionColor(tmp11(2035).SteamReviewScoreDescription.NO_USER_REVIEWS), children: null };
      const intl4 = tmp11(1113).intl;
      obj14.children = intl4.string(tmp11(1113).t["0xYzpO"]);
      tmp12Result2 = closure_6(tmp11(5624).Text, obj14);
      const tmp11Result2 = tmp11(9392);
    }
  } else {
    tmp12Result2 = null;
  }
  items2[2] = tmp12Result2;
  obj5.children = items2;
  items1[1] = closure_7(closure_4, obj5);
  obj.children = items1;
  return closure_7(closure_5, obj);
}
function MobileStoreReviewRow(arg0) {
  ({ review, trackAction } = arg0);
  const tmp = closure_8();
  const tmp4Result = useOpenExternalUrlFromGameProfileDefault(LinkingDefault.openURL);
  closure_1 = tmp4Result;
  const action = review.action;
  const url = review.url;
  const items = [action, tmp4Result, trackAction, url];
  const obj = {
    onPress: noop.useCallback(() => {
      trackAction(action);
      closure_1(url);
    }, items),
    accessibilityRole: "link",
    accessibilityLabel: review.accessibilityLabel,
    style: tmp.reviewRow,
    children: null
  };
  const obj2 = { style: tmp.reviewNameContainer, children: null };
  const items1 = [timestampProducer(obj11[review.key], { size: "sm", color: nativeDefault.colors.ICON_STRONG }), timestampProducer(Text_Text.Text, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: review.title })];
  obj2.children = items1;
  const items2 = [React5(React4, obj2), ];
  const obj5 = { style: tmp.ratingContainer, children: null };
  const items3 = [tmp.ratingDescription, ];
  let linkText;
  if (noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).alwaysShowLinkDecorations) {
    linkText = tmp.linkText;
  }
  items3[1] = linkText;
  const items4 = [timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", lineClamp: 1, style: items3, children: review.ratingText }), timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, children: review.ratingCountText })];
  obj5.children = items4;
  items2[1] = React5(React4, obj5);
  obj.children = items2;
  return React5(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { gap: nativeDefault.space.PX_8 }, headerText: null, reviewContainer: null, reviewRowContainer: null, reviewRowContainerNotLast: null, reviewRow: null, reviewNameContainer: null, ratingContainer: null, ratingDescription: null, opencriticRightContainer: null, opencriticTopCriticContainer: null, opencriticTopCriticImage: null, opencriticTopCriticRatingContainer: null, linkText: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.headerText = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj2.reviewContainer = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
obj2.reviewRowContainer = { height: 56 };
let obj5 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
obj2.reviewRowContainerNotLast = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj6 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.reviewRow = { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_12 };
let obj7 = { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_12 };
obj2.reviewNameContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.ratingContainer = { flexDirection: "row", alignItems: "flex-end", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_4 };
obj2.ratingDescription = { flexShrink: 1 };
let obj9 = { flexDirection: "row", alignItems: "flex-end", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_4 };
obj2.opencriticRightContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
obj2.opencriticTopCriticContainer = size;
obj2.opencriticTopCriticImage = { width: 32, height: 32 };
obj2.opencriticTopCriticRatingContainer = { position: "absolute", top: 0, left: 1, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" };
obj2.linkText = { textDecorationLine: "underline" };
let closure_8 = createStyles.createStyles(obj2);
let obj11 = { appStore: fn(8013).AppleNeutralIcon, googlePlay: fn(9389).GooglePlayNeutralIcon };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReviews.tsx");

export default function GameProfileReviews(arg0) {
  ({ game, trackAction } = arg0);
  const tmp = closure_8();
  _require = tmp;
  const steamWebsiteUrl = require("useSteamWebsiteUrl").useSteamWebsiteUrl(game.id);
  const opencriticUrl = game.opencriticUrl;
  const obj = require("useSteamWebsiteUrl");
  const gameProfileReviewDisplayData = require("useGameProfileReviewDisplayData").useGameProfileReviewDisplayData(game, steamWebsiteUrl);
  ({ steamReview, showSteamReview, showRecentSteamReview, mobileStoreReviews, primarySteamRating, primarySteamRatingCount, primarySteamTitleKey } = gameProfileReviewDisplayData);
  const obj2 = require("useGameProfileReviewDisplayData");
  let result = require("GameProfileReviewUtils").canShowOpenCriticReview(game, mobileStoreReviews);
  const items = [];
  if (showRecentSteamReview) {
    showRecentSteamReview = null != steamWebsiteUrl;
  }
  if (showRecentSteamReview) {
    const obj4 = { url: steamWebsiteUrl, trackAction, title: null, rating: null, ratingCount: null, isRecentRating: true };
    const intl = tmp2(1113).intl;
    obj4.title = intl.string(tmp2(1113).t.MQGNsN);
    let recentRating;
    if (steamReview != null) {
      recentRating = steamReview.recentRating;
    }
    obj4.rating = recentRating;
    let recentRatingCount;
    if (steamReview != null) {
      recentRatingCount = steamReview.recentRatingCount;
    }
    const obj5 = { key: "steam-recent", row: null };
    obj4.ratingCount = recentRatingCount;
    obj5.row = closure_6(SteamReviewRow, obj4);
    items.push(obj5);
  }
  if (showSteamReview) {
    showSteamReview = null != steamWebsiteUrl;
  }
  if (showSteamReview) {
    const obj6 = { key: "steam-primary", row: null };
    const obj7 = { url: steamWebsiteUrl, trackAction, title: null, rating: null, ratingCount: null, isRecentRating: false };
    const intl2 = tmp2(1113).intl;
    obj7.title = intl2.string(primarySteamTitleKey);
    obj7.rating = primarySteamRating;
    obj7.ratingCount = primarySteamRatingCount;
    obj6.row = closure_6(SteamReviewRow, obj7);
    items.push(obj6);
  }
  for (const item10068 of mobileStoreReviews) {
    let obj8 = { key: item10068.key, row: null };
    let obj9 = { review: item10068, trackAction };
    obj8.row = closure_6(MobileStoreReviewRow, obj9);
    let arr6 = items.push(obj8);
    continue;
  }
  if (result) {
    result = null != opencriticUrl;
  }
  if (result) {
    const obj10 = { key: "opencritic", row: null };
    obj11 = { game, url: opencriticUrl, trackAction };
    obj10.row = closure_6(OpenCriticReview, obj11);
    items.push(obj10);
  }
  let tmp25 = null;
  if (0 !== items.length) {
    const obj12 = { style: tmp.container, children: null };
    const obj13 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
    const intl3 = require("util").intl;
    obj13.children = intl3.string(require("util").t.GaAQXP);
    const items1 = [closure_6(require("Text/Text").Text, obj13), ];
    const obj14 = {
      style: tmp.reviewContainer,
      children: items.map((item, index) => {
          const style = [closure_0.reviewRowContainer, ];
          let reviewRowContainerNotLast = index < items.length - 1;
          ({ key, row } = item);
          if (reviewRowContainerNotLast) {
            reviewRowContainerNotLast = closure_0.reviewRowContainerNotLast;
          }
          style[1] = reviewRowContainerNotLast;
          return timestampProducer(React4, { style, children }, key);
        })
    };
    items1[1] = closure_6(closure_4, obj14);
    obj12.children = items1;
    tmp25 = closure_7(closure_4, obj12);
  }
  return tmp25;
};