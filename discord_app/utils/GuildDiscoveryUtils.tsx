// discord_app/utils/GuildDiscoveryUtils.tsx
import AnalyticsUtilsDefault from "AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef1471 from "../../_runtime/metro/01471__.js";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import LurkingStore from "../modules/lurker_mode/LurkingStore.tsx";
import GuildMemberCountStore from "../stores/GuildMemberCountStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";

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
      let tmp24 = undefined === shouldNavigate;
      if (!tmp24) {
        tmp24 = shouldNavigate;
      }
      closure_133_9 = tmp24;
      let obj6 = closure_134_0(closure_134_2[5]);
      const history = obj6.getHistory();
      const guild = closure_134_6.getGuild(closure_133_0);
      const obj3 = { sourceLocationStack: closure_133_3, state: null };
      obj3.state = { analyticsSource: closure_133_1 };
      closure_133_12 = obj3;
      if (null != guild) {
        if (null != guild.joinedAt) {
          if (closure_133_9) {
            if (null == channelId) {
              closure_134_0(closure_134_2[6]).transitionToGuild(closure_133_0, closure_133_12);
              closure_134_0(closure_134_2[6]);
            } else {
              const obj5 = {};
              const merged = Object.assign(closure_133_12);
              obj5.navigationReplace = true;
              obj5.openChannel = true;
              closure_134_1(closure_134_2[7])(
                closure_134_10.CHANNEL(closure_133_0, channelId, closure_133_2.messageId),
                obj5,
              );
              closure_134_10.CHANNEL(closure_133_0, channelId, closure_133_2.messageId);
              closure_134_1(closure_134_2[7]);
            }
          }
        }
      }
      if (null != guild) {
        if (closure_134_4.isLurking(closure_133_0)) {
          if (closure_133_9) {
            let obj12 = closure_134_1(closure_134_2[8]);
            obj6 = {};
            const merged1 = Object.assign(closure_133_12);
            obj6.welcomeModalChannelId = channelId;
            obj6.navigationReplace = null != channelId;
            obj6.openChannel = null != channelId;
            obj6.search = history.location.search;
            c7 = 2;
            c8 = 1;
            return {
              value: obj12.transitionToGuildSync(closure_133_0, obj6, channelId, closure_133_2.messageId),
              done: false,
            };
          }
        }
      }
      let tmp45;
      if (closure_133_3 != null) {
        tmp45 = tmp44[closure_133_3.length - 1];
      }
      let page = tmp45;
      if (tmp45 == null) {
        page = undefined;
        if (closure_133_1 != null) {
          page = closure_133_1.page;
        }
      }
      closure_133_13 = page;
      closure_134_1(closure_134_2[8]);
      c7 = 3;
      c8 = 1;
      const obj9 = { value: null, done: false };
      obj9.value = obj9.joinGuild(closure_133_0, {
        lurker: true,
        source: joinSource,
        loadId,
        lurkLocation: closure_133_13,
      });
      return obj9;
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
      let obj1 = closure_134_1(closure_134_2[8]);
      obj12 = {};
      const merged2 = Object.assign(closure_133_12);
      obj12.welcomeModalChannelId = channelId;
      obj12.navigationReplace = null != channelId;
      obj12.openChannel = null != channelId;
      obj12.search = history.location.search;
      c7 = 4;
      c8 = 1;
      return {
        value: obj1.transitionToGuildSync(closure_133_0, obj12, channelId, closure_133_2.messageId),
        done: false,
      };
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 === 2) {
    c8 = 3;
    return { value, done: true };
  }
  if (onSuccess != null) {
    tmp102();
  }
  await "HermesInternal";
  closure_5 = tmp2;
  closure_133_0 = closure_0;
  closure_133_1 = closure_1;
  obj1 = closure_2;
  if (closure_2 === undefined) {
    obj1 = {};
  }
  closure_133_2 = obj1;
  closure_133_3 = closure_3;
  return "PX_16";
};
function makeDiscoverableGuild(body) {
  const obj = {
    id: body.id,
    name: body.name,
    description: body.description,
    splash: body.splash,
    banner: body.banner,
    icon: body.icon,
    features: new Set(body.features),
    presenceCount: null,
    memberCount: null,
    premiumSubscriptionCount: null,
    preferredLocale: null,
    discoverySplash: null,
    emojis: null,
    emojiCount: null,
    stickers: null,
    stickerCount: null,
    keywords: null,
  };
  ({
    approximate_presence_count: obj.presenceCount,
    approximate_member_count: obj.memberCount,
    premium_subscription_count: obj.premiumSubscriptionCount,
    preferred_locale: obj.preferredLocale,
    discovery_splash: obj.discoverySplash,
    emojis: obj.emojis,
    emoji_count: obj.emojiCount,
    stickers: obj.stickers,
    sticker_count: obj.stickerCount,
    keywords: obj.keywords,
  } = body);
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
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.GUILD_DISCOVERY, query: null, oldFormErrors: true, rejectWithError: true };
            const obj1 = { guild_ids };
            request.query = _modDef1471.stringify(obj1);
            c5 = 2;
            c6 = 1;
            const obj2 = { value: HTTP.get(request), done: false };
            return obj2;
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
          obj = { value, done: true };
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
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp6;
          let body;
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
          const _String = String;
          obj1.url = React7.GUILD_DISCOVERY_SLUG(String(closure_0));
          c2 = 2;
          c4 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
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
        const obj3 = { value, done: true };
        return obj3;
      } else {
        body = value.body;
        let guild;
        if (body != null) {
          guild = body.guild;
        }
        let tmp8 = null;
        if (null != guild) {
          let slug;
          if (body != null) {
            slug = body.slug;
          }
          tmp8 = null;
          if (null != slug) {
            obj = { guild: body.guild, slug: body.slug };
            tmp8 = obj;
          }
        }
        c3 = 0;
        c4 = 3;
        const obj4 = { value: tmp8, done: true };
        return obj4;
      }
    } catch (tmp14) {
      if (tmp3 === c3) {
        c4 = tmp2;
        throw tmp14;
      } else {
        c2 = tmp;
      }
    }
  }
};
const Constants = fn(1074);
({ AnalyticEvents: closure_7, SearchTypes: closure_8, Endpoints: closure_9, Routes: c10 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("utils/GuildDiscoveryUtils.tsx");

export const AnalyticsContexts = {
  SEARCH: "Search",
  RECOMMENDED: "Recommended",
  POPULAR: "Popular",
  RECOMMENDED_E3: "Recommended - E3",
  HEADER: "Header",
  GLOBAL_DISCOVERY: "Global Discovery",
  FORWARD_BREADCRUMB: "Forward Breadcrumb",
};
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
  const obj = { load_id, guild_ids_viewed, recommendations_source: tmp };
  obj.track(constants.GUILD_DISCOVERY_EXITED, obj);
};
export const trackSearchClosed = function trackSearchClosed(load_id) {
  const obj = { load_id };
  obj.track(constants.SEARCH_CLOSED, obj);
};
export const trackSearchStarted = function trackSearchStarted(load_id, category_id) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  obj = { search_type: constants2.GUILD_DISCOVERY, load_id, location: obj.location, category_id };
  AnalyticsUtilsDefault.track(constants.SEARCH_STARTED, obj);
};
export const trackGuildDiscoverySearchStart = function trackGuildDiscoverySearchStart(arg0) {
  ({ withCounts, offset } = arg0);
  AnalyticsUtilsDefault.track(constants.GUILD_DISCOVERY_SEARCH_START, { with_counts: withCounts, offset });
};
export const trackSearchFailed = function trackSearchFailed(error) {
  error = error.error;
  ({ categoryId, willRequestRetry, isRequestRetry } = error);
  const obj = {
    category_id: categoryId,
    request_status: error.status,
    request_error_code: error.code,
    will_request_retry: willRequestRetry,
    is_request_retry: isRequestRetry,
  };
  obj.track(constants.GUILD_DISCOVERY_SEARCH_FAILED, obj);
};
export const trackGuildDiscoveryGetFeaturedGuildsFailed = function trackGuildDiscoveryGetFeaturedGuildsFailed(
  category_id,
) {
  AnalyticsUtilsDefault.track(constants.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, {
    category_id: category_id.categoryId,
  });
};
export const trackSearchResultsViewed = function trackSearchResultsViewed(guildResults) {
  ({ loadId, searchId, query, analyticsContext, categoryId, isTagSearch } = guildResults.guildResults);
  const obj = {
    search_type: isTagSearch ? constants2.GUILD_DISCOVERY_TAG : constants2.GUILD_DISCOVERY,
    load_id: loadId,
    search_id: searchId,
    total_results: null,
    guild_ids: null,
    query: null,
    location: null,
    category_id: null,
  };
  let length = null;
  if (undefined !== guildResults.guildResults) {
    length = guildResults.length;
  }
  obj.total_results = length;
  let mapped = null;
  if (undefined !== guildResults.guildResults) {
    mapped = guildResults.map((id) => id.id);
  }
  obj.guild_ids = mapped;
  obj.query = query;
  obj.location = analyticsContext.location;
  obj.category_id = categoryId;
  obj.track(constants.SEARCH_RESULT_VIEWED, obj);
};
export const trackGuildJoinClicked = function trackGuildJoinClicked(guildId) {
  const loadId = LurkingStore.getLoadId(guildId);
  const obj = { guild_id: guildId, load_id: loadId, guild_size: GuildMemberCountStore.getMemberCount(guildId) };
  obj.track(constants.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, obj);
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
