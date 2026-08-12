// discord_app/utils/GuildDiscoveryUtils.tsx
import transitionTo from "transitionTo";
import initialize from "initialize";
import handleInviteData from "handleInviteData";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import ME from "ME";
import { expandEventProperties } from "AnalyticsUtils.tsx";

let c10;
let c9;
let error;
let metroImportAll;
const require = arg1;
function _startLurking() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let transitionTo = arg3;
    let c7 = 0;
    let c8 = 0;
    const iter = (function*(arg0, arg1) {
      if (shouldNavigate === 2) {
        shouldNavigate = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp3;
        if (tmp4 === 3) {
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
            shouldNavigate = 2;
            if (0 === loadId) {
              if (arg0 === 1) {
                shouldNavigate = 3;
                throw arg1;
              } else if (arg0 === 2) {
                shouldNavigate = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let joinSource = tmp5;
                let onSuccess = tmp2;
                let obj1;
                let length;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = lib;
                if (obj1 === undefined) {
                  obj1 = {};
                }
                throwTypeErrorResult = length;
                let page;
                onSuccess = undefined;
                joinSource = undefined;
                loadId = undefined;
                shouldNavigate = undefined;
                let c9;
                let history;
                let joinedAt;
                let obj3;
                let closure_13;
                loadId = 1;
                shouldNavigate = 1;
                return { value: "ct", done: true };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  shouldNavigate = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  shouldNavigate = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  throwTypeErrorResult = onSuccess;
                  throwTypeErrorResult = obj1;
                  page = obj1.channelId;
                  throwTypeErrorResult = obj1;
                  onSuccess = obj1.onSuccess;
                  throwTypeErrorResult = obj1;
                  joinSource = obj1.joinSource;
                  throwTypeErrorResult = obj1;
                  loadId = obj1.loadId;
                  throwTypeErrorResult = obj1;
                  shouldNavigate = obj1.shouldNavigate;
                  throwTypeErrorResult = shouldNavigate;
                  let tmp24 = undefined === shouldNavigate;
                  if (!tmp24) {
                    tmp24 = shouldNavigate;
                  }
                  c9 = tmp24;
                  let obj6 = callback(obj1[5]);
                  history = obj6.getHistory();
                  joinedAt = joinSource.getGuild(callback);
                  obj3 = { sourceLocationStack: null, state: null };
                  obj3[0] = length;
                  const obj4 = { analyticsSource: null };
                  obj4[0] = lib;
                  obj3[1] = obj4;
                  if (null != joinedAt) {
                    if (null != joinedAt.joinedAt) {
                      if (c9) {
                        if (null == page) {
                          throwTypeErrorResult = callback(obj1[6]).transitionToGuild(callback, obj3);
                          const obj17 = callback(obj1[6]);
                        } else {
                          const obj5 = {};
                          const tmp84 = lib(obj1[7]);
                          const merged = Object.assign(obj3);
                          obj5.navigationReplace = true;
                          obj5.openChannel = true;
                          tmp84(history.CHANNEL(callback, page, obj1.messageId), obj5);
                          const CHANNELResult = history.CHANNEL(callback, page, obj1.messageId);
                        }
                      }
                    }
                  }
                  if (null != joinedAt) {
                    if (page.isLurking(callback)) {
                      if (c9) {
                        let obj12 = lib(obj1[8]);
                        obj6 = {};
                        const merged1 = Object.assign(obj3);
                        obj6.welcomeModalChannelId = page;
                        obj6.navigationReplace = null != page;
                        obj6.openChannel = null != page;
                        obj6.search = history.location.search;
                        loadId = 2;
                        shouldNavigate = 1;
                        const obj7 = { value: null, done: false };
                        obj7[0] = obj12.transitionToGuildSync(callback, obj6, page, obj1.messageId);
                        return obj7;
                      }
                    }
                  }
                  let tmp45;
                  if (length != null) {
                    tmp45 = tmp44[length.length - 1];
                  }
                  page = tmp45;
                  if (tmp45 == null) {
                    page = undefined;
                    if (lib != null) {
                      page = lib.page;
                    }
                  }
                  closure_13 = page;
                  let obj9 = lib(obj1[8]);
                  const obj8 = { lurker: true, source: null, loadId: null, lurkLocation: null };
                  obj8[1] = joinSource;
                  obj8[2] = loadId;
                  obj8[3] = closure_13;
                  loadId = 3;
                  shouldNavigate = 1;
                  obj9 = { value: null, done: false };
                  obj9[0] = obj9.joinGuild(callback, obj8);
                  return obj9;
                }
              } else if (2 === tmp5) {
                if (arg0 === 1) {
                  shouldNavigate = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  shouldNavigate = 3;
                  const obj10 = { value: null, done: true };
                  obj10[0] = arg1;
                  return obj10;
                }
              } else if (3 === tmp5) {
                if (arg0 === 1) {
                  shouldNavigate = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  shouldNavigate = 3;
                  const obj11 = { value: null, done: true };
                  obj11[0] = arg1;
                  return obj11;
                } else {
                  throwTypeErrorResult = onSuccess;
                  throwTypeErrorResult = c9;
                  if (c9) {
                    obj1 = lib(obj1[8]);
                    obj12 = {};
                    const merged2 = Object.assign(obj3);
                    obj12.welcomeModalChannelId = page;
                    obj12.navigationReplace = null != page;
                    obj12.openChannel = null != page;
                    obj12.search = history.location.search;
                    loadId = 4;
                    shouldNavigate = 1;
                    const obj13 = { value: null, done: false };
                    obj13[0] = obj1.transitionToGuildSync(callback, obj12, page, obj1.messageId);
                    return obj13;
                  }
                }
              } else if (arg0 === 1) {
                shouldNavigate = 3;
                throw arg1;
              } else if (arg0 === 2) {
                shouldNavigate = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              throwTypeErrorResult = onSuccess;
              throwTypeErrorResult = null;
              if (onSuccess != null) {
                throwTypeErrorResult = throwTypeErrorResult();
              }
              shouldNavigate = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (throwTypeErrorResult) {
            shouldNavigate = throwTypeErrorResult;
            throw throwTypeErrorResult;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _startLurking = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function makeDiscoverableGuild(body) {
  const obj = { id: body.id, name: body.name, description: body.description, splash: body.splash, banner: body.banner, icon: body.icon, features: null, presenceCount: null, memberCount: null, premiumSubscriptionCount: null, preferredLocale: null, discoverySplash: null, emojis: null, emojiCount: null, stickers: null, stickerCount: null, keywords: null };
  obj[6] = new Set(body.features);
  ({ approximate_presence_count: obj[7], approximate_member_count: obj[8], premium_subscription_count: obj[9], preferred_locale: obj[10], discovery_splash: obj[11], emojis: obj[12], emoji_count: obj[13], stickers: obj[14], sticker_count: obj[15], keywords: obj[16] } = body);
  return obj;
}
function _getDiscoverableGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp3;
              let first = tmp7;
              let lib;
              first = undefined;
              let c4 = 1;
              const HTTP = lib(outer1_2[10]).HTTP;
              const obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: true };
              obj1[0] = outer1_9.GUILD_DISCOVERY;
              const obj2 = { guild_ids: null };
              obj2[0] = lib;
              obj1[1] = outer1_1(outer1_2[11]).stringify(obj2);
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            lib = arg1;
            const body = lib.body;
            first = undefined;
            if (body != null) {
              const guilds = body.guilds;
              if (guilds != null) {
                first = guilds[0];
              }
            }
            if (null != first) {
              callback(first);
            }
            c4 = 0;
            c6 = 3;
          }
        } catch (tmp21) {
          let transitionTo = tmp21;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp21;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _getDiscoverableGuild = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchPublicDiscoveryGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c4 = 0;
    let c3 = 0;
    return (function*(arg0, body) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_1 = tmp6;
              body = undefined;
              let c3 = 1;
              const HTTP = callback(table[10]).HTTP;
              const obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
              const _String = String;
              obj1[0] = outer1_9.GUILD_DISCOVERY_SLUG(String(body));
              table = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp6) {
            c3 = 0;
            c4 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c4 = 3;
            throw body;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            body = body.body;
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
                obj = { guild: null, slug: null };
                obj[0] = body.guild;
                obj[1] = body.slug;
                tmp8 = obj;
              }
            }
            c3 = 0;
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = tmp8;
            return obj4;
          }
        } catch (tmp14) {
          if (tmp3 === c3) {
            c4 = tmp2;
            throw tmp14;
          } else {
            table = tmp;
          }
        }
      }
    })();
  });
  const _fetchPublicDiscoveryGuild = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: error, SearchTypes: metroImportAll, Endpoints: c9, Routes: c10 } = ME);
const result = require("handleInviteData").fileFinishedImporting("utils/GuildDiscoveryUtils.tsx");

export const AnalyticsContexts = { SEARCH: "Search", RECOMMENDED: "Recommended", POPULAR: "Popular", RECOMMENDED_E3: "Recommended - E3", HEADER: "Header", GLOBAL_DISCOVERY: "Global Discovery", FORWARD_BREADCRUMB: "Forward Breadcrumb" };
export const IOS_MINIMUM_MEMBER_COUNT = ">1000";
export const MINIMUM_MEMBER_COUNT = ">200";
export const startLurking = function startLurking(id, c4, arg2, c42) {
  const self = this;
  const apply = _startLurking.apply;
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
  let obj = expandEventProperties;
  obj = { load_id, guild_ids_viewed, recommendations_source: tmp };
  obj.track(constants.GUILD_DISCOVERY_EXITED, obj);
};
export const trackSearchClosed = function trackSearchClosed(load_id) {
  let obj = expandEventProperties;
  obj = { load_id };
  obj.track(constants.SEARCH_CLOSED, obj);
};
export const trackSearchStarted = function trackSearchStarted(load_id, category_id) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  obj = { search_type: constants2.GUILD_DISCOVERY, load_id, location: obj.location, category_id };
  expandEventProperties.track(constants.SEARCH_STARTED, obj);
};
export const trackGuildDiscoverySearchStart = function trackGuildDiscoverySearchStart(arg0) {
  let offset;
  let withCounts;
  ({ withCounts, offset } = arg0);
  expandEventProperties.track(constants.GUILD_DISCOVERY_SEARCH_START, { with_counts: withCounts, offset });
};
export const trackSearchFailed = function trackSearchFailed(error) {
  let categoryId;
  let isRequestRetry;
  let willRequestRetry;
  error = error.error;
  ({ categoryId, willRequestRetry, isRequestRetry } = error);
  let obj = expandEventProperties;
  obj = { category_id: categoryId, request_status: error.status, request_error_code: error.code, will_request_retry: willRequestRetry, is_request_retry: isRequestRetry };
  obj.track(constants.GUILD_DISCOVERY_SEARCH_FAILED, obj);
};
export const trackGuildDiscoveryGetFeaturedGuildsFailed = function trackGuildDiscoveryGetFeaturedGuildsFailed(category_id) {
  expandEventProperties.track(constants.GUILD_DISCOVERY_GET_FEATURED_GUILDS_FAILED, { category_id: category_id.categoryId });
};
export const trackSearchResultsViewed = function trackSearchResultsViewed(guildResults) {
  let analyticsContext;
  let categoryId;
  let isTagSearch;
  let loadId;
  let query;
  let searchId;
  ({ loadId, searchId, query, analyticsContext, categoryId, isTagSearch } = guildResults);
  let obj = expandEventProperties;
  obj = { search_type: isTagSearch ? tmp.GUILD_DISCOVERY_TAG : tmp.GUILD_DISCOVERY, load_id: loadId, search_id: searchId, total_results: null, guild_ids: null, query: null, location: null, category_id: null };
  let length = null;
  if (undefined !== guildResults.guildResults) {
    length = guildResults.length;
  }
  obj[3] = length;
  let mapped = null;
  if (undefined !== guildResults.guildResults) {
    mapped = guildResults.map((id) => id.id);
  }
  obj[4] = mapped;
  obj[5] = query;
  obj[6] = analyticsContext.location;
  obj[7] = categoryId;
  obj.track(constants.SEARCH_RESULT_VIEWED, obj);
};
export const trackGuildJoinClicked = function trackGuildJoinClicked(guild_id) {
  loadId = loadId.getLoadId(guild_id);
  let obj = expandEventProperties;
  obj = { guild_id, load_id: loadId, guild_size: memberCount.getMemberCount(guild_id) };
  obj.track(constants.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, obj);
};
export const getDiscoverableGuild = function getDiscoverableGuild() {
  const self = this;
  const apply = _getDiscoverableGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPublicDiscoveryGuild = function fetchPublicDiscoveryGuild() {
  const self = this;
  const apply = _fetchPublicDiscoveryGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};