// === Module 10920: AppStoreOverlayContent ===

// Module 10920 (AppStoreOverlayContent)
import openURL from "openURL" /* 4559 */;
import LinkingDefault from "Linking" /* 4565 */;
import AppStoreMetadataActionCreators from "AppStoreMetadataActionCreators" /* 10921 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _getAppStoreOverlayContent() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c3;
    let c4;
    let c5;
    function toOverlayContent(rating, os, storeUrl) {
      let category;
      let header_image;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let mapped;
      let rating_count;
      let tmp12;
      const items = [];
      const tmp = null != rating.rating && rating.rating > 0;
      if (tmp) {
        obj = { type: "rating", label: intl.string(closure_1_0(closure_1_2[3]).t["9bEWZJ"]), rating: null, ratingCount: rating_count };
        const push = items.push;
        intl = closure_1_0(closure_1_2[3]).intl;
        ({ rating: obj.rating, rating_count } = rating);
        push(obj);
      }
      const tmp5 = null != rating.age_rating && "" !== rating.age_rating;
      if (tmp5) {
        const push2 = items.push;
        const obj2 = { type: "age", label: intl2.string(closure_1_0(closure_1_2[3]).t.ncrlHJ), ageRating: rating.age_rating, ageRatingLabel: intl3.string(closure_1_0(closure_1_2[3]).t.wK1svU) };
        intl2 = closure_1_0(closure_1_2[3]).intl;
        intl3 = closure_1_0(closure_1_2[3]).intl;
        push2(obj2);
      }
      if (null != rating.chart_rank) {
        const push3 = items.push;
        const obj7 = { type: "chart", label: intl4.string(closure_1_0(closure_1_2[3]).t["x/ERbV"]), rank: null, category };
        intl4 = closure_1_0(closure_1_2[3]).intl;
        ({ chart_rank: obj3.rank, category } = rating);
        push3(obj7);
      }
      const screenshots = rating.screenshots;
      const found = screenshots.filter((item) => "" !== item);
      if (null != rating.app_id) {
        let storeAppId;
        if ("" !== rating.app_id) {
          storeAppId = rating.app_id;
        }
        const obj8 = { title: null, subtitle: null, description: null, iconUrl: null, headerUrl: header_image, stats: tmp12, media: mapped, storeUrl, appId: storeAppId, platform: os.os };
        ({ name: obj4.title, category: obj4.subtitle, description: obj4.description, icon: obj4.iconUrl, header_image } = rating);
        tmp12 = undefined;
        if (items.length > 0) {
          tmp12 = items;
        }
        mapped = undefined;
        if (found.length > 0) {
          mapped = found.map((url) => ({ type: "screenshot", url }));
        }
        return obj8;
      }
      storeAppId = os.storeAppId;
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    const obj3 = AppStoreMetadataActionCreators;
    await obj3.fetchAppStoreMetadata(closure_0);
    let closure_2 = value;
    let tmp6 = null;
    if (null != closure_2) {
      tmp6 = toOverlayContent(closure_2, closure_0, closure_1);
    }
    return tmp6;
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayContent.tsx");

export const getIosAppStoreReviewsUrl = function getIosAppStoreReviewsUrl(arg0) {
  return "itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=" + arg0 + "&onlyLatestVersion=true&pageNumber=0&sortOrdering=1&type=Purple+Software";
};
export const openAppStoreReviews = function openAppStoreReviews(storeUrl, platform, appId) {
  if ("ios" === platform) {
    if (null != appId) {
      if ("" !== appId) {
        const _HermesInternal = HermesInternal;
        obj = LinkingDefault;
        obj.performURLNavigation("itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id=" + appId + "&onlyLatestVersion=true&pageNumber=0&sortOrdering=1&type=Purple+Software");
      }
    }
  }
  openURL.default(storeUrl);
};
export const getAppStoreOverlayContent = function getAppStoreOverlayContent() {
  return obj(...arguments);
};