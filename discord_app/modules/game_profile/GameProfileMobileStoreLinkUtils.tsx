// === Module 9322: GameProfileMobileStoreLinkUtils ===

// Module 9322 (GameProfileMobileStoreLinkUtils)
import ApplicationDistributors from "ApplicationDistributors" /* 1106 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 9273 */;
import size from "module_2" /* 2 */;

let obj = { appStore: null, googlePlay: null };
const obj2 = { websiteCategories: null, websiteHostnames: null, distributor: null, buildUrl: null };
const items = [ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPHONE, ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPAD];
obj2.websiteCategories = items;
obj2.websiteHostnames = ThirdPartyGameApplicationWebsiteCategory.APP_STORE_WEBSITE_HOSTNAMES;
obj2.distributor = ApplicationDistributors.ApplicationDistributors.APPLE_APP_STORE;
obj2.buildUrl = function buildUrl(arg0) {
  return "https://" + ThirdPartyGameApplicationWebsiteCategory.APP_STORE_WEBSITE_HOSTNAMES[0] + "/app/id" + arg0;
};
obj.appStore = obj2;
const obj3 = { websiteCategories: null, websiteHostnames: null, distributor: null, buildUrl: null };
const items1 = [ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ANDROID];
obj3.websiteCategories = items1;
obj3.websiteHostnames = ThirdPartyGameApplicationWebsiteCategory.GOOGLE_PLAY_WEBSITE_HOSTNAMES;
obj3.distributor = ApplicationDistributors.ApplicationDistributors.GOOGLE_PLAY;
obj3.buildUrl = function buildUrl(arg0) {
  return "https://" + ThirdPartyGameApplicationWebsiteCategory.GOOGLE_PLAY_WEBSITE_HOSTNAMES[0] + "/store/apps/details?id=" + encodeURIComponent(arg0);
};
obj.googlePlay = obj3;
const values = Object.values(obj);
const result = size.fileFinishedImporting("modules/game_profile/GameProfileMobileStoreLinkUtils.tsx");

export const MOBILE_STORES = obj;
export const MOBILE_STORE_WEBSITE_CATEGORIES = new Set(values.flatMap((websiteCategories) => websiteCategories.websiteCategories));
export const getMobileStoreLink = function getMobileStoreLink(thirdPartySkus, buildUrl) {
  let tmp = (function getMobileStoreWebsite(thirdPartySkus, buildUrl) {
    closure_1 = buildUrl;
    function _loop(iter) {
      thirdPartySkus = iter;
      const websites = thirdPartySkus.websites;
      const found = websites.find((url) => {
        url = url.url;
        if (url.category !== closure_0) {
          return false;
        } else {
          try {
            const _URL = URL;
            const uRL = new URL(url);
            let hasItem = "http:" === uRL.protocol;
            if (!hasItem) {
              hasItem = "https:" === tmp7.protocol;
            }
            if (hasItem) {
              websiteHostnames = websiteHostnames.websiteHostnames;
              hasItem = websiteHostnames.includes(tmp6.hostname);
            }
            return hasItem;
          } catch (err) {
            return false;
          }
        }
      });
      if (null != found) {
        const obj = { v: found };
        return obj;
      }
    }
    const iter = buildUrl.websiteCategories[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      if (_loopResult) {
        iter.return();
        return _loopResult.v;
      }
    }
    return null;
  })(thirdPartySkus, buildUrl);
  if (tmp == null) {
    thirdPartySkus = thirdPartySkus.thirdPartySkus;
    let found = thirdPartySkus.find((distributor) => distributor.distributor === buildUrl.distributor);
    let id;
    if (found != null) {
      id = found.id;
    }
    let tmp4 = null;
    if (null != id) {
      let obj = { category: buildUrl.websiteCategories[0], url: buildUrl.buildUrl(id) };
      tmp4 = obj;
    }
    tmp = tmp4;
  }
  return tmp;
};