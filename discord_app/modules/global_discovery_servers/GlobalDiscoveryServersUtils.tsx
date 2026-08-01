// === Module 16691: _navigateToGuild ===

// Module 16691 (_navigateToGuild)
import getSystemLocale from "getSystemLocale";
import _getSystemLocale from "_getSystemLocale";
import map from "map";
import DEFAULT_DISCOVERY_CATEGORY_ID from "DEFAULT_DISCOVERY_CATEGORY_ID";
import { AnalyticEvents } from "ME";

let c10;
let c9;
let closure_12;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function _navigateToGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
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
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              obj2 = {};
              const merged = Object.assign(c5);
              obj2.loadId = c0;
              let obj4 = callback2(6692);
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
  const _navigateToGuild = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ GlobalDiscoveryServerTab: error, FEATURED_GUILDS_CACHE_DURATION: metroImportAll, FEATURED_GUILDS_SEARCH_OPTIONS: c9, CategoryId: c10, DISCOVERY_ALL_CATEGORIES_ID: unpackModuleId, getLanguageOptions: closure_12, HUBS_CATEGORY_ID: map1 } = DEFAULT_DISCOVERY_CATEGORY_ID);
const result = require("map").fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx");

export const getGlobalDiscoveryServersTabTitle = function getGlobalDiscoveryServersTabTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = require(1236) /* getSystemLocale */.intl;
    return intl7.string(require(1236) /* getSystemLocale */.t["RU+DCe"]);
  } else if (tmp.GAMING === arg0) {
    const intl6 = require(1236) /* getSystemLocale */.intl;
    return intl6.string(require(1236) /* getSystemLocale */.t["CD/USA"]);
  } else if (tmp.MUSIC === arg0) {
    const intl5 = require(1236) /* getSystemLocale */.intl;
    return intl5.string(require(1236) /* getSystemLocale */.t["nt9PL+"]);
  } else if (tmp.ENTERTAINMENT === arg0) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    return intl4.string(require(1236) /* getSystemLocale */.t.gSbmdt);
  } else if (tmp.TECH === arg0) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(require(1236) /* getSystemLocale */.t["0A0By5"]);
  } else if (tmp.EDUCATION === arg0) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.string(require(1236) /* getSystemLocale */.t.Gy9woq);
  } else if (tmp.HUBS === arg0) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["q469/Z"]);
  }
};
export const getGlobalDiscoveryServersBannerTitle = function getGlobalDiscoveryServersBannerTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = require(1236) /* getSystemLocale */.intl;
    return intl7.string(require(1236) /* getSystemLocale */.t.OlDfzP);
  } else if (tmp.GAMING === arg0) {
    const intl6 = require(1236) /* getSystemLocale */.intl;
    return intl6.string(require(1236) /* getSystemLocale */.t["CD/USA"]);
  } else if (tmp.MUSIC === arg0) {
    const intl5 = require(1236) /* getSystemLocale */.intl;
    return intl5.string(require(1236) /* getSystemLocale */.t["nt9PL+"]);
  } else if (tmp.ENTERTAINMENT === arg0) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    return intl4.string(require(1236) /* getSystemLocale */.t.gSbmdt);
  } else if (tmp.TECH === arg0) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(require(1236) /* getSystemLocale */.t["0A0By5"]);
  } else if (tmp.EDUCATION === arg0) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.string(require(1236) /* getSystemLocale */.t.Gy9woq);
  } else if (tmp.HUBS === arg0) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.X5xPlb);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersBannerDescription = function getGlobalDiscoveryServersBannerDescription(arg0) {
  if (constants.FEATURED === arg0) {
    const intl7 = require(1236) /* getSystemLocale */.intl;
    return intl7.string(require(1236) /* getSystemLocale */.t.SdMhrk);
  } else if (tmp.GAMING === arg0) {
    const intl6 = require(1236) /* getSystemLocale */.intl;
    return intl6.string(require(1236) /* getSystemLocale */.t.AAJ5ov);
  } else if (tmp.MUSIC === arg0) {
    const intl5 = require(1236) /* getSystemLocale */.intl;
    return intl5.string(require(1236) /* getSystemLocale */.t["SOio+D"]);
  } else if (tmp.ENTERTAINMENT === arg0) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    return intl4.string(require(1236) /* getSystemLocale */.t.R09vf0);
  } else if (tmp.TECH === arg0) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(require(1236) /* getSystemLocale */.t.Ew4d56);
  } else if (tmp.EDUCATION === arg0) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.string(require(1236) /* getSystemLocale */.t.sasIWU);
  } else if (tmp.HUBS === arg0) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["F/IQCI"]);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersTabSectionTitle = function getGlobalDiscoveryServersTabSectionTitle(arg0) {
  if (constants.FEATURED === arg0) {
    const intl6 = require(1236) /* getSystemLocale */.intl;
    return intl6.string(require(1236) /* getSystemLocale */.t.crt84X);
  } else if (tmp.GAMING === arg0) {
    const intl5 = require(1236) /* getSystemLocale */.intl;
    return intl5.string(require(1236) /* getSystemLocale */.t.fWbIpf);
  } else if (tmp.MUSIC === arg0) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    return intl4.string(require(1236) /* getSystemLocale */.t.nfgDzz);
  } else if (tmp.ENTERTAINMENT === arg0) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(require(1236) /* getSystemLocale */.t.k1CYxv);
  } else if (tmp.TECH === arg0) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.string(require(1236) /* getSystemLocale */.t["4dawps"]);
  } else if (tmp.EDUCATION === arg0) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.uexPgT);
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
    require(1351) /* isDiscordFrontendDevelopment */.assertNever(arg0);
  }
};
export const isStaleFeaturedGuilds = function isStaleFeaturedGuilds(outer1_2) {
  let tmp = null == outer1_2;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - outer1_2 > closure_8;
  }
  return tmp;
};
export const fromDiscoverableGuildServer = function fromDiscoverableGuildServer(id) {
  const obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: null, presenceCount: null, memberCount: null, premiumSubscriptionCount: null, preferredLocale: null, discoverySplash: null, emojis: null, emojiCount: null };
  obj[6] = new Set(id.features);
  ({ approximate_presence_count: obj[7], approximate_member_count: obj[8], premium_subscription_count: obj[9], preferred_locale: obj[10], discovery_splash: obj[11], emojis: obj[12], emoji_count: obj[13] } = id);
  return obj;
};
export const fromDiscoverableGuildSearchResult = function fromDiscoverableGuildSearchResult(id) {
  const obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: null, presenceCount: null, memberCount: null, premiumSubscriptionCount: "r", preferredLocale: "isArray", discoverySplash: "DE", emojis: "+49" };
  obj[6] = new Set(id.features);
  ({ approximate_presence_count: obj[7], approximate_member_count: obj[8], discovery_splash: obj[11] } = id);
  obj[12] = [];
  return obj;
};
export const getLanguageCodeFallback = function getLanguageCodeFallback() {
  let tmp3;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [_getSystemLocale];
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
  const error = store.getError(closure_9);
  const isFetching = store.getIsFetching(closure_9);
  let isInitialFetchComplete = store.getIsInitialFetchComplete(closure_9);
  if (!isInitialFetchComplete) {
    if (!isFetching) {
      const featuredGuilds = importDefault(16690).fetchFeaturedGuilds();
      const obj = importDefault(16690);
    }
  }
  if (isInitialFetchComplete) {
    isInitialFetchComplete = !isFetching;
  }
  if (isInitialFetchComplete) {
    isInitialFetchComplete = null != error;
  }
  if (isInitialFetchComplete) {
    const featuredGuilds1 = importDefault(16690).fetchFeaturedGuilds({ forceRefresh: true });
    const obj2 = importDefault(16690);
  }
};
export const makeAnalyticsID = function makeAnalyticsID() {
  const obj = require(514) /* v1 */;
  return require(514) /* v1 */.v4().replace(/-/g, "");
};