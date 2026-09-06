// === Module 11498: AppStoreOverlayContent ===

// Module 11498 (AppStoreOverlayContent)
import openURL from "openURL" /* 4249 */;
import LinkingDefault from "Linking" /* 4255 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_4 = async function _getAppStoreOverlayContent(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          dependencyMap = tmp6;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_130_2 = undefined;
          c4 = 1;
          let obj2 = require("AppStoreMetadataActionCreators");
          c3 = 2;
          c5 = 1;
          let obj1 = { value: obj2.fetchAppStoreMetadata(closure_0), done: false };
          return obj1;
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
        obj2 = { value, done: true };
        return obj2;
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
              let obj = { type: "rating", label: null, rating: null, ratingCount: null };
              const intl = closure_1_0(1114).intl;
              obj.label = intl.string(closure_1_0(1114).t["9bEWZJ"]);
              ({ rating: obj.rating, rating_count } = rating);
              obj.ratingCount = rating_count;
              items.push(obj);
            }
            let tmp5 = null != rating.age_rating;
            if (tmp5) {
              tmp5 = "" !== rating.age_rating;
            }
            if (tmp5) {
              obj = { type: "age", label: null, ageRating: null, ageRatingLabel: null };
              const intl2 = closure_1_0(1114).intl;
              obj.label = intl2.string(closure_1_0(1114).t.ncrlHJ);
              obj.ageRating = rating.age_rating;
              const intl3 = closure_1_0(1114).intl;
              obj.ageRatingLabel = intl3.string(closure_1_0(1114).t.wK1svU);
              items.push(obj);
            }
            if (null != rating.chart_rank) {
              obj = { type: "chart", label: null, rank: null, category: null };
              const intl4 = closure_1_0(1114).intl;
              obj.label = intl4.string(closure_1_0(1114).t["x/ERbV"]);
              ({ chart_rank: obj3.rank, category } = rating);
              obj.category = category;
              items.push(obj);
            }
            const screenshots = rating.screenshots;
            const found = screenshots.filter((item) => "" !== item);
            if (null != rating.app_id) {
              if ("" !== rating.app_id) {
                let storeAppId = rating.app_id;
              }
              const obj1 = { title: null, subtitle: null, description: null, iconUrl: null, headerUrl: null, stats: null, media: null, storeUrl: null, appId: null, platform: null };
              ({ name: obj4.title, category: obj4.subtitle, description: obj4.description, icon: obj4.iconUrl, header_image } = rating);
              obj1.headerUrl = header_image;
              let tmp12;
              if (items.length > 0) {
                tmp12 = items;
              }
              obj1.stats = tmp12;
              let mapped;
              if (found.length > 0) {
                mapped = found.map((url) => ({ type: "screenshot", url }));
              }
              obj1.media = mapped;
              obj1.storeUrl = storeUrl;
              obj1.appId = storeAppId;
              obj1.platform = os.os;
              return obj1;
            }
            storeAppId = os.storeAppId;
          })(closure_130_2, closure_130_0, closure_130_1);
        }
        c4 = 0;
        c5 = 3;
        obj = { value: tmp9, done: true };
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