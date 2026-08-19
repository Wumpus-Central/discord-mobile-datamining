// discord_app/modules/game_profile/GameProfileReviewUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";
import GameTheme from "../game_detection/GameDetectionTypes.tsx";

const result = obj132.fileFinishedImporting("modules/game_profile/GameProfileReviewUtils.tsx");

export const getSteamReviewScoreDescriptionColor = function getSteamReviewScoreDescriptionColor(NO_USER_REVIEWS) {
  if (GameTheme.SteamReviewScoreDescription.NO_USER_REVIEWS === NO_USER_REVIEWS) {
    return "text-subtle";
  } else {
    if (GameTheme.SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE !== NO_USER_REVIEWS) {
      if (GameTheme.SteamReviewScoreDescription.VERY_POSITIVE !== NO_USER_REVIEWS) {
        if (GameTheme.SteamReviewScoreDescription.POSITIVE !== NO_USER_REVIEWS) {
          if (GameTheme.SteamReviewScoreDescription.MOSTLY_POSITIVE !== NO_USER_REVIEWS) {
            if (GameTheme.SteamReviewScoreDescription.MIXED === NO_USER_REVIEWS) {
              return "steam-review-text-mixed";
            } else {
              if (GameTheme.SteamReviewScoreDescription.MOSTLY_NEGATIVE !== NO_USER_REVIEWS) {
                if (GameTheme.SteamReviewScoreDescription.NEGATIVE !== NO_USER_REVIEWS) {
                  if (GameTheme.SteamReviewScoreDescription.VERY_NEGATIVE !== NO_USER_REVIEWS) {
                    if (GameTheme.SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE !== NO_USER_REVIEWS) {
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
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.CLMt8J);
  } else if (GameTheme.SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE === result) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t["75sx1S"]);
  } else if (GameTheme.SteamReviewScoreDescription.VERY_POSITIVE === result) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t["EkOVg+"]);
  } else if (GameTheme.SteamReviewScoreDescription.POSITIVE === result) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.ZUkFtr);
  } else if (GameTheme.SteamReviewScoreDescription.MOSTLY_POSITIVE === result) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.M7Z09a);
  } else if (GameTheme.SteamReviewScoreDescription.MIXED === result) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.c8yuHR);
  } else if (GameTheme.SteamReviewScoreDescription.MOSTLY_NEGATIVE === result) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.H0MSjG);
  } else if (GameTheme.SteamReviewScoreDescription.NEGATIVE === result) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.vpLrgz);
  } else if (GameTheme.SteamReviewScoreDescription.VERY_NEGATIVE === result) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["5spYuX"]);
  } else if (GameTheme.SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE === result) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.A8uk5J);
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