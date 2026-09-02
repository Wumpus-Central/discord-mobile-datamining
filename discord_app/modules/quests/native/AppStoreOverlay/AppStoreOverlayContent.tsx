// === Module 11318: _getAppStoreOverlayContent ===

// Module 11318 (_getAppStoreOverlayContent)
import _openURL from "_openURL" /* 4184 */;
import _modDef4190 from "module_4190" /* 4190 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;

require = arg1;
function _getAppStoreOverlayContent() {
  const self = this;
  let tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c5 = 0;
    c4 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp6;
              closure_2 = undefined;
              c4 = 1;
              let obj2 = callback(closure_1_2[4]);
              c3 = 2;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj2.fetchAppStoreMetadata(callback);
              return obj1;
            }
          } else if (1 === tmp6) {
            c4 = 0;
            c5 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c5 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_2 = arg1;
            let tmp9 = null;
            if (null != closure_2) {
              tmp9 = (function toOverlayContent(closure_2, closure_0, closure_1) {
                let tmp = null != closure_2.rating;
                if (tmp) {
                  tmp = closure_2.rating > 0;
                }
                const items = [];
                if (tmp) {
                  let obj = { type: "rating", label: null, rating: null, ratingCount: null };
                  const intl = callback(1233).intl;
                  obj[1] = intl.string(callback(1233).t["9bEWZJ"]);
                  ({ rating: obj[2], rating_count } = closure_2);
                  obj[3] = rating_count;
                  items.push(obj);
                }
                let tmp5 = null != closure_2.age_rating;
                if (tmp5) {
                  tmp5 = "" !== closure_2.age_rating;
                }
                if (tmp5) {
                  obj = { type: "age", label: null, ageRating: null, ageRatingLabel: null };
                  const intl2 = callback(1233).intl;
                  obj[1] = intl2.string(callback(1233).t.ncrlHJ);
                  obj[2] = closure_2.age_rating;
                  const intl3 = callback(1233).intl;
                  obj[3] = intl3.string(callback(1233).t.wK1svU);
                  items.push(obj);
                }
                if (null != closure_2.chart_rank) {
                  obj = { type: "chart", label: null, rank: null, category: null };
                  const intl4 = callback(1233).intl;
                  obj[1] = intl4.string(callback(1233).t["x/ERbV"]);
                  ({ chart_rank: obj3[2], category } = closure_2);
                  obj[3] = category;
                  items.push(obj);
                }
                const screenshots = closure_2.screenshots;
                const found = screenshots.filter((arg0) => "" !== arg0);
                if (null != closure_2.app_id) {
                  if ("" !== closure_2.app_id) {
                    let storeAppId = closure_2.app_id;
                  }
                  obj1 = { title: null, subtitle: null, description: null, iconUrl: null, headerUrl: null, stats: null, media: null, storeUrl: null, appId: null, platform: null };
                  ({ name: obj4[0], category: obj4[1], description: obj4[2], icon: obj4[3], header_image } = closure_2);
                  obj1[4] = header_image;
                  let tmp12;
                  if (items.length > 0) {
                    tmp12 = items;
                  }
                  obj1[5] = tmp12;
                  let mapped;
                  if (found.length > 0) {
                    mapped = found.map((url) => ({ type: "screenshot", url }));
                  }
                  obj1[6] = mapped;
                  obj1[7] = closure_1;
                  obj1[8] = storeAppId;
                  obj1[9] = closure_0.os;
                  return obj1;
                }
                storeAppId = closure_0.storeAppId;
              })(closure_2, callback, closure_1);
            }
            c4 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = tmp9;
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
    })();
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayContent.tsx");

export const getIosAppStoreReviewsUrl = function getIosAppStoreReviewsUrl(arg0) {
  return "itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=" + arg0 + "&onlyLatestVersion=true&pageNumber=0&sortOrdering=1&type=Purple+Software";
};
export const openAppStoreReviews = function openAppStoreReviews(storeUrl, platform, appId) {
  if ("ios" === platform) {
    if (null != appId) {
      if ("" !== appId) {
        const _HermesInternal = HermesInternal;
        _modDef4190.performURLNavigation("itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=" + appId + "&onlyLatestVersion=true&pageNumber=0&sortOrdering=1&type=Purple+Software");
        const obj = _modDef4190;
      }
    }
  }
  _openURL.default(storeUrl);
};
export const getAppStoreOverlayContent = function getAppStoreOverlayContent(inlineStoreParamsFromCta, url) {
  const self = this;
  const apply = _getAppStoreOverlayContent.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};