// === Module 9401: useGameProfileReviewDisplayData ===

// Module 9401 (useGameProfileReviewDisplayData)
import util from "util" /* 1113 */;
import GameDetectionTypes from "GameDetectionTypes" /* 2035 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 9345 */;
import calculateSteamReviewScoreDescription from "calculateSteamReviewScoreDescription" /* 9391 */;
import GameProfileReviewUtils from "GameProfileReviewUtils" /* 9392 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileReviewDisplayData.tsx");

export function useGameProfileReviewDisplayData(game, steamWebsiteUrl) {
  closure_1 = steamWebsiteUrl;
  const items = [game, steamWebsiteUrl];
  return noop.useMemo(() => {
    const reviews = game.reviews;
    let steam;
    if (reviews != null) {
      steam = reviews.steam;
    }
    let tmp5 = game.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED;
    if (tmp5) {
      tmp5 = null != closure_1;
    }
    calculateSteamReviewScoreDescription;
    if (steam != null) {
      const recentRating = steam.recentRating;
    }
    if (steam != null) {
      const recentRatingCount = steam.recentRatingCount;
    }
    let tmp9 = tmp5;
    if (tmp5) {
      tmp9 = tmp8 !== GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS;
    }
    let tmp10 = null != steam && null != steam.localizedRating && null != steam.localizedRatingCount && null != steam.ratingCount;
    if (tmp10) {
      tmp10 = steam.localizedRatingCount >= 200;
    }
    if (tmp10) {
      tmp10 = steam.ratingCount >= 2000;
    }
    const obj = { steamReview: steam, showSteamReview: tmp5, showRecentSteamReview: tmp9, showLocalizedReview: tmp10, primarySteamRating: null, primarySteamRatingCount: null, primarySteamTitleKey: null, mobileStoreReviews: null };
    if (tmp10) {
      let localizedRating;
      if (!tmp11) {
        localizedRating = steam.localizedRating;
      }
      let rating = localizedRating;
    } else if (!tmp11) {
      rating = steam.rating;
    }
    obj.primarySteamRating = rating;
    if (tmp10) {
      let localizedRatingCount;
      if (!tmp13) {
        localizedRatingCount = steam.localizedRatingCount;
      }
      let ratingCount = localizedRatingCount;
    } else if (!tmp13) {
      ratingCount = steam.ratingCount;
    }
    obj.primarySteamRatingCount = ratingCount;
    const t = util.t;
    obj.primarySteamTitleKey = tmp10 ? t["aWb+V4"] : t["8e4LiB"];
    obj.mobileStoreReviews = GameProfileReviewUtils.getMobileStoreReviews(game);
    return obj;
  }, items);
}