// === Module 9164: GameProfileReviewUtils ===

// Module 9164 (GameProfileReviewUtils)
import ApplicationDistributors from "ApplicationDistributors" /* 1106 */;
import util from "util" /* 1128 */;
import GameDetectionTypes from "GameDetectionTypes" /* 2043 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9104 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 9118 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 9120 */;
import size from "module_2" /* 2 */;

const obj = { appStore: null, googlePlay: null };
let obj2 = {
  getTitle() {
    const intl = util.intl;
    return intl.string(util.t.LVy7Ug);
  },
  websiteCategories: null,
  websiteHostnames: null,
  distributor: null,
  buildUrl: null,
  action: null
};
let items = [ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPHONE, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPAD];
obj2.websiteCategories = items;
obj2.websiteHostnames = ["apps.apple.com", "itunes.apple.com"];
obj2.distributor = ApplicationDistributors.ApplicationDistributors.APPLE_APP_STORE;
obj2.buildUrl = function buildUrl(arg0) {
  return "https://apps.apple.com/app/id" + arg0;
};
obj2.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.AppStoreReviews;
obj.appStore = obj2;
let obj3 = {
  getTitle() {
    const intl = util.intl;
    return intl.string(util.t.V6rllO);
  },
  websiteCategories: null,
  websiteHostnames: null,
  distributor: null,
  buildUrl: null,
  action: null
};
let items1 = [ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ANDROID];
obj3.websiteCategories = items1;
obj3.websiteHostnames = ["play.google.com"];
obj3.distributor = ApplicationDistributors.ApplicationDistributors.GOOGLE_PLAY;
obj3.buildUrl = function buildUrl(arg0) {
  return "https://play.google.com/store/apps/details?id=" + encodeURIComponent(arg0);
};
obj3.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.GooglePlayReviews;
obj.googlePlay = obj3;
const result = size.fileFinishedImporting("modules/game_profile/GameProfileReviewUtils.tsx");

export const getMobileStoreReviews = function getMobileStoreReviews(reviews) {
  const entries = Object.entries(obj);
  return entries.flatMap((item) => {
    [tmp, obj] = item;
    reviews = reviews.reviews;
    let tmp3;
    if (reviews != null) {
      tmp3 = reviews[tmp];
    }
    let rating;
    if (tmp3 != null) {
      rating = tmp3.rating;
    }
    if (tmp3 != null) {
      const ratingCount = tmp3.ratingCount;
    }
    if (null != rating) {
      if (null != ratingCount) {
        const websites = tmp2.websites;
        const found = websites.find((url) => {
          url = url.url;
          try {
            const websiteCategories = obj.websiteCategories;
            let hasItem = websiteCategories.includes(tmp);
            if (hasItem) {
              const websiteHostnames = obj.websiteHostnames;
              const _URL = URL;
              const uRL = new URL(url);
              hasItem = websiteHostnames.includes(uRL.hostname);
            }
            return hasItem;
          } catch (err) {
            return false;
          }
        });
        if (null != found) {
          let url = found.url;
        } else {
          const thirdPartySkus = tmp2.thirdPartySkus;
          const found1 = thirdPartySkus.find((distributor) => distributor.distributor === obj.distributor);
          let id;
          if (found1 != null) {
            id = found1.id;
          }
          url = null;
          if (null != id) {
            url = obj.buildUrl(id);
          }
        }
        if (null != url) {
          const title = obj.getTitle();
          const _Intl = Intl;
          const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          const formatResult = numberFormat.format(rating);
          const obj2 = { key: tmp, url, title, ratingText: null, ratingCountText: null, accessibilityLabel: null, action: null };
          const intl = util.intl;
          const obj3 = { rating: formatResult };
          obj2.ratingText = intl.format(util.t["zdL4/T"], obj3).toString();
          const intl2 = util.intl;
          const obj4 = { rating_count: ratingCount };
          const str = intl.format(util.t["zdL4/T"], obj3);
          obj2.ratingCountText = intl2.format(util.t.u1m2hs, obj4).toString();
          const intl3 = util.intl;
          const obj5 = { store: title, rating: formatResult, rating_count: ratingCount };
          const str2 = intl2.format(util.t.u1m2hs, obj4);
          obj2.accessibilityLabel = intl3.format(util.t["63jSRx"], obj5).toString();
          obj2.action = obj.action;
          const items = [obj2];
          let items1 = items;
          const str3 = intl3.format(util.t["63jSRx"], obj5);
        } else {
          items1 = [];
        }
        return items1;
      }
    }
    return [];
  });
};
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
export const canShowOpenCriticReview = function canShowOpenCriticReview(game, gameProfileMobileStoreReviews) {
  let tmp = game.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED;
  if (!tmp) {
    tmp = gameProfileMobileStoreReviews.length > 0;
  }
  if (tmp) {
    const reviews = game.reviews;
    let opencritic;
    if (reviews != null) {
      opencritic = reviews.opencritic;
    }
    tmp = null != opencritic;
  }
  if (tmp) {
    tmp = null != game.opencriticUrl;
  }
  return tmp;
};