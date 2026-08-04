import _getSystemLocale from "_getSystemLocale";
import ME from "ME";

const require = arg1;
const LocalizedLinks = ME.LocalizedLinks;
let combined = "https://" + ME.SUPPORT_DOMAIN;
let closure_6 = "https://" + ME.SUPPORT_DEV_DOMAIN;
const result = require("getLocalizedLink").fileFinishedImporting("utils/HelpdeskUtils.tsx");

export default {
  getArticleURL(REFERRAL_PROGRAM) {
    return combined + "/hc/" + _getSystemLocale.locale.toLowerCase() + "/articles/" + REFERRAL_PROGRAM;
  },
  getDevArticleURL(arg0) {
    let tmp2 = closure_6;
    const combined = "/hc/" + _getSystemLocale.locale.toLowerCase() + "/articles/" + arg0;
    if (closure_6 === undefined) {
      tmp2 = combined;
    }
    return tmp2 + combined;
  },
  getCreatorSupportArticleURL(MEDIA_CHANNEL) {
    return "https://creator-support.discord.com" + "/hc/" + _getSystemLocale.locale.toLowerCase() + "/articles/" + MEDIA_CHANNEL;
  },
  getTwitterURL() {
    return importDefault(3897)(LocalizedLinks.TWITTER);
  },
  getCommunityURL() {
    return combined + "/hc/" + _getSystemLocale.locale.toLowerCase();
  },
  getSubmitRequestURL(arg0) {
    const formatted = _getSystemLocale.locale.toLowerCase();
    const sum = combined + "/hc/" + formatted + "/requests/new?platform=" + encodeURIComponent(require(500) /* set */.getPlatformName());
    let sum1 = sum;
    if (null != arg0) {
      const _encodeURIComponent = encodeURIComponent;
      const _HermesInternal = HermesInternal;
      sum1 = sum + "&device_info=" + encodeURIComponent(arg0);
    }
    return sum1;
  },
  getSearchURL(arg0) {
    return combined + "/hc/" + _getSystemLocale.locale.toLowerCase() + "/search?utf8=%E2%9C%93&query=" + encodeURIComponent(arg0) + "&commit=Search";
  },
  getFeaturedArticlesJsonURL() {
    return combined + "/api/v2/help_center/en-us/articles.json?label_names=featured";
  },
  getAppsSupportURL(APPS_LEARN_MORE) {
    return "https://support-apps.discord.com" + "/hc/" + _getSystemLocale.locale.toLowerCase() + "/articles/" + APPS_LEARN_MORE;
  }
};
export const SUPPORT_LOCATION = combined;