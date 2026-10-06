// discord_app/utils/GuildDiscoveryUtils.tsx
import AnalyticsUtilsDefault from "AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef1478 from "../../_runtime/metro/01478__.js";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import LurkingStore from "../modules/lurker_mode/LurkingStore.tsx";
import GuildMemberCountStore from "../stores/GuildMemberCountStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let c7, guild_ids;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj = function _startLurking() {
  obj = _asyncToGenerator(async (arg0, analyticsSource, arg2) => {
    let channelId;
    let closure_5;
    let closure_6;
    let closure_9;
    let history;
    let obj4;
    let obj7;
    let obj8;
    let obj9;
    let onSuccess;
    let closure_0 = arg0;
    let closure_2 = arg2;
    if (1 === c7) {
      if (arg0 === 1) {
        let c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        channelId = obj4.channelId;
        onSuccess = obj4.onSuccess;
        const joinSource = obj4.joinSource;
        const loadId = obj4.loadId;
        const shouldNavigate = obj4.shouldNavigate;
        const tmp24 = undefined === shouldNavigate || shouldNavigate;
        closure_9 = tmp24;
        const obj6 = closure_134_0(closure_134_2[5]);
        history = obj6.getHistory();
        const joinedAt = closure_134_6.getGuild(closure_0);
        obj7 = { sourceLocationStack, state: obj8 };
        obj8 = { analyticsSource };
        if (null != joinedAt) {
          if (null != joinedAt.joinedAt) {
            const tmp79 = closure_9;
            if (tmp79) {
              if (null == channelId) {
                const obj15 = closure_134_0(closure_134_2[6]);
                obj15.transitionToGuild(closure_0, obj7);
              } else {
                const obj10 = { navigationReplace: true, openChannel: true };
                const tmp85 = closure_134_1(closure_134_2[7]);
                const CHANNELResult = closure_134_10.CHANNEL(closure_0, channelId, obj4.messageId);
                const merged = Object.assign(obj7);
                tmp85(CHANNELResult, obj10);
              }
            }
          }
        }
        if (null != joinedAt) {
          if (closure_134_4.isLurking(closure_0)) {
            const tmp60 = closure_9;
            if (tmp60) {
              const tmp64 = closure_134_1(closure_134_2[8]);
              const obj11 = {
                welcomeModalChannelId: channelId,
                navigationReplace: null != channelId,
                openChannel: null != channelId,
                search: history.location.search,
              };
              const transitionToGuildSync2 = tmp64.transitionToGuildSync;
              const merged1 = Object.assign(obj7);
              c7 = 2;
              c8 = 1;
              const obj12 = { value: transitionToGuildSync2(closure_0, obj11, channelId, obj4.messageId), done: false };
              return obj12;
            }
          }
        }
        let tmp45;
        if (sourceLocationStack != null) {
          tmp45 = tmp44[sourceLocationStack.length - 1];
        }
        let page = tmp45;
        if (tmp45 == null) {
          page = undefined;
          if (analyticsSource != null) {
            page = analyticsSource.page;
          }
        }
        const lurkLocation = page;
        const obj13 = { lurker: true, source: joinSource, loadId, lurkLocation };
        c7 = 3;
        c8 = 1;
        const obj14 = { value: obj9.joinGuild(closure_0, obj13), done: false };
        obj9 = closure_134_1(closure_134_2[8]);
        return obj14;
      }
    } else if (2 === c7) {
      if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj16 = { value, done: true };
        return obj16;
      }
    } else if (3 === c7) {
      if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj17 = { value, done: true };
        return obj17;
      } else {
        const tmp112 = closure_9;
        if (tmp112) {
          const tmp8 = closure_134_1(closure_134_2[8]);
          const obj18 = {
            welcomeModalChannelId: channelId,
            navigationReplace: null != channelId,
            openChannel: null != channelId,
            search: history.location.search,
          };
          const transitionToGuildSync = tmp8.transitionToGuildSync;
          const merged2 = Object.assign(obj7);
          c7 = 4;
          c8 = 1;
          const obj19 = { value: transitionToGuildSync(closure_0, obj18, channelId, obj4.messageId), done: false };
          return obj19;
        }
      }
    } else if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      obj = { value, done: true };
      return obj;
    }
    if (onSuccess != null) {
      tmp103();
    }
    await "IconComponent";
    obj4 = closure_2;
    if (closure_2 === undefined) {
      obj4 = {};
    }
    return "Reflect";
  });
  return obj(...arguments);
};
function makeDiscoverableGuild(body) {
  obj = {
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
  new Set(body.features);
  return obj;
}
obj = function _getDiscoverableGuild() {
  obj = _asyncToGenerator(async (guild_ids) => {
    let closure_1;
    let closure_2;
    let closure_3;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let first;
      let obj4;
      let obj7;
      let tmp14;
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: constants.GUILD_DISCOVERY,
        query: obj7.stringify(obj4),
        oldFormErrors: true,
        rejectWithError: true,
      };
      const get = HTTP.get;
      obj4 = { guild_ids };
      obj7 = _modDef1478;
      await get(request);
      guild_ids = value;
      const body = guild_ids.body;
      if (body != null) {
        const guilds = body.guilds;
        if (guilds != null) {
          first = guilds[0];
        }
      }
      if (null == first) {
        tmp14 = first;
      } else {
        tmp14 = closure_130_12(first);
      }
      return tmp14;
    })();
  });
  return obj(...arguments);
};
obj = function _fetchPublicDiscoveryGuild() {
  obj = _asyncToGenerator(async (arg0) => {
    let c2;
    let c3;
    let c4;
    let closure_1;
    let guild;
    let closure_0 = arg0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: React4.GUILD_DISCOVERY_SLUG(String(closure_0)), oldFormErrors: true, rejectWithError: true };
    const _String = String;
    const get = HTTP.get;
    await get(obj4);
    const body = value.body;
    if (body != null) {
      guild = body.guild;
    }
    let tmp5 = null;
    if (null != guild) {
      let slug;
      if (body != null) {
        slug = body.slug;
      }
      tmp5 = null;
      if (null != slug) {
        obj = { guild: body.guild, slug: body.slug };
        tmp5 = obj;
      }
    }
    return tmp5;
  });
  return obj(...arguments);
};
({ AnalyticEvents: metroImportDefault, SearchTypes: metroImportAll, Endpoints: c9, Routes: c10 } = Constants);
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
  return obj(...arguments);
};
export { makeDiscoverableGuild };
export const trackDiscoveryExited = function trackDiscoveryExited(load_id, guild_ids_viewed) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  obj = AnalyticsUtilsDefault;
  const obj2 = { load_id, guild_ids_viewed, recommendations_source: tmp };
  obj.track(metroImportDefault.GUILD_DISCOVERY_EXITED, obj2);
};
export const trackSearchClosed = function trackSearchClosed(load_id) {
  obj = AnalyticsUtilsDefault;
  const obj2 = { load_id };
  obj.track(metroImportDefault.SEARCH_CLOSED, obj2);
};
export const trackSearchStarted = function trackSearchStarted(load_id, category_id) {
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { search_type: metroImportAll.GUILD_DISCOVERY, load_id, location: obj.location, category_id };
  obj2.track(metroImportDefault.SEARCH_STARTED, obj3);
};
export const trackGuildDiscoverySearchStart = function trackGuildDiscoverySearchStart(arg0) {
  let offset;
  let withCounts;
  ({ withCounts, offset } = arg0);
  obj = AnalyticsUtilsDefault;
  obj.track(metroImportDefault.GUILD_DISCOVERY_SEARCH_START, { with_counts: withCounts, offset });
};
export const trackSearchFailed = function trackSearchFailed(error) {
  let categoryId;
  let isRequestRetry;
  let willRequestRetry;
  error = error.error;
  ({ categoryId, willRequestRetry, isRequestRetry } = error);
  obj = AnalyticsUtilsDefault;
  const obj2 = {
    category_id: categoryId,
    request_status: error.status,
    request_error_code: error.code,
    will_request_retry: willRequestRetry,
    is_request_retry: isRequestRetry,
  };
  obj.track(metroImportDefault.GUILD_DISCOVERY_SEARCH_FAILED, obj2);
};
export const trackGuildDiscoveryGetFeaturedGuildsFailed = function trackGuildDiscoveryGetFeaturedGuildsFailed(
  categoryId,
) {
  categoryId = categoryId.categoryId;
  obj = AnalyticsUtilsDefault;
  obj.track(metroImportDefault.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: categoryId });
};
export const trackSearchResultsViewed = function trackSearchResultsViewed(guildResults) {
  let analyticsContext;
  let categoryId;
  let isTagSearch;
  let length;
  let loadId;
  let mapped;
  let query;
  let searchId;
  ({ loadId, searchId, query, analyticsContext, categoryId, isTagSearch } = guildResults.guildResults);
  obj = {
    search_type: isTagSearch ? metroImportAll.GUILD_DISCOVERY_TAG : metroImportAll.GUILD_DISCOVERY,
    load_id: loadId,
    search_id: searchId,
    total_results: length,
    guild_ids: mapped,
    query,
    location: analyticsContext.location,
    category_id: categoryId,
  };
  length = null;
  const track = AnalyticsUtilsDefault.track;
  const SEARCH_RESULT_VIEWED = metroImportDefault.SEARCH_RESULT_VIEWED;
  AnalyticsUtilsDefault;
  if (undefined !== guildResults.guildResults) {
    length = guildResults.length;
  }
  mapped = null;
  if (undefined !== guildResults.guildResults) {
    mapped = guildResults.map((id) => id.id);
  }
  track(SEARCH_RESULT_VIEWED, obj);
};
export const trackGuildJoinClicked = function trackGuildJoinClicked(guildId) {
  const loadId = LurkingStore.getLoadId(guildId);
  obj = AnalyticsUtilsDefault;
  const obj2 = { guild_id: guildId, load_id: loadId, guild_size: GuildMemberCountStore.getMemberCount(guildId) };
  obj.track(metroImportDefault.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, obj2);
};
export const getDiscoverableGuild = function getDiscoverableGuild() {
  return obj(...arguments);
};
export const fetchPublicDiscoveryGuild = function fetchPublicDiscoveryGuild() {
  return obj(...arguments);
};
