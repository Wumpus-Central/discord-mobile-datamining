// discord_app/utils/HelpdeskUtils.tsx
import obj132 from "PlatformUtils.tsx";
import getLocalizedLinkDefault from "../modules/links/getLocalizedLink.tsx";
import _getSystemLocale from "../modules/user_settings/LocaleStore.tsx";
import ME from "../Constants.tsx";

require = fn;
const LocalizedLinks = ME.LocalizedLinks;
let combined = "https://" + ME.SUPPORT_DOMAIN;
let closure_6 = "https://" + ME.SUPPORT_DEV_DOMAIN;
const result = require("obj132").fileFinishedImporting("utils/HelpdeskUtils.tsx");

export default {
  getArticleURL(REFERRAL_PROGRAM) {
    return combined + "/hc/" + closure_3.locale.toLowerCase() + "/articles/" + REFERRAL_PROGRAM;
  },
  getDevArticleURL(arg0) {
    let tmp2 = closure_6;
    combined = "/hc/" + closure_3.locale.toLowerCase() + "/articles/" + arg0;
    if (closure_6 === undefined) {
      tmp2 = combined;
    }
    return tmp2 + combined;
  },
  getCreatorSupportArticleURL(MEDIA_CHANNEL) {
    return "https://creator-support.discord.com" + "/hc/" + closure_3.locale.toLowerCase() + "/articles/" + MEDIA_CHANNEL;
  },
  getTwitterURL() {
    return getLocalizedLinkDefault(LocalizedLinks.TWITTER);
  },
  getCommunityURL() {
    return combined + "/hc/" + closure_3.locale.toLowerCase();
  },
  getSubmitRequestURL(arg0) {
    const formatted = closure_3.locale.toLowerCase();
    const sum = combined + "/hc/" + formatted + "/requests/new?platform=" + encodeURIComponent(obj132.getPlatformName());
    let sum1 = sum;
    if (null != arg0) {
      const _encodeURIComponent = encodeURIComponent;
      const _HermesInternal = HermesInternal;
      sum1 = sum + "&device_info=" + encodeURIComponent(arg0);
    }
    return sum1;
  },
  getSearchURL(arg0) {
    return combined + "/hc/" + closure_3.locale.toLowerCase() + "/search?utf8=%E2%9C%93&query=" + encodeURIComponent(arg0) + "&commit=Search";
  },
  getFeaturedArticlesJsonURL() {
    return combined + "/api/v2/help_center/en-us/articles.json?label_names=featured";
  },
  getAppsSupportURL(APPS_LEARN_MORE) {
    return "https://support-apps.discord.com" + "/hc/" + closure_3.locale.toLowerCase() + "/articles/" + APPS_LEARN_MORE;
  }
};
export const SUPPORT_LOCATION = combined;