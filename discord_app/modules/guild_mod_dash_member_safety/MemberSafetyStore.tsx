// === Module 7003: MemberSafetyStore ===

// Module 7003 (MemberSafetyStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import GuildMemberSafetyPageStore from "GuildMemberSafetyPageStore" /* 7004 */;
import MemberSafetyElasticSearchQueryTypes from "MemberSafetyElasticSearchQueryTypes" /* 7006 */;
import MemberSafetyStoreSupplemental from "MemberSafetyStoreSupplemental" /* 7010 */;
import MemberSafetySupplementalUtils from "MemberSafetySupplementalUtils" /* 7011 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let participants;

function getMemberSafetyPageStore(guildId) {
  if (null == closure_11[guildId]) {
    const self = this;
    const self2 = this;
    closure_11[guildId] = new closure_8(guildId);
    const tmp4 = new closure_8(guildId);
  }
  return closure_11[guildId];
}
function handleGuildMemberUpdate() {
  return false;
}
function handleGuildRoleUpdateOrDelete(guildId) {
  guildId = guildId.guildId;
  if (null == closure_11[guildId]) {
    const self = this;
    const self2 = this;
    closure_11[guildId] = new closure_8(guildId);
    const tmp4 = new closure_8(guildId);
  }
  let flag = false;
  if ("GUILD_ROLE_DELETE" === guildId.type) {
    flag = obj.removeRoleFromSearchState(guildId.roleId);
  }
  const tmp6 = closure_11[guildId].rebuildAllMembers() || flag;
  return tmp6;
}
function handleGuildRoleMemberUpdate(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  if (null == closure_11[guildId]) {
    const self = this;
    const self2 = this;
    closure_11[guildId] = new closure_8(guildId);
    const tmp4 = new closure_8(guildId);
  }
  const items = [];
  const obj = closure_11[guildId];
  items[0] = userId;
  return obj.updateMembersByMemberIds(items);
}
let closure_8 = GuildMemberSafetyPageStore.GuildMemberSafetyPageStore;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
let c10 = false;
const unpackModuleId = {};
const Store = get_initializedDefault.Store;
class MemberSafetyStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, GuildMemberStore, GuildStore, UserStore);
  }
  isInitialized(arg0) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    return closure_11[arg0].isInitialized;
  }
  getMembersByGuildId(arg0, CURRENT_GUILD_MEMBER) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    const obj = closure_11[arg0];
    return obj.getMembersByIndex(CURRENT_GUILD_MEMBER);
  }
  getMembersCountByGuildId(arg0, searchIndex) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    const obj = closure_11[arg0];
    return obj.countMembersByIndex(searchIndex);
  }
  getEstimatedMemberSearchCountByGuildId(arg0) {
    let countMembersByIndex;
    let searchChunkSize;
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    ({ searchChunkSize, countMembersByIndex } = closure_11[arg0]);
    const countMembersByIndexResult = countMembersByIndex(closure_11[arg0].getSearchIndex());
    const totalResultsCount = obj.getTotalResultsCount() ?? countMembersByIndexResult;
    return totalResultsCount;
  }
  getKnownMemberSearchCountByGuildId(arg0) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    return closure_11[arg0].countMembersByIndex(closure_11[arg0].getSearchIndex());
  }
  getCurrentMemberSearchResultsByGuildId(arg0) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    return closure_11[arg0].getMembersByIndex(closure_11[arg0].getSearchIndex());
  }
  getSearchStateByGuildId(arg0) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    const obj = closure_11[arg0];
    return obj.getSearchState();
  }
  hasDefaultSearchStateByGuildId(arg0) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    const obj = closure_11[arg0];
    return obj.hasDefaultSearchState();
  }
  getPagedMembersByGuildId(arg0) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    const obj = closure_11[arg0];
    return obj.getPaginatedMembers();
  }
  getPaginationStateByGuildId(arg0) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    const obj = closure_11[arg0];
    return obj.getPaginationState();
  }
  getElasticSearchPaginationByGuildId(arg0) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    const obj = closure_11[arg0];
    return obj.getElasticSearchPagination();
  }
  getEnhancedMember(arg0, arg1) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    const obj = closure_11[arg0];
    return obj.getMember(arg1);
  }
  getNewMemberTimestamp(arg0) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    const obj = closure_11[arg0];
    return obj.getNewMemberTimestamp();
  }
  getLastRefreshTimestamp(arg0) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    return closure_11[arg0].lastRefreshTimestamp;
  }
  getLastCursorTimestamp(arg0) {
    if (null == closure_11[arg0]) {
      const self = this;
      const self2 = this;
      closure_11[arg0] = new closure_8(arg0);
      const tmp4 = new closure_8(arg0);
    }
    return closure_11[arg0].lastCursorTimestamp;
  }
}
const prototype = MemberSafetyStore.prototype;
MemberSafetyStore.displayName = "MemberSafetyStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    const tmp = c10;
    if (tmp) {
      c10 = false;
    } else {
      for (const key10005 in closure_11) {
        if (null == closure_11[key10005]) {
          let self = this;
          let self2 = this;
          let tmp6 = new closure_8(tmp10);
          closure_11[key10005] = tmp6;
        }
        let obj = closure_11[key10005];
        let resetResult = obj.reset(true);
        continue;
      }
    }
    let closure_0 = false;
    guilds = guilds.guilds;
    const item = guilds.forEach(function(id) {
      id = id.id;
      const members = id.members;
      if (null == closure_11[id]) {
        const self = this;
        const self2 = this;
        closure_11[id] = new closure_8(id);
        const tmp4 = new closure_8(id);
      }
      const obj = closure_11[id];
      const tmp6 = obj.updateServerMembers(members) || closure_0;
      closure_0 = tmp6;
    });
    return closure_0;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(guilds) {
    let closure_0 = false;
    guilds = guilds.guilds;
    let item = guilds.forEach(function(item) {
      let activity_instances;
      let id;
      ({ id, activity_instances } = item);
      let items;
      if (null == closure_11[id]) {
        const self = this;
        const self2 = this;
        closure_11[id] = new closure_8(id);
        const tmp4 = new closure_8(id);
      }
      let obj = closure_11[id];
      items = [];
      if (activity_instances != null) {
        item = activity_instances.forEach((participants) => {
          participants = participants.participants;
          if (participants != null) {
            const item = participants.forEach((member) => {
              const obj = items(closure_2_2[7]);
              if (obj.isNotNullish(member.member)) {
                closure_1_0.push(member.member);
              }
            });
          }
        });
      }
      const tmp7 = obj.updateServerMembers(items) || closure_0;
      closure_0 = tmp7;
    });
    return closure_0;
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(arg0) {
    let guildId;
    let members;
    ({ guildId, members } = arg0);
    if (null != guildId) {
      if (null != GuildStore.getGuild(guildId)) {
        c10 = true;
        const obj = getMemberSafetyPageStore(guildId);
        const items = [];
        for (const item10014 of members) {
          if (null == obj.getMember(item10014.userId)) {
            let arr = items.push(item10014);
          }
          continue;
        }
        const tmp7 = items.length > 0 && obj.updateClientMembers(items);
        return tmp7;
      }
    }
    return false;
  },
  CACHE_LOADED: function handleCacheLoaded(guildMembers) {
    let closure_0 = false;
    c10 = true;
    guildMembers = guildMembers.guildMembers;
    let obj = SnowflakeUtilsDefault;
    const entries = obj.entries(guildMembers);
    const item = entries.forEach(function(item) {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      if (null == closure_11[tmp]) {
        const self = this;
        const self2 = this;
        closure_11[tmp] = new closure_8(tmp);
        const tmp6 = new closure_8(tmp);
      }
      const obj = closure_11[tmp];
      const tmp8 = obj.updateClientMembers(Object.values(tmp2)) || closure_0;
      closure_0 = tmp8;
    });
    return closure_0;
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(arg0) {
    let guildId;
    let members;
    ({ members, guildId } = arg0);
    let updateServerMembersResult = members.length > 0;
    if (updateServerMembersResult) {
      if (null == closure_11[guildId]) {
        const self = this;
        const self2 = this;
        closure_11[guildId] = new closure_8(guildId);
        const tmp6 = new closure_8(guildId);
      }
      const obj = closure_11[guildId];
      updateServerMembersResult = obj.updateServerMembers(members);
    }
    return updateServerMembersResult;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const id = guild.id;
    if (null == closure_11[id]) {
      const self = this;
      const self2 = this;
      closure_11[id] = new closure_8(id);
      const tmp4 = new closure_8(id);
    }
    const id2 = guild.id;
    let flag = closure_11[id].isInitialized;
    if (flag === undefined) {
      flag = false;
    }
    if (null == closure_11[id2]) {
      const self3 = this;
      const self4 = this;
      closure_11[id2] = new closure_8(id2);
      const tmp8 = new closure_8(id2);
    }
    const obj = closure_11[id2];
    obj.reset(flag);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    if (null == closure_11[id]) {
      const self = this;
      const self2 = this;
      closure_11[id] = new closure_8(id);
      const tmp4 = new closure_8(id);
    }
    const obj = closure_11[id];
    obj.reset(false);
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    let flag = false;
    const iter = arg0.chunks[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let obj = getMemberSafetyPageStore(nextResult.guildId);
      let tmp3 = obj.updateServerMembers(nextResult.members) || flag;
      flag = tmp3;
      continue;
    }
    return flag;
  },
  GUILD_MEMBER_ADD: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE_LOCAL: function handleGuildMemberUpdateLocal(guildId) {
    guildId = guildId.guildId;
    const id = AuthenticationStore.getId();
    if (null == closure_11[guildId]) {
      const self = this;
      const self2 = this;
      closure_11[guildId] = new closure_8(guildId);
      const tmp5 = new closure_8(guildId);
    }
    const items = [];
    const obj = closure_11[guildId];
    items[0] = id;
    return obj.updateMembersByMemberIds(items);
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = guildId.guildId;
    const user = guildId.user;
    if (null == closure_11[guildId]) {
      const self = this;
      const self2 = this;
      closure_11[guildId] = new closure_8(guildId);
      const tmp4 = new closure_8(guildId);
    }
    const obj = closure_11[guildId];
    return obj.removeMember(user.id);
  },
  GUILD_ROLE_UPDATE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_DELETE: handleGuildRoleUpdateOrDelete,
  GUILD_MEMBER_PROFILE_UPDATE: function handleGuildMemberProfileUpdate(guildId) {
    guildId = guildId.guildId;
    const guildMember = guildId.guildMember;
    if (null == closure_11[guildId]) {
      const self = this;
      const self2 = this;
      closure_11[guildId] = new closure_8(guildId);
      const tmp4 = new closure_8(guildId);
    }
    const items = [];
    const obj = closure_11[guildId];
    items[0] = guildMember.user.id;
    return obj.updateMembersByMemberIds(items);
  },
  GUILD_ROLE_MEMBER_REMOVE: handleGuildRoleMemberUpdate,
  GUILD_ROLE_MEMBER_ADD: handleGuildRoleMemberUpdate,
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(arg0) {
    let guildId;
    let members;
    ({ guildId, members } = arg0);
    if (null != members) {
      if (0 !== members.length) {
        if (null == closure_11[guildId]) {
          const self = this;
          const self2 = this;
          closure_11[guildId] = new closure_8(guildId);
          const tmp4 = new closure_8(guildId);
        }
        const obj = closure_11[guildId];
        return obj.updateMembersByMemberIds(members.reduce((arr, member) => {
          if (null != member.member) {
            arr = arr.push(member.member.user.id);
          }
          return arr;
        }, []));
      }
    }
    return false;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(arg0) {
    let addedMembers;
    let guildId;
    ({ guildId, addedMembers } = arg0);
    if (null != addedMembers) {
      if (0 !== addedMembers.length) {
        if (null == closure_11[guildId]) {
          const self = this;
          const self2 = this;
          closure_11[guildId] = new closure_8(guildId);
          const tmp4 = new closure_8(guildId);
        }
        const obj = closure_11[guildId];
        return obj.updateMembersByMemberIds(addedMembers.reduce((arr, userId) => {
          arr = arr.push(userId.userId);
          return arr;
        }, []));
      }
    }
    return false;
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function handleLoadArchivedThreadsSuccess(arg0) {
    let guildId;
    let members;
    ({ guildId, members } = arg0);
    if (null != members) {
      if (0 !== members.length) {
        if (null == closure_11[guildId]) {
          const self = this;
          const self2 = this;
          closure_11[guildId] = new closure_8(guildId);
          const tmp4 = new closure_8(guildId);
        }
        const obj = closure_11[guildId];
        return obj.updateMembersByMemberIds(members.reduce((arr, userId) => {
          arr = arr.push(userId.userId);
          return arr;
        }, []));
      }
    }
    return false;
  },
  LOAD_FORUM_POSTS: function handleLoadForumPosts(guildId) {
    guildId = guildId.guildId;
    const values = Object.values(guildId.threads);
    if (0 === values.length) {
      return false;
    } else {
      if (null == closure_11[guildId]) {
        const self = this;
        const self2 = this;
        closure_11[guildId] = new closure_8(guildId);
        const tmp5 = new closure_8(guildId);
      }
      const obj = closure_11[guildId];
      return obj.updateMembersByMemberIds(values.reduce((arr, owner) => {
        if (null != owner.owner) {
          arr = arr.push(owner.owner.user.id);
        }
        return arr;
      }, []));
    }
  },
  INITIALIZE_MEMBER_SAFETY_STORE: function handleInitializeMemberSafetyStore(guildId) {
    guildId = guildId.guildId;
    if (null == closure_11[guildId]) {
      const self = this;
      const self2 = this;
      closure_11[guildId] = new closure_8(guildId);
      const tmp4 = new closure_8(guildId);
    }
    const obj = closure_11[guildId];
    return obj.initialize();
  },
  MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function handleNewMemberTimestampRefresh(guildId) {
    guildId = guildId.guildId;
    if (null == closure_11[guildId]) {
      const self = this;
      const self2 = this;
      closure_11[guildId] = new closure_8(guildId);
      const tmp4 = new closure_8(guildId);
    }
    const obj = closure_11[guildId];
    return obj.refreshNewMembersAndSearchResults();
  },
  MEMBER_SAFETY_PAGINATION_UPDATE: function handlePaginationUpdate(guildId) {
    guildId = guildId.guildId;
    const pagination = guildId.pagination;
    if (null == closure_11[guildId]) {
      const self = this;
      const self2 = this;
      closure_11[guildId] = new closure_8(guildId);
      const tmp4 = new closure_8(guildId);
    }
    const obj = closure_11[guildId];
    return _slicedToArray(obj.updatePaginationState(pagination), 1)[0];
  },
  MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function handlePaginationTokenUpdate(guildId) {
    guildId = guildId.guildId;
    const continuationToken = guildId.continuationToken;
    if (null == closure_11[guildId]) {
      const self = this;
      const self2 = this;
      closure_11[guildId] = new closure_8(guildId);
      const tmp4 = new closure_8(guildId);
    }
    const obj = closure_11[guildId];
    return obj.updatePaginationToken(continuationToken);
  },
  MEMBER_SAFETY_SEARCH_STATE_UPDATE: function handleSearchStateUpdate(guildId) {
    guildId = guildId.guildId;
    const searchState = guildId.searchState;
    if (null == closure_11[guildId]) {
      const self = this;
      const self2 = this;
      closure_11[guildId] = new closure_8(guildId);
      const tmp4 = new closure_8(guildId);
    }
    const obj = closure_11[guildId];
    return obj.updateSearchState(searchState);
  },
  FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function handleFetchGuildMemberSupplementalSuccess(arg0) {
    let guildId;
    let memberSupplementals;
    ({ guildId, memberSupplementals } = arg0);
    const obj = MemberSafetyStoreSupplemental;
    const result = obj.syncMemberSupplemental(guildId, memberSupplementals);
    if (result) {
      if (null == closure_11[guildId]) {
        const self = this;
        const self2 = this;
        closure_11[guildId] = new closure_8(guildId);
        const tmp6 = new closure_8(guildId);
      }
      const obj2 = closure_11[guildId];
      const result1 = obj2.updateMembersByMemberIds(memberSupplementals.map((userId) => userId.userId));
    }
    return result;
  },
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function handleMemberSafetyGuildMemberSearchSuccess(total_result_count) {
    let createMemberSearchCursor2;
    let guildId;
    let id;
    let id1;
    let members;
    let obj6;
    let obj7;
    ({ guildId, members } = total_result_count);
    total_result_count = total_result_count.total_result_count;
    if (null == closure_11[guildId]) {
      const self = this;
      const self2 = this;
      closure_11[guildId] = new closure_8(guildId);
      const tmp4 = new closure_8(guildId);
    }
    let obj = closure_11[guildId];
    const reduced = members.reduce((memberIds, member) => {
      let inviter_id;
      let join_source_application_id;
      let join_source_channel_id;
      let join_source_type;
      let source_invite_code;
      const user = member.member.user;
      memberIds = memberIds.memberIds;
      ({ source_invite_code, join_source_type, join_source_application_id, join_source_channel_id, inviter_id } = member);
      memberIds.push(user.id);
      const memberSupplementals = memberIds.memberSupplementals;
      const obj = { userId: user.id, sourceInviteCode: source_invite_code, joinSourceType: join_source_type, joinSourceApplicationId: join_source_application_id, joinSourceChannelId: join_source_channel_id, inviterId: inviter_id };
      memberSupplementals.push(obj);
      return memberIds;
    }, { memberIds: [], memberSupplementals: [] });
    let memberIds = reduced.memberIds;
    let memberSupplementals = reduced.memberSupplementals;
    const obj2 = MemberSafetyStoreSupplemental;
    let result = obj2.syncMemberSupplemental(guildId, memberSupplementals);
    const obj3 = MemberSafetySupplementalUtils;
    const result1 = obj3.registerFetchedSupplementals(guildId, memberIds);
    let tmp12;
    let first;
    const result2 = obj.updateSearchedMembersByMemberIds(memberIds);
    if (members.length > 0) {
      first = members[0];
      tmp12 = members[members.length - 1];
    }
    const updatePaginationState = obj.updatePaginationState;
    let joined_at;
    const obj4 = { totalResultsCount: total_result_count, elasticSearchCursor: obj6 };
    const createMemberSearchCursor = MemberSafetyElasticSearchQueryTypes.createMemberSearchCursor;
    MemberSafetyElasticSearchQueryTypes;
    if (first != null) {
      const member = first.member;
      if (member != null) {
        joined_at = member.joined_at;
      }
    }
    const obj5 = { joinedAt: joined_at, userId: id };
    id = undefined;
    if (first != null) {
      const member2 = first.member;
      if (member2 != null) {
        id = member2.user.id;
      }
    }
    if (id == null) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    let joined_at1;
    obj6 = { before: createMemberSearchCursor(obj5), after: createMemberSearchCursor2(obj7) };
    createMemberSearchCursor2 = MemberSafetyElasticSearchQueryTypes.createMemberSearchCursor;
    MemberSafetyElasticSearchQueryTypes;
    if (tmp12 != null) {
      const member3 = tmp12.member;
      if (member3 != null) {
        joined_at1 = member3.joined_at;
      }
    }
    obj7 = { joinedAt: joined_at1, userId: id1 };
    id1 = undefined;
    if (tmp12 != null) {
      const member4 = tmp12.member;
      if (member4 != null) {
        id1 = member4.user.id;
      }
    }
    if (id1 == null) {
      id1 = EMPTY_STRING_SNOWFLAKE_ID;
    }
    const first1 = _slicedToArray(updatePaginationState(obj4, false), 1)[0];
    if (!result) {
      result = result2;
    }
    if (!result) {
      result = first1;
    }
    return result;
  },
  MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function handleMemberSafetyGuildMemberUpdateBatch(guildId) {
    guildId = guildId.guildId;
    const userIds = guildId.userIds;
    if (null == closure_11[guildId]) {
      const self = this;
      const self2 = this;
      closure_11[guildId] = new closure_8(guildId);
      const tmp4 = new closure_8(guildId);
    }
    const obj = closure_11[guildId];
    return obj.updateMembersByMemberIds(userIds);
  }
};
const memberSafetyStore = new MemberSafetyStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyStore.tsx");

export default memberSafetyStore;