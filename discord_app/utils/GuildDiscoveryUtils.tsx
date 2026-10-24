// === Module 7448: GuildDiscoveryUtils ===

// Module 7448 (GuildDiscoveryUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _modDef1493 from "module_1493" /* 1493 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LurkingStore from "LurkingStore" /* 4904 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5194 */;
import GuildStore from "GuildStore" /* 4845 */;

require = fn;
let closure_11 = async function _startLurking(arg0) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else {
      const channelId = closure_133_2.channelId;
      const onSuccess = closure_133_2.onSuccess;
      const joinSource = closure_133_2.joinSource;
      const loadId = closure_133_2.loadId;
      const shouldNavigate = closure_133_2.shouldNavigate;
      let tmp27 = undefined === shouldNavigate;
      if (!tmp27) {
        tmp27 = shouldNavigate;
      }
      closure_133_9 = tmp27;
      const openChannel = closure_133_2.openChannel;
      let tmp31 = undefined !== openChannel;
      if (tmp31) {
        tmp31 = openChannel;
      }
      closure_133_11 = tmp31;
      const history = closure_134_0(closure_134_2[5]).getHistory();
      guild = closure_134_6.getGuild(closure_133_0);
      const obj8 = { sourceLocationStack: closure_133_3, state: null };
      obj8.state = { analyticsSource: closure_133_1 };
      closure_133_14 = obj8;
      if (null != guild) {
        if (null != guild.joinedAt) {
          if (closure_133_9) {
            if (null == channelId) {
              const obj11 = {};
              const merged = Object.assign(closure_133_14);
              obj11.openChannel = closure_133_11;
              closure_134_0(closure_134_2[6]).transitionToGuild(closure_133_0, obj11);
              closure_134_0(closure_134_2[6]);
            } else {
              const obj12 = {};
              const merged1 = Object.assign(closure_133_14);
              obj12.navigationReplace = true;
              obj12.openChannel = true;
              closure_134_1(closure_134_2[7])(closure_134_10.CHANNEL(closure_133_0, channelId, closure_133_2.messageId), obj12);
              closure_134_10.CHANNEL(closure_133_0, channelId, closure_133_2.messageId);
              closure_134_1(closure_134_2[7]);
            }
          }
        }
      }
      if (null != guild) {
        if (closure_134_4.isLurking(closure_133_0)) {
          if (closure_133_9) {
            const obj14 = {};
            const merged2 = Object.assign(closure_133_14);
            obj14.welcomeModalChannelId = channelId;
            obj14.navigationReplace = null != channelId;
            let tmp78 = closure_133_11;
            if (!closure_133_11) {
              tmp78 = null != channelId;
            }
            obj14.openChannel = tmp78;
            obj14.search = history.location.search;
            c7 = 2;
            c8 = 1;
            closure_134_1(closure_134_2[8]);
            return { value: closure_134_1(closure_134_2[8]).transitionToGuildSync(closure_133_0, obj14, channelId, closure_133_2.messageId), done: false };
          }
        }
      }
      let tmp53;
      if (closure_133_3 != null) {
        tmp53 = tmp52[closure_133_3.length - 1];
      }
      let page = tmp53;
      if (tmp53 == null) {
        page = undefined;
        if (closure_133_1 != null) {
          page = closure_133_1.page;
        }
      }
      closure_133_15 = page;
      closure_134_0(closure_134_2[5]);
      c7 = 3;
      c8 = 1;
      return { value: closure_134_1(closure_134_2[8]).joinGuild(closure_133_0, { lurker: true, source: joinSource, loadId, lurkLocation: closure_133_15 }), done: false };
    }
  } else if (2 === tmp5) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    }
  } else if (3 === tmp5) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else if (closure_133_9) {
      const obj21 = {};
      const merged3 = Object.assign(closure_133_14);
      obj21.welcomeModalChannelId = channelId;
      obj21.navigationReplace = null != channelId;
      let tmp16 = closure_133_11;
      if (!closure_133_11) {
        tmp16 = null != channelId;
      }
      obj21.openChannel = tmp16;
      obj21.search = history.location.search;
      c7 = 4;
      c8 = 1;
      closure_134_1(closure_134_2[8]);
      return { value: closure_134_1(closure_134_2[8]).transitionToGuildSync(closure_133_0, obj21, channelId, closure_133_2.messageId), done: false };
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 === 2) {
    c8 = 3;
    return { value, done: true };
  }
  if (onSuccess != null) {
    tmp116();
  }
  await "IconComponent";
  closure_5 = tmp2;
  closure_133_0 = closure_0;
  closure_133_1 = closure_1;
  let obj5 = closure_2;
  if (closure_2 === undefined) {
    obj5 = {};
  }
  closure_133_2 = obj5;
  closure_133_3 = closure_3;
  return "Reflect";
};
function makeDiscoverableGuild(body) {
  const obj = { id: body.id, name: body.name, description: body.description, splash: body.splash, banner: body.banner, icon: body.icon, features: new Set(body.features), presenceCount: null, memberCount: null, premiumSubscriptionCount: null, preferredLocale: null, discoverySplash: null, emojis: null, emojiCount: null, stickers: null, stickerCount: null, keywords: null };
  ({ approximate_presence_count: obj.presenceCount, approximate_member_count: obj.memberCount, premium_subscription_count: obj.premiumSubscriptionCount, preferred_locale: obj.preferredLocale, discovery_splash: obj.discoverySplash, emojis: obj.emojis, emoji_count: obj.emojiCount, stickers: obj.stickers, sticker_count: obj.stickerCount, keywords: obj.keywords } = body);
  return obj;
}
let closure_13 = async function _getDiscoverableGuild() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.GUILD_DISCOVERY, query: null, oldFormErrors: true, rejectWithError: true };
            const obj4 = { guild_ids };
            request.query = _modDef1493.stringify(obj4);
            c5 = 2;
            c6 = 1;
            const obj5 = { value: HTTP.get(request), done: false };
            return obj5;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          c6 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_129_0 = value;
          const body = closure_129_0.body;
          let first;
          if (body != null) {
            const guilds = body.guilds;
            if (guilds != null) {
              first = guilds[0];
            }
          }
          closure_129_1 = first;
          if (null != closure_129_1) {
            closure_130_12(closure_129_1);
          }
          c4 = 0;
          c6 = 3;
        }
      } catch (tmp21) {
        closure_3 = tmp21;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp21;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_14 = async function _fetchPublicDiscoveryGuild(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c4 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp6;
          let body;
          closure_129_1 = undefined;
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: React6.GUILD_WEB_PAGE(closure_0), oldFormErrors: true, rejectWithError: true };
          c2 = 2;
          c4 = 1;
          const obj5 = { value: HTTP.get(obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp6) {
        c3 = 0;
        c4 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        body = value.body;
        guild = undefined;
        if (body != null) {
          const data = body.data;
          if (data != null) {
            guild = data.guild;
          }
        }
        if (null != guild) {
          let canonical_url;
          if (body != null) {
            const seo = body.seo;
            if (seo != null) {
              canonical_url = seo.canonical_url;
            }
          }
          if (null != canonical_url) {
            const _URL = URL;
            const uRL = new URL(body.seo.canonical_url);
            const pathname = uRL.pathname;
            closure_129_1 = pathname.slice(9);
            const obj7 = { guild: body.data.guild, slug: closure_129_1 };
            c3 = 0;
            c4 = 3;
            const obj = { value: obj7, done: true };
            return obj;
          }
        }
        c3 = 0;
        c4 = 3;
        return { value: null, done: true };
      }
    } catch (tmp13) {
      if (tmp3 === c3) {
        c4 = tmp2;
        throw tmp13;
      } else {
        c2 = tmp;
      }
    }
  }
};
const Constants = fn(1087);
({ AnalyticEvents: closure_7, SearchTypes: closure_8, Endpoints: closure_9, Routes: c10 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("utils/GuildDiscoveryUtils.tsx");

export const AnalyticsContexts = { SEARCH: "Search", RECOMMENDED: "Recommended", POPULAR: "Popular", RECOMMENDED_E3: "Recommended - E3", HEADER: "Header", GLOBAL_DISCOVERY: "Global Discovery", FORWARD_BREADCRUMB: "Forward Breadcrumb" };
export const IOS_MINIMUM_MEMBER_COUNT = ">1000";
export const MINIMUM_MEMBER_COUNT = ">200";
export const startLurking = function startLurking() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { makeDiscoverableGuild };
export const trackDiscoveryExited = function trackDiscoveryExited(load_id, guild_ids_viewed) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  AnalyticsUtilsDefault.track(constants.GUILD_DISCOVERY_EXITED, { load_id, guild_ids_viewed, recommendations_source: tmp });
};
export const trackSearchClosed = function trackSearchClosed(load_id) {
  AnalyticsUtilsDefault.track(constants.SEARCH_CLOSED, { load_id });
};
export const trackSearchStarted = function trackSearchStarted(load_id, category_id) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  AnalyticsUtilsDefault.track(constants.SEARCH_STARTED, { search_type: constants2.GUILD_DISCOVERY, load_id, location: obj.location, category_id });
};
export const trackGuildDiscoverySearchStart = function trackGuildDiscoverySearchStart(arg0) {
  ({ withCounts, offset } = arg0);
  AnalyticsUtilsDefault.track(constants.GUILD_DISCOVERY_SEARCH_START, { with_counts: withCounts, offset });
};
export const trackSearchFailed = function trackSearchFailed(error) {
  error = error.error;
  ({ categoryId, willRequestRetry, isRequestRetry } = error);
  AnalyticsUtilsDefault.track(constants.GUILD_DISCOVERY_SEARCH_FAILED, { category_id: categoryId, request_status: error.status, request_error_code: error.code, will_request_retry: willRequestRetry, is_request_retry: isRequestRetry });
};
export const trackGuildDiscoveryGetFeaturedGuildsFailed = function trackGuildDiscoveryGetFeaturedGuildsFailed(category_id) {
  AnalyticsUtilsDefault.track(constants.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: category_id.categoryId });
};
export const trackSearchResultsViewed = function trackSearchResultsViewed(guildResults) {
  ({ loadId, searchId, query, analyticsContext, categoryId, isTagSearch } = guildResults.guildResults);
  const obj2 = { search_type: isTagSearch ? constants2.GUILD_DISCOVERY_TAG : constants2.GUILD_DISCOVERY, load_id: loadId, search_id: searchId, total_results: null, guild_ids: null, query: null, location: null, category_id: null };
  let length = null;
  if (undefined !== guildResults.guildResults) {
    length = guildResults.length;
  }
  obj2.total_results = length;
  let mapped = null;
  if (undefined !== guildResults.guildResults) {
    mapped = guildResults.map((id) => id.id);
  }
  obj2.guild_ids = mapped;
  obj2.query = query;
  obj2.location = analyticsContext.location;
  obj2.category_id = categoryId;
  AnalyticsUtilsDefault.track(constants.SEARCH_RESULT_VIEWED, obj2);
};
export const trackGuildJoinClicked = function trackGuildJoinClicked(guildId) {
  const loadId = LurkingStore.getLoadId(guildId);
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, { guild_id: guildId, load_id: loadId, guild_size: GuildMemberCountStore.getMemberCount(guildId) });
};
export const getDiscoverableGuild = function getDiscoverableGuild() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPublicDiscoveryGuild = function fetchPublicDiscoveryGuild() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};