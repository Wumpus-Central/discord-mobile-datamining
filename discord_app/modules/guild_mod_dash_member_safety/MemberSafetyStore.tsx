// discord_app/modules/guild_mod_dash_member_safety/MemberSafetyStore.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import hasMemberSupplemental from "MemberSafetyStoreSupplemental.tsx";
import createFetchKeys from "MemberSafetySupplementalUtils.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../stores/AuthenticationStore.tsx";
import closure_5 from "../../stores/GuildMemberStore.tsx";
import closure_6 from "../../stores/GuildStore.tsx";
import closure_7 from "../../stores/UserStore.tsx";
import { GuildMemberSafetyPageStore as closure_8 } from "GuildMemberSafetyPageStore.tsx";
import { EMPTY_STRING_SNOWFLAKE_ID } from "../../Constants.tsx";

require = arg1;
function getMemberSafetyPageStore(guildId) {
  if (null == dependencyMap[guildId]) {
    const tmp6 = new closure_8(guildId);
    tmp[guildId] = tmp6;
  }
  return dependencyMap[guildId];
}
function handleGuildMemberUpdate() {
  return false;
}
function handleGuildRoleUpdateOrDelete(guildId) {
  guildId = guildId.guildId;
  if (null == dependencyMap[guildId]) {
    const tmp6 = new closure_8(guildId);
    tmp[guildId] = tmp6;
  }
  let flag = false;
  if ("GUILD_ROLE_DELETE" === guildId.type) {
    flag = obj.removeRoleFromSearchState(guildId.roleId);
  }
  return dependencyMap[guildId].rebuildAllMembers() || flag;
}
function handleGuildRoleMemberUpdate(guildId) {
  guildId = guildId.guildId;
  if (null == dependencyMap[guildId]) {
    const tmp6 = new closure_8(guildId);
    tmp[guildId] = tmp6;
  }
  const items = [guildId.userId];
  return dependencyMap[guildId].updateMembersByMemberIds(items);
}
let c10 = false;
let closure_11 = {};
const Store = initializeDefault.Store;
class MemberSafetyStore extends Store {}
const prototype = MemberSafetyStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4, closure_5, closure_6, closure_7);
};
prototype["isInitialized"] = function isInitialized(arg0) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].isInitialized;
};
prototype["getMembersByGuildId"] = function getMembersByGuildId(arg0, CURRENT_GUILD_MEMBER) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].getMembersByIndex(CURRENT_GUILD_MEMBER);
};
prototype["getMembersCountByGuildId"] = function getMembersCountByGuildId(arg0, searchIndex) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].countMembersByIndex(searchIndex);
};
prototype["getEstimatedMemberSearchCountByGuildId"] = function getEstimatedMemberSearchCountByGuildId(arg0) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  ({ searchChunkSize, countMembersByIndex } = dependencyMap[arg0]);
  let totalResultsCount = obj.getTotalResultsCount();
  if (null == totalResultsCount) {
    totalResultsCount = countMembersByIndexResult;
  }
  return totalResultsCount;
};
prototype["getKnownMemberSearchCountByGuildId"] = function getKnownMemberSearchCountByGuildId(arg0) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].countMembersByIndex(dependencyMap[arg0].getSearchIndex());
};
prototype["getCurrentMemberSearchResultsByGuildId"] = function getCurrentMemberSearchResultsByGuildId(arg0) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].getMembersByIndex(dependencyMap[arg0].getSearchIndex());
};
prototype["getSearchStateByGuildId"] = function getSearchStateByGuildId(arg0) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].getSearchState();
};
prototype["hasDefaultSearchStateByGuildId"] = function hasDefaultSearchStateByGuildId(arg0) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].hasDefaultSearchState();
};
prototype["getPagedMembersByGuildId"] = function getPagedMembersByGuildId(arg0) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].getPaginatedMembers();
};
prototype["getPaginationStateByGuildId"] = function getPaginationStateByGuildId(arg0) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].getPaginationState();
};
prototype["getElasticSearchPaginationByGuildId"] = function getElasticSearchPaginationByGuildId(arg0) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].getElasticSearchPagination();
};
prototype["getEnhancedMember"] = function getEnhancedMember(arg0, arg1) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].getMember(arg1);
};
prototype["getNewMemberTimestamp"] = function getNewMemberTimestamp(arg0) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].getNewMemberTimestamp();
};
prototype["getLastRefreshTimestamp"] = function getLastRefreshTimestamp(arg0) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].lastRefreshTimestamp;
};
prototype["getLastCursorTimestamp"] = function getLastCursorTimestamp(arg0) {
  if (null == dependencyMap[arg0]) {
    const tmp6 = new closure_8(arg0);
    tmp[arg0] = tmp6;
  }
  return dependencyMap[arg0].lastCursorTimestamp;
};
MemberSafetyStore.displayName = "MemberSafetyStore";
const memberSafetyStore = new MemberSafetyStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    if (c10) {
      c10 = false;
    } else {
      for (const key10005 in closure_11) {
        let tmp12 = dependencyMap;
        if (null == dependencyMap[key10005]) {
          let tmp3 = closure_8;
          let tmp4 = new.target;
          let tmp5 = new.target;
          let tmp6 = key10005;
          let tmp7 = new closure_8(tmp11);
          let tmp8 = tmp7;
          tmp12[key10005] = tmp7;
        }
        let obj = tmp12[key10005];
        let resetResult = obj.reset(true);
        continue;
      }
    }
    c0 = false;
    guilds = guilds.guilds;
    const item = guilds.forEach((id) => {
      id = id.id;
      if (null == closure_1_11[id]) {
        const tmp6 = new closure_1_8(id);
        tmp[id] = tmp6;
      }
      closure_0 = closure_1_11[id].updateServerMembers(id.members) || closure_0;
    });
    return c0;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(guilds) {
    c0 = false;
    guilds = guilds.guilds;
    let item = guilds.forEach((arg0) => {
      ({ id, activity_instances } = arg0);
      closure_0 = undefined;
      if (null == closure_1_11[id]) {
        const tmp6 = new closure_1_8(id);
        tmp[id] = tmp6;
      }
      const items = [];
      closure_0 = items;
      if (activity_instances != null) {
        let item = activity_instances.forEach((participants) => {
          participants = participants.participants;
          if (participants != null) {
            const item = participants.forEach((member) => {
              if (obj.isNotNullish(member.member)) {
                arr = arr.push(member.member);
              }
            });
          }
        });
      }
      closure_0 = closure_1_11[id].updateServerMembers(items) || closure_0;
    });
    return c0;
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(arg0) {
    ({ guildId, members } = arg0);
    if (null != guildId) {
      if (null != guild.getGuild(guildId)) {
        c10 = true;
        const obj = getMemberSafetyPageStore(guildId);
        const items = [];
        for (const item10014 of members) {
          let tmp4 = item10014;
          if (null == obj.getMember(item10014.userId)) {
            let tmp5 = item10014;
            let arr = items.push(tmp4);
          }
          continue;
        }
        return items.length > 0 && obj.updateClientMembers(items);
      }
    }
    return false;
  },
  CACHE_LOADED: function handleCacheLoaded(guildMembers) {
    c0 = false;
    c10 = true;
    const entries = DISCORD_EPOCHDefault.entries(guildMembers.guildMembers);
    const item = entries.forEach((arg0) => {
      [tmp, tmp2] = arg0;
      if (null == closure_1_11[tmp]) {
        const tmp8 = new closure_1_8(tmp);
        tmp3[tmp] = tmp8;
      }
      closure_0 = closure_1_11[tmp].updateClientMembers(Object.values(tmp2)) || closure_0;
    });
    return c0;
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(arg0) {
    ({ members, guildId } = arg0);
    let updateServerMembersResult = members.length > 0;
    if (updateServerMembersResult) {
      if (null == dependencyMap[guildId]) {
        const tmp8 = new closure_8(guildId);
        tmp2[guildId] = tmp8;
      }
      updateServerMembersResult = dependencyMap[guildId].updateServerMembers(members);
      const obj = dependencyMap[guildId];
    }
    return updateServerMembersResult;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const id = guild.id;
    if (null == dependencyMap[id]) {
      const tmp6 = new closure_8(id);
      tmp[id] = tmp6;
    }
    const id2 = guild.id;
    let flag = tmp[id].isInitialized;
    if (flag === undefined) {
      flag = false;
    }
    if (null == dependencyMap[id2]) {
      const tmp12 = new closure_8(id2);
      tmp[id2] = tmp12;
    }
    dependencyMap[id2].reset(flag);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    if (null == dependencyMap[id]) {
      const tmp6 = new closure_8(id);
      tmp[id] = tmp6;
    }
    dependencyMap[id].reset(false);
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    let flag = false;
    const iter = arg0.chunks[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = getMemberSafetyPageStore;
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
    id = id.getId();
    if (null == dependencyMap[guildId]) {
      const tmp7 = new closure_8(guildId);
      tmp2[guildId] = tmp7;
    }
    const items = [id];
    return dependencyMap[guildId].updateMembersByMemberIds(items);
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      const tmp6 = new closure_8(guildId);
      tmp[guildId] = tmp6;
    }
    return dependencyMap[guildId].removeMember(guildId.user.id);
  },
  GUILD_ROLE_UPDATE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_DELETE: handleGuildRoleUpdateOrDelete,
  GUILD_MEMBER_PROFILE_UPDATE: function handleGuildMemberProfileUpdate(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      const tmp6 = new closure_8(guildId);
      tmp[guildId] = tmp6;
    }
    const items = [guildId.guildMember.user.id];
    return dependencyMap[guildId].updateMembersByMemberIds(items);
  },
  GUILD_ROLE_MEMBER_REMOVE: handleGuildRoleMemberUpdate,
  GUILD_ROLE_MEMBER_ADD: handleGuildRoleMemberUpdate,
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(arg0) {
    ({ guildId, members } = arg0);
    if (null != members) {
      if (0 !== members.length) {
        if (null == dependencyMap[guildId]) {
          const tmp6 = new closure_8(guildId);
          tmp[guildId] = tmp6;
        }
        return dependencyMap[guildId].updateMembersByMemberIds(
          members.reduce((arr, member) => {
            if (null != member.member) {
              arr.push(member.member.user.id);
            }
            return arr;
          }, []),
        );
      }
    }
    return false;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(arg0) {
    ({ guildId, addedMembers } = arg0);
    if (null != addedMembers) {
      if (0 !== addedMembers.length) {
        if (null == dependencyMap[guildId]) {
          const tmp6 = new closure_8(guildId);
          tmp[guildId] = tmp6;
        }
        return dependencyMap[guildId].updateMembersByMemberIds(
          addedMembers.reduce((arr, userId) => {
            arr.push(userId.userId);
            return arr;
          }, []),
        );
      }
    }
    return false;
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function handleLoadArchivedThreadsSuccess(arg0) {
    ({ guildId, members } = arg0);
    if (null != members) {
      if (0 !== members.length) {
        if (null == dependencyMap[guildId]) {
          const tmp6 = new closure_8(guildId);
          tmp[guildId] = tmp6;
        }
        return dependencyMap[guildId].updateMembersByMemberIds(
          members.reduce((arr, userId) => {
            arr.push(userId.userId);
            return arr;
          }, []),
        );
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
      if (null == dependencyMap[guildId]) {
        const tmp7 = new closure_8(guildId);
        tmp[guildId] = tmp7;
      }
      return dependencyMap[guildId].updateMembersByMemberIds(
        values.reduce((arr, owner) => {
          if (null != owner.owner) {
            arr.push(owner.owner.user.id);
          }
          return arr;
        }, []),
      );
    }
  },
  INITIALIZE_MEMBER_SAFETY_STORE: function handleInitializeMemberSafetyStore(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      const tmp6 = new closure_8(guildId);
      tmp[guildId] = tmp6;
    }
    return dependencyMap[guildId].initialize();
  },
  MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function handleNewMemberTimestampRefresh(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      const tmp6 = new closure_8(guildId);
      tmp[guildId] = tmp6;
    }
    return dependencyMap[guildId].refreshNewMembersAndSearchResults();
  },
  MEMBER_SAFETY_PAGINATION_UPDATE: function handlePaginationUpdate(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      const tmp6 = new closure_8(guildId);
      tmp[guildId] = tmp6;
    }
    return callback(dependencyMap[guildId].updatePaginationState(guildId.pagination), 1)[0];
  },
  MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function handlePaginationTokenUpdate(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      const tmp6 = new closure_8(guildId);
      tmp[guildId] = tmp6;
    }
    return dependencyMap[guildId].updatePaginationToken(guildId.continuationToken);
  },
  MEMBER_SAFETY_SEARCH_STATE_UPDATE: function handleSearchStateUpdate(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      const tmp6 = new closure_8(guildId);
      tmp[guildId] = tmp6;
    }
    return dependencyMap[guildId].updateSearchState(guildId.searchState);
  },
  FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function handleFetchGuildMemberSupplementalSuccess(arg0) {
    ({ guildId, memberSupplementals } = arg0);
    const result = hasMemberSupplemental.syncMemberSupplemental(guildId, memberSupplementals);
    if (result) {
      if (null == dependencyMap[guildId]) {
        const tmp8 = new closure_8(guildId);
        tmp2[guildId] = tmp8;
      }
      const result1 = dependencyMap[guildId].updateMembersByMemberIds(
        memberSupplementals.map((userId) => userId.userId),
      );
      const obj2 = dependencyMap[guildId];
    }
    return result;
  },
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function handleMemberSafetyGuildMemberSearchSuccess(totalResultsCount) {
    ({ guildId, members } = totalResultsCount);
    if (null == dependencyMap[guildId]) {
      const tmp6 = new closure_8(guildId);
      tmp[guildId] = tmp6;
    }
    let obj = tmp[guildId];
    const reduced = members.reduce(
      (memberIds, member) => {
        const user = member.member.user;
        memberIds = memberIds.memberIds;
        ({ source_invite_code, join_source_type, join_source_application_id, join_source_channel_id, inviter_id } =
          member);
        memberIds.push(user.id);
        const memberSupplementals = memberIds.memberSupplementals;
        memberSupplementals.push({
          userId: user.id,
          sourceInviteCode: source_invite_code,
          joinSourceType: join_source_type,
          joinSourceApplicationId: join_source_application_id,
          joinSourceChannelId: join_source_channel_id,
          inviterId: inviter_id,
        });
        return memberIds;
      },
      { memberIds: [], memberSupplementals: [] },
    );
    let memberIds = reduced.memberIds;
    obj1 = hasMemberSupplemental;
    let result = obj1.syncMemberSupplemental(guildId, reduced.memberSupplementals);
    let obj2 = createFetchKeys;
    const result1 = obj2.registerFetchedSupplementals(guildId, memberIds);
    let tmp14;
    let first;
    const result2 = obj.updateSearchedMembersByMemberIds(memberIds);
    if (members.length > 0) {
      first = members[0];
      tmp14 = members[members.length - 1];
    }
    obj = { totalResultsCount: totalResultsCount.total_result_count, elasticSearchCursor: null };
    let tmp9Result = tmp9(7242);
    let joined_at;
    if (first != null) {
      const member = first.member;
      if (member != null) {
        joined_at = member.joined_at;
      }
    }
    obj = { joinedAt: joined_at, userId: null };
    let id;
    if (first != null) {
      const member2 = first.member;
      if (member2 != null) {
        id = member2.user.id;
      }
    }
    if (id == null) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    obj1 = { before: tmp9Result.createMemberSearchCursor(obj), after: null };
    obj[1] = id;
    tmp9Result = tmp9(7242);
    let joined_at1;
    if (tmp14 != null) {
      const member3 = tmp14.member;
      if (member3 != null) {
        joined_at1 = member3.joined_at;
      }
    }
    obj2 = { joinedAt: joined_at1, userId: null };
    let id1;
    if (tmp14 != null) {
      const member4 = tmp14.member;
      if (member4 != null) {
        id1 = member4.user.id;
      }
    }
    if (id1 == null) {
      id1 = EMPTY_STRING_SNOWFLAKE_ID;
    }
    obj2[1] = id1;
    obj1[1] = tmp9Result.createMemberSearchCursor(obj2);
    obj[1] = obj1;
    if (!result) {
      result = result2;
    }
    if (!result) {
      result = callback(obj.updatePaginationState(obj, false), 1)[0];
    }
    return result;
  },
  MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function handleMemberSafetyGuildMemberUpdateBatch(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      const tmp6 = new closure_8(guildId);
      tmp[guildId] = tmp6;
    }
    return dependencyMap[guildId].updateMembersByMemberIds(guildId.userIds);
  },
});
let result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyStore.tsx");

export default memberSafetyStore;
