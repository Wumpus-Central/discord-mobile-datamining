// discord_app/modules/guild_mod_dash_member_safety/GuildMemberSafetyPagination.tsx
import result2 from "MemberSafetyElasticSearchQueryTypes.tsx";
import closure_2 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../stores/GuildMemberStore.tsx";

require = arg1;
let items = [12, 25, 50, 100];
let closure_5 = { FORWARD: 1, [1]: "FORWARD", BACKWARD: -1, [-1]: "BACKWARD" };
let result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetyPagination.tsx");
class GuildMemberSafetyPagination {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj._reduceMemberIdsToPaginationChunks = function _reduceMemberIdsToPaginationChunks(arg0, userId, arg2) {
      const sum = Math.floor(arg2 / obj._paginationState.pageSize) + 1;
      if (null == arg0[sum]) {
        arg0[sum] = [];
      }
      let arr = arg0[sum];
      arr = arr.push(userId);
      return arg0;
    };
    obj.guildId = global;
    obj = { pageSize: closure_4[0], currentPage: 1, continuationToken: null, sort: require("result").OrderBy.ORDER_BY_UNSPECIFIED, elasticSearchCursor: null };
    obj._paginationState = obj;
    obj._version = 0;
    tmp = closure_2(obj._initPaginationFromRawMembers(arg1), 2);
    [obj._sortedMemberIds, obj._cachedPaginationChunks] = tmp;
    obj._version = obj._version + 1;
    return obj;
  }
}
const prototype = GuildMemberSafetyPagination.prototype;
prototype["reset"] = function reset() {
  this._paginationState = { pageSize: items[0], currentPage: 1, continuationToken: null, sort: result2.OrderBy.ORDER_BY_UNSPECIFIED, elasticSearchCursor: null };
  this._sortedMemberIds = [];
  this._cachedPaginationChunks = {};
  this._version = this._version + 1;
};
prototype["isMemberOnCurrentPage"] = function isMemberOnCurrentPage(arg0) {
  items = this._cachedPaginationChunks[this._paginationState.currentPage];
  if (items == null) {
    items = [];
  }
  return items.includes(arg0);
};
prototype["isMemberInAnyChunk"] = function isMemberInAnyChunk(id) {
  const _sortedMemberIds = this._sortedMemberIds;
  return _sortedMemberIds.includes(id);
};
prototype["_initPaginationFromRawMembers"] = function _initPaginationFromRawMembers(arr) {
  const self = this;
  items = [];
  const items1 = [
    items,
    arr.reduce((arg0, userId) => {
      const result = self._reduceMemberIdsToPaginationChunks(arg0, userId.userId, arg2);
      items.push(userId.userId);
      return result;
    }, {})
  ];
  return items1;
};
prototype["_buildPaginationFromMemberIds"] = function _buildPaginationFromMemberIds(_sortedMemberIds) {
  return _sortedMemberIds.reduce(this._reduceMemberIdsToPaginationChunks, {});
};
prototype["_rebuildPaginationChunksFromStoredMembers"] = function _rebuildPaginationChunksFromStoredMembers() {
  this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds);
  this._version = this._version + 1;
  return true;
};
prototype["getPaginationState"] = function getPaginationState() {
  return this._paginationState;
};
prototype["updatePaginationToken"] = function updatePaginationToken(continuationToken) {
  const self = this;
  let flag = continuationToken !== this._paginationState.continuationToken;
  if (flag) {
    const obj = {};
    const merged = Object.assign(self._paginationState);
    obj.continuationToken = continuationToken;
    self._paginationState = obj;
    flag = true;
  }
  return flag;
};
prototype["_calculateNewPageFromPageSizeChange"] = function _calculateNewPageFromPageSizeChange(pageSize, currentPage) {
  pageSize = this._paginationState.pageSize;
  let num = 1;
  if (pageSize * pageSize <= this._sortedMemberIds.length) {
    let tmp2 = currentPage;
    const result = pageSize / pageSize;
    if (currentPage == null) {
      tmp2 = tmp;
    }
    num = Math.max(Math.ceil(result * tmp2), 1);
  }
  return num;
};
prototype["updatePaginationState"] = function updatePaginationState(pageSize) {
  const self = this;
  let flag = false;
  if (tmp) {
    pageSize = pageSize.pageSize;
    if (pageSize == null) {
      pageSize = self._paginationState.pageSize;
    }
    pageSize.currentPage = self._calculateNewPageFromPageSizeChange(pageSize, pageSize.currentPage);
    flag = true;
  }
  const merged = Object.assign(self._paginationState);
  const merged1 = Object.assign(pageSize);
  self._paginationState = {};
  if (flag) {
    const result = self._rebuildPaginationChunksFromStoredMembers();
  }
  items = [true, flag];
  return items;
};
prototype["updateSortedMembers"] = function updateSortedMembers(_members) {
  [this._sortedMemberIds, this._cachedPaginationChunks] = callback(this._initPaginationFromRawMembers(_members), 2);
  this._version = this._version + 1;
  return true;
};
prototype["updateSortedMembersByUserIds"] = function updateSortedMembersByUserIds(_sortedMemberIds) {
  this._sortedMemberIds = _sortedMemberIds;
  const result = this._rebuildPaginationChunksFromStoredMembers();
  return true;
};
prototype["_findMember"] = function _findMember(arg0) {
  let BACKWARD = arg1;
  if (arg1 === undefined) {
    BACKWARD = constants.BACKWARD;
  }
  const self = this;
  let diff = arg0;
  if (arg0 < this._sortedMemberIds.length) {
    diff = self._sortedMemberIds.length - 1;
  }
  const member = store.getMember(self.guildId, self._sortedMemberIds[arg0]);
  let tmp4 = member;
  if (null == member) {
    let sum = arg0 + BACKWARD;
    tmp4 = member;
    if (sum >= 0) {
      tmp4 = member;
      if (sum < self._sortedMemberIds.length) {
        while (true) {
          let tmp5 = store;
          let member1 = store.getMember(self.guildId, self._sortedMemberIds[sum]);
          let tmp7 = sum;
          let joinedAt;
          if (member1 != null) {
            joinedAt = member1.joinedAt;
          }
          if (null == joinedAt) {
            member1 = null;
          }
          tmp4 = member1;
          if (null != member1) {
            break;
          } else {
            let sum1 = sum + BACKWARD;
            tmp4 = member1;
            if (sum1 < 0) {
              break;
            } else {
              tmp4 = member1;
              sum = sum1;
              if (sum1 >= self._sortedMemberIds.length) {
                break;
              }
            }
          }
        }
      }
    }
  }
  return tmp4;
};
prototype["getElasticSearchPagination"] = function getElasticSearchPagination() {
  return this.getPaginationState().elasticSearchCursor;
};
Object.defineProperty(prototype, "paginatedMembers", {
  get: function paginatedMembers() {
    return this._cachedPaginationChunks;
  },
  set: undefined
});
Object.defineProperty(prototype, "version", {
  get: function version() {
    return this._version;
  },
  set: undefined
});

export const PAGINATION_PAGE_SIZE_OPTIONS = items;
export const MAX_VISIBLE_PAGES = 7;
export const MAX_FORWARD_PAGE_SKIP = 5;
export const DEFAULT_SEARCH_CHUNK_LIMIT = 250;
export const createDefaultMemberSafetyPaginationState = function createDefaultMemberSafetyPaginationState() {
  return { pageSize: items[0], currentPage: 1, continuationToken: null, sort: result2.OrderBy.ORDER_BY_UNSPECIFIED, elasticSearchCursor: null };
};
export const getSearchChunkLimit = function getSearchChunkLimit(paginationState) {
  return Math.max(5 * paginationState.pageSize, 250);
};
export { GuildMemberSafetyPagination };