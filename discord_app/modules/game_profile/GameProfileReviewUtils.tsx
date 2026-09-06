// === Module 8724: GameProfileReviewUtils ===

// Module 8724 (GameProfileReviewUtils)
import util from "util" /* 1114 */;
import GameDetectionTypes from "GameDetectionTypes" /* 1934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/GameProfileReviewUtils.tsx");

export const getSteamReviewScoreDescriptionColor = function getSteamReviewScoreDescriptionColor(NO_USER_REVIEWS) {
  if (GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS === NO_USER_REVIEWS) {
    return "text-subtle";
  } else {
    if (GameDetectionTypes.SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE !== NO_USER_REVIEWS) {
      if (GameDetectionTypes.SteamReviewScoreDescription.VERY_POSITIVE !== NO_USER_REVIEWS) {
        if (GameDetectionTypes.SteamReviewScoreDescription.POSITIVE !== NO_USER_REVIEWS) {
          if (GameDetectionTypes.SteamReviewScoreDescription.MOSTLY_POSITIVE !== NO_USER_REVIEWS) {
            if (GameDetectionTypes.SteamReviewScoreDescription.MIXED === NO_USER_REVIEWS) {
              return "steam-review-text-mixed";
            } else {
              if (GameDetectionTypes.SteamReviewScoreDescription.MOSTLY_NEGATIVE !== NO_USER_REVIEWS) {
                if (GameDetectionTypes.SteamReviewScoreDescription.NEGATIVE !== NO_USER_REVIEWS) {
                  if (GameDetectionTypes.SteamReviewScoreDescription.VERY_NEGATIVE !== NO_USER_REVIEWS) {
                    if (GameDetectionTypes.SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE !== NO_USER_REVIEWS) {
                      return "text-subtle";
                    }
                  }
                }
              }
              return "steam-review-text-negative";
            }
          }
        }
      }
    }
    return "steam-review-text-positive";
  }
};
export const getSteamReviewScoreDescriptionIntl = function getSteamReviewScoreDescriptionIntl(result) {
  if (GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS === result) {
    const intl10 = util.intl;
    return intl10.string(util.t.CLMt8J);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE === result) {
    const intl9 = util.intl;
    return intl9.string(util.t["75sx1S"]);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.VERY_POSITIVE === result) {
    const intl8 = util.intl;
    return intl8.string(util.t["EkOVg+"]);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.POSITIVE === result) {
    const intl7 = util.intl;
    return intl7.string(util.t.ZUkFtr);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.MOSTLY_POSITIVE === result) {
    const intl6 = util.intl;
    return intl6.string(util.t.M7Z09a);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.MIXED === result) {
    const intl5 = util.intl;
    return intl5.string(util.t.c8yuHR);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.MOSTLY_NEGATIVE === result) {
    const intl4 = util.intl;
    return intl4.string(util.t.H0MSjG);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.NEGATIVE === result) {
    const intl3 = util.intl;
    return intl3.string(util.t.vpLrgz);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.VERY_NEGATIVE === result) {
    const intl2 = util.intl;
    return intl2.string(util.t["5spYuX"]);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE === result) {
    const intl = util.intl;
    return intl.string(util.t.A8uk5J);
  } else {
    return null;
  }
};
export const canShowLocalizedSteamReview = function canShowLocalizedSteamReview(steam) {
  let tmp = null != steam && null != steam.localizedRating && null != steam.localizedRatingCount && null != steam.ratingCount;
  if (tmp) {
    tmp = steam.localizedRatingCount >= 200;
  }
  if (tmp) {
    tmp = steam.ratingCount >= 2000;
  }
  return tmp;
};