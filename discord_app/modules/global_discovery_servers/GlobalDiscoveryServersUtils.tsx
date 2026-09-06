// === Module 17828: GlobalDiscoveryServersUtils ===

// Module 17828 (GlobalDiscoveryServersUtils)
import util from "util" /* 1114 */;
import v1 from "v1" /* 1256 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import GlobalDiscoveryServersSearchResultsStoreDefault from "GlobalDiscoveryServersSearchResultsStore" /* 13704 */;
import GlobalDiscoveryServersFeaturedSearchManagerDefault from "GlobalDiscoveryServersFeaturedSearchManager" /* 17827 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LocaleStore from "LocaleStore" /* 2025 */;

require = fn;
let closure_15 = async function _navigateToGuild() {
  const obj2 = {};
  const merged = Object.assign(closure_129_5);
  obj2.loadId = closure_129_0;
  closure_129_6 = obj2;
  await closure_130_2(closure_130_3[7]).startLurking(closure_129_1, closure_129_4, closure_129_6);
  closure_130_2(closure_130_3[7]);
  closure_130_1(closure_130_3[8]).track(closure_130_14.GUILD_DISCOVERY_GUILD_SELECTED, { guild_id: closure_129_1, load_id: closure_129_0, card_index: closure_129_2, category_id: closure_129_3, location: closure_129_4 });
  await "HermesInternal";
  closure_1 = tmp2;
  ({ loadId: closure_129_0, guildId: closure_129_1, index: closure_129_2, categoryId: closure_129_3, analyticsLocation: closure_129_4, options: closure_129_5 } = closure_0);
  return "PX_16";
};
GlobalDiscoveryServersSearchResultsStoreDefault;
const GlobalDiscoveryServersConstants = fn(9066);
({ GlobalDiscoveryServerTab: closure_7, FEATURED_GUILDS_CACHE_DURATION: closure_8, FEATURED_GUILDS_SEARCH_OPTIONS: closure_9, CategoryId: c10, DISCOVERY_ALL_CATEGORIES_ID: closure_11, getLanguageOptions: closure_12, HUBS_CATEGORY_ID: map1 } = GlobalDiscoveryServersConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx");

export const getGlobalDiscoveryServersTabTitle = function getGlobalDiscoveryServersTabTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = util.intl;
    return intl7.string(util.t["RU+DCe"]);
  } else if (constants.GAMING === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t["CD/USA"]);
  } else if (constants.MUSIC === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t["nt9PL+"]);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.gSbmdt);
  } else if (constants.TECH === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t["0A0By5"]);
  } else if (constants.EDUCATION === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.Gy9woq);
  } else if (constants.HUBS === arg0) {
    const intl = util.intl;
    return intl.string(util.t["q469/Z"]);
  }
};
export const getGlobalDiscoveryServersBannerTitle = function getGlobalDiscoveryServersBannerTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = util.intl;
    return intl7.string(util.t.OlDfzP);
  } else if (constants.GAMING === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t["CD/USA"]);
  } else if (constants.MUSIC === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t["nt9PL+"]);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.gSbmdt);
  } else if (constants.TECH === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t["0A0By5"]);
  } else if (constants.EDUCATION === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.Gy9woq);
  } else if (constants.HUBS === arg0) {
    const intl = util.intl;
    return intl.string(util.t.X5xPlb);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersBannerDescription = function getGlobalDiscoveryServersBannerDescription(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = util.intl;
    return intl7.string(util.t.SdMhrk);
  } else if (constants.GAMING === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t.AAJ5ov);
  } else if (constants.MUSIC === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t["SOio+D"]);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.R09vf0);
  } else if (constants.TECH === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.Ew4d56);
  } else if (constants.EDUCATION === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.sasIWU);
  } else if (constants.HUBS === arg0) {
    const intl = util.intl;
    return intl.string(util.t["F/IQCI"]);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersTabSectionTitle = function getGlobalDiscoveryServersTabSectionTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t.crt84X);
  } else if (constants.GAMING === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t.fWbIpf);
  } else if (constants.MUSIC === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.nfgDzz);
  } else if (constants.ENTERTAINMENT === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.k1CYxv);
  } else if (constants.TECH === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["4dawps"]);
  } else if (constants.EDUCATION === arg0) {
    const intl = util.intl;
    return intl.string(util.t.uexPgT);
  } else {
    return null;
  }
};
export const getCategoryIdFromServerTab = function getCategoryIdFromServerTab(type) {
  if (constants.FEATURED === type) {
    return closure_1_11;
  } else if (constants.GAMING === type) {
    return closure_1_10.Activity;
  } else if (constants.MUSIC === type) {
    return closure_1_10.Music;
  } else if (constants.ENTERTAINMENT === type) {
    return closure_1_10.Television;
  } else if (constants.TECH === type) {
    return closure_1_10.Science;
  } else if (constants.EDUCATION === type) {
    return closure_1_10.Education;
  } else if (constants.HUBS === type) {
    return map1;
  } else {
    GlobalUtils.assertNever(type);
  }
};
export const isStaleFeaturedGuilds = function isStaleFeaturedGuilds(arg0) {
  let tmp = null == arg0;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - arg0 > React6;
  }
  return tmp;
};
export const fromDiscoverableGuildServer = function fromDiscoverableGuildServer(id) {
  const obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: new Set(id.features), presenceCount: null, memberCount: null, premiumSubscriptionCount: null, preferredLocale: null, discoverySplash: null, emojis: null, emojiCount: null };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, premium_subscription_count: obj.premiumSubscriptionCount, preferred_locale: obj.preferredLocale, discovery_splash: obj.discoverySplash, emojis: obj.emojis, emoji_count: obj.emojiCount } = id);
  return obj;
};
export const fromDiscoverableGuildSearchResult = function fromDiscoverableGuildSearchResult(id) {
  const obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: new Set(id.features), presenceCount: null, memberCount: null, premiumSubscriptionCount: "r", preferredLocale: "accessible", discoverySplash: "kMaxLength", emojis: "isArrayBuffer" };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, discovery_splash: obj.discoverySplash } = id);
  obj.emojis = [];
  return obj;
};
export const getLanguageCodeFallback = function getLanguageCodeFallback() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [LocaleStore];
    tmp = items;
  }
  [tmp3] = tmp;
  const arr2 = closure_1_12();
  locale = tmp3.locale;
  let found = arr2.find((code) => code.code === locale);
  if (found == null) {
    found = arr2[0];
  }
  return found.code;
};
export const navigateToGuild = function navigateToGuild() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const handleTabPressPrefetch = function handleTabPressPrefetch() {
  const error = GlobalDiscoveryServersSearchResultsStore.getError(React7);
  const isFetching = GlobalDiscoveryServersSearchResultsStore.getIsFetching(React7);
  let isInitialFetchComplete = GlobalDiscoveryServersSearchResultsStore.getIsInitialFetchComplete(React7);
  if (!isInitialFetchComplete) {
    if (!isFetching) {
      const featuredGuilds = GlobalDiscoveryServersFeaturedSearchManagerDefault.fetchFeaturedGuilds();
    }
  }
  if (isInitialFetchComplete) {
    isInitialFetchComplete = !isFetching;
  }
  if (isInitialFetchComplete) {
    isInitialFetchComplete = null != error;
  }
  if (isInitialFetchComplete) {
    const featuredGuilds1 = GlobalDiscoveryServersFeaturedSearchManagerDefault.fetchFeaturedGuilds({ forceRefresh: true });
  }
};
export const makeAnalyticsID = function makeAnalyticsID() {
  return v1.v4().replace(/-/g, "");
};