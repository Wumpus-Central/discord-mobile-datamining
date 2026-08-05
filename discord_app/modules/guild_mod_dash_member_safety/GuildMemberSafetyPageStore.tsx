// discord_app/modules/guild_mod_dash_member_safety/GuildMemberSafetyPageStore.tsx
import _slicedToArray from "_slicedToArray";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import mergeGuildAvatar from "mergeGuildAvatar";
import { apply } from "../../../_runtime/00012_apply.js";
import { getJoinedAtDateFormatter } from "DateUtils.tsx";
import { getGuildMemberSecondaryIndexes } from "GuildMemberSafetyMembers.tsx";
import { items } from "GuildMemberSafetyPagination.tsx";
import { hasStringMatch } from "GuildMemberSafetySearch.tsx";

const require = arg1;
let closure_5 = 3 * require("set").Millis.SECOND;
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetyPageStore.tsx");
class GuildMemberSafetyPageStore {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[1] = Date.now();
    obj.guildId = global;
    obj._initialized = false;
    obj._members = null;
    obj._pagination = null;
    obj._search = null;
    return obj;
  }
}
const prototype = GuildMemberSafetyPageStore.prototype;
prototype["getSearchIndex"] = function getSearchIndex() {
  if (null != this._search) {
    if (!this._search.hasDefaultQuery) {
      let CURRENT_GUILD_MEMBER = getGuildMemberSecondaryIndexes /* getGuildMemberSecondaryIndexes */.MemberSafetySecondaryIndex.INCLUDED_IN_SEARCH_RESULTS;
    }
    return CURRENT_GUILD_MEMBER;
  }
  CURRENT_GUILD_MEMBER = getGuildMemberSecondaryIndexes /* getGuildMemberSecondaryIndexes */.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER;
};
prototype["initialize"] = function initialize() {
  let _members;
  let guildId;
  const self = this;
  if (this._initialized) {
    const _Date = Date;
    self.lastCursorTimestamp = Date.now();
  } else {
    self._initialized = true;
    const guildMemberSafetySearch = new hasStringMatch /* hasStringMatch */.GuildMemberSafetySearch(self.guildId);
    self._search = guildMemberSafetySearch;
    const guildMemberSafetyMembers = new getGuildMemberSecondaryIndexes /* getGuildMemberSecondaryIndexes */.GuildMemberSafetyMembers(self.guildId);
    self._members = guildMemberSafetyMembers;
    ({ guildId, _members } = self);
    const guildMemberSafetyPagination = new items /* items */.GuildMemberSafetyPagination(guildId, _members.values(self.getSearchIndex()));
    self._pagination = guildMemberSafetyPagination;
  }
};
Object.defineProperty(prototype, "isInitialized", {
  get: function isInitialized() {
    return this._initialized;
  },
  set: undefined
});
prototype["reset"] = function reset() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const self = this;
  if (this._initialized) {
    const _members = self._members;
    if (_members != null) {
      _members.reset();
    }
    const _pagination = self._pagination;
    if (_pagination != null) {
      _pagination.reset();
    }
    const _search = self._search;
    if (_search != null) {
      _search.reset();
    }
    if (flag) {
      self.initialize();
    }
  }
};
Object.defineProperty(prototype, "searchChunkSize", {
  get: function searchChunkSize() {
    const self = this;
    let num = 0;
    if (null != this._pagination) {
      num = 0;
      if (self._initialized) {
        const _pagination = self._pagination;
        num = items /* items */.getSearchChunkLimit(_pagination.getPaginationState());
        const obj = items /* items */;
      }
    }
    return num;
  },
  set: undefined
});
prototype["getMember"] = function getMember(id) {
  const self = this;
  let tmp = null;
  if (null != this._members) {
    tmp = null;
    if (self._initialized) {
      const _members = self._members;
      let memberByUserId = _members.getMemberByUserId(id);
      if (memberByUserId == null) {
        memberByUserId = null;
      }
      tmp = memberByUserId;
    }
  }
  return tmp;
};
prototype["getMembersByIndex"] = function getMembersByIndex(CURRENT_GUILD_MEMBER) {
  const self = this;
  if (null != this._members) {
    if (self._initialized) {
      const _members = self._members;
      const items = [_members.values(CURRENT_GUILD_MEMBER), self._members.version];
      let items1 = items;
    }
    return items1;
  }
  items1 = [[], 0];
};
prototype["countMembersByIndex"] = function countMembersByIndex(searchIndex) {
  const self = this;
  let num = 0;
  if (null != this._members) {
    num = 0;
    if (self._initialized) {
      const _members = self._members;
      num = _members.count(searchIndex);
    }
  }
  return num;
};
prototype["_checkUpdatesForPaginationUpdate"] = function _checkUpdatesForPaginationUpdate(enhanceNewMemberResult, isIncludedInSearchResults2) {
  let tmp = null != isIncludedInSearchResults2.isIncludedInSearchResults && isIncludedInSearchResults2.isIncludedInSearchResults !== enhanceNewMemberResult.isIncludedInSearchResults;
  if (!tmp) {
    tmp = null != isIncludedInSearchResults2.isCurrentGuildMemberByTimestamp && isIncludedInSearchResults2.isCurrentGuildMemberByTimestamp !== enhanceNewMemberResult.isCurrentGuildMemberByTimestamp;
    const tmp2 = null != isIncludedInSearchResults2.isCurrentGuildMemberByTimestamp && isIncludedInSearchResults2.isCurrentGuildMemberByTimestamp !== enhanceNewMemberResult.isCurrentGuildMemberByTimestamp;
  }
  return tmp;
};
prototype["_getIsIncludedInSearch"] = function _getIsIncludedInSearch(enhanceNewMemberResult, isIncludedInSearchResults) {
  const self = this;
  if (null == this._search) {
    const items = [false, false];
    return items;
  } else if (self._search.hasDefaultQuery) {
    const items1 = [false, false];
    return items1;
  } else {
    const obj = {};
    const merged = Object.assign(enhanceNewMemberResult);
    const merged1 = Object.assign(isIncludedInSearchResults);
    const _search = self._search;
    const result = _search.isMemberIncludedInSearchResults(obj);
    const items2 = [result, result !== enhanceNewMemberResult.isIncludedInSearchResults];
    return items2;
  }
};
prototype["updatePaginationChunks"] = function updatePaginationChunks() {
  const self = this;
  if (null != this._pagination) {
    if (null != self._members) {
      if (self._initialized) {
        const _members = self._members;
        const _pagination = self._pagination;
        return _pagination.updateSortedMembers(_members.values(self.getSearchIndex()));
      }
    }
  }
  return false;
};
prototype["removeMember"] = function removeMember(id) {
  const self = this;
  if (null != this._members) {
    if (self._initialized) {
      const _members = self._members;
      if (null == _members.getMemberByUserId(id)) {
        return false;
      } else {
        const _members2 = self._members;
        return _members2.removeMember(id) && self.updatePaginationChunks();
      }
    }
  }
  return false;
};
prototype["_rawUpdateMember"] = function _rawUpdateMember(id, isIncludedInSearchResults) {
  const self = this;
  if (null == this._members) {
    const items = [false, false];
    return items;
  } else {
    const _members2 = self._members;
    const memberByUserId = _members2.getMemberByUserId(id);
    let enhanceNewMemberResult = memberByUserId;
    let flag4 = false;
    if (null == memberByUserId) {
      const trueMember = store.getTrueMember(self.guildId, id);
      if (null == trueMember) {
        const items1 = [false, false];
        return items1;
      } else {
        const _members3 = self._members;
        enhanceNewMemberResult = _members3.enhanceNewMember(trueMember, self.getSearchState(), isIncludedInSearchResults);
        flag4 = true;
      }
    }
    if (null == isIncludedInSearchResults.isIncludedInSearchResults) {
      const tmp4 = callback(self._getIsIncludedInSearch(enhanceNewMemberResult, isIncludedInSearchResults), 2);
      let flag = flag4;
      if (tmp4[1]) {
        isIncludedInSearchResults.isIncludedInSearchResults = tmp4[0];
        flag = true;
      }
    } else {
      flag = flag4;
      if (isIncludedInSearchResults.isIncludedInSearchResults !== enhanceNewMemberResult.isIncludedInSearchResults) {
        flag = true;
      }
    }
    const _members = self._members;
    if (!flag) {
      flag = self._checkUpdatesForPaginationUpdate(enhanceNewMemberResult, isIncludedInSearchResults);
    }
    const items2 = [flag, _members.updateMember(enhanceNewMemberResult, isIncludedInSearchResults)];
    return items2;
  }
};
prototype["isMemberInIndex"] = function isMemberInIndex(arg0) {
  const self = this;
  let hasItem = !tmp;
  if (!(null == this._members || !self._initialized)) {
    const _membersMap = self._members._membersMap;
    hasItem = _membersMap.has(arg0);
  }
  return hasItem;
};
prototype["isMemberIncludedInSearchResults"] = function isMemberIncludedInSearchResults(id) {
  const self = this;
  if (null != this._members) {
    if (null != self._search) {
      if (null != self._pagination) {
        if (self._initialized) {
          if (self._search.hasDefaultQuery) {
            const _pagination = self._pagination;
            return _pagination.isMemberInAnyChunk(id);
          } else {
            const _members = self._members;
            const memberByUserId = _members.getMemberByUserId(id);
            if (null == memberByUserId) {
              const trueMember = store.getTrueMember(self.guildId, id);
              if (null == trueMember) {
                return false;
              } else {
                const _members2 = self._members;
                let enhanceNewMemberResult = _members2.enhanceNewMember(trueMember, self.getSearchState());
              }
            } else {
              enhanceNewMemberResult = memberByUserId;
              if (memberByUserId.isIncludedInSearchResults) {
                return true;
              }
            }
            const _search = self._search;
            return _search.isMemberIncludedInSearchResults(enhanceNewMemberResult);
          }
        }
      }
    }
  }
  return false;
};
prototype["updateMember"] = function updateMember(id, isIncludedInSearchResults) {
  const self = this;
  if (null != this._members) {
    if (self._initialized) {
      const tmp4 = callback(self._rawUpdateMember(id, isIncludedInSearchResults), 2);
      let result = tmp4[1];
      if (tmp4[0]) {
        result = self.updatePaginationChunks();
      }
      return result;
    }
  }
  return false;
};
prototype["updateClientMembers"] = function updateClientMembers(items, requiresUsernameMatch, arg2) {
  let flag = requiresUsernameMatch;
  if (requiresUsernameMatch === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  const self = this;
  if (null != this._members) {
    if (self._initialized) {
      let flag3 = false;
      let flag4 = false;
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp6 = nextResult;
        if (null != nextResult.joinedAt) {
          let tmp10 = nextResult;
          if (flag) {
            let obj = {};
            let tmp7 = tmp10;
            let tmp8 = obj;
            let merged = Object.assign(tmp10);
            obj.isIncludedInSearchResults = true;
            tmp10 = obj;
          }
          if (flag2) {
            let tmp11 = require;
            let tmp12 = dependencyMap;
            let obj2 = getJoinedAtDateFormatter /* getJoinedAtDateFormatter */;
            let tmp13 = nextResult;
            obj = {};
            let tmp15 = tmp10;
            let tmp16 = obj;
            let joinedAtTimestamp = obj2.getJoinedAtTimestamp(tmp6.joinedAt);
            let merged1 = Object.assign(tmp10);
            obj.isCurrentGuildMemberByTimestamp = joinedAtTimestamp <= self._members.newMemberTimestamp;
            obj.refreshTimestamp = self.lastRefreshTimestamp;
            tmp10 = obj;
          }
          let tmp18 = nextResult;
          let tmp19 = tmp10;
          let tmp20 = callback;
          let tmp21 = callback(self._rawUpdateMember(tmp6.userId, tmp10), 2);
          let first = tmp21[0];
          let tmp22 = tmp21;
          if (!first) {
            first = flag3;
          }
          flag3 = first;
          let tmp24 = tmp21;
          let tmp25 = tmp22[1] || flag4;
          flag4 = tmp25;
        }
        continue;
      }
      if (flag3) {
        flag4 = self.updatePaginationChunks();
      }
      return flag4;
    }
  }
  return false;
};
prototype["updateServerMembers"] = function updateServerMembers(members) {
  const self = this;
  if (null != this._members) {
    if (self._initialized) {
      let flag = false;
      let flag2 = false;
      const iter = members[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = store;
        let tmp6 = nextResult;
        let trueMember = store.getTrueMember(self.guildId, nextResult.user.id);
        if (null != trueMember) {
          let tmp10 = nextResult;
          let tmp11 = trueMember;
          let tmp12 = callback;
          let tmp13 = callback(self._rawUpdateMember(tmp6.user.id, tmp9), 2);
          let first = tmp13[0];
          let tmp14 = tmp13;
          if (!first) {
            first = flag;
          }
          flag = first;
          let tmp16 = tmp13;
          let tmp17 = tmp14[1] || flag2;
          flag2 = tmp17;
        }
        continue;
      }
      if (flag) {
        flag2 = self.updatePaginationChunks();
      }
      return flag2;
    }
  }
  return false;
};
prototype["updateMembersByMemberIds"] = function updateMembersByMemberIds(items) {
  let self = this;
  self = this;
  if (null != this._members) {
    if (self._initialized) {
      return self.updateClientMembers(items.reduce((arr, id) => {
        const trueMember = outer1_3.getTrueMember(self.guildId, id);
        if (null != trueMember) {
          arr.push(trueMember);
        }
        return arr;
      }, []));
    }
  }
  return false;
};
prototype["updateMembersSort"] = function updateMembersSort(selectedSort) {
  const self = this;
  let closure_0 = selectedSort;
  return new Promise((arg0) => {
    const items = [...selectedSort(self[8]).cloneDeep(self.getMembersByIndex(closure_0(self[4]).MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)[0])];
    let obj = selectedSort(self[8]);
    HermesBuiltin.arraySpread(selectedSort(self[8]).cloneDeep(self.getMembersByIndex(selectedSort(self[4]).MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)[0]), tmp);
    const item = items.forEach((joinedAt) => {
      let obj = outer1_0(outer1_1[9]);
      _search = _search._search;
      let flag;
      const sortValueForMember = obj.getSortValueForMember(joinedAt, closure_0);
      if (_search != null) {
        flag = _search.isMemberIncludedInSearchResults(joinedAt);
      }
      if (flag == null) {
        flag = false;
      }
      const _members = _search._members;
      if (_members != null) {
        obj = { sort: null, isIncludedInSearchResults: null };
        obj[0] = sortValueForMember;
        obj[1] = flag;
        _members.updateMember(joinedAt, obj);
      }
    });
    arg0();
  });
};
prototype["sortMembersBySelectedSort"] = function sortMembersBySelectedSort(selectedSort) {
  let self = this;
  self = this;
  let tmp = null != this._search && null != self._members && self._initialized;
  if (tmp) {
    tmp = null != selectedSort;
  }
  if (tmp) {
    const obj = { sort: null };
    obj[0] = selectedSort;
    let result = self.updatePaginationState(obj, true);
    self.updateMembersSort(selectedSort).then(() => {
      const result = self.updatePaginationChunks();
    });
    const updateMembersSortResult = self.updateMembersSort(selectedSort);
  }
};
prototype["updateSearchedMembersByMemberIds"] = function updateSearchedMembersByMemberIds(memberIds) {
  let self = this;
  self = this;
  if (null != this._search) {
    if (null != self._members) {
      if (self._initialized) {
        return self.updateClientMembers(memberIds.reduce((arr, id) => {
          const trueMember = outer1_3.getTrueMember(self.guildId, id);
          if (null != trueMember) {
            arr.push(trueMember);
          }
          return arr;
        }, []), self._search.requiresUsernameMatch, 0 !== self.lastRefreshTimestamp);
      }
    }
  }
  return false;
};
prototype["rebuildAllMembers"] = function rebuildAllMembers() {
  const self = this;
  if (null != this._members) {
    if (self._initialized) {
      return self.updateClientMembers(store.getMembers(self.guildId));
    }
  }
  return false;
};
prototype["_scheduleRefresh"] = function _scheduleRefresh(NumberResult) {
  let self = this;
  self = this;
  this.lastRefreshTimestamp = NumberResult;
  this.lastCursorTimestamp = Date.now();
  if (null != this._lastRefreshTimer) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self._lastRefreshTimer);
  }
  self._lastRefreshTimer = setTimeout(() => {
    self._lastRefreshTimer = null;
    self.lastRefreshTimestamp = 0;
  }, closure_5);
};
prototype["refreshNewMembersAndSearchResults"] = function refreshNewMembersAndSearchResults() {
  const self = this;
  if (null != this._search) {
    if (null != self._members) {
      if (self._initialized) {
        const _Number = Number;
        const _Date = Date;
        const NumberResult = Number(Date.now());
        self._scheduleRefresh(NumberResult);
        let obj = apply /* apply */;
        const _members = self._members;
        const cloneDeepResult = obj.cloneDeep(_members.values(getGuildMemberSecondaryIndexes /* getGuildMemberSecondaryIndexes */.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER));
        let flag2 = false;
        for (const item10031 of cloneDeepResult) {
          let _members2 = self._members;
          obj = { isCurrentGuildMemberByTimestamp: true, refreshTimestamp: null, user: null };
          obj[1] = NumberResult;
          let tmp9 = user;
          obj[2] = user.getUser(item10031.userId);
          let updateMemberResult = _members2.updateMember(item10031, obj);
          if (!updateMemberResult) {
            updateMemberResult = flag2;
          }
          flag2 = updateMemberResult;
          continue;
        }
        const _members3 = self._members;
        const result = _members3.resetNewMemberTimestamp();
        if (self.resetSearchState()) {
          flag2 = false;
        }
        const tmp13 = callback(self.updatePaginationState({ currentPage: 1 }, false), 2);
        const first = tmp13[0];
        if (tmp13[1]) {
          flag2 = false;
        }
        if (flag2) {
          const result1 = self.updatePaginationChunks();
        }
        return true;
      }
    }
  }
  return false;
};
prototype["getNewMemberTimestamp"] = function getNewMemberTimestamp() {
  const self = this;
  let num = 0;
  if (null != this._members) {
    num = 0;
    if (self._initialized) {
      num = self._members.newMemberTimestamp;
    }
  }
  return num;
};
prototype["updateSearchState"] = function updateSearchState(selectedSort) {
  const self = this;
  if (null != this._members) {
    if (null != self._search) {
      if (self._initialized) {
        const _Boolean = Boolean;
        const BooleanResult = Boolean(self._search.hasDefaultQuery);
        let tmp4 = null != selectedSort.selectedSort;
        if (tmp4) {
          const _search = self._search;
          tmp4 = selectedSort.selectedSort !== _search.getSearchState().selectedSort;
        }
        if (tmp4) {
          const result = self.sortMembersBySelectedSort(selectedSort.selectedSort);
        }
        const _search2 = self._search;
        let flag = _search2.updateSearchState(selectedSort);
        if (self._search.hasDefaultQuery) {
          if (BooleanResult) {
            return self.updatePaginationChunks();
          }
        }
        let obj = apply /* apply */;
        const _members = self._members;
        const cloneDeepResult = obj.cloneDeep(_members.values(getGuildMemberSecondaryIndexes /* getGuildMemberSecondaryIndexes */.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER));
        let flag2 = BooleanResult !== self._search.hasDefaultQuery;
        for (const item10048 of cloneDeepResult) {
          let tmp11 = item10048;
          if (item10048.isCurrentGuildMemberByTimestamp) {
            let _search3 = self._search;
            let tmp12 = item10048;
            let result1 = _search3.isMemberIncludedInSearchResults(tmp11);
            if (result1 !== tmp11.isIncludedInSearchResults) {
              flag2 = true;
              flag = true;
              let _members2 = self._members;
              let tmp15 = item10048;
              obj = { isIncludedInSearchResults: null };
              let tmp16 = result1;
              obj[0] = tmp14;
              let updateMemberResult = _members2.updateMember(tmp11, obj);
            }
          }
          continue;
        }
        if (flag2) {
          const result2 = self.updatePaginationChunks();
          const result3 = self.updatePaginationState({ currentPage: 1 });
          flag = true;
        }
        return flag;
      }
    }
  }
  return false;
};
prototype["getSearchState"] = function getSearchState() {
  const self = this;
  if (null != this._search) {
    if (self._initialized) {
      const _search = self._search;
      let searchState = _search.getSearchState();
    }
    return searchState;
  }
  searchState = hasStringMatch /* hasStringMatch */.getDefaultSearchState();
};
prototype["hasDefaultSearchState"] = function hasDefaultSearchState() {
  const self = this;
  return null == this._search || !self._initialized || self._search.hasDefaultQuery;
};
prototype["resetSearchState"] = function resetSearchState() {
  const self = this;
  let tmp2 = !tmp;
  if (!(null == this._search || !self._initialized)) {
    const _search = self._search;
    tmp2 = _search.resetSearchState() && self.updatePaginationChunks();
    const tmp3 = _search.resetSearchState() && self.updatePaginationChunks();
  }
  return tmp2;
};
prototype["getTotalResultsCount"] = function getTotalResultsCount() {
  const self = this;
  let num = 0;
  if (null != this._search) {
    num = 0;
    if (null != self._pagination) {
      num = 0;
      if (self._initialized) {
        if (!self._search.hasDefaultQuery) {
          const _pagination = self._pagination;
          _pagination.getPaginationState().totalResultsCount;
        }
      }
    }
  }
  return num;
};
prototype["updatePaginationState"] = function updatePaginationState(totalResultsCount) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const self = this;
  if (null != this._search) {
    if (null != self._pagination) {
      if (self._initialized) {
        if (flag) {
          self.lastRefreshTimestamp = 0;
        }
        if (tmp2) {
          self._defaultSearchTotalResultsCount = totalResultsCount.totalResultsCount;
        }
        const _pagination = self._pagination;
        let result = _pagination.updatePaginationState(totalResultsCount);
        tmp2 = self._search.hasDefaultQuery && null != totalResultsCount.totalResultsCount;
      }
      return result;
    }
  }
  result = [false, false];
};
prototype["clearPaginationState"] = function clearPaginationState() {
  const _pagination = this._pagination;
  if (_pagination != null) {
    _pagination.reset();
  }
};
prototype["getPaginationState"] = function getPaginationState() {
  const self = this;
  if (null != this._pagination) {
    if (self._initialized) {
      const _pagination = self._pagination;
      let paginationState = _pagination.getPaginationState();
    }
    return paginationState;
  }
  paginationState = items /* items */.createDefaultMemberSafetyPaginationState();
};
prototype["getPaginatedMembers"] = function getPaginatedMembers() {
  const self = this;
  if (null != this._pagination) {
    if (self._initialized) {
      const items = [self._pagination.paginatedMembers, self._pagination.version];
      let items1 = items;
    }
    return items1;
  }
  items1 = [{}, 0];
};
prototype["updatePaginationToken"] = function updatePaginationToken(arg0) {
  const self = this;
  let result = !tmp;
  if (!(null == this._pagination || !self._initialized)) {
    const _pagination = self._pagination;
    result = _pagination.updatePaginationToken(arg0);
  }
  return result;
};
prototype["getElasticSearchPagination"] = function getElasticSearchPagination() {
  const self = this;
  let elasticSearchPagination = null;
  if (null != this._pagination) {
    elasticSearchPagination = null;
    if (self._initialized) {
      const _pagination = self._pagination;
      elasticSearchPagination = _pagination.getElasticSearchPagination();
    }
  }
  return elasticSearchPagination;
};
prototype["removeRoleFromSearchState"] = function removeRoleFromSearchState(roleId) {
  const selectedRoleIds = new Set(this.getSearchState().selectedRoleIds);
  selectedRoleIds.delete(roleId);
  return this.updateSearchState({ selectedRoleIds });
};

export { GuildMemberSafetyPageStore };