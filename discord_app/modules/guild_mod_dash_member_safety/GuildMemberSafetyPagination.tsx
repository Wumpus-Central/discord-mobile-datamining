// === Module 7035: GuildMemberSafetyPagination ===

// Module 7035 (GuildMemberSafetyPagination)
import MemberSafetyElasticSearchQueryTypes from "MemberSafetyElasticSearchQueryTypes" /* 7006 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import size from "module_2" /* 2 */;

let items = [12, 25, 50, 100];
const hasOwnProperty = { FORWARD: 1, [1]: "FORWARD", BACKWARD: -1, [-1]: "BACKWARD" };
let result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetyPagination.tsx");
class GuildMemberSafetyPagination {
  constructor(guildId, _members) {
    const obj = Object.create(new.target.prototype);
    obj._reduceMemberIdsToPaginationChunks = function _reduceMemberIdsToPaginationChunks(acc, userId, index) {
      const sum = Math.floor(index / obj._paginationState.pageSize) + 1;
      if (null == acc[sum]) {
        acc[sum] = [];
      }
      const arr = acc[sum];
      arr.push(userId);
      return acc;
    };
    obj.guildId = guildId;
    obj._paginationState = { pageSize: items[0], currentPage: 1, continuationToken: null, sort: MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_UNSPECIFIED, elasticSearchCursor: null };
    obj._version = 0;
    ({ pageSize: items[0], currentPage: 1, continuationToken: null, sort: MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_UNSPECIFIED, elasticSearchCursor: null });
    [obj._sortedMemberIds, obj._cachedPaginationChunks] = obj._initPaginationFromRawMembers(_members);
    obj._version = obj._version + 1;
    _slicedToArray(obj._initPaginationFromRawMembers(_members), 2);
    return obj;
  }
  reset() {
    this._paginationState = { pageSize: items[0], currentPage: 1, continuationToken: null, sort: MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_UNSPECIFIED, elasticSearchCursor: null };
    this._sortedMemberIds = [];
    this._cachedPaginationChunks = {};
    this._version = this._version + 1;
    ({ pageSize: items[0], currentPage: 1, continuationToken: null, sort: MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_UNSPECIFIED, elasticSearchCursor: null });
  }
  isMemberOnCurrentPage(arg0) {
    items = this._cachedPaginationChunks[this._paginationState.currentPage];
    if (items == null) {
      items = [];
    }
    return items.includes(arg0);
  }
  isMemberInAnyChunk(id) {
    const _sortedMemberIds = this._sortedMemberIds;
    return _sortedMemberIds.includes(id);
  }
  _initPaginationFromRawMembers(arr) {
    const self = this;
    items = [];
    const items1 = [
      items,
      arr.reduce((acc, userId, index) => {
        const result = self._reduceMemberIdsToPaginationChunks(acc, userId.userId, index);
        items.push(userId.userId);
        return result;
      }, {})
    ];
    return items1;
  }
  _buildPaginationFromMemberIds(_sortedMemberIds) {
    return _sortedMemberIds.reduce(this._reduceMemberIdsToPaginationChunks, {});
  }
  _rebuildPaginationChunksFromStoredMembers() {
    this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds);
    this._version = this._version + 1;
    return true;
  }
  getPaginationState() {
    return this._paginationState;
  }
  updatePaginationToken(continuationToken) {
    const self = this;
    let flag = continuationToken !== this._paginationState.continuationToken;
    if (flag) {
      const obj = { continuationToken };
      const merged = Object.assign(self._paginationState);
      self._paginationState = obj;
      flag = true;
    }
    return flag;
  }
  _calculateNewPageFromPageSizeChange(pageSize, currentPage) {
    pageSize = this._paginationState.pageSize;
    let num = 1;
    if (pageSize * pageSize <= this._sortedMemberIds.length) {
      let tmp2 = currentPage;
      const _Math = Math;
      const _Math2 = Math;
      const result = pageSize / pageSize;
      if (currentPage == null) {
        tmp2 = tmp;
      }
      num = max(ceil(result * tmp2), 1);
    }
    return num;
  }
  updatePaginationState(pageSize) {
    const self = this;
    let flag = false;
    const tmp = null != pageSize.pageSize && pageSize.pageSize !== self._paginationState.pageSize;
    if (tmp) {
      pageSize = pageSize.pageSize;
      const _calculateNewPageFromPageSizeChange = self._calculateNewPageFromPageSizeChange;
      if (pageSize == null) {
        pageSize = self._paginationState.pageSize;
      }
      pageSize.currentPage = _calculateNewPageFromPageSizeChange(pageSize, pageSize.currentPage);
      flag = true;
    }
    const obj = {};
    const merged = Object.assign(self._paginationState);
    const merged1 = Object.assign(pageSize);
    self._paginationState = obj;
    if (flag) {
      const result = self._rebuildPaginationChunksFromStoredMembers();
    }
    items = [true, flag];
    return items;
  }
  updateSortedMembers(arr) {
    [this._sortedMemberIds, this._cachedPaginationChunks] = this._initPaginationFromRawMembers(arr);
    this._version = this._version + 1;
    _slicedToArray(this._initPaginationFromRawMembers(arr), 2);
    return true;
  }
  updateSortedMembersByUserIds(_sortedMemberIds) {
    this._sortedMemberIds = _sortedMemberIds;
    const result = this._rebuildPaginationChunksFromStoredMembers();
    return true;
  }
  _findMember(arg0) {
    let BACKWARD = arg1;
    if (arg1 === undefined) {
      BACKWARD = constants.BACKWARD;
    }
    const self = this;
    let diff = arg0;
    if (arg0 < this._sortedMemberIds.length) {
      diff = self._sortedMemberIds.length - 1;
    }
    const member = GuildMemberStore.getMember(self.guildId, self._sortedMemberIds[arg0]);
    let tmp4 = member;
    if (null == member) {
      let sum = arg0 + BACKWARD;
      tmp4 = member;
      if (sum >= 0) {
        tmp4 = member;
        if (sum < self._sortedMemberIds.length) {
          while (true) {
            let member1 = GuildMemberStore.getMember(self.guildId, self._sortedMemberIds[sum]);
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
  }
  getElasticSearchPagination() {
    return this.getPaginationState().elasticSearchCursor;
  }
}
const prototype = GuildMemberSafetyPagination.prototype;
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
  const obj = { pageSize: items[0], currentPage: 1, continuationToken: null, sort: MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_UNSPECIFIED, elasticSearchCursor: null };
  return obj;
};
export const getSearchChunkLimit = function getSearchChunkLimit(paginationState) {
  return Math.max(5 * paginationState.pageSize, 250);
};
export { GuildMemberSafetyPagination };