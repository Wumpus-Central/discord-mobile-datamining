// === Module 2115: HelpdeskUtils ===

// Module 2115 (HelpdeskUtils)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import getLocalizedLinkDefault from "getLocalizedLink" /* 4491 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const LocalizedLinks = Constants.LocalizedLinks;
const SUPPORT_DEV_DOMAIN = Constants.SUPPORT_DEV_DOMAIN;
let combined = "https://" + Constants.SUPPORT_DOMAIN;
let closure_6 = "https://" + SUPPORT_DEV_DOMAIN;
let obj = {
  getArticleURL(TIGGER_PAWTECT_LEARN_MORE) {
    const str = LocaleStore.locale;
    return combined + "/hc/" + str.toLowerCase() + "/articles/" + TIGGER_PAWTECT_LEARN_MORE;
  },
  getDevArticleURL(arg0) {
    let tmp2 = closure_6;
    const str = LocaleStore.locale;
    combined = "/hc/" + str.toLowerCase() + "/articles/" + arg0;
    if (closure_6 === undefined) {
      tmp2 = combined;
    }
    return tmp2 + combined;
  },
  getCreatorSupportArticleURL(MEDIA_CHANNEL) {
    const str = LocaleStore.locale;
    return "https://creator-support.discord.com" + "/hc/" + str.toLowerCase() + "/articles/" + MEDIA_CHANNEL;
  },
  getTwitterURL() {
    return getLocalizedLinkDefault(LocalizedLinks.TWITTER);
  },
  getCommunityURL() {
    const str = LocaleStore.locale;
    return combined + "/hc/" + str.toLowerCase();
  },
  getSubmitRequestURL(arg0) {
    const str = LocaleStore.locale;
    const formatted = str.toLowerCase();
    const obj = PlatformUtils;
    const sum = combined + "/hc/" + formatted + "/requests/new?platform=" + encodeURIComponent(obj.getPlatformName());
    let sum1 = sum;
    if (null != arg0) {
      const _encodeURIComponent = encodeURIComponent;
      const _HermesInternal = HermesInternal;
      sum1 = sum + "&device_info=" + encodeURIComponent(arg0);
    }
    return sum1;
  },
  getSearchURL(arg0) {
    const str = LocaleStore.locale;
    const encodeURIComponentResult = encodeURIComponent(arg0);
    return combined + "/hc/" + str.toLowerCase() + "/search?utf8=%E2%9C%93&query=" + encodeURIComponentResult + "&commit=Search";
  },
  getFeaturedArticlesJsonURL() {
    return combined + "/api/v2/help_center/en-us/articles.json?label_names=featured";
  },
  getAppsSupportURL(APPS_LEARN_MORE) {
    const str = LocaleStore.locale;
    return "https://support-apps.discord.com" + "/hc/" + str.toLowerCase() + "/articles/" + APPS_LEARN_MORE;
  }
};
const result = size.fileFinishedImporting("utils/HelpdeskUtils.tsx");

export default obj;
export const SUPPORT_LOCATION = combined;