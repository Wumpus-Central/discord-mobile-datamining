// === Module 18068: GlobalDiscoveryServersUtils ===

// Module 18068 (GlobalDiscoveryServersUtils)
import Constants from "Constants" /* 1085 */;
import intl8 from "intl" /* 1126 */;
import v1 from "v1" /* 1266 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import GlobalDiscoveryServersConstants from "GlobalDiscoveryServersConstants" /* 9284 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let obj = function _navigateToGuild() {
  obj = _asyncToGenerator(async (arg0) => {
    let _location;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let category_id;
    let obj5;
    let closure_0 = arg0;
    if (_location === 2) {
      _location = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let load_id;
        let guild_id;
        let card_index;
        let obj6;
        _location = 2;
        if (0 === category_id) {
          if (arg0 === 1) {
            _location = 3;
            throw value;
          } else if (arg0 === 2) {
            _location = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            load_id = undefined;
            guild_id = undefined;
            card_index = undefined;
            c5 = undefined;
            ({ loadId: c0, guildId: c1, index: c2, categoryId: c3, analyticsLocation: c4, options: c5 } = closure_0);
            obj6 = undefined;
            category_id = 1;
            _location = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === category_id) {
          if (arg0 === 1) {
            _location = 3;
            throw value;
          } else if (arg0 === 2) {
            _location = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            obj6 = { loadId: load_id };
            const merged = Object.assign(c5);
            category_id = 2;
            _location = 1;
            const obj7 = { value: obj5.startLurking(guild_id, _location, obj6), done: false };
            obj5 = closure_130_2(closure_130_3[6]);
            return obj7;
          }
        } else if (arg0 === 1) {
          _location = 3;
          throw value;
        } else if (arg0 === 2) {
          _location = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          const obj9 = { guild_id, load_id, card_index, category_id, location: _location };
          obj = closure_130_1(closure_130_3[7]);
          obj.track(closure_130_12.GUILD_DISCOVERY_GUILD_SELECTED, obj9);
          _location = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp27) {
        _location = 3;
        throw tmp27;
      }
    }
  });
  return obj(...arguments);
};
({ GlobalDiscoveryServerTab: metroRequire, FEATURED_GUILDS_CACHE_DURATION: metroImportDefault, CategoryId: metroImportAll, DISCOVERY_ALL_CATEGORIES_ID: c9, getLanguageOptions: c10, HUBS_CATEGORY_ID: unpackModuleId } = GlobalDiscoveryServersConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersUtils.tsx");

export const getGlobalDiscoveryServersTabTitle = function getGlobalDiscoveryServersTabTitle(arg0) {
  if (metroRequire.FEATURED === arg0) {
    const intl7 = intl8.intl;
    return intl7.string(intl8.t["RU+DCe"]);
  } else if (metroRequire.GAMING === arg0) {
    const intl6 = intl8.intl;
    return intl6.string(intl8.t["CD/USA"]);
  } else if (metroRequire.MUSIC === arg0) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t["nt9PL+"]);
  } else if (metroRequire.ENTERTAINMENT === arg0) {
    const intl4 = intl8.intl;
    return intl4.string(intl8.t.gSbmdt);
  } else if (metroRequire.TECH === arg0) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t["0A0By5"]);
  } else if (metroRequire.EDUCATION === arg0) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t.Gy9woq);
  } else if (metroRequire.HUBS === arg0) {
    const intl = intl8.intl;
    return intl.string(intl8.t["q469/Z"]);
  }
};
export const getGlobalDiscoveryServersBannerTitle = function getGlobalDiscoveryServersBannerTitle(arg0) {
  if (metroRequire.FEATURED === arg0) {
    const intl7 = intl8.intl;
    return intl7.string(intl8.t.OlDfzP);
  } else if (metroRequire.GAMING === arg0) {
    const intl6 = intl8.intl;
    return intl6.string(intl8.t["CD/USA"]);
  } else if (metroRequire.MUSIC === arg0) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t["nt9PL+"]);
  } else if (metroRequire.ENTERTAINMENT === arg0) {
    const intl4 = intl8.intl;
    return intl4.string(intl8.t.gSbmdt);
  } else if (metroRequire.TECH === arg0) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t["0A0By5"]);
  } else if (metroRequire.EDUCATION === arg0) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t.Gy9woq);
  } else if (metroRequire.HUBS === arg0) {
    const intl = intl8.intl;
    return intl.string(intl8.t.X5xPlb);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersBannerDescription = function getGlobalDiscoveryServersBannerDescription(arg0) {
  if (metroRequire.FEATURED === arg0) {
    const intl7 = intl8.intl;
    return intl7.string(intl8.t.SdMhrk);
  } else if (metroRequire.GAMING === arg0) {
    const intl6 = intl8.intl;
    return intl6.string(intl8.t.AAJ5ov);
  } else if (metroRequire.MUSIC === arg0) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t["SOio+D"]);
  } else if (metroRequire.ENTERTAINMENT === arg0) {
    const intl4 = intl8.intl;
    return intl4.string(intl8.t.R09vf0);
  } else if (metroRequire.TECH === arg0) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t.Ew4d56);
  } else if (metroRequire.EDUCATION === arg0) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t.sasIWU);
  } else if (metroRequire.HUBS === arg0) {
    const intl = intl8.intl;
    return intl.string(intl8.t["F/IQCI"]);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("[getGlobalDiscoveryServerTabTitle] Unsupported tab: " + arg0);
    throw error;
  }
};
export const getGlobalDiscoveryServersTabSectionTitle = function getGlobalDiscoveryServersTabSectionTitle(arg0) {
  if (metroRequire.FEATURED === arg0) {
    const intl6 = intl8.intl;
    return intl6.string(intl8.t.crt84X);
  } else if (metroRequire.GAMING === arg0) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t.fWbIpf);
  } else if (metroRequire.MUSIC === arg0) {
    const intl4 = intl8.intl;
    return intl4.string(intl8.t.nfgDzz);
  } else if (metroRequire.ENTERTAINMENT === arg0) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t.k1CYxv);
  } else if (metroRequire.TECH === arg0) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t["4dawps"]);
  } else if (metroRequire.EDUCATION === arg0) {
    const intl = intl8.intl;
    return intl.string(intl8.t.uexPgT);
  } else {
    return null;
  }
};
export const getCategoryIdFromServerTab = function getCategoryIdFromServerTab(type) {
  if (metroRequire.FEATURED === type) {
    return React4;
  } else if (metroRequire.GAMING === type) {
    return metroImportAll.Activity;
  } else if (metroRequire.MUSIC === type) {
    return metroImportAll.Music;
  } else if (metroRequire.ENTERTAINMENT === type) {
    return metroImportAll.Television;
  } else if (metroRequire.TECH === type) {
    return metroImportAll.Science;
  } else if (metroRequire.EDUCATION === type) {
    return metroImportAll.Education;
  } else if (metroRequire.HUBS === type) {
    return unpackModuleId;
  } else {
    obj = GlobalUtils;
    obj.assertNever(type);
  }
};
export const isStaleFeaturedGuilds = function isStaleFeaturedGuilds(arg0) {
  let tmp = null == arg0;
  if (!tmp) {
    const _Date = Date;
    tmp = Date.now() - arg0 > metroImportDefault;
  }
  return tmp;
};
export const fromDiscoverableGuildServer = function fromDiscoverableGuildServer(id) {
  obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: new Set(id.features), presenceCount: null, memberCount: null, premiumSubscriptionCount: null, preferredLocale: null, discoverySplash: null, emojis: null, emojiCount: null };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, premium_subscription_count: obj.premiumSubscriptionCount, preferred_locale: obj.preferredLocale, discovery_splash: obj.discoverySplash, emojis: obj.emojis, emoji_count: obj.emojiCount } = id);
  new Set(id.features);
  return obj;
};
export const fromDiscoverableGuildSearchResult = function fromDiscoverableGuildSearchResult(id) {
  obj = { id: id.id, name: id.name, description: id.description, splash: id.splash, banner: id.banner, icon: id.icon, features: new Set(id.features), presenceCount: null, memberCount: null, premiumSubscriptionCount: "r", preferredLocale: "unicodeVersion", discoverySplash: null, emojis: [] };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, discovery_splash: obj.discoverySplash } = id);
  new Set(id.features);
  return obj;
};
export const getLanguageCodeFallback = function getLanguageCodeFallback() {
  let tmp3;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [LocaleStore];
    tmp = items;
  }
  [tmp3] = tmp;
  const arr2 = authStore();
  const locale = tmp3.locale;
  let found = arr2.find((code) => code.code === locale);
  if (found == null) {
    found = arr2[0];
  }
  return found.code;
};
export const navigateToGuild = function navigateToGuild() {
  return obj(...arguments);
};
export const makeAnalyticsID = function makeAnalyticsID() {
  obj = v1;
  const str = obj.v4();
  return str.replace(/-/g, "");
};