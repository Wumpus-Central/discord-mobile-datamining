// discord_app/utils/HelpdeskUtils.tsx
import PlatformUtils from "PlatformUtils.tsx";
import getLocalizedLinkDefault from "../modules/links/getLocalizedLink.tsx";
import LocaleStore from "../modules/user_settings/LocaleStore.tsx";

require = fn;
const Constants = fn(1074);
const LocalizedLinks = Constants.LocalizedLinks;
let combined = "https://" + Constants.SUPPORT_DOMAIN;
let closure_6 = "https://" + Constants.SUPPORT_DEV_DOMAIN;
const size = fn(2);
const result = size.fileFinishedImporting("utils/HelpdeskUtils.tsx");

export default {
  getArticleURL(REFERRAL_PROGRAM) {
    return combined + "/hc/" + LocaleStore.locale.toLowerCase() + "/articles/" + REFERRAL_PROGRAM;
  },
  getDevArticleURL(arg0) {
    let tmp2 = closure_6;
    combined = "/hc/" + LocaleStore.locale.toLowerCase() + "/articles/" + arg0;
    if (closure_6 === undefined) {
      tmp2 = combined;
    }
    return tmp2 + combined;
  },
  getCreatorSupportArticleURL(MEDIA_CHANNEL) {
    return (
      "https://creator-support.discord.com" + "/hc/" + LocaleStore.locale.toLowerCase() + "/articles/" + MEDIA_CHANNEL
    );
  },
  getTwitterURL() {
    return getLocalizedLinkDefault(LocalizedLinks.TWITTER);
  },
  getCommunityURL() {
    return combined + "/hc/" + LocaleStore.locale.toLowerCase();
  },
  getSubmitRequestURL(arg0) {
    const formatted = LocaleStore.locale.toLowerCase();
    const sum =
      combined + "/hc/" + formatted + "/requests/new?platform=" + encodeURIComponent(PlatformUtils.getPlatformName());
    let sum1 = sum;
    if (null != arg0) {
      const _encodeURIComponent = encodeURIComponent;
      const _HermesInternal = HermesInternal;
      sum1 = sum + "&device_info=" + encodeURIComponent(arg0);
    }
    return sum1;
  },
  getSearchURL(arg0) {
    return (
      combined +
      "/hc/" +
      LocaleStore.locale.toLowerCase() +
      "/search?utf8=%E2%9C%93&query=" +
      encodeURIComponent(arg0) +
      "&commit=Search"
    );
  },
  getFeaturedArticlesJsonURL() {
    return combined + "/api/v2/help_center/en-us/articles.json?label_names=featured";
  },
  getAppsSupportURL(APPS_LEARN_MORE) {
    return (
      "https://support-apps.discord.com" + "/hc/" + LocaleStore.locale.toLowerCase() + "/articles/" + APPS_LEARN_MORE
    );
  },
};
export const SUPPORT_LOCATION = combined;
