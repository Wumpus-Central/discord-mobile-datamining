// === Module 10721: AppStoreOverlayContent ===

// Module 10721 (AppStoreOverlayContent)
import openURL from "openURL" /* 4519 */;
import LinkingDefault from "Linking" /* 4525 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_4 = async function _getAppStoreOverlayContent(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          dependencyMap = tmp6;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_130_2 = undefined;
          c4 = 1;
          c3 = 2;
          c5 = 1;
          const obj5 = { value: require("AppStoreMetadataActionCreators").fetchAppStoreMetadata(closure_0), done: false };
          return obj5;
        }
      } else if (1 === tmp6) {
        c4 = 0;
        c5 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c5 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_130_2 = value;
        let tmp9 = null;
        if (null != closure_130_2) {
          tmp9 = (function toOverlayContent(rating, os, storeUrl) {
            let tmp = null != rating.rating;
            if (tmp) {
              tmp = rating.rating > 0;
            }
            const items = [];
            if (tmp) {
              const obj = { type: "rating", label: null, rating: null, ratingCount: null };
              const intl = closure_1_0(1115).intl;
              obj.label = intl.string(closure_1_0(1115).t["9bEWZJ"]);
              ({ rating: obj.rating, rating_count } = rating);
              obj.ratingCount = rating_count;
              items.push(obj);
            }
            let tmp5 = null != rating.age_rating;
            if (tmp5) {
              tmp5 = "" !== rating.age_rating;
            }
            if (tmp5) {
              const obj2 = { type: "age", label: null, ageRating: null, ageRatingLabel: null };
              const intl2 = closure_1_0(1115).intl;
              obj2.label = intl2.string(closure_1_0(1115).t.ncrlHJ);
              obj2.ageRating = rating.age_rating;
              const intl3 = closure_1_0(1115).intl;
              obj2.ageRatingLabel = intl3.string(closure_1_0(1115).t.wK1svU);
              items.push(obj2);
            }
            if (null != rating.chart_rank) {
              const obj7 = { type: "chart", label: null, rank: null, category: null };
              const intl4 = closure_1_0(1115).intl;
              obj7.label = intl4.string(closure_1_0(1115).t["x/ERbV"]);
              ({ chart_rank: obj3.rank, category } = rating);
              obj7.category = category;
              items.push(obj7);
            }
            const screenshots = rating.screenshots;
            const found = screenshots.filter((item) => "" !== item);
            if (null != rating.app_id) {
              if ("" !== rating.app_id) {
                let storeAppId = rating.app_id;
              }
              const obj8 = { title: null, subtitle: null, description: null, iconUrl: null, headerUrl: null, stats: null, media: null, storeUrl: null, appId: null, platform: null };
              ({ name: obj4.title, category: obj4.subtitle, description: obj4.description, icon: obj4.iconUrl, header_image } = rating);
              obj8.headerUrl = header_image;
              let tmp12;
              if (items.length > 0) {
                tmp12 = items;
              }
              obj8.stats = tmp12;
              let mapped;
              if (found.length > 0) {
                mapped = found.map((url) => ({ type: "screenshot", url }));
              }
              obj8.media = mapped;
              obj8.storeUrl = storeUrl;
              obj8.appId = storeAppId;
              obj8.platform = os.os;
              return obj8;
            }
            storeAppId = os.storeAppId;
          })(closure_130_2, closure_130_0, closure_130_1);
        }
        c4 = 0;
        c5 = 3;
        let obj = { value: tmp9, done: true };
        return obj;
      }
    } catch (tmp18) {
      if (tmp3 === c4) {
        c5 = tmp2;
        throw tmp18;
      } else {
        c3 = tmp;
      }
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayContent.tsx");

export const getIosAppStoreReviewsUrl = function getIosAppStoreReviewsUrl(arg0) {
  return "itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=" + arg0 + "&onlyLatestVersion=true&pageNumber=0&sortOrdering=1&type=Purple+Software";
};
export const openAppStoreReviews = function openAppStoreReviews(storeUrl, platform, appId) {
  if ("ios" === platform) {
    if (null != appId) {
      if ("" !== appId) {
        const _HermesInternal = HermesInternal;
        LinkingDefault.performURLNavigation("itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=" + appId + "&onlyLatestVersion=true&pageNumber=0&sortOrdering=1&type=Purple+Software");
      }
    }
  }
  openURL.default(storeUrl);
};
export const getAppStoreOverlayContent = function getAppStoreOverlayContent() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};