// discord_app/modules/guild_mod_dash_member_safety/GuildMemberSafetyPageStore.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import DurationsDefault from "../../utils/Durations.tsx";
import GuildMemberSafetyMembers from "GuildMemberSafetyMembers.tsx";
import guild_mod_dash_member_safety_DateUtils from "DateUtils.tsx";
import GuildMemberSafetySearch from "GuildMemberSafetySearch.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let arr;

let closure_5 = 3 * DurationsDefault.Millis.SECOND;
let result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetyPageStore.tsx");
class GuildMemberSafetyPageStore {
  constructor(guildId) {
    const merged = Object.assign({ lastRefreshTimestamp: 0, lastCursorTimestamp: null, _lastRefreshTimer: null });
    merged[1] = Date.now();
    merged.guildId = guildId;
    merged._initialized = false;
    merged._members = null;
    merged._pagination = null;
    merged._search = null;
    return merged;
  }
  getSearchIndex() {
    if (null != this._search) {
      let CURRENT_GUILD_MEMBER;
      if (!this._search.hasDefaultQuery) {
        CURRENT_GUILD_MEMBER = GuildMemberSafetyMembers.MemberSafetySecondaryIndex.INCLUDED_IN_SEARCH_RESULTS;
      }
      return CURRENT_GUILD_MEMBER;
    }
    CURRENT_GUILD_MEMBER = GuildMemberSafetyMembers.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER;
  }
  initialize() {
    let _members;
    let guildId;
    const self = this;
    if (this._initialized) {
      const _Date = Date;
      self.lastCursorTimestamp = Date.now();
    } else {
      self._initialized = true;
      const self2 = this;
      const self3 = this;
      const guildMemberSafetySearch = new GuildMemberSafetySearch.GuildMemberSafetySearch(self.guildId);
      self._search = guildMemberSafetySearch;
      const self4 = this;
      const self5 = this;
      const guildMemberSafetyMembers = new GuildMemberSafetyMembers.GuildMemberSafetyMembers(self.guildId);
      self._members = guildMemberSafetyMembers;
      ({ guildId, _members } = self);
      const self6 = this;
      const self7 = this;
      const guildMemberSafetyPagination = new require("GuildMemberSafetyPagination").GuildMemberSafetyPagination(
        guildId,
        _members.values(self.getSearchIndex()),
      );
      self._pagination = guildMemberSafetyPagination;
    }
  }
  reset() {
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
  }
  getMember(id) {
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
  }
  getMembersByIndex(CURRENT_GUILD_MEMBER) {
    const self = this;
    if (null != this._members) {
      let items1;
      if (self._initialized) {
        const _members = self._members;
        const items = [_members.values(CURRENT_GUILD_MEMBER), self._members.version];
        items1 = items;
      }
      return items1;
    }
    items1 = [[], 0];
  }
  countMembersByIndex(searchIndex) {
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
  }
  _checkUpdatesForPaginationUpdate(enhanceNewMemberResult, isIncludedInSearchResults2) {
    let tmp =
      null != isIncludedInSearchResults2.isIncludedInSearchResults &&
      isIncludedInSearchResults2.isIncludedInSearchResults !== enhanceNewMemberResult.isIncludedInSearchResults;
    if (!tmp) {
      tmp =
        null != isIncludedInSearchResults2.isCurrentGuildMemberByTimestamp &&
        isIncludedInSearchResults2.isCurrentGuildMemberByTimestamp !==
          enhanceNewMemberResult.isCurrentGuildMemberByTimestamp;
    }
    return tmp;
  }
  _getIsIncludedInSearch(enhanceNewMemberResult, isIncludedInSearchResults) {
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
  }
  updatePaginationChunks() {
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
  }
  removeMember(id) {
    const self = this;
    if (null != this._members) {
      if (self._initialized) {
        const _members = self._members;
        if (null == _members.getMemberByUserId(id)) {
          return false;
        } else {
          const _members2 = self._members;
          const tmp2 = _members2.removeMember(id) && self.updatePaginationChunks();
          return tmp2;
        }
      }
    }
    return false;
  }
  _rawUpdateMember(id, isIncludedInSearchResults) {
    const self = this;
    if (null == this._members) {
      const items = [false, false];
      return items;
    } else {
      let flag;
      const _members2 = self._members;
      const memberByUserId = _members2.getMemberByUserId(id);
      let enhanceNewMemberResult = memberByUserId;
      let flag4 = false;
      if (null == memberByUserId) {
        const trueMember = GuildMemberStore.getTrueMember(self.guildId, id);
        if (null == trueMember) {
          const items1 = [false, false];
          return items1;
        } else {
          const _members3 = self._members;
          enhanceNewMemberResult = _members3.enhanceNewMember(
            trueMember,
            self.getSearchState(),
            isIncludedInSearchResults,
          );
          flag4 = true;
        }
      }
      if (null == isIncludedInSearchResults.isIncludedInSearchResults) {
        const tmp4 = _slicedToArray(self._getIsIncludedInSearch(enhanceNewMemberResult, isIncludedInSearchResults), 2);
        flag = flag4;
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
      const updateMemberResult = _members.updateMember(enhanceNewMemberResult, isIncludedInSearchResults);
      if (!flag) {
        flag = self._checkUpdatesForPaginationUpdate(enhanceNewMemberResult, isIncludedInSearchResults);
      }
      const items2 = [flag, updateMemberResult];
      return items2;
    }
  }
  isMemberInIndex(arg0) {
    const self = this;
    let hasItem = !(null == this._members || !self._initialized);
    if (hasItem) {
      const _membersMap = self._members._membersMap;
      hasItem = _membersMap.has(arg0);
    }
    return hasItem;
  }
  isMemberIncludedInSearchResults(id) {
    const self = this;
    if (null != this._members) {
      if (null != self._search) {
        if (null != self._pagination) {
          if (self._initialized) {
            if (self._search.hasDefaultQuery) {
              const _pagination = self._pagination;
              return _pagination.isMemberInAnyChunk(id);
            } else {
              let enhanceNewMemberResult;
              const _members = self._members;
              const memberByUserId = _members.getMemberByUserId(id);
              if (null == memberByUserId) {
                const trueMember = GuildMemberStore.getTrueMember(self.guildId, id);
                if (null == trueMember) {
                  return false;
                } else {
                  const _members2 = self._members;
                  enhanceNewMemberResult = _members2.enhanceNewMember(trueMember, self.getSearchState());
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
  }
  updateMember(id, isIncludedInSearchResults) {
    const self = this;
    if (null != this._members) {
      if (self._initialized) {
        const tmp4 = _slicedToArray(self._rawUpdateMember(id, isIncludedInSearchResults), 2);
        let result = tmp4[1];
        if (tmp4[0]) {
          result = self.updatePaginationChunks();
        }
        return result;
      }
    }
    return false;
  }
  updateClientMembers(items) {
    let joinedAtTimestamp;
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
              let obj = { isIncludedInSearchResults: true };
              let merged = Object.assign(tmp10);
              tmp10 = obj;
            }
            if (flag2) {
              let obj2 = guild_mod_dash_member_safety_DateUtils;
              let obj3 = {
                isCurrentGuildMemberByTimestamp: joinedAtTimestamp <= self._members.newMemberTimestamp,
                refreshTimestamp: self.lastRefreshTimestamp,
              };
              joinedAtTimestamp = obj2.getJoinedAtTimestamp(tmp6.joinedAt);
              let merged1 = Object.assign(tmp10);
              tmp10 = obj3;
            }
            let tmp21 = _slicedToArray(self._rawUpdateMember(tmp6.userId, tmp10), 2);
            let first = tmp21[0];
            let tmp22 = tmp21;
            if (!first) {
              first = flag3;
            }
            flag3 = first;
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
  }
  updateServerMembers(members) {
    const self = this;
    if (null != this._members) {
      if (self._initialized) {
        let flag = false;
        let flag2 = false;
        const iter = members[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp6 = nextResult;
          let trueMember = GuildMemberStore.getTrueMember(self.guildId, nextResult.user.id);
          if (null != trueMember) {
            let tmp13 = _slicedToArray(self._rawUpdateMember(tmp6.user.id, tmp9), 2);
            let first = tmp13[0];
            let tmp14 = tmp13;
            if (!first) {
              first = flag;
            }
            flag = first;
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
  }
  updateMembersByMemberIds(items) {
    const self = this;
    if (null != this._members) {
      if (self._initialized) {
        return self.updateClientMembers(
          items.reduce((arr, item) => {
            const trueMember = GuildMemberStore.getTrueMember(self.guildId, item);
            if (null != trueMember) {
              arr = arr.push(trueMember);
            }
            return arr;
          }, []),
        );
      }
    }
    return false;
  }
  updateMembersSort(selectedSort) {
    const self = this;
    let closure_0 = selectedSort;
    const promise = new Promise((fn) => {
      let tmp2 = _mod12;
      const cloneDeep = tmp2.cloneDeep;
      const getMembersByIndex = self.getMembersByIndex;
      const items = [
        ...cloneDeep(getMembersByIndex(GuildMemberSafetyMembers.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)[0]),
      ];
      let obj = _mod12;
      HermesBuiltin.arraySpread(
        items,
        obj.cloneDeep(self.getMembersByIndex(GuildMemberSafetyMembers.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)[0]),
        tmp3,
      );
      const item = items.forEach((item) => {
        _search = _search._search;
        let flag;
        const obj = closure_0(self[9]);
        const sortValueForMember = obj.getSortValueForMember(item, closure_1_0);
        const tmp2 = _search;
        if (_search != null) {
          flag = _search.isMemberIncludedInSearchResults(item);
        }
        if (flag == null) {
          flag = false;
        }
        const _members = tmp2._members;
        if (_members != null) {
          const obj2 = { sort: sortValueForMember, isIncludedInSearchResults: flag };
          _members.updateMember(item, obj2);
        }
      });
      fn();
    });
    return promise;
  }
  sortMembersBySelectedSort(selectedSort) {
    const self = this;
    const tmp = null != this._search && null != self._members && self._initialized && null != selectedSort;
    if (tmp) {
      const obj = { sort: selectedSort };
      let result = self.updatePaginationState(obj, true);
      const updateMembersSortResult = self.updateMembersSort(selectedSort);
      updateMembersSortResult.then(() => {
        const result = self.updatePaginationChunks();
      });
    }
  }
  updateSearchedMembersByMemberIds(memberIds) {
    const self = this;
    if (null != this._search) {
      if (null != self._members) {
        if (self._initialized) {
          return self.updateClientMembers(
            memberIds.reduce((arr, item) => {
              const trueMember = GuildMemberStore.getTrueMember(self.guildId, item);
              if (null != trueMember) {
                arr = arr.push(trueMember);
              }
              return arr;
            }, []),
            self._search.requiresUsernameMatch,
            0 !== self.lastRefreshTimestamp,
          );
        }
      }
    }
    return false;
  }
  rebuildAllMembers() {
    const self = this;
    if (null != this._members) {
      if (self._initialized) {
        return self.updateClientMembers(GuildMemberStore.getMembers(self.guildId));
      }
    }
    return false;
  }
  _scheduleRefresh(NumberResult) {
    const self = this;
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
  }
  refreshNewMembersAndSearchResults() {
    const self = this;
    if (null != this._search) {
      if (null != self._members) {
        if (self._initialized) {
          const _Number = Number;
          const _Date = Date;
          const NumberResult = Number(Date.now());
          self._scheduleRefresh(NumberResult);
          const _members = self._members;
          const obj = _mod12;
          let flag2 = false;
          const cloneDeepResult = obj.cloneDeep(
            _members.values(GuildMemberSafetyMembers.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER),
          );
          for (const item10031 of cloneDeepResult) {
            let _members2 = self._members;
            let obj2 = {
              isCurrentGuildMemberByTimestamp: true,
              refreshTimestamp: NumberResult,
              user: UserStore.getUser(item10031.userId),
            };
            let updateMember = _members2.updateMember;
            let updateMemberResult = updateMember(item10031, obj2) || flag2;
            flag2 = updateMemberResult;
            continue;
          }
          const _members3 = self._members;
          const result = _members3.resetNewMemberTimestamp();
          if (self.resetSearchState()) {
            flag2 = false;
          }
          const tmp13 = _slicedToArray(self.updatePaginationState({ currentPage: 1 }, false), 2);
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
  }
  getNewMemberTimestamp() {
    const self = this;
    let num = 0;
    if (null != this._members) {
      num = 0;
      if (self._initialized) {
        num = self._members.newMemberTimestamp;
      }
    }
    return num;
  }
  updateSearchState(selectedSort) {
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
          const _members = self._members;
          const obj = _mod12;
          let flag2 = BooleanResult !== self._search.hasDefaultQuery;
          const cloneDeepResult = obj.cloneDeep(
            _members.values(GuildMemberSafetyMembers.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER),
          );
          for (const item10048 of cloneDeepResult) {
            if (item10048.isCurrentGuildMemberByTimestamp) {
              let _search3 = self._search;
              let result1 = _search3.isMemberIncludedInSearchResults(item10048);
              if (result1 !== item10048.isIncludedInSearchResults) {
                flag2 = true;
                flag = true;
                let _members2 = self._members;
                let obj2 = { isIncludedInSearchResults: tmp14 };
                let updateMemberResult = _members2.updateMember(item10048, obj2);
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
  }
  getSearchState() {
    const self = this;
    if (null != this._search) {
      let searchState;
      if (self._initialized) {
        const _search = self._search;
        searchState = _search.getSearchState();
      }
      return searchState;
    }
    const obj = GuildMemberSafetySearch;
    searchState = obj.getDefaultSearchState();
  }
  hasDefaultSearchState() {
    const self = this;
    return null == this._search || !self._initialized || self._search.hasDefaultQuery;
  }
  resetSearchState() {
    const self = this;
    let tmp2 = !(null == this._search || !self._initialized);
    if (tmp2) {
      const _search = self._search;
      tmp2 = _search.resetSearchState() && self.updatePaginationChunks();
      _search.resetSearchState() && self.updatePaginationChunks();
    }
    return tmp2;
  }
  getTotalResultsCount() {
    const self = this;
    let num = 0;
    if (null != this._search) {
      num = 0;
      if (null != self._pagination) {
        num = 0;
        if (self._initialized) {
          if (self._search.hasDefaultQuery) {
            let totalResultsCount;
            if (null != self._defaultSearchTotalResultsCount) {
              totalResultsCount = self._defaultSearchTotalResultsCount;
            }
            num = totalResultsCount;
          }
          const _pagination = self._pagination;
          totalResultsCount = _pagination.getPaginationState().totalResultsCount;
        }
      }
    }
    return num;
  }
  updatePaginationState(totalResultsCount) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    const self = this;
    if (null != this._search) {
      if (null != self._pagination) {
        let result;
        if (self._initialized) {
          if (flag) {
            self.lastRefreshTimestamp = 0;
          }
          const tmp2 = self._search.hasDefaultQuery && null != totalResultsCount.totalResultsCount;
          if (tmp2) {
            self._defaultSearchTotalResultsCount = totalResultsCount.totalResultsCount;
          }
          const _pagination = self._pagination;
          result = _pagination.updatePaginationState(totalResultsCount);
        }
        return result;
      }
    }
    result = [false, false];
  }
  clearPaginationState() {
    const _pagination = this._pagination;
    if (_pagination != null) {
      _pagination.reset();
    }
  }
  getPaginationState() {
    const self = this;
    if (null != this._pagination) {
      let paginationState;
      if (self._initialized) {
        const _pagination = self._pagination;
        paginationState = _pagination.getPaginationState();
      }
      return paginationState;
    }
    const obj = require("GuildMemberSafetyPagination");
    paginationState = obj.createDefaultMemberSafetyPaginationState();
  }
  getPaginatedMembers() {
    const self = this;
    if (null != this._pagination) {
      let items1;
      if (self._initialized) {
        const items = [self._pagination.paginatedMembers, self._pagination.version];
        items1 = items;
      }
      return items1;
    }
    items1 = [{}, 0];
  }
  updatePaginationToken(arg0) {
    const self = this;
    let result = !(null == this._pagination || !self._initialized);
    if (result) {
      const _pagination = self._pagination;
      result = _pagination.updatePaginationToken(arg0);
    }
    return result;
  }
  getElasticSearchPagination() {
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
  }
  removeRoleFromSearchState(roleId) {
    const selectedRoleIds = new Set(this.getSearchState().selectedRoleIds);
    selectedRoleIds.delete(roleId);
    return this.updateSearchState({ selectedRoleIds });
  }
}
const prototype = GuildMemberSafetyPageStore.prototype;
Object.defineProperty(prototype, "isInitialized", {
  get: function isInitialized() {
    return this._initialized;
  },
  set: undefined,
});
Object.defineProperty(prototype, "searchChunkSize", {
  get: function searchChunkSize() {
    const self = this;
    let num = 0;
    if (null != this._pagination) {
      num = 0;
      if (self._initialized) {
        const _pagination = self._pagination;
        const obj = require("GuildMemberSafetyPagination");
        num = obj.getSearchChunkLimit(_pagination.getPaginationState());
      }
    }
    return num;
  },
  set: undefined,
});

export { GuildMemberSafetyPageStore };
