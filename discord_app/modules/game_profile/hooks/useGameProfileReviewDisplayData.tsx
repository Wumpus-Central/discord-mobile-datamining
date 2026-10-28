// === Module 9363: useGameProfileReviewDisplayData ===

// Module 9363 (useGameProfileReviewDisplayData)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import GameDetectionTypes from "GameDetectionTypes" /* 2039 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 9307 */;
import calculateSteamReviewScoreDescription from "calculateSteamReviewScoreDescription" /* 9353 */;
import GameProfileReviewUtils from "GameProfileReviewUtils" /* 9354 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileReviewDisplayData.tsx");

export const useGameProfileReviewDisplayData = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileReviewDisplayData(reviews, arg1) {
  const cResult = c.c(16);
  reviews = reviews.reviews;
  let steam;
  if (reviews != null) {
    steam = reviews.steam;
  }
  let tmp5 = reviews.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED;
  if (tmp5) {
    tmp5 = null != arg1;
  }
  let recentRating;
  if (steam != null) {
    recentRating = steam.recentRating;
  }
  let recentRatingCount;
  if (steam != null) {
    recentRatingCount = steam.recentRatingCount;
  }
  if (cResult[0] === recentRating) {
    if (cResult[1] === recentRatingCount) {
      let tmp9 = cResult[2];
    }
    let tmp11 = tmp5;
    if (tmp5) {
      tmp11 = tmp9 !== GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS;
    }
    if (cResult[3] !== steam) {
      let tmp13 = null != steam && null != steam.localizedRating && null != steam.localizedRatingCount && null != steam.ratingCount;
      if (tmp13) {
        tmp13 = steam.localizedRatingCount >= 200;
      }
      if (tmp13) {
        tmp13 = steam.ratingCount >= 2000;
      }
      cResult[3] = steam;
      cResult[4] = tmp13;
      let tmp12 = tmp13;
    } else {
      tmp12 = cResult[4];
    }
    if (tmp12) {
      let localizedRating;
      if (!tmp14) {
        localizedRating = steam.localizedRating;
      }
      let rating = localizedRating;
    } else if (!tmp14) {
      rating = steam.rating;
    }
    if (tmp12) {
      let localizedRatingCount;
      if (!tmp16) {
        localizedRatingCount = steam.localizedRatingCount;
      }
      let ratingCount = localizedRatingCount;
    } else if (!tmp16) {
      ratingCount = steam.ratingCount;
    }
    const t = util.t;
    const tmp18 = tmp12 ? t["aWb+V4"] : t["8e4LiB"];
    if (cResult[5] !== reviews) {
      const mobileStoreReviews = GameProfileReviewUtils.getMobileStoreReviews(reviews);
      cResult[5] = reviews;
      cResult[6] = mobileStoreReviews;
      let tmp19 = mobileStoreReviews;
      const tmpResult = GameProfileReviewUtils;
    } else {
      tmp19 = cResult[6];
    }
    if (cResult[7] === tmp12) {
      if (cResult[8] === tmp11) {
        if (cResult[9] === tmp5) {
          if (cResult[10] === steam) {
            if (cResult[11] === rating) {
              if (cResult[12] === ratingCount) {
                if (cResult[13] === tmp18) {
                  if (cResult[14] === tmp19) {
                    let tmp21 = cResult[15];
                  }
                  return tmp21;
                }
              }
            }
          }
        }
      }
    }
    const obj2 = { steamReview: steam, showSteamReview: tmp5, showRecentSteamReview: tmp11, showLocalizedReview: tmp12, primarySteamRating: rating, primarySteamRatingCount: ratingCount, primarySteamTitleKey: tmp18, mobileStoreReviews: tmp19 };
    cResult[7] = tmp12;
    cResult[8] = tmp11;
    cResult[9] = tmp5;
    cResult[10] = steam;
    cResult[11] = rating;
    cResult[12] = ratingCount;
    cResult[13] = tmp18;
    cResult[14] = tmp19;
    cResult[15] = obj2;
    tmp21 = obj2;
  }
  const result = calculateSteamReviewScoreDescription.calculateSteamReviewScoreDescription(recentRating, recentRatingCount, true);
  cResult[0] = recentRating;
  cResult[1] = recentRatingCount;
  cResult[2] = result;
  tmp9 = result;
  const tmpResult2 = calculateSteamReviewScoreDescription;
}) : (function useGameProfileReviewDisplayData(arg0, arg1) {
  let reviews = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return noop.useMemo(() => {
    reviews = reviews.reviews;
    let steam;
    if (reviews != null) {
      steam = reviews.steam;
    }
    let tmp5 = tmp.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED;
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
    obj.mobileStoreReviews = GameProfileReviewUtils.getMobileStoreReviews(reviews);
    return obj;
  }, items);
});