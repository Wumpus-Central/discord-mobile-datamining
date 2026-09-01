// === Module 8850: getSteamReviewScoreDescriptionColor ===

// Module 8850 (getSteamReviewScoreDescriptionColor)
import set from "set" /* 2 */;
import GameTheme from "GameTheme" /* 4516 */;

const result = set.fileFinishedImporting("modules/game_profile/GameProfileReviewUtils.tsx");

export const getSteamReviewScoreDescriptionColor = function getSteamReviewScoreDescriptionColor(NO_USER_REVIEWS) {
  if (GameTheme.SteamReviewScoreDescription.NO_USER_REVIEWS === NO_USER_REVIEWS) {
    return "text-subtle";
  } else {
    if (tmp(4516).SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE !== NO_USER_REVIEWS) {
      if (tmp(4516).SteamReviewScoreDescription.VERY_POSITIVE !== NO_USER_REVIEWS) {
        if (tmp(4516).SteamReviewScoreDescription.POSITIVE !== NO_USER_REVIEWS) {
          if (tmp(4516).SteamReviewScoreDescription.MOSTLY_POSITIVE !== NO_USER_REVIEWS) {
            if (tmp(4516).SteamReviewScoreDescription.MIXED === NO_USER_REVIEWS) {
              return "steam-review-text-mixed";
            } else {
              if (tmp(4516).SteamReviewScoreDescription.MOSTLY_NEGATIVE !== NO_USER_REVIEWS) {
                if (tmp(4516).SteamReviewScoreDescription.NEGATIVE !== NO_USER_REVIEWS) {
                  if (tmp(4516).SteamReviewScoreDescription.VERY_NEGATIVE !== NO_USER_REVIEWS) {
                    if (tmp(4516).SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE !== NO_USER_REVIEWS) {
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
  if (GameTheme.SteamReviewScoreDescription.NO_USER_REVIEWS === result) {
    const intl10 = tmp(1236).intl;
    return intl10.string(tmp(1236).t.CLMt8J);
  } else if (tmp(4516).SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE === result) {
    const intl9 = tmp(1236).intl;
    return intl9.string(tmp(1236).t["75sx1S"]);
  } else if (tmp(4516).SteamReviewScoreDescription.VERY_POSITIVE === result) {
    const intl8 = tmp(1236).intl;
    return intl8.string(tmp(1236).t["EkOVg+"]);
  } else if (tmp(4516).SteamReviewScoreDescription.POSITIVE === result) {
    const intl7 = tmp(1236).intl;
    return intl7.string(tmp(1236).t.ZUkFtr);
  } else if (tmp(4516).SteamReviewScoreDescription.MOSTLY_POSITIVE === result) {
    const intl6 = tmp(1236).intl;
    return intl6.string(tmp(1236).t.M7Z09a);
  } else if (tmp(4516).SteamReviewScoreDescription.MIXED === result) {
    const intl5 = tmp(1236).intl;
    return intl5.string(tmp(1236).t.c8yuHR);
  } else if (tmp(4516).SteamReviewScoreDescription.MOSTLY_NEGATIVE === result) {
    const intl4 = tmp(1236).intl;
    return intl4.string(tmp(1236).t.H0MSjG);
  } else if (tmp(4516).SteamReviewScoreDescription.NEGATIVE === result) {
    const intl3 = tmp(1236).intl;
    return intl3.string(tmp(1236).t.vpLrgz);
  } else if (tmp(4516).SteamReviewScoreDescription.VERY_NEGATIVE === result) {
    const intl2 = tmp(1236).intl;
    return intl2.string(tmp(1236).t["5spYuX"]);
  } else if (tmp(4516).SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE === result) {
    const intl = tmp(1236).intl;
    return intl.string(tmp(1236).t.A8uk5J);
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