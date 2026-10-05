// === Module 8376: GameProfileReviewUtils ===

// Module 8376 (GameProfileReviewUtils)
import intl11 from "intl" /* 1126 */;
import GameDetectionTypes from "GameDetectionTypes" /* 2027 */;
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
    const intl10 = intl11.intl;
    return intl10.string(intl11.t.CLMt8J);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE === result) {
    const intl9 = intl11.intl;
    return intl9.string(intl11.t["75sx1S"]);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.VERY_POSITIVE === result) {
    const intl8 = intl11.intl;
    return intl8.string(intl11.t["EkOVg+"]);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.POSITIVE === result) {
    const intl7 = intl11.intl;
    return intl7.string(intl11.t.ZUkFtr);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.MOSTLY_POSITIVE === result) {
    const intl6 = intl11.intl;
    return intl6.string(intl11.t.M7Z09a);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.MIXED === result) {
    const intl5 = intl11.intl;
    return intl5.string(intl11.t.c8yuHR);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.MOSTLY_NEGATIVE === result) {
    const intl4 = intl11.intl;
    return intl4.string(intl11.t.H0MSjG);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.NEGATIVE === result) {
    const intl3 = intl11.intl;
    return intl3.string(intl11.t.vpLrgz);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.VERY_NEGATIVE === result) {
    const intl2 = intl11.intl;
    return intl2.string(intl11.t["5spYuX"]);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE === result) {
    const intl = intl11.intl;
    return intl.string(intl11.t.A8uk5J);
  } else {
    return null;
  }
};
export const canShowLocalizedSteamReview = function canShowLocalizedSteamReview(steam) {
  return null != steam && null != steam.localizedRating && null != steam.localizedRatingCount && null != steam.ratingCount && steam.localizedRatingCount >= 200 && steam.ratingCount >= 2000;
};