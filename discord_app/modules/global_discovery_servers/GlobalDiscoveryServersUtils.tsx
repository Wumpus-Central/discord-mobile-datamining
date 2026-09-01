// discord_app/modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx
import v1 from "../../../_runtime/00514_v1.js";
import getSystemLocale from "../../intl/index.native.tsx";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import prototypeDefault from "GlobalDiscoveryServersFeaturedSearchManager.tsx";
import closure_4 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../user_settings/LocaleStore.tsx";
import closure_6 from "GlobalDiscoveryServersSearchResultsStore.tsx";
import DEFAULT_DISCOVERY_CATEGORY_ID from "GlobalDiscoveryServersConstants.tsx";
import { AnalyticEvents } from "../../Constants.tsx";

require = arg1;
function _navigateToGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback2 = tmp5;
              let callback = tmp2;
              c0 = undefined;
              callback = undefined;
              callback2 = undefined;
              dependencyMap = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ loadId: c0, guildId: c1, index: c2, categoryId: c3, analyticsLocation: c4, options: c5 } = c0);
              let obj2;
              dependencyMap = 1;
              c4 = 1;
              return { value: "PX_16", done: null };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              obj2 = {};
              const merged = Object.assign(c5);
              obj2.loadId = c0;
              let obj4 = callback2(6185);
              dependencyMap = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj4.startLurking(callback, c4, obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            obj = callback(698);
            const obj5 = { guild_id: null, load_id: null, card_index: null, category_id: null, location: null };
            obj5[0] = callback;
            obj5[1] = c0;
            obj5[2] = callback2;
            obj5[3] = dependencyMap;
            obj5[4] = c4;
            obj.track(constants.GUILD_DISCOVERY_GUILD_SELECTED, obj5);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp28) {
          c4 = tmp;
          throw tmp28;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ GlobalDiscoveryServerTab: error, FEATURED_GUILDS_CACHE_DURATION: closure_8, FEATURED_GUILDS_SEARCH_OPTIONS: c9, CategoryId: c10, DISCOVERY_ALL_CATEGORIES_ID: unpackModuleId, getLanguageOptions: closure_12, HUBS_CATEGORY_ID: map1 } = DEFAULT_DISCOVERY_CATEGORY_ID);
const result = require("set").fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx");

export const getGlobalDiscoveryServersTabTitle = function getGlobalDiscoveryServersTabTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t["RU+DCe"]);
  } else if (tmp.GAMING === arg0) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t["CD/USA"]);
  } else if (tmp.MUSIC === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t["nt9PL+"]);
  } else if (tmp.ENTERTAINMENT === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.gSbmdt);
  } else if (tmp.TECH === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t["0A0By5"]);
  } else if (tmp.EDUCATION === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.Gy9woq);
  } else if (tmp.HUBS === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["q469/Z"]);
  }
};
export const getGlobalDiscoveryServersBannerTitle = function getGlobalDiscoveryServersBannerTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.OlDfzP);
  } else if (tmp.GAMING === arg0) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t["CD/USA"]);
  } else if (tmp.MUSIC === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t["nt9PL+"]);
  } else if (tmp.ENTERTAINMENT === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.gSbmdt);
  } else if (tmp.TECH === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t["0A0By5"]);
  } else if (tmp.EDUCATION === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.Gy9woq);
  } else if (tmp.HUBS === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.X5xPlb);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersBannerDescription = function getGlobalDiscoveryServersBannerDescription(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.SdMhrk);
  } else if (tmp.GAMING === arg0) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.AAJ5ov);
  } else if (tmp.MUSIC === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t["SOio+D"]);
  } else if (tmp.ENTERTAINMENT === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.R09vf0);
  } else if (tmp.TECH === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.Ew4d56);
  } else if (tmp.EDUCATION === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.sasIWU);
  } else if (tmp.HUBS === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["F/IQCI"]);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersTabSectionTitle = function getGlobalDiscoveryServersTabSectionTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.crt84X);
  } else if (tmp.GAMING === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.fWbIpf);
  } else if (tmp.MUSIC === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.nfgDzz);
  } else if (tmp.ENTERTAINMENT === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.k1CYxv);
  } else if (tmp.TECH === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t["4dawps"]);
  } else if (tmp.EDUCATION === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.uexPgT);
  } else {
    return null;
  }
};
export const getCategoryIdFromServerTab = function getCategoryIdFromServerTab(arg0) {
  if (constants.FEATURED === arg0) {
    return closure_11;
  } else if (tmp.GAMING === arg0) {
    return closure_10.Activity;
  } else if (tmp.MUSIC === arg0) {
    return closure_10.Music;
  } else if (tmp.ENTERTAINMENT === arg0) {
    return closure_10.Television;
  } else if (tmp.TECH === arg0) {
    return closure_10.Science;
  } else if (tmp.EDUCATION === arg0) {
    return closure_10.Education;
  } else if (tmp.HUBS === arg0) {
    return closure_13;
  } else {
    isDiscordFrontendDevelopment.assertNever(arg0);
  }
};
export const isStaleFeaturedGuilds = function isStaleFeaturedGuilds(closure_2) {
  let tmp = null == closure_2;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - closure_2 > closure_8;
  }
  return tmp;
};
export const fromDiscoverableGuildServer = function fromDiscoverableGuildServer(id) {
  const obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: new Set(id.features), presenceCount: null, memberCount: null, premiumSubscriptionCount: null, preferredLocale: null, discoverySplash: null, emojis: null, emojiCount: null };
  ({ approximate_presence_count: obj[7], approximate_member_count: obj[8], premium_subscription_count: obj[9], preferred_locale: obj[10], discovery_splash: obj[11], emojis: obj[12], emoji_count: obj[13] } = id);
  return obj;
};
export const fromDiscoverableGuildSearchResult = function fromDiscoverableGuildSearchResult(id) {
  const obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: new Set(id.features), presenceCount: null, memberCount: null, premiumSubscriptionCount: "r", preferredLocale: "accessible", discoverySplash: null, emojis: [] };
  ({ approximate_presence_count: obj[7], approximate_member_count: obj[8], discovery_splash: obj[11] } = id);
  return obj;
};
export const getLanguageCodeFallback = function getLanguageCodeFallback() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [closure_5];
    tmp = items;
  }
  [tmp3] = tmp;
  let locale;
  const arr2 = callback2();
  locale = tmp3.locale;
  let found = arr2.find((code) => code.code === locale);
  if (found == null) {
    found = arr2[0];
  }
  return found.code;
};
export const navigateToGuild = function navigateToGuild() {
  const self = this;
  const apply = _navigateToGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const handleTabPressPrefetch = function handleTabPressPrefetch() {
  error = store.getError(closure_9);
  const isFetching = store.getIsFetching(closure_9);
  let isInitialFetchComplete = store.getIsInitialFetchComplete(closure_9);
  if (!isInitialFetchComplete) {
    if (!isFetching) {
      const featuredGuilds = prototypeDefault.fetchFeaturedGuilds();
      const obj = prototypeDefault;
    }
  }
  if (isInitialFetchComplete) {
    isInitialFetchComplete = !isFetching;
  }
  if (isInitialFetchComplete) {
    isInitialFetchComplete = null != error;
  }
  if (isInitialFetchComplete) {
    const featuredGuilds1 = prototypeDefault.fetchFeaturedGuilds({ forceRefresh: true });
    const obj2 = prototypeDefault;
  }
};
export const makeAnalyticsID = function makeAnalyticsID() {
  const obj = v1;
  return v1.v4().replace(/-/g, "");
};