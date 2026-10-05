// discord_app/modules/search/SearchMessageStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import ReactionUtils from "../reactions/ReactionUtils.tsx";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import V6OrEarlierAPIError from "../../errors/index.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

function handleReaction(reactionType) {
  let channelId;
  let emoji;
  let messageId;
  let type;
  let userId;
  ({ messageId, emoji } = reactionType);
  ({ type, userId, channelId } = reactionType);
  const obj = ReactionUtils;
  if (obj.shouldApplyReaction(reactionType)) {
    let type2;
    const id = AuthenticationStore.getId();
    const basicChannel = ChannelStore.getBasicChannel(channelId);
    if (basicChannel != null) {
      type2 = basicChannel.type;
    }
    const DM = ChannelTypes.DM;
    const value = map1.get(messageId);
    let flag2 = false;
    if (null != value) {
      let addReactionResult;
      reactionType = reactionType.reactionType;
      if ("MESSAGE_REACTION_ADD" === type) {
        const obj2 = { colors: reactionType.colors, reactionType, isDMChannel: type2 === DM };
        addReactionResult = value.addReaction(emoji, tmp8, obj2);
      } else {
        addReactionResult = value.removeReaction(emoji, tmp8, reactionType);
      }
      const result = map1.set(messageId, addReactionResult);
      flag2 = true;
    }
    return flag2;
  } else {
    return false;
  }
}
const ChannelTypes = Constants.ChannelTypes;
class SearchState {
  constructor() {
    const merged = Object.assign({
      isIndexing: false,
      isHistoricalIndexing: false,
      isFetching: false,
      analyticsId: null,
      error: null,
      messages: null,
      documentsIndexed: 0,
      totalResults: null,
      messageIds: null,
      isInitialFetchComplete: false,
      cursor: null,
    });
    merged[8] = new Set();
    new Set();
    return merged;
  }
  handleSearchStart() {
    this.isFetching = true;
    this.isIndexing = false;
    this.analyticsId = null;
    this.error = null;
  }
  handleSearchIndexing() {
    this.isInitialFetchComplete = true;
    this.isIndexing = true;
    this.isHistoricalIndexing = true;
    this.isFetching = false;
    this.error = null;
  }
  handleSearchFailure(arg0) {
    this.isFetching = false;
    this.isIndexing = false;
    this.isInitialFetchComplete = true;
    this.isHistoricalIndexing = false;
    const aPIError = new V6OrEarlierAPIError.APIError(arg0);
    this.error = aPIError;
    this.analyticsId = null;
    this.documentsIndexed = 0;
  }
  handleSearchSuccess(analyticsId, arr) {
    const self = this;
    let items;
    let items1;
    this.analyticsId = analyticsId.analyticsId;
    this.isFetching = false;
    this.isIndexing = false;
    this.isInitialFetchComplete = true;
    this.isHistoricalIndexing = analyticsId.doingHistoricalIndex;
    this.error = null;
    ({ documentsIndexed: this.documentsIndexed, cursor: this.cursor } = analyticsId);
    let messages = this.messages;
    const totalResults = analyticsId.totalResults;
    if (messages == null) {
      messages = [];
    }
    items = [...messages];
    items1 = [];
    const item = arr.forEach((id) => {
      const messageIds = self.messageIds;
      const hasItem = messageIds.has(id.id) || RelationshipStore.isBlockedOrIgnoredForMessage(id);
      if (!hasItem) {
        const messageIds2 = self.messageIds;
        messageIds2.add(id.id);
        items.push(id);
        items1.push(id);
      }
    });
    self.messages = items;
    self.totalResults = totalResults;
    return items1;
  }
}
const prototype = SearchState.prototype;
let map = new Map();
let map1 = new Map();
let map2 = new Map();
const Store = get_initializedDefault.Store;
class SearchMessageStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelStore, RelationshipStore);
  }
  getMessage(arg0) {
    return map1.get(arg0);
  }
  getTotalCount(searchTabFetchId) {
    let value = map.get(searchTabFetchId);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({
          isIndexing: false,
          isHistoricalIndexing: false,
          isFetching: false,
          analyticsId: null,
          error: null,
          messages: null,
          documentsIndexed: 0,
          totalResults: null,
          messageIds: null,
          isInitialFetchComplete: false,
          cursor: null,
        });
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        merged[8] = new Set();
        value = merged;
        set = new Set();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return value.totalResults;
  }
  getIsInitialFetchComplete(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({
          isIndexing: false,
          isHistoricalIndexing: false,
          isFetching: false,
          analyticsId: null,
          error: null,
          messages: null,
          documentsIndexed: 0,
          totalResults: null,
          messageIds: null,
          isInitialFetchComplete: false,
          cursor: null,
        });
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        merged[8] = new Set();
        value = merged;
        set = new Set();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return value.isInitialFetchComplete;
  }
  getIsIndexing(searchTabFetchId) {
    let value = map.get(searchTabFetchId);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({
          isIndexing: false,
          isHistoricalIndexing: false,
          isFetching: false,
          analyticsId: null,
          error: null,
          messages: null,
          documentsIndexed: 0,
          totalResults: null,
          messageIds: null,
          isInitialFetchComplete: false,
          cursor: null,
        });
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        merged[8] = new Set();
        value = merged;
        set = new Set();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return value.isIndexing;
  }
  getIsHistoricalIndexing(searchTabFetchId) {
    let value = map.get(searchTabFetchId);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({
          isIndexing: false,
          isHistoricalIndexing: false,
          isFetching: false,
          analyticsId: null,
          error: null,
          messages: null,
          documentsIndexed: 0,
          totalResults: null,
          messageIds: null,
          isInitialFetchComplete: false,
          cursor: null,
        });
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        merged[8] = new Set();
        value = merged;
        set = new Set();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return value.isHistoricalIndexing;
  }
  getDocumentsIndexed(searchTabFetchId) {
    let value = map.get(searchTabFetchId);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({
          isIndexing: false,
          isHistoricalIndexing: false,
          isFetching: false,
          analyticsId: null,
          error: null,
          messages: null,
          documentsIndexed: 0,
          totalResults: null,
          messageIds: null,
          isInitialFetchComplete: false,
          cursor: null,
        });
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        merged[8] = new Set();
        value = merged;
        set = new Set();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return value.documentsIndexed;
  }
  getIsFetching(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({
          isIndexing: false,
          isHistoricalIndexing: false,
          isFetching: false,
          analyticsId: null,
          error: null,
          messages: null,
          documentsIndexed: 0,
          totalResults: null,
          messageIds: null,
          isInitialFetchComplete: false,
          cursor: null,
        });
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        merged[8] = new Set();
        value = merged;
        set = new Set();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return value.isFetching;
  }
  getError(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({
          isIndexing: false,
          isHistoricalIndexing: false,
          isFetching: false,
          analyticsId: null,
          error: null,
          messages: null,
          documentsIndexed: 0,
          totalResults: null,
          messageIds: null,
          isInitialFetchComplete: false,
          cursor: null,
        });
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        merged[8] = new Set();
        value = merged;
        set = new Set();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return value.error;
  }
  getMessages(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({
          isIndexing: false,
          isHistoricalIndexing: false,
          isFetching: false,
          analyticsId: null,
          error: null,
          messages: null,
          documentsIndexed: 0,
          totalResults: null,
          messageIds: null,
          isInitialFetchComplete: false,
          cursor: null,
        });
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        merged[8] = new Set();
        value = merged;
        set = new Set();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return value.messages;
  }
  getCursor(searchTabFetchId) {
    let value = map.get(searchTabFetchId);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({
          isIndexing: false,
          isHistoricalIndexing: false,
          isFetching: false,
          analyticsId: null,
          error: null,
          messages: null,
          documentsIndexed: 0,
          totalResults: null,
          messageIds: null,
          isInitialFetchComplete: false,
          cursor: null,
        });
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        merged[8] = new Set();
        value = merged;
        set = new Set();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return value.cursor;
  }
  getAnalyticsId(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      const self = this;
      if (typeof SearchState === "function") {
        const merged = Object.assign({
          isIndexing: false,
          isHistoricalIndexing: false,
          isFetching: false,
          analyticsId: null,
          error: null,
          messages: null,
          documentsIndexed: 0,
          totalResults: null,
          messageIds: null,
          isInitialFetchComplete: false,
          cursor: null,
        });
        const _Set = Set;
        const self2 = this;
        const self3 = this;
        merged[8] = new Set();
        value = merged;
        set = new Set();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return value.analyticsId;
  }
  hasSearchState(searchContextId) {
    return map.has(searchContextId);
  }
}
const prototype2 = SearchMessageStore.prototype;
SearchMessageStore.displayName = "SearchMessageStore";
let obj = {
  SEARCH_MESSAGES_START: function handleSearchMessagesStart(ids) {
    ids = ids.ids;
    const item = ids.forEach(function (item) {
      let value = map.get(item);
      if (value == null) {
        const self = this;
        if (typeof SearchState === "function") {
          const merged = Object.assign({
            isIndexing: false,
            isHistoricalIndexing: false,
            isFetching: false,
            analyticsId: null,
            error: null,
            messages: null,
            documentsIndexed: 0,
            totalResults: null,
            messageIds: null,
            isInitialFetchComplete: false,
            cursor: null,
          });
          const _Set = Set;
          const self2 = this;
          const self3 = this;
          merged[8] = new Set();
          value = merged;
          set = new Set();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const result = map.set(item, value);
      value.handleSearchStart();
    });
  },
  SEARCH_MESSAGES_SUCCESS: function handleSearchMessagesSuccess(data) {
    data = data.data;
    let item = data.forEach(function (id) {
      id = id.id;
      let value = map.get(id);
      if (value == null) {
        const self = this;
        if (typeof SearchState === "function") {
          const merged = Object.assign({
            isIndexing: false,
            isHistoricalIndexing: false,
            isFetching: false,
            analyticsId: null,
            error: null,
            messages: null,
            documentsIndexed: 0,
            totalResults: null,
            messageIds: null,
            isInitialFetchComplete: false,
            cursor: null,
          });
          const _Set = Set;
          const self2 = this;
          const self3 = this;
          merged[8] = new Set();
          value = merged;
          set = new Set();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      let result = map.set(id, value);
      const messages = id.messages;
      const handleSearchSuccessResult = value.handleSearchSuccess(
        id,
        messages.map((item) => {
          let tmp;
          [tmp] = item;
          const obj = closure_1_0(closure_1_1[5]);
          return obj.createMessageRecord(tmp);
        }),
      );
      const item = handleSearchSuccessResult.forEach((id) => {
        const result = closure_1_8.set(id.id, id);
        let num = closure_1_9.get(id.id);
        if (num == null) {
          num = 0;
        }
        const result1 = closure_1_9.set(id.id, num + 1);
      });
    });
  },
  SEARCH_MESSAGES_INDEXING: function handleSearchMessagesIndexing(ids) {
    ids = ids.ids;
    const item = ids.forEach(function (item) {
      let value = map.get(item);
      if (value == null) {
        const self = this;
        if (typeof SearchState === "function") {
          const merged = Object.assign({
            isIndexing: false,
            isHistoricalIndexing: false,
            isFetching: false,
            analyticsId: null,
            error: null,
            messages: null,
            documentsIndexed: 0,
            totalResults: null,
            messageIds: null,
            isInitialFetchComplete: false,
            cursor: null,
          });
          const _Set = Set;
          const self2 = this;
          const self3 = this;
          merged[8] = new Set();
          value = merged;
          set = new Set();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const result = map.set(item, value);
      value.handleSearchIndexing();
    });
  },
  SEARCH_MESSAGES_FAILURE: function handleSearchMessagesFailure(ids) {
    ids = ids.ids;
    const item = ids.forEach(function (item) {
      let value = map.get(item);
      if (value == null) {
        const self = this;
        if (typeof SearchState === "function") {
          const merged = Object.assign({
            isIndexing: false,
            isHistoricalIndexing: false,
            isFetching: false,
            analyticsId: null,
            error: null,
            messages: null,
            documentsIndexed: 0,
            totalResults: null,
            messageIds: null,
            isInitialFetchComplete: false,
            cursor: null,
          });
          const _Set = Set;
          const self2 = this;
          const self3 = this;
          merged[8] = new Set();
          value = merged;
          set = new Set();
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const result = map.set(item, value);
      value.handleSearchFailure(ids.error);
    });
  },
  SEARCH_MESSAGES_CLEAR: function handleSearchMessagesClear(id) {
    const value = map.get(id.id);
    if (null == value) {
      return false;
    } else {
      const messageIds = value.messageIds;
      const item = messageIds.forEach((item) => {
        let num = map2.get(item);
        if (num == null) {
          num = 0;
        }
        if (num <= 1) {
          set.delete(item);
          map2.delete(item);
        } else {
          const result = map2.set(item, num - 1);
        }
      });
      map.delete(id.id);
    }
  },
  SEARCH_MESSAGES_CLEAR_ALL: function handleSearchMessagesClearAll() {
    map = new Map();
    map1 = new Map();
    map2 = new Map();
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    if (null == id) {
      return false;
    } else {
      const value = map1.get(id);
      if (null == value) {
        return false;
      } else {
        const obj = MessageRecordUtils;
        const result = map1.set(id, obj.updateMessageRecord(value, message.message));
      }
    }
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(messageId) {
    messageId = messageId.messageId;
    const reactions = messageId.reactions;
    const id = AuthenticationStore.getId();
    const value = map1.get(messageId);
    let flag = false;
    if (null != value) {
      const result = map1.set(messageId, value.addReactionBatch(reactions, id));
      flag = true;
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(messageId) {
    messageId = messageId.messageId;
    const value = map1.get(messageId);
    let flag = false;
    if (null != value) {
      const result = map1.set(messageId, value.set("reactions", []));
      flag = true;
    }
    return flag;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(messageId) {
    messageId = messageId.messageId;
    const emoji = messageId.emoji;
    const value = map1.get(messageId);
    let flag = false;
    if (null != value) {
      const result = map1.set(messageId, value.removeReactionsForEmoji(emoji));
      flag = true;
    }
    return flag;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    map = new Map();
    map1 = new Map();
    map2 = new Map();
  },
};
const searchMessageStore = new SearchMessageStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/search/SearchMessageStore.tsx");

export default searchMessageStore;
